# Layout Configuration System

This system provides a comprehensive way to customize the layout of your application using Material-UI components.

## Features

- **Sidebar Configuration**: Width, colors, visibility, collapsible behavior
- **Header Configuration**: Height, colors, visibility, sticky behavior
- **Footer Configuration**: Height, colors, visibility, content options
- **Content Configuration**: Max width, fluid layout, padding
- **Theme Configuration**: Light/dark mode, primary colors
- **Animation Configuration**: Transition duration, enable/disable animations
- **Preset Configurations**: Default, dark, compact, wide layouts

## Quick Start

### 1. Using the Layout Settings UI

The easiest way to customize your layout is through the built-in settings panel:

```tsx
import { LayoutSettings } from './components/LayoutSettings';

// Add a settings button to your layout
<LayoutSettings open={settingsOpen} onClose={() => setSettingsOpen(false)} />;
```

### 2. Programmatic Configuration

You can also configure the layout programmatically:

```tsx
import { useLayoutConfig } from './core/useLayoutConfig';

const MyComponent = () => {
  const { config, setSidebarWidth, setHeaderHeight, setThemeMode, setPreset } = useLayoutConfig();

  // Change sidebar width
  setSidebarWidth(320);

  // Change header height
  setHeaderHeight(72);

  // Switch to dark mode
  setThemeMode('dark');

  // Use a preset
  setPreset('compact');

  return (
    <div>
      <p>Current sidebar width: {config.sidebar.width}px</p>
      <p>Current header height: {config.header.height}px</p>
    </div>
  );
};
```

## Configuration Options

### Sidebar Configuration

```tsx
sidebar: {
  width: 280,                    // Width when expanded
  collapsedWidth: 70,            // Width when collapsed
  backgroundColor: '#ffffff',    // Background color
  textColor: '#333333',         // Text color
  activeItemColor: '#1976d2',   // Active item color
  activeItemBackgroundColor: '#e3f2fd', // Active item background
  hoverItemBackgroundColor: '#f5f5f5',  // Hover item background
  borderColor: '#e0e0e0',       // Border color
  display: true,                // Show/hide sidebar
  collapsible: true,           // Allow collapsing
  showTooltips: true,          // Show tooltips when collapsed
}
```

### Header Configuration

```tsx
header: {
  height: 64,                   // Header height
  backgroundColor: '#ffffff',   // Background color
  textColor: '#333333',        // Text color
  borderColor: '#e0e0e0',      // Border color
  shadow: '0 2px 4px rgba(0,0,0,0.1)', // Box shadow
  display: true,               // Show/hide header
  sticky: true,               // Make header sticky
  showNotifications: true,    // Show notifications icon
  showUserMenu: true,        // Show user menu
}
```

### Footer Configuration

```tsx
footer: {
  height: 80,                  // Footer height
  backgroundColor: '#ffffff',  // Background color
  textColor: '#666666',       // Text color
  borderColor: '#e0e0e0',     // Border color
  display: true,              // Show/hide footer
  showLinks: true,           // Show footer links
  showCopyright: true,       // Show copyright text
}
```

### Content Configuration

```tsx
content: {
  backgroundColor: '#fafafa',   // Background color
  maxWidth: 'xl',             // Max width (xs, sm, md, lg, xl, false)
  fluid: false,               // Use fluid layout
  padding: {
    top: 24,
    bottom: 24,
    left: 24,
    right: 24,
  },
}
```

### Theme Configuration

```tsx
theme: {
  primaryColor: '#1976d2',     // Primary color
  secondaryColor: '#dc004e',   // Secondary color
  mode: 'light',              // 'light' or 'dark'
  borderRadius: 8,            // Border radius
  spacing: 8,                 // Base spacing
}
```

### Animation Configuration

```tsx
animation: {
  duration: 300,              // Animation duration in ms
  easing: 'ease-in-out',     // Animation easing
  enableTransitions: true,   // Enable/disable transitions
}
```

## Presets

The system includes several preset configurations:

- **default**: Standard layout with balanced spacing
- **dark**: Dark theme with appropriate colors
- **compact**: Smaller dimensions for space efficiency
- **wide**: Wider sidebar and fluid content

```tsx
// Use a preset
setPreset('dark');
setPreset('compact');
setPreset('wide');
setPreset('default');
```

## Examples

### Custom Sidebar Colors

```tsx
const { setSidebarColors } = useLayoutConfig();

// Set custom sidebar colors
setSidebarColors('#2c3e50', '#ecf0f1');
```

### Hide Header

```tsx
const { toggleHeader } = useLayoutConfig();

// Hide the header
toggleHeader();
```

### Change Content Layout

```tsx
const { setContentMaxWidth, setContentFluid } = useLayoutConfig();

// Make content fluid (full width)
setContentFluid(true);

// Set specific max width
setContentMaxWidth('lg');
```

### Custom Animation Duration

```tsx
const { setAnimationDuration } = useLayoutConfig();

// Set faster animations
setAnimationDuration(200);

// Set slower animations
setAnimationDuration(500);
```

## Integration with Existing Layout

The configuration system is designed to work seamlessly with your existing layout components. Simply import and use the `useLayoutConfig` hook in your layout components:

```tsx
// In your layout component
import { useLayoutConfig } from './core/useLayoutConfig';

const MyLayout = () => {
  const { config } = useLayoutConfig();

  return <Box sx={{ backgroundColor: config.content.backgroundColor }}>{/* Your layout content */}</Box>;
};
```

## Persistence

The configuration is stored in memory by default. To persist settings across sessions, you can extend the `LayoutConfigManager` to save/load from localStorage or your backend.

```tsx
// Example: Save to localStorage
const saveConfig = () => {
  localStorage.setItem('layoutConfig', JSON.stringify(config));
};

// Example: Load from localStorage
const loadConfig = () => {
  const saved = localStorage.getItem('layoutConfig');
  if (saved) {
    updateConfig(JSON.parse(saved));
  }
};
```

## Best Practices

1. **Use Presets**: Start with a preset that's close to your needs, then customize
2. **Test Responsiveness**: Always test your configuration on different screen sizes
3. **Accessibility**: Ensure color contrasts meet accessibility standards
4. **Performance**: Avoid changing configurations too frequently to prevent layout thrashing
5. **Consistency**: Use consistent spacing and colors throughout your configuration

## Troubleshooting

### Layout Not Updating

- Ensure you're using the `useLayoutConfig` hook in your components
- Check that the configuration changes are being applied correctly
- Verify that your components are re-rendering when config changes

### Styling Issues

- Make sure all color values are valid CSS colors
- Check that dimensions are positive numbers
- Verify that boolean values are properly set

### Performance Issues

- Consider disabling animations for better performance on low-end devices
- Use `setContentFluid(false)` for better performance with large content areas
