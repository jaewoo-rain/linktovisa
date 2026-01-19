type Weekday = "월" | "화" | "수" | "목" | "금" | "토" | "일" | "변동";

type WeekdaySelectorProps = {
    value: Weekday[];
    onChange: (days: Weekday[]) => void;
};

const DAYS: Weekday[] = ["월", "화", "수", "목", "금", "토", "일", "변동"];

export default function WeekdaySelector({ value, onChange }: WeekdaySelectorProps) {
    const toggleDay = (day: Weekday) => {
        if (value.includes(day)) {
            onChange(value.filter((d) => d !== day));
        } else {
            onChange([...value, day]);
        }
    };

    return (
        <div className="flex gap-2">
            {DAYS.map((d) => {
                const isSelected = value.includes(d);

                return (
                    <button
                        key={d}
                        type="button"
                        onClick={() => toggleDay(d)}
                        className={`
              flex-1 h-10 rounded border
              flex items-center justify-center
              transition-all
              ${isSelected
                                ? "bg-primary text-white border-primary"
                                : "bg-white text-gray-700 hover:bg-gray-100"}
            `}
                    >
                        {d}
                    </button>
                );
            })}
        </div>
    );
}
