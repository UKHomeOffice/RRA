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
    subject = 'RRA - ' + data.name + ' - ' + data.grouping + ' - ' + data.levels + ' - 1st App';

    return notifyClient.sendEmail(config.email.notifyTemplate, config.email.caseworker, {
      personalisation: {
        subject: subject,
        name: data.name,
        number: data.employmentNumber,
        portfolio: data.function,
        email: data['user-email'],
        role: data.role,
        grouping: data.grouping,
        grade: data.grade,
        level: data.levels,
        skill1: data.skill1,
        skill1Score: data.scores1,
        skill1Evidence: data.evidence1,
        skill2: data.skill2,
        skill2Score: data.scores2,
        skill2Evidence: data.evidence2,
        skill3: data.skill3,
        skill3Score: data.scores3,
        skill3Evidence: data.evidence3,
        skill4: data.skill4,
        skill4Score: data.scores4,
        skill4Evidence: data.evidence4,
        skill5: data.skill5,
        skill5Score: data.scores5,
        skill5Evidence: data.evidence5,
        skill6: data.skill6,
        skill6Score: data.scores6,
        skill6Evidence: data.evidence6,
        qualifications: data.qualifications,
        supportingDocuments: document,
        formId: 'tests'
      },
      reference
    });
  }
  subject = 'RRA - ' + data.name + ' - ' + data.higherGrouping + ' - ' + data.higherLevels + ' - Higher Rate';

  return notifyClient.sendEmail(config.email.notifyHigherTemplate, config.email.caseworker, {
    personalisation: {
      subject: subject,
      name: data.name,
      number: data.employmentNumber,
      portfolio: data.function,
      email: data['user-email'],
      role: data.higherRole,
      grouping: data.higherGrouping,
      grade: data.higherGrade,
      currentLevel: data.currentLevel,
      lastAssessmentDate: data.lastAssessmentDate,
      previousScore: data.previousScore,
      level: data.higherLevels,
      higherSkill1: data.higherSkill1,
      higherSkill1Score: data.higherScores1,
      higherSkill1Evidence: data.higherEvidence1,
      higherSkill2: data.higherSkill2,
      higherSkill2Score: data.higherScores2,
      higherSkill2Evidence: data.higherEvidence2,
      higherSkill3: data.higherSkill3,
      higherSkill3Score: data.higherScores3,
      higherSkill3Evidence: data.higherEvidence3,
      higherSkill4: data.higherSkill4,
      higherSkill4Score: data.higherScores4,
      higherSkill4Evidence: data.higherEvidence4,
      higherSkill5: data.higherSkill5,
      higherSkill5Score: data.higherScores5,
      higherSkill5Evidence: data.higherEvidence5,
      higherSkill6: data.higherSkill6,
      higherSkill6Score: data.higherScores6,
      higherSkill6Evidence: data.higherEvidence6,
      professionalDev: data.cpdDescription,
      supportingDocuments: document
    },
    reference
  });
};

module.exports = {
  sendEmail
};
