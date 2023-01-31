'use strict';

const RRA_GROUPING = require('../lib/staticGrouping').getStaticGrouping();
const APPLY_RRA_LEVELS = require('../lib/staticLevels').getStaticApplyLevels();
const RRA_SCORES = require('../lib/staticScores').getStaticScores();
const _ = require('lodash');
const sumValues = values => values.map(it => Number(it)).reduce((a, b) => a + b, 0);

module.exports = {
  'case-reference': {
    steps: [{ step: '/reference', field: 'reference' }]
  },
  personalDetails: [
    'name',
    'employmentNumber',
    'function',
    'user-email',
    'managerEmail'
  ],
  appliedBefore: [
    'appliedBefore'
  ],
  professionDetails: [
    'role',
    {
      field: 'grouping',
      parse: v => _.get(_.find(RRA_GROUPING, group => group.value === v), 'label', '')
    },
    'grade',
    {
      field: 'levels',
      parse: v => _.get(_.find(APPLY_RRA_LEVELS, group => group.value === v), 'label', '')
    }
  ],
  skill1: [
    'skill1',
    {
      field: 'scores1',
      parse: v => _.get(_.find(RRA_SCORES, group => group.value === v), 'label', '')
    },
    'evidence1'
  ],
  skill2: [
    'skill2',
    {
      field: 'scores2',
      parse: v => _.get(_.find(RRA_SCORES, group => group.value === v), 'label', '')
    },
    'evidence2'
  ],
  skill3: [
    'skill3',
    {
      field: 'scores3',
      parse: v => _.get(_.find(RRA_SCORES, group => group.value === v), 'label', '')
    },
    'evidence3'
  ],
  skill4: [
    'skill4',
    {
      field: 'scores4',
      parse: v => _.get(_.find(RRA_SCORES, group => group.value === v), 'label', '')
    },
    'evidence4'
  ],
  skill5: [
    'skill5',
    {
      field: 'scores5',
      parse: v => _.get(_.find(RRA_SCORES, group => group.value === v), 'label', '')
    },
    'evidence5'
  ],
  skill6: [
    'skill6',
    {
      field: 'scores6',
      parse: v => _.get(_.find(RRA_SCORES, group => group.value === v), 'label', '')
    },
    'evidence6'
  ],
  qualifications: [
    'qualifications'
  ],
  higherProfessionDetails: [
    'higherRole',
    {
      field: 'higherGrouping',
      parse: v => _.get(_.find(RRA_GROUPING, group => group.value === v), 'label', '')
    },
    'higherGrade',
    'currentLevel',
    'lastAssessmentDate',
    'previousScore',
    {
      field: 'higherLevels',
      parse: v => _.get(_.find(APPLY_RRA_LEVELS, group => group.value === v), 'label', '')
    }
  ],
  higherSkill1: [
    'higherSkill1',
    {
      field: 'higherScores1',
      parse: v => _.get(_.find(RRA_SCORES, group => group.value === v), 'label', '')
    },
    'higherEvidence1'
  ],
  higherSkill2: [
    'higherSkill2',
    {
      field: 'higherScores2',
      parse: v => _.get(_.find(RRA_SCORES, group => group.value === v), 'label', '')
    },
    'higherEvidence2'
  ],
  higherSkill3: [
    'higherSkill3',
    {
      field: 'higherScores3',
      parse: v => _.get(_.find(RRA_SCORES, group => group.value === v), 'label', '')
    },
    'higherEvidence3'
  ],
  higherSkill4: [
    'higherSkill4',
    {
      field: 'higherScores4',
      parse: v => _.get(_.find(RRA_SCORES, group => group.value === v), 'label', '')
    },
    'higherEvidence4'
  ],
  higherSkill5: [
    'higherSkill5',
    {
      field: 'higherScores5',
      parse: v => _.get(_.find(RRA_SCORES, group => group.value === v), 'label', '')
    },
    'higherEvidence5'
  ],
  higherSkill6: [
    'higherSkill6',
    {
      field: 'higherScores6',
      parse: v => _.get(_.find(RRA_SCORES, group => group.value === v), 'label', '')
    },
    'higherEvidence6'
  ],
  cpd: [
    'cpdDescription'
  ],
  totalScore: [
    {
      field: 'totalScore',
      derivation: {
        fromFields: [
          'scores1',
          'scores2',
          'scores3',
          'scores4',
          'scores5',
          'scores6',
          'higherScores1',
          'higherScores2',
          'higherScores3',
          'higherScores4',
          'higherScores5',
          'higherScores6'
        ],
        combiner: sumValues
      }
    }
  ]
};
