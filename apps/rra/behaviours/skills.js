'use strict';

const _ = require('lodash');
const staticSfiaSkills = require('../lib/staticSfiaSkills');

const SoftwareAndDevOpsSkills = staticSfiaSkills.getstaticSoftwareAndDevOpsSfiaSkills();
const InfrastructureEngineeringSkills = staticSfiaSkills.getstaticInfrastructureEngineeringSfiaSkills();
const NetworkingEngineeringSkills = staticSfiaSkills.getstaticNetworkingEngineeringSfiaSkills();
const SecurityEngineeringSkills = staticSfiaSkills.getstaticSecurityEngineeringSfiaSkills();
const EngineeringLeadershipSkills = staticSfiaSkills.getstaticEngineeringLeadershipSfiaSkills();
const HeadOfRoleForEngineeringSkills = staticSfiaSkills.getstaticHeadOfRoleForEngineeringSfiaSkills();
const BusinessArchitectureSkills = staticSfiaSkills.getBusinessArchitectureSkills();
const DataArchitectureSkills = staticSfiaSkills.getDataArchitectureSkills();
const SecurityArchitectureSkills = staticSfiaSkills.getSecurityArchitectureSkills();
const TechnicalArchitectureSkills = staticSfiaSkills.getTechnicalArchitectureSkills();
const DataAnalystSkills = staticSfiaSkills.getstaticDataAnalystSfiaSkills();
const DataEngineeringSkills = staticSfiaSkills.getstaticDataEngineeringSfiaSkills();
const DataScienceSkills = staticSfiaSkills.getstaticDataScienceSfiaSkills();
const HeadOfRoleForDataSkills = staticSfiaSkills.getstaticHeadOfRoleForDataSfiaSkills();
const DeliverySkills = staticSfiaSkills.getStaticDeliverySfiaSkills();
const PlanEngageAndImproveSkills = staticSfiaSkills.getstaticPlanEngageAndImproveSfiaSkills();
const DesignAndTransitionSkills = staticSfiaSkills.getstaticDesignAndTransitionSfiaSkills();
const DeliverAndSupportSkills = staticSfiaSkills.getstaticDeliverAndSupportSfiaSkills();
const ItOperationsLeadershipSkills = staticSfiaSkills.getstaticItOperationsLeadershipSfiaSkills();
const BusinessAnalystSkills = staticSfiaSkills.getstaticBusinessAnalystSfiaSkills();
const ProductManagerSkills = staticSfiaSkills.getstaticProductManagerSfiaSkills();
const PerformanceAnalysisSkills = staticSfiaSkills.getstaticPerformanceAnalysisSfiaSkills();
const QualityAssuranceAndTestingSkills = staticSfiaSkills.getstaticQualityAssuranceAndTestingSfiaSkills();
const ContentDesignerSkills = staticSfiaSkills.getstaticContentDesignerSfiaSkills();
const InteractionDesignerSkills = staticSfiaSkills.getstaticInteractionDesignerSfiaSkills();
const ServiceSkills = staticSfiaSkills.getstaticServiceSfiaSkills();
const UserResearcherSkills = staticSfiaSkills.getstaticUserResearcherSfiaSkills();
const AccessibilityandDigitalInclusionSkills = staticSfiaSkills.getstaticAccessibilityandDigitalInclusionSfiaSkills();

module.exports = superclass => class Skill extends superclass {
  skill1(req, options1) {
    if (req.form.options.route === '/skill1') {
      req.form.options.fields.rraSkill.options = [{
        value: '',
        label: 'fields.rraSkill.options.null'
      }].concat(options1);
    }
  }
  skill2(req, options2) {
    if (req.form.options.route === '/skill2') {
      req.form.options.fields.rraSkill2.options = [{
        value: '',
        label: 'fields.rraSkill2.options.null'
      }].concat(options2);
    }
  }
  skill3(req, options3) {
    if (req.form.options.route === '/skill3') {
      req.form.options.fields.rraSkill3.options = [{
        value: '',
        label: 'fields.rraSkill3.options.null'
      }].concat(options3);
    }
  }
  skill4(req, options4) {
    if (req.form.options.route === '/skill4') {
      req.form.options.fields.rraSkill4.options = [{
        value: '',
        label: 'fields.rraSkill4.options.null'
      }].concat(options4);
    }
  }
  skill5(req, options5) {
    if (req.form.options.route === '/skill5') {
      req.form.options.fields.rraSkill5.options = [{
        value: '',
        label: 'fields.rraSkill5.options.null'
      }].concat(options5);
    }
  }
  skill6(req, options6) {
    if (req.form.options.route === '/skill6') {
      req.form.options.fields.rraSkill6.options = [{
        value: '',
        label: 'fields.rraSkill6.options.null'
      }].concat(options6);
    }
  }

  configure(req, res, next) {
    if (req.sessionModel.get('rraGrouping') === 'Business Analyst') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(BusinessAnalystSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(BusinessAnalystSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(BusinessAnalystSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(BusinessAnalystSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(BusinessAnalystSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(BusinessAnalystSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Engineering Leadership') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(EngineeringLeadershipSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(EngineeringLeadershipSkills, obj.value));
        this.skill2(req, options2);
      }  else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(EngineeringLeadershipSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(EngineeringLeadershipSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(EngineeringLeadershipSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(EngineeringLeadershipSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Head of Role for Engineering') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(HeadOfRoleForEngineeringSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(HeadOfRoleForEngineeringSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(HeadOfRoleForEngineeringSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(HeadOfRoleForEngineeringSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(HeadOfRoleForEngineeringSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(HeadOfRoleForEngineeringSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Infrastructure Engineering') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(InfrastructureEngineeringSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(InfrastructureEngineeringSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(InfrastructureEngineeringSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(InfrastructureEngineeringSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(InfrastructureEngineeringSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(InfrastructureEngineeringSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Network Engineering') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(NetworkingEngineeringSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(NetworkingEngineeringSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(NetworkingEngineeringSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(NetworkingEngineeringSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(NetworkingEngineeringSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(NetworkingEngineeringSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Security Engineering') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(SecurityEngineeringSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(SecurityEngineeringSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(SecurityEngineeringSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(SecurityEngineeringSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(SecurityEngineeringSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(SecurityEngineeringSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Software and Dev Ops Engineering') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(SoftwareAndDevOpsSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(SoftwareAndDevOpsSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(SoftwareAndDevOpsSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(SoftwareAndDevOpsSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(SoftwareAndDevOpsSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(SoftwareAndDevOpsSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Business Architecture') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(BusinessArchitectureSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(BusinessArchitectureSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(BusinessArchitectureSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(BusinessArchitectureSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(BusinessArchitectureSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(BusinessArchitectureSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Data Architecture') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(DataArchitectureSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(DataArchitectureSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(DataArchitectureSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(DataArchitectureSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(DataArchitectureSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(DataArchitectureSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Security Architecture') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(SecurityArchitectureSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(SecurityArchitectureSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(SecurityArchitectureSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(SecurityArchitectureSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(SecurityArchitectureSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(SecurityArchitectureSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Technical Architecture') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(TechnicalArchitectureSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(TechnicalArchitectureSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(TechnicalArchitectureSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(TechnicalArchitectureSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(TechnicalArchitectureSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(TechnicalArchitectureSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Data Analysis') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(DataAnalystSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(DataAnalystSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(DataAnalystSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(DataAnalystSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(DataAnalystSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(DataAnalystSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Data Engineering') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(DataEngineeringSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(DataEngineeringSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(DataEngineeringSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(DataEngineeringSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(DataEngineeringSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(DataEngineeringSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Data Science') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(DataScienceSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(DataScienceSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(DataScienceSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(DataScienceSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(DataScienceSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(DataScienceSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Head of Role for Data') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(HeadOfRoleForDataSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(HeadOfRoleForDataSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(HeadOfRoleForDataSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(HeadOfRoleForDataSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(HeadOfRoleForDataSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(HeadOfRoleForDataSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Content Designer') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(ContentDesignerSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(ContentDesignerSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(ContentDesignerSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(ContentDesignerSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(ContentDesignerSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(ContentDesignerSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Interaction Designer') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(InteractionDesignerSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(InteractionDesignerSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(InteractionDesignerSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(InteractionDesignerSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(InteractionDesignerSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(InteractionDesignerSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Technology Delivery Manager') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Outcome Technology Delivery Manager') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Head of Role for Delivery') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Delivery Manager') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Technology Project Manager') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Plan, Engage, Improve') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(PlanEngageAndImproveSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(PlanEngageAndImproveSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(PlanEngageAndImproveSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(PlanEngageAndImproveSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(PlanEngageAndImproveSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(PlanEngageAndImproveSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Design & Transition') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(DesignAndTransitionSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(DesignAndTransitionSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(DesignAndTransitionSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(DesignAndTransitionSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(DesignAndTransitionSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(DesignAndTransitionSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Deliver and Support') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(DeliverAndSupportSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(DeliverAndSupportSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(DeliverAndSupportSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(DeliverAndSupportSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(DeliverAndSupportSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(DeliverAndSupportSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'IT Operations Leadership') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(ItOperationsLeadershipSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(ItOperationsLeadershipSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(ItOperationsLeadershipSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(ItOperationsLeadershipSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(ItOperationsLeadershipSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(ItOperationsLeadershipSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Product Manager') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(ProductManagerSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(ProductManagerSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(ProductManagerSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(ProductManagerSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(ProductManagerSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(ProductManagerSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Accessibility and Digital Inclusion') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(AccessibilityandDigitalInclusionSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(AccessibilityandDigitalInclusionSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(AccessibilityandDigitalInclusionSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(AccessibilityandDigitalInclusionSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(AccessibilityandDigitalInclusionSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(AccessibilityandDigitalInclusionSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Performance Analyst') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Performance Tester') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'QAT Analyst') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'QAT Delivery') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Test Engineer') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Service Architect') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(ServiceSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(ServiceSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(ServiceSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(ServiceSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(ServiceSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(ServiceSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'Service Designer') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(ServiceSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(ServiceSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(ServiceSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(ServiceSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(ServiceSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(ServiceSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('rraGrouping') === 'User Researcher') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.rraSkill.options;
        options1 = options1.filter(obj => _.includes(UserResearcherSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.rraSkill2.options;
        options2 = options2.filter(obj => _.includes(UserResearcherSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.rraSkill3.options;
        options3 = options3.filter(obj => _.includes(UserResearcherSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.rraSkill4.options;
        options4 = options4.filter(obj => _.includes(UserResearcherSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.rraSkill5.options;
        options5 = options5.filter(obj => _.includes(UserResearcherSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.rraSkill6.options;
        options6 = options6.filter(obj => _.includes(UserResearcherSkills, obj.value));
        this.skill6(req, options6);
      }
    }
    next();
  }
};
