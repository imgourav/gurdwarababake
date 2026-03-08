import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visit Us
          </h2>
          <p className="text-muted-foreground text-lg">
            We welcome all to our Gurudwara
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          <div className="flex items-start gap-4">
            <MapPin className="text-primary mt-1 shrink-0" size={22} />
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">Address</h3>
              <p className="text-muted-foreground">H35G+377, Shahabad Muhammadpur, Dwarka, Delhi, 110061</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-primary mt-1 shrink-0" size={22} />
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">Phone</h3>
              <p className="text-muted-foreground">+91 97796 46346</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="text-primary mt-1 shrink-0" size={22} />
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">Email</h3>
              <p className="text-muted-foreground">gurudwarababeke@email.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
