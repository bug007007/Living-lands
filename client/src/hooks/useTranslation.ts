import { useState, useCallback, useEffect } from "react";

export type Language = "en" | "zh";

const STORAGE_KEY = "app-language";

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Hero Carousel
    "hero.exploreLocalLife": "Explore Local Life",
    "hero.experienceCulture": "Experience Culture",
    "hero.discoverHeritage": "Discover Heritage",
    "hero.connectTogether": "Connect Together",
    "hero.dreamBeauty": "Dream & Beauty",
    "hero.rootedOpenness": "Rooted Openness",
    "hero.livingCulture": "Living Culture",
    "hero.contemporaryTradition": "Contemporary Tradition",
    "hero.humanConnection": "Real Connection",
    "hero.poeticLiving": "Poetic Living",
    "hero.description1": "Rooted in local life. Open to global connection.",
    "hero.description2": "Culture is not something frozen in the past — it is alive in the way people live today.",
    "hero.description3": "Keeping the wisdom of ancient civilization alive in today's world.",
    "hero.description4": "The deepest connections are built through shared everyday life.",
    "hero.description5": "Rediscovering beauty, freedom, and meaning within everyday life.",
    "hero.startExploring": "Start Exploring",

    // Map Section
    "map.interactive": "Interactive Map",
    "map.explorer": "Living Lands",
    "map.instruction": "Share the contemporary wisdom of life rooted in five thousand years of Chinese civilization",
    "map.divisions": "Living Cultural Communities",
    "map.clickHint": "Click to explore",
    "map.zoomHint": "Zoom & pan",
    "map.communitiesSubtitle": "A trusted gateway into China's living cultural communities",
    "map.legend": "Legend",
    "map.default": "Default",
    "map.selected": "Selected/Hover",
    "map.loading": "Loading map data...",
    "map.loadFailed": "Map Loading Failed",
    "map.refresh": "Refresh Page",
    "map.error": "Map data error, please refresh the page",
    "map.provinces": "Provinces",
    "map.area": "10k km²",
    "map.population": "Billion",

    // Province Details
    "province.capital": "Capital",
    "province.area": "Area",
    "province.population": "Population",

    // Themes Section
    "themes.recommendations": "Beyond Travel, Into Life",
    "themes.explore": "Inviting the world into real living experience of Chinese civilization",
    "themes.poeticLife": "Poetic Life",
    "themes.artOfHealing": "The Art of Healing",
    "themes.chineseMedicine": "Chinese Medicine & Wellness",

    // Footer
    "footer.mapView": "Map View",
    "footer.features": "Features",
    "footer.copyright": "© 2026 Living Lands",
    "footer.chinaMap": "China Map",

    // Not Found
    "notFound.title": "Page Not Found",
    "notFound.backHome": "Back to Home",
  },
  zh: {
    // Hero Carousel
    "hero.exploreLocalLife": "探索本地生活",
    "hero.experienceCulture": "体验文化",
    "hero.discoverHeritage": "发现遗产",
    "hero.connectTogether": "连接在一起",
    "hero.dreamBeauty": "梦想与美好",
    "hero.rootedOpenness": "根植开放",
    "hero.livingCulture": "活态文化",
    "hero.contemporaryTradition": "当代传统",
    "hero.humanConnection": "真实连接",
    "hero.poeticLiving": "诗意生活",
    "hero.description1": "扎根于本地生活，向全球连接敞开大门。",
    "hero.description2": "文化并非凝固在过去的事物——它在人们今天的生活方式中依然鲜活。",
    "hero.description3": "让古代文明的智慧在今日世界中继续传承。",
    "hero.description4": "最深的联系是通过共享日常生活而建立的。",
    "hero.description5": "在日常生活中重新发现美、自由和意义。",
    "hero.startExploring": "开始探索",

    // Map Section
    "map.interactive": "交互式地图",
    "map.explorer": "生活大地",
    "map.instruction": "分享根植于五千年中华文明的当代生活智慧",
    "map.divisions": "活态文化社区",
    "map.clickHint": "点击探索",
    "map.zoomHint": "缩放与平移",
    "map.communitiesSubtitle": "进入中国活态文化社区的可信赖通道",
    "map.legend": "图例",
    "map.default": "默认",
    "map.selected": "选中/悬停",
    "map.loading": "加载地图数据中...",
    "map.loadFailed": "地图加载失败",
    "map.refresh": "刷新页面",
    "map.error": "地图数据错误，请刷新页面",
    "map.provinces": "省份",
    "map.area": "万平方公里",
    "map.population": "亿人口",

    // Province Details
    "province.capital": "省会",
    "province.area": "面积",
    "province.population": "人口",

    // Themes Section
    "themes.recommendations": "主题推荐",
    "themes.explore": "按主题探索，发现最适合您的旅行风格",
    "themes.poeticLife": "诗意生活",
    "themes.artOfHealing": "疗愈之道",
    "themes.chineseMedicine": "中医养生",

    // Footer
    "footer.mapView": "地图视图",
    "footer.features": "功能特色",
    "footer.copyright": "© 2026 中国地图探索",
    "footer.chinaMap": "中国地图",

    // Not Found
    "notFound.title": "页面未找到",
    "notFound.backHome": "返回首页",
  },
};

export function useTranslation() {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY) as Language;
      return stored || "en";
    }
    return "en";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[language][key] || key;
    },
    [language]
  );

  return {
    t,
    language,
    setLanguage,
    languages: ["en", "zh"] as const,
  };
}

export default useTranslation;
