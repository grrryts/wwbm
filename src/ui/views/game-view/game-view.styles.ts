import { SxProps, useTheme } from '@mui/material';

export const useGameViewStyles = () => {
  const { palette, breakpoints } = useTheme();

  const wrapper: SxProps = {
    flex: 1,
    backgroundColor: palette.background.paper,
    pt: 2,
    pb: 3,
    display: 'flex',
    flexDirection: 'column',

    [breakpoints.up('md')]: {
      pr: 47,
      pl: 7.5,
      py: 7.5,
    },

    [breakpoints.up('lg')]: {
      pl: 10,
      pt: 16.5,
      pb: 15.25,
    },

    [breakpoints.up('xxxl')]: {
      pr: 60,
    },
  };

  const navBar: SxProps = {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    px: 2,

    [breakpoints.up('md')]: {
      display: 'none',
    },
  };

  const menuButton: SxProps = {
    p: 0,
  };

  const content: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,

    [breakpoints.up('md')]: {
      pr: 7.5,
      alignItems: 'flex-start',
    },

    [breakpoints.up('lg')]: {
      pr: 17.5,
    },

    [breakpoints.up('xxl')]: {
      alignItems: 'center',
    },
  };

  const questionWrapper: SxProps = {
    flex: 1,
    px: 2,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    [breakpoints.between('sm', 'md')]: {
      px: 5,
    },

    [breakpoints.up('md')]: {
      px: 0,
    },

    [breakpoints.up('lg')]: {
      textAlign: 'left',
      justifyContent: 'flex-start',
      maxWidth: '85%',
    },

    [breakpoints.up('xl')]: {
      maxWidth: '70%',
    },

    [breakpoints.up('xxl')]: {
      justifyContent: 'center',
    },
  };

  const answersWrapper: SxProps = {
    width: '100%',

    '> div': {
      width: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 1,

      [breakpoints.up('md')]: {
        maxWidth: '52.75rem',
      },

      [breakpoints.up('lg')]: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '0.5rem 0',
      },

      [breakpoints.up('xl')]: {
        width: '100%',
        maxWidth: 'unset',
      },
    },
  };

  const prizeList: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    gap: 1,

    [breakpoints.up('xxxl')]: {
      gap: 2.5,
    },
  };

  return {
    wrapper,
    navBar,
    menuButton,
    content,
    questionWrapper,
    answersWrapper,
    prizeList,
  };
};
