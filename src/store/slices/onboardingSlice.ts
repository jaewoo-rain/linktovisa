// 파일: src/store/slices/onboardingSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserFlow } from '../../constants/slides';

interface OnboardingState {
  userFlow: UserFlow;
  currentStepIndex: number;
}

const initialState: OnboardingState = {
  userFlow: null,
  currentStepIndex: 0,
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setUserFlow: (state, action: PayloadAction<UserFlow>) => {
      state.userFlow = action.payload;
      state.currentStepIndex = 0; // Reset step when flow changes
    },
    nextStep: (state) => {
      state.currentStepIndex += 1;
    },
    prevStep: (state) => {
      if (state.currentStepIndex > 0) {
        state.currentStepIndex -= 1;
      }
    },
    resetOnboarding: (state) => {
      state.userFlow = null;
      state.currentStepIndex = 0;
    }
  },
});

export const { setUserFlow, nextStep, prevStep, resetOnboarding } = onboardingSlice.actions;
export default onboardingSlice.reducer;