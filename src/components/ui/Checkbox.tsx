// 파일: src/components/ui/Checkbox.tsx
type CheckboxProps = {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  variant?: "multi" | "single"; // single이면 라디오처럼 보이게(동작은 부모가 제어)
};

export const Checkbox = ({
  label,
  checked = false,
  onChange,
  variant = "multi",
}: CheckboxProps) => {
  const boxClass =
    variant === "single"
      ? checked
        ? "bg-[#111111] border-[#111111]"
        : "bg-white border-gray-300"
      : checked
        ? "bg-[#111111] border-[#111111]"
        : "bg-white border-gray-300";

  return (
    <button
      type="button"
      onClick={() => onChange?.(!checked)}
      className="flex items-center gap-2 cursor-pointer text-left"
    >
      <div className={`w-5 h-5 border rounded flex items-center justify-center ${boxClass}`}>
        {checked && <span className="text-white text-xs">✓</span>}
      </div>
      <span className="text-xs text-gray-700 whitespace-nowrap">{label}</span>
    </button>
  );
};
