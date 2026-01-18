export type UserFlow = 'employer' | 'seeker' | null;
export type SlideType = 'common' | 'employer' | 'seeker';

export interface Slide {
  id: number;
  title: string;
  type: SlideType;
  component: string;
}

export const ONBOARDING_SLIDES: Slide[] = [
  // 1. 공통 (사진 1)
  { id: 1, title: '서비스 선택', type: 'common', component: 'FlowSelectStep' },

  // 2. 구인자 플로우 (사진 6~10)
  { id: 2, title: '진행 과정', type: 'employer', component: 'EmpProcessIntro' },
  { id: 3, title: '업체 정보', type: 'employer', component: 'CompanyInfoStep' },
  { id: 4, title: '근무 조건', type: 'employer', component: 'WorkConditionsStep' },
  { id: 5, title: '추가 사항', type: 'employer', component: 'AdditionalInfoStep' },
  { id: 6, title: '완료', type: 'employer', component: 'EmpCompleteStep' },

  // 3. 구직자 플로우 (사진 2~5)
  { id: 7, title: '진행 과정', type: 'seeker', component: 'SeekProcessIntro' },
  { id: 8, title: '기본 정보', type: 'seeker', component: 'PersonalInfoStep' },
  { id: 9, title: 'AI 상담', type: 'seeker', component: 'AIServiceSelectStep' },
  { id: 10, title: '상담 연결', type: 'seeker', component: 'AIServiceConnectStep' },
];