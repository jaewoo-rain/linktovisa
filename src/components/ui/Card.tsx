// 파일: src/components/ui/Card.tsx
import React from "react";

interface CardProps {
  iconSrc: string;          // ✅ public/images/... 경로
  iconAlt?: string;
  title: string;
  description: string;
  onClick: () => void;
}

export const Card: React.FC<CardProps> = ({
  iconSrc,
  iconAlt = "",
  title,
  description,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        w-full text-left
        bg-white rounded-2xl border border-gray-100 shadow-sm
        hover:shadow-md hover:border-blue-100 transition-all
        overflow-hidden
      "
    >
      {/* ✅ 상단 이미지 영역 */}
      <div className="bg-gray-100/70 h-44 flex items-center justify-center">
        <img
          src={iconSrc}
          alt={iconAlt}
          className="w-28 h-28 object-contain"
          draggable={false}
        />
      </div>

      {/* ✅ 하단 텍스트 영역 */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-500 whitespace-pre-line leading-relaxed">
          {description}
        </p>
      </div>
    </button>
  );
};
