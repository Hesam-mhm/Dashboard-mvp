import React, { createContext, useContext, ReactNode } from 'react';
import { ApexOptions } from 'apexcharts';

// Common chart theme configuration
export interface ChartTheme {
  colors: string[];
  background: string;
  textColor: string;
  gridColor: string;
  fontFamily: string;
}

// Common chart settings that can be shared across all charts
export interface ChartSettings {
  // Animation settings
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

  // Toolbar settings
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
    export: {
      csv: {
        filename?: string;
        columnDelimiter: string;
        headerCategory: string;
        headerValue: string;
      };
      svg: { filename?: string };
      png: { filename?: string };
    };
  };

  // Legend settings
  legend: {
    show: boolean;
    position: 'top' | 'right' | 'bottom' | 'left';
    horizontalAlign: 'left' | 'center' | 'right';
    floating: boolean;
    fontSize: string;
    fontFamily: string;
    fontWeight: number | string;
  };

  // Tooltip settings
  tooltip: {
    enabled: boolean;
    shared: boolean;
    intersect: boolean;
    theme: 'light' | 'dark';
    fillSeriesColor: boolean;
  };

  // Grid settings
  grid: {
    show: boolean;
    borderColor: string;
    strokeDashArray: number;
    position: 'front' | 'back';
  };

  // Data labels settings
  dataLabels: {
    enabled: boolean;
    style: {
      fontSize: string;
      fontFamily: string;
      fontWeight: string | number;
      colors: string[];
    };
  };

  // Responsive settings
  responsive: Array<{
    breakpoint: number;
    options: Partial<ApexOptions>;
  }>;
}

// Chart context type
interface ChartContextType {
  theme: ChartTheme;
  settings: ChartSettings;
  updateTheme: (theme: Partial<ChartTheme>) => void;
  updateSettings: (settings: Partial<ChartSettings>) => void;
  resetToDefaults: () => void;
  getChartOptions: (chartType: string, customOptions?: Partial<ApexOptions>) => ApexOptions;
}

// Default theme configuration
const defaultTheme: ChartTheme = {
  colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#F3B415'],
  background: 'transparent',
  textColor: '#333333',
  gridColor: '#e7e7e7',
  fontFamily: 'Helvetica, Arial, sans-serif',
};

// Default chart settings
const defaultSettings: ChartSettings = {
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
        columnDelimiter: ',',
        headerCategory: 'category',
        headerValue: 'value',
      },
      svg: {},
      png: {},
    },
  },
  legend: {
    show: true,
    position: 'left',
    horizontalAlign: 'right',
    floating: false,
    fontSize: '14px',
    fontFamily: 'Helvetica, Arial',
    fontWeight: 400,
  },
  tooltip: {
    enabled: true,
    shared: true,
    intersect: false,
    theme: 'light',
    fillSeriesColor: false,
  },
  grid: {
    show: true,
    borderColor: '#e7e7e7',
    strokeDashArray: 5,
    position: 'back',
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: '12px',
      fontFamily: 'Helvetica, Arial',
      fontWeight: 400,
      colors: ['#304758'],
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
        },
      },
    },
  ],
};

// Create context
const ChartContext = createContext<ChartContextType | undefined>(undefined);

// Chart provider component
interface ChartProviderProps {
  children: ReactNode;
  initialTheme?: Partial<ChartTheme>;
  initialSettings?: Partial<ChartSettings>;
}

export const ChartProvider: React.FC<ChartProviderProps> = ({ children, initialTheme = {}, initialSettings = {} }) => {
  const [theme, setTheme] = React.useState<ChartTheme>({
    ...defaultTheme,
    ...initialTheme,
  });

  const [settings, setSettings] = React.useState<ChartSettings>({
    ...defaultSettings,
    ...initialSettings,
  });

  const updateTheme = React.useCallback((newTheme: Partial<ChartTheme>) => {
    setTheme((prev) => ({ ...prev, ...newTheme }));
  }, []);

  const updateSettings = React.useCallback((newSettings: Partial<ChartSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  }, []);

  const resetToDefaults = React.useCallback(() => {
    setTheme(defaultTheme);
    setSettings(defaultSettings);
  }, []);

  const getChartOptions = React.useCallback(
    (chartType: string, customOptions: Partial<ApexOptions> = {}): ApexOptions => {
      const baseOptions: ApexOptions = {
        chart: {
          type: chartType as any,
          background: theme.background,
          fontFamily: theme.fontFamily,
          foreColor: theme.textColor,
          animations: settings.animations,
          toolbar: settings.toolbar,
        },
        colors: theme.colors,
        dataLabels: settings.dataLabels,
        grid: settings.grid,
        legend: settings.legend,
        tooltip: settings.tooltip,
        responsive: settings.responsive,
      };

      // Merge with custom options (custom options take precedence)
      return {
        ...baseOptions,
        ...customOptions,
        chart: {
          ...baseOptions.chart,
          ...customOptions.chart,
        },
      };
    },
    [theme, settings],
  );

  const value: ChartContextType = {
    theme,
    settings,
    updateTheme,
    updateSettings,
    resetToDefaults,
    getChartOptions,
  };

  return <ChartContext.Provider value={value}>{children}</ChartContext.Provider>;
};

// Custom hook to use chart context
export const useChartContext = (): ChartContextType => {
  const context = useContext(ChartContext);
  if (context === undefined) {
    throw new Error('useChartContext must be used within a ChartProvider');
  }
  return context;
};

// Predefined themes
export const chartThemes = {
  light: {
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#F3B415'],
    background: '#ffffff',
    textColor: '#333333',
    gridColor: '#e7e7e7',
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
  dark: {
    colors: ['#00D4AA', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'],
    background: '#1a1a1a',
    textColor: '#ffffff',
    gridColor: '#333333',
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
  corporate: {
    colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
    background: '#f8f9fa',
    textColor: '#212529',
    gridColor: '#dee2e6',
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  minimal: {
    colors: ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'],
    background: 'transparent',
    textColor: '#374151',
    gridColor: '#f3f4f6',
    fontFamily: 'system-ui, sans-serif',
  },
} as const;

// Predefined settings presets
export const chartSettingsPresets = {
  minimal: {
    animations: { enabled: false },
    toolbar: { show: false },
    legend: { show: false },
    dataLabels: { enabled: false },
    grid: { show: false },
  },
  interactive: {
    animations: { enabled: true, speed: 600 },
    toolbar: { show: true },
    legend: { show: true, position: 'top' as const },
    dataLabels: { enabled: true },
    grid: { show: true },
  },
  presentation: {
    animations: { enabled: true, speed: 1000 },
    toolbar: { show: true },
    legend: { show: true, position: 'bottom' as const },
    dataLabels: { enabled: true },
    grid: { show: true },
  },
} as const;
