// 파일: src/components/feature/EmployerSteps/EmployerBasicInfo.tsx
import { SectionTitle } from '../../ui/SectionTitle';
import { Input } from '../../ui/Input';
import { Select } from '../../ui/Select';
import { Button } from '../../ui/Button';
import { useOnboarding } from '../../../hooks/useOnboarding';

export const EmployerBasicInfo = () => {
  const { handleNext } = useOnboarding();
  
  return (
    <div>
      <SectionTitle step="STEP 1" title="업체 정보 입력" />
      
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <Input label="회사명" placeholder="회사명" />
          <Input label="대표자명" placeholder="대표자명" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">개업 연월일 입력</label>
          <div className="grid grid-cols-3 gap-2">
            <Select options={[{value:'2000', label:'2000'}]} placeholder="2000" />
            <Select options={[{value:'12', label:'12'}]} placeholder="12" />
            <Select options={[{value:'31', label:'31'}]} placeholder="31" />
          </div>
        </div>

        <Input label="사업자 등록번호" placeholder="사업자 등록번호" />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">담당자명 및 연락처</label>
          <div className="space-y-2">
            <Input placeholder="담당자명" />
            <div className="flex items-center gap-2">
              <Input placeholder="담당자 이메일 주소" />
              <span>@</span>
              <Input placeholder="naver.com" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Input placeholder="010" />
              <Input placeholder="1234" />
              <Input placeholder="5678" />
            </div>
          </div>
        </div>

        <Button onClick={handleNext} fullWidth className="bg-gray-400 hover:bg-gray-500 text-white mt-8">다음으로</Button>
      </div>
    </div>
  );
};