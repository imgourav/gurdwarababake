import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import onkarSymbol from "@/assets/onkar-symbol.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.about, to: "/about" },
    { label: t.nav.katha, to: "/katha" },
    { label: t.nav.schedule, to: "/schedule" },
    { label: t.nav.events, to: "/events" },
    { label: t.nav.babaJi, to: "/baba-ji" },
    { label: t.nav.contact, to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={onkarSymbol} alt="Ik Onkar" className="h-8 w-8" />
          <span className="font-display text-lg font-bold text-foreground">
            {t.nav.siteName}
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setLanguage(language === "en" ? "pa" : "en")}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors border border-border rounded-md px-3 py-1.5"
            aria-label="Switch language"
          >
            <Globe size={16} />
            {language === "en" ? "ਪੰਜਾਬੀ" : "English"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setLanguage(language === "en" ? "pa" : "en")}
            className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary transition-colors border border-border rounded-md px-2 py-1"
            aria-label="Switch language"
          >
            <Globe size={14} />
            {language === "en" ? "ਪੰ" : "EN"}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
