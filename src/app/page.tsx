import AboutMeSection from "./components/AboutMeSeciton";
import HeroSection from "./components/HeroSection";
import AchievementsSection from "./components/AchievementsSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import EmailMeSection from "./components/EmailMeSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="border border-white flex min-h-screen flex-col">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutMeSection />
        <ProjectsSection />
        <EmailMeSection />
      </div>
      <Footer />
    </main>
  );
}
