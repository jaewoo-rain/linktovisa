import React from 'react';
import OnboardingFooter from './OnboardingFooter';

// 구인자/구직자 타입에 따라 다른 텍스트를 보여줌
const ProcessIntroStep = ({ type }: { type: 'seeker' | 'employer' }) => {
  const steps = type === 'seeker' ? [
    { id: '01', title: '채용 정보 입력', desc: '채용 정보를 입력해주세요' },
    { id: '02', title: 'AI 이력서 번역 및 검수', desc: '외국인 지원자의 이력서를 한국어로 번역하고 검수해요' },
    { id: '03', title: 'AI 채용 매칭', desc: '적합한 지원자의 이력서를 보내드려요' },
    { id: '04', title: '지원자 연결', desc: '업체와 적합한 인재를 확정하고 연결해요' }
  ] : [
    { id: '01', title: '지원자 정보 입력', desc: '지원자의 기본적인 정보를 입력해주세요' },
    { id: '02', title: 'AI 상담원 연결', desc: 'AI 상담원과 원하는 언어로 상담하세요' },
    { id: '03', title: 'AI 이력서 작성', desc: '상담된 내용을 기반으로 AI 이력서를 작성해드려요' },
    { id: '04', title: '채용 확정', desc: '채용을 희망하는 기업에서 연락이 올 거예요' }
  ];

  return (
    <div className="container">
      <div className="content-area">
        <h2 style={{ marginBottom: '40px' }}>서비스는<br/>이렇게 진행됩니다.</h2>
        {steps.map((step) => (
          <div key={step.id} style={{ marginBottom: '24px', borderBottom: '1px solid #f0f0f0', paddingBottom: '12px' }}>
            <h3 style={{ color: '#007bff', margin: '0 0 8px 0' }}>{step.id} {step.title}</h3>
            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>{step.desc}</p>
          </div>
        ))}
      </div>
      <OnboardingFooter />
    </div>
  );
};

export default ProcessIntroStep;