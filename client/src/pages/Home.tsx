import HeroSection from "@/components/HeroSection";
import HighlightsBar from "@/components/HighlightsBar";
import AcademicsSection from "@/components/AcademicsSection";
import ExtraCurricularsSection from "@/components/ExtraCurricularsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HighlightsBar />
      <AcademicsSection />
      <ExtraCurricularsSection />
      <Footer />
    </div>
  );
}
