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
        className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 opacity-0 transition-all duration-1000 overflow-hidden"
        data-testid="section-hero"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg4ODgiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiBvcGFjaXR5PSIwLjAzIi8+PC9zdmc+')] opacity-40" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6 relative z-10">
          <div className="space-y-3">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-in" style={{ animationDuration: '1s' }} data-testid="text-studio-name">
              AlphaHaze Studios
            </h1>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary via-accent to-secondary rounded-full" />
          </div>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed" data-testid="text-tagline">
            Creating Fun, Simple, and Addictive Games for Everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="default"
              onClick={() => scrollToSection(2)}
              className="text-sm px-6 py-2.5 font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-md hover:shadow-lg transition-all duration-200"
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
              <div className="bg-gradient-to-r from-foreground to-foreground/90 text-background px-5 py-2.5 rounded-lg hover-elevate transition-all duration-200 shadow-md hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-90">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <button
          onClick={() => scrollToSection(1)}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce bg-primary/20 p-2 rounded-full backdrop-blur-sm hover:bg-primary/30 transition-colors"
          aria-label="Scroll down"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="w-7 h-7 text-primary" />
        </button>
      </section>

      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="min-h-screen flex items-center justify-center px-6 opacity-0 transition-all duration-1000 relative overflow-hidden"
        data-testid="section-vision"
      >
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full backdrop-blur-sm border border-primary/30">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Vision</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent" data-testid="text-vision-title">
            Crafting Experiences That Bring Joy
          </h2>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto" data-testid="text-vision-description">
            At AlphaHaze Studios, we believe that the best games are the ones that make you smile. 
            We're passionate about creating simple yet engaging experiences that anyone can pick up 
            and enjoy, whether you're waiting for the bus or relaxing at home. Our mission is to 
            bring moments of fun and excitement to players around the world.
          </p>
        </div>
      </section>

      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="min-h-screen flex items-center justify-center px-6 opacity-0 transition-all duration-1000 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        data-testid="section-featured-games"
      >
        <div className="max-w-7xl mx-auto w-full space-y-10">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full backdrop-blur-sm border border-primary/30">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Featured Games</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent" data-testid="text-featured-title">
              Our Most Loved Games
            </h2>
            <p className="text-base md:text-lg text-foreground/70">
              Discover our most popular titles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGames.map((game, index) => (
              <Link key={game.href} href={game.href} data-testid={`link-game-${index}`}>
                <Card className="overflow-hidden group cursor-pointer border border-transparent hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl bg-card/80 backdrop-blur-sm" data-testid={`card-game-${index}`}>
                  <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 font-semibold text-sm py-2">
                        Play Now
                      </Button>
                    </div>
                  </div>
                  <div className="p-5 space-y-2 bg-gradient-to-b from-card to-card/50">
                    <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors" data-testid={`text-game-title-${index}`}>
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
        className="min-h-screen flex items-center justify-center px-6 opacity-0 transition-all duration-1000 bg-gradient-to-b from-transparent via-accent/5 to-transparent"
        data-testid="section-why-choose"
      >
        <div className="max-w-7xl mx-auto w-full space-y-10">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent" data-testid="text-why-title">
              Why Choose AlphaHaze?
            </h2>
            <p className="text-base md:text-lg text-foreground/70">
              We're committed to delivering exceptional gaming experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center space-y-4 group hover:scale-105 transition-all duration-300 border border-transparent hover:border-primary/40 bg-card/80 backdrop-blur-sm hover:shadow-xl" data-testid="card-reason-1">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-md">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">Simple & Fun</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Easy to learn, hard to master. Our games are designed to be instantly enjoyable for everyone.
              </p>
            </Card>
            <Card className="p-6 text-center space-y-4 group hover:scale-105 transition-all duration-300 border border-transparent hover:border-accent/40 bg-card/80 backdrop-blur-sm hover:shadow-xl" data-testid="card-reason-2">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent/20 to-secondary/20 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-md">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-accent transition-colors">Highly Addictive</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Engaging gameplay loops that keep you coming back for more exciting challenges.
              </p>
            </Card>
            <Card className="p-6 text-center space-y-4 group hover:scale-105 transition-all duration-300 border border-transparent hover:border-secondary/40 bg-card/80 backdrop-blur-sm hover:shadow-xl" data-testid="card-reason-3">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-md">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-secondary transition-colors">For Everyone</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
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
