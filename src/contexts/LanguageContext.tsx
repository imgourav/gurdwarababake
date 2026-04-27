/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "pa";

const translations = {
  en: {
    // Navbar
    nav: {
      home: "Home",
      about: "About",
      katha: "Katha",
      schedule: "Schedule",
      events: "Events",
      babaJiHistory: "Baba Ji History",
      contact: "Contact",
      gallery: "Gallery",
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
    // Katha
    katha: {
      heading: "Katha",
      subtitle: "Listen to spiritual discourses and Gurbani katha",
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
        { time: "3:00 AM", event: "Parkash — Opening of Sri Guru Granth Sahib Ji" },
        { time: "5:00 AM", event: "Amrit Vela — Early Morning Meditation" },
        { time: "6:00 AM", event: "Asa Di Var — Morning Kirtan" },
        { time: "7:00 AM", event: "Hukamnama — Daily Divine Order" },
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
        { date: "1, 2, 3 January — Every Year", title: "Annual Gurpurab Celebration", desc: "Grand three-day Gurpurab celebration with Akhand Path, Kirtan Darbar, Nagar Kirtan, and special Langar Seva." },
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
    babaJiHistory: {
      hero: {
        badge: "His Holiness",
        title: "Sant Baba Nahar Singh Ji",
        subtitle: "Sunheranwale",
        tagline: "A life dedicated to faith, seva, and the teachings of the Sikh Gurus",
      },
      earlyLife: {
        eyebrow: "Early Life",
        heading: "Birth & Education",
        p1: "His Holiness, Sant Baba Nahar Singh Ji, Sunheranwale was born in the village of Daudhar, District Moga, Punjab, India. His father was S. Nihal Singh Ji and mother Mata Bachan Kaur Ji.",
        p2: "Baba Ji was initially educated in village Daudhar and then went to Moga and Delhi for higher education. He attained many qualifications, including Engineering and training as a Pilot. Baba Ji has a Texan 2nd World War plane which has recently been restored.",
      },
      nanaksar: {
        range: "1950 – 1960",
        heading: "Nanaksar & Spiritual Path",
        p1: "From 1950 to 1960, Baba Ji assisted Sant Baba Isher Ji, Kaleranwale in construction of the Nanaksar Gurdwara and sarower, in memory of his grandfather the late great Sant Baba Nand Singh Ji, Kaleranwale. Baba Ji during this period would also work.",
        p2: "Baba Ji became a Sant with the blessings of His Holiness, Sant Baba Darbari Das Ji of Village Lopon, Dist. Moga.",
      },
      servicePunjab: {
        heading: "Service to Punjab",
        p1: "During the 1960s, Baba Ji organised the preparation and construction of many hundreds of miles of roads linking villages to towns and cities in the Punjab.",
        p2: "In 1960, Baba Ji went to Shri Hemkunt Sahib, Uttarakhand—situated 15,000 ft above sea level in the Himalayan ranges of Northern India—to the site where Guru Gobind Singh Ji had prayed and repeated God’s name many years ago.",
      },
      burjSidwan: {
        range: "1961 – 1963",
        heading: "Village Burj Sidwan",
        p1: "In 1961, Baba Ji went to Village Burj Sidwan, Dist Malout, Punjab. He spent time remembering God and got the local villagers to assist in preparing the roads in the area. Baba Ji was at the time known as “Burjawale”.",
        p2: "Baba Ji would always ensure that langar was available for all the volunteers and would personally serve langar to them. He remained in the village until 1963.",
        p3: "Baba Ji acquired land in 1982 and the Bhora Sahib Gurdwara is being constructed on this site. After leaving the Malout area in 1963, Baba Ji made another trip to Shri Hemkunt Sahib.",
      },
      sunher: {
        eyebrow: "Village Sunher",
        heading: "The Name “Sunheranwale”",
        p1: "After returning to the Punjab, Baba Ji went to village Sunher, Dist. Ferozepur. Baba Ji used to stay on the land where there is now a school for many years.",
        p2: "Baba Ji constructed a Gurdwara in the village in memory of the visit made by the Sixth Guru, Guru Hargobind Ji. He also constructed many miles of road in the Ferozepur area.",
        quote: "From this time, Baba Ji became known as “Sunheranwale”",
      },
      recognition: {
        heading: "Recognition & Global Service",
        p1: "From his early days, Baba Ji has been involved in social, community and religious projects all over India. In 1988 he received the Social Worker of the Year award from the Indian Government for his outstanding contributions over the decades for helping the underprivileged and socially disadvantaged.",
        p2: "He has been instrumental in building numerous schools, colleges, hospitals and Gurdwaras not only in India but also in many other countries.",
      },
      jahraPeer: {
        heading: "Jahra Peer & Guru Hargobind Ji",
        p1: "Guru Nanak Dev Ji met Jahra Peer, a Muslim Saint, on his travels and told him to remember God and stated that he would come and bless him when he came in his sixth form. Jahra Peer continued to remember God.",
        p2: "When Guru Hargobind Ji (the sixth Guru) came to Village Sunher, Jahra Peer had become very old and fragile. Guru Ji came to Jahra Peer and blessed him. Soon after this Jahra Peer passed away. Sant’s and Peer’s are sent by God to help all the people.",
        p3: "His Holiness, Sant Baba Nahar Singh Ji came to the area in 1964 and found the site where Jahra Peer had been buried. He had the whole area cleared and tidied and has now constructed a Gurdwara on the site in memory of the Great Jahra Peer and named the place:",
        place: "Gurdwara Babe Ke, Jahra Peer",
      },
      closing: {
        p1: "Baba Ji is known and respected worldwide. He preaches having faith in God and Guru Nanak Dev Ji’s blessings of Nam, Dan and Ishnan to all. Baba Ji has travelled all over the world and met with people from various religions, communities and social standing.",
        p2: "His Holiness has set up projects throughout the world which aim to detail the journeys, teachings and preachings of the Ten Gurus and the blessings of the Aad Shri Guru Granth Sahib.",
        quote:
          "Sants come into this world with the blessings of God. They perform the duties they have been sent to perform on this earth and then depart—but their names and blessings remain with us forever, if we have faith.",
      },
      backToHome: "Back to Home",
      images: {
        earlyYearsAlt: "Baba Ji - early years placeholder",
        hemkuntAlt: "Shri Hemkunt Sahib placeholder",
        burjAlt: "Burj Sidwan - langar seva placeholder",
        sunherAlt: "Gurdwara at village Sunher placeholder",
        jahraAlt: "Guru Hargobind Ji blessing Jahra Peer placeholder",
      },
    },
  },
  pa: {
    nav: {
      home: "ਮੁੱਖ ਪੰਨਾ",
      about: "ਜਾਣਕਾਰੀ",
      katha: "ਕਥਾ",
      schedule: "ਸਮਾਂ-ਸਾਰਣੀ",
      events: "ਸਮਾਗਮ",
      babaJiHistory: "ਬਾਬਾ ਜੀ ਇਤਿਹਾਸ",
      contact: "ਸੰਪਰਕ",
      gallery: "ਗੈਲਰੀ",
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
    katha: {
      heading: "ਕਥਾ",
      subtitle: "ਗੁਰਬਾਣੀ ਕਥਾ ਅਤੇ ਅਧਿਆਤਮਿਕ ਉਪਦੇਸ਼ ਸੁਣੋ",
    },
    video: {
      heading: "ਵੇਖੋ ਅਤੇ ਅਨੁਭਵ ਕਰੋ",
      subtitle: "ਗੁਰਦੁਆਰਾ ਬਾਬਾ ਕੇ ਦੇ ਅਧਿਆਤਮਿਕ ਮਾਹੌਲ ਦੀ ਝਲਕ",
    },
    schedule: {
      heading: "ਰੋਜ਼ਾਨਾ ਸਮਾਂ-ਸਾਰਣੀ",
      subtitle: "ਰੋਜ਼ਾਨਾ ਪ੍ਰਾਰਥਨਾ ਅਤੇ ਸੇਵਾ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ",
      items: [
        { time: "ਸਵੇਰੇ 3:00", event: "ਪ੍ਰਕਾਸ਼ — ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ" },
        { time: "ਸਵੇਰੇ 5:00", event: "ਅੰਮ੍ਰਿਤ ਵੇਲਾ — ਸਵੇਰ ਦੀ ਸਿਮਰਨ" },
        { time: "ਸਵੇਰੇ 6:00", event: "ਆਸਾ ਦੀ ਵਾਰ — ਸਵੇਰ ਦਾ ਕੀਰਤਨ" },
        { time: "ਸਵੇਰੇ 7:00", event: "ਹੁਕਮਨਾਮਾ — ਰੋਜ਼ਾਨਾ ਹੁਕਮ" },
        { time: "24 ਘੰਟੇ", event: "ਲੰਗਰ ਸੇਵਾ — ਦਿਨ ਰਾਤ ਖੁੱਲ੍ਹਾ" },
        { time: "ਸ਼ਾਮ 7:00", event: "ਰਹਿਰਾਸ ਸਾਹਿਬ — ਸ਼ਾਮ ਦੀ ਅਰਦਾਸ" },
      ],
    },
    events: {
      heading: "ਸਮਾਗਮ ਅਤੇ ਪ੍ਰੋਗਰਾਮ",
      subtitle: "ਆਉਣ ਵਾਲੇ ਅਤੇ ਨਿਯਮਿਤ ਅਧਿਆਤਮਿਕ ਸਮਾਗਮ",
      items: [
        { date: "ਹਰ ਐਤਵਾਰ", title: "ਹਫ਼ਤਾਵਾਰੀ ਸੰਗਤ ਦੀਵਾਨ", desc: "ਕੀਰਤਨ ਅਤੇ ਕਥਾ ਨਾਲ ਵਿਸ਼ੇਸ਼ ਹਫ਼ਤਾਵਾਰੀ ਸੰਗਤ।" },
        { date: "1, 2, 3 ਜਨਵਰੀ — ਹਰ ਸਾਲ", title: "ਸਾਲਾਨਾ ਗੁਰਪੁਰਬ ਸਮਾਗਮ", desc: "ਅਖੰਡ ਪਾਠ, ਕੀਰਤਨ ਦਰਬਾਰ, ਨਗਰ ਕੀਰਤਨ, ਅਤੇ ਵਿਸ਼ੇਸ਼ ਲੰਗਰ ਸੇਵਾ ਨਾਲ ਤਿੰਨ ਦਿਨਾਂ ਗੁਰਪੁਰਬ ਸਮਾਗਮ।" },
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
    babaJiHistory: {
      hero: {
        badge: "ਧੰਨ ਧੰਨ",
        title: "ਸੰਤ ਬਾਬਾ ਨਹਾਰ ਸਿੰਘ ਜੀ",
        subtitle: "ਸੁਨਹੇਰਾਂ ਵਾਲੇ",
        tagline: "ਸ਼ਰਧਾ, ਸੇਵਾ ਅਤੇ ਸਿੱਖ ਗੁਰੂਆਂ ਦੀਆਂ ਸਿੱਖਿਆਵਾਂ ਨੂੰ ਸਮਰਪਿਤ ਜੀਵਨ",
      },
      earlyLife: {
        eyebrow: "ਸ਼ੁਰੂਆਤੀ ਜੀਵਨ",
        heading: "ਜਨਮ ਅਤੇ ਸਿੱਖਿਆ",
        p1: "ਸੰਤ (ਮਹਾਪੁਰਖ) ਬਾਬਾ ਨਹਾਰ ਸਿੰਘ ਜੀ ਸੁਨਹੇਰਾਂ ਵਾਲੇ ਦਾ ਜਨਮ ਪਿੰਡ ਦੌਧਰ, ਜ਼ਿਲ੍ਹਾ ਮੋਗਾ, ਪੰਜਾਬ (ਭਾਰਤ) ਵਿੱਚ ਹੋਇਆ। ਆਪ ਦੇ ਪਿਤਾ ਸ. ਨਿਹਾਲ ਸਿੰਘ ਜੀ ਅਤੇ ਮਾਤਾ ਮਾਤਾ ਬਚਨ ਕੌਰ ਜੀ ਸਨ।",
        p2: "ਬਾਬਾ ਜੀ ਨੇ ਸ਼ੁਰੂਆਤੀ ਸਿੱਖਿਆ ਪਿੰਡ ਦੌਧਰ ਵਿੱਚ ਪ੍ਰਾਪਤ ਕੀਤੀ, ਫਿਰ ਮੋਗਾ ਅਤੇ ਉੱਚ ਸਿੱਖਿਆ ਲਈ ਦਿੱਲੀ ਗਏ। ਬਾਬਾ ਜੀ ਨੇ ਕਈ ਯੋਗਤਾਵਾਂ ਹਾਸਲ ਕੀਤੀਆਂ, ਜਿਨ੍ਹਾਂ ਵਿੱਚ ਇੰਜੀਨੀਅਰਿੰਗ ਅਤੇ ਪਾਇਲਟ ਦੀ ਟ੍ਰੇਨਿੰਗ ਵੀ ਸ਼ਾਮਲ ਸੀ। ਬਾਬਾ ਜੀ ਕੋਲ ਟੈਕਸਨ (Texan) ਦੂਜੇ ਵਿਸ਼ਵ ਯੁੱਧ ਦਾ ਇੱਕ ਜਹਾਜ਼ ਵੀ ਸੀ, ਜੋ ਹਾਲ ਹੀ ਵਿੱਚ ਰੀਸਟੋਰ ਕੀਤਾ ਗਿਆ।",
      },
      nanaksar: {
        range: "1950 – 1960",
        heading: "ਨਾਨਕਸਰ ਅਤੇ ਅਧਿਆਤਮਿਕ ਮਾਰਗ",
        p1: "1950 ਤੋਂ 1960 ਤੱਕ ਬਾਬਾ ਜੀ ਨੇ ਸੰਤ ਬਾਬਾ ਇਸਰ ਜੀ, ਕਾਲੇਰਾਂ ਵਾਲਿਆਂ ਦੀ ਮਦਦ ਨਾਲ ਨਾਨਕਸਰ ਗੁਰਦੁਆਰਾ ਅਤੇ ਸਰੋਵਰ ਦੇ ਨਿਰਮਾਣ ਵਿੱਚ ਸਹਿਯੋਗ ਕੀਤਾ, ਜੋ ਆਪਣੇ ਦਾਦਾ ਜੀ ਮਹਾਨ ਸੰਤ ਬਾਬਾ ਨੰਦ ਸਿੰਘ ਜੀ, ਕਾਲੇਰਾਂ ਵਾਲਿਆਂ ਦੀ ਯਾਦ ਵਿੱਚ ਬਣਾਇਆ ਗਿਆ। ਇਸ ਦੌਰਾਨ ਬਾਬਾ ਜੀ ਕੰਮ ਵੀ ਕਰਦੇ ਰਹੇ।",
        p2: "ਬਾਬਾ ਜੀ ਨੂੰ ਪਿੰਡ ਲੋਪੋਂ, ਜ਼ਿਲ੍ਹਾ ਮੋਗਾ ਦੇ ਸੰਤ ਬਾਬਾ ਦਰਬਾਰੀ ਦਾਸ ਜੀ ਦੀ ਕਿਰਪਾ ਨਾਲ ਸੰਤ ਪਦਵੀ ਪ੍ਰਾਪਤ ਹੋਈ।",
      },
      servicePunjab: {
        heading: "ਪੰਜਾਬ ਲਈ ਸੇਵਾ",
        p1: "1960 ਦੇ ਦਹਾਕੇ ਦੌਰਾਨ ਬਾਬਾ ਜੀ ਨੇ ਪੰਜਾਬ ਵਿੱਚ ਪਿੰਡਾਂ ਨੂੰ ਸ਼ਹਿਰਾਂ ਨਾਲ ਜੋੜਨ ਵਾਲੀਆਂ ਬਹੁਤ ਸਾਰੀਆਂ ਸੜਕਾਂ ਦੀ ਤਿਆਰੀ ਅਤੇ ਨਿਰਮਾਣ ਦਾ ਪ੍ਰਬੰਧ ਕੀਤਾ।",
        p2: "1960 ਵਿੱਚ ਬਾਬਾ ਜੀ ਸ਼੍ਰੀ ਹੇਮਕੁੰਟ ਸਾਹਿਬ, ਉੱਤਰਾਖੰਡ ਗਏ—ਜੋ ਹਿਮਾਲਿਆ ਦੀਆਂ ਰੇਂਜਾਂ ਵਿੱਚ ਸਮੁੰਦਰ ਤਲ ਤੋਂ ਲਗਭਗ 15,000 ਫੁੱਟ ਉੱਚਾਈ ‘ਤੇ ਸਥਿਤ ਹੈ—ਉਸ ਥਾਂ ਜਿੱਥੇ ਕਦੇ ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਅਰਦਾਸ ਅਤੇ ਨਾਮ ਜਪਿਆ ਸੀ।",
      },
      burjSidwan: {
        range: "1961 – 1963",
        heading: "ਪਿੰਡ ਬੁਰਜ ਸਿਡਵਾਂ",
        p1: "1961 ਵਿੱਚ ਬਾਬਾ ਜੀ ਪਿੰਡ ਬੁਰਜ ਸਿਡਵਾਂ, ਜ਼ਿਲ੍ਹਾ ਮਲੌਟ (ਪੰਜਾਬ) ਗਏ। ਬਾਬਾ ਜੀ ਨੇ ਨਾਮ ਸਿਮਰਨ ਕੀਤਾ ਅਤੇ ਨਾਲ ਹੀ ਇਲਾਕੇ ਵਿੱਚ ਸੜਕਾਂ ਦੀ ਤਿਆਰੀ ਲਈ ਪਿੰਡ ਵਾਸੀਆਂ ਨੂੰ ਪ੍ਰੇਰਿਤ ਕਰਕੇ ਸੇਵਾ ਵਿੱਚ ਜੋੜਿਆ। ਉਸ ਸਮੇਂ ਬਾਬਾ ਜੀ ਨੂੰ “ਬੁਰਜਾਂ ਵਾਲੇ” ਕਿਹਾ ਜਾਂਦਾ ਸੀ।",
        p2: "ਬਾਬਾ ਜੀ ਹਰ ਵੇਲੇ ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦੇ ਕਿ ਸੇਵਾਦਾਰਾਂ ਲਈ ਲੰਗਰ ਉਪਲਬਧ ਹੋਵੇ ਅਤੇ ਆਪ ਖੁਦ ਲੰਗਰ ਛਕਾਉਂਦੇ/ਵੰਡਦੇ ਸਨ। ਬਾਬਾ ਜੀ 1963 ਤੱਕ ਉਸ ਪਿੰਡ ਵਿੱਚ ਰਹੇ।",
        p3: "1982 ਵਿੱਚ ਬਾਬਾ ਜੀ ਨੇ ਜ਼ਮੀਨ ਪ੍ਰਾਪਤ ਕੀਤੀ ਅਤੇ ਉਸ ਸਥਾਨ ‘ਤੇ ਭੋਰਾ ਸਾਹਿਬ ਗੁਰਦੁਆਰਾ ਦਾ ਨਿਰਮਾਣ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ। 1963 ਵਿੱਚ ਮਲੌਟ ਇਲਾਕਾ ਛੱਡਣ ਤੋਂ ਬਾਅਦ ਬਾਬਾ ਜੀ ਨੇ ਇੱਕ ਵਾਰ ਫਿਰ ਸ਼੍ਰੀ ਹੇਮਕੁੰਟ ਸਾਹਿਬ ਦੀ ਯਾਤਰਾ ਕੀਤੀ।",
      },
      sunher: {
        eyebrow: "ਪਿੰਡ ਸੁਨਹੇਰ",
        heading: "“ਸੁਨਹੇਰਾਂ ਵਾਲੇ” ਨਾਮ",
        p1: "ਪੰਜਾਬ ਵਾਪਸ ਆ ਕੇ ਬਾਬਾ ਜੀ ਪਿੰਡ ਸੁਨਹੇਰ, ਜ਼ਿਲ੍ਹਾ ਫਿਰੋਜ਼ਪੁਰ ਗਏ। ਬਾਬਾ ਜੀ ਕਈ ਸਾਲ ਉਸ ਜ਼ਮੀਨ ‘ਤੇ ਰਹੇ ਜਿੱਥੇ ਹੁਣ ਇੱਕ ਸਕੂਲ ਹੈ।",
        p2: "ਬਾਬਾ ਜੀ ਨੇ ਛੇਵੇਂ ਪਾਤਸ਼ਾਹ ਸ੍ਰੀ ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਦੀ ਆਮਦ ਦੀ ਯਾਦ ਵਿੱਚ ਪਿੰਡ ਵਿੱਚ ਇੱਕ ਗੁਰਦੁਆਰਾ ਬਣਾਇਆ। ਬਾਬਾ ਜੀ ਨੇ ਫਿਰੋਜ਼ਪੁਰ ਇਲਾਕੇ ਵਿੱਚ ਵੀ ਕਈ ਮੀਲ ਸੜਕਾਂ ਦਾ ਨਿਰਮਾਣ ਕਰਵਾਇਆ।",
        quote: "ਇਸ ਸਮੇਂ ਤੋਂ ਬਾਬਾ ਜੀ “ਸੁਨਹੇਰਾਂ ਵਾਲੇ” ਦੇ ਨਾਂ ਨਾਲ ਪ੍ਰਸਿੱਧ ਹੋਏ।",
      },
      recognition: {
        heading: "ਮਾਨ-ਸਨਮਾਨ ਅਤੇ ਵਿਸ਼ਵ ਪੱਧਰੀ ਸੇਵਾ",
        p1: "ਸ਼ੁਰੂਆਤੀ ਦਿਨਾਂ ਤੋਂ ਹੀ ਬਾਬਾ ਜੀ ਸਮਾਜਿਕ, ਕਮਿਊਨਿਟੀ ਅਤੇ ਧਾਰਮਿਕ ਪ੍ਰੋਜੈਕਟਾਂ ਵਿੱਚ ਸਰਗਰਮ ਰਹੇ। 1988 ਵਿੱਚ ਗਰੀਬ ਅਤੇ ਪਿੱਛੜੇ ਵਰਗਾਂ ਲਈ ਲੰਮੇ ਸਮੇਂ ਤੱਕ ਕੀਤੀਆਂ ਸੇਵਾਵਾਂ ਦੇ ਲਈ ਭਾਰਤ ਸਰਕਾਰ ਵੱਲੋਂ ਬਾਬਾ ਜੀ ਨੂੰ “ਸੋਸ਼ਲ ਵਰਕਰ ਆਫ਼ ਦ ਯੀਅਰ” ਦਾ ਇਨਾਮ ਮਿਲਿਆ।",
        p2: "ਬਾਬਾ ਜੀ ਨੇ ਨਾ ਸਿਰਫ਼ ਭਾਰਤ ਵਿੱਚ, ਸਗੋਂ ਕਈ ਹੋਰ ਦੇਸ਼ਾਂ ਵਿੱਚ ਵੀ ਸਕੂਲ, ਕਾਲਜ, ਹਸਪਤਾਲ ਅਤੇ ਗੁਰਦੁਆਰੇ ਬਣਵਾਉਣ ਵਿੱਚ ਵੱਡਾ ਯੋਗਦਾਨ ਪਾਇਆ।",
      },
      jahraPeer: {
        heading: "ਝਹਿਰਾ ਪੀਰ ਅਤੇ ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ",
        p1: "ਉਦਾਸੀਆਂ ਦੌਰਾਨ ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੀ ਝਹਿਰਾ ਪੀਰ (ਇੱਕ ਮੁਸਲਮਾਨ ਫਕੀਰ/ਸੰਤ) ਨਾਲ ਮੁਲਾਕਾਤ ਹੋਈ। ਗੁਰੂ ਜੀ ਨੇ ਉਨ੍ਹਾਂ ਨੂੰ ਵਾਹਿਗੁਰੂ ਦਾ ਸਿਮਰਨ ਕਰਨ ਲਈ ਕਿਹਾ ਅਤੇ ਦੱਸਿਆ ਕਿ ਛੇਵੇਂ ਸਰੂਪ ਵਿੱਚ ਆ ਕੇ ਅਸੀਸ ਦੇਣਗੇ। ਝਹਿਰਾ ਪੀਰ ਜੀ ਸਿਮਰਨ ਕਰਦੇ ਰਹੇ।",
        p2: "ਜਦੋਂ ਛੇਵੇਂ ਪਾਤਸ਼ਾਹ ਸ੍ਰੀ ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਪਿੰਡ ਸੁਨਹੇਰ ਆਏ ਤਾਂ ਝਹਿਰਾ ਪੀਰ ਬਹੁਤ ਬੁੱਢੇ ਅਤੇ ਕਮਜ਼ੋਰ ਹੋ ਚੁੱਕੇ ਸਨ। ਗੁਰੂ ਜੀ ਨੇ ਆ ਕੇ ਅਸੀਸ ਬਖ਼ਸ਼ੀ। ਕੁਝ ਸਮੇਂ ਬਾਅਦ ਝਹਿਰਾ ਪੀਰ ਜੀ ਜੋਤੀ ਜੋਤ ਸਮਾ ਗਏ। ਸੰਤ ਅਤੇ ਪੀਰ ਪਰਮੇਸ਼ਰ ਵੱਲੋਂ ਲੋਕਾਂ ਦੀ ਭਲਾਈ ਲਈ ਭੇਜੇ ਜਾਂਦੇ ਹਨ।",
        p3: "1964 ਵਿੱਚ ਸੰਤ ਬਾਬਾ ਨਹਾਰ ਸਿੰਘ ਜੀ ਉਸ ਇਲਾਕੇ ਵਿੱਚ ਆਏ ਅਤੇ ਝਹਿਰਾ ਪੀਰ ਜੀ ਦੀ ਸਮਾਧ ਵਾਲਾ ਸਥਾਨ ਲੱਭਿਆ। ਬਾਬਾ ਜੀ ਨੇ ਸਾਰੀ ਜਗ੍ਹਾ ਸਾਫ਼ ਕਰਵਾਈ ਅਤੇ ਮਹਾਨ ਝਹਿਰਾ ਪੀਰ ਜੀ ਦੀ ਯਾਦ ਵਿੱਚ ਓਥੇ ਗੁਰਦੁਆਰਾ ਬਣਾਇਆ ਅਤੇ ਨਾਮ ਰੱਖਿਆ:",
        place: "ਗੁਰਦੁਆਰਾ ਬਾਬੇ ਕੇ, ਝਹਿਰਾ ਪੀਰ",
      },
      closing: {
        p1: "ਬਾਬਾ ਜੀ ਦੁਨੀਆ ਭਰ ਵਿੱਚ ਮਸ਼ਹੂਰ ਅਤੇ ਆਦਰਯੋਗ ਹਨ। ਬਾਬਾ ਜੀ ਵਾਹਿਗੁਰੂ ‘ਤੇ ਪੂਰਾ ਭਰੋਸਾ ਰੱਖਣ ਅਤੇ ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੀਆਂ ਨਾਮ, ਦਾਨ ਅਤੇ ਇਸਨਾਨ ਦੀਆਂ ਬਰਕਤਾਂ ਬਾਰੇ ਉਪਦੇਸ਼ ਦਿੰਦੇ ਹਨ। ਬਾਬਾ ਜੀ ਨੇ ਵਿਸ਼ਵ ਭਰ ਵਿੱਚ ਯਾਤਰਾ ਕੀਤੀ ਅਤੇ ਵੱਖ-ਵੱਖ ਧਰਮਾਂ, ਸਮਾਜਾਂ ਅਤੇ ਵਰਗਾਂ ਦੇ ਲੋਕਾਂ ਨਾਲ ਮਿਲੇ।",
        p2: "ਆਪ ਨੇ ਦੁਨੀਆ ਭਰ ਵਿੱਚ ਅਜਿਹੇ ਪ੍ਰੋਜੈਕਟ ਸ਼ੁਰੂ ਕੀਤੇ ਜੋ ਦਸ ਗੁਰੂ ਸਾਹਿਬਾਨ ਦੀਆਂ ਯਾਤਰਾਵਾਂ, ਸਿੱਖਿਆਵਾਂ ਅਤੇ ਉਪਦੇਸ਼ਾਂ, ਅਤੇ ਆਦਿ ਸ਼੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੀਆਂ ਬਖ਼ਸ਼ਿਸ਼ਾਂ ਨੂੰ ਦਰਸਾਉਂਦੇ ਹਨ।",
        quote:
          "ਸੰਤ ਪਰਮੇਸ਼ਰ ਦੀ ਬਖ਼ਸ਼ਿਸ਼ ਨਾਲ ਇਸ ਸੰਸਾਰ ਵਿੱਚ ਆਉਂਦੇ ਹਨ। ਉਹ ਜੋ ਕਾਰਜ ਉਨ੍ਹਾਂ ਨੂੰ ਸੌਂਪਿਆ ਜਾਂਦਾ ਹੈ ਉਹ ਪੂਰਾ ਕਰਕੇ ਸੰਸਾਰ ਤੋਂ ਪ੍ਰਸਥਾਨ ਕਰ ਜਾਂਦੇ ਹਨ, ਪਰ ਜੇ ਸਾਡੀ ਸ਼ਰਧਾ ਹੋਵੇ ਤਾਂ ਉਨ੍ਹਾਂ ਦੇ ਨਾਮ ਅਤੇ ਬਰਕਤਾਂ ਸਦਾ ਸਾਡੇ ਨਾਲ ਰਹਿੰਦੀਆਂ ਹਨ।",
      },
      backToHome: "ਮੁੱਖ ਪੰਨੇ ‘ਤੇ ਵਾਪਸ",
      images: {
        earlyYearsAlt: "ਬਾਬਾ ਜੀ — ਸ਼ੁਰੂਆਤੀ ਜੀਵਨ (ਪਲੇਸਹੋਲਡਰ)",
        hemkuntAlt: "ਸ਼੍ਰੀ ਹੇਮਕੁੰਟ ਸਾਹਿਬ (ਪਲੇਸਹੋਲਡਰ)",
        burjAlt: "ਬੁਰਜ ਸਿਡਵਾਂ — ਲੰਗਰ ਸੇਵਾ (ਪਲੇਸਹੋਲਡਰ)",
        sunherAlt: "ਪਿੰਡ ਸੁਨਹੇਰ ਦਾ ਗੁਰਦੁਆਰਾ (ਪਲੇਸਹੋਲਡਰ)",
        jahraAlt: "ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਜੀ ਦੀ ਅਸੀਸ — ਝਹਿਰਾ ਪੀਰ (ਪਲੇਸਹੋਲਡਰ)",
      },
    },
  },
};

interface Translations {
  nav: { home: string; about: string; katha: string; schedule: string; events: string; babaJiHistory: string; contact: string; gallery: string; siteName: string };
  hero: { subtitle: string; title1: string; title2: string; cta: string };
  about: { heading: string; para1: string; para2: string; kirtanTitle: string; kirtanDesc: string; langarTitle: string; langarDesc: string; communityTitle: string; communityDesc: string; youtube: string };
  katha: { heading: string; subtitle: string };
  video: { heading: string; subtitle: string };
  schedule: { heading: string; subtitle: string; items: { time: string; event: string }[] };
  events: { heading: string; subtitle: string; items: { date: string; title: string; desc: string }[] };
  contact: { heading: string; subtitle: string; address: string; addressValue: string; phone: string };
  footer: { name: string; location: string };
  babaJiHistory: {
    hero: { badge: string; title: string; subtitle: string; tagline: string };
    earlyLife: { eyebrow: string; heading: string; p1: string; p2: string };
    nanaksar: { range: string; heading: string; p1: string; p2: string };
    servicePunjab: { heading: string; p1: string; p2: string };
    burjSidwan: { range: string; heading: string; p1: string; p2: string; p3: string };
    sunher: { eyebrow: string; heading: string; p1: string; p2: string; quote: string };
    recognition: { heading: string; p1: string; p2: string };
    jahraPeer: { heading: string; p1: string; p2: string; p3: string; place: string };
    closing: { p1: string; p2: string; quote: string };
    backToHome: string;
    images: { earlyYearsAlt: string; hemkuntAlt: string; burjAlt: string; sunherAlt: string; jahraAlt: string };
  };
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] as Translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
