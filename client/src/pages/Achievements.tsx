import Navbar from "@/components/Navbar";
import AcademicsSection from "@/components/AcademicsSection";
import ExtraCurricularsSection from "@/components/ExtraCurricularsSection";
import Footer from "@/components/Footer";
import { Zap } from "lucide-react";

export default function Achievements() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        <div className="py-16 md:py-20 bg-gradient-to-b from-card/50 to-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-chart-2 animate-lightning" />
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-chart-2 via-primary to-chart-2 bg-clip-text text-transparent" data-testid="text-achievements-page-title">
                All Achievements
              </h1>
              <Zap className="w-8 h-8 text-chart-2 animate-lightning" style={{ animationDelay: '1.5s' }} />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive collection of academic excellence and extracurricular accomplishments
            </p>
          </div>
        </div>

        <AcademicsSection />
        <ExtraCurricularsSection />
      </div>
      
      <Footer />
    </div>
  );
}
