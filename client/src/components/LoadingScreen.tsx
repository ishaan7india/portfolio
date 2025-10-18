import { Zap } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="relative">
        <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="4"
          />
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="hsl(var(--chart-2))"
            strokeWidth="4"
            strokeDasharray="339.292"
            strokeDashoffset="339.292"
            strokeLinecap="round"
            className="animate-loading-circle"
          />
        </svg>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="p-4 rounded-full bg-primary/10 border-2 border-chart-2">
            <Zap className="w-12 h-12 text-chart-2 animate-pulse" data-testid="icon-loading-bolt" />
          </div>
        </div>
      </div>
    </div>
  );
}
