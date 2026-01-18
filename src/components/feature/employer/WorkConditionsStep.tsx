import React from 'react';
import { useOnboardingFlow } from '../../../hooks/useOnboardingFlow';
import OnboardingFooter from '../OnboardingFooter';
import Input from '../../ui/Input';
import Select from '../../ui/Select';

const WorkConditionsStep = () => {
  const { formData, setFormData } = useOnboardingFlow();

  const jobs = ['생산', '건설, 건축', '구매, 자재, 물류', '회계, 세무, 재무', '기획, 전략', '마케팅, 홍보', '인사, 노무', '총무, 법무', '디자인'];
  const days = ['월', '화', '수', '목', '금', '토', '일', '변동'];

  // 다중 선택 처리 함수
  const toggleSelection = (key: string, item: string) => {
    const currentList = (formData[key] as string[]) || [];
    const newList = currentList.includes(item)
      ? currentList.filter(i => i !== item)
      : [...currentList, item];
    setFormData(key, newList);
  };

  return (
    <div className="container">
      <div className="content-area">
        <div className="progress-header">
          <span className="step-label">● STEP 2</span>
          <h3>근무 조건 입력</h3>
        </div>

        <div className="form-group">
          <label>담당 업무</label>
          <div style={{ marginTop: '10px' }}>
            {jobs.map(job => (
              <div
                key={job}
                className={`selectable-tag ${(formData.jobs || []).includes(job) ? 'active' : ''}`}
                onClick={() => toggleSelection('jobs', job)}
              >
                {job}
              </div>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>근무 요일</label>
          <div style={{ marginTop: '10px' }}>
            {days.map(day => (
              <div
                key={day}
                className={`selectable-tag ${(formData.days || []).includes(day) ? 'active' : ''}`}
                onClick={() => toggleSelection('days', day)}
              >
                {day}
              </div>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>근무 시간</label>
          <div className="grid-2">
            <Select options={[{value: '09:00', label: '09:00'}]} defaultValue="09:00" />
            <Select options={[{value: '18:00', label: '18:00'}]} defaultValue="18:00" />
          </div>
        </div>

        <Input label="급여 (월 급여 예상)" placeholder="0" />
      </div>
      <OnboardingFooter />
    </div>
  );
};

export default WorkConditionsStep;