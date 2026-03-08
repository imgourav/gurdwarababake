import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VideoSection from "@/components/VideoSection";
import ScheduleSection from "@/components/ScheduleSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <ScheduleSection />
      <EventsSection />
      <ContactSection />
      <Footer />
      <EventsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
