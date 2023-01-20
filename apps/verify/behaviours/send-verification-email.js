'use strict';

const config = require('../../../config');
const notifyApiKey = config.email.notifyApiKey;
const NotifyClient = require('notifications-node-client').NotifyClient;
const notifyClient = new NotifyClient(notifyApiKey);
const templateId = config.email.userAuthTemplateId;
const tokenGenerator = require('../../../db/save-token');
const _ = require('lodash');

const getPersonalisation = (host, token) => {
  return {
    // pass in `&` at the end in case there is another
    // query e.g. ?hof-cookie-check
    subject: 'RRA User Log On',
    link: `http://${host + config.login.appPath}?token=${token}&`,
    time_limit: '30',
    host: `http://${host}`,
  };
};

module.exports = superclass => class extends superclass {
  skipEmailVerification(email) {
    return config.login.allowSkip && email === config.login.skipEmail;
  }

  getNextStep(req, res) {
    const email = req.form.values['user-email'];

    if (this.skipEmailVerification(email)) {
      return res.redirect(`${config.login.appPath}?token=skip`);
    }

    return super.getNextStep(req, res);
  }

  async saveValues(req, res, next) {
    const host = req.get('host');
    const email = req.form.values['user-email'];
    const organisation = req.sessionModel.get('user-organisation');

    if (this.skipEmailVerification(email)) {
      return super.saveValues(req, res, next);
    }

    const token = tokenGenerator.save(email, organisation);

    try {
      await notifyClient.sendEmail(templateId, email, {
        personalisation: getPersonalisation(host, token)
      });
    } catch (e) {
      const err = _.get(e, 'response.data.errors[0].message', e);
      const msg = 'Can’t send to this recipient using a team-only API key';

      if (err === msg) {
        return res.redirect('/verify/team-email-invalid');
      }
      return next(e);
    }

    return super.saveValues(req, res, next);
  }
};
