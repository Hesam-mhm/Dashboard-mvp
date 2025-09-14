import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Avatar, Menu, MenuItem, Divider, useTheme, useMediaQuery } from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '../../../helpers';
import { useLayout } from '../../core';
import { useAuth } from '../../../../app/modules/auth';
import { useLayoutConfig } from '../../core/useLayoutConfig';
import { ThemeModeSwitcher } from '../../../partials/layout/theme-mode/ThemeModeSwitcher';
import { useSidebar } from '../../core/SidebarContext';

interface HeaderWrapperProps {
  onMobileMenuToggle?: () => void;
}

export function HeaderWrapper({ onMobileMenuToggle }: HeaderWrapperProps) {
  const { config: layoutConfig } = useLayout();
  const { config } = useLayoutConfig();
  const { currentFrappeUser, logout } = useAuth();
  const { isCollapsed } = useSidebar();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  if (!config.header.display) {
    return null;
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        width: {
          md: config.sidebar.display ? `calc(100% - ${isCollapsed ? config.sidebar.collapsedWidth : config.sidebar.width}px)` : '100%',
        },
        ml: {
          md: config.sidebar.display ? `${isCollapsed ? config.sidebar.collapsedWidth : config.sidebar.width}px` : 0,
        },
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: config.header.backgroundColor,
        color: config.header.textColor,
        boxShadow: config.header.shadow,
        borderBottom: `1px solid ${config.header.borderColor}`,
        height: config.header.height,
        transition: config.animation.enableTransitions
          ? theme.transitions.create(['width', 'margin-left'], {
              easing: theme.transitions.easing.sharp,
              duration: config.animation.duration,
            })
          : 'none',
      }}
    >
      <Toolbar>
        {/* Mobile menu button */}
        {isMobile && (
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={onMobileMenuToggle} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}

        {/* Logo for mobile */}
        {isMobile && (
          <Link to="/Home" style={{ textDecoration: 'none', marginRight: 16 }}>
            <img alt="Logo" src={toAbsoluteUrl('media/logos/Volleyball-Logomark.svg')} style={{ height: '32px' }} />
          </Link>
        )}

        {/* Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
          Volleyball Committee
        </Typography>

        {/* Right side actions */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Theme Mode Switcher */}
          <ThemeModeSwitcher />

          {/* Notifications */}
          <IconButton size="large" aria-label="show notifications" color="inherit" sx={{ color: theme.palette.text.secondary }}>
            <NotificationsIcon />
          </IconButton>

          {/* User menu */}
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
            sx={{ color: theme.palette.text.secondary }}
          >
            {currentFrappeUser?.user_image ? <Avatar src={currentFrappeUser.user_image} sx={{ width: 32, height: 32 }} /> : <AccountCircleIcon />}
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{
              '& .MuiPaper-root': {
                minWidth: 200,
                mt: 1,
              },
            }}
          >
            <MenuItem onClick={handleClose}>
              <PersonIcon sx={{ mr: 2 }} />
              Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <SettingsIcon sx={{ mr: 2 }} />
              Settings
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <LogoutIcon sx={{ mr: 2 }} />
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
