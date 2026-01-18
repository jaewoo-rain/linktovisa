import React from 'react';
import styles from './EmpCompanyInfo.module.css';
import { useOnboarding } from '../../../hooks/useOnboarding';

const EmpCompanyInfo = () => {
  const { handleNext } = useOnboarding();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.stepActive}>● STEP 1 업체 정보 입력</span>
      </div>
      <div className={styles.grid2}>
        <div className={styles.field}>
          <label>회사명</label>
          <input type="text" placeholder="회사명" />
        </div>
        <div className={styles.field}>
          <label>대표자명</label>
          <input type="text" placeholder="대표자명" />
        </div>
      </div>
      <div className={styles.field}>
        <label>사업자 등록번호</label>
        <input type="text" placeholder="사업자 등록번호" />
      </div>
      <button className="btn-primary" onClick={handleNext}>다음으로</button>
    </div>
  );
};

export default EmpCompanyInfo;