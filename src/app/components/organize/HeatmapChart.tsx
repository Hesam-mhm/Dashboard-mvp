import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { HeatmapChartSeries } from '../../../types/ApexChart/apexcharts.types';
import { useChartContext } from '../../context/ChartContext';

interface HeatmapChartProps {
  data?: HeatmapChartSeries[];
  options?: Partial<ApexOptions>;
  height?: number | string;
  width?: number | string;
}

const HeatmapChart: React.FC<HeatmapChartProps> = ({ data, options: customOptions, height = 400, width = '100%' }) => {
  // Try to use chart context, fall back to defaults if not available
  let contextOptions: ApexOptions = {};
  try {
    const { getChartOptions } = useChartContext();
    contextOptions = getChartOptions('heatmap', {
      chart: { height, width },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '12px',
          colors: ['#fff'],
        },
      },
      colors: ['#008FFB'],
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          radius: 0,
          useFillColorAsStroke: true,
          colorScale: {
            ranges: [
              {
                from: -30,
                to: 5,
                color: '#FF4560',
                name: 'Low',
              },
              {
                from: 6,
                to: 20,
                color: '#FEB019',
                name: 'Medium',
              },
              {
                from: 21,
                to: 45,
                color: '#00E396',
                name: 'High',
              },
            ],
          },
        },
      },
      xaxis: {
        type: 'category',
        categories: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      },
      yaxis: {
        labels: {
          formatter: function (val: number) {
            const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
            return categories[val] || val.toString();
          },
        },
      },
      tooltip: {
        y: {
          formatter: function (val: number) {
            return val + ' items';
          },
        },
      },
    });
  } catch {
    // Fallback to default options if context is not available
    contextOptions = {
      chart: {
        type: 'heatmap' as const,
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
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '12px',
          colors: ['#fff'],
        },
      },
      colors: ['#008FFB'],
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          radius: 0,
          useFillColorAsStroke: true,
          colorScale: {
            ranges: [
              {
                from: -30,
                to: 5,
                color: '#FF4560',
                name: 'Low',
              },
              {
                from: 6,
                to: 20,
                color: '#FEB019',
                name: 'Medium',
              },
              {
                from: 21,
                to: 45,
                color: '#00E396',
                name: 'High',
              },
            ],
          },
        },
      },
      xaxis: {
        type: 'category',
        categories: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      },
      yaxis: {
        labels: {
          formatter: function (val: number) {
            const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
            return categories[val] || val.toString();
          },
        },
      },
      tooltip: {
        y: {
          formatter: function (val: number) {
            return val + ' items';
          },
        },
      },
    };
  }

  const defaultSeries: HeatmapChartSeries[] = [
    {
      name: 'Metric1',
      data: [
        { x: 'W1', y: 22 },
        { x: 'W2', y: 29 },
        { x: 'W3', y: 13 },
        { x: 'W4', y: 32 },
        { x: 'W5', y: 23 },
        { x: 'W6', y: 13 },
        { x: 'W7', y: 21 },
        { x: 'W8', y: 44 },
        { x: 'W9', y: 38 },
        { x: 'W10', y: 25 },
      ],
    },
    {
      name: 'Metric2',
      data: [
        { x: 'W1', y: 43 },
        { x: 'W2', y: 43 },
        { x: 'W3', y: 22 },
        { x: 'W4', y: 17 },
        { x: 'W5', y: 23 },
        { x: 'W6', y: 35 },
        { x: 'W7', y: 11 },
        { x: 'W8', y: 22 },
        { x: 'W9', y: 37 },
        { x: 'W10', y: 21 },
      ],
    },
  ];

  const series = data || defaultSeries;
  const options = { ...contextOptions, ...customOptions };

  return (
    <div className="heatmap-chart">
      <Chart options={options} series={series} type="heatmap" height={height} width={width} />
    </div>
  );
};

export default HeatmapChart;
