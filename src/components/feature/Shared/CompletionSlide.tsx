// 파일: src/components/feature/Shared/CompletionSlide.tsx
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../../hooks/useOnboarding';
import { Button } from '../../ui/Button';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { resetSeekerOnboarding } from "../../../store/slices/seekerOnboardingSlice";
import { resetEmployerOnboarding } from "../../../store/slices/employerOnboardingSlice";

export const CompletionSlide = () => {
  const { userFlow } = useOnboarding();
  const isEmployer = userFlow === 'employer';
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // 유저가 선택한 링크 가져오기
  const channelLink = useAppSelector(
    (s) => s.seekerOnboarding.consultation.channelLink
  );

  const handleEnterChannel = () => {
    if (!channelLink) {
      alert("상담 채널이 선택되지 않았어요. 이전 단계에서 채널을 선택해주세요.");
      return;
    }
    window.open(channelLink, "_blank", "noopener,noreferrer");

    dispatch(resetEmployerOnboarding());
    dispatch(resetSeekerOnboarding());
  };

  return (
    <div className="relative h-[90dvh] overflow-hidden">
      {/* 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 h-full">
        <div className="w-full max-w-[600px] -translate-y-10">
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

          <div className="mt-16 space-y-3">
            <Button
              className="w-full"
              onClick={() => {
                if (isEmployer) navigate("/");
                else handleEnterChannel();
              }}
            >
              {isEmployer ? "완료" : "상담 채널 입장하기"}
            </Button>
          </div>
        </div>
      </div>

      {/* 하단 배경 */}
      <img
        src="/images/bg-bt-all.png"
        alt=""
        className="
      pointer-events-none
      absolute bottom-0 left-0
      w-full
      h-[280px] sm:h-[340px]
      object-cover
      translate-y-1/3
    "
      />
    </div>
  );
};