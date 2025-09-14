# Chart Context Documentation

The Chart Context provides centralized configuration management for all ApexCharts components, allowing you to maintain consistent styling, themes, and settings across your entire application.

## Features

- 🎨 **Centralized Theme Management** - Define colors, fonts, and styling once
- ⚙️ **Global Settings Control** - Manage animations, toolbars, legends, and more
- 🔄 **Dynamic Updates** - Change themes and settings at runtime
- 🎯 **Type Safety** - Full TypeScript support with strict typing
- 📱 **Responsive Design** - Built-in responsive breakpoints
- 🎪 **Multiple Themes** - Predefined light, dark, corporate, and minimal themes
- 🔧 **Customizable** - Override any setting per chart or globally

## Quick Start

### 1. Basic Setup

```tsx
import { ChartProvider } from './context/ChartContext';
import { SimpleLineChart } from './components/organize';

function App() {
  return (
    <ChartProvider>
      <SimpleLineChart data={chartData} />
    </ChartProvider>
  );
}
```

### 2. Using the Context

```tsx
import { useChartContext } from './context/ChartContext';

const MyChart: React.FC = () => {
  const { getChartOptions, theme, settings } = useChartContext();

  return (
    <SimpleLineChart
      data={chartData}
      options={getChartOptions('line', {
        title: { text: 'My Custom Chart' },
        // Custom options override context settings
      })}
    />
  );
};
```

## API Reference

### ChartProvider Props

```tsx
interface ChartProviderProps {
  children: ReactNode;
  initialTheme?: Partial<ChartTheme>;
  initialSettings?: Partial<ChartSettings>;
}
```

### ChartTheme Interface

```tsx
interface ChartTheme {
  colors: string[]; // Chart color palette
  background: string; // Chart background color
  textColor: string; // Text color for labels, titles
  gridColor: string; // Grid line color
  fontFamily: string; // Font family for all text
}
```

### ChartSettings Interface

```tsx
interface ChartSettings {
  animations: {
    enabled: boolean;
    speed: number;
    animateGradually: {
      enabled: boolean;
      delay: number;
    };
    dynamicAnimation: {
      enabled: boolean;
      speed: number;
    };
  };
  toolbar: {
    show: boolean;
    tools: {
      download: boolean;
      selection: boolean;
      zoom: boolean;
      zoomin: boolean;
      zoomout: boolean;
      pan: boolean;
      reset: boolean;
    };
  };
  legend: {
    show: boolean;
    position: 'top' | 'right' | 'bottom' | 'left';
    horizontalAlign: 'left' | 'center' | 'right';
    floating: boolean;
    fontSize: string;
    fontFamily: string;
    fontWeight: number | string;
  };
  tooltip: {
    enabled: boolean;
    shared: boolean;
    intersect: boolean;
    theme: 'light' | 'dark';
    fillSeriesColor: boolean;
  };
  grid: {
    show: boolean;
    borderColor: string;
    strokeDashArray: number;
    position: 'front' | 'back';
  };
  dataLabels: {
    enabled: boolean;
    style: {
      fontSize: string;
      fontFamily: string;
      fontWeight: string | number;
      colors: string[];
    };
  };
  responsive: Array<{
    breakpoint: number;
    options: Partial<ApexOptions>;
  }>;
}
```

## Usage Examples

### 1. Custom Theme

```tsx
import { ChartProvider, chartThemes } from './context/ChartContext';

<ChartProvider initialTheme={chartThemes.dark}>
  <YourCharts />
</ChartProvider>;
```

### 2. Custom Settings

```tsx
import { ChartProvider, chartSettingsPresets } from './context/ChartContext';

<ChartProvider initialSettings={chartSettingsPresets.minimal}>
  <YourCharts />
</ChartProvider>;
```

### 3. Dynamic Theme Switching

```tsx
const ThemeSwitcher: React.FC = () => {
  const { updateTheme } = useChartContext();

  return (
    <div>
      <button onClick={() => updateTheme(chartThemes.light)}>Light Theme</button>
      <button onClick={() => updateTheme(chartThemes.dark)}>Dark Theme</button>
    </div>
  );
};
```

### 4. Settings Control Panel

```tsx
const SettingsPanel: React.FC = () => {
  const { settings, updateSettings } = useChartContext();

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={settings.animations.enabled}
          onChange={(e) =>
            updateSettings({
              animations: { ...settings.animations, enabled: e.target.checked },
            })
          }
        />
        Enable Animations
      </label>

      <label>
        <input
          type="checkbox"
          checked={settings.toolbar.show}
          onChange={(e) =>
            updateSettings({
              toolbar: { ...settings.toolbar, show: e.target.checked },
            })
          }
        />
        Show Toolbar
      </label>
    </div>
  );
};
```

### 5. Chart-Specific Overrides

```tsx
const CustomChart: React.FC = () => {
  const { getChartOptions } = useChartContext();

  return (
    <SimpleLineChart
      data={data}
      options={getChartOptions('line', {
        // These options override context settings
        animations: { enabled: false },
        toolbar: { show: false },
        title: { text: 'Special Chart' },
      })}
    />
  );
};
```

## Predefined Themes

### Light Theme

```tsx
chartThemes.light = {
  colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#F3B415'],
  background: '#ffffff',
  textColor: '#333333',
  gridColor: '#e7e7e7',
  fontFamily: 'Helvetica, Arial, sans-serif',
};
```

### Dark Theme

```tsx
chartThemes.dark = {
  colors: ['#00D4AA', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'],
  background: '#1a1a1a',
  textColor: '#ffffff',
  gridColor: '#333333',
  fontFamily: 'Helvetica, Arial, sans-serif',
};
```

### Corporate Theme

```tsx
chartThemes.corporate = {
  colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
  background: '#f8f9fa',
  textColor: '#212529',
  gridColor: '#dee2e6',
  fontFamily: 'Inter, system-ui, sans-serif',
};
```

### Minimal Theme

```tsx
chartThemes.minimal = {
  colors: ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'],
  background: 'transparent',
  textColor: '#374151',
  gridColor: '#f3f4f6',
  fontFamily: 'system-ui, sans-serif',
};
```

## Predefined Settings Presets

### Minimal Settings

```tsx
chartSettingsPresets.minimal = {
  animations: { enabled: false },
  toolbar: { show: false },
  legend: { show: false },
  dataLabels: { enabled: false },
  grid: { show: false },
};
```

### Interactive Settings

```tsx
chartSettingsPresets.interactive = {
  animations: { enabled: true, speed: 600 },
  toolbar: { show: true },
  legend: { show: true, position: 'top' },
  dataLabels: { enabled: true },
  grid: { show: true },
};
```

### Presentation Settings

```tsx
chartSettingsPresets.presentation = {
  animations: { enabled: true, speed: 1000 },
  toolbar: { show: true },
  legend: { show: true, position: 'bottom' },
  dataLabels: { enabled: true },
  grid: { show: true },
};
```

## Advanced Usage

### Nested Providers

You can nest multiple ChartProviders for different sections of your app:

```tsx
<ChartProvider initialTheme={chartThemes.light}>
  <HeaderCharts />

  <ChartProvider initialTheme={chartThemes.dark}>
    <SidebarCharts />
  </ChartProvider>

  <FooterCharts />
</ChartProvider>
```

### Custom Hook for Chart Options

```tsx
const useCustomChartOptions = (chartType: string, overrides: Partial<ApexOptions> = {}) => {
  const { getChartOptions } = useChartContext();

  return getChartOptions(chartType, {
    ...overrides,
    // Add your custom defaults here
    chart: {
      ...overrides.chart,
      animations: { enabled: true, speed: 800 },
    },
  });
};
```

### Context-Aware Chart Component

```tsx
const ContextAwareChart: React.FC<{ data: any[] }> = ({ data }) => {
  const { theme, getChartOptions } = useChartContext();

  return (
    <div style={{ backgroundColor: theme.background, padding: '20px' }}>
      <h2 style={{ color: theme.textColor, fontFamily: theme.fontFamily }}>Chart Title</h2>
      <SimpleLineChart data={data} options={getChartOptions('line')} />
    </div>
  );
};
```

## Best Practices

1. **Wrap your app** with ChartProvider at the root level
2. **Use predefined themes** for consistency across your application
3. **Override settings** per chart when needed, not globally
4. **Test theme changes** to ensure readability and accessibility
5. **Use responsive settings** for mobile-friendly charts
6. **Keep custom options minimal** - let the context handle common settings

## Migration Guide

### From Individual Chart Options

**Before:**

```tsx
<SimpleLineChart
  data={data}
  options={{
    colors: ['#008FFB', '#00E396'],
    animations: { enabled: true, speed: 800 },
    toolbar: { show: true },
    legend: { show: true, position: 'top' },
  }}
/>
```

**After:**

```tsx
<ChartProvider>
  <SimpleLineChart data={data} />
</ChartProvider>
```

### Gradual Migration

You can migrate gradually by keeping custom options:

```tsx
<ChartProvider>
  <SimpleLineChart
    data={data}
    options={{
      // Only specify what's different from context
      title: { text: 'Special Chart' },
      animations: { enabled: false }, // Override context
    }}
  />
</ChartProvider>
```

## Troubleshooting

### Context Not Available Error

If you get "useChartContext must be used within a ChartProvider", make sure your component is wrapped:

```tsx
// ❌ Wrong
const MyChart = () => {
  const { getChartOptions } = useChartContext(); // Error!
  return <div>Chart</div>;
};

// ✅ Correct
<ChartProvider>
  <MyChart />
</ChartProvider>;
```

### Theme Not Updating

Make sure you're using the `getChartOptions` function:

```tsx
// ❌ Wrong - won't update with theme changes
const options = { colors: ['#008FFB'] };

// ✅ Correct - will update with theme changes
const { getChartOptions } = useChartContext();
const options = getChartOptions('line');
```

### Custom Options Not Working

Remember that custom options override context settings:

```tsx
// This will disable animations even if context has them enabled
const options = getChartOptions('line', {
  animations: { enabled: false },
});
```
