import { useMemo, useState, useEffect, useCallback } from "react";
import heroImage from "@/assets/hero-gurudwara.avif";
import heroProjects from "@/assets/hero-projects.jpg";
import heroBabaJi from "@/assets/hero-baba-ji.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const slides = [
  { src: heroImage, alt: "Gurudwara Baba Ke" },
  { src: heroBabaJi, alt: "His Holiness Saint Baba Nahar Singh Ji (Sunheran Wale)" },
  { src: heroProjects, alt: "Saint Baba Nahar Singh Ji Projects in India" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const { t } = useLanguage();

  const todayDate = useMemo(() => {
    return new Date().toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }, []);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground">
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? "bg-gold-light scale-125" : "bg-primary-foreground/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Previous slide">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Next slide">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>

      <div className="relative z-10 text-center px-4 max-w-3xl animate-fade-in">
        <p className="text-gold-light font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
          {t.hero.subtitle}
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
          {t.hero.title1} <br /> {t.hero.title2}
        </h1>
        <p className="text-primary-foreground/60 text-sm font-body tracking-widest uppercase mb-2 animate-fade-in" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
          {todayDate}
        </p>
        <a
          href="#schedule"
          className="inline-block bg-gradient-gold text-primary-foreground px-8 py-3 rounded-md font-medium text-sm tracking-wide hover:opacity-90 transition-opacity animate-fade-in"
          style={{ animationDelay: "0.8s", animationFillMode: "both" }}
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
