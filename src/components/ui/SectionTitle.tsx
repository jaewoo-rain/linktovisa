// 파일: src/components/ui/SectionTitle.tsx
export const SectionTitle = ({ step, title }: { step?: string, title: string }) => (
  <div className="mb-6">
    {step && (
      <div className="flex gap-4 mb-2">
        <span className="text-primary font-bold text-sm">● {step}</span>
      </div>
    )}
    <h2 className="text-xl md:text-2xl font-bold text-gray-900 whitespace-pre-line">{title}</h2>
  </div>
);