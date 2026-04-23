import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";

// Placeholder images for demonstration
import gurpurab1 from "@/assets/gallery/original-1.jpg";
import gurpurab2 from "@/assets/gallery/original-2.jpg";
import gurpurab3 from "@/assets/gallery/original-3.jpg";
import gurpurab4 from "@/assets/gallery/original-4.jpg";
import gurpurab5 from "@/assets/gallery/original-5.jpg";

const GallerySection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { language, t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const albums = [
    {
      id: "gurpurab-2026",
      name: language === "en" ? "GURPURAB 2026" : "ਗੁਰਪੁਰਬ 2026",
      description: language === "en" ? "Celebrations of Gurpurab 2026 at Gurudwara Baba Ke" : "ਗੁਰਦੁਆਰਾ ਬਾਬਾ ਕੇ ਵਿਖੇ ਗੁਰਪੁਰਬ 2026 ਦੀਆਂ ਖੁਸ਼ੀਆਂ",
      images: [
        { src: gurpurab1, alt: "Sangat Gathering on Terrace" },
        { src: gurpurab2, alt: "Sant Baba Ji with Sangat" },
        { src: gurpurab3, alt: "Sacred Palki Procession" },
        { src: gurpurab4, alt: "Baba Ji Blessing the Youth" },
        { src: gurpurab5, alt: "Annual Langar Seva" },
      ]
    }
  ];

  const openLightbox = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="gallery" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              {t.nav.gallery}
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {language === "en" ? "Capturing the spiritual essence and moments of service at Gurudwara Baba Ke." : "ਗੁਰਦੁਆਰਾ ਬਾਬਾ ਕੇ ਵਿਖੇ ਅਧਿਆਤਮਿਕ ਤੱਤ ਅਤੇ ਸੇਵਾ ਦੇ ਪਲਾਂ ਨੂੰ ਕੈਪਚਰ ਕਰਨਾ।"}
            </p>
          </div>

          <div className="space-y-20">
            {albums.map((album) => (
              <div key={album.id} className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-end gap-4 border-b border-border pb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{album.name}</h3>
                    <p className="text-muted-foreground mt-1">{album.description}</p>
                  </div>
                  <div className="md:ml-auto">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {album.images.length} {language === "en" ? "Photos" : "ਫੋਟੋਆਂ"}
                    </span>
                  </div>
                </div>
                
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                  {album.images.map((image, index) => (
                    <div 
                      key={index} 
                      className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                      onClick={() => openLightbox(image)}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                         <p className="text-white font-display text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                           {image.alt}
                         </p>
                         <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                            <Maximize2 size={16} className="text-primary" />
                            <span className="text-white/80 text-sm">{language === "en" ? "View Large" : "ਵੱਡਾ ਵੇਖੋ"}</span>
                         </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-300">
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          
          <div className="max-w-[90vw] max-h-[85vh] relative animate-in zoom-in-95 duration-500">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-12 left-0 right-0 text-center">
              <p className="text-white text-xl font-medium">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
