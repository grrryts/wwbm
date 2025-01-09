import React, { memo } from 'react';

import { Box, Drawer, IconButton, SvgIcon } from '@mui/material';

import { useSidebarDrawerLogic } from './sidebar-drawer.logic';
import { useSidebarDrawerStyles } from './sidebar-drawer.styles';
import { icons } from '@/constants/icons.constants';

type TSidebarDrawerProps = {
  open: boolean;
  onToggleDrawer: () => void;
};

const SidebarDrawer = memo<TSidebarDrawerProps>(({ open, onToggleDrawer }) => {
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

      <Box sx={sx.content}>content</Box>
    </Drawer>
  );
});

SidebarDrawer.displayName = 'SidebarDrawer';

export default SidebarDrawer;
