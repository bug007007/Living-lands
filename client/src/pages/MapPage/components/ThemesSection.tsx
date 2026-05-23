import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

import handsOfChinaImg from "@shared/static/images/theme-hands-of-china.jpg";
import poeticLifeImg from "@shared/static/images/theme-poetic-life.jpg";
import rootedInLandImg from "@shared/static/images/theme-rooted-in-land.jpg";
import artOfHealingImg from "@shared/static/images/theme-art-of-healing.jpg";

interface ITheme {
  id: string;
  title: string;
  titleZh: string;
  subtitle: string;
  subtitleZh: string;
  image: string;
}

const themes: ITheme[] = [
  {
    id: "hands-of-china",
    title: "Hands of China",
    titleZh: "中国手作",
    subtitle: "Craft & Artistry & Fermentation",
    subtitleZh: "工艺·艺术·酿造",
    image: handsOfChinaImg,
  },
  {
    id: "poetic-life",
    title: "Poetic Life",
    titleZh: "诗意生活",
    subtitle: "Tea, Wine, Incense, Calligraphy & Painting",
    subtitleZh: "茶·酒·香·书画",
    image: poeticLifeImg,
  },
  {
    id: "rooted-in-land",
    title: "Rooted in the Land",
    titleZh: "根植大地",
    subtitle: "Architecture & Nature & Opera",
    subtitleZh: "建筑·自然·戏曲",
    image: rootedInLandImg,
  },
  {
    id: "art-of-healing",
    title: "The Art of Healing",
    titleZh: "疗愈之道",
    subtitle: "Chinese Medicine & Wellness",
    subtitleZh: "中医·养生·健康",
    image: artOfHealingImg,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function ThemesSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-slate-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20"
        >
          {themes.map((theme) => (
            <motion.div
              key={theme.id}
              variants={itemVariants}
              whileHover={theme.id === "rooted-in-land" ? undefined : { y: -8, transition: { duration: 0.3 } }}
              className="group cursor-pointer"
            >
              <div
                className="relative aspect-[2/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={theme.id === "rooted-in-land" ? () => window.open('https://xcn4vxm7rrrc.aiforce.cloud/app/app_4k6yjt14fgeve/rooted-in-land', '_blank') : undefined}
              >
                {/* Background Image */}
                <img
                  src={theme.image}
                  alt={theme.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Dark Gradient Overlay at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                  <div className="flex items-end justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-serif font-medium text-white leading-tight mb-1 whitespace-nowrap">
                        {theme.title}
                      </h3>
                      <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed">
                        {theme.subtitle}
                      </p>
                    </div>
                    
                    {/* White Circular Arrow Button */}
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5 text-slate-900 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4 block">
            {t("themes.sectionLabel")}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-slate-900 mb-6">
            {t("themes.recommendations")}
          </h2>
          <p className="text-lg font-light text-slate-500 leading-relaxed max-w-2xl mx-auto">
            {t("themes.explore")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
