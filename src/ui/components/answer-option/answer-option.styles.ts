import { SxProps, useTheme } from '@mui/material';

export const useAnswerOptionStyles = () => {
  const { palette, breakpoints } = useTheme();

  const wrapper: SxProps = {
    position: 'relative',
    width: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '::before': {
      content: '""',
      position: 'absolute',
      display: 'block',
      width: '100%',
      height: '1px',
      backgroundColor: palette.secondary.main,
      top: '50%',
      transform: 'translate(0, -50%)',
      transition: 'all 0.3s ease-in-out',
    },
  };

  const shapeWrapper: SxProps = {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    px: 3,
    py: 2.5,
    width: 288,
    height: 56,

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

      path: {
        stroke: palette.secondary.main,
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
