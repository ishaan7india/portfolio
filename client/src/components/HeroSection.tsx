import { Zap } from "lucide-react";
import heroBackground from "@assets/generated_images/Royal_thunder_hero_background_7b10b5e4.png";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-0"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          transform: `translateY(-${parallaxOffset}px)`
        }}
      />
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background"
        style={{ transform: `translateY(-${parallaxOffset}px)` }}
      />
      
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ transform: `translateY(-${parallaxOffset}px)` }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div 
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center"
        style={{ transform: `translateY(-${parallaxOffset}px)` }}
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <Zap className="w-8 h-8 md:w-10 md:h-10 text-chart-2 animate-lightning" />
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-chart-2 via-primary to-chart-2 bg-clip-text text-transparent" data-testid="text-hero-name">
            ISHAAN
          </h1>
          <Zap className="w-8 h-8 md:w-10 md:h-10 text-chart-2 animate-lightning" style={{ animationDelay: '1.5s' }} />
        </div>
        
        <p className="text-xl md:text-2xl text-foreground/90 font-medium" data-testid="text-hero-subtitle">
          Grade 9 • DPS Bangalore East
        </p>
      </div>
    </section>
  );
}
