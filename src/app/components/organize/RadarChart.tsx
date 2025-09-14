import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { RadarChartSeries } from '../../../types/ApexChart/apexcharts.types';
import { useChartContext } from '../../context/ChartContext';

interface RadarChartProps {
  data?: RadarChartSeries[];
  options?: Partial<ApexOptions>;
  height?: number | string;
  width?: number | string;
  categories?: string[];
}

const RadarChart: React.FC<RadarChartProps> = ({ data, options: customOptions, height = 400, width = '100%', categories }) => {
  // Try to use chart context, fall back to defaults if not available
  let contextOptions: ApexOptions = {};
  try {
    const { getChartOptions } = useChartContext();
    contextOptions = getChartOptions('radar', {
      chart: { height, width },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '12px',
          colors: ['#304758'],
        },
      },
      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            strokeColors: '#e9e9e9',
            fill: {
              colors: ['#f8f8f8', '#fff'],
            },
          },
        },
      },
      xaxis: {
        categories: categories || ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      },
      yaxis: {
        show: false,
      },
    });
  } catch {
    // Fallback to default options if context is not available
    contextOptions = {
      chart: {
        type: 'radar' as const,
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
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560'],
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '12px',
          colors: ['#304758'],
        },
      },
      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            strokeColors: '#e9e9e9',
            fill: {
              colors: ['#f8f8f8', '#fff'],
            },
          },
        },
      },
      xaxis: {
        categories: categories || ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      },
      yaxis: {
        show: false,
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
      },
    };
  }

  const defaultSeries: RadarChartSeries[] = [
    {
      name: 'Series 1',
      data: [20, 100, 40, 30, 50, 80, 33],
    },
    {
      name: 'Series 2',
      data: [20, 30, 40, 80, 50, 30, 40],
    },
  ];

  const series = data || defaultSeries;
  const options = { ...contextOptions, ...customOptions };

  return (
    <div className="radar-chart">
      <Chart options={options} series={series} type="radar" height={height} width={width} />
    </div>
  );
};

export default RadarChart;
