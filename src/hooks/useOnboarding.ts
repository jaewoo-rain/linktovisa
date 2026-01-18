// 파일: src/hooks/useOnboarding.ts
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setUserFlow } from '../store/slices/onboardingSlice';
import { UserFlow } from '../constants/slides';
import { ROUTE_PATHS, EMPLOYER_FLOW, SEEKER_FLOW } from '../constants/routes';

export const useOnboarding = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { userFlow } = useAppSelector((state) => state.onboarding);

  // 현재 경로가 어떤 플로우에 속하는지, 몇 번째 단계인지 파악
  const currentPath = location.pathname;
  const isEmployerFlow = currentPath.startsWith('/employer');
  const currentFlowPaths = isEmployerFlow ? EMPLOYER_FLOW : SEEKER_FLOW;
  const currentIndex = currentFlowPaths.indexOf(currentPath);

  // 역할 선택 (홈 화면에서 호출)
  const handleSelectRole = (role: UserFlow) => {
    dispatch(setUserFlow(role));
    if (role === 'employer') {
      navigate(ROUTE_PATHS.EMPLOYER.INTRO);
    } else {
      navigate(ROUTE_PATHS.SEEKER.INTRO);
    }
  };

  // 다음 단계 이동
  const handleNext = () => {
    if (currentIndex === -1) return; // 경로를 못 찾음

    if (currentIndex < currentFlowPaths.length - 1) {
      const nextPath = currentFlowPaths[currentIndex + 1];
      navigate(nextPath);
    }
  };

  // 이전 단계 이동
  const handlePrev = () => {
    // 첫 단계(Intro)에서는 홈으로 이동
    if (currentIndex === 0) {
      navigate(ROUTE_PATHS.HOME);
      return;
    }

    if (currentIndex > 0) {
      const prevPath = currentFlowPaths[currentIndex - 1];
      navigate(prevPath);
    }
  };

  return {
    userFlow: isEmployerFlow ? 'employer' : 'seeker', // URL 기반으로 현재 역할 추론
    handleSelectRole,
    handleNext,
    handlePrev,
    isFirstStep: currentIndex === 0,
    isLastStep: currentIndex === currentFlowPaths.length - 1
  };
};