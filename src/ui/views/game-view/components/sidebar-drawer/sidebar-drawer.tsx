import React, { memo } from 'react';

import { Box, Drawer, IconButton, SvgIcon } from '@mui/material';

import { useSidebarDrawerLogic } from './sidebar-drawer.logic';
import { useSidebarDrawerStyles } from './sidebar-drawer.styles';
import { icons } from '@/lib/constants/icons.constants';

type SidebarDrawerProps = {
  open: boolean;
  onToggleDrawer: () => void;
  children: React.ReactNode;
};

const SidebarDrawer = memo<SidebarDrawerProps>(
  ({ children, open, onToggleDrawer }) => {
    const { variant } = useSidebarDrawerLogic();
    const sx = useSidebarDrawerStyles();

    return (
      <Drawer
        anchor="right"
        variant={variant}
        open={open}
        sx={sx.drawer}
        hideBackdrop
      >
        <Box sx={sx.header}>
          <IconButton sx={sx.closeButton} onClick={onToggleDrawer}>
            <SvgIcon component={icons.closeIcon} inheritViewBox />
          </IconButton>
        </Box>

        <Box sx={sx.content}>{children}</Box>
      </Drawer>
    );
  },
);

SidebarDrawer.displayName = 'SidebarDrawer';

export default SidebarDrawer;
