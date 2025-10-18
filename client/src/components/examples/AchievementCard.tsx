import AchievementCard from '../AchievementCard';

export default function AchievementCardExample() {
  return (
    <div className="p-8 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
        <AchievementCard
          title="SOF International Mathematics Olympiad"
          rank="International Rank 1"
          year="2018-19"
          tier="gold"
          isTopRank={true}
          testId="card-achievement-example-1"
        />
        <AchievementCard
          title="SOF National Science Olympiad"
          rank="All India Rank 5"
          year="2018-19"
          tier="gold"
          testId="card-achievement-example-2"
        />
        <AchievementCard
          title="IIT Delhi Tryst Logiqids"
          rank="International Rank 6"
          year="2023-24"
          tier="silver"
          testId="card-achievement-example-3"
        />
      </div>
    </div>
  );
}
