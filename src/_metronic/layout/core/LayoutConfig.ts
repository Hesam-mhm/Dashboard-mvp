import { createTheme, Theme } from '@mui/material';
import { COLORS } from '../../partials/layout/theme-mode/styled/constants';

// Layout configuration interface
export interface LayoutConfig {
  // Sidebar configuration
  sidebar: {
    width: number;
    collapsedWidth: number;
    backgroundColor: string;
    textColor: string;
    activeItemColor: string;
    activeItemBackgroundColor: string;
    hoverItemBackgroundColor: string;
    borderColor: string;
    logo: {
      height: number;
      marginBottom: number;
    };
    menu: {
      itemHeight: number;
      itemPadding: number;
      itemBorderRadius: number;
      subItemIndent: number;
      bulletSize: number;
    };
    footer: {
      height: number;
      textColor: string;
      fontSize: number;
    };
    display: boolean;
    collapsible: boolean;
    showTooltips: boolean;
  };

  // Header configuration
  header: {
    height: number;
    backgroundColor: string;
    textColor: string;
    borderColor: string;
    shadow: string;
    logo: {
      height: number;
      marginRight: number;
    };
    title: {
      fontSize: number;
      fontWeight: number;
      color: string;
    };
    actions: {
      iconSize: number;
      iconColor: string;
      spacing: number;
    };
    userMenu: {
      width: number;
      itemHeight: number;
      itemSpacing: number;
    };
    display: boolean;
    sticky: boolean;
    showNotifications: boolean;
    showUserMenu: boolean;
  };

  // Footer configuration
  footer: {
    height: number;
    backgroundColor: string;
    textColor: string;
    borderColor: string;
    padding: {
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
    links: {
      color: string;
      hoverColor: string;
      fontSize: number;
      spacing: number;
    };
    copyright: {
      fontSize: number;
      color: string;
    };
    display: boolean;
    showLinks: boolean;
    showCopyright: boolean;
  };

  // Main content configuration
  content: {
    backgroundColor: string;
    padding: {
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
    maxWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fluid';
    fluid: boolean;
  };

  // Theme configuration
  theme: {
    primaryColor: string;
    secondaryColor: string;
    errorColor: string;
    warningColor: string;
    infoColor: string;
    successColor: string;
    mode: 'light' | 'dark' | 'system';
    borderRadius: number;
    spacing: number;
  };

  // Responsive configuration
  responsive: {
    mobileBreakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    tabletBreakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    desktopBreakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  };

  // Animation configuration
  animation: {
    duration: number;
    easing: string;
    enableTransitions: boolean;
  };
}

// Default configuration using centralized color system
export const defaultLayoutConfig: LayoutConfig = {
  sidebar: {
    width: 280,
    collapsedWidth: 70,
    backgroundColor: COLORS.COMMON.WHITE,
    textColor: COLORS.COMMON.BLACK,
    activeItemColor: COLORS.PRIMARY.MAIN,
    activeItemBackgroundColor: COLORS.PRIMARY.LIGHT[100],
    hoverItemBackgroundColor: COLORS.GREY[100],
    borderColor: COLORS.GREY[200],
    logo: {
      height: 32,
      marginBottom: 16,
    },
    menu: {
      itemHeight: 48,
      itemPadding: 16,
      itemBorderRadius: 8,
      subItemIndent: 24,
      bulletSize: 6,
    },
    footer: {
      height: 60,
      textColor: COLORS.GREY[600],
      fontSize: 12,
    },
    display: true,
    collapsible: true,
    showTooltips: true,
  },

  header: {
    height: 64,
    backgroundColor: COLORS.COMMON.WHITE,
    textColor: COLORS.COMMON.BLACK,
    borderColor: COLORS.GREY[200],
    shadow: '0 2px 4px rgba(0,0,0,0.1)',
    logo: {
      height: 32,
      marginRight: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: 600,
      color: COLORS.COMMON.BLACK,
    },
    actions: {
      iconSize: 24,
      iconColor: COLORS.GREY[600],
      spacing: 8,
    },
    userMenu: {
      width: 200,
      itemHeight: 40,
      itemSpacing: 4,
    },
    display: false,
    sticky: true,
    showNotifications: true,
    showUserMenu: true,
  },

  footer: {
    height: 80,
    backgroundColor: COLORS.COMMON.WHITE,
    textColor: COLORS.GREY[600],
    borderColor: COLORS.GREY[200],
    padding: {
      top: 16,
      bottom: 16,
      left: 24,
      right: 24,
    },
    links: {
      color: COLORS.GREY[600],
      hoverColor: COLORS.PRIMARY.MAIN,
      fontSize: 14,
      spacing: 24,
    },
    copyright: {
      fontSize: 12,
      color: COLORS.GREY[500],
    },
    display: false,
    showLinks: true,
    showCopyright: true,
  },

  content: {
    backgroundColor: COLORS.COMMON.WHITE,
    padding: {
      top: 2,
      bottom: 2,
      left: 2,
      right: 2,
    },
    maxWidth: 'xl',
    fluid: false,
  },

  theme: {
    primaryColor: COLORS.PRIMARY.MAIN,
    secondaryColor: COLORS.SECONDARY.MAIN,
    errorColor: COLORS.ERROR.MAIN,
    warningColor: COLORS.SECONDARY.MAIN, // Using secondary as warning since no specific warning color defined
    infoColor: COLORS.PRIMARY.MAIN, // Using primary as info since no specific info color defined
    successColor: COLORS.SUCCESS.MAIN,
    mode: 'system',
    borderRadius: 8,
    spacing: 8,
  },

  responsive: {
    mobileBreakpoint: 'md',
    tabletBreakpoint: 'lg',
    desktopBreakpoint: 'xl',
  },

  animation: {
    duration: 300,
    easing: 'ease-in-out',
    enableTransitions: true,
  },
};

// Dark theme configuration using centralized color system
export const darkLayoutConfig: LayoutConfig = {
  ...defaultLayoutConfig,
  sidebar: {
    ...defaultLayoutConfig.sidebar,
    backgroundColor: COLORS.COMMON.BLACK,
    textColor: COLORS.COMMON.WHITE,
    activeItemColor: COLORS.PRIMARY.LIGHT[300],
    activeItemBackgroundColor: COLORS.GREY[900],
    hoverItemBackgroundColor: COLORS.GREY[900],
    borderColor: COLORS.GREY[800],
  },
  header: {
    ...defaultLayoutConfig.header,
    backgroundColor: COLORS.COMMON.BLACK,
    textColor: COLORS.COMMON.WHITE,
    borderColor: COLORS.GREY[800],
  },
  footer: {
    ...defaultLayoutConfig.footer,
    backgroundColor: COLORS.COMMON.BLACK,
    textColor: COLORS.GREY[400],
    borderColor: COLORS.GREY[800],
  },
  content: {
    ...defaultLayoutConfig.content,
    backgroundColor: COLORS.GREY[900],
  },
  theme: {
    ...defaultLayoutConfig.theme,
    mode: 'dark',
  },
};

// Compact layout configuration
export const compactLayoutConfig: LayoutConfig = {
  ...defaultLayoutConfig,
  sidebar: {
    ...defaultLayoutConfig.sidebar,
    width: 200,
    collapsedWidth: 60,
    menu: {
      ...defaultLayoutConfig.sidebar.menu,
      itemHeight: 40,
      itemPadding: 12,
    },
  },
  header: {
    ...defaultLayoutConfig.header,
    height: 56,
    title: {
      ...defaultLayoutConfig.header.title,
      fontSize: 18,
    },
  },
  footer: {
    ...defaultLayoutConfig.footer,
    height: 60,
    padding: {
      top: 12,
      bottom: 12,
      left: 16,
      right: 16,
    },
  },
  content: {
    ...defaultLayoutConfig.content,
    padding: {
      top: 16,
      bottom: 16,
      left: 16,
      right: 16,
    },
  },
};

// Wide layout configuration
export const wideLayoutConfig: LayoutConfig = {
  ...defaultLayoutConfig,
  sidebar: {
    ...defaultLayoutConfig.sidebar,
    width: 320,
    collapsedWidth: 80,
  },
  content: {
    ...defaultLayoutConfig.content,
    maxWidth: 'fluid',
    fluid: true,
  },
};

// Configuration presets
export const layoutPresets = {
  default: defaultLayoutConfig,
  dark: darkLayoutConfig,
  compact: compactLayoutConfig,
  wide: wideLayoutConfig,
};

// Utility function to get colors based on theme mode
export const getThemeColors = (mode: 'light' | 'dark' | 'system' = 'light') => {
  const isDark = mode === 'dark';

  return {
    // Background colors
    background: {
      primary: isDark ? COLORS.COMMON.BLACK : COLORS.COMMON.WHITE,
      secondary: isDark ? COLORS.GREY[900] : COLORS.GREY[100],
      tertiary: isDark ? COLORS.GREY[800] : COLORS.GREY[200],
    },
    // Text colors
    text: {
      primary: isDark ? COLORS.COMMON.WHITE : COLORS.COMMON.BLACK,
      secondary: isDark ? COLORS.GREY[400] : COLORS.GREY[600],
      tertiary: isDark ? COLORS.GREY[500] : COLORS.GREY[500],
    },
    // Border colors
    border: {
      primary: isDark ? COLORS.GREY[800] : COLORS.GREY[200],
      secondary: isDark ? COLORS.GREY[700] : COLORS.GREY[300],
    },
    // Interactive colors
    interactive: {
      hover: isDark ? COLORS.GREY[900] : COLORS.GREY[100],
      active: isDark ? COLORS.PRIMARY.LIGHT[300] : COLORS.PRIMARY.LIGHT[100],
      focus: COLORS.PRIMARY.MAIN,
    },
    // Semantic colors
    semantic: {
      primary: COLORS.PRIMARY.MAIN,
      secondary: COLORS.SECONDARY.MAIN,
      success: COLORS.SUCCESS.MAIN,
      error: COLORS.ERROR.MAIN,
      warning: COLORS.SECONDARY.MAIN, // Using secondary as warning
      info: COLORS.PRIMARY.MAIN, // Using primary as info
    },
  };
};

// Configuration utility functions
export class LayoutConfigManager {
  private static instance: LayoutConfigManager;
  private config: LayoutConfig = defaultLayoutConfig;

  private constructor() {}

  static getInstance(): LayoutConfigManager {
    if (!LayoutConfigManager.instance) {
      LayoutConfigManager.instance = new LayoutConfigManager();
    }
    return LayoutConfigManager.instance;
  }

  getConfig(): LayoutConfig {
    return this.config;
  }

  updateConfig(updates: Partial<LayoutConfig>): void {
    this.config = { ...this.config, ...updates };
  }

  setPreset(presetName: keyof typeof layoutPresets): void {
    this.config = { ...layoutPresets[presetName] };
  }

  // Dynamic color configuration based on theme mode
  updateColorsForMode(mode: 'light' | 'dark' | 'system'): void {
    const colors = getThemeColors(mode);

    this.config.sidebar = {
      ...this.config.sidebar,
      backgroundColor: colors.background.primary,
      textColor: colors.text.primary,
      activeItemColor: colors.semantic.primary,
      activeItemBackgroundColor: colors.interactive.active,
      hoverItemBackgroundColor: colors.interactive.hover,
      borderColor: colors.border.primary,
    };

    this.config.header = {
      ...this.config.header,
      backgroundColor: colors.background.primary,
      textColor: colors.text.primary,
      borderColor: colors.border.primary,
    };

    this.config.footer = {
      ...this.config.footer,
      backgroundColor: colors.background.primary,
      textColor: colors.text.secondary,
      borderColor: colors.border.primary,
    };

    this.config.content = {
      ...this.config.content,
      backgroundColor: colors.background.secondary,
    };

    this.config.theme = {
      ...this.config.theme,
      mode,
      primaryColor: colors.semantic.primary,
      secondaryColor: colors.semantic.secondary,
      errorColor: colors.semantic.error,
      warningColor: colors.semantic.warning,
      infoColor: colors.semantic.info,
      successColor: colors.semantic.success,
    };
  }

  // Sidebar specific methods
  setSidebarWidth(width: number): void {
    this.config.sidebar.width = width;
  }

  setSidebarCollapsedWidth(width: number): void {
    this.config.sidebar.collapsedWidth = width;
  }

  setSidebarColors(backgroundColor: string, textColor: string): void {
    this.config.sidebar.backgroundColor = backgroundColor;
    this.config.sidebar.textColor = textColor;
  }

  toggleSidebar(): void {
    this.config.sidebar.display = !this.config.sidebar.display;
  }

  // Header specific methods
  setHeaderHeight(height: number): void {
    this.config.header.height = height;
  }

  setHeaderColors(backgroundColor: string, textColor: string): void {
    this.config.header.backgroundColor = backgroundColor;
    this.config.header.textColor = textColor;
  }

  toggleHeader(): void {
    this.config.header.display = !this.config.header.display;
  }

  // Footer specific methods
  setFooterHeight(height: number): void {
    this.config.footer.height = height;
  }

  setFooterColors(backgroundColor: string, textColor: string): void {
    this.config.footer.backgroundColor = backgroundColor;
    this.config.footer.textColor = textColor;
  }

  toggleFooter(): void {
    this.config.footer.display = !this.config.footer.display;
  }

  // Theme specific methods
  setThemeMode(mode: 'light' | 'dark' | 'system'): void {
    this.updateColorsForMode(mode);
  }

  setPrimaryColor(color: string): void {
    this.config.theme.primaryColor = color;
  }

  // Content specific methods
  setContentMaxWidth(maxWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fluid'): void {
    this.config.content.maxWidth = maxWidth;
  }

  setContentFluid(fluid: boolean): void {
    this.config.content.fluid = fluid;
  }

  // Animation methods
  setAnimationDuration(duration: number): void {
    this.config.animation.duration = duration;
  }

  toggleTransitions(): void {
    this.config.animation.enableTransitions = !this.config.animation.enableTransitions;
  }

  // Get colors for specific component
  getComponentColors(component: 'sidebar' | 'header' | 'footer' | 'content', mode?: 'light' | 'dark' | 'system') {
    const themeMode = mode || this.config.theme.mode;
    const colors = getThemeColors(themeMode);

    switch (component) {
      case 'sidebar':
        return {
          backgroundColor: colors.background.primary,
          textColor: colors.text.primary,
          activeColor: colors.semantic.primary,
          activeBackgroundColor: colors.interactive.active,
          hoverBackgroundColor: colors.interactive.hover,
          borderColor: colors.border.primary,
        };
      case 'header':
        return {
          backgroundColor: colors.background.primary,
          textColor: colors.text.primary,
          borderColor: colors.border.primary,
        };
      case 'footer':
        return {
          backgroundColor: colors.background.primary,
          textColor: colors.text.secondary,
          borderColor: colors.border.primary,
        };
      case 'content':
        return {
          backgroundColor: colors.background.secondary,
        };
      default:
        return colors;
    }
  }
}

// Export the singleton instance
export const layoutConfigManager = LayoutConfigManager.getInstance();
