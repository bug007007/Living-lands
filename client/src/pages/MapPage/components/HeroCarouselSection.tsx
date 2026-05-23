import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

import carousel1 from "@shared/static/images/carousel-1.jpg";
import carousel2 from "@shared/static/images/carousel-2.jpg";
import carousel3 from "@shared/static/images/carousel-3.jpg";
import carousel4 from "@shared/static/images/carousel-4.jpg";
import carousel5 from "@shared/static/images/carousel-5.jpg";

interface ISlideData {
  id: number;
  image: string;
  accentColor: string;
  titleKey: string;
  subtitleKey: string;
  descKey: string;
}

const slidesData: ISlideData[] = [
  { id: 1, image: carousel2, accentColor: "text-amber-400", titleKey: "hero.livingCulture", subtitleKey: "hero.experienceCulture", descKey: "hero.description2" },
  { id: 2, image: carousel1, accentColor: "text-blue-400", titleKey: "hero.rootedOpenness", subtitleKey: "hero.exploreLocalLife", descKey: "hero.description1" },
  { id: 3, image: carousel3, accentColor: "text-emerald-400", titleKey: "hero.contemporaryTradition", subtitleKey: "hero.discoverHeritage", descKey: "hero.description3" },
  { id: 4, image: carousel4, accentColor: "text-purple-400", titleKey: "hero.humanConnection", subtitleKey: "hero.connectTogether", descKey: "hero.description4" },
  { id: 5, image: carousel5, accentColor: "text-rose-400", titleKey: "hero.poeticLiving", subtitleKey: "hero.dreamBeauty", descKey: "hero.description5" },
];

export function HeroCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { t } = useTranslation();

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slidesData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  const scrollToContent = () => {
    const mapSection = document.getElementById("map-section");
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentData = slidesData[currentIndex];

  return (
    <section className="w-full h-screen min-h-[700px] relative overflow-hidden">
      <div 
        className="absolute inset-0"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={currentData.image}
              alt={t(currentData.titleKey)}
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 bg-black/40" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="mb-8"
                >
                  <span className={`text-sm font-bold uppercase tracking-[0.3em] ${currentData.accentColor}`}>
                    beyond travel, into life
                  </span>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="font-serif text-6xl md:text-8xl lg:text-9xl font-light text-white leading-tight mb-8"
                >
                  {t(currentData.titleKey)}
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-xl md:text-2xl font-light text-white/80 leading-relaxed max-w-3xl mx-auto mb-12"
                >
                  {t(currentData.descKey)}
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  onClick={scrollToContent}
                  className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300"
                >
                  {t("hero.startExploring")}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
        >
          <ChevronLeftIcon className="w-7 h-7" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
        >
          <ChevronRightIcon className="w-7 h-7" />
        </button>

        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
          {slidesData.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-500 rounded-full ${
                index === currentIndex 
                  ? "w-12 h-3 bg-white" 
                  : "w-3 h-3 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-24 right-6 md:right-12 text-white/60 text-sm font-medium z-10">
          <span className="text-white text-2xl font-light">{String(currentIndex + 1).padStart(2, '0')}</span>
          <span className="mx-2">/</span>
          <span>{String(slidesData.length).padStart(2, '0')}</span>
        </div>

        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors z-10"
        >
          <ChevronDownIcon className="w-8 h-8 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}
