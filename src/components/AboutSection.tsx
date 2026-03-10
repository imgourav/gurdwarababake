import onkarSymbol from "@/assets/onkar-symbol.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();
  const { t } = useLanguage();

  const cards = [
    { title: t.about.kirtanTitle, desc: t.about.kirtanDesc },
    { title: t.about.langarTitle, desc: t.about.langarDesc },
    { title: t.about.communityTitle, desc: t.about.communityDesc },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <img src={onkarSymbol} alt="Ik Onkar" className="h-16 w-16 mx-auto mb-6 opacity-70" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t.about.heading}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">{t.about.para1}</p>
          <p className="text-muted-foreground text-lg leading-relaxed">{t.about.para2}</p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          {cards.map((item, i) => (
            <div
              key={i}
              className={`bg-card rounded-lg p-8 text-center border border-border hover:shadow-lg transition-all duration-500 hover-scale ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: cardsVisible ? `${i * 150}ms` : "0ms" }}
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: cardsVisible ? "500ms" : "0ms" }}>
          <a
            href="https://www.youtube.com/@gurdwara_babe_ke_delhi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border hover:shadow-lg transition-all hover-scale"
          >
            <svg viewBox="0 0 28 20" className="w-7 h-5" aria-hidden="true">
              <rect rx="4" width="28" height="20" fill="#FF0000" />
              <polygon points="11,4 11,16 21,10" fill="#FFF" />
            </svg>
            <span className="text-foreground font-medium text-sm">{t.about.youtube}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
