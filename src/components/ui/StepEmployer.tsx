type StepIndicatorProps = {
    currentStep: 1 | 2 | 3;
    className?: string;
};

const STEPS = [
    { step: 1, label: "업체 정보 입력" },
    { step: 2, label: "근무 조건 입력" },
    { step: 3, label: "추가 사항 입력" },
] as const;

export default function StepEmployer({
    currentStep,
    className = "",
}: StepIndicatorProps) {
    return (
        <>
            {/* 모바일 전용 UI (sm 미만) */}
            <div className={`sm:hidden w-full pb-3 ${className}`}>
                <div className="flex items-start justify-between">
                    {STEPS.map(({ step, label }) => {
                        const isActive = currentStep === step;
                        const isDone = currentStep > step;

                        return (
                            <div key={step} className="flex flex-col items-center flex-1">
                                {/* 동그라미 */}
                                <div
                                    className={[
                                        "w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg",
                                        isActive || isDone ? "bg-primary text-white" : "bg-gray-300 text-white",
                                    ].join(" ")}
                                >
                                    {step}
                                </div>

                                {/* 라벨 */}
                                <div
                                    className={[
                                        "mt-3 text-center text-sm font-semibold leading-snug whitespace-nowrap",
                                        isActive ? "text-primary" : "text-gray-400",
                                    ].join(" ")}
                                >
                                    {label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* PC/태블릿 UI (sm 이상) - 기존 유지 */}
            <div
                className={`hidden sm:flex justify-center gap-10 mb-4 font-medium text-gray-400 ${className}`}
            >
                {STEPS.map(({ step, label }) => {
                    const isActive = currentStep === step;

                    return (
                        <span key={step} className={`${isActive ? "text-primary" : ""}`}>
                            ● STEP {step}
                            <br />
                            <strong className="text-[25px]">{label}</strong>
                        </span>
                    );
                })}
            </div>
        </>
    );
}
