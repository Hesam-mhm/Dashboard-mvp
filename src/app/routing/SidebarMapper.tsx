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
import { SolarGraphBoldDuotone } from '../Iconify/SolarGraphBoldDuotone';

export type SidebarItem = {
  title: string;
  to: string;
  Icon?: React.ReactElement;
  boldIcon?: React.ReactElement;
  hasBullet?: boolean;
  roles?: string[];
};

export type SidebarGroup = {
  title: string;
  to: string;
  Icon: React.ReactElement;
  roles?: string[];
  children: SidebarItem[];
  activeRoutes?: string[];
};

export type SidebarEntry = SidebarItem | SidebarGroup;

export const SidebarMapper: SidebarEntry[] = [
  {
    title: 'داشبورد ها',
    to: RouteMapper.dashboards.path,
    Icon: <SolarGraphBoldDuotone />,
    boldIcon: <SolarGraphBoldDuotone />,
    roles: [Roles.SystemManager],
  },
  {
    title: 'داشبورد',
    to: RouteMapper.Home.path,
    Icon: <SolarGraphBoldDuotone />,
    boldIcon: <SolarGraphBoldDuotone />,
    roles: [Roles.SystemManager],
  },
  {
    title: 'نمودارها مثال',
    to: RouteMapper.ChartsExample.path,
    Icon: <DashboardIcon />,
    boldIcon: <DashboardIcon />,
    roles: [Roles.SystemManager],
  },
];
