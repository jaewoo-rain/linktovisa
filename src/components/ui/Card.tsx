import React from "react";

interface CardProps {
  iconSrc: string;
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
        group
      "
    >
      <div className="bg-gray-100/70 h-44 md:h-72 flex items-center justify-center transition-all duration-300">
        <img
          src={iconSrc}
          alt={iconAlt}
          className="w-28 h-28 md:w-48 md:h-48 object-contain transition-all duration-300 group-hover:scale-105"
          draggable={false}
        />
      </div>


      <div className="p-6 md:p-10">
        <h3 className="text-lg md:text-3xl font-bold text-gray-900 transition-all">
          {title}
        </h3>
        <p className="mt-2 text-sm md:text-lg text-gray-500 whitespace-pre-line leading-relaxed transition-all">
          {description}
        </p>
      </div>
    </button>
  );
};