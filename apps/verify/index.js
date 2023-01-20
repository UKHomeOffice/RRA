'use strict';

const SendVerificationEmail = require('./behaviours/send-verification-email');
const VerifyEmailDomain = require('./behaviours/verify-email-domain');

module.exports = {
  name: 'verify',
  baseUrl: '/verify',
  steps: {
    '/who-do-you-work-for': {
      fields: ['user-email'],
      // VerifyEmailDomain(opts) can be used if an email domain list needs to be validated
      behaviours: [VerifyEmailDomain({
        emailDomainList: [
          'homeoffice.gov.uk',
          'digital.homeoffice.gov.uk'
        ]
      }), SendVerificationEmail],
      next: '/check-inbox'
    },
    '/check-inbox': {},
    '/team-email-invalid': {
      backLink: '/verify/who-do-you-work-for'
    }
  }
};
