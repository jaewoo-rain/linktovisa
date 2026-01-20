type Weekday = "월" | "화" | "수" | "목" | "금" | "토" | "일" | "변동";

type WeekdaySelectorProps = {
    value: Weekday[];
    onChange: (days: Weekday[]) => void;
};

const DAYS: Weekday[] = ["월", "화", "수", "목", "금", "토", "일", "변동"];

export default function WeekdaySelector({ value, onChange }: WeekdaySelectorProps) {
    const toggleDay = (day: Weekday) => {
        if (value.includes(day)) onChange(value.filter((d) => d !== day));
        else onChange([...value, day]);
    };

    return (
        <div className="grid grid-cols-3 md:grid-cols-8 gap-2">
            {DAYS.map((d) => {
                const isSelected = value.includes(d);

                return (
                    <button
                        key={d}
                        type="button"
                        onClick={() => toggleDay(d)}
                        className={`
              h-10 rounded border
              flex items-center justify-center
              text-sm whitespace-nowrap
              transition-all
              ${isSelected
                                ? "bg-[#111111] text-white border-[#111111]"
                                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"}
            `}
                    >
                        {d}
                    </button>
                );
            })}
        </div>
    );
}
