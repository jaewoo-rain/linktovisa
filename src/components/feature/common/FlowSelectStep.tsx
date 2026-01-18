import React from 'react';
import { useOnboarding } from '../../../hooks/useOnboarding';
import styles from './FlowSelectStep.module.css';

const FlowSelectStep = () => {
  const { handleChoice } = useOnboarding();

  return (
    <div className={styles.container}>
      <h2>원하시는 서비스를 선택해주세요</h2>
      <div className={styles.cardWrapper}>
        <div className={styles.card} onClick={() => handleChoice('seeker')}>
          <img src="/icons/seeker.png" alt="구직" />
          <h3>구직</h3>
          <p>일자리 찾기</p>
        </div>
        <div className={styles.card} onClick={() => handleChoice('employer')}>
          <img src="/icons/employer.png" alt="구인" />
          <h3>구인</h3>
          <p>근로자 찾기</p>
        </div>
      </div>
    </div>
  );
};

export default FlowSelectStep;