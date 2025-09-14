import { COLORS } from '../../partials/layout/theme-mode/styled/constants';

/**
 * Utility functions for working with the centralized color system
 */

export type ThemeMode = 'light' | 'dark' | 'system';

/**
 * Get theme-aware colors based on the current theme mode
 */
export const getThemeColors = (mode: ThemeMode = 'light') => {
  const isDark = mode === 'dark';

  return {
    // Background colors
    background: {
      primary: isDark ? COLORS.COMMON.BLACK : COLORS.COMMON.WHITE,
      secondary: isDark ? COLORS.GREY[900] : COLORS.GREY[100],
      tertiary: isDark ? COLORS.GREY[800] : COLORS.GREY[200],
      card: isDark ? COLORS.GREY[800] : COLORS.COMMON.WHITE,
      paper: isDark ? COLORS.GREY[900] : COLORS.COMMON.WHITE,
    },
    // Text colors
    text: {
      primary: isDark ? COLORS.COMMON.WHITE : COLORS.COMMON.BLACK,
      secondary: isDark ? COLORS.GREY[400] : COLORS.GREY[600],
      tertiary: isDark ? COLORS.GREY[500] : COLORS.GREY[500],
      disabled: isDark ? COLORS.GREY[600] : COLORS.GREY[400],
      inverse: isDark ? COLORS.COMMON.BLACK : COLORS.COMMON.WHITE,
    },
    // Border colors
    border: {
      primary: isDark ? COLORS.GREY[800] : COLORS.GREY[200],
      secondary: isDark ? COLORS.GREY[700] : COLORS.GREY[300],
      focus: COLORS.PRIMARY.MAIN,
      error: COLORS.ERROR.MAIN,
      success: COLORS.SUCCESS.MAIN,
    },
    // Interactive colors
    interactive: {
      hover: isDark ? COLORS.GREY[900] : COLORS.GREY[100],
      active: isDark ? COLORS.PRIMARY.LIGHT[300] : COLORS.PRIMARY.LIGHT[100],
      focus: COLORS.PRIMARY.MAIN,
      selected: isDark ? COLORS.PRIMARY.LIGHT[200] : COLORS.PRIMARY.LIGHT[200],
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
    // Status colors
    status: {
      online: COLORS.SUCCESS.MAIN,
      offline: COLORS.GREY[500],
      busy: COLORS.ERROR.MAIN,
      away: COLORS.SECONDARY.MAIN,
    },
  };
};

/**
 * Get component-specific colors
 */
export const getComponentColors = (
  component: 'sidebar' | 'header' | 'footer' | 'content' | 'card' | 'button' | 'input' | 'table',
  mode: ThemeMode = 'light',
) => {
  const colors = getThemeColors(mode);

  switch (component) {
    case 'sidebar':
      return {
        backgroundColor: colors.background.primary,
        textColor: colors.text.primary,
        activeColor: colors.semantic.primary,
        activeBackgroundColor: colors.interactive.active,
        hoverBackgroundColor: colors.interactive.hover,
        borderColor: colors.border.primary,
        iconColor: colors.text.secondary,
      };
    case 'header':
      return {
        backgroundColor: colors.background.primary,
        textColor: colors.text.primary,
        borderColor: colors.border.primary,
        iconColor: colors.text.secondary,
        titleColor: colors.text.primary,
      };
    case 'footer':
      return {
        backgroundColor: colors.background.primary,
        textColor: colors.text.secondary,
        borderColor: colors.border.primary,
        linkColor: colors.text.secondary,
        linkHoverColor: colors.semantic.primary,
      };
    case 'content':
      return {
        backgroundColor: colors.background.secondary,
        textColor: colors.text.primary,
      };
    case 'card':
      return {
        backgroundColor: colors.background.card,
        textColor: colors.text.primary,
        borderColor: colors.border.primary,
        shadowColor: mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)',
      };
    case 'button':
      return {
        primary: {
          backgroundColor: colors.semantic.primary,
          textColor: colors.text.inverse,
          borderColor: colors.semantic.primary,
          hoverBackgroundColor: mode === 'dark' ? COLORS.PRIMARY.DARK[100] : COLORS.PRIMARY.LIGHT[300],
        },
        secondary: {
          backgroundColor: 'transparent',
          textColor: colors.semantic.primary,
          borderColor: colors.semantic.primary,
          hoverBackgroundColor: colors.interactive.hover,
        },
        text: {
          backgroundColor: 'transparent',
          textColor: colors.text.primary,
          borderColor: 'transparent',
          hoverBackgroundColor: colors.interactive.hover,
        },
      };
    case 'input':
      return {
        backgroundColor: colors.background.primary,
        textColor: colors.text.primary,
        borderColor: colors.border.primary,
        focusBorderColor: colors.border.focus,
        placeholderColor: colors.text.tertiary,
        disabledBackgroundColor: colors.background.secondary,
        disabledTextColor: colors.text.disabled,
      };
    case 'table':
      return {
        backgroundColor: colors.background.primary,
        textColor: colors.text.primary,
        borderColor: colors.border.primary,
        headerBackgroundColor: colors.background.secondary,
        headerTextColor: colors.text.primary,
        rowHoverBackgroundColor: colors.interactive.hover,
        selectedRowBackgroundColor: colors.interactive.selected,
      };
    default:
      return colors;
  }
};

/**
 * Get color with opacity
 */
export const withOpacity = (color: string, opacity: number): string => {
  // Convert hex to rgba
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

/**
 * Get color shade (lighter or darker)
 */
export const getColorShade = (color: string, amount: number): string => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  const newR = Math.max(0, Math.min(255, r + amount));
  const newG = Math.max(0, Math.min(255, g + amount));
  const newB = Math.max(0, Math.min(255, b + amount));

  return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
};

/**
 * Check if color is light or dark
 */
export const isLightColor = (color: string): boolean => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5;
};

/**
 * Get contrasting text color for a background
 */
export const getContrastTextColor = (backgroundColor: string): string => {
  return isLightColor(backgroundColor) ? COLORS.COMMON.BLACK : COLORS.COMMON.WHITE;
};

/**
 * Export the raw color constants for direct access
 */
export { COLORS };

/**
 * Common color aliases for quick access
 */
export const Colors = {
  // Primary colors
  primary: COLORS.PRIMARY.MAIN,
  primaryLight: COLORS.PRIMARY.LIGHT[100],
  primaryDark: COLORS.PRIMARY.DARK[100],

  // Secondary colors
  secondary: COLORS.SECONDARY.MAIN,
  secondaryLight: COLORS.SECONDARY.LIGHT[100],
  secondaryDark: COLORS.SECONDARY.DARK[100],

  // Semantic colors
  success: COLORS.SUCCESS.MAIN,
  error: COLORS.ERROR.MAIN,
  warning: COLORS.SECONDARY.MAIN,
  info: COLORS.PRIMARY.MAIN,

  // Neutral colors
  white: COLORS.COMMON.WHITE,
  black: COLORS.COMMON.BLACK,
  grey: COLORS.GREY,

  // Common combinations
  text: {
    primary: COLORS.COMMON.BLACK,
    secondary: COLORS.GREY[600],
    disabled: COLORS.GREY[400],
  },
  background: {
    primary: COLORS.COMMON.WHITE,
    secondary: COLORS.GREY[100],
  },
  border: {
    primary: COLORS.GREY[200],
    secondary: COLORS.GREY[300],
  },
} as const;
