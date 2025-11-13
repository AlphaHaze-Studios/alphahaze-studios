import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ChevronDown, Sparkles, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import puzzleImage from "@assets/generated_images/Puzzle_game_thumbnail_cd14d805.png";
import racingImage from "@assets/generated_images/Racing_game_thumbnail_005532f2.png";
import adventureImage from "@assets/generated_images/Adventure_game_thumbnail_8a15e5d4.png";

export default function Home() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  const featuredGames = [
    {
      title: "Puzzle Master",
      image: puzzleImage,
      href: "/games/puzzle-master",
      description: "Challenge your mind with addictive puzzle mechanics",
    },
    {
      title: "Speed Racer",
      image: racingImage,
      href: "/games/speed-racer",
      description: "Experience high-speed racing thrills",
    },
    {
      title: "Sky Adventure",
      image: adventureImage,
      href: "/games/sky-adventure",
      description: "Embark on an epic platforming journey",
    },
  ];

  return (
    <div className="min-h-screen">
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-primary/5 via-background to-background opacity-0 transition-all duration-1000"
        data-testid="section-hero"
      >
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent" data-testid="text-studio-name">
            AlphaHaze Studios
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-tagline">
            Creating Fun, Simple, and Addictive Games for Everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection(2)}
              className="text-base px-8"
              data-testid="button-view-games"
            >
              View Our Games
            </Button>
            <a
              href="https://play.google.com/store/apps/dev?id=placeholder"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-hero-playstore"
            >
              <div className="bg-foreground text-background px-6 py-3 rounded-md hover-elevate active-elevate-2 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-80">GET IT ON</div>
                    <div className="text-base font-semibold">Google Play</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <button
          onClick={() => scrollToSection(1)}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </button>
      </section>

      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="min-h-screen flex items-center justify-center px-6 opacity-0 transition-all duration-1000"
        data-testid="section-vision"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Our Vision</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold" data-testid="text-vision-title">
            Crafting Experiences That Bring Joy
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto" data-testid="text-vision-description">
            At AlphaHaze Studios, we believe that the best games are the ones that make you smile. 
            We're passionate about creating simple yet engaging experiences that anyone can pick up 
            and enjoy, whether you're waiting for the bus or relaxing at home. Our mission is to 
            bring moments of fun and excitement to players around the world.
          </p>
        </div>
      </section>

      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="min-h-screen flex items-center justify-center px-6 opacity-0 transition-all duration-1000"
        data-testid="section-featured-games"
      >
        <div className="max-w-6xl mx-auto w-full space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold" data-testid="text-featured-title">
              Featured Games
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover our most popular titles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGames.map((game, index) => (
              <Link key={game.href} href={game.href} data-testid={`link-game-${index}`}>
                <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 hover:scale-105 cursor-pointer" data-testid={`card-game-${index}`}>
                  <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-xl font-semibold" data-testid={`text-game-title-${index}`}>
                      {game.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {game.description}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionsRef.current[3] = el)}
        className="min-h-screen flex items-center justify-center px-6 opacity-0 transition-all duration-1000"
        data-testid="section-why-choose"
      >
        <div className="max-w-6xl mx-auto w-full space-y-16">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold" data-testid="text-why-title">
              Why Choose AlphaHaze?
            </h2>
            <p className="text-lg text-muted-foreground">
              We're committed to delivering exceptional gaming experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center space-y-4" data-testid="card-reason-1">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold">Simple & Fun</h3>
              <p className="text-muted-foreground">
                Easy to learn, hard to master. Our games are designed to be instantly enjoyable for everyone.
              </p>
            </Card>
            <Card className="p-8 text-center space-y-4" data-testid="card-reason-2">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold">Highly Addictive</h3>
              <p className="text-muted-foreground">
                Engaging gameplay loops that keep you coming back for more exciting challenges.
              </p>
            </Card>
            <Card className="p-8 text-center space-y-4" data-testid="card-reason-3">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold">For Everyone</h3>
              <p className="text-muted-foreground">
                Games that bring people together, suitable for all ages and skill levels.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <style>{`
        .animate-in {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
