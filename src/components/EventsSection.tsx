import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";

const EventsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section id="events" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.events.heading}
          </h2>
          <p className="text-muted-foreground text-lg">{t.events.subtitle}</p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {t.events.items.map((event, i) => (
            <div
              key={i}
              className={`bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-500 hover-scale ${cardsVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
              style={{ transitionDelay: cardsVisible ? `${i * 150}ms` : "0ms" }}
            >
              <div className="bg-gradient-gold px-6 py-3">
                <span className="text-primary-foreground text-sm font-semibold tracking-wide">
                  {event.date}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
