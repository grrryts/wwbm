import { DrawerProps, Theme, useMediaQuery } from '@mui/material';

export const useSidebarDrawerLogic = () => {
  const isPermanentDrawer = useMediaQuery(({ breakpoints }: Theme) =>
    breakpoints.up('md'),
  );

  const variant = (
    isPermanentDrawer ? 'permanent' : 'temporary'
  ) as DrawerProps['variant'];

  return {
    variant,
  };
};
