import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { LineChartSeries } from '../../../types/ApexChart/apexcharts.types';
import { useChartContext } from '../../context/ChartContext';

interface SimpleLineChartProps {
  data?: LineChartSeries[];
  xAxisTitle?: string;
  yAxisTitle?: string;
  options?: Partial<ApexOptions>;
  height?: number | string;
  width?: number | string;
  
}

const SimpleLineChart: React.FC<SimpleLineChartProps> = ({ 
  data, 
  xAxisTitle, 
  yAxisTitle, 
  options: customOptions, 
  height = 400, 
  width = '100%' 
}) => {
  // Try to use chart context, fall back to defaults if not available
  let contextOptions: ApexOptions = {};
  try {
    const { getChartOptions } = useChartContext();
    contextOptions = getChartOptions('line', {
      chart: { height, width },
      legend: { show: true },
      title: {  align: 'center' },
      xaxis: { type: 'datetime', title: { text: xAxisTitle || '' }, labels: { rotate: -45 } , position: 'bottom'},
      yaxis: [
        {
          title: { text: yAxisTitle || '' },
          // labels: { formatter: (val: number) => val.toFixed(2) },
        },
      ],
      stroke: { curve: 'smooth', width: 2 },
      // dataLabels: {
      //   enabled: false,
      //   enabledOnSeries: [0, 1],
      //   formatter: (val: number) => val + '%',
      // },
    });
  } catch {
    // Fallback to default options if context is not available
    contextOptions = {
      chart: {
        type: 'line',
        height: height,
        width: width,
        animations: { enabled: true, speed: 800 },
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
        enabled: true,
        enabledOnSeries: [0, 1],
        formatter: function (val: number) {
          return val + '%';
        },
        style: {
          fontSize: '12px',
          colors: ['#304758'],
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
            text: yAxisTitle,
          },
          labels: {
            formatter: function (val: number) {
              return val.toFixed(2);
            },
          },
        },
      ],
      tooltip: {
        shared: true,
        intersect: false,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
      },
      title: {
        text: xAxisTitle || '',
        align: 'center',
      },
    };
  }

  const defaultSeries: LineChartSeries[] = [
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
    <div className="simple-line-chart">
      <Chart options={options} series={series} type="line" height={height} width={width} />
    </div>
  );
};

export default SimpleLineChart;
