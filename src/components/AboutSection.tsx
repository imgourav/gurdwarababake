import onkarSymbol from "@/assets/onkarymbol.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <img src={onkarSymbol} alt="Ik Onkar" className="h-16 w-16 mx-auto mb-6 opacity-70" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            About Gurudwara Babe Ke
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Gurudwara Babe Ke, situated in the heart of New Delhi, is a revered place of worship
            dedicated to the teachings of the Sikh Gurus. Our Gurudwara serves as a spiritual
            sanctuary where devotees gather for daily prayers, kirtan, and the sacred practice
            of langar — the community kitchen that feeds all, regardless of caste, creed, or background.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            With a deep commitment to seva (selfless service), our sangat (congregation) strives
            to uphold the values of equality, compassion, and devotion as taught by Sri Guru
            Nanak Dev Ji and the ten Sikh Gurus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { title: "Kirtan Seva", desc: "Daily recitation of Gurbani and devotional hymns" },
            { title: "Langar Seva", desc: "Free community kitchen serving meals to all visitors" },
            { title: "Community Service", desc: "Education programs, health camps, and social welfare" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-lg p-8 text-center border border-border hover:shadow-lg transition-shadow"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
