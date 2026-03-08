import { Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const scheduleItems = [
  { time: "4:00 AM", event: "Amrit Vela — Early Morning Meditation" },
  { time: "5:00 AM", event: "Asa Di Var — Morning Kirtan" },
  { time: "6:00 AM", event: "Hukamnama — Daily Divine Order" },
  { time: "24 Hours", event: "Langar Seva — Open All Day & Night" },
  { time: "7:00 PM", event: "Rehras Sahib — Evening Prayer" },
];

const ScheduleSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: listRef, isVisible: listVisible } = useScrollReveal();

  return (
    <section id="schedule" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Daily Schedule
          </h2>
          <p className="text-muted-foreground text-lg">
            Join us for daily prayers and seva
          </p>
        </div>

        <div ref={listRef} className="max-w-2xl mx-auto">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 py-5 border-b border-border last:border-b-0 transition-all duration-500 ${listVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
              style={{ transitionDelay: listVisible ? `${index * 100}ms` : "0ms" }}
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
