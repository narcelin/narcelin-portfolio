import AboutMeSection from "./components/AboutMeSeciton";
import HeroSection from "./components/HeroSection";
import AchievementsSection from "./components/AchievementsSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-c4">
      <Navbar />
      <div className="container mx-auto px-12 py-4 bg-c5">
        <HeroSection />
        <AchievementsSection />
        <AboutMeSection />
        <ProjectsSection />
        <ContactMeSection />
      </div>
      <Footer />
    </main>
  );
}
