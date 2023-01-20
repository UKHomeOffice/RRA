'use strict';

const config = require('../../../config');

module.exports = conf => {
  const {
    emailDomainList,
    emailExtensions
  } = conf;

  return superclass => class extends superclass {
    isOnDomainList(userEmailDomain) {
      return emailDomainList.includes(userEmailDomain);
    }

    isOnExtensionsList(userExtension) {
      return emailExtensions.some(ext => userExtension.endsWith(ext));
    }

    isValidDomain(domain) {
      const lowercaseDomain = domain.toLowerCase();
      if (emailDomainList && emailExtensions) {
        return this.isOnDomainList(lowercaseDomain) || this.isOnExtensionsList(lowercaseDomain);
      } else if (emailDomainList) {
        return this.isOnDomainList(lowercaseDomain);
      } else {
        return this.isOnExtensionsList(lowercaseDomain);
      }
    }

    skipEmailVerification(email) {
      return config.login.allowSkip && email === config.login.skipEmail;
    }

    validate(req, res, next) {
      const email = req.form.values['user-email'];

      if (this.skipEmailVerification(email)) {
        return super.validate(req, res, next);
      }

      const emailDomain = email.replace(/.*@/, '');

      if (emailDomainList || emailExtensions) {
        const isRecognisedEmail = this.isValidDomain(emailDomain);

        if (!isRecognisedEmail) {
          return next({
            'user-email': new this.ValidationError('user-email', {
              key: 'user-email',
              type: 'invalid'
            })
          });
        }
      }

      return super.validate(req, res, next);
    }
  };
};
