import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FlowType } from '../constants/onboarding';

interface OnboardingState {
  flow: FlowType;
  stepIndex: number; // -1: 선택페이지, 0~4: 각 플로우 단계
  data: any;
}

const initialState: OnboardingState = {
  flow: null,
  stepIndex: -1,
  data: {}
};

export const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setFlow: (state, action: PayloadAction<FlowType>) => {
      state.flow = action.payload;
      state.stepIndex = 0;
    },
    nextStep: (state) => { state.stepIndex += 1; },
    updateData: (state, action: PayloadAction<any>) => {
      state.data = { ...state.data, ...action.payload };
    },
    reset: (state) => {
      state.flow = null;
      state.stepIndex = -1;
      state.data = {};
    }
  }
});

export const { setFlow, nextStep, updateData, reset } = onboardingSlice.actions;
export default onboardingSlice.reducer;