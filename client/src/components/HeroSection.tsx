import { Zap } from "lucide-react";
import heroBackground from "@assets/generated_images/Royal_thunder_hero_background_7b10b5e4.png";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToAchievements = () => {
    const element = document.getElementById("achievements");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Zap className="w-8 h-8 md:w-10 md:h-10 text-chart-2 animate-lightning" />
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-chart-2 via-primary to-chart-2 bg-clip-text text-transparent" data-testid="text-hero-name">
            ISHAAN
          </h1>
          <Zap className="w-8 h-8 md:w-10 md:h-10 text-chart-2 animate-lightning" style={{ animationDelay: '1.5s' }} />
        </div>
        
        <p className="text-xl md:text-2xl text-foreground/90 mb-4 font-medium" data-testid="text-hero-subtitle">
          Grade 9 • DPS Bangalore East
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 text-base md:text-lg text-muted-foreground">
          <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold" data-testid="text-hero-badge-1">
            International Champion
          </span>
          <span className="px-4 py-2 rounded-full bg-chart-2/10 border border-chart-2/20 text-chart-2 font-semibold" data-testid="text-hero-badge-2">
            Karnataka Topper
          </span>
          <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold" data-testid="text-hero-badge-3">
            Academic Excellence
          </span>
        </div>

        <Button 
          size="lg"
          onClick={scrollToAchievements}
          className="bg-chart-2 text-black hover:bg-chart-2 border-2 border-chart-2 font-semibold text-lg px-8 py-6 h-auto"
          data-testid="button-explore-achievements"
        >
          Explore Achievements
        </Button>
      </div>
    </section>
  );
}
