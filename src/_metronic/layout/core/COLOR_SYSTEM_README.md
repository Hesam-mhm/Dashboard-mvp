# Centralized Color System

This document explains how to use the centralized color system for consistent and maintainable color management throughout the Volleyball Committee Frontend project.

## Overview

The color system is centralized in `/src/_metronic/partials/layout/theme-mode/styled/constants.ts` and provides:

- **Consistent colors** across the entire application
- **Theme-aware colors** that adapt to light/dark modes
- **Semantic color naming** for better maintainability
- **Type-safe color access** with TypeScript

## Color Constants

### Primary Colors

```typescript
import { COLORS } from '../../partials/layout/theme-mode/styled/constants';

// Main primary color (Red)
COLORS.PRIMARY.MAIN; // "#D71920"

// Light shades
COLORS.PRIMARY.LIGHT[100]; // "#FBDFE0"
COLORS.PRIMARY.LIGHT[200]; // "#F7CBCD"
// ... up to 700

// Dark shades
COLORS.PRIMARY.DARK[100]; // "#AD141A"
COLORS.PRIMARY.DARK[200]; // "#830F14"
// ... up to 500
```

### Secondary Colors

```typescript
// Main secondary color (Orange)
COLORS.SECONDARY.MAIN; // "#FFA500"

// Light and dark shades available
COLORS.SECONDARY.LIGHT[100]; // "#FFF2DB"
COLORS.SECONDARY.DARK[100]; // "#CC8400"
```

### Semantic Colors

```typescript
COLORS.SUCCESS.MAIN; // "#00B051" (Green)
COLORS.ERROR.MAIN; // "#FF0000" (Red)
```

### Neutral Colors

```typescript
COLORS.COMMON.WHITE; // "#FFFFFF"
COLORS.COMMON.BLACK; // "#1C1C1C"

// Grey scale
COLORS.GREY[100]; // "#F9F9F9" (lightest)
COLORS.GREY[200]; // "#EEEEEE"
COLORS.GREY[300]; // "#E2E2E2"
COLORS.GREY[400]; // "#C6C6C6"
COLORS.GREY[500]; // "#AAAAAA"
COLORS.GREY[600]; // "#8D8D8D"
COLORS.GREY[700]; // "#717171"
COLORS.GREY[800]; // "#555555"
COLORS.GREY[900]; // "#383838" (darkest)
```

## Usage Examples

### 1. Direct Color Usage

```typescript
import { COLORS } from '../../partials/layout/theme-mode/styled/constants';

// In component styles
const styles = {
  backgroundColor: COLORS.PRIMARY.MAIN,
  color: COLORS.COMMON.WHITE,
  borderColor: COLORS.GREY[200],
};
```

### 2. Theme-Aware Colors

```typescript
import { getThemeColors } from './ColorUtils';

const colors = getThemeColors('dark'); // or 'light'

const styles = {
  backgroundColor: colors.background.primary,
  textColor: colors.text.primary,
  borderColor: colors.border.primary,
};
```

### 3. Component-Specific Colors

```typescript
import { getComponentColors } from './ColorUtils';

const sidebarColors = getComponentColors('sidebar', 'light');
const buttonColors = getComponentColors('button', 'dark');

// Use in components
const SidebarComponent = () => (
  <div style={{ backgroundColor: sidebarColors.backgroundColor }}>
    <span style={{ color: sidebarColors.textColor }}>Menu Item</span>
  </div>
);
```

### 4. Layout Configuration

```typescript
import { layoutConfigManager } from './LayoutConfig';

// Update colors for current theme
layoutConfigManager.updateColorsForMode('dark');

// Get component colors
const sidebarColors = layoutConfigManager.getComponentColors('sidebar', 'dark');
```

## Color Utilities

### Color Manipulation

```typescript
import { withOpacity, getColorShade, isLightColor, getContrastTextColor } from './ColorUtils';

// Add opacity to color
const semiTransparent = withOpacity(COLORS.PRIMARY.MAIN, 0.5);

// Get lighter/darker shade
const lighter = getColorShade(COLORS.PRIMARY.MAIN, 20);
const darker = getColorShade(COLORS.PRIMARY.MAIN, -20);

// Check if color is light
const isLight = isLightColor(COLORS.PRIMARY.MAIN);

// Get contrasting text color
const textColor = getContrastTextColor(COLORS.PRIMARY.MAIN);
```

### Quick Color Access

```typescript
import { Colors } from './ColorUtils';

// Quick access to common colors
const styles = {
  primary: Colors.primary,
  success: Colors.success,
  error: Colors.error,
  white: Colors.white,
  black: Colors.black,

  // Common combinations
  textPrimary: Colors.text.primary,
  backgroundPrimary: Colors.background.primary,
  borderPrimary: Colors.border.primary,
};
```

## Best Practices

### 1. Always Use Centralized Colors

❌ **Don't use hardcoded colors:**

```typescript
const styles = {
  backgroundColor: '#D71920', // Don't do this
  color: '#ffffff', // Don't do this
};
```

✅ **Use centralized colors:**

```typescript
import { COLORS } from '../../partials/layout/theme-mode/styled/constants';

const styles = {
  backgroundColor: COLORS.PRIMARY.MAIN,
  color: COLORS.COMMON.WHITE,
};
```

### 2. Use Semantic Color Names

❌ **Don't use generic names:**

```typescript
const color = COLORS.GREY[500]; // Generic
```

✅ **Use semantic names:**

```typescript
const color = COLORS.PRIMARY.MAIN; // Semantic
const errorColor = COLORS.ERROR.MAIN; // Clear purpose
```

### 3. Consider Theme Mode

```typescript
import { getThemeColors } from './ColorUtils';

const MyComponent = ({ themeMode }) => {
  const colors = getThemeColors(themeMode);

  return (
    <div style={{ backgroundColor: colors.background.primary }}>
      <p style={{ color: colors.text.primary }}>Content</p>
    </div>
  );
};
```

### 4. Use Component-Specific Colors

```typescript
import { getComponentColors } from './ColorUtils';

const Button = ({ variant = 'primary', themeMode = 'light' }) => {
  const colors = getComponentColors('button', themeMode);
  const buttonColors = colors[variant];

  return (
    <button style={{
      backgroundColor: buttonColors.backgroundColor,
      color: buttonColors.textColor,
      borderColor: buttonColors.borderColor,
    }}>
      Click me
    </button>
  );
};
```

## Integration with Material-UI

The color system integrates seamlessly with Material-UI:

```typescript
import { createTheme } from '@mui/material/styles';
import { COLORS } from '../../partials/layout/theme-mode/styled/constants';

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY.MAIN,
      light: COLORS.PRIMARY.LIGHT[100],
      dark: COLORS.PRIMARY.DARK[100],
    },
    secondary: {
      main: COLORS.SECONDARY.MAIN,
      light: COLORS.SECONDARY.LIGHT[100],
      dark: COLORS.SECONDARY.DARK[100],
    },
    error: {
      main: COLORS.ERROR.MAIN,
    },
    success: {
      main: COLORS.SUCCESS.MAIN,
    },
  },
});
```

## Migration Guide

When updating existing components:

1. **Find hardcoded colors** in your component
2. **Replace with centralized colors** from `COLORS`
3. **Add theme awareness** if needed using `getThemeColors`
4. **Test in both light and dark modes**

### Example Migration

**Before:**

```typescript
const styles = {
  backgroundColor: '#D71920',
  color: '#ffffff',
  borderColor: '#e0e0e0',
};
```

**After:**

```typescript
import { COLORS } from '../../partials/layout/theme-mode/styled/constants';

const styles = {
  backgroundColor: COLORS.PRIMARY.MAIN,
  color: COLORS.COMMON.WHITE,
  borderColor: COLORS.GREY[200],
};
```

## File Structure

```
src/_metronic/
├── partials/layout/theme-mode/
│   ├── styled/
│   │   ├── constants.ts          # Main color definitions
│   │   ├── palette.ts           # Theme-aware palette creation
│   │   └── types.ts             # TypeScript types
│   └── ThemeModeProvider.tsx     # Theme context provider
└── layout/core/
    ├── LayoutConfig.ts          # Layout configuration with colors
    ├── ColorUtils.ts            # Color utility functions
    └── COLOR_SYSTEM_README.md   # This documentation
```

## Benefits

- **Consistency**: All colors come from a single source
- **Maintainability**: Change colors in one place
- **Theme Support**: Automatic light/dark mode adaptation
- **Type Safety**: TypeScript ensures correct color usage
- **Performance**: No runtime color calculations
- **Accessibility**: Proper contrast ratios maintained
