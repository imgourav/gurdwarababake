import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";

const KATHA_VIDEOS = [
  "BOeaAL0AbW8",
  "jR270y0wfS0",
  "2Lb1Cm2L21Q",
  "1K-P03AUHi0",
  "utpKrFziDWM",
  "mdDEQreti_c",
  "mdDEQreti_c",
  "X9fS-fTmZNU",
];

const KathaSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section id="katha" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.katha.heading}
          </h2>
          <p className="text-muted-foreground text-lg">{t.katha.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KATHA_VIDEOS.map((videoId, i) => (
            <a
              key={`${videoId}-${i}`}
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative aspect-video rounded-xl overflow-hidden border border-border bg-card shadow-md transition-all duration-500 ease-out hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 hover:scale-[1.02] hover:border-primary/40 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${i * 75}ms` : "0ms" }}
            >
              <div className="absolute inset-0">
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt={`Katha ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                  <svg
                    className="w-8 h-8 text-primary-foreground ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KathaSection;
