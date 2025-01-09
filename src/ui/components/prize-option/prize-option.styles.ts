import { SxProps, useTheme } from '@mui/material';

import { PrizeOptionShape } from '@/lib/types/prizes.types';

type Props = {
  state: PrizeOptionShape['state'];
};

export const usePrizeOptionStyles = ({ state }: Props) => {
  const { palette, breakpoints } = useTheme();

  const isActive = state === 'active';

  const wrapper: SxProps = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

    '::before': {
      content: '""',
      position: 'absolute',
      display: 'block',
      width: '100%',
      height: '1px',
      backgroundColor: isActive ? palette.primary.main : palette.secondary.main,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: -1,
      transition: 'all 0.3s ease-in-out',
    },

    svg: {
      width: 240,
      height: 32,
      transition: 'all 0.3s ease-in-out',

      [breakpoints.up('sm')]: {
        height: 40,
      },

      path: {
        stroke: isActive ? palette.primary.main : palette.secondary.main,
      },
    },
  };

  const prizeValue: SxProps = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: isActive
      ? palette.primary.main
      : state === 'completed'
        ? palette.secondary.main
        : palette.text.primary,
  };

  return {
    wrapper,
    prizeValue,
  };
};
