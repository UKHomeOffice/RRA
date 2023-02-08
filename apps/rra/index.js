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
const resetJourneyToSubmit = require('./behaviours/reset-journey-to-submit');
const higherApp = require('./behaviours/higher-app');
const setAppType = require('./behaviours/set-app-type');
const validateHigherLevel = require('./behaviours/validate-higher');
const checkEmailToken = require('./behaviours/check-email-token');
const validateDomain = require('./behaviours/validate-domain');
const ResumeSession = require('./behaviours/resume-form-session');
const SaveFormSession = require('./behaviours/save-form-session');
const SaveAndExit = require('./behaviours/save-and-exit');
const ContinueReport = require('./behaviours/continue-report');
const AreYouSure = require('./behaviours/are-you-sure');

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
      next: '/reports',
    },
    '/reports': {
      behaviours: ResumeSession,
      next: '/reference'
    },
    '/continue-report': {
      behaviours: [ContinueReport, SummaryPageBehaviour],
      sections: require('./sections/summary-data-sections'),
      backLink: '/rra/reports'
    },
    '/save-and-exit': {
      behaviours: SaveAndExit,
      backLink: false
    },
    '/are-you-sure': {
      behaviours: AreYouSure,
      backLink: false,
      next: '/reports'
    },
    '/reference': {
      behaviours: SaveFormSession,
      fields: ['reference'],
      next: '/applied-before',
      locals: { showSaveAndExit: true }
    },
    '/applied-before': {
      behaviours: [
        higherApp,
        resetJourneyToSubmit,
        SaveFormSession
      ],
      fields: ['appliedBefore'],
      next: '/personalDetails',
      continueOnEdit: true,
      locals: { showSaveAndExit: true }

    },
    '/personalDetails': {
      behaviours: [
        setAppType,
        resetJourneyToSubmit,
        validateDomain,
        validateDomain,
        SaveFormSession
      ],
      fields: ['name', 'employmentNumber','function', 'user-email', 'managerEmail'],
      forks: [{
        target: '/higherProfessionDetails',
        condition: req => {
          return req.sessionModel.get('appliedBefore') === 'yes' && req.sessionModel.get('higher-app');
        }
      }],
      next: '/professionDetails',
      locals: { showSaveAndExit: true }
    },
    '/professionDetails': {
      behaviours: SaveFormSession,
      fields: ['role', 'grouping', 'grade', 'levels'],
      next: '/skill1',
      continueOnEdit: true,
      locals: { showSaveAndExit: true }
    },
    '/skill1': {
      fields: ['skill1', 'scores1', 'evidence1'],
      behaviours: [SkillBehaviour ,SaveFormSession],
      next: '/skill2',
      continueOnEdit: true,
      locals: { showSaveAndExit: true }
    },
    '/skill2': {
      fields: ['skill2', 'scores2', 'evidence2'],
      behaviours: [SkillBehaviour, SaveFormSession],
      next: '/skill3',
      continueOnEdit: true,
      locals: { showSaveAndExit: true }
    },
    '/skill3': {
      fields: ['skill3', 'scores3', 'evidence3'],
      behaviours: [SkillBehaviour, SaveFormSession],
      next: '/skill4',
      continueOnEdit: true,
      locals: { showSaveAndExit: true }
    },
    '/skill4': {
      fields: ['skill4', 'scores4', 'evidence4'],
      behaviours: [SkillBehaviour, SaveFormSession],
      next: '/skill5',
      continueOnEdit: true,
      locals: { showSaveAndExit: true }
    },
    '/skill5': {
      fields: ['skill5', 'scores5', 'evidence5'],
      behaviours: [SkillBehaviour, SaveFormSession],
      next: '/skill6',
      continueOnEdit: true,
      locals: { showSaveAndExit: true }
    },
    '/skill6': {
      fields: ['skill6', 'scores6', 'evidence6'],
      behaviours: [SkillBehaviour, SaveFormSession],
      next: '/qualifications',
      locals: { showSaveAndExit: true }
    },
    '/qualifications': {
      behaviours: SaveFormSession,
      fields: ['qualifications'],
      next: '/supportingDocumentsUpload'
    },
    '/higherProfessionDetails': {
      behaviours: SaveFormSession,
      fields: ['higherRole', 'higherGrouping', 'higherGrade','currentLevel', 'higherLevels'],
      locals: { showSaveAndExit: true }
    },
    '/higherProfessionDetails': {
      behaviours: [validateHigherLevel, SaveFormSession],
      next: '/lastAssessmentDate',
      continueOnEdit: true,
      locals: { showSaveAndExit: true }
    },
    '/lastAssessmentDate':{
      behaviours: SaveFormSession,
      fields: ['lastAssessmentDate'],
      next: '/previousScore',
      continueOnEdit: true,
      locals: { showSaveAndExit: true }
    },
    '/previousScore': {
      behaviours: SaveFormSession,
      fields: [ 'previousScore'],
      next: '/higherSkill1',
      continueOnEdit: true,
      locals: { showSaveAndExit: true }
    },
    '/higherSkill1': {
      fields: ['higherSkill1', 'higherScores1', 'higherEvidence1'],
      behaviours: [higherSkillBehaviour, SaveFormSession],
      next: '/higherSkill2',
      continueOnEdit: true,
      locals: { showSaveAndExit: true }
    },
    '/higherSkill2': {
      fields: ['higherSkill2', 'higherScores2', 'higherEvidence2'],
      behaviours: [higherSkillBehaviour, SaveFormSession],
      next: '/higherSkill3',
      continueOnEdit: true,
      locals: { showSaveAndExit: true }
    },
    '/higherSkill3': {
      fields: ['higherSkill3', 'higherScores3', 'higherEvidence3'],
      behaviours: [higherSkillBehaviour, SaveFormSession],
      next: '/higherSkill4',
      continueOnEdit: true,
      locals: { showSaveAndExit: true }
    },
    '/higherSkill4': {
      fields: ['higherSkill4', 'higherScores4', 'higherEvidence4'],
      behaviours: [higherSkillBehaviour, SaveFormSession],
      next: '/higherSkill5',
      continueOnEdit: true,
      locals: { showSaveAndExit: true }
    },
    '/higherSkill5': {
      fields: ['higherSkill5', 'higherScores5', 'higherEvidence5'],
      behaviours: [higherSkillBehaviour, SaveFormSession],
      next: '/higherSkill6',
      continueOnEdit: true,
      locals: { showSaveAndExit: true }
    },
    '/higherSkill6': {
      fields: ['higherSkill6', 'higherScores6', 'higherEvidence6'],
      behaviours: [higherSkillBehaviour, SaveFormSession],
      next: '/cpd',
      locals: { showSaveAndExit: true }
    },
    '/cpd': {
      behaviours: SaveFormSession,
      fields: ['cpdDescription'],
      continueOnEdit: true,
      next: '/supportingDocumentsUpload',
      locals: { showSaveAndExit: true }
    },
    '/supportingDocumentsUpload': {
      fields: [
        'supportingDocuments',
        'supportingDocumentsUpload',
      ],
      forks: [
        {
          target: '/supportingDocumentsUploadConfirm',
          condition: {
            field: 'supportingDocumentsUpload',
            value: 'yes'
          }
        },
        {
          target: '/confirm',
          condition: {
            field: 'supportingDocumentsUpload',
            value: 'no'
          }
        }
      ],
      behaviours: [skipStep, saveImage('rraSupportingDocuments'), checkDeviceType, SaveFormSession],
      continueOnEdit: true,
      locals: { showSaveAndExit: true }
    },
    '/supportingDocumentsUploadConfirm': {
      fields: [
        'supportingDocumentsUploadMore',
        'anotherSupportingDocuments'
      ],
      forks: [
        {
          target: '/supportingDocumentsUploadConfirm',
          condition: {
            field: 'supportingDocumentsUploadMore',
            value: 'yes'
          }
        },
        {
          target: '/confirm',
          condition: {
            field: 'supportingDocumentsUploadMore',
            value: 'no'
          }
        }
      ],
      behaviours: [saveImage('anotherRraSupportingDocuments'), removeImage, unsetValue('rraSupportingDocumentsUploadMore'), limitDocs, SaveFormSession],
      locals: { showSaveAndExit: true }
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
