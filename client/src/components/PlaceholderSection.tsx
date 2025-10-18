import { Button } from "@/components/ui/button";

export default function PlaceholderSection() {
  const scrollToAchievements = () => {
    const element = document.getElementById("achievements");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
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
