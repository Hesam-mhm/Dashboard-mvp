import { useState, useEffect, useCallback } from 'react';
import { layoutConfigManager, LayoutConfig, layoutPresets } from './LayoutConfig';
import { useThemeMode } from '../../partials/layout/theme-mode/ThemeModeProvider';

export const useLayoutConfig = () => {
  const [config, setConfig] = useState<LayoutConfig>(layoutConfigManager.getConfig());
  const { mode, updateMode } = useThemeMode();

  // Sync theme mode with layout config
  useEffect(() => {
    if (config.theme.mode !== mode) {
      layoutConfigManager.setThemeMode(mode);
      setConfig({ ...layoutConfigManager.getConfig() });
    }
  }, [mode, config.theme.mode]);

  // Update local state when config changes
  const updateConfig = useCallback((updates: Partial<LayoutConfig>) => {
    layoutConfigManager.updateConfig(updates);
    setConfig({ ...layoutConfigManager.getConfig() });
  }, []);

  // Set preset
  const setPreset = useCallback((presetName: keyof typeof layoutPresets) => {
    layoutConfigManager.setPreset(presetName);
    setConfig({ ...layoutConfigManager.getConfig() });
  }, []);

  // Sidebar methods
  const setSidebarWidth = useCallback((width: number) => {
    layoutConfigManager.setSidebarWidth(width);
    setConfig({ ...layoutConfigManager.getConfig() });
  }, []);

  const setSidebarCollapsedWidth = useCallback((width: number) => {
    layoutConfigManager.setSidebarCollapsedWidth(width);
    setConfig({ ...layoutConfigManager.getConfig() });
  }, []);

  const setSidebarColors = useCallback((backgroundColor: string, textColor: string) => {
    layoutConfigManager.setSidebarColors(backgroundColor, textColor);
    setConfig({ ...layoutConfigManager.getConfig() });
  }, []);

  const toggleSidebar = useCallback(() => {
    layoutConfigManager.toggleSidebar();
    setConfig({ ...layoutConfigManager.getConfig() });
  }, []);

  // Header methods
  const setHeaderHeight = useCallback((height: number) => {
    layoutConfigManager.setHeaderHeight(height);
    setConfig({ ...layoutConfigManager.getConfig() });
  }, []);

  const setHeaderColors = useCallback((backgroundColor: string, textColor: string) => {
    layoutConfigManager.setHeaderColors(backgroundColor, textColor);
    setConfig({ ...layoutConfigManager.getConfig() });
  }, []);

  const toggleHeader = useCallback(() => {
    layoutConfigManager.toggleHeader();
    setConfig({ ...layoutConfigManager.getConfig() });
  }, []);

  // Footer methods
  const setFooterHeight = useCallback((height: number) => {
    layoutConfigManager.setFooterHeight(height);
    setConfig({ ...layoutConfigManager.getConfig() });
  }, []);

  const setFooterColors = useCallback((backgroundColor: string, textColor: string) => {
    layoutConfigManager.setFooterColors(backgroundColor, textColor);
    setConfig({ ...layoutConfigManager.getConfig() });
  }, []);

  const toggleFooter = useCallback(() => {
    layoutConfigManager.toggleFooter();
    setConfig({ ...layoutConfigManager.getConfig() });
  }, []);

  // Theme methods
  const setThemeMode = useCallback(
    (mode: 'light' | 'dark' | 'system') => {
      updateMode(mode);
      layoutConfigManager.setThemeMode(mode);
      setConfig({ ...layoutConfigManager.getConfig() });
    },
    [updateMode],
  );

  const setPrimaryColor = useCallback((color: string) => {
    layoutConfigManager.setPrimaryColor(color);
    setConfig({ ...layoutConfigManager.getConfig() });
  }, []);

  // Content methods
  const setContentMaxWidth = useCallback((maxWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fluid') => {
    layoutConfigManager.setContentMaxWidth(maxWidth);
    setConfig({ ...layoutConfigManager.getConfig() });
  }, []);

  const setContentFluid = useCallback((fluid: boolean) => {
    layoutConfigManager.setContentFluid(fluid);
    setConfig({ ...layoutConfigManager.getConfig() });
  }, []);

  // Animation methods
  const setAnimationDuration = useCallback((duration: number) => {
    layoutConfigManager.setAnimationDuration(duration);
    setConfig({ ...layoutConfigManager.getConfig() });
  }, []);

  const toggleTransitions = useCallback(() => {
    layoutConfigManager.toggleTransitions();
    setConfig({ ...layoutConfigManager.getConfig() });
  }, []);

  return {
    config,
    updateConfig,
    setPreset,

    // Sidebar
    setSidebarWidth,
    setSidebarCollapsedWidth,
    setSidebarColors,
    toggleSidebar,

    // Header
    setHeaderHeight,
    setHeaderColors,
    toggleHeader,

    // Footer
    setFooterHeight,
    setFooterColors,
    toggleFooter,

    // Theme
    setThemeMode,
    setPrimaryColor,

    // Content
    setContentMaxWidth,
    setContentFluid,

    // Animation
    setAnimationDuration,
    toggleTransitions,
  };
};
