import { useState } from 'react';

import { Theme, useMediaQuery } from '@mui/material';

export const useGameViewLogic = () => {
  const isInitialOpen = useMediaQuery(({ breakpoints }: Theme) =>
    breakpoints.up('md'),
  );

  const [open, setOpen] = useState(isInitialOpen);
  const onToggleDrawer = () => setOpen((prev) => !prev);

  return {
    open,
    onToggleDrawer,
    showNav: !isInitialOpen,
  };
};
