import React from "react";

export type OpenDateValue = {
    year: string;
    month: string;
    day: string;
};

type OpenDateInputProps = {
    value: OpenDateValue;
    onChange: (next: OpenDateValue) => void;
    className?: string;
};

export default function OpenDateInput({ value, onChange, className = "" }: OpenDateInputProps) {
    return (
        <div className={className}>
            <div className="flex gap-3">
                {/* 년 */}
                <div className="relative w-full">
                    <input
                        type="number"
                        value={value.year}
                        onChange={(e) => onChange({ ...value, year: e.target.value })}
                        className="w-full h-12 pl-4 pr-10 border border-gray-200 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="2000"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm pointer-events-none">
                        년
                    </span>
                </div>

                {/* 월 */}
                <div className="relative w-full">
                    <input
                        type="number"
                        min={1}
                        max={12}
                        step={1}
                        inputMode="numeric"
                        value={value.month}
                        onChange={(e) => onChange({ ...value, month: e.target.value })}
                        className="w-full h-12 pl-4 pr-10 border border-gray-200 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="12"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm pointer-events-none">
                        월
                    </span>
                </div>

                {/* 일 */}
                <div className="relative w-full">
                    <input
                        type="number"
                        min={1}
                        max={31}
                        step={1}
                        inputMode="numeric"
                        value={value.day}
                        onChange={(e) => onChange({ ...value, day: e.target.value })}
                        className="w-full h-12 pl-4 pr-10 border border-gray-200 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="31"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm pointer-events-none">
                        일
                    </span>
                </div>
            </div>
        </div>
    );
}
