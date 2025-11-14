import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/alphahaze-logo_1763085565837.png";

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
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2.5">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-12">
          <div className="flex items-center gap-5 xl:gap-8">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-foreground hover:text-primary transition-colors duration-200 relative group whitespace-nowrap"
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-foreground hover:text-primary transition-colors duration-200 relative group whitespace-nowrap"
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  <span className={location === link.href ? "text-primary" : ""}>
                    {link.label}
                  </span>
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
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
              className="h-10 md:h-11 lg:h-12 w-auto object-contain transition-opacity duration-200 hover:opacity-80"
            />
          </Link>

          <div className="flex items-center gap-5 xl:gap-8">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 relative group whitespace-nowrap"
                data-testid={`link-${link.label.toLowerCase()}`}
              >
                <span className={location === link.href ? "text-primary" : ""}>
                  {link.label}
                </span>
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                    location === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between">
          <Link href="/" data-testid="link-home">
            <img
              src={logoImage}
              alt="AlphaHaze Studios"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-primary/20 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {allLinks.map((link) =>
                'external' in link && link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm font-semibold text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block text-sm font-semibold transition-colors py-2 ${
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
