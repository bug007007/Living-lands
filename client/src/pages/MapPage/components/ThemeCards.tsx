import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";

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
  route?: string;
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
    route: "/rooted-in-land",
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

interface ThemeCardProps {
  theme: ITheme;
}

function ThemeCard({ theme }: ThemeCardProps) {
  const handleClick = () => {
    if (theme.route) {
      window.open(`https://xcn4vxm7rrrc.aiforce.cloud/app/app_4k6yjt14fgeve${theme.route}`, '_blank');
    }
  };

  return (
    <motion.div 
      variants={itemVariants}
      onClick={handleClick}
      className={`relative aspect-[2/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group ${theme.route ? 'cursor-pointer' : ''}`}
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
    </motion.div>
  );
}

export function ThemeCards() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
    >
      {themes.map((theme) => (
        <ThemeCard key={theme.id} theme={theme} />
      ))}
    </motion.div>
  );
}
