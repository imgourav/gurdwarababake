import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import onkarSymbol from "@/assets/onkar-symbol.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const PLACEHOLDER_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300' fill='%23e5e7eb'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%239ca3af'%3EImage placeholder%3C/text%3E%3C/svg%3E";

const BabaJiHistory = () => {
  const { ref: section1, isVisible: v1 } = useScrollReveal(0.1);
  const { ref: section2, isVisible: v2 } = useScrollReveal(0.1);
  const { ref: section3, isVisible: v3 } = useScrollReveal(0.1);

  return (
    <div className="min-h-screen bg-background font-history [&_h1]:font-history [&_h2]:font-history [&_h3]:font-history [&_blockquote]:font-history">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <img src={onkarSymbol} alt="Ik Onkar" className="h-14 w-14 mx-auto mb-6 opacity-70" />
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">His Holiness</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Sant Baba Nahar Singh Ji
            </h1>
            <p className="font-display text-2xl md:text-3xl text-primary">Sunheranwale</p>
            <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
              A life dedicated to faith, seva, and the teachings of the Sikh Gurus
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
                <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-4">Early Life</span>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Birth & Education</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  His Holiness, Sant Baba Nahar Singh Ji, Sunheranwale was born in the village of Daudhar, District Moga, Punjab, India. His father was S. Nihal Singh Ji and mother Mata Bachan Kaur Ji.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Baba Ji was initially educated in village Daudhar and then went to Moga and Delhi for higher education. He attained many qualifications, including Engineering and training as a Pilot. Baba Ji has a Texan 2nd World War plane which has recently been restored.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-border shadow-lg aspect-[4/3] bg-muted flex items-center justify-center">
                <img src={PLACEHOLDER_IMG} alt="Baba Ji - early years placeholder" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* 1950-1960 */}
            <div ref={section2} className={`border-l-2 border-primary/30 pl-8 py-4 transition-all duration-700 ${v2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="text-primary font-semibold">1950 – 1960</span>
              <h2 className="font-display text-xl font-bold text-foreground mt-2 mb-4">Nanaksar & Spiritual Path</h2>
              <p className="text-muted-foreground leading-relaxed">
                From 1950 to 1960, Baba Ji assisted Sant Baba Isher Ji, Kaleranwale in construction of the Nanaksar Gurdwara and sarower, in memory of his grandfather the late great Sant Baba Nand Singh Ji, Kaleranwale. Baba Ji during this period would also work.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Baba Ji became a Sant with the blessings of His Holiness, Sant Baba Darbari Das Ji of Village Lopon, Dist. Moga.
              </p>
            </div>

            {/* Roads & Hemkunt */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Service to Punjab</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  During the 1960s, Baba Ji organised the preparation and construction of many hundreds of miles of roads linking villages to towns and cities in the Punjab.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  In 1960, Baba Ji went to Shri Hemkunt Sahib, Uttarakhand—situated 15,000 ft above sea level in the Himalayan ranges of Northern India—to the site where Guru Gobind Singh Ji had prayed and repeated God&apos;s name many years ago.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-border shadow-lg aspect-video bg-muted flex items-center justify-center">
                <img src={PLACEHOLDER_IMG} alt="Shri Hemkunt Sahib placeholder" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Burj Sidwan */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1 rounded-xl overflow-hidden border border-border shadow-lg aspect-[4/3] bg-muted flex items-center justify-center">
                <img src={PLACEHOLDER_IMG} alt="Burj Sidwan - langar seva placeholder" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 md:order-2">
                <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-4">1961 – 1963</span>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Village Burj Sidwan</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In 1961, Baba Ji went to Village Burj Sidwan, Dist Malout, Punjab. He spent time remembering God and got the local villagers to assist in preparing the roads in the area. Baba Ji was at the time known as &quot;Burjawale&quot;.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Baba Ji would always ensure that langar was available for all the volunteers and would personally serve langar to them. He remained in the village until 1963.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Baba Ji acquired land in 1982 and the Bhora Sahib Gurdwara is being constructed on this site. After leaving the Malout area in 1963, Baba Ji made another trip to Shri Hemkunt Sahib.
                </p>
              </div>
            </div>

            {/* Village Sunher */}
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-4">Village Sunher</span>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">The Name &quot;Sunheranwale&quot;</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                After returning to the Punjab, Baba Ji went to village Sunher, Dist. Ferozepur. Baba Ji used to stay on the land where there is now a school for many years.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Baba Ji constructed a Gurdwara in the village in memory of the visit made by the Sixth Guru, Guru Hargobind Ji. He also constructed many miles of road in the Ferozepur area.
              </p>
              <p className="text-primary font-display text-xl font-semibold">
                From this time, Baba Ji became known as &quot;Sunheranwale&quot;
              </p>
            </div>

            {/* Gurdwara Sunher Image */}
            <div className="rounded-xl overflow-hidden border border-border shadow-lg aspect-video bg-muted flex items-center justify-center">
              <img src={PLACEHOLDER_IMG} alt="Gurdwara at village Sunher placeholder" className="w-full h-full object-cover" />
            </div>

            {/* Awards & Global Work */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-foreground">Recognition & Global Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                From his early days, Baba Ji has been involved in social, community and religious projects all over India. In 1988 he received the Social Worker of the Year award from the Indian Government for his outstanding contributions over the decades for helping the underprivileged and socially disadvantaged.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                He has been instrumental in building numerous schools, colleges, hospitals and Gurdwaras not only in India but also in many other countries.
              </p>
            </div>

            {/* Jahra Peer Story */}
            <div ref={section3} className={`bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20 transition-all duration-700 ${v3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Jahra Peer & Guru Hargobind Ji</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Guru Nanak Dev Ji met Jahra Peer, a Muslim Saint, on his travels and told him to remember God and stated that he would come and bless him when he came in his sixth form. Jahra Peer continued to remember God.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When Guru Hargobind Ji (the sixth Guru) came to Village Sunher, Jahra Peer had become very old and fragile. Guru Ji came to Jahra Peer and blessed him. Soon after this Jahra Peer passed away. Sants and Peers are sent by God to help all the people.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                His Holiness, Sant Baba Nahar Singh Ji came to the area in 1964 and found the site where Jahra Peer had been buried. He had the whole area cleared and tidied and has now constructed a Gurdwara on the site in memory of the Great Jahra Peer and named the place:
              </p>
              <p className="font-display text-xl font-bold text-primary mt-6">Gurdwara Babe Ke, Jahra Peer</p>
            </div>

            {/* Guru Hargobind blessing Jahra Peer - image */}
            <div className="rounded-xl overflow-hidden border border-border shadow-lg aspect-video bg-muted flex items-center justify-center">
              <img src={PLACEHOLDER_IMG} alt="Guru Hargobind Ji blessing Jahra Peer placeholder" className="w-full h-full object-cover" />
            </div>

            {/* Closing */}
            <div className="text-center py-12">
              <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto mb-8">
                Baba Ji is known and respected worldwide. He preaches having faith in God and Guru Nanak Dev Ji&apos;s blessings of Nam, Dan and Ishnan to all. Baba Ji has travelled all over the world and met with people from various religions, communities and social standing.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto mb-8">
                His Holiness has set up projects throughout the world which aim to detail the journeys, teachings and preachings of the Ten Gurus and the blessings of the Aad Shri Guru Granth Sahib.
              </p>
              <blockquote className="font-display text-xl md:text-2xl text-foreground italic border-l-4 border-primary pl-6 py-4 text-left max-w-2xl mx-auto">
                Sants come into this world with the blessings of God. They perform the duties they have been sent to perform on this earth and then depart—but their names and blessings remain with us forever, if we have faith.
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
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BabaJiHistory;
