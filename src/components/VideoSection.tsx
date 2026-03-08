import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const VideoSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Watch & Experience
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            A glimpse into the spiritual atmosphere of Gurudwara Baba Ke
          </p>
          <div className="aspect-video rounded-lg overflow-hidden border border-border shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/xwWRACCWfOM"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Gurudwara Baba Ke Video"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
