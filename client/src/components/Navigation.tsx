import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import logoImage from "@assets/generated_images/AlphaHaze_Studios_logo_d1f7e793.png";

export function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/games", label: "Games" },
    { href: "https://play.google.com/store/apps/dev?id=placeholder", label: "Store", external: true },
  ];

  const rightLinks = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
      data-testid="nav-main"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-8 flex-1">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  <span className={location === link.href ? "text-primary" : ""}>
                    {link.label}
                  </span>
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      location === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              )
            )}
          </div>

          <Link href="/" className="flex-shrink-0" data-testid="link-home">
            <img
              src={logoImage}
              alt="AlphaHaze Studios"
              className="h-12 w-12 object-contain transition-transform duration-300 hover:scale-110"
            />
          </Link>

          <div className="flex items-center gap-8 flex-1 justify-end">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                data-testid={`link-${link.label.toLowerCase()}`}
              >
                <span className={location === link.href ? "text-primary" : ""}>
                  {link.label}
                </span>
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    location === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
