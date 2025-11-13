import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/generated_images/AlphaHaze_Studios_logo_d1f7e793.png";

export function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
  
  const allLinks = [...navLinks, ...rightLinks];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/98 backdrop-blur-xl border-b-2 border-primary/20 shadow-xl" 
          : "bg-transparent"
      }`}
      data-testid="nav-main"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center gap-8 xl:gap-16">
          <div className="flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base xl:text-lg font-semibold text-foreground hover:text-primary transition-all duration-300 relative group whitespace-nowrap"
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base xl:text-lg font-semibold text-foreground hover:text-primary transition-all duration-300 relative group whitespace-nowrap"
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  <span className={location === link.href ? "text-primary" : ""}>
                    {link.label}
                  </span>
                  <span
                    className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 ${
                      location === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              )
            )}
          </div>

          <Link href="/" className="flex-shrink-0 relative group" data-testid="link-home">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <img
              src={logoImage}
              alt="AlphaHaze Studios"
              className="h-16 w-16 xl:h-20 xl:w-20 object-contain transition-all duration-500 hover:scale-110 hover:rotate-6 relative z-10"
            />
          </Link>

          <div className="flex items-center gap-6 xl:gap-10">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base xl:text-lg font-semibold text-foreground hover:text-primary transition-all duration-300 relative group whitespace-nowrap"
                data-testid={`link-${link.label.toLowerCase()}`}
              >
                <span className={location === link.href ? "text-primary" : ""}>
                  {link.label}
                </span>
                <span
                  className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 ${
                    location === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between">
          <Link href="/" className="relative group" data-testid="link-home">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <img
              src={logoImage}
              alt="AlphaHaze Studios"
              className="h-12 w-12 sm:h-14 sm:w-14 object-contain transition-all duration-500 hover:scale-110 relative z-10"
            />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b-2 border-primary/20 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {allLinks.map((link) =>
                'external' in link && link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg font-semibold text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block text-lg font-semibold transition-colors py-2 ${
                      location === link.href ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
