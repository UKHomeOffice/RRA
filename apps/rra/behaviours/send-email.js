'use strict';

const utils = require('../lib/utils');
const uuid = require('uuid');

module.exports = superclass => class Submit extends superclass {
  saveValues(req, res, next) {
    const reference = uuid.v1();
    return utils.sendEmail(req.sessionModel.toJSON(), reference)
      .then(() => Submit.handleSuccess(req, next, reference, true))
      .catch(err => Submit.handleError(req, next, reference, err, true));
  }
  static handleSuccess(req, next, reference, shouldLog) {
    if (shouldLog) {
      req.log('info', 'Email sent to RRA address', `reference=${reference}`);
    }
    return next();
  }

  static handleError(req, next, reference, err, shouldLog) {
    console.log('ERRORS ' + JSON.stringify(err.response.data.errors))
    if (shouldLog) {
      console.log('ERROR ' + JSON.stringify(err.response.data.errors[0]))
      req.log('error', 'Error sending email to RRA address', `reference=${reference}`, err);
      req.log('error', 'Error sending email to RRA address', `reference=${reference}`, err.response.data.errors[0]);
    }
    err.formNotSubmitted = true;
    return next(err);
  }
};
