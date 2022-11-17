'use strict';

const emailService = require('../../../services/email');
const Model = require('hof').model;
const _ = require('lodash');

module.exports = class Email extends Model {
  save(callback) {
    // we omit keys that are not part of the session data
    emailService.send({
      template: this.get('template'),
      to: this.get('email'),
      subject: this.get('subject'),
      dataToSend: _.omit(this.toJSON(), ['steps', 'csrf-secret', 'template'])
    }, callback);
  }
};
