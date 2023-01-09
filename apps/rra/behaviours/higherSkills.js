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

  higherSkill1(req, options1) {
    if (req.form.options.route === '/higherSkill1') {
      req.form.options.fields.higherRraSkill.options = [{
        value: '',
        label: 'fields.higherRraSkill.options.null'
      }].concat(options1);
    }
  }
  higherSkill2(req, options2) {
    if (req.form.options.route === '/higherSkill2') {
      req.form.options.fields.higherRraSkill2.options = [{
        value: '',
        label: 'fields.higherRraSkill2.options.null'
      }].concat(options2);
    }
  }
  higherSkill3(req, options3) {
    if (req.form.options.route === '/higherSkill3') {
      req.form.options.fields.higherRraSkill3.options = [{
        value: '',
        label: 'fields.higherRraSkill3.options.null'
      }].concat(options3);
    }
  }
  higherSkill4(req, options4) {
    if (req.form.options.route === '/higherSkill4') {
      req.form.options.fields.higherRraSkill4.options = [{
        value: '',
        label: 'fields.higherRraSkill4.options.null'
      }].concat(options4);
    }
  }
  higherSkill5(req, options5) {
    if (req.form.options.route === '/higherSkill5') {
      req.form.options.fields.higherRraSkill5.options = [{
        value: '',
        label: 'fields.higherRraSkill5.options.null'
      }].concat(options5);
    }
  }
  higherSkill6(req, options6) {
    if (req.form.options.route === '/higherSkill6') {
      req.form.options.fields.higherRraSkill6.options = [{
        value: '',
        label: 'fields.higherRraSkill6.options.null'
      }].concat(options6);
    }
  }

  configure(req, res, next) {
    if (req.sessionModel.get('higherRraGrouping') === 'Business Analyst') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(BusinessAnalystSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(BusinessAnalystSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(BusinessAnalystSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(BusinessAnalystSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(BusinessAnalystSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(BusinessAnalystSkills, obj.value));
        this.higherSkill3(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Engineering Leadership') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(EngineeringLeadershipSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(EngineeringLeadershipSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(EngineeringLeadershipSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(EngineeringLeadershipSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(EngineeringLeadershipSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(EngineeringLeadershipSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Head of Role for Engineering') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(HeadOfRoleForEngineeringSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(HeadOfRoleForEngineeringSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(HeadOfRoleForEngineeringSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(HeadOfRoleForEngineeringSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(HeadOfRoleForEngineeringSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(HeadOfRoleForEngineeringSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Infrastructure Engineering') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(InfrastructureEngineeringSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(InfrastructureEngineeringSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(InfrastructureEngineeringSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(InfrastructureEngineeringSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(InfrastructureEngineeringSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(InfrastructureEngineeringSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Network Engineering') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(NetworkingEngineeringSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(NetworkingEngineeringSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(NetworkingEngineeringSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(NetworkingEngineeringSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(NetworkingEngineeringSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(NetworkingEngineeringSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Security Engineering') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(SecurityEngineeringSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(SecurityEngineeringSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(SecurityEngineeringSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(SecurityEngineeringSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(SecurityEngineeringSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(SecurityEngineeringSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Software and Dev Ops Engineering') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(SoftwareAndDevOpsSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(SoftwareAndDevOpsSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(SoftwareAndDevOpsSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(SoftwareAndDevOpsSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(SoftwareAndDevOpsSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(SoftwareAndDevOpsSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Business Architecture') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(BusinessArchitectureSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(BusinessArchitectureSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(BusinessArchitectureSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(BusinessArchitectureSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(BusinessArchitectureSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(BusinessArchitectureSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Data Architecture') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(DataArchitectureSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(DataArchitectureSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(DataArchitectureSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(DataArchitectureSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(DataArchitectureSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(DataArchitectureSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Security Architecture') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(SecurityArchitectureSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(SecurityArchitectureSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(SecurityArchitectureSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(SecurityArchitectureSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(SecurityArchitectureSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(SecurityArchitectureSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Technical Architecture') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(TechnicalArchitectureSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(TechnicalArchitectureSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(TechnicalArchitectureSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(TechnicalArchitectureSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(TechnicalArchitectureSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(TechnicalArchitectureSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Data Analysis') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(DataAnalystSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(DataAnalystSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(DataAnalystSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(DataAnalystSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(DataAnalystSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(DataAnalystSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Data Engineering') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(DataEngineeringSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(DataEngineeringSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(DataEngineeringSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(DataEngineeringSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(DataEngineeringSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(DataEngineeringSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Data Science') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(DataScienceSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(DataScienceSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(DataScienceSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(DataScienceSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(DataScienceSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(DataScienceSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Head of Role for Data') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(HeadOfRoleForDataSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(HeadOfRoleForDataSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(HeadOfRoleForDataSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(HeadOfRoleForDataSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(HeadOfRoleForDataSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(HeadOfRoleForDataSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Content Designer') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(ContentDesignerSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(ContentDesignerSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(ContentDesignerSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(ContentDesignerSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(ContentDesignerSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(ContentDesignerSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Interaction Designer') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(InteractionDesignerSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(InteractionDesignerSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(InteractionDesignerSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(InteractionDesignerSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(InteractionDesignerSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(InteractionDesignerSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Technology Delivery Manager') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Outcome Technology Delivery Manager') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Head of Role for Delivery') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Delivery Manager') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Technology Project Manager') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(DeliverySkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Plan, Engage, Improve') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(PlanEngageAndImproveSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(PlanEngageAndImproveSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(PlanEngageAndImproveSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(PlanEngageAndImproveSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(PlanEngageAndImproveSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(PlanEngageAndImproveSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Design & Transition') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(DesignAndTransitionSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(DesignAndTransitionSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(DesignAndTransitionSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(DesignAndTransitionSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(DesignAndTransitionSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(DesignAndTransitionSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Deliver and Support') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(DeliverAndSupportSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(DeliverAndSupportSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(DeliverAndSupportSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(DeliverAndSupportSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(DeliverAndSupportSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(DeliverAndSupportSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'IT Operations Leadership') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(ItOperationsLeadershipSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(ItOperationsLeadershipSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(ItOperationsLeadershipSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(ItOperationsLeadershipSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(ItOperationsLeadershipSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(ItOperationsLeadershipSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Product Manager') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(ProductManagerSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(ProductManagerSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(ProductManagerSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(ProductManagerSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(ProductManagerSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(ProductManagerSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Accessibility and Digital Inclusion') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(AccessibilityandDigitalInclusionSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(AccessibilityandDigitalInclusionSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(AccessibilityandDigitalInclusionSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(AccessibilityandDigitalInclusionSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(AccessibilityandDigitalInclusionSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(AccessibilityandDigitalInclusionSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Performance Analyst') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Performance Tester') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(PerformanceAnalysisSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'QAT Analyst') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'QAT Delivery') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Test Engineer') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(QualityAssuranceAndTestingSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Service Architect') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(ServiceSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(ServiceSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(ServiceSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(ServiceSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(ServiceSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(ServiceSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'Service Designer') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(ServiceSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(ServiceSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(ServiceSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(ServiceSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(ServiceSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(ServiceSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    } else if (req.sessionModel.get('higherRraGrouping') === 'User Researcher') {
      if (req.form.options.route === '/higherSkill1') {
        let options1 = req.form.options.fields.higherRraSkill.options;
        options1 = options1.filter(obj => _.includes(UserResearcherSkills, obj.value));
        this.higherSkill1(req, options1);
      } else if (req.form.options.route === '/higherSkill2') {
        let options2 = req.form.options.fields.higherRraSkill2.options;
        options2 = options2.filter(obj => _.includes(UserResearcherSkills, obj.value));
        this.higherSkill2(req, options2);
      } else if (req.form.options.route === '/higherSkill3') {
        let options3 = req.form.options.fields.higherRraSkill3.options;
        options3 = options3.filter(obj => _.includes(UserResearcherSkills, obj.value));
        this.higherSkill3(req, options3);
      } else if (req.form.options.route === '/higherSkill4') {
        let options4 = req.form.options.fields.higherRraSkill4.options;
        options4 = options4.filter(obj => _.includes(UserResearcherSkills, obj.value));
        this.higherSkill4(req, options4);
      } else if (req.form.options.route === '/higherSkill5') {
        let options5 = req.form.options.fields.higherRraSkill5.options;
        options5 = options5.filter(obj => _.includes(UserResearcherSkills, obj.value));
        this.higherSkill5(req, options5);
      } else if (req.form.options.route === '/higherSkill6') {
        let options6 = req.form.options.fields.higherRraSkill6.options;
        options6 = options6.filter(obj => _.includes(UserResearcherSkills, obj.value));
        this.higherSkill6(req, options6);
      }
    }
    next();
  }
};
