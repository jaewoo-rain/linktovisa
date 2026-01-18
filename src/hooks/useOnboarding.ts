import { useAppDispatch, useAppSelector } from './useAppRedux';
import { setFlow, nextStep, updateData, reset } from '../store/onboardingSlice';
import { ONBOARDING_STEPS, FlowType } from '../constants/onboarding';

export const useOnboarding = () => {
  const dispatch = useAppDispatch();
  const { flow, stepIndex, data } = useAppSelector((state) => state.onboarding);

  const handleChoice = (selectedFlow: FlowType) => dispatch(setFlow(selectedFlow));
  const handleNext = () => dispatch(nextStep());
  const handleUpdate = (val: any) => dispatch(updateData(val));
  const handleReset = () => dispatch(reset());

  const currentComponentKey = flow === null 
    ? ONBOARDING_STEPS.CHOICE 
    : (flow === 'seeker' ? ONBOARDING_STEPS.SEEKER[stepIndex] : ONBOARDING_STEPS.EMPLOYER[stepIndex]);

  return {
    flow,
    stepIndex,
    data,
    currentComponentKey,
    handleChoice,
    handleNext,
    handleUpdate,
    handleReset
  };
};