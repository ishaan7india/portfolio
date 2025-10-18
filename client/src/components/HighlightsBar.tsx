import { Trophy, Zap, Award, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

interface HighlightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  testId: string;
}

function HighlightCard({ icon, title, description, testId }: HighlightCardProps) {
  return (
    <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-2 border-chart-2/30 hover-elevate active-elevate-2 transition-all" data-testid={testId}>
      <div className="flex flex-col items-center text-center gap-3">
        <div className="p-3 rounded-full bg-chart-2/20 border border-chart-2/30">
          {icon}
        </div>
        <h3 className="font-serif text-xl font-bold text-chart-2" data-testid={`${testId}-title`}>
          {title}
        </h3>
        <p className="text-sm text-muted-foreground" data-testid={`${testId}-description`}>
          {description}
        </p>
      </div>
    </Card>
  );
}

export default function HighlightsBar() {
  const highlights = [
    {
      icon: <Trophy className="w-6 h-6 text-chart-2" />,
      title: "International Rank 1",
      description: "SOF Mathematics Olympiad (3x)",
      testId: "card-highlight-rank1"
    },
    {
      icon: <Star className="w-6 h-6 text-chart-2" />,
      title: "Karnataka Topper",
      description: "KAMP NASTA (2x Consecutive)",
      testId: "card-highlight-topper"
    },
    {
      icon: <Zap className="w-6 h-6 text-chart-2" />,
      title: "International Rank 4",
      description: "IIT Delhi Tryst Logiqids",
      testId: "card-highlight-rank4"
    },
    {
      icon: <Award className="w-6 h-6 text-chart-2" />,
      title: "All India Rank 3",
      description: "Science Olympiad",
      testId: "card-highlight-rank3"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <HighlightCard key={index} {...highlight} />
          ))}
        </div>
      </div>
    </section>
  );
}
