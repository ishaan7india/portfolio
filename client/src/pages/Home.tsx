import HeroSection from "@/components/HeroSection";
import PlaceholderSection from "@/components/PlaceholderSection";
import HighlightsBar from "@/components/HighlightsBar";
import AcademicsSection from "@/components/AcademicsSection";
import ExtraCurricularsSection from "@/components/ExtraCurricularsSection";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PlaceholderSection />
      <FadeInSection>
        <HighlightsBar />
      </FadeInSection>
      <FadeInSection>
        <AcademicsSection />
      </FadeInSection>
      <FadeInSection>
        <ExtraCurricularsSection />
      </FadeInSection>
      <Footer />
    </div>
  );
}
