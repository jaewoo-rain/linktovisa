import React from 'react';
import { useOnboarding } from '../hooks/useOnboarding';
import OnboardingHeader from '../components/feature/common/OnboardingHeader';
import FlowSelectStep from '../components/feature/common/FlowSelectStep';
import SeekIntro from '../components/feature/seeker/SeekIntro';
import SeekPersonalInfo from '../components/feature/seeker/SeekPersonalInfo';
import EmpCompanyInfo from '../components/feature/employer/EmpCompanyInfo';
import EmpWorkConditions from '../components/feature/employer/EmpWorkConditions';
// ... 나머지 10개 컴포넌트 모두 import

const OnboardingPage = () => {
  const { currentKey } = useOnboarding();

const renderStep = () => {
  switch (currentKey) {
    case 'FlowSelectStep': return <FlowSelectStep />; // 사진 1 (공통)
    
    // 구직자 플로우 (사진 1~5)
    case 'SeekIntro': return <SeekIntro />;
    case 'SeekPersonalInfo': return <SeekPersonalInfo />;
    case 'SeekConsultInfo': return <SeekConsultInfo />;
    case 'SeekConnect': return <SeekConnect />;
    case 'SeekComplete': return <CompleteStep />;

    // 구인자 플로우 (사진 6~10)
    case 'EmpIntro': return <SeekIntro />; // Emp 전용 텍스트만 처리하면 됨
    case 'EmpCompanyInfo': return <EmpCompanyInfo />;
    case 'EmpWorkConditions': return <EmpWorkConditions />;
    case 'EmpAdditionalInfo': return <EmpAdditionalInfo />;
    case 'EmpComplete': return <CompleteStep />;
    
    default: return <FlowSelectStep />;
  }
};

  return (
    <div id="root">
      <OnboardingHeader />
      <div className="onboarding-layout">
        {renderStep()}
      </div>
    </div>
  );
};

export default OnboardingPage;