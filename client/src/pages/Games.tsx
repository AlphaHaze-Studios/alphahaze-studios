import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import puzzleImage from "@assets/generated_images/Puzzle_game_thumbnail_cd14d805.png";
import racingImage from "@assets/generated_images/Racing_game_thumbnail_005532f2.png";
import adventureImage from "@assets/generated_images/Adventure_game_thumbnail_8a15e5d4.png";

export default function Games() {
  const games = [
    {
      id: "puzzle-master",
      title: "Puzzle Master",
      image: puzzleImage,
      description: "Challenge your mind with hundreds of addictive puzzle levels. Match, swap, and solve your way to victory!",
      downloads: "100K+",
    },
    {
      id: "speed-racer",
      title: "Speed Racer",
      image: racingImage,
      description: "Feel the adrenaline rush as you race through neon-lit tracks. Compete with players worldwide for the top spot!",
      downloads: "50K+",
    },
    {
      id: "sky-adventure",
      title: "Sky Adventure",
      image: adventureImage,
      description: "Jump, run, and explore magical floating islands in this charming platformer adventure.",
      downloads: "75K+",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold" data-testid="text-page-title">
            Our Games
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of fun and engaging mobile games. Download now and start playing!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <Link key={game.id} href={`/games/${game.id}`} data-testid={`link-game-${game.id}`}>
              <Card 
                className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 hover:scale-105 cursor-pointer h-full"
                data-testid={`card-game-${game.id}`}
              >
                <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="font-serif text-2xl font-semibold" data-testid={`text-game-title-${index}`}>
                      {game.title}
                    </h2>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap">
                      {game.downloads}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {game.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
