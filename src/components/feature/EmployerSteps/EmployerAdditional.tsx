// 파일: src/components/feature/EmployerSteps/EmployerAdditional.tsx
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";
import { useOnboarding } from "../../../hooks/useOnboarding";
import StepEmployer from "../../ui/StepEmployer";
import Label from "../../ui/Label";
import { ToggleButtonGroup } from "../../ui/ToggleButtonGroup";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { submitConsultation } from "../../../api/consultation";

import {
  setCareers,
  setWelfares,
  setKoreanLevels,
  setPreference,
} from "../../../store/slices/employerOnboardingSlice";

const CAREER_OPTIONS = ["신입", "경력자", "신입/경력자"];
const WELFARE_OPTIONS = ["기숙사 제공", "식사 제공", "통근 버스"];
const KOREAN_LEVEL_OPTIONS = ["상", "중", "하"];

export const EmployerAdditional = () => {
  const { handleNext } = useOnboarding();
  const dispatch = useAppDispatch();


  const additional = useAppSelector((s) => s.employerOnboarding.additional);
  const onboardingAll = useAppSelector((s) => s.employerOnboarding);


  const onSubmit = async () => {
    try {
      console.log("전송 데이터:", onboardingAll);

      await submitConsultation({ ...onboardingAll, role: "employer" });

      handleNext();
    } catch (e) {
      console.error("상담 신청 실패", e);
    }
  };

  return (
    <div>
      <StepEmployer currentStep={3} />

      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
        <div>
          <Label>경력</Label>
          <ToggleButtonGroup
            options={CAREER_OPTIONS}
            value={additional.careers}
            onChange={(v) => dispatch(setCareers(v))}
            mode="multi"
            columns={3}
          />
        </div>

        <div>
          <Label>복지 및 혜택</Label>
          <ToggleButtonGroup
            options={WELFARE_OPTIONS}
            value={additional.welfares}
            onChange={(v) => dispatch(setWelfares(v))}
            mode="multi"
            columns={3}
          />
        </div>

        <div>
          <Label>한국어 수준</Label>
          <ToggleButtonGroup
            options={KOREAN_LEVEL_OPTIONS}
            value={additional.koreanLevels}
            onChange={(v) => dispatch(setKoreanLevels(v))}
            mode="multi"
            columns={3}
          />
        </div>

        <div>
          <Label>우대조건</Label>
          <Input
            placeholder="우대조건을 입력해주세요"
            className="h-20"
            value={additional.preference}
            onChange={(e) => dispatch(setPreference(e.target.value))}
          />
        </div>

        <Button onClick={onSubmit} fullWidth className="bg-gray-400">
          채용 정보 입력 완료
        </Button>
      </div>
    </div>
  );
};
