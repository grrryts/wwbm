import { Theme, useMediaQuery } from '@mui/material';

export const usePrizeOptionLogic = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );

  return {
    isMobile,
  };
};
