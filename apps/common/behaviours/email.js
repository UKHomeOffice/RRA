/* eslint-disable consistent-return */
'use strict';

const _ = require('lodash');
const StatsD = require('hot-shots');
const client = new StatsD();
const Model = require('../models/email');

function emailSubject(data) {
  if (data.appliedBefore === 'yes') {
    subject = 'RRA - ' + data.name + ' - ' + data.grouping + ' - ' + data.levels + ' - Higher Rate';
  } else{
    subject = 'RRA - ' + data.name + ' - ' + data.grouping + ' - ' + data.levels + ' - 1st App';
  }
  return subject;
}
const serviceMap = {
  '/rra': data => {
    return {
      template: 'delivery',

      subject: emailSubject(data)
    };
  }
};

module.exports = superclass => class Emailer extends superclass {
  saveValues(req, res, callback) {
    super.saveValues(req, res, () => {
      const data = _.pick(req.sessionModel.toJSON(), _.identity);
      const service = serviceMap[req.baseUrl] && serviceMap[req.baseUrl](data);

      if (!service) {
        return callback(new Error('no service found'));
      }

      const model = new Model(data);
      model.set('template', service.template);
      model.set('subject', service.subject);
      client.increment('rra.' + service.template + '.submission');
      model.save(callback);
    });
  }
  errorChecked;
  checkedErrors;
};
