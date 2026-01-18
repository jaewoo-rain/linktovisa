import React from 'react';
import styles from './ProcessIntro.module.css';
import { useOnboarding } from '../../../hooks/useOnboarding';

const SeekIntro = () => {
  const { handleNext } = useOnboarding();
  const steps = [
    { id: '01', title: '지원자 정보 입력', desc: '지원자의 기본적인 정보를 입력해주세요' },
    { id: '02', title: 'AI 상담원 연결', desc: 'AI 상담원과 원하는 언어로 상담하세요' },
    { id: '03', title: 'AI 이력서 작성', desc: '상담된 내용을 기반으로 AI 이력서를 작성해드려요' },
    { id: '04', title: '채용 확정', desc: '채용을 희망하는 기업에서 연락이 올 거예요' }
  ];

  return (
    <div className={styles.container}>
      <h2>서비스는 이렇게 진행됩니다.</h2>
      {steps.map(s => (
        <div key={s.id} className={styles.stepRow}>
          <span className={styles.num}>{s.id}</span>
          <div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        </div>
      ))}
      <button className="btn-primary" onClick={handleNext}>정보 입력하기</button>
    </div>
  );
};