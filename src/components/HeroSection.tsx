import { useMemo } from "react";
import heroImage from "@/assets/hero-gurudwara.avif";

const HeroSection = () => {
  const todayDate = useMemo(() => {
    return new Date().toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <img
        src={heroImage}
        alt="Gurudwara Baba Ke"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative z-10 text-center px-4 max-w-3xl animate-fade-in">
        <p className="text-gold-light font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
          ੴ ਸਤਿ ਨਾਮੁ
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
          Gurudwara <br /> Babe Ke
        </h1>
        <p className="text-primary-foreground/60 text-sm font-body tracking-widest uppercase mb-2 animate-fade-in" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
          {todayDate}
        </p>
        <p className="text-primary-foreground/80 text-lg md:text-xl font-light max-w-xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
          A sacred place of worship, community service, and spiritual growth in New Delhi
        </p>
        <a
          href="#schedule"
          className="inline-block bg-gradient-gold text-primary-foreground px-8 py-3 rounded-md font-medium text-sm tracking-wide hover:opacity-90 transition-opacity animate-fade-in"
          style={{ animationDelay: "0.8s", animationFillMode: "both" }}
        >
          View Daily Schedule
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
