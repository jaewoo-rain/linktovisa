import React from "react";

type LoadingOverlayProps = {
  open: boolean;
  text?: string;
};

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  open,
  text = "전송 중...",
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 px-6 py-5 flex flex-col items-center gap-3">
        {/* spinner */}
        <div className="w-10 h-10 rounded-full border-4 border-gray-200 border-t-primary animate-spin" />
        <div className="text-sm font-medium text-gray-700">{text}</div>
      </div>
    </div>
  );
};
