const emailDomainCheck = require('../../../rra-lists/email_domains');

module.exports = SuperClass => class extends SuperClass {
  validate(req, res, next) {
    const managerEmail = req.form.values.rraManagerEmail;
    const emailDomain = managerEmail.replace(/.*@/, '');

    const isRecognisedEmail = emailDomainCheck.isValidDomain(emailDomain);
    if (!isRecognisedEmail) {
      return next({
        rraManagerEmail: new this.ValidationError(
          'rraManagerEmail',
          {
            type: 'invalidDomain'
          }
        )
      });
    } super.validate(req, res, next);
    return next;
  }
};
