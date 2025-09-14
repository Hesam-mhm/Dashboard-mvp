import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, IconButton, useTheme, useMediaQuery, Button, Stack, alpha } from '@mui/material';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  EmojiEvents as CompetitionsIcon,
  SportsVolleyball as GamesIcon,
  Apps as AppsIcon,
  MilitaryTech as CrownIcon,
  Logout as LogoutIcon,
  ArrowBack as BackIcon,
} from '@mui/icons-material';
import { useLocation, Link } from 'react-router-dom';
import { useLayout } from '../../core';
import { SidebarMapper, SidebarEntry } from '../../../../app/routing/SidebarMapper';
import { useAuth } from '../../../../app/modules/auth';
import { toAbsoluteUrl } from '../../../helpers';
import { useLayoutConfig } from '../../core/useLayoutConfig';
import { useSidebar } from '../../core/SidebarContext';

const DRAWER_WIDTH = 280;
const DRAWER_WIDTH_COLLAPSED = 70;

const Sidebar = () => {
  const { config: layoutConfig } = useLayout();
  const { config } = useLayoutConfig();
  const { currentFrappeRoles } = useAuth();
  const { isCollapsed, toggleCollapse } = useSidebar();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Use the collapsed state from context
  const open = !isCollapsed;

  useEffect(() => {
    updateDOM(config);
    if (sidebarRef.current) {
      sidebarRef.current.style.height = '100vh';
      sidebarRef.current.style.overflowY = 'auto';
      sidebarRef.current.style.overflowX = 'hidden';
    }
  }, [config]);

  if (!config.sidebar.display) {
    return null;
  }

  const handleDrawerToggle = () => {
    toggleCollapse();
  };

  const isItemActive = (to: string, activeRoutes?: string[]) => {
    if (activeRoutes && activeRoutes.length > 0) {
      return activeRoutes.some((route) => location.pathname.startsWith(route));
    }
    return location.pathname === to || location.pathname.startsWith(to);
  };

  // Filter sidebar items based on user roles
  const filteredSidebar = SidebarMapper.filter((entry) => {
    console.log(entry);
    if ('children' in entry) {
      if (!entry.roles || !entry.roles.some((role) => currentFrappeRoles.includes(role))) {
        return false;
      }
      const filteredChildren = entry.children.filter((child) => {
        if (!child.roles || child.roles.length === 0) return true;
        return child.roles.some((role) => currentFrappeRoles.includes(role));
      });
      return filteredChildren.length > 0;
    } else {
      if (!entry.roles || !entry.roles.some((role) => currentFrappeRoles.includes(role))) {
        return false;
      }
      return true;
    }
  });

  return (
    <Box
      sx={{
        width: open ? config.sidebar.width : config.sidebar.collapsedWidth,
        background: 'linear-gradient(180deg, #6CACE6 0%, #2B5CAB 100%)', // Blue gradient background
        transition: config.animation.enableTransitions
          ? theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: config.animation.duration,
            })
          : 'none',
        overflowX: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        direction: 'rtl', // RTL for Persian text
      }}
    >
      <Box
        ref={sidebarRef}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        {/* Header Section */}
        {/* <Box
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'end',
            pl: 2,
            mt: 2,
            mb: 2,
            minHeight: 80,
            backgroundColor: 'transparent',
          }}
        >
          <img alt="Logo" src={toAbsoluteUrl('media/logos/Volleyball-Logomark.svg')} className="h-25px app-sidebar-logo-default" />
        </Box> */}

        {/* Menu Items */}
        <Box sx={{ flexGrow: 1, px: 2, pb: 2, mt: 2 }}>
          <Stack spacing={1}>
            {filteredSidebar.map((item, index) => {
              const isActive = isItemActive(item.to, 'activeRoutes' in item ? item.activeRoutes : undefined);
              return (
                <Box
                  key={index}
                  component={Link}
                  to={item.to}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    overflow: 'hidden',
                    spacing: 1,
                    textDecoration: 'none',
                    backgroundColor: 'transparent',
                    // '&:hover': {
                    //   backgroundColor: isActive ? '#f5f5f5' : '#64b5f6',
                    // },
                    boxShadow: isActive ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
                  }}
                >
                  {/* Text Area - Large left part */}
                  <Box
                    sx={{
                      // flex: 1,
                      width: 180,
                      py: 1.5,
                      px: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '12px',
                      backgroundColor: isActive ? theme.palette.common.white : (theme) => alpha(theme.palette.primary.light, 0.2),
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: isActive ? theme.palette.primary.main : theme.palette.common.white,
                        textAlign: 'right',
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>

                  {/* Icon Area - Small right part */}
                  <Box
                    sx={{
                      // flex: 0.5,
                      width: 55,
                      height: 48,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: isActive ? theme.palette.common.white : alpha(theme.palette.primary.light, 0.2),
                    }}
                  >
                    {React.cloneElement('outLinedIcon' in item ? item.outLinedIcon! : <DashboardIcon />, {
                      sx: {
                        fontSize: 20,
                        color: isActive ? theme.palette.primary.main : theme.palette.common.white,
                      },
                    })}
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            p: 2,
            borderTop: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          <Stack direction="row" gap={1}>
            <Button
              variant="text"
              sx={{
                width: '180px',
                backgroundColor: alpha(theme.palette.common.white, 0.2),
                color: 'white',
                borderRadius: '12px',
                py: 1.5,
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '0.8rem',
                '&:hover': {
                  backgroundColor: '#64b5f6',
                },
              }}
            >
              خروج
            </Button>
            <Button
              variant="text"
              sx={{
                width: '60px',
                backgroundColor: alpha(theme.palette.common.white, 0.2),
                color: 'white',
                borderRadius: '12px',
                py: 1.5,
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '0.8rem',
                '&:hover': {
                  backgroundColor: '#64b5f6',
                },
              }}
            >
              <BackIcon sx={{ fontSize: 20 }} />
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

const updateDOM = (config: any) => {
  if (config.layoutType === 'dark-sidebar' || config.layoutType === 'light-sidebar') {
    if (config.app?.sidebar?.default?.minimize?.desktop?.enabled) {
      if (config.app?.sidebar?.default?.minimize?.desktop?.default) {
        document.body.setAttribute('data-kt-app-sidebar-minimize', 'on');
      }

      if (config.app?.sidebar?.default?.minimize?.desktop?.hoverable) {
        document.body.setAttribute('data-kt-app-sidebar-hoverable', 'true');
      }
    }

    if (config.app?.sidebar?.default?.minimize?.mobile?.enabled) {
      if (config.app?.sidebar?.default?.minimize?.mobile?.default) {
        document.body.setAttribute('data-kt-app-sidebar-minimize-mobile', 'on');
      }

      if (config.app?.sidebar?.default?.minimize?.mobile?.hoverable) {
        document.body.setAttribute('data-kt-app-sidebar-hoverable-mobile', 'true');
      }
    }

    if (config.app?.sidebar?.default?.collapse?.desktop?.enabled) {
      if (config.app?.sidebar?.default?.collapse?.desktop?.default) {
        document.body.setAttribute('data-kt-app-sidebar-collapse', 'on');
      }
    }

    if (config.app?.sidebar?.default?.collapse?.mobile?.enabled) {
      if (config.app?.sidebar?.default?.collapse?.mobile?.default) {
        document.body.setAttribute('data-kt-app-sidebar-collapse-mobile', 'on');
      }
    }

    if (config.app?.sidebar?.default?.push) {
      if (config.app?.sidebar?.default?.push?.header) {
        document.body.setAttribute('data-kt-app-sidebar-push-header', 'true');
      }

      if (config.app?.sidebar?.default?.push?.toolbar) {
        document.body.setAttribute('data-kt-app-sidebar-push-toolbar', 'true');
      }

      if (config.app?.sidebar?.default?.push?.footer) {
        document.body.setAttribute('data-kt-app-sidebar-push-footer', 'true');
      }
    }

    if (config.app?.sidebar?.default?.stacked) {
      document.body.setAttribute('app-sidebar-stacked', 'true');
    }

    document.body.setAttribute('data-kt-app-sidebar-enabled', 'true');
    document.body.setAttribute('data-kt-app-sidebar-fixed', config.app?.sidebar?.default?.fixed?.desktop?.toString() || '');

    const appSidebarDefaultDrawerEnabled = config.app?.sidebar?.default?.drawer?.enabled;
    let appSidebarDefaultDrawerAttributes: { [attrName: string]: string } = {};
    if (appSidebarDefaultDrawerEnabled) {
      appSidebarDefaultDrawerAttributes = config.app?.sidebar?.default?.drawer?.attributes as {
        [attrName: string]: string;
      };
    }

    const appSidebarDefaultStickyEnabled = config.app?.sidebar?.default?.sticky?.enabled;
    let appSidebarDefaultStickyAttributes: { [attrName: string]: string } = {};
    if (appSidebarDefaultStickyEnabled) {
      appSidebarDefaultStickyAttributes = config.app?.sidebar?.default?.sticky?.attributes as {
        [attrName: string]: string;
      };
    }

    setTimeout(() => {
      const sidebarElement = document.getElementById('kt_app_sidebar');
      // sidebar
      if (sidebarElement) {
        const sidebarAttributes = sidebarElement.getAttributeNames().filter((t) => t.indexOf('data-') > -1);
        sidebarAttributes.forEach((attr) => sidebarElement.removeAttribute(attr));

        if (appSidebarDefaultDrawerEnabled) {
          for (const key in appSidebarDefaultDrawerAttributes) {
            if (appSidebarDefaultDrawerAttributes.hasOwnProperty(key)) {
              sidebarElement.setAttribute(key, appSidebarDefaultDrawerAttributes[key]);
            }
          }
        }

        if (appSidebarDefaultStickyEnabled) {
          for (const key in appSidebarDefaultStickyAttributes) {
            if (appSidebarDefaultStickyAttributes.hasOwnProperty(key)) {
              sidebarElement.setAttribute(key, appSidebarDefaultStickyAttributes[key]);
            }
          }
        }
      }
    }, 0);
  }
};

export { Sidebar };
