import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type Locale = "en" | "zh";

interface TranslationDictionary {
  [key: string]: string | TranslationDictionary;
}

const translations: Record<Locale, TranslationDictionary> = {
  en: {
    // Navigation
    "nav.mapView": "Map View",
    "nav.features": "Features",
    "nav.backToHome": "Back to Home",
    
    // Page Not Found
    "notFound.title": "Page Not Found",
    
    // Footer
    "footer.brand": "China Map",
    "footer.copyright": "© 2026 Living Lands",
    
    // Hero Carousel
    "hero.slide1.title": "Rooted Openness",
    "hero.slide1.subtitle": "Explore Local Life",
    "hero.slide1.description": "Rooted in local life. Open to global connection.",
    "hero.slide2.title": "Living Culture",
    "hero.slide2.subtitle": "Experience Culture",
    "hero.slide2.description": "Culture is not something frozen in the past — it is alive in the way people live today.",
    "hero.slide3.title": "Contemporary Tradition",
    "hero.slide3.subtitle": "Discover Heritage",
    "hero.slide3.description": "Keeping the wisdom of ancient civilization alive in today's world.",
    "hero.slide4.title": "Human Connection",
    "hero.slide4.subtitle": "Connect Together",
    "hero.slide4.description": "The deepest connections are built through shared everyday life.",
    "hero.slide5.title": "Poetic Living",
    "hero.slide5.subtitle": "Dream & Beauty",
    "hero.slide5.description": "Rediscovering beauty, freedom, and meaning within everyday life.",
    "hero.cta": "Start Exploring",
    
    // Map Section
    "map.section.label": "Interactive Map",
    "map.section.title": "Living Lands",
    "map.section.description": "Share the contemporary wisdom of life rooted in five thousand years of Chinese civilization",
    "map.header.title": "Administrative Divisions",
    "map.header.hint": "Click provinces to explore · Zoom & pan supported",
    "map.hint.click": "Click to explore",
    "map.hint.zoom": "Zoom & pan",
    "map.legend.title": "Legend",
    "map.legend.default": "Default",
    "map.legend.selected": "Selected/Hover",
    "map.stats.provinces": "Provinces",
    "map.stats.area": "10k km²",
    "map.stats.population": "Billion",
    "map.loading": "Loading map data...",
    "map.error.title": "Map Loading Failed",
    "map.error.refresh": "Refresh Page",
    "map.error.message": "Map data error, please refresh the page",
    
    // Province Detail Panel
    "province.capital": "Capital",
    "province.area": "Area",
    "province.population": "Population",
    
    // Themes Section
    "themes.label": "Theme Recommendations",
    "themes.description": "Explore by theme and discover the perfect travel style for you",
    "theme.rootedInLand.title": "Rooted in Land",
    "theme.rootedInLand.subtitle": "Journey Through China's Living Landscapes",
    "theme.poeticLife.title": "Poetic Life",
    "theme.poeticLife.subtitle": "The Art of Living in China",
    "theme.artOfHealing.title": "The Art of Healing",
    "theme.artOfHealing.subtitle": "Chinese Medicine & Wellness",
    "theme.handsOfChina.title": "Hands of China",
    "theme.handsOfChina.subtitle": "Traditional Crafts & Artisans",
    "theme.lifeIsCelebration.title": "Life is Celebration",
    "theme.lifeIsCelebration.subtitle": "Festivals & Traditions",
    "theme.more": "Learn More",
  },
  zh: {
    // Navigation
    "nav.mapView": "地图视图",
    "nav.features": "功能特色",
    "nav.backToHome": "返回首页",
    
    // Page Not Found
    "notFound.title": "页面未找到",
    
    // Footer
    "footer.brand": "中国地图",
    "footer.copyright": "© 2026 中国地图探索者",
    
    // Hero Carousel
    "hero.slide1.title": "根植开放",
    "hero.slide1.subtitle": "探索本地生活",
    "hero.slide1.description": "根植于本地生活，开放于全球连接。",
    "hero.slide2.title": "活态文化",
    "hero.slide2.subtitle": "体验文化底蕴",
    "hero.slide2.description": "文化并非凝固于过去——它存在于人们当下的生活方式中。",
    "hero.slide3.title": "当代传统",
    "hero.slide3.subtitle": "发现文化遗产",
    "hero.slide3.description": "让古老文明的智慧在当今世界继续焕发活力。",
    "hero.slide4.title": "人文联结",
    "hero.slide4.subtitle": "共同连接",
    "hero.slide4.description": "最深刻的联结源于共同分享的日常生活。",
    "hero.slide5.title": "诗意栖居",
    "hero.slide5.subtitle": "梦想与美好",
    "hero.slide5.description": "在日常生活中重新发现美、自由与意义。",
    "hero.cta": "开始探索",
    
    // Map Section
    "map.section.label": "交互式地图",
    "map.section.title": "生活大地",
    "map.section.description": "分享根植于五千年中华文明的当代生活智慧",
    "map.header.title": "行政区划",
    "map.header.hint": "点击省份探索 · 支持缩放与平移",
    "map.hint.click": "点击探索",
    "map.hint.zoom": "缩放平移",
    "map.legend.title": "图例",
    "map.legend.default": "默认",
    "map.legend.selected": "选中/悬停",
    "map.stats.provinces": "省份",
    "map.stats.area": "万平方公里",
    "map.stats.population": "亿人口",
    "map.loading": "加载地图数据...",
    "map.error.title": "地图加载失败",
    "map.error.refresh": "刷新页面",
    "map.error.message": "地图数据错误，请刷新页面",
    
    // Province Detail Panel
    "province.capital": "省会",
    "province.area": "面积",
    "province.population": "人口",
    
    // Themes Section
    "themes.label": "主题推荐",
    "themes.description": "按主题探索，发现最适合您的旅行风格",
    "theme.rootedInLand.title": "根植大地",
    "theme.rootedInLand.subtitle": "穿越中国活态景观之旅",
    "theme.poeticLife.title": "诗意生活",
    "theme.poeticLife.subtitle": "中国生活艺术",
    "theme.artOfHealing.title": "疗愈之道",
    "theme.artOfHealing.subtitle": "中医养生与健康",
    "theme.handsOfChina.title": "中国手艺",
    "theme.handsOfChina.subtitle": "传统工艺与匠人精神",
    "theme.lifeIsCelebration.title": "生活庆典",
    "theme.lifeIsCelebration.subtitle": "节日与传统",
    "theme.more": "了解更多",
  },
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: string) => string | TranslationDictionary;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  const toggleLocale = useCallback(() => {
    const newLocale = locale === "en" ? "zh" : "en";
    setLocale(newLocale);
  }, [locale, setLocale]);

  const t = useCallback(
    (key: string): string | TranslationDictionary => {
      const keys = key.split(".");
      let value: TranslationDictionary | string = translations[locale];

      for (const k of keys) {
        if (typeof value === "object" && value !== null && k in value) {
          value = value[k] as TranslationDictionary | string;
        } else {
          return key;
        }
      }

      return value;
    },
    [locale]
  );

  const value: I18nContextType = {
    locale,
    setLocale,
    toggleLocale,
    t,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}

export function useTranslation() {
  const { t, locale } = useI18n();
  return { t, locale };
}
