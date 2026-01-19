import { configureStore } from "@reduxjs/toolkit";
import onboardingReducer from "./slices/onboardingSlice";
import seekerOnboardingReducer from "./slices/seekerOnboardingSlice";
import employerOnboardingReducer from "./slices/employerOnboardingSlice";

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    seekerOnboarding: seekerOnboardingReducer,
    employerOnboarding: employerOnboardingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
