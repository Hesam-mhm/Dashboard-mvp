// apexcharts.types.ts
// Comprehensive TypeScript types for all ApexCharts chart types and configurations
// Compatible with @types/apexcharts, fixes plotOptions.line.colors type mismatch
// For use in React projects and backend data validation

import { ApexOptions } from 'apexcharts';

// Data Point for series (line, area, bar, scatter, bubble)
interface SeriesDataPoint {
  x: number | string; // Datetime (timestamp), category (string), or numeric
  y: number | null; // Y-value, nullable for missing data
  fillColor?: string; // Custom fill color for specific data points
  strokeColor?: string; // Custom stroke color
}

// Bubble chart data point (requires x, y, z for size)
interface BubbleDataPoint {
  x: number | string;
  y: number | null;
  z: number; // Size of the bubble
}

// Series for charts with single-value data points (line, area, bar, scatter)
interface NumericSeries {
  name: string;
  data: Array<number | SeriesDataPoint | null>;
}

// Series for bubble charts
interface BubbleSeries {
  name: string;
  data: BubbleDataPoint[];
}

// Series for pie/donut/radialBar charts
interface PieSeries {
  name?: string; // Optional for pie/donut
  data: number[];
}

// Series for candlestick charts
interface CandlestickDataPoint {
  x: number | string;
  y: [number, number, number, number]; // [open, high, low, close]
}

interface CandlestickSeries {
  name: string;
  data: CandlestickDataPoint[];
}

// Series for heatmap charts
interface HeatmapDataPoint {
  x: string;
  y: number;
}

interface HeatmapSeries {
  name: string;
  data: HeatmapDataPoint[];
}

// Series for radar charts
interface RadarSeries {
  name: string;
  data: number[];
}

// Union type for all possible series formats
type SeriesArray = Array<NumericSeries | PieSeries | CandlestickSeries | HeatmapSeries | BubbleSeries | RadarSeries>;

// Comprehensive options interface for all chart types
interface CustomApexOptions extends Omit<ApexOptions, 'tooltip' | 'yaxis'> {
  chart: {
    type: 'line' | 'area' | 'bar' | 'pie' | 'donut' | 'radialBar' | 'scatter' | 'bubble' | 'heatmap' | 'candlestick' | 'radar';
    height?: number | string;
    width?: number | string;
    animations?: {
      enabled?: boolean;
      easing?: 'linear' | 'easein' | 'easeout' | 'easeinout';
      speed?: number;
      animateGradually?: {
        enabled?: boolean;
        delay?: number;
      };
      dynamicAnimation?: {
        enabled?: boolean;
        speed?: number;
      };
    };
    background?: string;
    fontFamily?: string;
    foreColor?: string;
    toolbar?: {
      show?: boolean;
      offsetX?: number;
      offsetY?: number;
      tools?: {
        download?: boolean;
        selection?: boolean;
        zoom?: boolean;
        zoomin?: boolean;
        zoomout?: boolean;
        pan?: boolean;
        reset?: boolean;
      };
      export?: {
        csv?: {
          filename?: string;
          columnDelimiter?: string;
          headerCategory?: string;
          headerValue?: string;
        };
        svg?: { filename?: string };
        png?: { filename?: string };
      };
      autoSelected?: 'zoom' | 'selection' | 'pan';
    };
    zoom?: {
      enabled?: boolean;
      type?: 'x' | 'y' | 'xy';
      autoScaleYaxis?: boolean;
      zoomedArea?: {
        fill?: { color?: string; opacity?: number };
        stroke?: { color?: string; opacity?: number; width?: number };
      };
    };
    dropShadow?: {
      enabled?: boolean;
      top?: number;
      left?: number;
      blur?: number;
      opacity?: number;
      color?: string;
    };
    events?: {
      click?: (event: any, chartContext: any, config: any) => void;
      dataPointSelection?: (event: any, chartContext: any, config: any) => void;
      zoomed?: (chartContext: any, { xaxis, yaxis }: any) => void;
    };
  };
  colors?: string[];
  dataLabels?: {
    enabled?: boolean;
    enabledOnSeries?: number[];
    formatter?: (val: number | string, opts: any) => string | number;
    textAnchor?: 'start' | 'middle' | 'end';
    offsetX?: number;
    offsetY?: number;
    style?: {
      fontSize?: string;
      fontFamily?: string;
      fontWeight?: string | number;
      colors?: string[];
    };
    background?: {
      enabled?: boolean;
      foreColor?: string;
      borderRadius?: number;
      padding?: number;
      opacity?: number;
      borderWidth?: number;
      borderColor?: string;
    };
    dropShadow?: {
      enabled?: boolean;
      top?: number;
      left?: number;
      blur?: number;
      opacity?: number;
    };
  };
  fill?: {
    type?: 'solid' | 'gradient' | 'pattern' | 'image';
    opacity?: number | number[];
    gradient?: {
      shade?: 'light' | 'dark';
      type?: 'horizontal' | 'vertical' | 'diagonal1' | 'diagonal2';
      shadeIntensity?: number;
      gradientToColors?: string[];
      inverseColors?: boolean;
      opacityFrom?: number;
      opacityTo?: number;
      stops?: number[];
    };
    pattern?: {
      style?: 'verticalLines' | 'horizontalLines' | 'slantedLines' | 'squares' | 'circles';
      width?: number;
      height?: number;
      strokeWidth?: number;
    };
    image?: {
      src?: string | string[];
      width?: number;
      height?: number;
    };
  };
  grid?: {
    show?: boolean;
    borderColor?: string;
    strokeDashArray?: number;
    position?: 'front' | 'back';
    xaxis?: { lines?: { show?: boolean } };
    yaxis?: { lines?: { show?: boolean } };
    row?: { colors?: string[]; opacity?: number };
    column?: { colors?: string[]; opacity?: number };
    padding?: { top?: number; right?: number; bottom?: number; left?: number };
  };
  legend?: {
    show?: boolean;
    position?: 'top' | 'right' | 'bottom' | 'left';
    horizontalAlign?: 'left' | 'center' | 'right';
    floating?: boolean;
    fontSize?: string;
    fontFamily?: string;
    fontWeight?: number | string;
    inverseOrder?: boolean;
    maxHeight?: number;
    offsetX?: number;
    offsetY?: number;
    labels?: { useSeriesColors?: boolean; colors?: string[] };
    markers?: {
      width?: number;
      height?: number;
      radius?: number;
      offsetX?: number;
      offsetY?: number;
    };
    itemMargin?: { horizontal?: number; vertical?: number };
    onItemClick?: { toggleDataSeries?: boolean };
    onItemHover?: { highlightDataSeries?: boolean };
  };
  markers?: {
    size?: number | number[];
    colors?: string[];
    opacity?: number | number[];
    discrete?: Array<{
      seriesIndex?: number;
      dataPointIndex?: number;
      fillColor?: string;
      strokeColor?: string;
      size?: number;
    }>;
    strokeColors?: string | string[];
    strokeWidth?: number | number[];
    strokeOpacity?: number | number[];
    shape?: 'circle' | 'square' | 'rect';
    radius?: number;
    offsetX?: number;
    offsetY?: number;
    hover?: { size?: number; sizeOffset?: number };
  };
  plotOptions?: {
    bar?: {
      horizontal?: boolean;
      columnWidth?: string | number;
      barHeight?: string | number;
      distributed?: boolean;
      borderRadius?: number;
      dataLabels?: {
        position?: 'top' | 'center' | 'bottom';
        maxItems?: number;
        hideOverflowingLabels?: boolean;
      };
    };
    line?: {
      curve?: 'straight' | 'smooth' | 'stepline';
      colors?: {
        threshold?: number;
        colorAboveThreshold?: string;
        colorBelowThreshold?: string;
      };
    };
    area?: {
      fillTo?: 'origin' | 'end';
    };
    pie?: {
      startAngle?: number;
      endAngle?: number;
      offsetX?: number;
      offsetY?: number;
      customScale?: number;
      dataLabels?: { offset?: number; minAngleToShowLabel?: number };
    };
    donut?: {
      size?: string;
      background?: string;
      labels?: {
        show?: boolean;
        name?: { show?: boolean; fontSize?: string; offsetY?: number };
        value?: { show?: boolean; fontSize?: string; offsetY?: number };
        total?: {
          show?: boolean;
          label?: string;
          formatter?: (w: any) => string;
        };
      };
    };
    radialBar?: {
      startAngle?: number;
      endAngle?: number;
      hollow?: {
        size?: string;
        background?: string;
        image?: string;
        imageWidth?: number;
        imageHeight?: number;
      };
      dataLabels?: {
        show?: boolean;
        name?: { show?: boolean; fontSize?: string; offsetY?: number };
        value?: { show?: boolean; fontSize?: string; offsetY?: number };
      };
    };
    heatmap?: {
      shadeIntensity?: number;
      radius?: number;
      useFillColorAsStroke?: boolean;
      colorScale?: {
        ranges?: Array<{
          from?: number;
          to?: number;
          color?: string;
          name?: string;
        }>;
      };
    };
    candlestick?: {
      colors?: {
        upward?: string;
        downward?: string;
      };
      wick?: {
        useFillColor?: boolean;
      };
    };
    radar?: {
      size?: number;
      offsetX?: number;
      offsetY?: number;
      polygons?: {
        strokeColors?: string | string[];
        fill?: { colors?: string[] };
      };
    };
  };
  responsive?: Array<{
    breakpoint?: number;
    options?: Partial<CustomApexOptions>;
  }>;
  stroke?: {
    show?: boolean;
    curve?: 'straight' | 'smooth' | 'stepline' | 'monotoneCubic';
    colors?: string[];
    width?: number | number[];
    lineCap?: 'butt' | 'square' | 'round';
    dashArray?: number | number[];
  };
  title?: {
    text?: string;
    align?: 'left' | 'center' | 'right';
    margin?: number;
    offsetX?: number;
    offsetY?: number;
    floating?: boolean;
    style?: {
      fontSize?: string;
      fontWeight?: string | number;
      fontFamily?: string;
      color?: string;
    };
  };
  subtitle?: {
    text?: string;
    align?: 'left' | 'center' | 'right';
    margin?: number;
    offsetX?: number;
    offsetY?: number;
    floating?: boolean;
    style?: {
      fontSize?: string;
      fontWeight?: string | number;
      fontFamily?: string;
      color?: string;
    };
  };
  tooltip?: ApexOptions['tooltip'];
  xaxis?: {
    type?: 'category' | 'datetime' | 'numeric';
    categories?: Array<string | number>;
    axisBorder?: {
      show?: boolean;
      color?: string;
      height?: number;
      width?: string | number;
      offsetX?: number;
      offsetY?: number;
    };
    axisTicks?: {
      show?: boolean;
      borderType?: 'solid' | 'dotted';
      color?: string;
      height?: number;
      offsetX?: number;
      offsetY?: number;
    };
    labels?: {
      show?: boolean;
      rotate?: number;
      rotateAlways?: boolean;
      hideOverlappingLabels?: boolean;
      showDuplicates?: boolean;
      trim?: boolean;
      minHeight?: number;
      maxHeight?: number;
      style?: {
        colors?: string[];
        fontSize?: string;
        fontFamily?: string;
        fontWeight?: number | string;
        cssClass?: string;
      };
      offsetX?: number;
      offsetY?: number;
      datetimeUTC?: boolean;
      datetimeFormatter?: {
        year?: string;
        month?: string;
        day?: string;
        hour?: string;
        minute?: string;
        second?: string;
      };
    };
    crosshairs?: {
      show?: boolean;
      position?: 'front' | 'back';
      stroke?: { color?: string; width?: number; dashArray?: number };
      fill?: { type?: string; color?: string; gradient?: any };
      opacity?: number;
    };
    tooltip?: {
      enabled?: boolean;
      formatter?: (val: number | string, opts: any) => string;
      offsetY?: number;
    };
  };
  yaxis?: ApexOptions['yaxis'];
  annotations?: {
    xaxis?: Array<{
      x?: number | string;
      x2?: number | string;
      strokeDashArray?: number;
      borderColor?: string;
      fillColor?: string;
      opacity?: number;
      offsetX?: number;
      offsetY?: number;
      label?: {
        text?: string;
        borderColor?: string;
        style?: { color?: string; background?: string; fontSize?: string };
      };
    }>;
    yaxis?: Array<{
      y?: number;
      y2?: number;
      strokeDashArray?: number;
      borderColor?: string;
      fillColor?: string;
      opacity?: number;
      offsetX?: number;
      offsetY?: number;
      label?: {
        text?: string;
        borderColor?: string;
        style?: { color?: string; background?: string; fontSize?: string };
      };
    }>;
    points?: Array<{
      x?: number | string;
      y?: number;
      marker?: {
        size?: number;
        fillColor?: string;
        strokeColor?: string;
        radius?: number;
      };
      label?: {
        text?: string;
        borderColor?: string;
        style?: { color?: string; background?: string; fontSize?: string };
      };
    }>;
  };
  labels?: string[]; // For pie/donut/radialBar
  states?: {
    normal?: { filter?: { type?: 'none' | 'lighten' | 'darken'; value?: number } };
    hover?: { filter?: { type?: 'none' | 'lighten' | 'darken'; value?: number } };
    active?: { filter?: { type?: 'none' | 'lighten' | 'darken'; value?: number } };
  };
}

// Strict data types for different chart types
export interface LineChartDataPoint {
  x: number | string | Date;
  y: number | null;
  fillColor?: string;
  strokeColor?: string;
}

export interface LineChartSeries {
  name: string;
  data: LineChartDataPoint[];
}

export interface AreaChartSeries {
  name: string;
  data: LineChartDataPoint[];
}

export interface BarChartSeries {
  name: string;
  data: number[];
}

export interface PieChartData {
  data: number[];
}

export interface DonutChartData {
  data: number[];
}

export interface RadialBarChartData {
  data: number[];
}

export interface ScatterChartDataPoint {
  x: number;
  y: number;
}

export interface ScatterChartSeries {
  name: string;
  data: ScatterChartDataPoint[];
}

export interface BubbleChartDataPoint {
  x: number;
  y: number;
  z: number;
}

export interface BubbleChartSeries {
  name: string;
  data: BubbleChartDataPoint[];
}

export interface HeatmapChartDataPoint {
  x: string;
  y: number;
}

export interface HeatmapChartSeries {
  name: string;
  data: HeatmapChartDataPoint[];
}

export interface CandlestickChartDataPoint {
  x: number | string | Date;
  y: [number, number, number, number]; // [open, high, low, close]
}

export interface CandlestickChartSeries {
  name: string;
  data: CandlestickChartDataPoint[];
}

export interface RadarChartSeries {
  name: string;
  data: number[];
}

// Union types for chart data
export type ChartData =
  | LineChartSeries[]
  | AreaChartSeries[]
  | BarChartSeries[]
  | PieChartData[]
  | DonutChartData[]
  | RadialBarChartData[]
  | ScatterChartSeries[]
  | BubbleChartSeries[]
  | HeatmapChartSeries[]
  | CandlestickChartSeries[]
  | RadarChartSeries[];

// Export types for use in components and backend validation
export type {
  SeriesDataPoint,
  BubbleDataPoint,
  NumericSeries,
  PieSeries,
  CandlestickSeries,
  HeatmapSeries,
  BubbleSeries,
  RadarSeries,
  SeriesArray,
  CustomApexOptions,
};
