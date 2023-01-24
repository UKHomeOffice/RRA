'use strict';

const _ = require('lodash');
const staticSfiaSkills = require('../lib/staticSfiaSkills');

const SoftwareAndDevOpsSkills = staticSfiaSkills.getStaticSoftwareAndDevOpsSfiaSkills();
const InfrastructureEngineeringSkills = staticSfiaSkills.getStaticInfrastructureEngineeringSfiaSkills();
const NetworkingEngineeringSkills = staticSfiaSkills.getStaticNetworkingEngineeringSfiaSkills();
const SecurityEngineeringSkills = staticSfiaSkills.getStaticSecurityEngineeringSfiaSkills();
const EngineeringLeadershipSkills = staticSfiaSkills.getStaticEngineeringLeadershipSfiaSkills();
const HeadOfRoleForEngineeringSkills = staticSfiaSkills.getStaticHeadOfRoleForEngineeringSfiaSkills();
const BusinessArchitectureSkills = staticSfiaSkills.getBusinessArchitectureSkills();
const DataArchitectureSkills = staticSfiaSkills.getDataArchitectureSkills();
const SecurityArchitectureSkills = staticSfiaSkills.getSecurityArchitectureSkills();
const TechnicalArchitectureSkills = staticSfiaSkills.getTechnicalArchitectureSkills();
const DataAnalystSkills = staticSfiaSkills.getStaticDataAnalystSfiaSkills();
const DataEngineeringSkills = staticSfiaSkills.getStaticDataEngineeringSfiaSkills();
const DataScienceSkills = staticSfiaSkills.getStaticDataScienceSfiaSkills();
const HeadOfRoleForDataSkills = staticSfiaSkills.getStaticHeadOfRoleForDataSfiaSkills();
const DeliverySkills = staticSfiaSkills.getStaticDeliverySfiaSkills();
const PlanEngageAndImproveSkills = staticSfiaSkills.getStaticPlanEngageAndImproveSfiaSkills();
const DesignAndTransitionSkills = staticSfiaSkills.getStaticDesignAndTransitionSfiaSkills();
const DeliverAndSupportSkills = staticSfiaSkills.getStaticDeliverAndSupportSfiaSkills();
const ItOperationsLeadershipSkills = staticSfiaSkills.getStaticItOperationsLeadershipSfiaSkills();
const BusinessAnalystSkills = staticSfiaSkills.getStaticBusinessAnalystSfiaSkills();
const ProductManagerSkills = staticSfiaSkills.getStaticProductManagerSfiaSkills();
const PerformanceAnalysisSkills = staticSfiaSkills.getStaticPerformanceAnalysisSfiaSkills();
const QualityAssuranceAndTestingSkills = staticSfiaSkills.getStaticQualityAssuranceAndTestingSfiaSkills();
const ContentDesignerSkills = staticSfiaSkills.getStaticContentDesignerSfiaSkills();
const InteractionDesignerSkills = staticSfiaSkills.getStaticInteractionDesignerSfiaSkills();
const ServiceSkills = staticSfiaSkills.getStaticServiceSfiaSkills();
const UserResearcherSkills = staticSfiaSkills.getStaticUserResearcherSfiaSkills();
const AccessibilityandDigitalInclusionSkills = staticSfiaSkills.getStaticAccessibilityandDigitalInclusionSfiaSkills();

module.exports = superclass => class Skill extends superclass {
  skill1(req, options1) {
    if (req.form.options.route === '/skill1') {
      req.form.options.fields.skill1.options = [{
        value: '',
        label: 'fields.skill1.options.null'
      }].concat(options1);
    }
  }
  skill2(req, options2) {
    if (req.form.options.route === '/skill2') {
      req.form.options.fields.skill2.options = [{
        value: '',
        label: 'fields.skill2.options.null'
      }].concat(options2);
    }
  }
  skill3(req, options3) {
    if (req.form.options.route === '/skill3') {
      req.form.options.fields.skill3.options = [{
        value: '',
        label: 'fields.skill3.options.null'
      }].concat(options3);
    }
  }
  skill4(req, options4) {
    if (req.form.options.route === '/skill4') {
      req.form.options.fields.skill4.options = [{
        value: '',
        label: 'fields.skill4.options.null'
      }].concat(options4);
    }
  }
  skill5(req, options5) {
    if (req.form.options.route === '/skill5') {
      req.form.options.fields.skill5.options = [{
        value: '',
        label: 'fields.skill5.options.null'
      }].concat(options5);
    }
  }
  skill6(req, options6) {
    if (req.form.options.route === '/skill6') {
      req.form.options.fields.skill6.options = [{
        value: '',
        label: 'fields.skill6.options.null'
      }].concat(options6);
    }
  }

  configure(req, res, next) {
    if (req.sessionModel.get('grouping') === 'Business Analyst') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(BusinessAnalystSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(BusinessAnalystSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(BusinessAnalystSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(BusinessAnalystSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(BusinessAnalystSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(BusinessAnalystSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Engineering Leadership') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(EngineeringLeadershipSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(EngineeringLeadershipSkills, obj.value));
        this.skill2(req, options2);
      }  else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(EngineeringLeadershipSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(EngineeringLeadershipSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(EngineeringLeadershipSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(EngineeringLeadershipSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Head of Role for Engineering') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(HeadOfRoleForEngineeringSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(HeadOfRoleForEngineeringSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(HeadOfRoleForEngineeringSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(HeadOfRoleForEngineeringSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(HeadOfRoleForEngineeringSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(HeadOfRoleForEngineeringSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Infrastructure Engineering') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(InfrastructureEngineeringSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(InfrastructureEngineeringSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(InfrastructureEngineeringSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(InfrastructureEngineeringSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(InfrastructureEngineeringSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(InfrastructureEngineeringSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Network Engineering') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(NetworkingEngineeringSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(NetworkingEngineeringSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(NetworkingEngineeringSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(NetworkingEngineeringSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(NetworkingEngineeringSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(NetworkingEngineeringSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Security Engineering') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(SecurityEngineeringSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(SecurityEngineeringSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(SecurityEngineeringSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(SecurityEngineeringSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(SecurityEngineeringSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(SecurityEngineeringSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Software and Dev Ops Engineering') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(SoftwareAndDevOpsSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(SoftwareAndDevOpsSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(SoftwareAndDevOpsSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(SoftwareAndDevOpsSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(SoftwareAndDevOpsSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(SoftwareAndDevOpsSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Business Architecture') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(BusinessArchitectureSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(BusinessArchitectureSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(BusinessArchitectureSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(BusinessArchitectureSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(BusinessArchitectureSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(BusinessArchitectureSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Data Architecture') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(DataArchitectureSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(DataArchitectureSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(DataArchitectureSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(DataArchitectureSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(DataArchitectureSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(DataArchitectureSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Security Architecture') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(SecurityArchitectureSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(SecurityArchitectureSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(SecurityArchitectureSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(SecurityArchitectureSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(SecurityArchitectureSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(SecurityArchitectureSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Technical Architecture') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(TechnicalArchitectureSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(TechnicalArchitectureSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(TechnicalArchitectureSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(TechnicalArchitectureSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(TechnicalArchitectureSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(TechnicalArchitectureSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Data Analysis') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(DataAnalystSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(DataAnalystSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(DataAnalystSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(DataAnalystSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(DataAnalystSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(DataAnalystSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Data Engineering') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(DataEngineeringSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(DataEngineeringSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(DataEngineeringSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(DataEngineeringSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(DataEngineeringSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(DataEngineeringSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Data Science') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(DataScienceSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(DataScienceSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(DataScienceSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(DataScienceSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(DataScienceSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(DataScienceSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Head of Role for Data') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(HeadOfRoleForDataSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(HeadOfRoleForDataSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(HeadOfRoleForDataSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(HeadOfRoleForDataSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(HeadOfRoleForDataSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(HeadOfRoleForDataSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Content Designer') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(ContentDesignerSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(ContentDesignerSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(ContentDesignerSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(ContentDesignerSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(ContentDesignerSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(ContentDesignerSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Interaction Designer') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(InteractionDesignerSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(InteractionDesignerSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(InteractionDesignerSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(InteractionDesignerSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(InteractionDesignerSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(InteractionDesignerSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Technology Delivery Manager') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Outcome Technology Delivery Manager') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Head of Role for Delivery') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Delivery Manager') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Technology Project Manager') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(DeliverySkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Plan, Engage, Improve') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(PlanEngageAndImproveSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(PlanEngageAndImproveSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(PlanEngageAndImproveSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(PlanEngageAndImproveSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(PlanEngageAndImproveSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(PlanEngageAndImproveSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Design & Transition') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(DesignAndTransitionSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(DesignAndTransitionSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(DesignAndTransitionSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(DesignAndTransitionSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(DesignAndTransitionSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(DesignAndTransitionSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Deliver and Support') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(DeliverAndSupportSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(DeliverAndSupportSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(DeliverAndSupportSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(DeliverAndSupportSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(DeliverAndSupportSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(DeliverAndSupportSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'IT Operations Leadership') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(ItOperationsLeadershipSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(ItOperationsLeadershipSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(ItOperationsLeadershipSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(ItOperationsLeadershipSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(ItOperationsLeadershipSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(ItOperationsLeadershipSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Product Manager') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(ProductManagerSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(ProductManagerSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(ProductManagerSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(ProductManagerSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(ProductManagerSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(ProductManagerSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Accessibility and Digital Inclusion') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(AccessibilityandDigitalInclusionSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(AccessibilityandDigitalInclusionSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(AccessibilityandDigitalInclusionSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(AccessibilityandDigitalInclusionSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(AccessibilityandDigitalInclusionSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(AccessibilityandDigitalInclusionSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Performance Analyst') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Performance Tester') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'QAT Analyst') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'QAT Delivery') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Test Engineer') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Service Architect') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(ServiceSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(ServiceSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(ServiceSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(ServiceSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(ServiceSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(ServiceSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'Service Designer') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(ServiceSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(ServiceSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(ServiceSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(ServiceSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(ServiceSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(ServiceSkills, obj.value));
        this.skill6(req, options6);
      }
    } else if (req.sessionModel.get('grouping') === 'User Researcher') {
      if (req.form.options.route === '/skill1') {
        let options1 = req.form.options.fields.skill1.options;
        options1 = options1.filter(obj => _.includes(UserResearcherSkills, obj.value));
        this.skill1(req, options1);
      } else if (req.form.options.route === '/skill2') {
        let options2 = req.form.options.fields.skill2.options;
        options2 = options2.filter(obj => _.includes(UserResearcherSkills, obj.value));
        this.skill2(req, options2);
      } else if (req.form.options.route === '/skill3') {
        let options3 = req.form.options.fields.skill3.options;
        options3 = options3.filter(obj => _.includes(UserResearcherSkills, obj.value));
        this.skill3(req, options3);
      } else if (req.form.options.route === '/skill4') {
        let options4 = req.form.options.fields.skill4.options;
        options4 = options4.filter(obj => _.includes(UserResearcherSkills, obj.value));
        this.skill4(req, options4);
      } else if (req.form.options.route === '/skill5') {
        let options5 = req.form.options.fields.skill5.options;
        options5 = options5.filter(obj => _.includes(UserResearcherSkills, obj.value));
        this.skill5(req, options5);
      } else if (req.form.options.route === '/skill6') {
        let options6 = req.form.options.fields.skill6.options;
        options6 = options6.filter(obj => _.includes(UserResearcherSkills, obj.value));
        this.skill6(req, options6);
      }
    }
    next();
  }
};
