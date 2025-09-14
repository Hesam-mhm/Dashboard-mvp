import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { CandlestickChartSeries } from '../../../types/ApexChart/apexcharts.types';
import { useChartContext } from '../../context/ChartContext';

interface CandlestickChartProps {
  data?: CandlestickChartSeries[];
  options?: Partial<ApexOptions>;
  height?: number | string;
  width?: number | string;
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ data, options: customOptions, height = 400, width = '100%' }) => {
  // Try to use chart context, fall back to defaults if not available
  let contextOptions: ApexOptions = {};
  try {
    const { getChartOptions } = useChartContext();
    contextOptions = getChartOptions('candlestick', {
      chart: { height, width },
      colors: ['#008FFB', '#00E396'],
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#00E396',
            downward: '#FF4560',
          },
          wick: {
            useFillColor: true,
          },
        },
      },
      xaxis: {
        type: 'datetime',
        labels: {
          rotate: -45,
        },
      },
      yaxis: {
        title: {
          text: 'Price',
        },
        tooltip: {
          enabled: true,
        },
      },
    });
  } catch {
    // Fallback to default options if context is not available
    contextOptions = {
      chart: {
        type: 'candlestick' as const,
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
      colors: ['#008FFB', '#00E396'],
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#00E396',
            downward: '#FF4560',
          },
          wick: {
            useFillColor: true,
          },
        },
      },
      xaxis: {
        type: 'datetime',
        labels: {
          rotate: -45,
        },
      },
      yaxis: {
        title: {
          text: 'Price',
        },
        tooltip: {
          enabled: true,
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

  const defaultSeries: CandlestickChartSeries[] = [
    {
      name: 'Candle',
      data: [
        { x: new Date('2025-01-01').getTime(), y: [6629.81, 6650.5, 6623.04, 6633.33] },
        { x: new Date('2025-01-02').getTime(), y: [6632.01, 6643.59, 6620, 6630.11] },
        { x: new Date('2025-01-03').getTime(), y: [6630.71, 6648.95, 6623.34, 6635.65] },
        { x: new Date('2025-01-04').getTime(), y: [6635.65, 6651, 6629.67, 6638.24] },
        { x: new Date('2025-01-05').getTime(), y: [6638.24, 6640, 6620, 6624.47] },
        { x: new Date('2025-01-06').getTime(), y: [6624.53, 6636.03, 6621.68, 6624.31] },
        { x: new Date('2025-01-07').getTime(), y: [6624.61, 6632.2, 6617, 6626.02] },
        { x: new Date('2025-01-08').getTime(), y: [6627, 6627.62, 6584.22, 6603.02] },
        { x: new Date('2025-01-09').getTime(), y: [6603, 6608.03, 6598.95, 6604.01] },
        { x: new Date('2025-01-10').getTime(), y: [6604.5, 6614.4, 6602.26, 6608.02] },
      ],
    },
  ];

  const series = data || defaultSeries;
  const options = { ...contextOptions, ...customOptions };

  return (
    <div className="candlestick-chart">
      <Chart options={options} series={series} type="candlestick" height={height} width={width} />
    </div>
  );
};

export default CandlestickChart;
