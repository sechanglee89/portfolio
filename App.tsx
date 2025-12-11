import { useEffect, useState } from "react";
import { Navigation } from "./components/portfolio/Navigation";
import { Hero } from "./components/portfolio/Hero";
import { Header } from "./components/portfolio/Header";
import { Profile } from "./components/portfolio/Profile";
import { ProjectBlice } from "./components/portfolio/ProjectBlice";
import { ProjectGreen } from "./components/portfolio/ProjectGreen";
import { OtherProjects } from "./components/portfolio/OtherProjects";
import { Contact } from "./components/portfolio/Footer";
import { PrintPortfolio } from "./components/print/PrintPortfolio";

function App() {
  const [isPrintMode, setIsPrintMode] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      setIsPrintMode(window.location.hash === "#print");
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

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
