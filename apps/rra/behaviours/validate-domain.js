const emailDomainCheck = require('../../../rra-lists/email_domains');

module.exports = SuperClass => class extends SuperClass {
  validate(req, res, next) {
    const managerEmail = req.form.values.managerEmail;
    const emailDomain = managerEmail.replace(/.*@/, '');

    const isRecognisedEmail = emailDomainCheck.isValidDomain(emailDomain);
    if (!isRecognisedEmail) {
      return next({
        managerEmail: new this.ValidationError(
          'managerEmail',
          {
            type: 'invalidDomain'
          }
        )
      });
    } super.validate(req, res, next);
    return next;
  }
};
