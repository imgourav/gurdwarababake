import React, { useState, useRef, useEffect, useCallback } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Gallery images
import gurpurab1 from "@/assets/gallery/original-1.jpg";
import gurpurab2 from "@/assets/gallery/original-2.jpg";
import gurpurab3 from "@/assets/gallery/original-3.jpg";
import gurpurab4 from "@/assets/gallery/original-4.jpg";
import gurpurab5 from "@/assets/gallery/original-5.jpg";
import gurpurab6 from "@/assets/gallery/original-6.jpg";
import gurpurab7 from "@/assets/gallery/original-7.jpg";
import gurpurab8 from "@/assets/gallery/original-8.jpg";
import gurpurab9 from "@/assets/gallery/original-9.jpg";

interface ImageItem {
  src: string;
  alt: string;
}

const IMAGES: ImageItem[] = [
  { src: gurpurab1, alt: "Sangat Gathering on Terrace" },
  { src: gurpurab2, alt: "Sant Baba Ji with Sangat" },
  { src: gurpurab3, alt: "Sacred Palki Procession" },
  { src: gurpurab4, alt: "Baba Ji Blessing the Youth" },
  { src: gurpurab5, alt: "Annual Langar Seva" },
  { src: gurpurab6, alt: "Sant Baba Ji Addressing Sangat" },
  { src: gurpurab7, alt: "Nishan Sahib Sevadars" },
  { src: gurpurab8, alt: "Sangat Seva Moments" },
  { src: gurpurab9, alt: "Gurudwara Presentation Ceremony" },
];

const GallerySection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const { language, t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; index: number } | null>(null);
  
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const lastRotation = useRef(0);
  const velocity = useRef(0);
  const requestRef = useRef<number>();
  const isInteracting = useRef(false);
  const hasDragged = useRef(false);

  // Configuration
  const radiusX = 550; // Increased for moderate gapping
  const radiusZ = 150; // Flatter arc
  const autoTickerSpeed = 0.08; // Slower speed

  const [isPaused, setIsPaused] = useState(false);

  const nextImage = useCallback(() => {
    if (selectedImage) {
      const nextIndex = (selectedImage.index + 1) % IMAGES.length;
      setSelectedImage({ ...IMAGES[nextIndex], index: nextIndex });
    }
  }, [selectedImage]);

  const prevImage = useCallback(() => {
    if (selectedImage) {
      const prevIndex = (selectedImage.index - 1 + IMAGES.length) % IMAGES.length;
      setSelectedImage({ ...IMAGES[prevIndex], index: prevIndex });
    }
  }, [selectedImage]);

  const update = useCallback(() => {
    if (!isInteracting.current && !isPaused && !selectedImage) {
      setRotation(prev => prev + autoTickerSpeed + velocity.current);
      velocity.current *= 0.95;
      if (Math.abs(velocity.current) < 0.01) velocity.current = 0;
    }
    requestRef.current = requestAnimationFrame(update);
  }, [isPaused, selectedImage]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [update]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, nextImage, prevImage]);

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    isInteracting.current = true;
    dragStartX.current = e.clientX;
    lastRotation.current = rotation;
    hasDragged.current = false;
    velocity.current = 0;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX.current;
    if (Math.abs(deltaX) > 5) hasDragged.current = true;
    
    const sensitivity = 0.15;
    const newRotation = lastRotation.current + deltaX * sensitivity;
    velocity.current = newRotation - rotation;
    setRotation(newRotation);
  };

  const onPointerUp = () => {
    setIsDragging(false);
    isInteracting.current = false;
  };

  const openLightbox = (image: ImageItem, index: number) => {
    if (hasDragged.current) return;
    setSelectedImage({ ...image, index });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="gallery" className="py-20 bg-background overflow-hidden select-none">
      <div className="container mx-auto px-4 mb-16">
        <div
          ref={sectionRef}
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              {t.nav.gallery}
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {language === "en" ? "Celebrating Gurpurab 2026 - Experience the spiritual essence through our interactive 3D gallery." : "ਗੁਰਪੁਰਬ 2026 ਦੀਆਂ ਖੁਸ਼ੀਆਂ - ਸਾਡੀ ਇੰਟਰਐਕਟਿਵ 3D ਗੈਲਰੀ ਰਾਹੀਂ ਅਧਿਆਤਮਿਕ ਤੱਤ ਦਾ ਅਨੁਭਵ ਕਰੋ।"}
            </p>
          </div>
        </div>
      </div>

      {/* 3D Arc Carousel - Compact, Slow, and Front-Focused */}
      <div 
        className="relative w-full h-[450px] flex items-center justify-center perspective-2000 cursor-grab active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={() => { onPointerUp(); setIsPaused(false); }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ touchAction: "none" }}
      >
        <div 
          className="relative w-full h-full flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {IMAGES.map((image, index) => {
            const angle = (index / IMAGES.length) * 360 + rotation;
            const rad = (angle * Math.PI) / 180;
            
            const tx = Math.sin(rad) * radiusX;
            const tz = Math.cos(rad) * radiusZ;
            
            // Only show images that are in front (positive Z)
            if (tz < -50) return null;

            const normalizedZ = (tz + radiusZ) / (2 * radiusZ);
            const scale = 0.7 + (tz / radiusZ) * 0.3;
            const opacity = Math.min(1, (tz + 50) / 100); // Smooth fade out as they go back
            
            return (
              <div
                key={index}
                className="absolute w-[260px] md:w-[320px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 ease-out"
                style={{
                  transform: `translate3d(${tx}px, 0, ${tz}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: Math.round(tz + radiusZ),
                  pointerEvents: tz > 0 ? "auto" : "none",
                }}
                onClick={() => openLightbox(image, index)}
              >
                <div className="relative w-full h-full group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Themed Gradient Overlay - Simplified */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Card Content - Text only */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <p className="text-white font-display text-lg font-bold">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-300">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20 z-[110]"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20 z-[110]"
            aria-label="Previous Image"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20 z-[110]"
            aria-label="Next Image"
          >
            <ChevronRight size={40} />
          </button>

          <div className="max-w-[90vw] max-h-[85vh] relative animate-in zoom-in-95 duration-500 flex flex-col items-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center text-white">
              <p className="text-xl font-medium">{selectedImage.alt}</p>
              <p className="text-white/50 text-sm mt-1">{selectedImage.index + 1} / {IMAGES.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
