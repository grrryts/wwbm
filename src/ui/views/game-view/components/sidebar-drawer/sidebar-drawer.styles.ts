import { SxProps, useTheme } from '@mui/material';

export const useSidebarDrawerStyles = () => {
  const { palette, breakpoints } = useTheme();

  const drawer: SxProps = {
    [breakpoints.up('md')]: {
      minWidth: '23.5rem',
      width: '23.5rem',
    },

    '& .MuiDrawer-paper': {
      width: '100%',
      backgroundColor: palette.background.paper,
      pt: 2,
      pb: 4,
      borderLeft: 'none',

      [breakpoints.up('md')]: {
        minWidth: '23.5rem',
        maxWidth: '23.5rem',
        backgroundColor: palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },

      [breakpoints.up('xxxl')]: {
        minWidth: '30rem',
        maxWidth: '30rem',
      },
    },
  };

  const header: SxProps = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    px: 2,
    mb: 3,

    [breakpoints.up('md')]: {
      display: 'none',
    },
  };

  const closeButton: SxProps = {
    p: 0,
  };

  const content: SxProps = {
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return {
    drawer,
    header,
    content,
    closeButton,
  };
};
