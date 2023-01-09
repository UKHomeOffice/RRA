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
const skipStep = require('./behaviours/skip-step');
const checkAnswers = require('./behaviours/check-answers');
const resetJourneyToSubmitRRA = require('./behaviours/reset-journey-to-submit-rra');
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
        resetJourneyToSubmitRRA
      ],
      fields: ['appliedBefore'],
      next: '/personalDetails',
      continueOnEdit: true

    },
    '/personalDetails': {
      behaviours: [
        setAppType,
        resetJourneyToSubmitRRA,
        validateDomain
      ],
      fields: ['rraName', 'rraEmployeeNumber','rraFunction', 'rraEmail', 'rraManagerEmail'],
      forks: [{
        target: '/higherProfessionDetails',
        condition: req => {
          return req.sessionModel.get('appliedBefore') === 'yes' && req.sessionModel.get('higher-app');
        }
      }],
      next: '/professionDetails'
    },
    '/professionDetails': {
      fields: ['rraRole', 'rraGrouping', 'rraGrade', 'rraLevels'],
      next: '/skill1',
      continueOnEdit: true
    },
    '/skill1': {
      behaviours: [SkillBehaviour],
      fields: ['rraSkill', 'rraScores', 'rraEvidence'],
      next: '/skill2',
      continueOnEdit: true
    },
    '/skill2': {
      behaviours: [SkillBehaviour],
      fields: ['rraSkill2', 'rraScores2', 'rraEvidence2'],
      next: '/skill3',
      continueOnEdit: true
    },
    '/skill3': {
      behaviours: [SkillBehaviour],
      fields: ['rraSkill3', 'rraScores3', 'rraEvidence3'],
      next: '/skill4',
      continueOnEdit: true
    },
    '/skill4': {
      behaviours: [SkillBehaviour],
      fields: ['rraSkill4', 'rraScores4', 'rraEvidence4'],
      next: '/skill5',
      continueOnEdit: true
    },
    '/skill5': {
      behaviours: [SkillBehaviour],
      fields: ['rraSkill5', 'rraScores5', 'rraEvidence5'],
      next: '/skill6',
      continueOnEdit: true
    },
    '/skill6': {
      behaviours: [SkillBehaviour],
      fields: ['rraSkill6', 'rraScores6', 'rraEvidence6'],
      next: '/qualifications'
    },
    '/qualifications': {
      fields: ['qualifications'],
      next: '/rraSupportingDocumentsUpload'
    },
    '/higherProfessionDetails': {
      behaviours: [validateHigherLevel],
      fields: ['higherRraRole', 'higherRraGrouping', 'higherRraGrade','currentRraLevel', 'higherRraLevels'],
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
      fields: ['higherRraSkill', 'higherRraScores', 'higherRraEvidence'],
      next: '/higherSkill2',
      continueOnEdit: true
    },
    '/higherSkill2': {
      behaviours: [higherSkillBehaviour],
      fields: ['higherRraSkill2', 'higherRraScores2', 'higherRraEvidence2'],
      next: '/higherSkill3',
      continueOnEdit: true
    },
    '/higherSkill3': {
      behaviours: [higherSkillBehaviour],
      fields: ['higherRraSkill3', 'higherRraScores3', 'higherRraEvidence3'],
      next: '/higherSkill4',
      continueOnEdit: true
    },
    '/higherSkill4': {
      behaviours: [higherSkillBehaviour],
      fields: ['higherRraSkill4', 'higherRraScores4', 'higherRraEvidence4'],
      next: '/higherSkill5',
      continueOnEdit: true
    },
    '/higherSkill5': {
      behaviours: [higherSkillBehaviour],
      fields: ['higherRraSkill5', 'higherRraScores5', 'higherRraEvidence5'],
      next: '/higherSkill6',
      continueOnEdit: true
    },
    '/higherSkill6': {
      behaviours: [higherSkillBehaviour],
      fields: ['higherRraSkill6', 'higherRraScores6', 'higherRraEvidence6'],
      next: '/cpd'
    },
    '/cpd': {
      fields: ['cpdDescription'],
      continueOnEdit: true,
      next: '/rraSupportingDocumentsUpload'
    },
    '/rraSupportingDocumentsUpload': {
      fields: [
        'rraSupportingDocuments',
        'rraSupportingDocumentsUpload',
      ],
      forks: [
        {
          target: '/rraSupportingDocumentsUploadConfirm',
          condition: {
            field: 'rraSupportingDocumentsUpload',
            value: 'yes'
          }
        },
        {
          target: '/confirm',
          condition: {
            field: 'rraSupportingDocumentsUpload',
            value: 'no'
          }
        }
      ],
      behaviours: [skipStep, saveImage('rraSupportingDocuments'), checkDeviceType],
      continueOnEdit: true
    },
    '/rraSupportingDocumentsUploadConfirm': {
      fields: [
        'rraSupportingDocumentsUploadMore',
        'anotherRraSupportingDocuments'
      ],
      forks: [
        {
          target: '/rraSupportingDocumentsUploadConfirm',
          condition: {
            field: 'rraSupportingDocumentsUploadMore',
            value: 'yes'
          }
        },
        {
          target: '/confirm',
          condition: {
            field: 'rraSupportingDocumentsUploadMore',
            value: 'no'
          }
        }
      ],
      behaviours: [saveImage('anotherRraSupportingDocuments'), removeImage, unsetValue('rraSupportingDocumentsUploadMore'), limitDocs]
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
