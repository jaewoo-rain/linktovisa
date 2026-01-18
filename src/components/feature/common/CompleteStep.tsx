import React from 'react';
import { useOnboarding } from '../../../hooks/useOnboarding';

const CompleteStep = () => {
  const { flow, handleReset } = useOnboarding();

  return (
    <div className="container text-center" style={{ padding: '120px 0' }}>
      <h2 style={{ lineHeight: '1.6', marginBottom: '60px' }}>
        {flow === 'seeker' 
          ? "적합한 일자리를 찾아\n연락처로 연락드릴게요" 
          : "적합한 지원자를 찾아\n담당자님의 연락처로 연락드릴게요"}
      </h2>
      <button className="btn-primary" onClick={handleReset}>완료</button>
    </div>
  );
};

export default CompleteStep;