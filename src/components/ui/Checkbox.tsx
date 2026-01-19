// 파일: src/components/ui/Checkbox.tsx
export const Checkbox = ({ label, checked }: { label: string, checked?: boolean }) => (
  <label className="flex items-center gap-2 cursor-pointer">
    <div className={`w-5 h-5 border rounded flex items-center justify-center ${checked ? 'bg-gray-800 border-gray-800' : 'border-gray-300 bg-white'}`}>
      {checked && <span className="text-white text-xs">✓</span>}
    </div>
    <span className="text-xs text-gray-700">{label}</span>
  </label>
);