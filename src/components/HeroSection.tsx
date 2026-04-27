import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroMain from "@/assets/hero-main.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  const todayDate = useMemo(() => {
    return new Date().toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Full Opacity, No Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroMain})` }}
      />

      {/* Subtle darkening overlay only for text readability if needed, but keeping it minimal as requested */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <p className="text-gold-light font-body text-sm tracking-[0.3em] uppercase mb-4 drop-shadow-lg">
          {t.hero.subtitle}
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight drop-shadow-2xl">
          {t.hero.title1} <br /> {t.hero.title2}
        </h1>
        <p className="text-primary-foreground/90 text-sm font-body tracking-widest uppercase mb-2 drop-shadow-md">
          {todayDate}
        </p>
        <a
          href="#schedule"
          className="inline-block bg-gradient-gold text-primary-foreground px-8 py-3 rounded-md font-medium text-sm tracking-wide hover:opacity-90 transition-opacity shadow-lg"
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
