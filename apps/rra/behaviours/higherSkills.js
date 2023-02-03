'use strict';

const _ = require('lodash');
const staticSfiaSkills = require('../lib/staticSfiaSkills');

const SoftwareAndDevOpsSkills = staticSfiaSkills.getStaticSoftwareAndDevOpsSfiaSkills();
const InfrastructureEngineeringSkills = staticSfiaSkills.getStaticInfrastructureEngineeringSfiaSkills();
const NetworkingEngineeringSkills = staticSfiaSkills.getStaticNetworkingEngineeringSfiaSkills();
const SecurityEngineeringSkills = staticSfiaSkills.getStaticSecurityEngineeringSfiaSkills();
const EngineeringLeadershipSkills = staticSfiaSkills.getStaticEngineeringLeadershipSfiaSkills();
const HeadOfRoleForEngineeringSkills = staticSfiaSkills.getStaticHeadOfRoleForEngineeringSfiaSkills();
const BusinessArchitectureSkills = staticSfiaSkills.getStaticBusinessArchitectureSkills();
const DataArchitectureSkills = staticSfiaSkills.getStaticDataArchitectureSkills();
const SecurityArchitectureSkills = staticSfiaSkills.getStaticSecurityArchitectureSkills();
const TechnicalArchitectureSkills = staticSfiaSkills.getStaticTechnicalArchitectureSkills();
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

  higherSkill1(req, options1) {
    if (req.form.options.route === '/higherSkill1') {
      req.form.options.fields.higherSkill1.options = [{
        value: '',
        label: 'fields.higherSkill1.options.null'
      }].concat(options1);
    }
  }
  higherSkill2(req, options2) {
    if (req.form.options.route === '/higherSkill2') {
      req.form.options.fields.higherSkill2.options = [{
        value: '',
        label: 'fields.higherSkill2.options.null'
      }].concat(options2);
    }
  }
  higherSkill3(req, options3) {
    if (req.form.options.route === '/higherSkill3') {
      req.form.options.fields.higherSkill3.options = [{
        value: '',
        label: 'fields.higherSkill3.options.null'
      }].concat(options3);
    }
  }
  higherSkill4(req, options4) {
    if (req.form.options.route === '/higherSkill4') {
      req.form.options.fields.higherSkill4.options = [{
        value: '',
        label: 'fields.higherSkill4.options.null'
      }].concat(options4);
    }
  }
  higherSkill5(req, options5) {
    if (req.form.options.route === '/higherSkill5') {
      req.form.options.fields.higherSkill5.options = [{
        value: '',
        label: 'fields.higherSkill5.options.null'
      }].concat(options5);
    }
  }
  higherSkill6(req, options6) {
    if (req.form.options.route === '/higherSkill6') {
      req.form.options.fields.higherSkill6.options = [{
        value: '',
        label: 'fields.higherSkill6.options.null'
      }].concat(options6);
    }
  }

  configure(req, res, next) {
    if (req.sessionModel.get('higherGrouping') === 'Business Analyst') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(BusinessAnalystSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(BusinessAnalystSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(BusinessAnalystSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(BusinessAnalystSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(BusinessAnalystSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(BusinessAnalystSkills, obj.value));
        this.higherSkill3(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Engineering Leadership') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(EngineeringLeadershipSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(EngineeringLeadershipSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(EngineeringLeadershipSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(EngineeringLeadershipSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(EngineeringLeadershipSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(EngineeringLeadershipSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Head of Role for Engineering') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(HeadOfRoleForEngineeringSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(HeadOfRoleForEngineeringSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(HeadOfRoleForEngineeringSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(HeadOfRoleForEngineeringSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(HeadOfRoleForEngineeringSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(HeadOfRoleForEngineeringSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Infrastructure Engineering') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(InfrastructureEngineeringSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(InfrastructureEngineeringSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(InfrastructureEngineeringSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(InfrastructureEngineeringSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(InfrastructureEngineeringSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(InfrastructureEngineeringSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Network Engineering') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(NetworkingEngineeringSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(NetworkingEngineeringSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(NetworkingEngineeringSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(NetworkingEngineeringSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(NetworkingEngineeringSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(NetworkingEngineeringSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Security Engineering') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(SecurityEngineeringSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(SecurityEngineeringSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(SecurityEngineeringSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(SecurityEngineeringSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(SecurityEngineeringSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(SecurityEngineeringSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Software and Dev Ops Engineering') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(SoftwareAndDevOpsSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(SoftwareAndDevOpsSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(SoftwareAndDevOpsSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(SoftwareAndDevOpsSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(SoftwareAndDevOpsSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(SoftwareAndDevOpsSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Business Architecture') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(BusinessArchitectureSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(BusinessArchitectureSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(BusinessArchitectureSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(BusinessArchitectureSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(BusinessArchitectureSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(BusinessArchitectureSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Data Architecture') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(DataArchitectureSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(DataArchitectureSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(DataArchitectureSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(DataArchitectureSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(DataArchitectureSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(DataArchitectureSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Security Architecture') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(SecurityArchitectureSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(SecurityArchitectureSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(SecurityArchitectureSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(SecurityArchitectureSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(SecurityArchitectureSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(SecurityArchitectureSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Technical Architecture') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(TechnicalArchitectureSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(TechnicalArchitectureSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(TechnicalArchitectureSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(TechnicalArchitectureSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(TechnicalArchitectureSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(TechnicalArchitectureSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Data Analysis') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(DataAnalystSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(DataAnalystSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(DataAnalystSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(DataAnalystSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(DataAnalystSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(DataAnalystSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Data Engineering') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(DataEngineeringSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(DataEngineeringSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(DataEngineeringSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(DataEngineeringSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(DataEngineeringSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(DataEngineeringSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Data Science') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(DataScienceSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(DataScienceSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(DataScienceSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(DataScienceSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(DataScienceSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(DataScienceSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Head of Role for Data') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(HeadOfRoleForDataSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(HeadOfRoleForDataSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(HeadOfRoleForDataSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(HeadOfRoleForDataSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(HeadOfRoleForDataSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(HeadOfRoleForDataSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Content Designer') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(ContentDesignerSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(ContentDesignerSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(ContentDesignerSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(ContentDesignerSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(ContentDesignerSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(ContentDesignerSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Interaction Designer') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(InteractionDesignerSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(InteractionDesignerSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(InteractionDesignerSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(InteractionDesignerSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(InteractionDesignerSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(InteractionDesignerSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Technology Delivery Manager') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Outcome Technology Delivery Manager') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Head of Role for Delivery') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Delivery Manager') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Technology Project Manager') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Plan, Engage, Improve') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(PlanEngageAndImproveSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(PlanEngageAndImproveSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(PlanEngageAndImproveSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(PlanEngageAndImproveSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(PlanEngageAndImproveSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(PlanEngageAndImproveSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Design & Transition') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(DesignAndTransitionSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(DesignAndTransitionSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(DesignAndTransitionSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(DesignAndTransitionSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(DesignAndTransitionSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(DesignAndTransitionSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Deliver and Support') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(DeliverAndSupportSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(DeliverAndSupportSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(DeliverAndSupportSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(DeliverAndSupportSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(DeliverAndSupportSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(DeliverAndSupportSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'IT Operations Leadership') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(ItOperationsLeadershipSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(ItOperationsLeadershipSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(ItOperationsLeadershipSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(ItOperationsLeadershipSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(ItOperationsLeadershipSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(ItOperationsLeadershipSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Product Manager') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(ProductManagerSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(ProductManagerSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(ProductManagerSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(ProductManagerSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(ProductManagerSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(ProductManagerSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Accessibility and Digital Inclusion') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(AccessibilityandDigitalInclusionSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(AccessibilityandDigitalInclusionSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(AccessibilityandDigitalInclusionSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(AccessibilityandDigitalInclusionSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(AccessibilityandDigitalInclusionSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(AccessibilityandDigitalInclusionSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Performance Analyst') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Performance Tester') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'QAT Analyst') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'QAT Delivery') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Test Engineer') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Service Architect') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(ServiceSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(ServiceSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(ServiceSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(ServiceSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(ServiceSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(ServiceSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'Service Designer') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(ServiceSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(ServiceSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(ServiceSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(ServiceSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(ServiceSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(ServiceSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherGrouping') === 'User Researcher') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherSkill1.options;
        options1 = options1.filter(obj => _.includes(UserResearcherSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherSkill2.options;
        options2 = options2.filter(obj => _.includes(UserResearcherSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherSkill3.options;
        options3 = options3.filter(obj => _.includes(UserResearcherSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherSkill4.options;
        options4 = options4.filter(obj => _.includes(UserResearcherSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherSkill5.options;
        options5 = options5.filter(obj => _.includes(UserResearcherSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherSkill6.options;
        options6 = options6.filter(obj => _.includes(UserResearcherSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    }
    next();
  }
};
