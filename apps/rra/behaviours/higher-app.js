'use strict';

module.exports = superclass => class extends superclass {
  saveValues(req, res, next) {
    const higherRateApp = req.form.values.appliedBefore !== 'no';
    const currentSteps = req.sessionModel.get('steps');
    // eslint-disable-next-line max-len
    const previouslyAnsweredAppliedBefore = currentSteps.includes(['/professionDetails', '/skill1', '/skill2', '/qualifications', '/qualifications']);

    req.sessionModel.set('higher-app', higherRateApp);

    // this updates fields and change links for the in-progress check your answers page

    if (higherRateApp) {
      req.sessionModel.set('appliedBefore', 'yes');
      req.sessionModel.set('is-higher', true);
      req.sessionModel.unset('levels');
      req.sessionModel.unset('skill1');
      req.sessionModel.unset('scores1');
      req.sessionModel.unset('evidence1');
      req.sessionModel.unset('skill2');
      req.sessionModel.unset('scores2');
      req.sessionModel.unset('evidence2');
      req.sessionModel.unset('skill3');
      req.sessionModel.unset('scores3');
      req.sessionModel.unset('evidence3');
      req.sessionModel.unset('skill4');
      req.sessionModel.unset('scores4');
      req.sessionModel.unset('evidence4');
      req.sessionModel.unset('skill5');
      req.sessionModel.unset('scores5');
      req.sessionModel.unset('evidence5');
      req.sessionModel.unset('skill6');
      req.sessionModel.unset('scores6');
      req.sessionModel.unset('evidence6');
      req.sessionModel.unset('images');
    } else if (!previouslyAnsweredAppliedBefore) {
      req.sessionModel.unset('currentLevel');
      req.sessionModel.unset('higherLevels');
      req.sessionModel.unset('lastAssessmentDate');
      req.sessionModel.unset('previousScore');
      req.sessionModel.unset('higherSkill1');
      req.sessionModel.unset('higherScores1');
      req.sessionModel.unset('higherEvidence1');
      req.sessionModel.unset('higherSkill2');
      req.sessionModel.unset('higherScores2');
      req.sessionModel.unset('higherEvidence2');
      req.sessionModel.unset('higherSkill3');
      req.sessionModel.unset('higherScores3');
      req.sessionModel.unset('higherEvidence3');
      req.sessionModel.unset('higherSkill4');
      req.sessionModel.unset('higherScores4');
      req.sessionModel.unset('higherEvidence4');
      req.sessionModel.unset('higherSkill5');
      req.sessionModel.unset('higherScores5');
      req.sessionModel.unset('higherEvidence5');
      req.sessionModel.unset('higherSkill6');
      req.sessionModel.unset('higherScores6');
      req.sessionModel.unset('higherEvidence6');
      req.sessionModel.unset('cpdDescription');
      req.sessionModel.unset('images');
      req.sessionModel.unset('is-higher');
    }

    return super.saveValues(req, res, next);
  }
};
