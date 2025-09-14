# Chart Components

This directory contains comprehensive ApexCharts components for React applications. All components are built with TypeScript and provide a consistent API for creating various types of charts.

## Available Chart Types

### 1. Line Chart (`SimpleLineChart`)

- **Purpose**: Display trends over time
- **Props**: `data`, `options`, `height`, `width`
- **Usage**: `<SimpleLineChart height={400} data={lineData} />`

### 2. Area Chart (`AreaChart`)

- **Purpose**: Show filled areas under lines
- **Props**: `data`, `options`, `height`, `width`
- **Usage**: `<AreaChart height={400} data={areaData} />`

### 3. Bar Chart (`BarChart`)

- **Purpose**: Compare values across categories
- **Props**: `data`, `options`, `height`, `width`, `horizontal`
- **Usage**: `<BarChart height={400} horizontal={false} />`

### 4. Pie Chart (`PieChart`)

- **Purpose**: Show parts of a whole
- **Props**: `data`, `options`, `height`, `width`, `labels`
- **Usage**: `<PieChart height={400} labels={['A', 'B', 'C']} />`

### 5. Donut Chart (`DonutChart`)

- **Purpose**: Pie chart with hollow center
- **Props**: `data`, `options`, `height`, `width`, `labels`
- **Usage**: `<DonutChart height={400} />`

### 6. Radial Bar Chart (`RadialBarChart`)

- **Purpose**: Circular progress indicators
- **Props**: `data`, `options`, `height`, `width`, `labels`
- **Usage**: `<RadialBarChart height={400} />`

### 7. Scatter Chart (`ScatterChart`)

- **Purpose**: Show relationships between two variables
- **Props**: `data`, `options`, `height`, `width`
- **Usage**: `<ScatterChart height={400} />`

### 8. Bubble Chart (`BubbleChart`)

- **Purpose**: Show relationships with size as third dimension
- **Props**: `data`, `options`, `height`, `width`
- **Usage**: `<BubbleChart height={400} />`

### 9. Heatmap Chart (`HeatmapChart`)

- **Purpose**: Show data density through colors
- **Props**: `data`, `options`, `height`, `width`
- **Usage**: `<HeatmapChart height={400} />`

### 10. Candlestick Chart (`CandlestickChart`)

- **Purpose**: Display financial data (OHLC)
- **Props**: `data`, `options`, `height`, `width`
- **Usage**: `<CandlestickChart height={400} />`

### 11. Radar Chart (`RadarChart`)

- **Purpose**: Show multivariate data in spider chart
- **Props**: `data`, `options`, `height`, `width`, `categories`
- **Usage**: `<RadarChart height={400} categories={['A', 'B', 'C']} />`

## Data Format Examples

### Line/Area/Bar Charts

```typescript
const lineData = [
  {
    name: 'Sales',
    data: [
      { x: new Date('2025-01-01').getTime(), y: 30 },
      { x: new Date('2025-02-01').getTime(), y: 45 },
      { x: new Date('2025-03-01').getTime(), y: 35 },
    ],
  },
];
```

### Pie/Donut Charts

```typescript
const pieData = [
  {
    data: [44, 55, 13, 43, 22],
  },
];
```

### Scatter Chart

```typescript
const scatterData = [
  {
    name: 'Series 1',
    data: [
      { x: 16.4, y: 5.4 },
      { x: 21.7, y: 2 },
      { x: 25.4, y: 3 },
    ],
  },
];
```

### Bubble Chart

```typescript
const bubbleData = [
  {
    name: 'Product A',
    data: [
      { x: 20, y: 20, z: 10 },
      { x: 30, y: 25, z: 15 },
      { x: 40, y: 30, z: 20 },
    ],
  },
];
```

### Candlestick Chart

```typescript
const candlestickData = [
  {
    name: 'Candle',
    data: [
      { x: new Date('2025-01-01').getTime(), y: [6629.81, 6650.5, 6623.04, 6633.33] },
      { x: new Date('2025-01-02').getTime(), y: [6632.01, 6643.59, 6620, 6630.11] },
    ],
  },
];
```

## Customization

All components accept an `options` prop for customizing ApexCharts configuration:

```typescript
const customOptions = {
  chart: {
    background: '#f4f4f4',
  },
  colors: ['#ff0000', '#00ff00'],
  title: {
    text: 'Custom Chart Title',
  },
};

<SimpleLineChart options={customOptions} />
```

## Importing Components

```typescript
// Import individual components
import { SimpleLineChart, BarChart, PieChart } from './components/organize';

// Import all components
import * as Charts from './components/organize';

// Import types
import { ApexOptions } from './components/organize';
```

## Features

- ✅ TypeScript support
- ✅ Responsive design
- ✅ Customizable options
- ✅ Default sample data
- ✅ Consistent API across all chart types
- ✅ Built-in animations
- ✅ Export functionality
- ✅ Interactive tooltips
- ✅ Legend support
- ✅ Theme support

## Dependencies

- `react-apexcharts`: React wrapper for ApexCharts
- `apexcharts`: Core charting library
- `@types/apexcharts`: TypeScript definitions

## Notes

- All components use `any[]` for data types to maintain compatibility with ApexCharts
- Default sample data is provided for demonstration purposes
- Components are optimized for dashboard and data visualization use cases
- Custom options are merged with default options using spread operator
