// 파일: src/components/feature/EmployerSteps/EmployerConditions.tsx
import { SectionTitle } from '../../ui/SectionTitle';
import { Checkbox } from '../../ui/Checkbox';
import { Input } from '../../ui/Input';
import { Select } from '../../ui/Select';
import { Button } from '../../ui/Button';
import { useOnboarding } from '../../../hooks/useOnboarding';

export const EmployerConditions = () => {
  const { handleNext } = useOnboarding();

  return (
    <div>
      <div className="flex gap-4 mb-4 text-sm font-medium text-gray-400">
        <span>● STEP 1<br/>업체 정보 입력</span>
        <span className="text-primary">● STEP 2<br/>근무 조건 입력</span>
        <span>● STEP 3<br/>추가 사항 입력</span>
      </div>
      
      <SectionTitle title="근무 조건 입력" />

      <div className="space-y-8">
        <div>
          <label className="block text-sm font-medium mb-2">담당 업무</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Checkbox label="생산" />
            <Checkbox label="건설, 건축" />
            <Checkbox label="구매, 자재, 물류" />
            <Checkbox label="회계, 세무, 재무" checked />
            <Checkbox label="기획, 전략" />
            <Checkbox label="마케팅" />
            {/* More checkboxes... */}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">근무 요일</label>
          <div className="flex gap-2">
             {['월','화','수','목','금','토','일'].map(d => (
               <div key={d} className="flex-1 flex items-center justify-center h-10 border rounded">{d}</div>
             ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">근무 시간</label>
          <div className="grid grid-cols-3 gap-2 items-center">
            <Select options={[]} placeholder="업무 시작 시간" />
            <Select options={[]} placeholder="업무 종료 시간" />
            <div className="text-center text-sm">0 시간</div>
          </div>
        </div>
        
        <Button onClick={handleNext} fullWidth className="bg-gray-400 mt-4">다음으로</Button>
      </div>
    </div>
  );
};