import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserFlow } from '../constants/onboarding';

interface OnboardingState {
  userFlow: UserFlow;
  currentStepIndex: number;
  formData: Record<string, any>; // 어떤 데이터든 담을 수 있게 허용
}

const initialState: OnboardingState = {
  userFlow: null,
  currentStepIndex: 0,
  formData: {},
};

export const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setUserFlow: (state, action: PayloadAction<UserFlow>) => {
      state.userFlow = action.payload;
      state.currentStepIndex = 0;
      state.formData = {};
    },
    nextStep: (state) => { state.currentStepIndex += 1; },
    prevStep: (state) => { state.currentStepIndex -= 1; },
    updateFormData: (state, action: PayloadAction<{ key: string; value: any }>) => {
      state.formData[action.payload.key] = action.payload.value;
    },
    resetOnboarding: (state) => {
      state.userFlow = null;
      state.currentStepIndex = 0;
      state.formData = {};
    }
  },
});

export const { setUserFlow, nextStep, prevStep, updateFormData, resetOnboarding } = onboardingSlice.actions;
export default onboardingSlice.reducer;