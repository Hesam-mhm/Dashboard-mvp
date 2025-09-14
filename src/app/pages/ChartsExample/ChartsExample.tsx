import {
  SimpleLineChart,
  AreaChart,
  BarChart,
  PieChart,
  DonutChart,
  RadialBarChart,
  ScatterChart,
  BubbleChart,
  HeatmapChart,
  CandlestickChart,
  RadarChart,
  LineChartSeries,
  AreaChartSeries,
  BarChartSeries,
  PieChartData,
  DonutChartData,
  RadialBarChartData,
  ScatterChartSeries,
  BubbleChartSeries,
  HeatmapChartSeries,
  CandlestickChartSeries,
  RadarChartSeries,
} from '../../components/organize';
import { ChartProvider } from '../../context/ChartContext';

const ChartsExample = () => {
  // Mock data for different chart types with strict typing
  console.log('ChartsExample component rendering...');
  const lineData: LineChartSeries[] = [
    {
      name: 'Sales',
      data: [
        { x: new Date('2025-01-01').getTime(), y: 30 },
        { x: new Date('2025-02-01').getTime(), y: 45 },
        { x: new Date('2025-03-01').getTime(), y: 35 },
        { x: new Date('2025-04-01').getTime(), y: 60 },
        { x: new Date('2025-05-01').getTime(), y: 50 },
        { x: new Date('2025-06-01').getTime(), y: 70 },
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
        { x: new Date('2025-06-01').getTime(), y: 65 },
      ],
    },
  ];

  const areaData: AreaChartSeries[] = [
    {
      name: 'Website Traffic',
      data: [
        { x: new Date('2025-01-01').getTime(), y: 1000 },
        { x: new Date('2025-02-01').getTime(), y: 1200 },
        { x: new Date('2025-03-01').getTime(), y: 1100 },
        { x: new Date('2025-04-01').getTime(), y: 1500 },
        { x: new Date('2025-05-01').getTime(), y: 1300 },
      ],
    },
    {
      name: 'Mobile Traffic',
      data: [
        { x: new Date('2025-01-01').getTime(), y: 800 },
        { x: new Date('2025-02-01').getTime(), y: 900 },
        { x: new Date('2025-03-01').getTime(), y: 1000 },
        { x: new Date('2025-04-01').getTime(), y: 1200 },
        { x: new Date('2025-05-01').getTime(), y: 1100 },
      ],
    },
  ];
  /*
{
title : " ljhskfhkdsf"
[
    {
      name: 'Q1 Sales',
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: 'Q2 Sales',
      data: [13, 23, 20, 8, 13, 27],
    },
  ]

}

*/
  const barData: BarChartSeries[] = [
    {
      name: 'Q1 Sales',
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: 'Q2 Sales',
      data: [13, 23, 20, 8, 13, 27],
    },
  ];

  const pieData: PieChartData[] = [
    {
      data: [44, 55, 13, 43, 22],
    },
  ];

  const donutData: DonutChartData[] = [
    {
      data: [35, 25, 20, 15, 5],
    },
  ];

  const radialData: RadialBarChartData[] = [
    {
      data: [75, 60, 85, 90],
    },
  ];

  const scatterData: ScatterChartSeries[] = [
    {
      name: 'Product A',
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
      name: 'Product B',
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

  const bubbleData: BubbleChartSeries[] = [
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

  const heatmapData: HeatmapChartSeries[] = [
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

  const candlestickData: CandlestickChartSeries[] = [
    {
      name: 'Stock Price',
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

  const radarData: RadarChartSeries[] = [
    {
      name: 'Series 1',
      data: [20, 100, 40, 30, 50, 80, 33],
    },
    {
      name: 'Series 2',
      data: [20, 30, 40, 80, 50, 30, 40],
    },
  ];

  const chartContainerStyle = {
    marginBottom: '40px',
    padding: '20px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: '#fff',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  };

  // Log data for debugging
  console.log('Line data:', lineData);
  console.log('Area data:', areaData);
  console.log('Bar data:', barData);
  console.log('Pie data:', pieData);
  console.log('Donut data:', donutData);
  console.log('Radial data:', radialData);
  console.log('Scatter data:', scatterData);
  console.log('Bubble data:', bubbleData);
  console.log('Heatmap data:', heatmapData);
  console.log('Candlestick data:', candlestickData);
  console.log('Radar data:', radarData);

  return (
    <ChartProvider>
      <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>ApexCharts Examples with Mock Data</h1>

        <div style={chartContainerStyle}>
          <h2 style={titleStyle}>Line Chart - Sales & Revenue Trends</h2>
          <SimpleLineChart options={{}} data={lineData} height={400} />
        </div>

        <div style={chartContainerStyle}>
          <h2 style={titleStyle}>Area Chart - Website Traffic</h2>
          <AreaChart data={areaData} height={400} />
        </div>

        <div style={chartContainerStyle}>
          <h2 style={titleStyle}>Bar Chart - Quarterly Sales Comparison</h2>
          <BarChart categories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']} data={barData} height={400} />
        </div>

        <div style={chartContainerStyle}>
          <h2 style={titleStyle}>Pie Chart - Market Share Distribution</h2>
          <PieChart data={pieData} labels={['Team A', 'Team B', 'Team C', 'Team D', 'Team E']} height={400} />
        </div>

        <div style={chartContainerStyle}>
          <h2 style={titleStyle}>Donut Chart - Revenue Sources</h2>
          <DonutChart data={donutData} labels={['Online', 'Retail', 'Wholesale', 'Direct', 'Other']} height={400} />
        </div>

        <div style={chartContainerStyle}>
          <h2 style={titleStyle}>Radial Bar Chart - Performance Metrics</h2>
          <RadialBarChart data={radialData} labels={['Sales', 'Marketing', 'Support', 'Development']} height={400} />
        </div>

        <div style={chartContainerStyle}>
          <h2 style={titleStyle}>Scatter Chart - Product Performance</h2>
          <ScatterChart data={scatterData} height={400} />
        </div>

        <div style={chartContainerStyle}>
          <h2 style={titleStyle}>Bubble Chart - Market Analysis</h2>
          <BubbleChart data={bubbleData} height={400} />
        </div>

        <div style={chartContainerStyle}>
          <h2 style={titleStyle}>Heatmap Chart - Weekly Metrics</h2>
          <HeatmapChart data={heatmapData} height={400} />
        </div>

        <div style={chartContainerStyle}>
          <h2 style={titleStyle}>Candlestick Chart - Stock Price Movement</h2>
          <CandlestickChart data={candlestickData} height={400} />
        </div>

        <div style={chartContainerStyle}>
          <h2 style={titleStyle}>Radar Chart - Multi-dimensional Analysis</h2>
          <RadarChart data={radarData} categories={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']} height={400} />
        </div>
      </div>
    </ChartProvider>
  );
};

export default ChartsExample;
