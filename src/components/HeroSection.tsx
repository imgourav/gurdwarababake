import heroImage from "@/assets/hero-gurudwara.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <img
        src={heroImage}
        alt="Gurudwara Babe Ke"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <p className="text-gold-light font-body text-sm tracking-[0.3em] uppercase mb-4">
          ੴ ਸਤਿ ਨਾਮੁ
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Gurudwara <br /> Babe Ke
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl font-light max-w-xl mx-auto mb-8">
          A sacred place of worship, community service, and spiritual growth in New Delhi
        </p>
        <a
          href="#schedule"
          className="inline-block bg-gradient-gold text-primary-foreground px-8 py-3 rounded-md font-medium text-sm tracking-wide hover:opacity-90 transition-opacity"
        >
          View Daily Schedule
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
