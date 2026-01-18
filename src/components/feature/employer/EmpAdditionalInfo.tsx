import React from 'react';
import styles from './EmpAdditionalInfo.module.css';
import { useOnboarding } from '../../../hooks/useOnboarding';

const EmpAdditionalInfo = () => {
  const { handleNext } = useOnboarding();

  return (
    <div className="container">
      <div className={styles.header}>
        <span className={styles.stepActive}>● STEP 3 추가 사항 입력</span>
      </div>

      <div className="form-group">
        <label className="label">경력</label>
        <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
          <button className={styles.selectBtn}>신입</button>
          <button className={styles.selectBtn}>경력자</button>
          <button className={styles.selectBtnActive}>신입/경력자</button>
        </div>
      </div>

      <div className="form-group">
        <label className="label">복지 및 혜택</label>
        <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
          <button className={styles.selectBtn}>기숙사 제공</button>
          <button className={styles.selectBtn}>식사 제공</button>
          <button className={styles.selectBtn}>통근 버스 제공</button>
        </div>
      </div>

      <div className="form-group">
        <label className="label">한국어 수준</label>
        <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
          <button className={styles.selectBtn}>상</button>
          <button className={styles.selectBtnActive}>중</button>
          <button className={styles.selectBtn}>하</button>
        </div>
      </div>

      <div className="form-group">
        <label className="label">우대조건</label>
        <textarea className={styles.textarea} placeholder="우대조건을 입력해주세요" />
      </div>

      <button className="btn-primary" onClick={handleNext}>채용 정보 입력 완료</button>
    </div>
  );
};

export default EmpAdditionalInfo;