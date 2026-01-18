import React from 'react';
import { useOnboarding } from '../../../hooks/useOnboarding';

const SeekConnect = () => {
  const { handleNext } = useOnboarding();

  return (
    <div className="container text-center" style={{ padding: '100px 0' }}>
      <h2 style={{ marginBottom: '60px' }}>지금 바로 AI와 상담을 진행해보세요</h2>
      <button className="btn-primary" style={{ marginBottom: '16px' }}>상담 채널 입장하기</button>
      <button className="btn-secondary" onClick={handleNext}>홈으로</button>
    </div>
  );
};

export default SeekConnect;