import { Theme, useMediaQuery } from '@mui/material';

export const useAnswerOptionLogic = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );

  return {
    isMobile,
  };
};
