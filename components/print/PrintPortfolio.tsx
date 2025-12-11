import { PrintCover } from "./PrintCover";
import { PrintProfile } from "./PrintProfile";
import { PrintProjectBlice } from "./PrintProjectBlice";
import { PrintProjectGreen } from "./PrintProjectGreen";
import { PrintOtherProjects } from "./PrintOtherProjects";

export function PrintPortfolio() {
  return (
    <div className="print-portfolio bg-white text-black">
      {/* 표지 */}
      <PrintCover />

      {/* 프로필 섹션 */}
      <PrintProfile />

      {/* 블라이스 프로젝트 (탭 내용 모두 펼침) */}
      <PrintProjectBlice />

      {/* 한국그린전력 프로젝트 (탭 내용 모두 펼침) */}
      <PrintProjectGreen />

      {/* 기타 프로젝트 */}
      <PrintOtherProjects />
    </div>
  );
}
