import { useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { setUserFlow } from "../store/slices/onboardingSlice";
import { ROUTE_PATHS, EMPLOYER_FLOW, SEEKER_FLOW } from "../constants/routes";
import type { UserFlow } from "../constants/slides";

type Flow = Exclude<UserFlow, null>; // ✅ "employer" | "seeker"

export const useOnboarding = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const currentPath = location.pathname;
  const isEmployerFlow = currentPath.startsWith("/employer");

  const currentFlowPaths: readonly string[] =
    isEmployerFlow ? EMPLOYER_FLOW : SEEKER_FLOW;

  const currentIndex = currentFlowPaths.indexOf(currentPath);

  const handleSelectRole = (role: Flow) => {
    dispatch(setUserFlow(role)); // ✅ as any 제거

    if (role === "employer") navigate(ROUTE_PATHS.EMPLOYER.INTRO);
    else navigate(ROUTE_PATHS.SEEKER.INTRO);
  };

  const handleNext = () => {
    if (currentIndex === -1) return;
    if (currentIndex < currentFlowPaths.length - 1) {
      navigate(currentFlowPaths[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      navigate(ROUTE_PATHS.HOME);
      return;
    }
    if (currentIndex > 0) {
      navigate(currentFlowPaths[currentIndex - 1]);
    }
  };

  return {
    userFlow: (isEmployerFlow ? "employer" : "seeker") as Flow,
    handleSelectRole,
    handleNext,
    handlePrev,
    isFirstStep: currentIndex === 0,
    isLastStep: currentIndex === currentFlowPaths.length - 1,
  };
};
