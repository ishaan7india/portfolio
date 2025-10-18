import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-chart-2" />
          <p className="text-lg font-serif font-semibold text-foreground" data-testid="text-footer-name">
            Ishaan
          </p>
          <Zap className="w-5 h-5 text-chart-2" />
        </div>
        <p className="text-sm text-muted-foreground mb-2" data-testid="text-footer-tagline">
          Grade 9 Student at DPS Bangalore East
        </p>
        <p className="text-xs text-muted-foreground" data-testid="text-footer-copyright">
          © 2025 Ishaan. All achievements certified.
        </p>
      </div>
    </footer>
  );
}
