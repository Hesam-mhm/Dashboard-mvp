import { useAuth } from '../../../../../app/modules/auth';
import { SidebarMenuItem } from './SidebarMenuItem';
import { SidebarMenuItemWithSub } from './SidebarMenuItemWithSub';
import { SidebarMapper, SidebarEntry } from '../../../../../app/routing/SidebarMapper';
import { memo, useMemo } from 'react';

// *****************
// Dont touch this file( :)مگه این که باگ باشه)

function filterSidebarByRoles(entries: SidebarEntry[], userRole: string): SidebarEntry[] {
  const filtered = entries
    .map((entry) => {
      if ('children' in entry) {
        // for SidebarMenuItemWithSub
        if (!entry.roles || (entry.roles && !entry.roles.some((role) => userRole === role))) {
          return null; // the whole entry doesnt have access so delete this entry
        }
        // for filtering Subs
        const filteredChildren = entry.children.filter((child) => {
          if (!child.roles || child.roles.length === 0) return true;
          return child.roles.some((role) => userRole === role);
        });

        if (filteredChildren.length === 0) {
          return null; // if Subs of entry is empty , delete this entry
        }
        return {
          ...entry,
          children: filteredChildren,
        };
      } else {
        // for SidebarMenuItem
        if (!entry.roles || (entry.roles && !entry.roles.some((role) => userRole === role))) {
          return null;
        }
        return entry;
      }
    })
    .filter(Boolean) as SidebarEntry[];

  return filtered;
}

const SidebarMenuMain = memo(() => {
  // const { currentRole } = useAuth();

  const filteredSidebar = useMemo(() => {
    // if (!currentRole || currentRole === '') {
    return [];
    // }
    // return filterSidebarByRoles(SidebarMapper, currentRole);
  }, []);

  const renderSidebarEntry = (entry: SidebarEntry, index: number) => {
    if ('children' in entry) {
      return (
        <SidebarMenuItemWithSub key={index} to={entry.to} icon={entry.Icon} title={entry.title} activeRoutes={entry.activeRoutes}>
          {entry.children.map((child, i) => (
            <SidebarMenuItem key={i} to={child.to} hasBullet={child.hasBullet} title={child.title} Icon={child.Icon} />
          ))}
        </SidebarMenuItemWithSub>
      );
    } else {
      return <SidebarMenuItem key={index} to={entry.to} Icon={entry.Icon} title={entry.title} />;
    }
  };

  if (!filteredSidebar.length) {
    return null;
  }

  return <>{filteredSidebar.map(renderSidebarEntry)}</>;
});
export { SidebarMenuMain };
