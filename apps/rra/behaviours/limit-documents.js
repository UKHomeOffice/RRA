module.exports = superclass => class extends superclass {
  validate(req, res, next) {
    const images = req.sessionModel.get('images');
    if (images && images.length > 6) {
      return next({
        supportingDocumentsUploadMore: new this.ValidationError(
          'supportingDocumentsUploadMore',
          {
            type: 'tooMany'
          }
        )
      });
    } super.validate(req, res, next);
    return next;
  }
};
