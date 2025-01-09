import { SxProps, useTheme } from '@mui/material';

import { AnswerStatus } from './answer-option.types';

type Props = {
  status: AnswerStatus;
};

export const useAnswerOptionStyles = ({ status }: Props) => {
  const { palette, breakpoints } = useTheme();

  const getColor = (status: AnswerStatus) => {
    switch (status) {
      case 'correct':
        return { main: palette.success.main, light: palette.success.light };
      case 'wrong':
        return { main: palette.error.main, light: palette.error.light };
      default:
        return { main: palette.secondary.main, light: palette.common.white };
    }
  };

  const color = getColor(status);

  const wrapper: SxProps = {
    position: 'relative',
    width: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [breakpoints.up('md')]: {
      px: 2,
    },

    '::before': {
      content: '""',
      position: 'absolute',
      display: 'block',
      width: '100%',
      height: '1px',
      backgroundColor: color.main,
      top: '50%',
      transform: 'translate(0, -50%)',
      transition: 'all 0.3s ease-in-out',
    },

    ...(status === 'default' && {
      ':hover': {
        '::before': {
          backgroundColor: palette.primary.main,
        },
        path: {
          stroke: palette.primary.main,
        },
      },

      ':active': {
        '::before': {
          backgroundColor: palette.primary.main,
        },

        path: {
          stroke: palette.primary.main,
          fill: palette.primary.light,
        },
      },
    }),
  };

  const shapeWrapper: SxProps = {
    cursor: 'pointer',
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    px: 3,
    py: 2.5,
    width: 288,
    height: 56,

    [breakpoints.up('sm')]: {
      width: 389,
      height: 72,
      px: 4,
      py: 3,
    },

    [breakpoints.up('xxl')]: {
      width: 480,
      height: 96,
      px: 5,
      py: 4,
    },

    [breakpoints.up('xxxl')]: {
      width: 560,
      height: 120,
      px: 6,
      py: 5,
    },

    svg: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 288,
      height: 56,
      transition: 'all 0.3s ease-in-out',

      [breakpoints.up('sm')]: {
        width: 389,
        height: 72,
      },

      [breakpoints.up('xxl')]: {
        width: 480,
        height: 96,
      },

      [breakpoints.up('xxxl')]: {
        width: 560,
        height: 120,
      },

      path: {
        transition: 'all 0.3s ease-in-out',
        stroke: color.main,
        fill: color.light,
      },
    },
  };

  const contentWrapper: SxProps = {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 1,
  };

  const prefix: SxProps = {
    textTransform: 'uppercase',
    fontWeight: 600,
  };

  return {
    wrapper,
    shapeWrapper,
    contentWrapper,
    prefix,
  };
};
