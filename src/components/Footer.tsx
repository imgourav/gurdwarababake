import onkarSymbol from "@/assets/onkar-symbol.png";

const Footer = () => {
  return (
    <footer className="bg-navy py-12">
      <div className="container mx-auto px-4 text-center">
        <img src={onkarSymbol} alt="Ik Onkar" className="h-10 w-10 mx-auto mb-4 opacity-70" />
        <p className="font-display text-lg text-cream/80 mb-2">Gurudwara Babe Ke</p>
        <p className="text-cream/50 text-sm">New Delhi, India</p>
        <p className="text-cream/30 text-xs mt-6">
          ੴ ਸਤਿ ਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ ਅਕਾਲ ਮੂਰਤਿ ਅਜੂਨੀ ਸੈਭੰ ਗੁਰ ਪ੍ਰਸਾਦਿ
        </p>
      </div>
    </footer>
  );
};

export default Footer;
