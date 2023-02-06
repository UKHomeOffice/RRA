module.exports = SuperClass => class extends SuperClass {
  validate(req, res, next) {
    const currentLevel = req.form.values.currentLevel;
    const applyingLevel = req.form.values.higherLevels;

    const sameLevel = currentLevel === applyingLevel;
    // eslint-disable-next-line max-len
    const lowerLevel = currentLevel === 'Expert' && applyingLevel === 'Practitioner' || currentLevel === 'Guru' && applyingLevel === 'Expert' || currentLevel === 'Guru' && applyingLevel === 'Practitioner';

    if (sameLevel || lowerLevel) {
      return next({
        higherLevels: new this.ValidationError(
          'levels',
          {
            type: 'notSameOrLower'
          }
        ),
        currentLevel: new this.ValidationError(
          'currentLevel',
          {
            type: 'notSameOrLower'
          }
        )
      });
    } super.validate(req, res, next);
    return next;
  }
};
