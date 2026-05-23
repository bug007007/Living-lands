export interface IProvinceData {
  name: string;
  value: number;
  adcode: string;
  cityCount?: number;
  population?: string;
  area?: string;
  description?: string;
}

export interface IMapClickEvent {
  name: string;
  data?: IProvinceData;
  componentType: string;
  seriesType: string;
  seriesIndex: number;
  dataIndex: number;
  event: Event;
}

export interface IMapOption {
  tooltip: {
    trigger: string;
    formatter: string | ((params: unknown) => string);
  };
  visualMap?: {
    min: number;
    max: number;
    left: string;
    bottom: string;
    text: string[];
    calculable: boolean;
    inRange: {
      color: string[];
    };
  };
  series: Array<{
    name: string;
    type: string;
    map: string;
    roam: boolean;
    zoom: number;
    label: {
      show: boolean;
      fontSize: number;
      color: string;
    };
    emphasis: {
      label: {
        show: boolean;
        color: string;
      };
      itemStyle: {
        areaColor: string;
        shadowBlur: number;
        shadowColor: string;
      };
    };
    itemStyle: {
      areaColor: string;
      borderColor: string;
      borderWidth: number;
    };
    select: {
      itemStyle: {
        areaColor: string;
      };
    };
    data?: IProvinceData[];
  }>;
}

export interface IStatsData {
  label: string;
  value: string | number;
  suffix?: string;
  description?: string;
}

export interface IFeatureItem {
  icon: string;
  title: string;
  description: string;
}
