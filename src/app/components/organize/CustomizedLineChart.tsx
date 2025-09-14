import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface CustomizedLineChartProps {
  data?: any[];
  options?: Partial<ApexOptions>;
  height?: number | string;
  width?: number | string;
}

const CustomizedLineChart: React.FC<CustomizedLineChartProps> = ({ data, options: customOptions, height = 400, width = '100%' }) => {
  const defaultOptions: ApexOptions = {
    chart: {
      type: 'line' as const,
      height: height,
      width: width,
      animations: {
        enabled: true,
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
      background: 'transparent',
      fontFamily: 'Helvetica, Arial, sans-serif',
      foreColor: '#333',
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
        export: {
          csv: {
            filename: 'line-chart',
            columnDelimiter: ',',
            headerCategory: 'category',
            headerValue: 'value',
          },
          svg: {
            filename: undefined,
          },
          png: {
            filename: undefined,
          },
        },
      },
      zoom: {
        enabled: true,
        type: 'x',
        autoScaleYaxis: true,
      },
      dropShadow: {
        enabled: true,
        top: 2,
        left: 1,
        blur: 5,
        opacity: 0.2,
        color: '#000',
      },
    },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560'], // Custom colors for series
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0, 1], // Enable only on first two series
      formatter: function (val, opts) {
        return opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '%'; // Custom format
      },
      style: {
        fontSize: '12px',
        colors: ['#304758'],
      },
      background: {
        enabled: true,
        foreColor: '#fff',
        borderRadius: 2,
        padding: 4,
        opacity: 0.9,
        borderWidth: 1,
        borderColor: '#fff',
      },
      dropShadow: {
        enabled: false,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#00E396'],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    grid: {
      show: true,
      borderColor: '#e7e7e7',
      strokeDashArray: 5,
      position: 'back',
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      row: {
        colors: undefined, // Takes plot band colors
        opacity: 0.5,
      },
      column: {
        colors: undefined, // Takes plot band colors
        opacity: 0.5,
      },
      padding: {
        top: 0,
        right: 10,
        bottom: 0,
        left: 10,
      },
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      fontSize: '14px',
      fontFamily: 'Helvetica, Arial',
      fontWeight: 400,
      inverseOrder: false,
      offsetX: 0,
      offsetY: -10,
      labels: {
        useSeriesColors: true,
        colors: undefined,
      },
      markers: {
        offsetX: 0,
        offsetY: 0,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 0,
      },
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },
    markers: {
      size: 4,
      colors: undefined,
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 3,
          fillColor: '#FEB019',
          size: 8,
        },
      ],
      strokeColors: '#fff',
      strokeWidth: 2,
      strokeOpacity: 0.8,
      shape: 'circle',
      hover: {
        size: 8,
        sizeOffset: 2,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
          },
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
        },
      },
    ],
    stroke: {
      show: true,
      curve: 'smooth',
      colors: undefined,
      width: [2, 3, 4, 5], // Varying width per series
      lineCap: 'round',
      dashArray: 0,
    },
    subtitle: {
      text: 'Custom Subtitle',
      align: 'center',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: '12px',
        fontWeight: 'normal',
        fontFamily: undefined,
        color: '#96969a',
      },
    },
    title: {
      text: 'Customized Line Chart Example',
      align: 'center',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        fontFamily: undefined,
        color: '#263238',
      },
    },
    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: true,
      followCursor: false,
      inverseOrder: false,
      theme: 'light',
      fillSeriesColor: false,
      cssClass: '',
      x: {
        show: true,
        formatter: undefined,
      },
      y: {
        formatter: undefined,
        title: {
          formatter: (seriesName) => `${seriesName} Value: `,
        },
      },
      z: {
        title: 'Z Value: ',
      },
      marker: {
        show: true,
      },
      fixed: {
        enabled: false,
        position: 'topLeft',
        offsetX: 0,
        offsetY: 0,
      },
    },
    xaxis: {
      type: 'datetime', // 'category', 'datetime', 'numeric'
      categories: undefined, // For category type
      axisBorder: {
        show: true,
        color: '#78909C',
        height: 1,
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: '#78909C',
        height: 6,
        offsetX: 0,
        offsetY: 0,
      },
      labels: {
        show: true,
        rotate: -45,
        rotateAlways: false,
        hideOverlappingLabels: true,
        showDuplicates: true,
        trim: false,
        minHeight: undefined,
        maxHeight: 120,
        style: {
          colors: [],
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 400,
          cssClass: '',
        },
        offsetX: 0,
        offsetY: 0,
        datetimeUTC: false,
        datetimeFormatter: {
          year: 'yyyy',
          month: "MMM 'yy",
          day: 'dd MMM',
          hour: 'HH:mm',
          minute: 'HH:mm:ss',
          second: 'HH:mm:ss',
        },
      },
      crosshairs: {
        show: true,
        position: 'front',
        stroke: {
          color: '#b6b6b6',
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: [
      {
        show: true,
        showAlways: false,
        seriesName: undefined,
        opposite: false,
        reversed: false,
        logarithmic: false,
        title: {
          text: 'Y-Axis Label',
          offsetX: 0,
          offsetY: 0,
          style: {
            color: undefined,
            fontSize: '12px',
            fontFamily: undefined,
            fontWeight: 400,
            cssClass: undefined,
          },
          rotate: -90,
        },
        labels: {
          show: true,
          minWidth: 0,
          maxWidth: 160,
          style: {
            colors: [],
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            cssClass: '',
          },
          offsetX: 0,
          offsetY: 0,
          align: 'right',
          formatter: (val) => `${val.toFixed(2)}`,
        },
        axisBorder: {
          show: true,
          color: '#78909C',
          offsetX: 0,
          offsetY: 0,
        },
        axisTicks: {
          show: true,
          color: '#78909C',
          offsetX: 0,
          offsetY: 0,
        },
        crosshairs: {
          show: true,
          position: 'front',
          stroke: {
            color: '#b6b6b6',
            width: 1,
            dashArray: 3,
          },
        },
        min: undefined,
        max: undefined,
        floating: false,
        decimalsInFloat: undefined,
        tooltip: {
          enabled: true,
        },
      },
    ],
  };

  // Sample series data - Backend should provide this as JSON
  const defaultSeries: any[] = [
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
  const options = { ...defaultOptions, ...customOptions };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="line" height={height} width={width} />
        </div>
      </div>
    </div>
  );
};

export default CustomizedLineChart;
