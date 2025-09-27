import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, IconButton, useTheme, useMediaQuery, Button, Stack, alpha } from '@mui/material';
import { useLocation, Link } from 'react-router-dom';
import { useLayout } from '../../core';
import { SidebarMapper } from '../../../../app/routing/SidebarMapper';
import { useAuth } from '../../../../app/modules/auth';
import { toAbsoluteUrl } from '../../../helpers';
import { useLayoutConfig } from '../../core/useLayoutConfig';
import { useSidebar } from '../../core/SidebarContext';
import { SolarLogoutBoldDuotone } from '../../../../app/Iconify/SolarLogoutBoldDuotone';
import { SolarEyeOutline } from '../../../../app/Iconify/SolarEyeOutline';
import SimpleDialog from '../../../../app/components/organize/SimpleDialog';

const Sidebar = () => {
  const { config } = useLayoutConfig();
  const { isCollapsed, toggleCollapse } = useSidebar();
  const theme = useTheme();
  const location = useLocation();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [showDialog, setShowDialog] = useState<boolean>(false);

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

  const updatedSidebarMapper = SidebarMapper;
  const filteredSidebar = updatedSidebarMapper.filter((entry) => {
    return true;
    // if ('children' in entry) {
    //   if (!entry.roles || !entry.roles.some((role) => currentRole === role)) {
    //     return false;
    //   }
    //   const filteredChildren = entry.children.filter((child) => {
    //     if (!child.roles || child.roles.length === 0) return true;
    //     return child.roles.some((role) => currentRole === role);
    //   });
    //   return filteredChildren.length > 0;
    // } else {
    //   if (!entry.roles || !entry.roles.some((role) => currentRole === role)) {
    //     return false;
    //   }
    //   return true;
    // }
  });

  const handleLogout = () => {
    setShowDialog(false);
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        width: open ? config.sidebar.width : config.sidebar.collapsedWidth,
        background: 'linear-gradient(180deg, #6CACE6 0%, #2B5CAB 100%)', // Blue gradient background
        transition: config.animation.enableTransitions
          ? theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: config.animation.duration,
            })
          : 'none',
        overflow: 'hidden',
        display: 'flex',
        // height: '100vh',
        flexDirection: 'column',
        direction: 'rtl',
        m: 2,
        borderRadius: '12px',
        height: 'calc(100vh - 32px)',
      }}
    >
      {!isCollapsed ? (
        <Box
          ref={sidebarRef}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          {/* Header Section */}
          <Box
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
            <img
              alt="Logo"
              src={toAbsoluteUrl('media/logos/SmartDashboard.svg')}
              style={{ borderRadius: '12px' }}
              className="h-25px app-sidebar-logo-default"
            />
          </Box>
          {/* Menu Items */}
          <Box sx={{ flexGrow: 1, px: 2, pb: 2 }}>
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
                        backgroundColor: isActive ? theme.palette.common.white : (theme) => alpha(theme.palette.primary.light, 0.1),
                        '&:hover': {
                          backgroundColor: isActive ? '#f5f5f5' : '#64b5f6',
                        },
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
                        '&:hover': {
                          backgroundColor: isActive ? '#f5f5f5' : '#64b5f6',
                        },
                      }}
                    >
                      {React.cloneElement('Icon' in item ? item.Icon! : <SolarEyeOutline />, {
                        style: {
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

          <Stack direction="row" gap={1.5} sx={{ p: 2 }}>
            <Button
              variant="text"
              onClick={() => setShowDialog(true)}
              sx={{
                width: '180px',
                backgroundColor: alpha(theme.palette.common.white, 0.2),
                color: 'white',
                borderRadius: '12px',
                py: 1.5,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '14px',
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
                width: 55,
                minWidth: 55,
                height: 48,
                backgroundColor: alpha(theme.palette.common.white, 0.2),
                color: 'white',
                borderRadius: '12px',
                p: 2,
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '0.8rem',
                transition: 'transform 0.3s ease-in-out',
                transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
                '&:hover': {
                  backgroundColor: '#64b5f6',
                },
              }}
              onClick={handleDrawerToggle}
            >
              <SolarLogoutBoldDuotone />
            </Button>
          </Stack>
        </Box>
      ) : (
        <Box
          ref={sidebarRef}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
          }}
        >
          {/* Header Section */}
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 80,
              mt: 2,
              mb: 2,
              backgroundColor: 'transparent',
            }}
          >
            <img
              alt="Logo"
              width={60}
              src={toAbsoluteUrl('media/logos/DashboardCollapsedIcon.svg')}
              style={{ borderRadius: '12px' }}
              className="h-25px app-sidebar-logo-default"
            />
          </Box>
          {/* Menu Items */}
          <Box sx={{ flexGrow: 1, px: 2, pb: 2 }}>
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
                      boxShadow: isActive ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
                    }}
                  >
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
                        '&:hover': {
                          backgroundColor: isActive ? '#f5f5f5' : '#64b5f6',
                        },
                      }}
                    >
                      {React.cloneElement('Icon' in item ? item.Icon! : <SolarEyeOutline />, {
                        style: {
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

          <Button
            onClick={handleDrawerToggle}
            sx={{
              width: 55,
              minWidth: 55, // key to stop minimum width expansion
              height: 48,
              p: 2,
              m: 2,
              backgroundColor: alpha(theme.palette.common.white, 0.2),
              color: 'white',
              borderRadius: '12px',
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '0.8rem',
              transition: 'transform 0.3s ease-in-out',
              transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
              '&:hover': { backgroundColor: '#64b5f6' },
            }}
          >
            <SolarLogoutBoldDuotone />
          </Button>
        </Box>
      )}
      <SimpleDialog
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        buttonOnclick={handleLogout}
        dialogContentText="آیا می خواهید از حساب خود خارج شوید؟"
        dialogTitle="خروج"
        mainButtonTitle="خروج"
      />
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
