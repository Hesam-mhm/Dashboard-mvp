import React from 'react';
import { RouteMapper } from './RouteMapper/RouteMapper';
import { SolarHomeAngle2Outline } from '../Iconify/SolarHomeAngle2Outline';
import { SolarHome2Bold } from '../Iconify/SolarHome2Bold';
import { Roles } from '../constants/Roles';
import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  EmojiEvents as CompetitionsIcon,
  SportsVolleyball as GamesIcon,
  Apps as AppsIcon,
  MilitaryTech as CrownIcon,
  Logout as LogoutIcon,
  ArrowBack as BackIcon,
} from '@mui/icons-material';

export type SidebarItem = {
  title: string;
  to: string;
  outLinedIcon?: React.ReactElement;
  boldIcon?: React.ReactElement;
  hasBullet?: boolean;
  roles?: string[];
};

export type SidebarGroup = {
  title: string;
  to: string;
  icon: React.ReactElement;
  roles?: string[];
  children: SidebarItem[];
  activeRoutes?: string[];
};

export type SidebarEntry = SidebarItem | SidebarGroup;

export const SidebarMapper: SidebarEntry[] = [
  {
    title: 'پیشخوان',
    to: RouteMapper.Home.path,
    outLinedIcon: <DashboardIcon />,
    boldIcon: <DashboardIcon />,
    roles: [Roles.SystemManager],
  },
  {
    title: 'بیلدر داشبورد',
    to: RouteMapper.DashboardBuilder.path,
    outLinedIcon: <DashboardIcon />,
    boldIcon: <DashboardIcon />,
    roles: [Roles.SystemManager],
  },
  {
    title: 'نمودارها مثال',
    to: RouteMapper.ChartsExample.path,
    outLinedIcon: <DashboardIcon />,
    boldIcon: <DashboardIcon />,
    roles: [Roles.SystemManager],
  },
];
