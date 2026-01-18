// 파일: src/components/ui/Card.tsx
import React from 'react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

export const Card: React.FC<CardProps> = ({ icon, title, description, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md hover:border-blue-100 transition-all flex flex-col items-center text-center h-full"
    >
      <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-4xl">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm whitespace-pre-line">{description}</p>
    </div>
  );
};