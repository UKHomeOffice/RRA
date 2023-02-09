'use strict';

const moment = require('moment');
const request = require('request');
const config = require('../../../config');
const baseUrl = config.saveService.host + ':' + config.saveService.port + '/reports/';

const encodeEmail = email => Buffer.from(email).toString('hex');

module.exports = superclass => class extends superclass {
  cleanSession(req) {
    let cleanList = Object.keys(req.sessionModel.attributes);
    const keepList = ['user-email', 'user-organisation', 'csrf-secret'];

    cleanList = cleanList.filter(item => keepList.indexOf(item) === -1);

    req.sessionModel.unset(cleanList);
    req.sessionModel.set('steps', ['/start', '/reports']);
  }

  getValues(req, res, next) {
    const id = req.query.id;

    if (!id) {
      return res.redirect('/rra/reports');
    }

    this.cleanSession(req);

    const getUrl = baseUrl + encodeEmail(req.sessionModel.get('user-email')) + '/' + id;

    return request.get(getUrl, (error, response, body) => {
      if (error) {
        return next(error);
      }
      const resBody = JSON.parse(body);

      if (resBody && resBody.length && resBody[0].session) {
        const session = typeof resBody[0].session === 'string' ?
          JSON.parse(resBody[0].session) :
          resBody[0].session;

        if (session.hasOwnProperty('alertUser')) {
          delete session.alertUser;
        }

        delete session['csrf-secret'];
        delete session.errors;

        // ensure no /edit steps are add to the steps property when session resumed
        session.steps = session.steps.filter(step => !step.match(/\/change|edit$/));

        const createdAt = resBody[0].created_at;
        const submitBy = moment(createdAt)
          .add(config.reports.submitTimeout, 'days')
          .endOf('day')
          .format('DD MMMM YYYY');

        req.sessionModel.set('report-created-at', resBody[0].created_at);
        req.sessionModel.set('report-submit-by', submitBy);
        req.sessionModel.set(session);
        req.sessionModel.set('id', id);
        req.sessionModel.set('redirect-to-reports', true);
      }

      return super.getValues(req, res, next);
    });
  }

  saveValues(req, res, next) {
    super.saveValues(req, res, err => {
      if (err) {
        next(err);
      }
      req.sessionModel.set('redirect-to-reports', false);

      // steps in the session fall out of sync when changed from the current progress report page
      // this reorders them to ensure the user jumps to the last step they filled out
      const sessionSteps = req.sessionModel.get('steps');
      const formSteps = Object.keys(req.form.options.steps);
      const orderedSessionSteps = formSteps.filter(step => sessionSteps.includes(step));
      const lastestStepInJourney = orderedSessionSteps.pop();

      return res.redirect(`/rra${lastestStepInJourney}`);
    });
  }
};
