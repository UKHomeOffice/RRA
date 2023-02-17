/* eslint-disable */
'use strict';

const SummaryPageBehaviour = require('hof').components.summary;
const EmailBehaviour = require('./behaviours/send-email');
const SkillBehaviour = require('./behaviours/skills');
const higherSkillBehaviour = require('./behaviours/higherSkills');
const saveImage = require('./behaviours/save-image');
const limitDocs = require('./behaviours/limit-documents');
const removeImage = require('./behaviours/remove-image');
const unsetValue = require('./behaviours/unset-value');
const checkDeviceType = require('./behaviours/check-device-type');
const checkAnswers = require('./behaviours/check-answers');
const resetJourneyToSubmit = require('./behaviours/reset-journey-to-submit');
const higherApp = require('./behaviours/higher-app');
const setAppType = require('./behaviours/set-app-type');
const validateHigherLevel = require('./behaviours/validate-higher');
const checkEmailToken = require('./behaviours/check-email-token');
const validateDomain = require('./behaviours/validate-domain');

module.exports = {
  name: 'rra',
  baseUrl: '/rra',
  pages: {
    '/token-invalid': 'token-invalid'
  },
  steps: {
    '/start': {
      behaviours: [
        checkEmailToken
      ],
      next: '/applied-before',
    },
    '/applied-before': {
      behaviours: [
        higherApp,
        resetJourneyToSubmit
      ],
      fields: ['appliedBefore'],
      next: '/personalDetails',
      continueOnEdit: true

    },
    '/personalDetails': {
      behaviours: [
        setAppType,
        resetJourneyToSubmit,
        validateDomain
      ],
      fields: ['name', 'employmentNumber','function', 'user-email', 'managerEmail'],
      forks: [{
        target: '/higherProfessionDetails',
        condition: req => {
          return req.sessionModel.get('appliedBefore') === 'yes' && req.sessionModel.get('higher-app');
        }
      }],
      next: '/professionDetails'
    },
    '/professionDetails': {
      fields: ['role', 'grouping', 'grade', 'levels'],
      next: '/skill1',
      continueOnEdit: true
    },
    '/skill1': {
      behaviours: [SkillBehaviour],
      fields: ['skill1', 'scores1', 'evidence1'],
      next: '/skill2',
      continueOnEdit: true
    },
    '/skill2': {
      behaviours: [SkillBehaviour],
      fields: ['skill2', 'scores2', 'evidence2'],
      next: '/skill3',
      continueOnEdit: true
    },
    '/skill3': {
      behaviours: [SkillBehaviour],
      fields: ['skill3', 'scores3', 'evidence3'],
      next: '/skill4',
      continueOnEdit: true
    },
    '/skill4': {
      behaviours: [SkillBehaviour],
      fields: ['skill4', 'scores4', 'evidence4'],
      next: '/skill5',
      continueOnEdit: true
    },
    '/skill5': {
      behaviours: [SkillBehaviour],
      fields: ['skill5', 'scores5', 'evidence5'],
      next: '/skill6',
      continueOnEdit: true
    },
    '/skill6': {
      behaviours: [SkillBehaviour],
      fields: ['skill6', 'scores6', 'evidence6'],
      next: '/qualifications'
    },
    '/qualifications': {
      fields: ['qualifications'],
      next: '/supporting-documents-upload'
    },
    '/higherProfessionDetails': {
      behaviours: [validateHigherLevel],
      fields: ['higherRole', 'higherGrouping', 'higherGrade','currentLevel', 'higherLevels'],
      next: '/lastAssessmentDate',
      continueOnEdit: true
    },
    '/lastAssessmentDate':{
      fields: ['lastAssessmentDate'],
      next: '/previousScore',
      continueOnEdit: true
    },
    '/previousScore': {
      fields: [ 'previousScore'],
      next: '/higherSkill1',
      continueOnEdit: true
    },
    '/higherSkill1': {
      behaviours: [higherSkillBehaviour],
      fields: ['higherSkill1', 'higherScores1', 'higherEvidence1'],
      next: '/higherSkill2',
      continueOnEdit: true
    },
    '/higherSkill2': {
      behaviours: [higherSkillBehaviour],
      fields: ['higherSkill2', 'higherScores2', 'higherEvidence2'],
      next: '/higherSkill3',
      continueOnEdit: true
    },
    '/higherSkill3': {
      behaviours: [higherSkillBehaviour],
      fields: ['higherSkill3', 'higherScores3', 'higherEvidence3'],
      next: '/higherSkill4',
      continueOnEdit: true
    },
    '/higherSkill4': {
      behaviours: [higherSkillBehaviour],
      fields: ['higherSkill4', 'higherScores4', 'higherEvidence4'],
      next: '/higherSkill5',
      continueOnEdit: true
    },
    '/higherSkill5': {
      behaviours: [higherSkillBehaviour],
      fields: ['higherSkill5', 'higherScores5', 'higherEvidence5'],
      next: '/higherSkill6',
      continueOnEdit: true
    },
    '/higherSkill6': {
      behaviours: [higherSkillBehaviour],
      fields: ['higherSkill6', 'higherScores6', 'higherEvidence6'],
      next: '/cpd'
    },
    '/cpd': {
      fields: ['cpdDescription'],
      continueOnEdit: true,
      next: '/supporting-documents-upload'
    },
    '/supporting-documents-upload': {
      behaviours: [saveImage('supporting-documents'), checkDeviceType],
      fields: [
        'supporting-documents',
        'supporting-documents-upload',
      ],
      forks: [
        {
          target: '/supporting-documents-upload-confirm',
          condition: {
            field: 'supporting-documents-upload',
            value: 'yes'
          }
        },
        {
          target: '/confirm',
          condition: {
            field: 'supporting-documents-upload',
            value: 'no'
          }
        }
      ],
      continueOnEdit: true
    },
    '/supporting-documents-upload-confirm': {
      fields: [
        'supporting-documents-upload-more',
        'another-supporting-document'
      ],
      forks: [
        {
          target: '/supporting-documents-upload-confirm',
          condition: {
            field: 'supporting-documents-upload-more',
            value: 'yes'
          }
        },
        {
          target: '/confirm',
          condition: {
            field: 'supporting-documents-upload-more',
            value: 'no'
          }
        }
      ],
      behaviours: [saveImage('another-supporting-document'), removeImage, unsetValue('supporting-documents-upload-more'), limitDocs]
    },
    '/confirm': {
      behaviours: [checkAnswers, SummaryPageBehaviour, EmailBehaviour, 'complete'],
      sections: require('./sections/summary-data-sections'),
      next: '/confirmation'
    },
    '/confirmation': {
      backLink: false
    },
  }
};
