import { motion } from "framer-motion";
import { ChinaMap } from "./ChinaMap";
import { useTranslation } from "@/hooks/useTranslation";

export function MapSection() {
  const { t } = useTranslation();

  return (
    <section id="map-section" className="w-full bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24 md:py-40 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl" />
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-3 block">
            {t("map.interactive")}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-4">
            {t("map.explorer")}
          </h2>
          <p className="text-lg md:text-xl font-light text-slate-500 leading-relaxed" style={{whiteSpace: 'nowrap'}}>
            {t("map.instruction")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <ChinaMap />
        </motion.div>
      </div>
    </section>
  );
}
