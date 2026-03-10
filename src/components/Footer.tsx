import onkarSymbol from "@/assets/onkar-symbol.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy py-12">
      <div className="container mx-auto px-4 text-center">
        <img src={onkarSymbol} alt="Ik Onkar" className="h-10 w-10 mx-auto mb-4 opacity-70" />
        <p className="font-display text-lg text-cream/80 mb-2">{t.footer.name}</p>
        <p className="text-cream/50 text-sm">{t.footer.location}</p>
        <p className="text-cream/30 text-xs mt-6">
          ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫ਼ਤਹਿ
        </p>
      </div>
    </footer>
  );
};

export default Footer;
