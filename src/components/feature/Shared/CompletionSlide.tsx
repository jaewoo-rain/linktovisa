// 파일: src/components/feature/Shared/CompletionSlide.tsx
import { useOnboarding } from '../../../hooks/useOnboarding';
import { Button } from '../../ui/Button';

export const CompletionSlide = () => {
  const { userFlow } = useOnboarding();
  const isEmployer = userFlow === 'employer';

  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[50vh] text-center">
      <h2 className="text-2xl font-bold mb-4">
        {isEmployer 
          ? "적합한 지원자를 찾아\n담당자님의 연락처로 연락드릴게요" 
          : "지금 바로 AI와 상담을 진행해보세요"}
      </h2>
      
      <div className="mt-10 w-full space-y-3">
        <Button fullWidth>{isEmployer ? "완료" : "상담 채널 입장하기"}</Button>
        {!isEmployer && <Button fullWidth variant="ghost">홈으로</Button>}
      </div>
    </div>
  );
};