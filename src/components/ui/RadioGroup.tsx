// 파일: src/components/ui/RadioGroup.tsx
interface RadioOption {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export const RadioGroup = ({ options }: { options: RadioOption[] }) => (
  <div className="flex flex-col gap-3">
    {options.map((opt) => (
      <label key={opt.value} className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          {opt.icon}
        </div>
        <span className="font-medium text-gray-700">{opt.label}</span>
        <input type="radio" name="radio-group" className="ml-auto" />
      </label>
    ))}
  </div>
);