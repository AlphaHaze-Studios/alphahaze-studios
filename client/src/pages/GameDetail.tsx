import { useRoute } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import puzzleImage from "@assets/generated_images/Puzzle_game_thumbnail_cd14d805.png";
import racingImage from "@assets/generated_images/Racing_game_thumbnail_005532f2.png";
import adventureImage from "@assets/generated_images/Adventure_game_thumbnail_8a15e5d4.png";
import puzzleScreenshot from "@assets/generated_images/Puzzle_game_screenshot_1_90f4366d.png";
import racingScreenshot from "@assets/generated_images/Racing_game_screenshot_1_a079b350.png";
import adventureScreenshot from "@assets/generated_images/Adventure_game_screenshot_1_070e0d84.png";

const gamesData = {
  "puzzle-master": {
    title: "Puzzle Master",
    icon: puzzleImage,
    tagline: "Master the Art of Puzzle Solving",
    about: "Puzzle Master is an addictive match-3 puzzle game that challenges your mind with hundreds of uniquely crafted levels. Swap colorful blocks, create powerful combos, and unlock special power-ups as you progress through increasingly challenging puzzles. With stunning visuals and smooth gameplay, Puzzle Master offers hours of brain-teasing entertainment.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.alphahaze.puzzlemaster",
    screenshots: [puzzleScreenshot, puzzleScreenshot, puzzleScreenshot],
    howToPlay: [
      "Swap adjacent blocks to create matches of three or more",
      "Create special power-ups by matching 4 or more blocks",
      "Complete level objectives before running out of moves",
      "Combine power-ups for massive combos and high scores",
      "Unlock new worlds and challenge modes as you progress",
    ],
    faqs: [
      {
        question: "Is Puzzle Master free to play?",
        answer: "Yes! Puzzle Master is completely free to download and play. Optional in-app purchases are available for players who want to progress faster.",
      },
      {
        question: "Can I play offline?",
        answer: "Yes, Puzzle Master can be played offline. However, an internet connection is required to sync your progress and compete on leaderboards.",
      },
      {
        question: "How many levels are there?",
        answer: "Puzzle Master features over 500 levels with new levels added regularly. We're constantly creating new challenges to keep the game fresh and exciting.",
      },
      {
        question: "Are there daily challenges?",
        answer: "Absolutely! Log in daily to complete special challenge levels and earn exclusive rewards.",
      },
    ],
  },
  "speed-racer": {
    title: "Speed Racer",
    icon: racingImage,
    tagline: "Feel the Need for Speed",
    about: "Experience the thrill of high-speed racing in Speed Racer! Race through stunning neon-lit tracks, drift around sharp corners, and compete against players from around the world. With intuitive controls, realistic physics, and breathtaking visuals, Speed Racer delivers an adrenaline-pumping racing experience right in your pocket.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.alphahaze.speedracer",
    screenshots: [racingScreenshot, racingScreenshot, racingScreenshot],
    howToPlay: [
      "Tap left or right to steer your vehicle",
      "Hold to accelerate and release to brake",
      "Master the art of drifting around corners",
      "Collect boost pads for extra speed",
      "Avoid obstacles and compete for the best time",
    ],
    faqs: [
      {
        question: "What devices is Speed Racer compatible with?",
        answer: "Speed Racer runs on most Android devices running Android 6.0 or higher. For the best experience, we recommend devices with at least 2GB of RAM.",
      },
      {
        question: "Can I race against my friends?",
        answer: "Yes! Speed Racer features online multiplayer where you can race against friends or random opponents in real-time.",
      },
      {
        question: "Are there different cars to unlock?",
        answer: "Absolutely! The game features over 20 unique vehicles, each with different stats and customization options.",
      },
      {
        question: "Is there a career mode?",
        answer: "Yes, Speed Racer includes an extensive career mode with multiple racing series, championship events, and special challenges.",
      },
    ],
  },
  "sky-adventure": {
    title: "Sky Adventure",
    icon: adventureImage,
    tagline: "Embark on a Magical Journey",
    about: "Join our charming hero on an epic adventure through magical floating islands in Sky Adventure! Jump, run, and explore beautifully crafted levels filled with secrets, collectibles, and challenging platforming sections. With its whimsical art style, relaxing soundtrack, and engaging gameplay, Sky Adventure is perfect for players of all ages.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.alphahaze.skyadventure",
    screenshots: [adventureScreenshot, adventureScreenshot, adventureScreenshot],
    howToPlay: [
      "Tap the left side to move left, right side to move right",
      "Swipe up to jump - hold for a higher jump",
      "Collect coins and power-ups along the way",
      "Discover hidden areas and secret passages",
      "Complete all levels to unlock new worlds",
    ],
    faqs: [
      {
        question: "Is Sky Adventure suitable for children?",
        answer: "Yes! Sky Adventure is designed to be family-friendly with no violence or inappropriate content. It's perfect for players of all ages.",
      },
      {
        question: "How long is the game?",
        answer: "The main story features 60+ levels across multiple worlds. For completionists, there are many secrets and collectibles that extend gameplay significantly.",
      },
      {
        question: "Are there in-app purchases?",
        answer: "Sky Adventure is free to play with optional cosmetic purchases. All gameplay content can be unlocked without spending money.",
      },
      {
        question: "Can I save my progress?",
        answer: "Yes, your progress is automatically saved and can be synced across devices using Google Play Games.",
      },
    ],
  },
};

export default function GameDetail() {
  const [, params] = useRoute("/games/:gameId");
  const gameId = params?.gameId || "";
  const game = gamesData[gameId as keyof typeof gamesData];

  if (!game) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-6 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="font-serif text-4xl font-bold">Game Not Found</h1>
          <p className="text-muted-foreground">The game you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-32 h-32 flex-shrink-0 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
            <img
              src={game.icon}
              alt={game.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2" data-testid="text-game-title">
                {game.title}
              </h1>
              <p className="text-xl text-primary font-medium">{game.tagline}</p>
            </div>
            <a
              href={game.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-playstore"
            >
              <div className="inline-block bg-foreground text-background px-8 py-4 rounded-md hover-elevate active-elevate-2 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-80">GET IT ON</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <Card className="p-8 md:p-12">
          <h2 className="font-serif text-3xl font-semibold mb-6" data-testid="text-about-title">
            About This Game
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-description">
            {game.about}
          </p>
        </Card>

        <div>
          <h2 className="font-serif text-3xl font-semibold mb-6" data-testid="text-howto-title">
            How to Play
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {game.screenshots.map((screenshot, index) => (
              <Card key={index} className="overflow-hidden" data-testid={`card-screenshot-${index}`}>
                <img
                  src={screenshot}
                  alt={`${game.title} screenshot ${index + 1}`}
                  className="w-full h-auto"
                />
              </Card>
            ))}
          </div>
          <Card className="mt-6 p-8">
            <ol className="space-y-3">
              {game.howToPlay.map((step, index) => (
                <li key={index} className="flex gap-4" data-testid={`text-step-${index}`}>
                  <span className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </Card>
        </div>

        <div>
          <h2 className="font-serif text-3xl font-semibold mb-6" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {game.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-md px-6 bg-card"
                data-testid={`accordion-faq-${index}`}
              >
                <AccordionTrigger className="hover:no-underline py-6" data-testid={`button-faq-${index}`}>
                  <span className="text-left font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center pt-8">
          <a
            href={game.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-download-bottom"
          >
            <Button size="lg" className="text-base px-8" data-testid="button-download">
              Download Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
