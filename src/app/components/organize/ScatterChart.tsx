import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { ScatterChartSeries } from '../../../types/ApexChart/apexcharts.types';
import { useChartContext } from '../../context/ChartContext';

interface ScatterChartProps {
  data?: ScatterChartSeries[];
  options?: Partial<ApexOptions>;
  height?: number | string;
  width?: number | string;
}

const ScatterChart: React.FC<ScatterChartProps> = ({ data, options: customOptions, height = 400, width = '100%' }) => {
  // Try to use chart context, fall back to defaults if not available
  let contextOptions: ApexOptions = {};
  try {
    const { getChartOptions } = useChartContext();
    contextOptions = getChartOptions('scatter', {
      chart: { height, width },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 6,
        colors: undefined,
        strokeColors: '#fff',
        strokeWidth: 2,
        hover: {
          size: 8,
          sizeOffset: 2,
        },
      },
      xaxis: {
        type: 'numeric',
        title: {
          text: 'X Axis',
        },
      },
      yaxis: {
        title: {
          text: 'Y Axis',
        },
      },
    });
  } catch {
    // Fallback to default options if context is not available
    contextOptions = {
      chart: {
        type: 'scatter' as const,
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
        enabled: false,
      },
      markers: {
        size: 6,
        colors: undefined,
        strokeColors: '#fff',
        strokeWidth: 2,
        hover: {
          size: 8,
          sizeOffset: 2,
        },
      },
      xaxis: {
        type: 'numeric',
        title: {
          text: 'X Axis',
        },
      },
      yaxis: {
        title: {
          text: 'Y Axis',
        },
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

  const defaultSeries: ScatterChartSeries[] = [
    {
      name: 'Series 1',
      data: [
        { x: 16.4, y: 5.4 },
        { x: 21.7, y: 2 },
        { x: 25.4, y: 3 },
        { x: 19, y: 2 },
        { x: 10.9, y: 1 },
        { x: 13.6, y: 3.2 },
        { x: 10.9, y: 7.4 },
        { x: 10.9, y: 0 },
        { x: 10.9, y: 4.2 },
        { x: 10.9, y: 1 },
      ],
    },
    {
      name: 'Series 2',
      data: [
        { x: 36.4, y: 13.4 },
        { x: 1.7, y: 11 },
        { x: 5.4, y: 8 },
        { x: 9, y: 17 },
        { x: 1.9, y: 4 },
        { x: 3.6, y: 12.2 },
        { x: 1.9, y: 14.4 },
        { x: 1.9, y: 9 },
        { x: 1.9, y: 13.2 },
        { x: 1.9, y: 10 },
      ],
    },
  ];

  const series = data || defaultSeries;
  const options = { ...contextOptions, ...customOptions };

  return (
    <div className="scatter-chart">
      <Chart options={options} series={series} type="scatter" height={height} width={width} />
    </div>
  );
};

export default ScatterChart;
