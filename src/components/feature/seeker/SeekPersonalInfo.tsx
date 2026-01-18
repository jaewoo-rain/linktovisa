import React from 'react';
import styles from './SeekPersonalInfo.module.css';
import { useOnboarding } from '../../../hooks/useOnboarding';

const SeekPersonalInfo = () => {
  const { handleNext } = useOnboarding();

  return (
    <div className="container">
      <div className={styles.header}>
        <span className={styles.stepActive}>● STEP 1 지원자 정보 입력</span>
      </div>
      
      <div className="form-group">
        <label className="label">이름</label>
        <input type="text" placeholder="이름을 입력해주세요." />
      </div>

      <div className="form-group">
        <label className="label">생년월일</label>
        <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
          <select><option>2000</option></select>
          <select><option>12</option></select>
          <select><option>31</option></select>
        </div>
      </div>

      <div className="form-group">
        <label className="label">성별</label>
        <div className="grid-2">
          <button className={styles.genderBtnActive}>남성</button>
          <button className={styles.genderBtn}>여성</button>
        </div>
      </div>

      <div className="form-group">
        <label className="label">연락처</label>
        <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
          <input type="text" placeholder="010" />
          <input type="text" placeholder="1234" />
          <input type="text" placeholder="5678" />
        </div>
      </div>

      <button className="btn-primary" onClick={handleNext}>제출하기</button>
    </div>
  );
};

export default SeekPersonalInfo;