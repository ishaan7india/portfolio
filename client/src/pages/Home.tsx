import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PlaceholderSection from "@/components/PlaceholderSection";
import AchievementsPreview from "@/components/AchievementsPreview";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PlaceholderSection />
      <FadeInSection>
        <AchievementsPreview />
      </FadeInSection>
      <Footer />
    </div>
  );
}
