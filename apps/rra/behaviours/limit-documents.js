module.exports = superclass => class extends superclass {
  validate(req, res, next) {
    const images = req.sessionModel.get('images');
    if (images && images.length > 6) {
      return next({
        'supporting-documents-upload-more': new this.ValidationError(
          'supporting-documents-upload-more',
          {
            type: 'tooMany'
          }
        )
      });
    } super.validate(req, res, next);
    return next;
  }
};
