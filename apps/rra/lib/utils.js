'use strict';

const config = require('../../../config');
const apiKey = config.email.notifyApiKey;
const NotifyClient = require('notifications-node-client').NotifyClient;
const notifyClient = new NotifyClient(apiKey);

const sendEmail = (data, reference) => {
  let subject;
  let document;
  if (!data.images) {
    document = 'None given';
  } else {
    document = data.images.map(docs => { return docs.name; });
  }

  if (data.appliedBefore === 'no') {
    subject = 'RRA - ' + data.rraName + ' - ' + data.rraGrouping + ' - ' + data.rraLevels + ' - 1st App';

    return notifyClient.sendEmail(config.email.notifyTemplate, config.email.caseworker, {
      personalisation: {
        subject: subject,
        name: data.rraName,
        number: data.rraEmployeeNumber,
        portfolio: data.rraFunction,
        email: data.rraEmail,
        role: data.rraRole,
        grouping: data.rraGrouping,
        grade: data.rraGrade,
        level: data.rraLevels,
        skill1: data.rraSkill,
        skill1Score: data.rraScores,
        skill1Evidence: data.rraEvidence,
        skill2: data.rraSkill2,
        skill2Score: data.rraScores2,
        skill2Evidence: data.rraEvidence2,
        skill3: data.rraSkill3,
        skill3Score: data.rraScores3,
        skill3Evidence: data.rraEvidence3,
        skill4: data.rraSkill4,
        skill4Score: data.rraScores4,
        skill4Evidence: data.rraEvidence4,
        skill5: data.rraSkill5,
        skill5Score: data.rraScores5,
        skill5Evidence: data.rraEvidence5,
        skill6: data.rraSkill6,
        skill6Score: data.rraScores6,
        skill6Evidence: data.rraEvidence6,
        qualifications: data.qualifications,
        supportingDocuments: document,
        formId: 'tests'
      },
      reference
    });
  }
  subject = 'RRA - ' + data.rraName + ' - ' + data.higherRraGrouping + ' - ' + data.higherRraLevels + ' - Higher Rate';

  return notifyClient.sendEmail(config.email.notifyHigherTemplate, config.email.caseworker, {
    personalisation: {
      subject: subject,
      name: data.rraName,
      number: data.rraEmployeeNumber,
      portfolio: data.rraFunction,
      email: data.rraEmail,
      role: data.higherRraRole,
      grouping: data.higherRraGrouping,
      grade: data.higherRraGrade,
      currentLevel: data.currentRraLevel,
      lastAssessmentDate: data.lastAssessmentDate,
      previousScore: data.previousScore,
      level: data.higherRraLevels,
      higherSkill1: data.higherRraSkill,
      higherSkill1Score: data.higherRraScores,
      higherSkill1Evidence: data.higherRraEvidence,
      higherSkill2: data.higherRraSkill2,
      higherSkill2Score: data.higherRraScores2,
      higherSkill2Evidence: data.higherRraEvidence2,
      higherSkill3: data.higherRraSkill3,
      higherSkill3Score: data.higherRraScores3,
      higherSkill3Evidence: data.higherRraEvidence3,
      higherSkill4: data.higherRraSkill4,
      higherSkill4Score: data.higherRraScores4,
      higherSkill4Evidence: data.higherRraEvidence4,
      higherSkill5: data.higherRraSkill5,
      higherSkill5Score: data.higherRraScores5,
      higherSkill5Evidence: data.higherRraEvidence5,
      higherSkill6: data.higherRraSkill6,
      higherSkill6Score: data.higherRraScores6,
      higherSkill6Evidence: data.higherRraEvidence6,
      professionalDev: data.cpdDescription,
      supportingDocuments: document
    },
    reference
  });
};

module.exports = {
  sendEmail
};
