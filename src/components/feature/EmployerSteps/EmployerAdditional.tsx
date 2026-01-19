// 파일: src/components/feature/EmployerSteps/EmployerAdditional.tsx
import { SectionTitle } from '../../ui/SectionTitle';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { useOnboarding } from '../../../hooks/useOnboarding';
import StepIndicator from '../../ui/StepIndicator';

export const EmployerAdditional = () => {
  const { handleNext } = useOnboarding();

  return (
    <div>
      <StepIndicator currentStep={3} />

      {/* <SectionTitle title="추가 사항 입력" /> */}

      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
        <div>
          <label className="font-bold block mb-2">경력</label>
          <div className="grid grid-cols-3 gap-2">
            <button className="h-10 border rounded text-sm">신입</button>
            <button className="h-10 border rounded text-sm">경력자</button>
            <button className="h-10 border rounded text-sm">신입/경력자</button>
          </div>
        </div>
        <div>
          <label className="font-bold block mb-2">복지 및 혜택</label>
          <div className="grid grid-cols-3 gap-2">
            <button className="h-10 border rounded text-sm">기숙사 제공</button>
            <button className="h-10 border rounded text-sm">식사 제공</button>
            <button className="h-10 border rounded text-sm">통근 버스</button>
          </div>
        </div>

        <div>
          <label className="font-bold block mb-2">우대조건</label>
          <Input placeholder="우대조건을 입력해주세요" className="h-24" />
        </div>

        <Button onClick={handleNext} fullWidth className="bg-gray-400">채용 정보 입력 완료</Button>
      </div>
    </div>
  );
};