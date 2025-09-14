import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { BubbleChartSeries } from '../../../types/ApexChart/apexcharts.types';
import { useChartContext } from '../../context/ChartContext';

interface BubbleChartProps {
  data?: BubbleChartSeries[];
  options?: Partial<ApexOptions>;
  height?: number | string;
  width?: number | string;
}

const BubbleChart: React.FC<BubbleChartProps> = ({ data, options: customOptions, height = 400, width = '100%' }) => {
  // Try to use chart context, fall back to defaults if not available
  let contextOptions: ApexOptions = {};
  try {
    const { getChartOptions } = useChartContext();
    contextOptions = getChartOptions('bubble', {
      chart: { height, width },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 0.8,
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
        z: {
          formatter: function (val: number) {
            return val + ' items';
          },
          title: 'Size: ',
        },
      },
    });
  } catch {
    // Fallback to default options if context is not available
    contextOptions = {
      chart: {
        type: 'bubble' as const,
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
      fill: {
        opacity: 0.8,
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
        z: {
          formatter: function (val: number) {
            return val + ' items';
          },
          title: 'Size: ',
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
      },
    };
  }

  const defaultSeries: BubbleChartSeries[] = [
    {
      name: 'Product A',
      data: [
        { x: 20, y: 20, z: 10 },
        { x: 30, y: 25, z: 15 },
        { x: 40, y: 30, z: 20 },
        { x: 50, y: 35, z: 25 },
        { x: 60, y: 40, z: 30 },
      ],
    },
    {
      name: 'Product B',
      data: [
        { x: 25, y: 15, z: 12 },
        { x: 35, y: 20, z: 18 },
        { x: 45, y: 25, z: 22 },
        { x: 55, y: 30, z: 28 },
        { x: 65, y: 35, z: 32 },
      ],
    },
  ];

  const series = data || defaultSeries;
  const options = { ...contextOptions, ...customOptions };

  return (
    <div className="bubble-chart">
      <Chart options={options} series={series} type="bubble" height={height} width={width} />
    </div>
  );
};

export default BubbleChart;
