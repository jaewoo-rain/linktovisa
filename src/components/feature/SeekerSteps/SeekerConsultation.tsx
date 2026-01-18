// 파일: src/components/feature/SeekerSteps/SeekerConsultation.tsx
import { SectionTitle } from '../../ui/SectionTitle';
import { Select } from '../../ui/Select';
import { RadioGroup } from '../../ui/RadioGroup';
import { Button } from '../../ui/Button';
import { useOnboarding } from '../../../hooks/useOnboarding';

export const SeekerConsultation = () => {
  const { handleNext } = useOnboarding();

  return (
    <div>
      <div className="flex gap-4 mb-4 text-sm font-medium">
        <span className="text-gray-300">● STEP 1<br/>지원자 정보 입력</span>
        <span className="text-primary">● STEP 2<br/>AI 상담 신청</span>
      </div>

      <div className="bg-white p-4 rounded-lg space-y-6">
        <div>
          <label className="font-bold block mb-2">출신 국적</label>
          <Select options={[]} placeholder="출신 국적을 선택하세요" />
        </div>
        
        <div>
          <label className="font-bold block mb-2">원하는 상담 언어</label>
          <Select options={[]} placeholder="원하는 상담 언어를 선택하세요" />
        </div>

        <div>
          <label className="font-bold block mb-2">원하는 상담 채널</label>
          <RadioGroup options={[
            { label: 'KAKAOTALK', value: 'kakao', icon: <span className="text-yellow-400">●</span> },
            { label: 'LINE', value: 'line', icon: <span className="text-green-500">●</span> },
            { label: 'WHATSAPP', value: 'whatsapp', icon: <span className="text-green-600">●</span> }
          ]} />
        </div>

        <Button onClick={handleNext} fullWidth className="bg-gray-400 mt-8">상담 신청</Button>
      </div>
    </div>
  );
};