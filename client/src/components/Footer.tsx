import { Link } from "wouter";
import logoImage from "@assets/alphahaze-logo_1763085565837.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const gameLinks = [
    { href: "/games/puzzle-master", label: "Puzzle Master" },
    { href: "/games/speed-racer", label: "Speed Racer" },
    { href: "/games/sky-adventure", label: "Sky Adventure" },
  ];

  const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: "/games", label: "Games" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <img
              src={logoImage}
              alt="AlphaHaze Studios"
              className="h-12 w-auto object-contain"
            />
            <a
              href="https://play.google.com/store/apps/dev?id=placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              data-testid="link-footer-playstore"
            >
              <div className="bg-foreground text-background px-6 py-3 rounded-md hover-elevate active-elevate-2 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-80">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-6">Games</h3>
            <ul className="space-y-3">
              {gameLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-game-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-support"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {currentYear} AlphaHaze Studios | All Rights Reserved
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-privacy"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-terms"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
