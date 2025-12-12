import { PrintMonoCover } from "./PrintMonoCover";
import { PrintMonoProfile } from "./PrintMonoProfile";
import { PrintMonoProjectBlice } from "./PrintMonoProjectBlice";
import { PrintMonoProjectGreen } from "./PrintMonoProjectGreen";
import { PrintMonoOtherProjects } from "./PrintMonoOtherProjects";

export function PrintMonoPortfolio() {
  return (
    <div className="print-mono-portfolio bg-white text-black">
      <PrintMonoCover />
      <PrintMonoProfile />
      <PrintMonoProjectBlice />
      <PrintMonoProjectGreen />
      <PrintMonoOtherProjects />
    </div>
  );
}
