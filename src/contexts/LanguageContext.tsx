import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "pa";

const translations = {
  en: {
    // Navbar
    nav: {
      home: "Home",
      about: "About",
      schedule: "Schedule",
      events: "Events",
      contact: "Contact",
      siteName: "Gurudwara Baba Ke Delhi",
    },
    // Hero
    hero: {
      subtitle: "ੴ ਸਤਿ ਨਾਮੁ",
      title1: "Gurudwara",
      title2: "Baba Ke",
      cta: "View Daily Schedule",
    },
    // About
    about: {
      heading: "About Gurudwara Baba Ke",
      para1: "Gurudwara Baba Ke, situated in the heart of New Delhi, is a revered place of worship dedicated to the teachings of the Sikh Gurus. Our Gurudwara serves as a spiritual sanctuary where devotees gather for daily prayers, kirtan, and the sacred practice of langar — the community kitchen that feeds all, regardless of caste, creed, or background.",
      para2: "With a deep commitment to seva (selfless service), our sangat (congregation) strives to uphold the values of equality, compassion, and devotion as taught by Sri Guru Nanak Dev Ji and the ten Sikh Gurus.",
      kirtanTitle: "Kirtan Seva",
      kirtanDesc: "Daily recitation of Gurbani and devotional hymns",
      langarTitle: "Langar Seva",
      langarDesc: "Free community kitchen serving meals to all visitors",
      communityTitle: "Community Service",
      communityDesc: "Education programs, health camps, and social welfare",
      youtube: "Watch us on YouTube",
    },
    // Video
    video: {
      heading: "Watch & Experience",
      subtitle: "A glimpse into the spiritual atmosphere of Gurudwara Baba Ke",
    },
    // Schedule
    schedule: {
      heading: "Daily Schedule",
      subtitle: "Join us for daily prayers and seva",
      items: [
        { time: "4:00 AM", event: "Amrit Vela — Early Morning Meditation" },
        { time: "5:00 AM", event: "Asa Di Var — Morning Kirtan" },
        { time: "6:00 AM", event: "Hukamnama — Daily Divine Order" },
        { time: "24 Hours", event: "Langar Seva — Open All Day & Night" },
        { time: "7:00 PM", event: "Rehras Sahib — Evening Prayer" },
      ],
    },
    // Events
    events: {
      heading: "Events & Programs",
      subtitle: "Upcoming and recurring spiritual gatherings",
      items: [
        { date: "Every Sunday", title: "Weekly Sangat Diwan", desc: "Special weekly congregation with kirtan and katha." },
        { date: "2, 3, 4 January — Every Year", title: "Annual Gurpurab Celebration", desc: "Grand three-day Gurpurab celebration with Akhand Path, Kirtan Darbar, Nagar Kirtan, and special Langar Seva." },
        { date: "Monthly", title: "Sangrand, Masya & Dashmi Programs", desc: "Special prayers and langar on Sangrand, Masya, and Dashmi — auspicious days of the Sikh calendar." },
      ],
    },
    // Contact
    contact: {
      heading: "Visit Us",
      subtitle: "We welcome all to our Gurudwara",
      address: "Address",
      addressValue: "Shahabad Muhammadpur, Dwarka, Delhi, 110061",
      phone: "Phone",
    },
    // Footer
    footer: {
      name: "Gurudwara Baba Ke",
      location: "New Delhi, India",
    },
  },
  pa: {
    nav: {
      home: "ਮੁੱਖ ਪੰਨਾ",
      about: "ਜਾਣਕਾਰੀ",
      schedule: "ਸਮਾਂ-ਸਾਰਣੀ",
      events: "ਸਮਾਗਮ",
      contact: "ਸੰਪਰਕ",
      siteName: "ਗੁਰਦੁਆਰਾ ਬਾਬਾ ਕੇ ਦਿੱਲੀ",
    },
    hero: {
      subtitle: "ੴ ਸਤਿ ਨਾਮੁ",
      title1: "ਗੁਰਦੁਆਰਾ",
      title2: "ਬਾਬਾ ਕੇ",
      cta: "ਰੋਜ਼ਾਨਾ ਸਮਾਂ-ਸਾਰਣੀ ਵੇਖੋ",
    },
    about: {
      heading: "ਗੁਰਦੁਆਰਾ ਬਾਬਾ ਕੇ ਬਾਰੇ",
      para1: "ਗੁਰਦੁਆਰਾ ਬਾਬਾ ਕੇ, ਨਵੀਂ ਦਿੱਲੀ ਦੇ ਦਿਲ ਵਿੱਚ ਸਥਿਤ, ਸਿੱਖ ਗੁਰੂਆਂ ਦੀਆਂ ਸਿੱਖਿਆਵਾਂ ਨੂੰ ਸਮਰਪਿਤ ਇੱਕ ਪਵਿੱਤਰ ਅਸਥਾਨ ਹੈ। ਸਾਡਾ ਗੁਰਦੁਆਰਾ ਇੱਕ ਅਧਿਆਤਮਿਕ ਸ਼ਰਨ ਸਥਾਨ ਹੈ ਜਿੱਥੇ ਸ਼ਰਧਾਲੂ ਰੋਜ਼ਾਨਾ ਪ੍ਰਾਰਥਨਾ, ਕੀਰਤਨ, ਅਤੇ ਲੰਗਰ ਦੀ ਪਵਿੱਤਰ ਸੇਵਾ ਲਈ ਇਕੱਠੇ ਹੁੰਦੇ ਹਨ — ਜੋ ਬਿਨਾਂ ਕਿਸੇ ਜਾਤ, ਧਰਮ ਜਾਂ ਪਿਛੋਕੜ ਦੇ ਭੇਦਭਾਵ ਤੋਂ ਸਭ ਨੂੰ ਭੋਜਨ ਛਕਾਉਂਦਾ ਹੈ।",
      para2: "ਸੇਵਾ (ਨਿਰਸਵਾਰਥ ਸੇਵਾ) ਪ੍ਰਤੀ ਡੂੰਘੀ ਵਚਨਬੱਧਤਾ ਨਾਲ, ਸਾਡੀ ਸੰਗਤ ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਅਤੇ ਦਸ ਸਿੱਖ ਗੁਰੂਆਂ ਦੁਆਰਾ ਸਿਖਾਈਆਂ ਗਈਆਂ ਬਰਾਬਰੀ, ਦਇਆ ਅਤੇ ਭਗਤੀ ਦੀਆਂ ਕਦਰਾਂ-ਕੀਮਤਾਂ ਨੂੰ ਬਣਾਈ ਰੱਖਣ ਦਾ ਯਤਨ ਕਰਦੀ ਹੈ।",
      kirtanTitle: "ਕੀਰਤਨ ਸੇਵਾ",
      kirtanDesc: "ਗੁਰਬਾਣੀ ਦਾ ਰੋਜ਼ਾਨਾ ਪਾਠ ਅਤੇ ਭਗਤੀ ਸ਼ਬਦ",
      langarTitle: "ਲੰਗਰ ਸੇਵਾ",
      langarDesc: "ਸਾਰੇ ਸ਼ਰਧਾਲੂਆਂ ਨੂੰ ਮੁਫ਼ਤ ਭੋਜਨ ਛਕਾਉਣ ਵਾਲੀ ਲੰਗਰ ਸੇਵਾ",
      communityTitle: "ਸਮਾਜ ਸੇਵਾ",
      communityDesc: "ਸਿੱਖਿਆ ਪ੍ਰੋਗਰਾਮ, ਸਿਹਤ ਕੈਂਪ ਅਤੇ ਸਮਾਜ ਭਲਾਈ",
      youtube: "YouTube 'ਤੇ ਸਾਨੂੰ ਵੇਖੋ",
    },
    video: {
      heading: "ਵੇਖੋ ਅਤੇ ਅਨੁਭਵ ਕਰੋ",
      subtitle: "ਗੁਰਦੁਆਰਾ ਬਾਬਾ ਕੇ ਦੇ ਅਧਿਆਤਮਿਕ ਮਾਹੌਲ ਦੀ ਝਲਕ",
    },
    schedule: {
      heading: "ਰੋਜ਼ਾਨਾ ਸਮਾਂ-ਸਾਰਣੀ",
      subtitle: "ਰੋਜ਼ਾਨਾ ਪ੍ਰਾਰਥਨਾ ਅਤੇ ਸੇਵਾ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ",
      items: [
        { time: "ਸਵੇਰੇ 4:00", event: "ਅੰਮ੍ਰਿਤ ਵੇਲਾ — ਸਵੇਰ ਦੀ ਸਿਮਰਨ" },
        { time: "ਸਵੇਰੇ 5:00", event: "ਆਸਾ ਦੀ ਵਾਰ — ਸਵੇਰ ਦਾ ਕੀਰਤਨ" },
        { time: "ਸਵੇਰੇ 6:00", event: "ਹੁਕਮਨਾਮਾ — ਰੋਜ਼ਾਨਾ ਹੁਕਮ" },
        { time: "24 ਘੰਟੇ", event: "ਲੰਗਰ ਸੇਵਾ — ਦਿਨ ਰਾਤ ਖੁੱਲ੍ਹਾ" },
        { time: "ਸ਼ਾਮ 7:00", event: "ਰਹਿਰਾਸ ਸਾਹਿਬ — ਸ਼ਾਮ ਦੀ ਅਰਦਾਸ" },
      ],
    },
    events: {
      heading: "ਸਮਾਗਮ ਅਤੇ ਪ੍ਰੋਗਰਾਮ",
      subtitle: "ਆਉਣ ਵਾਲੇ ਅਤੇ ਨਿਯਮਿਤ ਅਧਿਆਤਮਿਕ ਸਮਾਗਮ",
      items: [
        { date: "ਹਰ ਐਤਵਾਰ", title: "ਹਫ਼ਤਾਵਾਰੀ ਸੰਗਤ ਦੀਵਾਨ", desc: "ਕੀਰਤਨ ਅਤੇ ਕਥਾ ਨਾਲ ਵਿਸ਼ੇਸ਼ ਹਫ਼ਤਾਵਾਰੀ ਸੰਗਤ।" },
        { date: "2, 3, 4 ਜਨਵਰੀ — ਹਰ ਸਾਲ", title: "ਸਾਲਾਨਾ ਗੁਰਪੁਰਬ ਸਮਾਗਮ", desc: "ਅਖੰਡ ਪਾਠ, ਕੀਰਤਨ ਦਰਬਾਰ, ਨਗਰ ਕੀਰਤਨ, ਅਤੇ ਵਿਸ਼ੇਸ਼ ਲੰਗਰ ਸੇਵਾ ਨਾਲ ਤਿੰਨ ਦਿਨਾਂ ਗੁਰਪੁਰਬ ਸਮਾਗਮ।" },
        { date: "ਮਹੀਨਾਵਾਰ", title: "ਸੰਗਰਾਂਦ, ਮੱਸਿਆ ਅਤੇ ਦਸ਼ਮੀ ਪ੍ਰੋਗਰਾਮ", desc: "ਸੰਗਰਾਂਦ, ਮੱਸਿਆ ਅਤੇ ਦਸ਼ਮੀ — ਸਿੱਖ ਕੈਲੰਡਰ ਦੇ ਸ਼ੁਭ ਦਿਨਾਂ 'ਤੇ ਵਿਸ਼ੇਸ਼ ਪ੍ਰਾਰਥਨਾ ਅਤੇ ਲੰਗਰ।" },
      ],
    },
    contact: {
      heading: "ਸਾਡੇ ਕੋਲ ਆਓ",
      subtitle: "ਅਸੀਂ ਸਾਰਿਆਂ ਦਾ ਗੁਰਦੁਆਰੇ ਵਿੱਚ ਸਵਾਗਤ ਕਰਦੇ ਹਾਂ",
      address: "ਪਤਾ",
      addressValue: "ਸ਼ਾਹਬਾਦ ਮੁਹੰਮਦਪੁਰ, ਦਵਾਰਕਾ, ਦਿੱਲੀ, 110061",
      phone: "ਫ਼ੋਨ",
    },
    footer: {
      name: "ਗੁਰਦੁਆਰਾ ਬਾਬਾ ਕੇ",
      location: "ਨਵੀਂ ਦਿੱਲੀ, ਭਾਰਤ",
    },
  },
} as const;

type Translations = typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
