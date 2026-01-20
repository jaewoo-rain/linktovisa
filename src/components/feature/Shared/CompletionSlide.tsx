// 파일: src/components/feature/Shared/CompletionSlide.tsx
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../../hooks/useOnboarding';
import { Button } from '../../ui/Button';
import { useEffect } from 'react';

export const CompletionSlide = () => {
  const { userFlow } = useOnboarding();
  const isEmployer = userFlow === 'employer';
  const navigate = useNavigate();

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full  min-h-[50vh] mt-40">

      {/* 공통 폭 컨테이너 */}
      <div className="w-full max-w-[600px] px-6 text-center">
        <h2 className="text-[21px] sm:text-[30px] font-bold mb-4 leading-normal">
          {isEmployer ? (
            <>
              적합한 지원자를 찾아
              <br />
              담당자님의 연락처로 연락드릴게요
            </>
          ) : (
            "지금 바로 AI와 상담을 진행해보세요"
          )}
        </h2>

        <div className="mt-20 space-y-3">
          <Button
            className="w-full"
            onClick={() => {
              if (isEmployer) navigate("/");
              else console.log("상담 채널 입장하기 클릭");
            }}
          >
            {isEmployer ? "완료" : "상담 채널 입장하기"}
          </Button>

        </div>
      </div>

      <img
        src="/images/bg-bt-all.png"
        alt=""
        className="pointer-events-none w-full h-[300px] object-cover mt-32"
      />
    </div>
  );
};