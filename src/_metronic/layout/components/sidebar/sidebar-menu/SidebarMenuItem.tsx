import { FC, ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { checkIsActive, WithChildren } from '../../../../helpers';
import { useLayout } from '../../../core';
import { Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import { DotIcon } from '../../../../../app/Iconify/DotIcon';

type Props = {
  to: string;
  title: string;
  Icon?: ReactElement;
  // boldIcon?: ReactElement;
  fontIcon?: string;
  hasBullet?: boolean;
  isSubMenuChild?: boolean;
};

const SidebarMenuItem: FC<Props & WithChildren> = ({ children, to, title, Icon, hasBullet = false, isSubMenuChild = false }) => {
  const { pathname } = useLocation();
  const isActive = checkIsActive(pathname, to);
  const { config } = useLayout();
  const { app } = config;

  const theme = useTheme();

  return (
    <Link
      style={{
        backgroundColor: isActive ? theme.palette.common.white : theme.palette.primary.main,
        display: 'flex',
        width: '100%',
        height: 56,
        borderRadius: '8px',
        textDecoration: 'none',
        margin: '8px 0',
        padding: '0 16px',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: isActive ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
      }}
      className={clsx('menu-link without-sub', { active: isActive })}
      to={to}
    >
      {/* Text on the left */}
      <Typography
        fontSize={'14px'}
        fontWeight={500}
        color={isActive ? theme.palette.primary.main : theme.palette.common.white}
        sx={{
          textAlign: 'right',
          fontFamily: 'inherit',
        }}
      >
        {title}
      </Typography>

      {/* Icons on the right */}
      <Stack direction="row" alignItems="center" spacing={1}>
        {hasBullet && (
          <DotIcon
            style={{
              color: isActive ? theme.palette.primary.main : theme.palette.common.white,
              fontSize: '16px',
            }}
          />
        )}

        {Icon &&
          React.cloneElement(Icon, {
            style: {
              color: isActive ? theme.palette.primary.main : theme.palette.common.white,
              fontSize: '20px',
            },
          })}
      </Stack>
      {children}
    </Link>
  );
};

export { SidebarMenuItem };
