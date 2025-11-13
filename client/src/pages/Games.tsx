import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Star } from "lucide-react";
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
      rating: "4.8",
    },
    {
      id: "speed-racer",
      title: "Speed Racer",
      image: racingImage,
      description: "Feel the adrenaline rush as you race through neon-lit tracks. Compete with players worldwide for the top spot!",
      downloads: "50K+",
      rating: "4.6",
    },
    {
      id: "sky-adventure",
      title: "Sky Adventure",
      image: adventureImage,
      description: "Jump, run, and explore magical floating islands in this charming platformer adventure.",
      downloads: "75K+",
      rating: "4.9",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-20 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-6">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent" data-testid="text-page-title">
            Our Games
          </h1>
          <div className="h-2 w-32 mx-auto bg-gradient-to-r from-primary via-accent to-secondary rounded-full" />
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto font-medium leading-relaxed">
            Explore our collection of fun and engaging mobile games. Download now and start playing!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {games.map((game, index) => (
            <Link key={game.id} href={`/games/${game.id}`} data-testid={`link-game-${game.id}`}>
              <Card 
                className="overflow-hidden group cursor-pointer h-full border-2 border-transparent hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-card/80 backdrop-blur-sm"
                data-testid={`card-game-${game.id}`}
              >
                <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg z-20">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold text-foreground">{game.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 font-bold text-base py-6">
                      <Download className="w-5 h-5 mr-2" />
                      Download Now
                    </Button>
                  </div>
                </div>
                <div className="p-7 space-y-4 bg-gradient-to-b from-card to-card/50">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors" data-testid={`text-game-title-${index}`}>
                      {game.title}
                    </h2>
                    <span className="text-sm bg-gradient-to-r from-primary/20 to-accent/20 text-primary px-4 py-2 rounded-full whitespace-nowrap font-bold border border-primary/30">
                      {game.downloads}
                    </span>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed font-medium">
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
