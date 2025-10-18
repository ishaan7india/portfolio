import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Zap, Trophy } from "lucide-react";

interface AchievementCardProps {
  title: string;
  rank: string;
  year: string;
  tier?: "gold" | "silver" | "bronze" | "default";
  isTopRank?: boolean;
  testId: string;
}

export default function AchievementCard({ title, rank, year, tier = "default", isTopRank = false, testId }: AchievementCardProps) {
  const tierColors = {
    gold: "bg-chart-2/20 text-chart-2 border-chart-2/40",
    silver: "bg-muted/50 text-foreground border-border",
    bronze: "bg-accent/50 text-accent-foreground border-accent",
    default: "bg-secondary/50 text-secondary-foreground border-secondary"
  };

  return (
    <Card className="p-6 hover-elevate active-elevate-2 transition-all group relative overflow-visible" data-testid={testId}>
      {isTopRank && (
        <div className="absolute -top-2 -right-2 z-10">
          <div className="p-2 rounded-full bg-chart-2 border-2 border-background shadow-lg">
            <Zap className="w-4 h-4 text-black" />
          </div>
        </div>
      )}
      
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-lg leading-tight text-card-foreground" data-testid={`${testId}-title`}>
          {title}
        </h3>
        
        <div className="flex items-center gap-2 flex-wrap">
          <Badge className={`${tierColors[tier]} rounded-full px-3 py-1 font-semibold`} data-testid={`${testId}-rank`}>
            {isTopRank && <Trophy className="w-3 h-3 inline mr-1" />}
            {rank}
          </Badge>
          <span className="text-sm text-muted-foreground" data-testid={`${testId}-year`}>{year}</span>
        </div>
      </div>
      
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </Card>
  );
}
