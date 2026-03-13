import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import KathaSection from "@/components/KathaSection";
import VideoSection from "@/components/VideoSection";
import ScheduleSection from "@/components/ScheduleSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const pathToSectionId: Record<string, string> = {
  "/": "home",
  "/about": "about",
  "/katha": "katha",
  "/schedule": "schedule",
  "/events": "events",
  "/contact": "contact",
};

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = pathToSectionId[location.pathname];
    if (!sectionId) return;

    // Scroll instantly so deep-links like /about land on the right section
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "instant", block: "start" });
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <KathaSection />
      <VideoSection />
      <ScheduleSection />
      <EventsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
