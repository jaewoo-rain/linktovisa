// 파일: src/components/ui/ToggleButtonGroup.tsx
import React from "react";

type ToggleMode = "single" | "multi";

type ToggleButtonGroupProps = {
    options: string[];
    value: string[]; // 선택된 값들(항상 배열로 관리)
    onChange: (next: string[]) => void;

    mode?: ToggleMode; // single이면 1개만, multi면 중복 선택 가능
    columns?: 2 | 3 | 4 | 5 | 6; // 동적 클래스 금지 → 아래에서 안전하게 매핑
    buttonClassName?: string;

    // UX 옵션
    allowEmpty?: boolean; // single일 때 이미 선택된 걸 다시 누르면 해제 가능할지
};

export const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
    options,
    value,
    onChange,
    mode = "multi",
    columns = 3,
    buttonClassName = "",
    allowEmpty = true,
}) => {
    const colClass =
        columns === 2
            ? "grid-cols-2"
            : columns === 3
                ? "grid-cols-3"
                : columns === 4
                    ? "grid-cols-4"
                    : columns === 5
                        ? "grid-cols-5"
                        : "grid-cols-6";

    const toggle = (opt: string) => {
        const active = value.includes(opt);

        // 단일 선택
        if (mode === "single") {
            if (active) {
                // allowEmpty=false면 해제 금지
                onChange(allowEmpty ? [] : value);
            } else {
                onChange([opt]);
            }
            return;
        }

        // 다중 선택
        if (active) onChange(value.filter((v) => v !== opt));
        else onChange([...value, opt]);
    };

    return (
        <div className={`grid ${colClass} gap-2`}>
            {options.map((opt) => {
                const active = value.includes(opt);

                return (
                    <button
                        key={opt}
                        type="button"
                        onClick={() => toggle(opt)}
                        aria-pressed={active}
                        className={`
              h-16 rounded border text-sm
              flex items-center justify-center
              transition-all break-words
              ${active
                                ? "bg-[#111111] text-white border-[#111111]"
                                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                            }
              ${buttonClassName}
            `}
                    >
                        {opt}
                    </button>
                );
            })}
        </div>
    );
};
