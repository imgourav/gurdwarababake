import { MapPin, Phone } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.contact.heading}
            </h2>
            <p className="text-muted-foreground text-lg">{t.contact.subtitle}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-10">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="space-y-8 flex-1">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1 shrink-0" size={22} />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{t.contact.address}</h3>
                    <p className="text-muted-foreground">{t.contact.addressValue}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-primary mt-1 shrink-0" size={22} />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{t.contact.phone}</h3>
                    <p className="text-muted-foreground">+91 97796 46346</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.4024671589423!2d77.07310977549804!3d28.557674875705743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ba3db03e4bb%3A0xa39eefac8eb6ed99!2sGurudwara%20Baba%20Ke!5e0!3m2!1sen!2sin!4v1772983892233!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gurudwara Baba Ke Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
