import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, Container, useTheme, useMediaQuery, Drawer, useScrollTrigger, Fab, Zoom, Toolbar } from '@mui/material';
import { KeyboardArrowUp as KeyboardArrowUpIcon, Settings as SettingsIcon } from '@mui/icons-material';
import { HeaderWrapper } from './components/header';
import { RightToolbar } from '../partials/layout/RightToolbar';
import { ScrollTop } from './components/scroll-top';
import { FooterWrapper } from './components/footer';
import { Sidebar } from './components/sidebar';
import { ActivityDrawer, DrawerMessenger, InviteUsers, UpgradePlan } from '../partials';
import { PageDataProvider } from './core';
import { reInitMenu } from '../helpers';
import { useLayout } from './core';
import { useLayoutConfig } from './core/useLayoutConfig';
import { LayoutSettings } from './components/LayoutSettings';
import { SidebarProvider, useSidebar } from './core/SidebarContext';

// Scroll to top component
function ScrollToTop(props: { children: React.ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={trigger}>
      <Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}>
        {children}
      </Box>
    </Zoom>
  );
}

const MasterLayoutContent = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { config: layoutConfig } = useLayout();
  const { config } = useLayoutConfig();
  const { isCollapsed } = useSidebar();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);

  useEffect(() => {
    reInitMenu();
  }, [location.key]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSettingsToggle = () => {
    setSettingsOpen(!settingsOpen);
  };

  return (
    <PageDataProvider>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        {/* Header */}
        <HeaderWrapper onMobileMenuToggle={handleDrawerToggle} />

        {/* Sidebar */}
        {config.sidebar.display && (
          <Box
            component="nav"
            sx={{
              width: {
                md: isCollapsed ? config.sidebar.collapsedWidth : config.sidebar.width,
              },
              flexShrink: { md: 0 },
              display: { xs: 'none', md: 'block' },
              transition: config.animation.enableTransitions
                ? theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: config.animation.duration,
                  })
                : 'none',
            }}
          >
            <Sidebar />
          </Box>
        )}

        {/* Mobile Sidebar */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: config.sidebar.width,
            },
          }}
        >
          <Sidebar />
        </Drawer>

        {/* Main content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: {
              md: config.sidebar.display ? `calc(100% - ${isCollapsed ? config.sidebar.collapsedWidth : config.sidebar.width}px)` : '100%',
            },
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            transition: config.animation.enableTransitions
              ? theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: config.animation.duration,
                })
              : 'none',
          }}
        >
          {/* Toolbar spacer */}
          {config.header.display && <Toolbar />}

          {/* Content area */}
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              minHeight: config.header.display ? `calc(100vh - ${config.header.height}px)` : '100vh',
            }}
          >
            {/* Main content */}
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: config.content.padding.top,
                backgroundColor: config.content.backgroundColor,
              }}
            >
              <Container
                maxWidth={config.content.maxWidth === 'fluid' ? false : config.content.maxWidth}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box sx={{ flexGrow: 1 }}>
                  <Outlet />
                </Box>
              </Container>
            </Box>

            {/* Footer */}
            {config.footer.display && <FooterWrapper />}
          </Box>
        </Box>

        {/* Scroll to top button */}
        <ScrollToTop>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollToTop>

        {/* Settings button */}
        <Fab
          color="secondary"
          size="small"
          aria-label="layout settings"
          onClick={handleSettingsToggle}
          sx={{
            position: 'fixed',
            bottom: 16,
            left: 16,
            zIndex: 1000,
          }}
        >
          <SettingsIcon />
        </Fab>

        {/* Layout Settings */}
        <LayoutSettings open={settingsOpen} onClose={handleSettingsToggle} />

        {/* Additional components */}
        {/* <ActivityDrawer /> */}
        {/* <RightToolbar /> */}
        {/* <DrawerMessenger /> */}
        {/* <InviteUsers /> */}
        {/* <UpgradePlan /> */}
      </Box>
    </PageDataProvider>
  );
};

const MasterLayout = () => {
  return (
    <SidebarProvider>
      <MasterLayoutContent />
    </SidebarProvider>
  );
};

export { MasterLayout };
