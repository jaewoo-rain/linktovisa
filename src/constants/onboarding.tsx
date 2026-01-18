export type FlowType = 'seeker' | 'employer' | null;

export const ONBOARDING_COMPONENTS = {
  FLOW_SELECT: 'FlowSelectStep',
  SEEKER: ['SeekIntro', 'SeekPersonalInfo', 'SeekConsultInfo', 'SeekConnect', 'SeekComplete'],
  EMPLOYER: ['EmpIntro', 'EmpCompanyInfo', 'EmpWorkConditions', 'EmpAdditionalInfo', 'EmpComplete']
};