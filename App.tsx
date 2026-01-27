import { useEffect, useState } from "react";
import { Navigation } from "./components/portfolio/Navigation";
import { Header } from "./components/portfolio/Header";
import { Profile } from "./components/portfolio/Profile";
import { ProjectBlice } from "./components/portfolio/ProjectBlice";
import { ProjectGreen } from "./components/portfolio/ProjectGreen";
import { OtherProjects } from "./components/portfolio/OtherProjects";
import { Contact } from "./components/portfolio/Footer";
import { PrintPortfolio } from "./components/print/PrintPortfolio";
import { PrintMonoPortfolio } from "./components/print-mono/PrintMonoPortfolio";

function App() {
  const [isPrintMode, setIsPrintMode] = useState(false);
  const [isPrintMonoMode, setIsPrintMonoMode] = useState(false);

  useEffect(() => {
    const checkLocation = () => {
      setIsPrintMode(window.location.hash === "#print");
      setIsPrintMonoMode(window.location.pathname.endsWith("/print-mono"));
    };

    checkLocation();
    window.addEventListener("hashchange", checkLocation);
    window.addEventListener("popstate", checkLocation);
    return () => {
      window.removeEventListener("hashchange", checkLocation);
      window.removeEventListener("popstate", checkLocation);
    };
  }, []);

  // Print mono mode - 흑백 출력 페이지
  if (isPrintMonoMode) {
    return <PrintMonoPortfolio />;
  }

  // Print mode - PDF용 출력 페이지
  if (isPrintMode) {
    return <PrintPortfolio />;
  }

  // Normal mode - 웹 포트폴리오
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navigation />
      <main>
        {/* <Hero /> */}
        <Header />
        <Profile />
        <ProjectBlice />
        <ProjectGreen />
        <OtherProjects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
