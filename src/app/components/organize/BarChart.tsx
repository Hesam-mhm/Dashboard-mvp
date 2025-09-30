import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { BarChartSeries } from '../../../types/ApexChart/apexcharts.types';
import { useChartContext } from '../../context/ChartContext';

interface BarChartProps {
  data?: BarChartSeries[];
  options?: Partial<ApexOptions>;
  height?: number | string;
  width?: number | string;
  horizontal?: boolean;
  colors?: string[];
  showDataLabels?: boolean;
  showLegend?: boolean;
  legendPosition?: 'top' | 'right' | 'bottom' | 'left';
  categories?: string[];
  xAxisTitle?: string;
  yAxisTitle?: string;
  columnWidth?: string;
  borderRadius?: number;
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  options: customOptions,

  horizontal = false,
  colors,
  showDataLabels,
  showLegend,
  legendPosition,
  categories,
  xAxisTitle,
  yAxisTitle = 'Value',
  columnWidth = '20%',
  borderRadius = 4,
  height = 400,
  width = '100%',
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

    contextOptions = getChartOptions('bar', {
      chart: { height, width },
      colors: finalColors,
      dataLabels: {
        enabled: finalShowDataLabels,
      },
      plotOptions: {
        bar: {
          horizontal: horizontal,
          columnWidth: columnWidth,
          borderRadius: borderRadius,
          dataLabels: {
            position: 'top',
          },
        },
      },
      xaxis: {
        type: 'category',
        categories: categories || ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        title: xAxisTitle ? { text: xAxisTitle } : undefined,
      },
      yaxis: [
        {
          title: {
            text: yAxisTitle,
          },
        },
      ],
      legend: {
        show: finalShowLegend,
        position: finalLegendPosition,
        horizontalAlign: 'right',
      },
    });
  } catch (error) {
    // Fallback to default options if context is not available
    contextOptions = {
      chart: {
        type: 'bar' as const,
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
      colors: colors || ['#008FFB', '#00E396', '#FEB019', '#FF4560'],
      dataLabels: {
        enabled: showDataLabels !== undefined ? showDataLabels : true,
        style: {
          fontSize: '12px',
          colors: ['#304758'],
        },
      },
      plotOptions: {
        bar: {
          horizontal: horizontal,
          columnWidth: columnWidth,
          borderRadius: borderRadius,
          dataLabels: {
            position: 'top',
          },
        },
      },
      xaxis: {
        type: 'category',
        categories: categories || ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        title: xAxisTitle ? { text: xAxisTitle } : undefined,
      },
      yaxis: [
        {
          title: {
            text: yAxisTitle,
          },
        },
      ],
      tooltip: {
        shared: true,
        intersect: false,
      },
      legend: {
        show: showLegend !== undefined ? showLegend : true,
        position: legendPosition || 'top',
        horizontalAlign: 'right',
      },
    };
  }

  const defaultSeries: BarChartSeries[] = [
    {
      name: 'Sales',
      data: [30, 45, 35, 60, 50, 40],
    },
    {
      name: 'Revenue',
      data: [20, 30, 40, 55, 45, 35],
    },
  ];

  const series = data || defaultSeries;
  const options = { ...contextOptions, ...customOptions };

  return (
    <div className="bar-chart" >
      <Chart options={options} series={series} type="bar" height={height} width={width} />
    </div>
  );
};

export default BarChart;
