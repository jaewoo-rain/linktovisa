import React from 'react';
import styles from './SeekConsultInfo.module.css';
import { useOnboarding } from '../../../hooks/useOnboarding';

const SeekConsultInfo = () => {
  const { handleNext } = useOnboarding();

  return (
    <div className="container">
      <div className={styles.header}>
        <span className={styles.stepActive}>● STEP 2 AI 상담 신청</span>
      </div>

      <div className="form-group">
        <label className="label">출신 국적</label>
        <select><option>출신 국적을 선택하세요</option></select>
      </div>

      <div className="form-group">
        <label className="label">원하는 상담 언어</label>
        <select><option>원하는 상담 언어를 선택하세요</option></select>
      </div>

      <div className="form-group">
        <label className="label">원하는 상담 채널</label>
        <div className={styles.channelCardActive}>
          <span className={styles.kakaoIcon}>🟡</span> KAKAOTALK
        </div>
        <div className={styles.channelCard}>
          <span className={styles.lineIcon}>🟢</span> LINE
        </div>
        <div className={styles.channelCard}>
          <span className={styles.whatsappIcon}>🟢</span> WHATSAPP
        </div>
      </div>

      <button className="btn-primary" onClick={handleNext}>상담 신청</button>
    </div>
  );
};

export default SeekConsultInfo;