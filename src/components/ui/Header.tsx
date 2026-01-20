// 파일: src/components/ui/Header.tsximport { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const Header = () => {
  const navigate = useNavigate();

  const changeLanguage = (lang: string) => {
    const select = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement | null;

    if (!select) {
      alert("번역 로딩 중입니다. 잠시 후 다시 시도해주세요.");
      return;
    }

    select.value = lang;
    select.dispatchEvent(new Event("change"));
  };

  return (
    <>
      {/* ✅ 상단 여유 공간 (구글 번역 바 대응용) */}
      <div className="fixed top-0 left-0 w-full bg-white z-50" />

      {/* 실제 헤더 */}
      <header className="fixed left-0 w-full h-16 bg-white border-b border-gray-100 z-50">
        <div className="max-w-[800px] w-full h-full mx-auto flex items-center justify-between px-4 md:px-6">
          <div
            onClick={() => navigate("/")}
            className="text-primary font-bold text-2xl cursor-pointer"
          >
            LINKTOVISA
          </div>

          <div className="flex gap-3 pr-3 items-center">
            <img
              src="/images/icon-translation.png"
              alt="번역"
              className="cursor-pointer w-6 h-6"
              onClick={() => changeLanguage("en")}
            />

            <Button variant="outline" className="text-xs h-8 px-3 hidden md:block">
              문의하기
            </Button>

            <Button
              variant="primary"
              className="text-xs h-8 px-3 hidden md:block"
              onClick={() => navigate("/init")}
            >
              무료로 시작하기
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};
