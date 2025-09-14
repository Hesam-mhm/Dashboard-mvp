// Chart Components Export
export { default as CustomizedLineChart } from './CustomizedLineChart.tsx';
export { default as SimpleLineChart } from './SimpleLineChart';
export { default as LineChart } from './SimpleLineChart'; // Alias for consistency
export { default as AreaChart } from './AreaChart';
export { default as BarChart } from './BarChart';
export { default as PieChart } from './PieChart';
export { default as DonutChart } from './DonutChart';
export { default as RadialBarChart } from './RadialBarChart';
export { default as ScatterChart } from './ScatterChart';
export { default as BubbleChart } from './BubbleChart';
export { default as HeatmapChart } from './HeatmapChart';
export { default as CandlestickChart } from './CandlestickChart';
export { default as RadarChart } from './RadarChart';

// Re-export ApexCharts types for convenience
export type { ApexOptions } from 'apexcharts';

// Re-export strict chart data types
export type {
  LineChartDataPoint,
  LineChartSeries,
  AreaChartSeries,
  BarChartSeries,
  PieChartData,
  DonutChartData,
  RadialBarChartData,
  ScatterChartDataPoint,
  ScatterChartSeries,
  BubbleChartDataPoint,
  BubbleChartSeries,
  HeatmapChartDataPoint,
  HeatmapChartSeries,
  CandlestickChartDataPoint,
  CandlestickChartSeries,
  RadarChartSeries,
  ChartData,
} from '../../../types/ApexChart/apexcharts.types';
