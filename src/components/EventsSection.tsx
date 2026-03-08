const events = [
  {
    date: "Every Sunday",
    title: "Weekly Sangat Diwan",
    desc: "Special weekly congregation with kirtan and katha.",
  },
  {
    date: "Gurpurab Celebrations",
    title: "Birth & Martyrdom Anniversaries",
    desc: "Grand celebrations on Gurpurabs with Akhand Path and Nagar Kirtan.",
  },
  {
    date: "Monthly",
    title: "Sangrand & Masya Programs",
    desc: "Special prayers and langar on auspicious days of the Sikh calendar.",
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Events & Programs
          </h2>
          <p className="text-muted-foreground text-lg">
            Upcoming and recurring spiritual gatherings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
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
