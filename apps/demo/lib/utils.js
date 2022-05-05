'use strict';

const config = require('../../../config');
const apiKey = config.email.notifyApiKey;
const NotifyClient = require('notifications-node-client').NotifyClient;
const notifyClient = new NotifyClient(apiKey);

const sendEmail = (data, reference) => {
  const subject = 'RRA - ' + data.rraName + ' - ' + data.rraGrouping + ' - '  + data.rraLevels + ' - 1st App';
  return notifyClient.sendEmail(config.email.notifyTemplate, config.email.caseworker, {
    personalisation: {
      subject: subject,
      name: data.rraName,
      number: data.rraAdelphiNumber,
      portfolio: data.rraFunction,
      email: data.rraEmail,
      appliedBefore: data.appliedBefore,
      role: data.rraRole,
      grouping: data.rraGrouping,
      grade: data.rraGrade,
      level: data.rraLevels,
      sfiaSkill1: data.sfiaSkill1,
      skill1Score: data.rraScores,
      skill1Evidence: data.rraEvidence,
      sfiaSkill2: data.sfiaSkill2,
      skill2Score: data.rraScores2,
      skill2Evidence: data.rraEvidence2
    },
    reference
  });
};

module.exports = {
  sendEmail
};
