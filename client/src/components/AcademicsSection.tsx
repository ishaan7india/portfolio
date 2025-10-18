import AchievementCard from "./AchievementCard";
import { Zap } from "lucide-react";

interface Achievement {
  title: string;
  rank: string;
  year: string;
  tier: "gold" | "silver" | "bronze" | "default";
  isTopRank: boolean;
}

export default function AcademicsSection() {
  const achievements: Achievement[] = [
    { title: "SOF International Mathematics Olympiad", rank: "International Rank 1", year: "2018-19", tier: "gold", isTopRank: true },
    { title: "SOF National Science Olympiad", rank: "All India Rank 5", year: "2018-19", tier: "gold", isTopRank: false },
    { title: "SOF International Mathematics Olympiad", rank: "International Rank 1", year: "2020-21", tier: "gold", isTopRank: true },
    { title: "SOF National Science Olympiad", rank: "All India Rank 7", year: "2020-21", tier: "gold", isTopRank: false },
    { title: "Wiz National Spell Bee National Mega Final", rank: "All India Rank 7", year: "2020-21", tier: "gold", isTopRank: false },
    { title: "SOF International Mathematics Olympiad Level-1", rank: "International Rank 1", year: "2022-23", tier: "gold", isTopRank: true },
    { title: "SOF International Mathematics Olympiad Level-2", rank: "International Rank 2", year: "2022-23", tier: "gold", isTopRank: false },
    { title: "SOF National Science Olympiad Level-1", rank: "All India Rank 3", year: "2022-23", tier: "gold", isTopRank: false },
    { title: "IIT Delhi Tryst Fact Fiesta Quiz", rank: "All India Rank 6", year: "2024", tier: "gold", isTopRank: false },
    { title: "SOF International Mathematics Olympiad Level-1", rank: "International Rank 4", year: "2023-24", tier: "gold", isTopRank: false },
    { title: "IIT Delhi Tryst Logiqids Final Stage", rank: "International Rank 6", year: "2023-24", tier: "gold", isTopRank: false },
    { title: "Silverzone International Informatics Olympiad", rank: "International Rank 7", year: "2023-24", tier: "gold", isTopRank: false },
    { title: "KAMP National Assessment for Scientific Temperament and Aptitude", rank: "Karnataka Topper", year: "2023", tier: "gold", isTopRank: true },
    { title: "SOF Academic Excellence Scholarship", rank: "Bengaluru Winner", year: "2023-24", tier: "gold", isTopRank: false },
    { title: "VSSF Science Promotion and Orientation Test", rank: "India Top 100", year: "2023-24", tier: "silver", isTopRank: false },
    { title: "Wiz National Spell Bee National Mega Final", rank: "All India Rank 11", year: "2018-19", tier: "silver", isTopRank: false },
    { title: "IIT Delhi Tryst Logiqids Preliminary Stage", rank: "South India Rank 12", year: "2023-24", tier: "silver", isTopRank: false },
    { title: "SOF International Social Studies Olympiad", rank: "International Rank 14", year: "2024-25", tier: "silver", isTopRank: false },
    { title: "Wiz National Spell Bee National Mega Final", rank: "All India Rank 18", year: "2021-22", tier: "silver", isTopRank: false },
    { title: "Wiz National Spell Bee State Grand Finale", rank: "Karnataka Rank 29", year: "2017-18", tier: "silver", isTopRank: false },
    { title: "SOF International English Olympiad", rank: "International Rank 32", year: "2018-19", tier: "bronze", isTopRank: false },
    { title: "SOF International Computer Science Olympiad", rank: "International Rank 32", year: "2024-25", tier: "bronze", isTopRank: false },
    { title: "Silverzone International Reasoning and Aptitude Olympiad", rank: "International Rank 38", year: "2024-25", tier: "bronze", isTopRank: false },
    { title: "SOF National Cyber Olympiad", rank: "All India Rank 39", year: "2018-19", tier: "bronze", isTopRank: false },
    { title: "SOF International Mathematics Olympiad Level-2", rank: "International Rank 41", year: "2023-24", tier: "bronze", isTopRank: false },
    { title: "SOF International Mathematics Olympiad Level-2", rank: "International Rank 50", year: "2019-20", tier: "bronze", isTopRank: false },
    { title: "NOF International Science Olympiad", rank: "International Rank 53", year: "2024-25", tier: "bronze", isTopRank: false },
    { title: "SOF National Cyber Olympiad", rank: "All India Rank 54", year: "2023-24", tier: "bronze", isTopRank: false },
    { title: "NOF English Champions League", rank: "International Rank 70", year: "2024-25", tier: "bronze", isTopRank: false },
    { title: "NOF Science Champions League", rank: "International Rank 69", year: "2024-25", tier: "bronze", isTopRank: false },
    { title: "SOF International English Olympiad Level-1", rank: "International Rank 72", year: "2023-24", tier: "bronze", isTopRank: false },
    { title: "Silverzone International Informatics Olympiad", rank: "International Rank 78", year: "2024-25", tier: "bronze", isTopRank: false },
    { title: "Silverzone International Social Studies Olympiad", rank: "International Rank 94", year: "2024-25", tier: "bronze", isTopRank: false },
    { title: "SOF International English Olympiad Level-2", rank: "International Rank 99", year: "2019-20", tier: "bronze", isTopRank: false },
    { title: "IIT Delhi Tryst Logiqids Final Stage", rank: "International Rank 4", year: "2024-25", tier: "gold", isTopRank: false },
    { title: "KAMP National Assessment for Scientific Temperament and Aptitude", rank: "Karnataka Topper", year: "2024", tier: "gold", isTopRank: true },
    { title: "NOF International Math Olympiad", rank: "International Rank 7", year: "2024-25", tier: "gold", isTopRank: false },
    { title: "SOF Academic Excellence Scholarship", rank: "Bengaluru Winner", year: "2024-25", tier: "gold", isTopRank: false },
    { title: "Ei ASSET English, Maths and Science", rank: "99%ile - Johns Hopkins CTY", year: "2024-25", tier: "gold", isTopRank: false },
    { title: "vivo Ignite 3.0", rank: "India Top 200 Ideas", year: "2024-25", tier: "silver", isTopRank: false },
    { title: "VSSF Science Promotion and Orientation Test", rank: "India Top 100", year: "2024-25", tier: "silver", isTopRank: false },
    { title: "Vidyarthi Vigyan Manthan", rank: "State Level Camp Qualifier", year: "2024", tier: "silver", isTopRank: false },
    { title: "TERI Green Olympiad", rank: "80% Score", year: "2024-25", tier: "bronze", isTopRank: false },
  ];

  return (
    <section id="achievements" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-chart-2" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground" data-testid="text-academics-title">
              Academic Achievements
            </h2>
            <Zap className="w-6 h-6 text-chart-2" />
          </div>
          <div className="w-24 h-1 bg-chart-2 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              title={achievement.title}
              rank={achievement.rank}
              year={achievement.year}
              tier={achievement.tier}
              isTopRank={achievement.isTopRank}
              testId={`card-academic-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
