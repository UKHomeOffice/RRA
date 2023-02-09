/* eslint-disable */
'use strict';

const _ = require('lodash');

const staticGrades = require('./lib/staticGrades');
const staticGrouping = require('./lib/staticGrouping');
const staticLevels = require('./lib/staticLevels');
const staticScores = require('./lib/staticScores');
const staticSfiaSkills = [...new Map(require('./lib/staticSfiaSkills').getStaticSfiaSkills().map(obj => [JSON.stringify(obj), obj])).values()];
const dateComponent = require('hof').components.date;

module.exports = {
  name: {
    validate: 'required'
  },
  employmentNumber: {
    validate: ['required', 'numeric']
  },
  'user-email': {
    validate: ['required', 'email']
  },
  managerEmail: {
    validate: ['required', 'email']
  },
  reference: {
    isPageHeading: true,
    validate: 'required'
  },
  appliedBefore: {
    isPageHeading: true,
    mixin: 'radio-group',
    validate: ['required'],
    options: [
      'yes',
      'no'
    ]
  },
  function: {
    validate: 'required',
  },
  grade: {
    mixin: 'select',
    validate: 'required',
    options:
      [{
        value: ' ',
        label: 'fields.grade.options.null'
      }].concat(staticGrades.getStaticGrades())
  },
  grouping: {
    mixin: 'select',
    validate: ['required'],
    className: ['typeahead', 'js-hidden'],
    options: [{
      value: '',
      label: 'fields.grouping.options.null'
    }].concat(staticGrouping.getStaticGrouping())
  },
  levels: {
    mixin: 'select',
    validate: ['required',],
    options: [{
      value: '',
      label: 'fields.levels.options.null'
    }].concat(staticLevels.getStaticApplyLevels())
  },
  higherGrade: {
    mixin: 'select',
    validate: 'required',
    options:
      [{
        value: ' ',
        label: 'fields.higherGrade.options.null'
      }].concat(staticGrades.getStaticGrades())
  },
  higherGrouping: {
    mixin: 'select',
    validate: ['required'],
    className: ['typeahead', 'js-hidden'],
    options: [{
      value: '',
      label: 'fields.higherGrouping.options.null'
    }].concat(staticGrouping.getStaticGrouping())
  },
  higherLevels: {
    mixin: 'select',
    validate: ['required',],
    options: [{
      value: '',
      label: 'fields.higherLevels.options.null'
    }].concat(staticLevels.getStaticApplyLevels())
  },
  currentLevel: {
    mixin: 'select',
    validate: ['required'],
    options: [{
      value: '',
      label: 'fields.currentLevel.options.null'
    }].concat(staticLevels.getStaticCurrentLevels())
  },
  lastAssessmentDate: dateComponent('lastAssessmentDate', {
    mixin: 'input-date',
    validate: ['required', 'before', { type: 'after', arguments: ['2000'] }]
  }),
  previousScore: {
    validate: ['required', 'numeric']
  },
  skill1: {
    mixin: 'select',
    validate: 'required',
    options: [{
      value: ' ',
      label: 'fields.skill1.options.null'
    }].concat(staticSfiaSkills)
  },
  scores1: {
    mixin: 'select',
    validate: ['required'],
    options: [{
      value: '',
      label: 'fields.scores1.options.null'
    }].concat(staticScores.getStaticScores())
  },
  evidence1: {
    mixin: 'textarea',
    'ignore-defaults': true,
    formatter: ['trim', 'hyphens'],
    validate: ['required', { type: 'maxword', arguments: 300 }],
    attributes: [{ attribute: 'spellcheck', value: 'true' },{attribute: 'rows', value: 8}]
  },
  skill2: {
    mixin: 'select',
    validate: 'required',
    options: [{
      value: ' ',
      label: 'fields.skill2.options.null'
    }].concat(staticSfiaSkills)
  },
  scores2: {
    mixin: 'select',
    validate: ['required'],
    options: [{
      value: '',
      label: 'fields.scores2.options.null'
    }].concat(staticScores.getStaticScores())
  },
  evidence2: {
    mixin: 'textarea',
    'ignore-defaults': true,
    formatter: ['trim', 'hyphens'],
    validate: ['required', { type: 'maxword', arguments: 300 }],
    attributes: [{ attribute: 'spellcheck', value: 'true' },{attribute: 'rows', value: 8}]
  },
  skill3: {
    mixin: 'select',
    validate: 'required',
    options: [{
      value: ' ',
      label: 'fields.skill3.options.null'
    }].concat(staticSfiaSkills)
  },
  scores3: {
    mixin: 'select',
    validate: ['required'],
    options: [{
      value: '',
      label: 'fields.scores3.options.null'
    }].concat(staticScores.getStaticScores())
  },
  evidence3: {
    mixin: 'textarea',
    'ignore-defaults': true,
    formatter: ['trim', 'hyphens'],
    validate: ['required', { type: 'maxword', arguments: 300 }],
    attributes: [{ attribute: 'spellcheck', value: 'true' },{attribute: 'rows', value: 8}]
  },
  skill4: {
    mixin: 'select',
    validate: 'required',
    options: [{
      value: ' ',
      label: 'fields.skill4.options.null'
    }].concat(staticSfiaSkills)
  },
  scores4: {
    mixin: 'select',
    validate: ['required'],
    options: [{
      value: '',
      label: 'fields.scores4.options.null'
    }].concat(staticScores.getStaticScores())
  },
  evidence4: {
    mixin: 'textarea',
    'ignore-defaults': true,
    formatter: ['trim', 'hyphens'],
    validate: ['required', { type: 'maxword', arguments: 300 }],
    attributes: [{ attribute: 'spellcheck', value: 'true' },{attribute: 'rows', value: 8}]
  },
  skill5: {
    mixin: 'select',
    validate: 'required',
    options: [{
      value: ' ',
      label: 'fields.skill5.options.null'
    }].concat(staticSfiaSkills)
  },
  scores5: {
    mixin: 'select',
    validate: ['required'],
    options: [{
      value: '',
      label: 'fields.scores5.options.null'
    }].concat(staticScores.getStaticScores())
  },
  evidence5: {
    mixin: 'textarea',
    'ignore-defaults': true,
    formatter: ['trim', 'hyphens'],
    validate: ['required', { type: 'maxword', arguments: 300 }],
    attributes: [{ attribute: 'spellcheck', value: 'true' },{attribute: 'rows', value: 8}]
  },
  skill6: {
    mixin: 'select',
    validate: 'required',
    options: [{
      value: ' ',
      label: 'fields.skill6.options.null'
    }].concat(staticSfiaSkills)
  },
  scores6: {
    mixin: 'select',
    validate: ['required'],
    options: [{
      value: '',
      label: 'fields.scores6.options.null'
    }].concat(staticScores.getStaticScores())
  },
  evidence6: {
    mixin: 'textarea',
    'ignore-defaults': true,
    formatter: ['trim', 'hyphens'],
    validate: ['required', { type: 'maxword', arguments: 300 }],
    attributes: [{ attribute: 'spellcheck', value: 'true' },{attribute: 'rows', value: 8}]
  },
  qualifications: {
    mixin: 'textarea',
    'ignore-defaults': true,
    formatter: ['trim', 'hyphens'],
    validate: ['required', { type: 'maxlength', arguments: 5000 }],
    attributes: [{ attribute: 'spellcheck', value: 'true' },{attribute: 'rows', value: 8}]
  },
  higherSkill1: {
    mixin: 'select',
    validate: 'required',
    options: [{
      value: ' ',
      label: 'fields.higherSkill1.options.null'
    }].concat(staticSfiaSkills)
  },
  higherScores1: {
    mixin: 'select',
    validate: ['required'],
    options: [{
      value: '',
      label: 'fields.higherScores1.options.null'
    }].concat(staticScores.getStaticScores())
  },
  higherEvidence1: {
    mixin: 'textarea',
    'ignore-defaults': true,
    formatter: ['trim', 'hyphens'],
    validate: ['required', { type: 'maxword', arguments: 300 }],
    attributes: [{ attribute: 'spellcheck', value: 'true' },{attribute: 'rows', value: 8}]
  },
  higherSkill2: {
    mixin: 'select',
    validate: 'required',
    options: [{
      value: ' ',
      label: 'fields.higherSkill2.options.null'
    }].concat(staticSfiaSkills)
  },
  higherScores2: {
    mixin: 'select',
    validate: ['required'],
    options: [{
      value: '',
      label: 'fields.higherScores2.options.null'
    }].concat(staticScores.getStaticScores())
  },
  higherEvidence2: {
    mixin: 'textarea',
    'ignore-defaults': true,
    formatter: ['trim', 'hyphens'],
    validate: ['required', { type: 'maxword', arguments: 300 }],
    attributes: [{ attribute: 'spellcheck', value: 'true' },{attribute: 'rows', value: 8}]
  },
  higherSkill3: {
    mixin: 'select',
    validate: 'required',
    options: [{
      value: ' ',
      label: 'fields.higherSkill3.options.null'
    }].concat(staticSfiaSkills)
  },
  higherScores3: {
    mixin: 'select',
    validate: ['required'],
    options: [{
      value: '',
      label: 'fields.higherScores3.options.null'
    }].concat(staticScores.getStaticScores())
  },
  higherEvidence3: {
    mixin: 'textarea',
    'ignore-defaults': true,
    formatter: ['trim', 'hyphens'],
    validate: ['required', { type: 'maxword', arguments: 300 }],
    attributes: [{ attribute: 'spellcheck', value: 'true' },{attribute: 'rows', value: 8}]
  },
  higherSkill4: {
    mixin: 'select',
    validate: 'required',
    options: [{
      value: ' ',
      label: 'fields.higherSkill4.options.null'
    }].concat(staticSfiaSkills)
  },
  higherScores4: {
    mixin: 'select',
    validate: ['required'],
    options: [{
      value: '',
      label: 'fields.higherScores4.options.null'
    }].concat(staticScores.getStaticScores())
  },
  higherEvidence4: {
    mixin: 'textarea',
    'ignore-defaults': true,
    formatter: ['trim', 'hyphens'],
    validate: ['required', { type: 'maxword', arguments: 300 }],
    attributes: [{ attribute: 'spellcheck', value: 'true' },{attribute: 'rows', value: 8}]
  },
  higherSkill5: {
    mixin: 'select',
    validate: 'required',
    options: [{
      value: ' ',
      label: 'fields.higherSkill5.options.null'
    }].concat(staticSfiaSkills)
  },
  higherScores5: {
    mixin: 'select',
    validate: ['required'],
    options: [{
      value: '',
      label: 'fields.higherScores5.options.null'
    }].concat(staticScores.getStaticScores())
  },
  higherEvidence5: {
    mixin: 'textarea',
    'ignore-defaults': true,
    formatter: ['trim', 'hyphens'],
    validate: ['required', { type: 'maxword', arguments: 300 }],
    attributes: [{ attribute: 'spellcheck', value: 'true' },{attribute: 'rows', value: 8}]
  },
  higherSkill6: {
    mixin: 'select',
    validate: 'required',
    options: [{
      value: ' ',
      label: 'fields.higherSkill4.options.null'
    }].concat(staticSfiaSkills)
  },
  higherScores6: {
    mixin: 'select',
    validate: ['required'],
    options: [{
      value: '',
      label: 'fields.higherScores6.options.null'
    }].concat(staticScores.getStaticScores())
  },
  higherEvidence6: {
    mixin: 'textarea',
    'ignore-defaults': true,
    formatter: ['trim', 'hyphens'],
    validate: ['required', { type: 'maxword', arguments: 300 }],
    attributes: [{ attribute: 'spellcheck', value: 'true' },{attribute: 'rows', value: 8}]
  },
  cpdDescription: {
    mixin: 'textarea',
    'ignore-defaults': true,
    formatter: ['trim', 'hyphens'],
    validate: ['required', { type: 'maxlength', arguments: 5000 }],
    attributes: [{ attribute: 'spellcheck', value: 'true' },{attribute: 'rows', value: 8}]
  },
  supportingDocumentsUpload: {
    mixin: 'radio-group',
    validate: 'required',
    legend: {
      className: 'visuallyhidden'
    },
    options: [{
      value: 'yes',
      toggle: 'supportingDocuments',
      child: 'input-file'
    }, {
      value: 'no'
    }]
  },
  supportingDocuments: {
    mixin: 'input-file',
    className: 'govuk-file-upload',
    disableRender: true,
    dependent: {
      field: 'supportingDocumentsUpload',
      value: 'yes'
    },
    validate: [
      'required',
    ]
  },
  supportingDocumentsUploadMore: {
    mixin: 'radio-group',
    validate: 'required',
    legend: {
      className: 'visuallyhidden'
    },
    options: [{
      value: 'yes',
      toggle: 'anotherSupportingDocuments',
      child: 'input-file',
    }, {
      value: 'no'
    }]
  },
  anotherSupportingDocuments: {
    mixin: 'input-file',
    disableRender: true,
    className: 'govuk-file-upload',
    dependent: {
      field: 'supportingDocumentsUploadMore',
      value: 'yes'
    },
    validate: [
      'required'
    ]
  },
}
