import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Weekday = "월" | "화" | "수" | "목" | "금" | "토" | "일" | "변동";

export type OpenDateValue = {
    year: string;
    month: string;
    day: string;
};

type EmployerBasicInfoState = {
    companyName: string;
    ceoName: string;
    openDate: OpenDateValue;
    bizRegNumber: string;
    managerName: string;
    managerEmailId: string;   // @ 앞
    managerEmailDomain: string; // @ 뒤
    phone1: string;
    phone2: string;
    phone3: string;
};

type EmployerConditionsState = {
    task: string | null;          // 단일
    workDays: Weekday[];          // 복수
    startTime: string;            // "HH:MM"
    endTime: string;              // "HH:MM"
    jobTypes: string[];           // 복수
    salaryRaw: string;            // 콤마 없는 숫자 문자열("1000000")
};

type EmployerAdditionalState = {
    careers: string[];      // 복수
    welfares: string[];     // 복수
    koreanLevels: string[]; // 복수
    preference: string;     // 우대조건 text
};

export type EmployerOnboardingState = {
    basicInfo: EmployerBasicInfoState;
    conditions: EmployerConditionsState;
    additional: EmployerAdditionalState;
};

const initialState: EmployerOnboardingState = {
    basicInfo: {
        companyName: "",
        ceoName: "",
        openDate: { year: "", month: "", day: "" },
        bizRegNumber: "",
        managerName: "",
        managerEmailId: "",
        managerEmailDomain: "",
        phone1: "",
        phone2: "",
        phone3: "",
    },
    conditions: {
        task: null,
        workDays: [],
        startTime: "09:00",
        endTime: "18:00",
        jobTypes: [],
        salaryRaw: "",
    },
    additional: {
        careers: [],
        welfares: [],
        koreanLevels: [],
        preference: "",
    },
};

const employerOnboardingSlice = createSlice({
    name: "employerOnboarding",
    initialState,
    reducers: {
        // ✅ BasicInfo
        setCompanyName(state, action: PayloadAction<string>) {
            state.basicInfo.companyName = action.payload;
        },
        setCeoName(state, action: PayloadAction<string>) {
            state.basicInfo.ceoName = action.payload;
        },
        setOpenDate(state, action: PayloadAction<OpenDateValue>) {
            state.basicInfo.openDate = action.payload;
        },
        setBizRegNumber(state, action: PayloadAction<string>) {
            state.basicInfo.bizRegNumber = action.payload;
        },
        setManagerName(state, action: PayloadAction<string>) {
            state.basicInfo.managerName = action.payload;
        },
        setManagerEmailId(state, action: PayloadAction<string>) {
            state.basicInfo.managerEmailId = action.payload;
        },
        setManagerEmailDomain(state, action: PayloadAction<string>) {
            state.basicInfo.managerEmailDomain = action.payload;
        },
        setPhone1(state, action: PayloadAction<string>) {
            state.basicInfo.phone1 = action.payload;
        },
        setPhone2(state, action: PayloadAction<string>) {
            state.basicInfo.phone2 = action.payload;
        },
        setPhone3(state, action: PayloadAction<string>) {
            state.basicInfo.phone3 = action.payload;
        },

        // ✅ Conditions
        setTask(state, action: PayloadAction<string | null>) {
            state.conditions.task = action.payload;
        },
        setWorkDays(state, action: PayloadAction<Weekday[]>) {
            state.conditions.workDays = action.payload;
        },
        setStartTime(state, action: PayloadAction<string>) {
            state.conditions.startTime = action.payload;
        },
        setEndTime(state, action: PayloadAction<string>) {
            state.conditions.endTime = action.payload;
        },
        setJobTypes(state, action: PayloadAction<string[]>) {
            state.conditions.jobTypes = action.payload;
        },
        setSalaryRaw(state, action: PayloadAction<string>) {
            state.conditions.salaryRaw = action.payload;
        },

        // ✅ Additional
        setCareers(state, action: PayloadAction<string[]>) {
            state.additional.careers = action.payload;
        },
        setWelfares(state, action: PayloadAction<string[]>) {
            state.additional.welfares = action.payload;
        },
        setKoreanLevels(state, action: PayloadAction<string[]>) {
            state.additional.koreanLevels = action.payload;
        },
        setPreference(state, action: PayloadAction<string>) {
            state.additional.preference = action.payload;
        },

        // 전체 초기화(원하면)
        resetEmployerOnboarding() {
            return initialState;
        },
    },
});

export const {
    setCompanyName,
    setCeoName,
    setOpenDate,
    setBizRegNumber,
    setManagerName,
    setManagerEmailId,
    setManagerEmailDomain,
    setPhone1,
    setPhone2,
    setPhone3,
    setTask,
    setWorkDays,
    setStartTime,
    setEndTime,
    setJobTypes,
    setSalaryRaw,
    setCareers,
    setWelfares,
    setKoreanLevels,
    setPreference,
    resetEmployerOnboarding,
} = employerOnboardingSlice.actions;

export default employerOnboardingSlice.reducer;
