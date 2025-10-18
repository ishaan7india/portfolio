import { Link, useLocation } from "wouter";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-2 hover-elevate active-elevate-2 cursor-pointer px-3 py-2 rounded-lg">
              <Zap className="w-5 h-5 text-chart-2" />
              <span className="font-serif text-xl font-bold text-foreground">Ishaan</span>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <Link href="/" data-testid="link-nav-home">
              <Button 
                variant={location === "/" ? "default" : "ghost"}
                className={location === "/" ? "bg-primary text-primary-foreground" : ""}
              >
                Home
              </Button>
            </Link>
            <Link href="/achievements" data-testid="link-nav-achievements">
              <Button 
                variant={location === "/achievements" ? "default" : "ghost"}
                className={location === "/achievements" ? "bg-primary text-primary-foreground" : ""}
              >
                Achievements
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
