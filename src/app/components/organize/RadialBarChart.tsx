import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { RadialBarChartData } from '../../../types/ApexChart/apexcharts.types';
import { useChartContext } from '../../context/ChartContext';

interface RadialBarChartProps {
  data?: RadialBarChartData[];
  options?: Partial<ApexOptions>;
  height?: number | string;
  width?: number | string;
  labels?: string[];
  colors?: string[];
  showDataLabels?: boolean;
  showLegend?: boolean;
  legendPosition?: 'top' | 'right' | 'bottom' | 'left';
  tooltipFormatter?: (val: number) => string;
  dataLabelFormatter?: (val: number) => string;
  hollowSize?: string;
  startAngle?: number;
  endAngle?: number;
}

const RadialBarChart: React.FC<RadialBarChartProps> = ({
  data,
  options: customOptions,
  height = 400,
  width = '100%',
  labels,
  colors,
  showDataLabels,
  showLegend,
  legendPosition,
  tooltipFormatter,
  dataLabelFormatter,
  hollowSize = '60%',
  startAngle = 0,
  endAngle = 360,
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
    const finalTooltipFormatter = tooltipFormatter || ((val: number) => val + '%');
    const finalDataLabelFormatter = dataLabelFormatter || ((val: number) => val + '%');

    contextOptions = getChartOptions('radialBar', {
      chart: { height, width },
      colors: finalColors,
      dataLabels: {
        enabled: finalShowDataLabels,
        formatter: finalDataLabelFormatter,
        style: {
          fontSize: '12px',
          colors: ['#fff'],
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: startAngle,
          endAngle: endAngle,
          hollow: {
            size: hollowSize,
            background: 'transparent',
          },
          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: '16px',
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: '14px',
              offsetY: 16,
            },
          },
        },
      },
      labels: labels || ['Team A', 'Team B', 'Team C', 'Team D'],
      legend: {
        show: finalShowLegend,
        position: finalLegendPosition,
        horizontalAlign: 'center',
      },
      tooltip: {
        y: {
          formatter: finalTooltipFormatter,
        },
      },
    });
  } catch {
    // Fallback to default options if context is not available
    contextOptions = {
      chart: {
        type: 'radialBar' as const,
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
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: true,
          },
        },
      },
      colors: colors || ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'],
      dataLabels: {
        enabled: showDataLabels !== undefined ? showDataLabels : true,
        formatter: dataLabelFormatter || ((val: number) => val + '%'),
        style: {
          fontSize: '12px',
          colors: ['#fff'],
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: startAngle,
          endAngle: endAngle,
          hollow: {
            size: hollowSize,
            background: 'transparent',
          },
          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: '16px',
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: '14px',
              offsetY: 16,
            },
          },
        },
      },
      labels: labels || ['Team A', 'Team B', 'Team C', 'Team D'],
      legend: {
        show: showLegend !== undefined ? showLegend : true,
        position: legendPosition || 'bottom',
        horizontalAlign: 'center',
      },
      tooltip: {
        y: {
          formatter: tooltipFormatter || ((val: number) => val + '%'),
        },
      },
    };
  }

  const defaultSeries: RadialBarChartData[] = [
    {
      data: [44, 55, 67, 83],
    },
  ];

  const series = data || defaultSeries;
  const options = { ...contextOptions, ...customOptions };

  // Extract data array from RadialBarChartData objects for ApexCharts
  const chartSeries = series.flatMap((item) => item.data);

  return (
    <div className="radial-bar-chart">
      <Chart options={options} series={chartSeries} type="radialBar" height={height} width={width} />
    </div>
  );
};

export default RadialBarChart;
