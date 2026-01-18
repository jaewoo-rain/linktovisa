import React from 'react';
import styles from './EmpWorkConditions.module.css';
import { useOnboarding } from '../../../hooks/useOnboarding';

const EmpWorkConditions = () => {
  const { handleNext } = useOnboarding();
  const jobs = ['생산', '건설, 건축', '구매, 자재, 물류', '회계, 세무, 재무', '기획, 전략'];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.stepActive}>● STEP 2 근무 조건 입력</span>
      </div>
      <div className={styles.section}>
        <label>담당 업무</label>
        <div className={styles.checkboxGrid}>
          {jobs.map(job => (
            <label key={job}><input type="checkbox" /> {job}</label>
          ))}
        </div>
      </div>
      <div className={styles.field}>
        <label>급여 (월 급여 예상)</label>
        <div className={styles.inputWithUnit}>
          <input type="text" placeholder="0" />
          <span>원</span>
        </div>
      </div>
      <button className="btn-primary" onClick={handleNext}>다음으로</button>
    </div>
  );
};

export default EmpWorkConditions;