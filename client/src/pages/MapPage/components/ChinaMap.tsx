import { useEffect, useState, useCallback, useMemo } from 'react';
import ReactECharts from 'echarts-for-react';
import type { EChartsOption } from 'echarts';
import { XIcon, MapPinIcon, ZoomInIcon, MousePointerClickIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

interface ProvinceData {
  name: string;
  nameEn: string;
  value: number;
  description: string;
  capital: string;
  area: string;
  population: string;
}

const provinceData: ProvinceData[] = [
  { name: '北京市', nameEn: 'Beijing', value: 1, description: '中华人民共和国首都', capital: '北京', area: '1.64万km²', population: '2184万' },
  { name: '天津市', nameEn: 'Tianjin', value: 2, description: '北方重要港口城市', capital: '天津', area: '1.19万km²', population: '1387万' },
  { name: '河北省', nameEn: 'Hebei', value: 3, description: '环抱京津，燕赵大地', capital: '石家庄', area: '18.88万km²', population: '7420万' },
  { name: '山西省', nameEn: 'Shanxi', value: 4, description: '华夏文明发祥地', capital: '太原', area: '15.67万km²', population: '3492万' },
  { name: '内蒙古自治区', nameEn: 'Inner Mongolia', value: 5, description: '草原风光，辽阔壮美', capital: '呼和浩特', area: '118.3万km²', population: '2405万' },
  { name: '辽宁省', nameEn: 'Liaoning', value: 6, description: '共和国长子', capital: '沈阳', area: '14.8万km²', population: '4197万' },
  { name: '吉林省', nameEn: 'Jilin', value: 7, description: '白山黑水，东北粮仓', capital: '长春', area: '18.74万km²', population: '2347万' },
  { name: '黑龙江省', nameEn: 'Heilongjiang', value: 8, description: '冰雪之乡，北国风光', capital: '哈尔滨', area: '47.3万km²', population: '3099万' },
  { name: '上海市', nameEn: 'Shanghai', value: 9, description: '国际经济金融中心', capital: '上海', area: '0.63万km²', population: '2489万' },
  { name: '江苏省', nameEn: 'Jiangsu', value: 10, description: '鱼米之乡，经济强省', capital: '南京', area: '10.72万km²', population: '8505万' },
  { name: '浙江省', nameEn: 'Zhejiang', value: 11, description: '江南水乡，数字经济', capital: '杭州', area: '10.55万km²', population: '6540万' },
  { name: '安徽省', nameEn: 'Anhui', value: 12, description: '徽风皖韵，科教重镇', capital: '合肥', area: '14.01万km²', population: '6102万' },
  { name: '福建省', nameEn: 'Fujian', value: 13, description: '海上丝绸之路起点', capital: '福州', area: '12.4万km²', population: '4188万' },
  { name: '江西省', nameEn: 'Jiangxi', value: 14, description: '红色摇篮，绿色家园', capital: '南昌', area: '16.69万km²', population: '4515万' },
  { name: '山东省', nameEn: 'Shandong', value: 15, description: '孔孟之乡，礼仪之邦', capital: '济南', area: '15.71万km²', population: '1.02亿' },
  { name: '河南省', nameEn: 'Henan', value: 16, description: '中原腹地，华夏之源', capital: '郑州', area: '16.7万km²', population: '9883万' },
  { name: '湖北省', nameEn: 'Hubei', value: 17, description: '九省通衢，千湖之省', capital: '武汉', area: '18.59万km²', population: '5830万' },
  { name: '湖南省', nameEn: 'Hunan', value: 18, description: '芙蓉国里，潇湘大地', capital: '长沙', area: '21.18万km²', population: '6622万' },
  { name: '广东省', nameEn: 'Guangdong', value: 19, description: '改革开放前沿阵地', capital: '广州', area: '17.98万km²', population: '1.27亿' },
  { name: '广西壮族自治区', nameEn: 'Guangxi', value: 20, description: '八桂大地，山水甲天下', capital: '南宁', area: '23.76万km²', population: '5047万' },
  { name: '海南省', nameEn: 'Hainan', value: 21, description: '椰风海韵，国际旅游岛', capital: '海口', area: '3.54万km²', population: '1043万' },
  { name: '重庆市', nameEn: 'Chongqing', value: 22, description: '山城雾都，魔幻8D', capital: '重庆', area: '8.24万km²', population: '3191万' },
  { name: '四川省', nameEn: 'Sichuan', value: 23, description: '天府之国，大熊猫故乡', capital: '成都', area: '48.6万km²', population: '8367万' },
  { name: '贵州省', nameEn: 'Guizhou', value: 24, description: '多彩贵州，山地公园', capital: '贵阳', area: '17.62万km²', population: '3856万' },
  { name: '云南省', nameEn: 'Yunnan', value: 25, description: '彩云之南，七彩秘境', capital: '昆明', area: '39.4万km²', population: '4690万' },
  { name: '西藏自治区', nameEn: 'Tibet', value: 26, description: '世界屋脊，雪域高原', capital: '拉萨', area: '122.8万km²', population: '366万' },
  { name: '陕西省', nameEn: 'Shaanxi', value: 27, description: '三秦大地，千年古都', capital: '西安', area: '20.56万km²', population: '3956万' },
  { name: '甘肃省', nameEn: 'Gansu', value: 28, description: '丝路古道，大漠雄关', capital: '兰州', area: '42.58万km²', population: '2502万' },
  { name: '青海省', nameEn: 'Qinghai', value: 29, description: '江河源头，中华水塔', capital: '西宁', area: '72.23万km²', population: '593万' },
  { name: '宁夏回族自治区', nameEn: 'Ningxia', value: 30, description: '塞上江南，西部明珠', capital: '银川', area: '6.64万km²', population: '725万' },
  { name: '新疆维吾尔自治区', nameEn: 'Xinjiang', value: 31, description: '辽阔边疆，瓜果之乡', capital: '乌鲁木齐', area: '166.49万km²', population: '2589万' },
  { name: '台湾省', nameEn: 'Taiwan', value: 32, description: '宝岛台湾，祖国东南', capital: '台北', area: '3.6万km²', population: '2337万' },
  { name: '香港特别行政区', nameEn: 'Hong Kong', value: 33, description: '东方之珠，国际金融中心', capital: '香港', area: '1106km²', population: '747万' },
  { name: '澳门特别行政区', nameEn: 'Macau', value: 34, description: '濠江莲花，中西交融', capital: '澳门', area: '33km²', population: '68万' },
];

// Import local China map data
import chinaGeoJson from '@shared/static/china.json';

export function ChinaMap() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState<ProvinceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load echarts and register map
  useEffect(() => {
    let mounted = true;
    
    const initMap = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Import echarts
        const echarts = await import('echarts');
        
        if (!mounted) return;
        
        // Use local map data
        echarts.registerMap('china', chinaGeoJson as any);
        console.log('China map registered successfully');
        
        if (mounted) {
          setMapLoaded(true);
          setLoading(false);
        }
      } catch (err) {
        console.error('Map initialization failed:', err);
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Map initialization failed');
          setLoading(false);
        }
      }
    };

    initMap();
    
    return () => {
      mounted = false;
    };
  }, []);

  const getOption = useCallback((): EChartsOption => {
    return {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        padding: [16, 20],
        textStyle: {
          color: '#FFFFFF',
          fontSize: 14,
        },
        extraCssText: 'box-shadow: 0 20px 40px rgba(0,0,0,0.2); border-radius: 16px; backdrop-filter: blur(10px);',
        formatter: (params: any) => {
          const data = provinceData.find(p => p.name === params.name);
          if (data) {
            return `
              <div style="font-weight: 600; font-size: 18px; margin-bottom: 6px; color: #fff;">${data.nameEn}</div>
              <div style="color: rgba(255,255,255,0.7); font-size: 14px; margin-bottom: 8px;">${data.name}</div>
              <div style="color: rgba(255,255,255,0.5); font-size: 12px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 8px; margin-top: 8px;">${data.description}</div>
            `;
          }
          // Handle South China Sea Islands
          if (params.name === '南海诸岛') {
            return '<div style="font-weight: 600; font-size: 18px; color: #fff;">South China Sea Islands</div>';
          }
          return params.name;
        },
      },
      visualMap: {
        show: false,
        min: 0,
        max: 34,
        inRange: {
          color: ['#F1F5F9', '#E2E8F0', '#CBD5E1', '#94A3B8'],
        },
      },
      series: [
        {
          name: 'China Map',
          type: 'map',
          map: 'china',
          roam: true,
          zoom: 1.3,
          center: [104, 35],
          label: {
            show: true,
            fontSize: 11,
            color: '#475569',
            formatter: (params: any) => {
              const data = provinceData.find(p => p.name === params.name);
              if (data) return data.nameEn;
              // Handle South China Sea Islands
              if (params.name === '南海诸岛') return 'South China Sea Islands';
              return params.name;
            },
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 13,
              fontWeight: 'bold',
              color: '#FFFFFF',
              formatter: (params: any) => {
                const data = provinceData.find(p => p.name === params.name);
                if (data) return data.nameEn;
                // Handle South China Sea Islands
                if (params.name === '南海诸岛') return 'South China Sea Islands';
                return params.name;
              },
            },
            itemStyle: {
              areaColor: '#3B82F6',
              shadowColor: 'rgba(59, 130, 246, 0.5)',
              shadowBlur: 30,
              shadowOffsetX: 0,
              shadowOffsetY: 10,
            },
          },
          select: {
            label: {
              show: true,
              color: '#FFFFFF',
            },
            itemStyle: {
              areaColor: '#1D4ED8',
            },
          },
          itemStyle: {
            areaColor: '#F8FAFC',
            borderColor: '#FFFFFF',
            borderWidth: 1.5,
            shadowColor: 'rgba(0, 0, 0, 0.05)',
            shadowBlur: 4,
            shadowOffsetX: 0,
            shadowOffsetY: 2,
          },
          data: provinceData.map(p => ({ name: p.name, value: p.value })),
        },
      ],
    };
  }, []);

  const onChartClick = useCallback((params: any) => {
    const province = provinceData.find(p => p.name === params.name);
    if (province) {
      setSelectedProvince(province);
    }
  }, []);

  const onEvents = useMemo(() => ({
    click: onChartClick,
  }), [onChartClick]);

  const handleNavigateToFutures = () => {
    navigate('/futures');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[550px] md:h-[750px] bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.08)] border border-slate-100">
        <div className="flex flex-col items-center gap-5">
          <div className="w-12 h-12 border-3 border-slate-100 border-t-blue-600 rounded-full animate-spin" />
          <span className="text-slate-500 text-base font-medium">{t('map.loading')}</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[550px] md:h-[750px] bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.08)] border border-slate-100">
        <div className="text-center px-8">
          <div className="w-20 h-20 rounded-3xl bg-red-50 flex items-center justify-center mx-auto mb-5">
            <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h4 className="text-slate-900 font-semibold text-lg mb-3">{t('map.loadFailed')}</h4>
          <p className="text-slate-500 text-base mb-6 max-w-md">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 rounded-full bg-slate-900 text-white text-base font-medium hover:bg-slate-800 transition-all duration-300 hover:shadow-lg"
          >
            {t('map.refresh')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Main Map Container */}
      <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden">
        {/* Header Section */}
        <div className="px-6 md:px-10 lg:px-12 pt-6 md:pt-8 pb-4 md:pb-6 border-b border-slate-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif text-slate-900 mb-2">{t('map.divisions')}</h3>
              <p className="text-slate-500 text-base">{t('map.communitiesSubtitle')}</p>
            </div>
            
            {/* Interactive Hints */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full">
                <MousePointerClickIcon className="w-4 h-4" />
                {t('map.clickHint')}
              </span>
              <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full">
                <ZoomInIcon className="w-4 h-4" />
                {t('map.zoomHint')}
              </span>
            </div>
          </div>
        </div>
        
        {/* Map Area */}
        <div className="relative px-4 md:px-6 lg:px-8 pb-6 md:pb-8">
          {/* Legend */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-100 p-4">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{t('map.legend')}</span>
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 rounded-lg bg-slate-200 shadow-sm" />
                <span className="text-sm text-slate-600">{t('map.default')}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 rounded-lg bg-blue-500 shadow-sm shadow-blue-200" />
                <span className="text-sm text-slate-600">{t('map.selected')}</span>
              </div>
            </div>
          </div>
          
          {mapLoaded ? (
            <ReactECharts
              option={getOption()}
              theme="ud"
              className="h-[500px] md:h-[700px] lg:h-[750px] w-full"
              onEvents={onEvents}
              style={{ height: '750px' }}
            />
          ) : (
            <div className="flex items-center justify-center h-[500px] md:h-[750px] text-slate-400">
              {t('map.error')}
            </div>
          )}
        </div>
        
        {/* Footer Stats */}
        <div className="px-6 md:px-10 lg:px-12 py-4 md:py-5 bg-slate-50/50 border-t border-slate-100">
          <div className="flex items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-serif text-slate-900">34</div>
              <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wider">{t('map.provinces')}</div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-serif text-slate-900">960</div>
              <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wider">{t('map.area')}</div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-serif text-slate-900">1.4</div>
              <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wider">{t('map.population')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Province Detail Panel */}
      {selectedProvince && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProvince(null)}
          />
          <div className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl shadow-black/20 overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 px-8 md:px-10 py-8 text-white relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-10 w-24 h-24 bg-white/5 rounded-full translate-y-1/2" />
              
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <MapPinIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif">{selectedProvince.nameEn}</h3>
                </div>
                <button
                  onClick={() => setSelectedProvince(null)}
                  className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-105"
                >
                  <XIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Content */}
            {selectedProvince.nameEn === 'Fujian' && (
              <div className="p-8 md:p-10">
                <div className="text-center space-y-4">
                  <div className="text-slate-400 text-xs uppercase tracking-wider mb-2">Community Info</div>
                  <button 
                    onClick={handleNavigateToFutures}
                    className="text-blue-600 font-medium text-lg hover:underline cursor-pointer block mx-auto"
                  >
                    Futures（福雀来）
                  </button>
                  <div className="text-slate-900 font-medium text-lg">Xi Ling（熙岭）</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
