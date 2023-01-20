'use strict';

module.exports = {
  'user-email': {
    mixin: 'input-text',
    className: ['form-control form-control-3-4'],
    validate: ['required', 'email', {type: 'maxlength', arguments: [15000]}]
  },
  'confirm-email': {
    mixin: 'input-text',
    validate: ['required', 'email', {type: 'maxlength', arguments: [15000]}]
  }
};
