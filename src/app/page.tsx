import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="border border-white flex min-h-screen flex-col">
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </main>
  );
}
