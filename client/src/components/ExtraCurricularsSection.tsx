import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Swords, Music, Trophy, Zap, Target, Volleyball } from "lucide-react";

interface ActivityCardProps {
  icon: React.ReactNode;
  title: string;
  achievements: string[];
  testId: string;
}

function ActivityCard({ icon, title, achievements, testId }: ActivityCardProps) {
  return (
    <Card className="p-6 hover-elevate active-elevate-2 transition-all" data-testid={testId}>
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-xl font-bold text-card-foreground mb-3" data-testid={`${testId}-title`}>
            {title}
          </h3>
          <div className="flex flex-col gap-2">
            {achievements.map((achievement, index) => (
              <p key={index} className="text-sm text-muted-foreground leading-relaxed" data-testid={`${testId}-achievement-${index}`}>
                {achievement}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function ExtraCurricularsSection() {
  const activities = [
    {
      icon: <Swords className="w-6 h-6 text-primary" />,
      title: "Karate",
      achievements: [
        "Promoted to 3rd Kyu (Brown Belt III)",
        "2nd Place - All India Hakuakai Championship 2018 (Kata)",
        "3rd Place - All India Hakuakai Championship 2018 (Kumite)",
        "3rd Place - 6th National Open Championship 2019 (Kata)",
        "2nd Place - Renshi M. Satish Memorial Cup 2020 (Kata)"
      ],
      testId: "card-activity-karate"
    },
    {
      icon: <Trophy className="w-6 h-6 text-primary" />,
      title: "Cricket",
      achievements: [
        "Semifinalist - DPSE Premier League 2025",
        "Semifinalist - DPSE Mini ICC T20 World Cup 2024",
        "Finalist - DPS Bangalore East Intramural Tournament 2024",
        "Semifinalist - DPS Bangalore East Intramural Tournament 2025"
      ],
      testId: "card-activity-cricket"
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Chess",
      achievements: [
        "39th Rank - SFA Season 1 2023-24 (U-15)",
        "40th Rank - SFA Season 2 2024-25 (U-15)",
        "29th Rank - 57th BRDCA U-16 Rated Tournament 2025"
      ],
      testId: "card-activity-chess"
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Other Sports",
      achievements: [
        "6th Rank - DPS Bangalore East Intramural Squash Tournament 2025",
        "Quarterfinalist - SFA Season 1 2023-24 (U-14 Volleyball)"
      ],
      testId: "card-activity-sports"
    },
    {
      icon: <Music className="w-6 h-6 text-primary" />,
      title: "Competitions & Tech",
      achievements: [
        "1st Place - NPS HSR Cybernautica 2025 (Breaking Virtual)",
        "Karnataka Rank 8 - Wiz Writing Wizards State Level",
        "2nd Place - DPS Electronic City Srishti Fest 2024-25 (Hot Foot)",
        "3rd Place - Harvest International Sasya 4.0 (Academicmaniacs)",
        "Whitehat Jr. Certified Game Developer & App Developer"
      ],
      testId: "card-activity-other"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Volleyball className="w-6 h-6 text-chart-2" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground" data-testid="text-extracurriculars-title">
              Extra-Curriculars
            </h2>
            <Volleyball className="w-6 h-6 text-chart-2" />
          </div>
          <div className="w-24 h-1 bg-chart-2 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
