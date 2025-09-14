import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { AreaChartSeries } from '../../../types/ApexChart/apexcharts.types';
import { useChartContext } from '../../context/ChartContext';

interface AreaChartProps {
  data?: AreaChartSeries[];
  xAxisTitle?: string;
  yAxisTitle?: string;
  options?: Partial<ApexOptions>;
  height?: number | string;
  width?: number | string;
  colors?: string[];
  showDataLabels?: boolean;
  showLegend?: boolean;
  legendPosition?: 'top' | 'right' | 'bottom' | 'left';
}

const AreaChart: React.FC<AreaChartProps> = ({
  data,
  xAxisTitle,
  yAxisTitle,
  options: customOptions,
  height = 400,
  width = '100%',
  colors,
  showDataLabels,
  showLegend,
  legendPosition,
}) => {
  // Try to use chart context, fall back to defaults if not available
  let contextOptions: ApexOptions = {};
  try {
    const { getChartOptions, theme, settings } = useChartContext();

    // Use context defaults or provided props
    const finalColors = colors || theme.colors;
    const finalShowDataLabels = showDataLabels !== undefined ? showDataLabels : settings.dataLabels.enabled;
    const finalShowLegend = showLegend !== undefined ? showLegend : settings.legend.show;
    const finalLegendPosition = legendPosition || settings.legend.position;

    contextOptions = getChartOptions('area', {
      chart: { height, width },
      colors: finalColors,
      dataLabels: {
        enabled: finalShowDataLabels,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.5,
          gradientToColors: ['#00E396'],
          inverseColors: false,
          opacityFrom: 0.8,
          opacityTo: 0.1,
          stops: [0, 100],
        },
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      xaxis: {
        type: 'datetime',
        labels: {
          rotate: -45,
        },
      },
      yaxis: [
        {
          title: {
            text: yAxisTitle || 'Value',
          },
        },
      ],
      legend: {
        show: finalShowLegend,
        position: finalLegendPosition,
        horizontalAlign: 'right',
      },
    });
  } catch {
    // Fallback to default options if context is not available
    contextOptions = {
      chart: {
        type: 'area' as const,
        height: height,
        width: width,
        animations: {
          enabled: true,
          speed: 800,
        },
        toolbar: {
          show: true,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true,
          },
        },
      },
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560'],
      dataLabels: {
        enabled: showDataLabels !== undefined ? showDataLabels : true,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.5,
          gradientToColors: ['#00E396'],
          inverseColors: false,
          opacityFrom: 0.8,
          opacityTo: 0.1,
          stops: [0, 100],
        },
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      xaxis: {
        type: 'datetime',
        labels: {
          rotate: -45,
        },
      },
      yaxis: [
        {
          title: {
            text: yAxisTitle || 'Value',
          },
        },
      ],
      tooltip: {
        shared: true,
        intersect: false,
      },
      legend: {
        position: legendPosition || 'top',
        horizontalAlign: 'right',
      },
    };
  }

  const defaultSeries: AreaChartSeries[] = [
    {
      name: 'Sales',
      data: [
        { x: new Date('2025-01-01').getTime(), y: 30 },
        { x: new Date('2025-02-01').getTime(), y: 45 },
        { x: new Date('2025-03-01').getTime(), y: 35 },
        { x: new Date('2025-04-01').getTime(), y: 60 },
        { x: new Date('2025-05-01').getTime(), y: 50 },
      ],
    },
    {
      name: 'Revenue',
      data: [
        { x: new Date('2025-01-01').getTime(), y: 20 },
        { x: new Date('2025-02-01').getTime(), y: 30 },
        { x: new Date('2025-03-01').getTime(), y: 40 },
        { x: new Date('2025-04-01').getTime(), y: 55 },
        { x: new Date('2025-05-01').getTime(), y: 45 },
      ],
    },
  ];

  const series = data || defaultSeries;
  const options = { ...contextOptions, ...customOptions };

  return (
    <div className="area-chart" style={{ minHeight: '400px', minWidth: '100%' }}>
      <Chart options={options} series={series} type="area" height={height} width={width} />
    </div>
  );
};

export default AreaChart;
