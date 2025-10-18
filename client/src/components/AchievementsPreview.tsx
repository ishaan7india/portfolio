import AchievementCard from "./AchievementCard";
import { Zap, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function AchievementsPreview() {
  const topAchievements = [
    { 
      title: "SOF International Mathematics Olympiad", 
      rank: "International Rank 1", 
      year: "2018-19, 2020-21, 2022-23", 
      tier: "gold" as const, 
      isTopRank: true 
    },
    { 
      title: "KAMP National Assessment for Scientific Temperament and Aptitude", 
      rank: "Karnataka Topper", 
      year: "2023, 2024", 
      tier: "gold" as const, 
      isTopRank: true 
    },
    { 
      title: "IIT Delhi Tryst Logiqids Final Stage", 
      rank: "International Rank 4", 
      year: "2024-25", 
      tier: "gold" as const, 
      isTopRank: false 
    },
    { 
      title: "SOF National Science Olympiad", 
      rank: "All India Rank 3", 
      year: "2022-23", 
      tier: "gold" as const, 
      isTopRank: false 
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-chart-2" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground" data-testid="text-preview-title">
              Top Achievements
            </h2>
            <Zap className="w-6 h-6 text-chart-2" />
          </div>
          <div className="w-24 h-1 bg-chart-2 mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg">
            A glimpse of excellence across academics and competitions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {topAchievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              title={achievement.title}
              rank={achievement.rank}
              year={achievement.year}
              tier={achievement.tier}
              isTopRank={achievement.isTopRank}
              testId={`card-preview-${index}`}
            />
          ))}
        </div>

        <div className="text-center">
          <Link href="/achievements" data-testid="link-view-all">
            <Button 
              size="lg"
              className="bg-chart-2 text-black hover:bg-chart-2 border-2 border-chart-2 font-semibold"
            >
              View All Achievements
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
