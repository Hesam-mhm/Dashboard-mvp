import { Card } from '@mui/material';
import React, { useState } from 'react';
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Switch,
  Slider,
  TextField,
  Button,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  useTheme,
} from '@mui/material';
import {
  Settings as SettingsIcon,
  Palette as PaletteIcon,
  ViewSidebar as SidebarIcon,
  ViewHeadline as HeaderIcon,
  ViewQuilt as FooterIcon,
  Article as ContentIcon,
  Animation as AnimationIcon,
  ExpandMore as ExpandMoreIcon,
  ColorLens as ColorLensIcon,
  Straighten as WidthIcon,
  Height as HeightIcon,
  Speed as SpeedIcon,
} from '@mui/icons-material';
import { useLayoutConfig } from '../../../_metronic/layout/core/useLayoutConfig';
import { layoutPresets } from '../../../_metronic/layout/core/LayoutConfig';

interface LayoutSettingsProps {
  open: boolean;
  onClose: () => void;
}

export const Home: React.FC<LayoutSettingsProps> = ({ open, onClose }) => {
  const theme = useTheme();
  const {
    config,
    setPreset,
    setSidebarWidth,
    setSidebarCollapsedWidth,
    setSidebarColors,
    toggleSidebar,
    setHeaderHeight,
    setHeaderColors,
    toggleHeader,
    setFooterHeight,
    setFooterColors,
    toggleFooter,
    setThemeMode,
    setPrimaryColor,
    setContentMaxWidth,
    setContentFluid,
    setAnimationDuration,
    toggleTransitions,
  } = useLayoutConfig();

  const [sidebarBgColor, setSidebarBgColor] = useState(config.sidebar.backgroundColor);
  const [sidebarTextColor, setSidebarTextColor] = useState(config.sidebar.textColor);
  const [headerBgColor, setHeaderBgColor] = useState(config.header.backgroundColor);
  const [headerTextColor, setHeaderTextColor] = useState(config.header.textColor);
  const [footerBgColor, setFooterBgColor] = useState(config.footer.backgroundColor);
  const [footerTextColor, setFooterTextColor] = useState(config.footer.textColor);

  const handlePresetChange = (presetName: keyof typeof layoutPresets) => {
    setPreset(presetName);
  };

  const handleSidebarColorsApply = () => {
    setSidebarColors(sidebarBgColor, sidebarTextColor);
  };

  const handleHeaderColorsApply = () => {
    setHeaderColors(headerBgColor, headerTextColor);
  };

  const handleFooterColorsApply = () => {
    setFooterColors(footerBgColor, footerTextColor);
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 400,
          p: 2,
        },
      }}
    >
      <Box sx={{ height: '100%', overflow: 'auto' }}>
        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
          <SettingsIcon />
          Layout Settings
        </Typography>

        {/* Presets */}
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ListItemIcon>
              <PaletteIcon />
            </ListItemIcon>
            <Typography>Presets</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
              {Object.keys(layoutPresets).map((preset) => (
                <Chip
                  key={preset}
                  label={preset}
                  onClick={() => handlePresetChange(preset as keyof typeof layoutPresets)}
                  variant={config === layoutPresets[preset as keyof typeof layoutPresets] ? 'filled' : 'outlined'}
                  color="primary"
                />
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Sidebar Settings */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ListItemIcon>
              <SidebarIcon />
            </ListItemIcon>
            <Typography>Sidebar</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Display Sidebar
                </Typography>
                <Switch checked={config.sidebar.display} onChange={toggleSidebar} color="primary" />
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Sidebar Width: {config.sidebar.width}px
                </Typography>
                <Slider
                  value={config.sidebar.width}
                  onChange={(_, value) => setSidebarWidth(value as number)}
                  min={200}
                  max={400}
                  step={10}
                  marks
                  valueLabelDisplay="auto"
                />
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Collapsed Width: {config.sidebar.collapsedWidth}px
                </Typography>
                <Slider
                  value={config.sidebar.collapsedWidth}
                  onChange={(_, value) => setSidebarCollapsedWidth(value as number)}
                  min={50}
                  max={100}
                  step={5}
                  marks
                  valueLabelDisplay="auto"
                />
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Background Color
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <TextField size="small" value={sidebarBgColor} onChange={(e) => setSidebarBgColor(e.target.value)} placeholder="#ffffff" />
                  <Button size="small" onClick={handleSidebarColorsApply}>
                    Apply
                  </Button>
                </Stack>
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Text Color
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <TextField size="small" value={sidebarTextColor} onChange={(e) => setSidebarTextColor(e.target.value)} placeholder="#333333" />
                  <Button size="small" onClick={handleSidebarColorsApply}>
                    Apply
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Header Settings */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ListItemIcon>
              <HeaderIcon />
            </ListItemIcon>
            <Typography>Header</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Display Header
                </Typography>
                <Switch checked={config.header.display} onChange={toggleHeader} color="primary" />
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Header Height: {config.header.height}px
                </Typography>
                <Slider
                  value={config.header.height}
                  onChange={(_, value) => setHeaderHeight(value as number)}
                  min={48}
                  max={80}
                  step={4}
                  marks
                  valueLabelDisplay="auto"
                />
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Background Color
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <TextField size="small" value={headerBgColor} onChange={(e) => setHeaderBgColor(e.target.value)} placeholder="#ffffff" />
                  <Button size="small" onClick={handleHeaderColorsApply}>
                    Apply
                  </Button>
                </Stack>
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Text Color
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <TextField size="small" value={headerTextColor} onChange={(e) => setHeaderTextColor(e.target.value)} placeholder="#333333" />
                  <Button size="small" onClick={handleHeaderColorsApply}>
                    Apply
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Footer Settings */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ListItemIcon>
              <FooterIcon />
            </ListItemIcon>
            <Typography>Footer</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Display Footer
                </Typography>
                <Switch checked={config.footer.display} onChange={toggleFooter} color="primary" />
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Footer Height: {config.footer.height}px
                </Typography>
                <Slider
                  value={config.footer.height}
                  onChange={(_, value) => setFooterHeight(value as number)}
                  min={40}
                  max={120}
                  step={10}
                  marks
                  valueLabelDisplay="auto"
                />
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Background Color
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <TextField size="small" value={footerBgColor} onChange={(e) => setFooterBgColor(e.target.value)} placeholder="#ffffff" />
                  <Button size="small" onClick={handleFooterColorsApply}>
                    Apply
                  </Button>
                </Stack>
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Text Color
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <TextField size="small" value={footerTextColor} onChange={(e) => setFooterTextColor(e.target.value)} placeholder="#666666" />
                  <Button size="small" onClick={handleFooterColorsApply}>
                    Apply
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Content Settings */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ListItemIcon>
              <ContentIcon />
            </ListItemIcon>
            <Typography>Content</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Max Width
                </Typography>
                <FormControl fullWidth size="small">
                  <Select value={config.content.maxWidth} onChange={(e) => setContentMaxWidth(e.target.value as any)}>
                    <MenuItem value="xs">Extra Small</MenuItem>
                    <MenuItem value="sm">Small</MenuItem>
                    <MenuItem value="md">Medium</MenuItem>
                    <MenuItem value="lg">Large</MenuItem>
                    <MenuItem value="xl">Extra Large</MenuItem>
                    <MenuItem value="fluid">Fluid</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Fluid Layout
                </Typography>
                <Switch checked={config.content.fluid} onChange={(_, checked) => setContentFluid(checked)} color="primary" />
              </Box>
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Theme Settings */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ListItemIcon>
              <ColorLensIcon />
            </ListItemIcon>
            <Typography>Theme</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Theme Mode
                </Typography>
                <FormControl fullWidth size="small">
                  <Select value={config.theme.mode} onChange={(e) => setThemeMode(e.target.value as 'light' | 'dark' | 'system')}>
                    <MenuItem value="light">Light</MenuItem>
                    <MenuItem value="dark">Dark</MenuItem>
                    <MenuItem value="system">System</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Primary Color
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <TextField size="small" value={config.theme.primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} placeholder="#1976d2" />
                </Stack>
              </Box>
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Animation Settings */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ListItemIcon>
              <AnimationIcon />
            </ListItemIcon>
            <Typography>Animation</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Enable Transitions
                </Typography>
                <Switch checked={config.animation.enableTransitions} onChange={toggleTransitions} color="primary" />
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Animation Duration: {config.animation.duration}ms
                </Typography>
                <Slider
                  value={config.animation.duration}
                  onChange={(_, value) => setAnimationDuration(value as number)}
                  min={100}
                  max={1000}
                  step={50}
                  marks
                  valueLabelDisplay="auto"
                />
              </Box>
            </Stack>
          </AccordionDetails>
        </Accordion>

        <Divider sx={{ my: 2 }} />

        <Button variant="contained" fullWidth onClick={onClose} sx={{ mt: 2 }}>
          Close Settings
        </Button>
      </Box>
    </Drawer>
  );
};
