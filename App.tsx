import { Navigation } from "./components/portfolio/Navigation";
import { Hero } from "./components/portfolio/Hero";
import { Header } from "./components/portfolio/Header";
import { Profile } from "./components/portfolio/Profile";
import { ProjectBlice } from "./components/portfolio/ProjectBlice";
import { ProjectGreen } from "./components/portfolio/ProjectGreen";
import { OtherProjects } from "./components/portfolio/OtherProjects";
import { Contact } from "./components/portfolio/Footer";

function App() {
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
