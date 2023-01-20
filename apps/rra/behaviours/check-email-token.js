'use strict';

const getToken = require('../../../db/get-token');
const config = require('../../../config');

/* eslint no-process-env: 0*/
module.exports = superclass => class extends superclass {
  saveValues(req, res, next) {
    const token = req.query.token;
    const email = req.query.email || config.login.skipEmail;

    const skipEmailAuth = token === 'skip' && config.login.allowSkip && email;
    const validEmailToken = req.sessionModel.get('valid-token') === true;
    // skips if it goes to /tta/start?token=skip
    // skips if a session is already present.
    // skips if email params if provided /rra/start?token=skip&email=s@
    if (skipEmailAuth || validEmailToken) {
      req.sessionModel.set('user-email', email);
      return super.saveValues(req, res, next);
    }
    // returns a Promise
    return getToken.read(token)
      .then(user => {
        if (user.valid) {
          // delete the token once it's been used
          getToken.delete(token);
          // this is so a user can go back without requesting a new token
          req.sessionModel.set('valid-token', true);
          // store email & org to send to caseworker later
          req.sessionModel.set('user-email', user.email);
          return super.saveValues(req, res, next);
        }
        return res.redirect(config.login.invalidTokenPath);
      })
      .catch(err => req.log('info', `Check Token Error: ${err}`));
  }
};
