import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Rocket, Heart, Target, Briefcase } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <h1 className="font-serif text-5xl md:text-6xl font-bold" data-testid="text-page-title">
            About AlphaHaze Studios
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're an indie game studio on a mission to create delightful gaming experiences
          </p>
        </div>

        <Card className="p-8 md:p-12 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-serif text-3xl font-semibold" data-testid="text-story-title">Our Story</h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              AlphaHaze Studios was born from a simple idea: games should be fun, accessible, 
              and bring people together. Founded by a small team of passionate developers and 
              designers, we set out to create mobile games that anyone can enjoy, regardless 
              of their gaming experience.
            </p>
            <p>
              What started as a weekend project has grown into a studio dedicated to crafting 
              quality gaming experiences. We believe that the best games don't need complex 
              mechanics or expensive graphics – they just need to be fun and engaging.
            </p>
          </div>
        </Card>

        <Card className="p-8 md:p-12 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-serif text-3xl font-semibold" data-testid="text-mission-title">Our Mission</h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Our mission is to create games that bring joy to millions of players worldwide. 
              We're committed to developing simple yet addictive gameplay that respects our 
              players' time and intelligence.
            </p>
            <p>
              Every game we create is designed with love and attention to detail, ensuring 
              that each experience is polished, engaging, and memorable.
            </p>
          </div>
        </Card>

        <Card className="p-8 md:p-12 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-serif text-3xl font-semibold" data-testid="text-values-title">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Player-First</h3>
              <p className="text-muted-foreground">
                We put our players at the center of everything we do, creating experiences 
                that respect their time and bring genuine enjoyment.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Quality Over Quantity</h3>
              <p className="text-muted-foreground">
                We'd rather spend time perfecting one great game than rushing out many 
                mediocre ones.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Creativity</h3>
              <p className="text-muted-foreground">
                We encourage innovative thinking and aren't afraid to experiment with 
                new ideas and mechanics.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Community</h3>
              <p className="text-muted-foreground">
                We listen to our players and value their feedback, constantly improving 
                our games based on their input.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-8 md:p-12 space-y-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-serif text-3xl font-semibold" data-testid="text-careers-title">Careers</h2>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              We're a growing studio always looking for talented individuals who share our 
              passion for creating amazing games. Whether you're a developer, designer, artist, 
              or marketer, we'd love to hear from you.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At AlphaHaze Studios, you'll work on exciting projects, collaborate with creative 
              minds, and help shape the future of mobile gaming. We offer a flexible work 
              environment, competitive compensation, and the opportunity to make a real impact.
            </p>
            <div className="pt-4">
              <Link href="/contact" data-testid="link-join-team">
                <Button size="lg" data-testid="button-join-team">
                  Join Our Team
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        <div className="text-center space-y-6 pt-8">
          <h3 className="font-serif text-2xl font-semibold">Get in Touch</h3>
          <p className="text-muted-foreground">
            Have questions or want to learn more? We'd love to hear from you.
          </p>
          <Link href="/contact" data-testid="link-contact-us">
            <Button variant="outline" size="lg" data-testid="button-contact">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
