// 파일: src/components/ui/Header.tsx
import { Button } from './Button';

export const Header = () => {
  return (
    // justify-around
    <header className="w-full h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-6 fixed top-0 z-50">
      <div className="text-primary font-bold text-xl md:text-2xl">VISALINKO</div>
      <div className="flex gap-2">
        <Button variant="outline" className="text-xs h-8 px-3">문의하기</Button>
        <Button variant="primary" className="text-xs h-8 px-3">무료로 시작하기</Button>
      </div>
    </header>
  );
};