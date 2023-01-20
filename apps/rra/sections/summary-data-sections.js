'use strict';

const RRA_GROUPING = require('../lib/staticRraGrouping').getstaticRraGrouping();
const APPLY_RRA_LEVELS = require('../lib/staticRraLevels').getstaticApplyRraLevels();
const RRA_SCORES = require('../lib/staticRraScores').getstaticRraScores();
const _ = require('lodash');
const sumValues = values => values.map(it => Number(it)).reduce((a, b) => a + b, 0);

module.exports = {
  personalDetails: [
    'rraName',
    'rraEmployeeNumber',
    'rraFunction',
    'user-email',
    'rraManagerEmail'
  ],
  appliedBefore: [
    'appliedBefore'
  ],
  professionDetails: [
    'rraRole',
    {
      field: 'rraGrouping',
      parse: v => _.get(_.find(RRA_GROUPING, group => group.value === v), 'label', '')
    },
    'rraGrade',
    {
      field: 'rraLevels',
      parse: v => _.get(_.find(APPLY_RRA_LEVELS, group => group.value === v), 'label', '')
    }
  ],
  skill1: [
    'rraSkill',
    {
      field: 'rraScores',
      parse: v => _.get(_.find(RRA_SCORES, group => group.value === v), 'label', '')
    },
    'rraEvidence'
  ],
  skill2: [
    'rraSkill2',
    {
      field: 'rraScores2',
      parse: v => _.get(_.find(RRA_SCORES, group => group.value === v), 'label', '')
    },
    'rraEvidence2'
  ],
  skill3: [
    'rraSkill3',
    {
      field: 'rraScores3',
      parse: v => _.get(_.find(RRA_SCORES, group => group.value === v), 'label', '')
    },
    'rraEvidence3'
  ],
  skill4: [
    'rraSkill4',
    {
      field: 'rraScores4',
      parse: v => _.get(_.find(RRA_SCORES, group => group.value === v), 'label', '')
    },
    'rraEvidence4'
  ],
  skill5: [
    'rraSkill5',
    {
      field: 'rraScores5',
      parse: v => _.get(_.find(RRA_SCORES, group => group.value === v), 'label', '')
    },
    'rraEvidence5'
  ],
  skill6: [
    'rraSkill6',
    {
      field: 'rraScores6',
      parse: v => _.get(_.find(RRA_SCORES, group => group.value === v), 'label', '')
    },
    'rraEvidence6'
  ],
  qualifications: [
    'qualifications'
  ],
  higherProfessionDetails: [
    'higherRraRole',
    {
      field: 'higherRraGrouping',
      parse: v => _.get(_.find(RRA_GROUPING, group => group.value === v), 'label', '')
    },
    'higherRraGrade',
    'currentRraLevel',
    'lastAssessmentDate',
    'previousScore',
    {
      field: 'higherRraLevels',
      parse: v => _.get(_.find(APPLY_RRA_LEVELS, group => group.value === v), 'label', '')
    }
  ],
  higherSkill1: [
    'higherRraSkill',
    {
      field: 'higherRraScores',
      parse: v => _.get(_.find(RRA_SCORES, group => group.value === v), 'label', '')
    },
    'higherRraEvidence'
  ],
  higherSkill2: [
    'higherRraSkill2',
    {
      field: 'higherRraScores2',
      parse: v => _.get(_.find(RRA_SCORES, group => group.value === v), 'label', '')
    },
    'higherRraEvidence2'
  ],
  higherSkill3: [
    'higherRraSkill3',
    {
      field: 'higherRraScores3',
      parse: v => _.get(_.find(RRA_SCORES, group => group.value === v), 'label', '')
    },
    'higherRraEvidence3'
  ],
  higherSkill4: [
    'higherRraSkill4',
    {
      field: 'higherRraScores4',
      parse: v => _.get(_.find(RRA_SCORES, group => group.value === v), 'label', '')
    },
    'higherRraEvidence4'
  ],
  higherSkill5: [
    'higherRraSkill5',
    {
      field: 'higherRraScores5',
      parse: v => _.get(_.find(RRA_SCORES, group => group.value === v), 'label', '')
    },
    'higherRraEvidence5'
  ],
  higherSkill6: [
    'higherRraSkill6',
    {
      field: 'higherRraScores6',
      parse: v => _.get(_.find(RRA_SCORES, group => group.value === v), 'label', '')
    },
    'higherRraEvidence6'
  ],
  cpd: [
    'cpdDescription'
  ],
  totalScore: [
    {
      field: 'totalScore',
      derivation: {
        fromFields: [
          'rraScores',
          'rraScores2',
          'rraScores3',
          'rraScores4',
          'rraScores5',
          'rraScores6',
          'higherRraScores',
          'higherRraScores2',
          'higherRraScores3',
          'higherRraScores4',
          'higherRraScores5',
          'higherRraScores6'
        ],
        combiner: sumValues
      }
    }
  ]
};
