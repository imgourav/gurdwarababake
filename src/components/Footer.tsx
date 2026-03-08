import { Youtube } from "lucide-react";
import onkarSymbol from "@/assets/onkar-symbol.png";

const Footer = () => {
  return (
    <footer className="bg-navy py-12">
      <div className="container mx-auto px-4 text-center">
        <img src={onkarSymbol} alt="Ik Onkar" className="h-10 w-10 mx-auto mb-4 opacity-70" />
        <p className="font-display text-lg text-cream/80 mb-2">Gurudwara Baba Ke</p>
        <p className="text-cream/50 text-sm">New Delhi, India</p>
        <a
          href="https://youtube.com/@gurdwara_babe_ke_delhi?si=9amKMtu34i2qea6q"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-cream/60 hover:text-cream transition-colors text-sm"
        >
          <Youtube size={18} />
          <span>YouTube Channel</span>
        </a>
        <p className="text-cream/30 text-xs mt-6">
          ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫ਼ਤਹਿ
        </p>
      </div>
    </footer>
  );
};

export default Footer;
