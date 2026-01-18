import React from 'react';
import { useOnboardingFlow } from '../hooks/useOnboardingFlow';
import OnboardingHeader from '../components/feature/OnboardingHeader';
import FlowSelectStep from '../components/feature/FlowSelectStep';
import ProcessIntroStep from '../components/feature/ProcessIntroStep';
import PersonalInfoStep from '../components/feature/seeker/PersonalInfoStep';
import AIServiceSelectStep from '../components/feature/seeker/AIServiceSelectStep';
import AIServiceConnectStep from '../components/feature/seeker/AIServiceConnectStep';
import CompanyInfoStep from '../components/feature/employer/CompanyInfoStep';
import WorkConditionsStep from '../components/feature/employer/WorkConditionsStep';
import AdditionalInfoStep from '../components/feature/employer/AdditionalInfoStep';
import OnboardingFooter from '../components/feature/OnboardingFooter';

const OnboardingPage = () => {
  const { currentSlide } = useOnboardingFlow();

  if (!currentSlide) return <div>Loading...</div>;

  const stepComponents: Record<string, React.ReactNode> = {
    // 1. 공통
    'FlowSelectStep': <FlowSelectStep />,
    
    // 2. 구인자 (Employer)
    'EmpProcessIntro': <ProcessIntroStep type="employer" />,
    'CompanyInfoStep': <CompanyInfoStep />,
    'WorkConditionsStep': <WorkConditionsStep />,
    'AdditionalInfoStep': <AdditionalInfoStep />,
    'EmpCompleteStep': (
      <div className="container text-center" style={{ justifyContent: 'center' }}>
        <h2>적합한 지원자를 찾아<br/>담당자님의 연락처로<br/>연락드릴게요</h2>
        <div style={{ marginTop: '40px' }}><OnboardingFooter /></div>
      </div>
    ),

    // 3. 구직자 (Seeker)
    'SeekProcessIntro': <ProcessIntroStep type="seeker" />,
    'PersonalInfoStep': <PersonalInfoStep />,
    'AIServiceSelectStep': <AIServiceSelectStep />,
    'AIServiceConnectStep': <AIServiceConnectStep />,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <OnboardingHeader />
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {stepComponents[currentSlide.component] || <div>Page Not Found</div>}
      </div>
    </div>
  );
};

export default OnboardingPage;