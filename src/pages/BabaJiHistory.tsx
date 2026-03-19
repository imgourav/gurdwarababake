import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import onkarSymbol from "@/assets/onkar-symbol.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";

import babaBirthPhoto from "@/assets/baba-ji-birth.png";
import babaSunherPhoto from "@/assets/baba-ji-sunheranwala.png";
import babaJahraPeerPhoto from "@/assets/baba-ji-jahra-peer.png";

const BabaJiHistory = () => {
  const { ref: section1, isVisible: v1 } = useScrollReveal(0.1);
  const { ref: section2, isVisible: v2 } = useScrollReveal(0.1);
  const { ref: section3, isVisible: v3 } = useScrollReveal(0.1);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background font-history [&_h1]:font-history [&_h2]:font-history [&_h3]:font-history [&_blockquote]:font-history">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <img src={onkarSymbol} alt="Ik Onkar" className="h-14 w-14 mx-auto mb-6 opacity-70" />
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">{t.babaJiHistory.hero.badge}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              {t.babaJiHistory.hero.title}
            </h1>
            <p className="font-display text-2xl md:text-3xl text-primary">{t.babaJiHistory.hero.subtitle}</p>
            <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
              {t.babaJiHistory.hero.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-16">
            {/* Early Life */}
            <div ref={section1} className={`grid md:grid-cols-2 gap-10 items-center transition-all duration-700 ${v1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div>
                <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-4">{t.babaJiHistory.earlyLife.eyebrow}</span>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">{t.babaJiHistory.earlyLife.heading}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t.babaJiHistory.earlyLife.p1}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t.babaJiHistory.earlyLife.p2}
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-border shadow-lg aspect-[5/4] bg-muted flex items-center justify-center">
                <img src={babaBirthPhoto} alt={t.babaJiHistory.images.earlyYearsAlt} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* 1950-1960 */}
            <div ref={section2} className={`border-l-2 border-primary/30 pl-8 py-4 transition-all duration-700 ${v2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="text-primary font-semibold">{t.babaJiHistory.nanaksar.range}</span>
              <h2 className="font-display text-xl font-bold text-foreground mt-2 mb-4">{t.babaJiHistory.nanaksar.heading}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.babaJiHistory.nanaksar.p1}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                {t.babaJiHistory.nanaksar.p2}
              </p>
            </div>

            {/* Roads & Hemkunt */}
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">{t.babaJiHistory.servicePunjab.heading}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t.babaJiHistory.servicePunjab.p1}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.babaJiHistory.servicePunjab.p2}
              </p>
            </div>

            {/* Burj Sidwan */}
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-4">{t.babaJiHistory.burjSidwan.range}</span>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">{t.babaJiHistory.burjSidwan.heading}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t.babaJiHistory.burjSidwan.p1}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t.babaJiHistory.burjSidwan.p2}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.babaJiHistory.burjSidwan.p3}
              </p>
            </div>

            {/* Village Sunher */}
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-4">{t.babaJiHistory.sunher.eyebrow}</span>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">{t.babaJiHistory.sunher.heading}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t.babaJiHistory.sunher.p1}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t.babaJiHistory.sunher.p2}
              </p>
              <p className="text-primary font-display text-xl font-semibold">
                {t.babaJiHistory.sunher.quote}
              </p>
            </div>

            {/* Gurdwara Sunher Image */}
            <div className="rounded-xl overflow-hidden border border-border shadow-lg aspect-video bg-muted flex items-center justify-center">
              <img src={babaSunherPhoto} alt={t.babaJiHistory.images.sunherAlt} className="w-full h-full object-cover" />
            </div>

            {/* Awards & Global Work */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-foreground">{t.babaJiHistory.recognition.heading}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.babaJiHistory.recognition.p1}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.babaJiHistory.recognition.p2}
              </p>
            </div>

            {/* Jahra Peer Story */}
            <div ref={section3} className={`bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20 transition-all duration-700 ${v3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">{t.babaJiHistory.jahraPeer.heading}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t.babaJiHistory.jahraPeer.p1}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t.babaJiHistory.jahraPeer.p2}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.babaJiHistory.jahraPeer.p3}
              </p>
              <p className="font-display text-xl font-bold text-primary mt-6">{t.babaJiHistory.jahraPeer.place}</p>
            </div>

            {/* Guru Hargobind blessing Jahra Peer - image */}
            <div className="rounded-xl overflow-hidden border border-border shadow-lg aspect-video bg-muted flex items-center justify-center">
              <img src={babaJahraPeerPhoto} alt={t.babaJiHistory.images.jahraAlt} className="w-full h-full object-cover" />
            </div>

            {/* Closing */}
            <div className="text-center py-12">
              <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto mb-8">
                {t.babaJiHistory.closing.p1}
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto mb-8">
                {t.babaJiHistory.closing.p2}
              </p>
              <blockquote className="font-display text-xl md:text-2xl text-foreground italic border-l-4 border-primary pl-6 py-4 text-left max-w-2xl mx-auto">
                {t.babaJiHistory.closing.quote}
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {t.babaJiHistory.backToHome}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BabaJiHistory;
