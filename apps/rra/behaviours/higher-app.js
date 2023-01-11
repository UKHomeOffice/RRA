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
      req.sessionModel.unset('rraLevels');
      req.sessionModel.unset('rraSkill');
      req.sessionModel.unset('rraScores');
      req.sessionModel.unset('rraEvidence');
      req.sessionModel.unset('rraSkill2');
      req.sessionModel.unset('rraScores2');
      req.sessionModel.unset('rraEvidence2');
      req.sessionModel.unset('rraSkill3');
      req.sessionModel.unset('rraScores3');
      req.sessionModel.unset('rraEvidence3');
      req.sessionModel.unset('rraSkill4');
      req.sessionModel.unset('rraScores4');
      req.sessionModel.unset('rraEvidence4');
      req.sessionModel.unset('rraSkill5');
      req.sessionModel.unset('rraScores5');
      req.sessionModel.unset('rraEvidence5');
      req.sessionModel.unset('rraSkill6');
      req.sessionModel.unset('rraScores6');
      req.sessionModel.unset('rraEvidence6');
      req.sessionModel.unset('images');
    } else if (!previouslyAnsweredAppliedBefore) {
      req.sessionModel.unset('currentRraLevel');
      req.sessionModel.unset('higherRraLevels');
      req.sessionModel.unset('lastAssessmentDate');
      req.sessionModel.unset('previousScore');
      req.sessionModel.unset('higherRraSkill');
      req.sessionModel.unset('higherRraScores');
      req.sessionModel.unset('higherRraEvidence');
      req.sessionModel.unset('higherRraSkill2');
      req.sessionModel.unset('higherRraScores2');
      req.sessionModel.unset('higherRraEvidence2');
      req.sessionModel.unset('higherRraSkill3');
      req.sessionModel.unset('higherRraScores3');
      req.sessionModel.unset('higherRraEvidence3');
      req.sessionModel.unset('higherRraSkill4');
      req.sessionModel.unset('higherRraScores4');
      req.sessionModel.unset('higherRraEvidence4');
      req.sessionModel.unset('higherRraSkill5');
      req.sessionModel.unset('higherRraScores5');
      req.sessionModel.unset('higherRraEvidence5');
      req.sessionModel.unset('higherRraSkill6');
      req.sessionModel.unset('higherRraScores6');
      req.sessionModel.unset('higherRraEvidence6');
      req.sessionModel.unset('cpdDescription');
      req.sessionModel.unset('images');
      req.sessionModel.unset('is-higher');
    }

    return super.saveValues(req, res, next);
  }
};
