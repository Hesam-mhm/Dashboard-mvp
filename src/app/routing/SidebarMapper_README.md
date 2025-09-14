# SidebarMapper Documentation

## Overview

The `SidebarMapper` is used to define the sidebar menu structure for the application. It supports both simple menu items and menu groups with children.

## Types

### SidebarItem

A simple menu item without children:

```typescript
export type SidebarItem = {
  title: string; // Display name of the menu item
  to: string; // Route path
  outLinedIcon?: React.ReactElement; // Icon for normal state
  boldIcon?: React.ReactElement; // Icon for active state
  hasBullet?: boolean; // Show bullet point instead of icon
  roles?: string[]; // Required roles to see this item
};
```

### SidebarGroup

A menu item with children (submenu):

```typescript
export type SidebarGroup = {
  title: string; // Display name of the menu group
  to: string; // Route path (optional for groups)
  icon: React.ReactElement; // Icon for the group
  roles?: string[]; // Required roles to see this group
  children: SidebarItem[]; // Array of child menu items
  activeRoutes?: string[]; // Routes that make this group active
};
```

## How to Add Menu Items

### 1. Simple Menu Item

```typescript
{
  title: 'خانه',
  to: RouteMapper.Home.path,
  outLinedIcon: <SolarHomeAngle2Outline />,
  boldIcon: <SolarHome2Bold />,
  roles: [Roles.SystemManager],
}
```

### 2. Menu Group with Children

```typescript
{
  title: 'مدیریت سیستم',
  to: '/system',
  icon: <SolarHome2Bold />,
  roles: [Roles.SystemManager],
  activeRoutes: ['/system', '/users', '/settings'],
  children: [
    {
      title: 'کاربران',
      to: '/users',
      hasBullet: true,
      roles: [Roles.SystemManager],
    },
    {
      title: 'تنظیمات',
      to: '/settings',
      hasBullet: true,
      roles: [Roles.SystemManager],
    },
  ],
}
```

### 3. Menu Item with Bullet

```typescript
{
  title: 'گزارش‌ها',
  to: '/reports',
  hasBullet: true,  // Shows bullet instead of icon
  roles: [Roles.SystemManager],
}
```

## Available Icons

You can use any Material-UI icons or custom icons from the Iconify folder:

### Material-UI Icons

```typescript
import {
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Business as BusinessIcon,
  Assessment as AssessmentIcon,
  Inventory as InventoryIcon,
  LocalShipping as LocalShippingIcon,
  Receipt as ReceiptIcon,
  Group as GroupIcon,
  Assignment as AssignmentIcon,
  CalendarToday as CalendarIcon,
  Notifications as NotificationsIcon,
  Help as HelpIcon,
} from '@mui/icons-material';
```

### Custom Icons

```typescript
import { SolarHomeAngle2Outline } from '../Iconify/SolarHomeAngle2Outline';
import { SolarHome2Bold } from '../Iconify/SolarHome2Bold';
```

## Role-Based Access Control

Each menu item can have a `roles` array that defines which user roles can see the item:

```typescript
roles: [Roles.SystemManager, Roles.Admin];
```

If no roles are specified, the item will be visible to all users.

## Active State

- For simple items: Active when current route matches `to`
- For groups: Active when current route matches any route in `activeRoutes` or any child route

## Examples

### Complete Example

```typescript
export const SidebarMapper: SidebarEntry[] = [
  // Home page
  {
    title: 'خانه',
    to: RouteMapper.Home.path,
    outLinedIcon: <SolarHomeAngle2Outline />,
    boldIcon: <SolarHome2Bold />,
    roles: [Roles.SystemManager],
  },

  // Dashboard
  {
    title: 'داشبورد',
    to: '/dashboard',
    outLinedIcon: <DashboardIcon />,
    boldIcon: <DashboardIcon />,
    roles: [Roles.SystemManager],
  },

  // System Management Group
  {
    title: 'مدیریت سیستم',
    to: '/system',
    icon: <SettingsIcon />,
    roles: [Roles.SystemManager],
    activeRoutes: ['/system', '/users', '/settings', '/logs'],
    children: [
      {
        title: 'کاربران',
        to: '/users',
        hasBullet: true,
        roles: [Roles.SystemManager],
      },
      {
        title: 'تنظیمات',
        to: '/settings',
        hasBullet: true,
        roles: [Roles.SystemManager],
      },
      {
        title: 'گزارش‌ها',
        to: '/logs',
        hasBullet: true,
        roles: [Roles.SystemManager],
      },
    ],
  },

  // Reports Group
  {
    title: 'گزارش‌ها',
    to: '/reports',
    icon: <AssessmentIcon />,
    roles: [Roles.SystemManager, Roles.Admin],
    activeRoutes: ['/reports', '/reports/sales', '/reports/users'],
    children: [
      {
        title: 'گزارش فروش',
        to: '/reports/sales',
        hasBullet: true,
        roles: [Roles.SystemManager],
      },
      {
        title: 'گزارش کاربران',
        to: '/reports/users',
        hasBullet: true,
        roles: [Roles.Admin],
      },
    ],
  },
];
```

## Best Practices

1. **Use descriptive titles**: Make sure menu titles are clear and descriptive
2. **Group related items**: Use menu groups to organize related functionality
3. **Use appropriate icons**: Choose icons that represent the functionality
4. **Set proper roles**: Always specify roles for security
5. **Use activeRoutes**: For groups, specify all routes that should make the group active
6. **Keep it organized**: Maintain a logical order and grouping of menu items

## Troubleshooting

### Menu item not showing

- Check if user has the required roles
- Verify the route path is correct
- Ensure the item is properly added to the array

### Group not expanding

- Check if `activeRoutes` includes the current route
- Verify the group has children
- Ensure the user has permission to see the group

### Icons not showing

- Import the icon correctly
- Use the correct icon component
- For custom icons, ensure they're properly exported
