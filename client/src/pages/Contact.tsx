import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { SiX, SiInstagram, SiYoutube } from "react-icons/si";

export default function Contact() {
  const socialLinks = [
    {
      name: "Twitter",
      icon: SiX,
      url: "https://twitter.com/alphahazestudios",
      color: "hover:text-[#1DA1F2]",
    },
    {
      name: "Instagram",
      icon: SiInstagram,
      url: "https://instagram.com/alphahazestudios",
      color: "hover:text-[#E4405F]",
    },
    {
      name: "YouTube",
      icon: SiYoutube,
      url: "https://youtube.com/@alphahazestudios",
      color: "hover:text-[#FF0000]",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:hello@alphahazestudios.com",
      color: "hover:text-primary",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <h1 className="font-serif text-5xl md:text-6xl font-bold" data-testid="text-page-title">
            Get in Touch
          </h1>
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <p className="text-2xl md:text-3xl font-serif leading-relaxed" data-testid="text-contact-message">
              You matter to us! We're looking forward to hearing from you.
            </p>
          </Card>
        </div>

        <div className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="font-serif text-3xl font-semibold">Connect With Us</h2>
            <p className="text-muted-foreground">
              Follow us on social media or send us an email. We'd love to hear your feedback, 
              suggestions, or just chat about games!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                data-testid={`link-social-${social.name.toLowerCase()}`}
              >
                <Card className="p-8 flex flex-col items-center justify-center gap-4 hover-elevate active-elevate-2 transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                  <social.icon 
                    className={`w-12 h-12 text-foreground/80 transition-colors duration-300 ${social.color}`}
                  />
                  <span className="text-sm font-medium text-center">{social.name}</span>
                </Card>
              </a>
            ))}
          </div>
        </div>

        <Card className="p-8 space-y-4">
          <h3 className="font-serif text-2xl font-semibold text-center">Business Inquiries</h3>
          <div className="space-y-2 text-center">
            <p className="text-muted-foreground">
              For partnership opportunities, press inquiries, or business proposals:
            </p>
            <a
              href="mailto:business@alphahazestudios.com"
              className="inline-block text-primary hover:underline font-medium"
              data-testid="link-business-email"
            >
              business@alphahazestudios.com
            </a>
          </div>
        </Card>

        <Card className="p-8 space-y-4">
          <h3 className="font-serif text-2xl font-semibold text-center">Support</h3>
          <div className="space-y-2 text-center">
            <p className="text-muted-foreground">
              Need help with one of our games? Have a technical issue?
            </p>
            <a
              href="mailto:support@alphahazestudios.com"
              className="inline-block text-primary hover:underline font-medium"
              data-testid="link-support-email"
            >
              support@alphahazestudios.com
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}
