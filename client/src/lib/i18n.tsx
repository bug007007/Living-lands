import { useState, useEffect, createContext, useContext, useCallback } from 'react';

export type Locale = 'en' | 'zh';

export const STORAGE_KEY = 'app-locale';

export const defaultLocale: Locale = 'en';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      mapView: 'Map View',
      features: 'Features',
      themes: 'Themes',
    },

    // Hero Carousel
    hero: {
      slide1: {
        title: 'Rooted Openness',
        subtitle: 'Explore Local Life',
        description: 'Rooted in local life. Open to global connection.',
      },
      slide2: {
        title: 'Living Culture',
        subtitle: 'Experience Culture',
        description: 'Culture is not something frozen in the past — it is alive in the way people live today.',
      },
      slide3: {
        title: 'Contemporary Tradition',
        subtitle: 'Discover Heritage',
        description: 'Keeping the wisdom of ancient civilization alive in today\'s world.',
      },
      slide4: {
        title: 'Human Connection',
        subtitle: 'Connect Together',
        description: 'The deepest connections are built through shared everyday life.',
      },
      slide5: {
        title: 'Poetic Living',
        subtitle: 'Dream & Beauty',
        description: 'Rediscovering beauty, freedom, and meaning within everyday life.',
      },
      cta: 'Start Exploring',
    },

    // Map Section
    map: {
      sectionTitle: 'Interactive Map',
      sectionSubtitle: 'Map Explorer',
      sectionDescription: 'Click on any province to explore local community information and featured content',
      mapTitle: 'Administrative Divisions',
      mapSubtitle: 'Click provinces to explore · Zoom & pan supported',
      legend: 'Legend',
      default: 'Default',
      selectedHover: 'Selected/Hover',
      clickHint: 'Click to explore',
      zoomHint: 'Zoom & pan',
      provinces: 'Provinces',
      area: '10k km²',
      population: 'Billion',
      loading: 'Loading map data...',
      loadError: 'Map Loading Failed',
      loadErrorDesc: 'Failed to load map data',
      refresh: 'Refresh Page',
      dataError: 'Map data error, please refresh the page',
    },

    // Province Detail Panel
    province: {
      capital: 'Capital',
      area: 'Area',
      population: 'Population',
    },

    // Themes Section
    themes: {
      sectionTitle: 'Theme Recommendations',
      sectionSubtitle: 'Explore by theme and discover the perfect travel style for you',
      poeticLife: 'Poetic Life',
      artOfHealing: 'The Art of Healing',
      healingSubtitle: 'Chinese Medicine & Wellness',
      rootedInLand: 'Rooted in Land',
      handsOfChina: 'Hands of China',
    },

    // Footer
    footer: {
      brand: 'Living Lands',
      copyright: '© 2026 Living Lands',
    },

    // Not Found
    notFound: {
      title: 'Page Not Found',
      backHome: 'Back to Home',
    },
  },

  zh: {
    // Navigation
    nav: {
      home: '首页',
      mapView: '地图浏览',
      features: '特色功能',
      themes: '主题推荐',
    },

    // Hero Carousel
    hero: {
      slide1: {
        title: '扎根与开放',
        subtitle: '探索当地生活',
        description: '扎根于本地生活，开放于全球连接。',
      },
      slide2: {
        title: '活的文化',
        subtitle: '体验文化',
        description: '文化不是被冻结在过去的东西——它活在今天人们的生活方式中。',
      },
      slide3: {
        title: '当代传统',
        subtitle: '发现遗产',
        description: '在当今世界中传承古老文明的智慧。',
      },
      slide4: {
        title: '人文连接',
        subtitle: '共同连接',
        description: '最深的连接建立在共享的日常生活中。',
      },
      slide5: {
        title: '诗意栖居',
        subtitle: '梦想与美好',
        description: '在日常生活中重新发现美、自由和意义。',
      },
      cta: '开始探索',
    },

    // Map Section
    map: {
      sectionTitle: '互动地图',
      sectionSubtitle: '地图探索',
      sectionDescription: '点击任意省份，探索当地社区信息和精选内容',
      mapTitle: '行政区划',
      mapSubtitle: '点击省份探索 · 支持缩放和平移',
      legend: '图例',
      default: '默认',
      selectedHover: '选中/悬停',
      clickHint: '点击探索',
      zoomHint: '缩放平移',
      provinces: '省份',
      area: '万平方公里',
      population: '亿人口',
      loading: '加载地图数据...',
      loadError: '地图加载失败',
      loadErrorDesc: '地图数据加载失败',
      refresh: '刷新页面',
      dataError: '地图数据错误，请刷新页面',
    },

    // Province Detail Panel
    province: {
      capital: '省会',
      area: '面积',
      population: '人口',
    },

    // Themes Section
    themes: {
      sectionTitle: '主题推荐',
      sectionSubtitle: '按主题探索，发现最适合您的旅行风格',
      poeticLife: '诗意生活',
      artOfHealing: '疗愈之道',
      healingSubtitle: '中医药与健康养生',
      rootedInLand: '扎根土地',
      handsOfChina: '中国手作',
    },

    // Footer
    footer: {
      brand: 'Living Lands',
      copyright: '© 2026 中国地图探索者',
    },

    // Not Found
    notFound: {
      title: '页面未找到',
      backHome: '返回首页',
    },
  },
} as const;

export type Translations = typeof translations;
export type LocaleKey = keyof typeof translations.en;

// Flatten nested translation object
function flattenTranslations(obj: any, prefix = ''): Record<string, string> {
  return Object.keys(obj).reduce((acc: Record<string, string>, key) => {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(acc, flattenTranslations(obj[key], newKey));
    } else {
      acc[newKey] = obj[key];
    }
    return acc;
  }, {});
}

const flattenedEn = flattenTranslations(translations.en);
const flattenedZh = flattenTranslations(translations.zh);

export function getTranslation(locale: Locale, key: string): string {
  const flattened = locale === 'zh' ? flattenedZh : flattenedEn;
  return flattened[key] || key;
}

// React Context
interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale;
      if (saved && (saved === 'en' || saved === 'zh')) {
        return saved;
      }
    }
    return defaultLocale;
  });

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale;
    }
  }, []);

  const t = useCallback(
    (key: string) => getTranslation(locale, key),
    [locale]
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

// Hook for using translations
export function useTranslation() {
  return useI18n();
}
