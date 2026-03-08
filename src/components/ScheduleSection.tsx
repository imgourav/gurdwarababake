import { Clock } from "lucide-react";

const scheduleItems = [
  { time: "4:00 AM", event: "Amrit Vela — Early Morning Meditation" },
  { time: "5:00 AM", event: "Asa Di Var — Morning Kirtan" },
  { time: "6:30 AM", event: "Hukamnama — Daily Divine Order" },
  { time: "8:00 AM - 12:00 PM", event: "Langar Seva — Morning Meals" },
  { time: "5:00 PM", event: "Rehras Sahib — Evening Prayer" },
  { time: "7:00 PM", event: "Kirtan Darbar — Evening Devotional" },
  { time: "9:00 PM", event: "Sohila Sahib — Night Prayer" },
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Daily Schedule
          </h2>
          <p className="text-muted-foreground text-lg">
            Join us for daily prayers and seva
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 py-5 border-b border-border last:border-b-0"
            >
              <div className="flex items-center gap-2 min-w-[160px]">
                <Clock size={16} className="text-primary shrink-0" />
                <span className="text-sm font-semibold text-primary">{item.time}</span>
              </div>
              <span className="text-foreground">{item.event}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
