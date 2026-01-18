// 파일: src/components/feature/Shared/RoleSelection.tsx
import { useOnboarding } from '../../../hooks/useOnboarding';
import { Card } from '../../ui/Card';

export const RoleSelection = () => {
  const { handleSelectRole } = useOnboarding();

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-2xl font-bold mb-10 text-center">원하시는 서비스를 선택해주세요</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <Card 
          icon="💼" 
          title="일자리 찾기" 
          description={"간단한 정보를 입력하고\n5분 이내에 일자리를 찾아보세요"} 
          onClick={() => handleSelectRole('seeker')}
        />
        <Card 
          icon="👥" 
          title="근로자 찾기" 
          description={"기업 정보를 입력하고\n5분 이내에 이력서를 받아보세요"} 
          onClick={() => handleSelectRole('employer')}
        />
      </div>
    </div>
  );
};