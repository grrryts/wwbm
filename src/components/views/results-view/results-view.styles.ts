import { CSSProperties } from 'react';

import { SxProps, useTheme } from '@mui/material';

export const useResultsViewStyles = () => {
  const { breakpoints } = useTheme();

  const wrapper: SxProps = {
    flex: 1,
    px: 2,
    py: 6,

    [breakpoints.up('sm')]: {
      px: 10,
    },

    [breakpoints.between('sm', 'lg')]: {
      py: 10,
    },

    [breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  const content: SxProps = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr 1fr',
    height: '100%',
    alignItems: 'center',
    justifyItems: 'center',
    gap: 4,

    [breakpoints.between('sm', 'lg')]: {
      gap: 5,
    },

    [breakpoints.up('lg')]: {
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr',
      height: 'auto',
      mt: -8.75,
    },
  };

  const imageWrapper: SxProps = {
    position: 'relative',
    width: '100%',
    height: '12rem',
    alignSelf: 'flex-end',

    [breakpoints.between('sm', 'lg')]: {
      height: '15rem',
    },

    [breakpoints.up('lg')]: {
      width: '39rem',
      height: '22.9375rem',
      alignSelf: 'center',
      justifySelf: 'flex-end',
    },

    [breakpoints.up('xxl')]: {
      width: '42rem',
      height: '25rem',
    },

    [breakpoints.up('xxxl')]: {
      width: '55rem',
      height: '32rem',
    },
  };

  const image: CSSProperties = {
    objectFit: 'contain',
    objectPosition: 'center',
  };

  const actionsWrapper: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',

    [breakpoints.up('sm')]: {
      maxWidth: '38rem',
    },

    [breakpoints.up('lg')]: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      justifySelf: 'flex-start',
      textAlign: 'left',
      gap: 8,
    },

    [breakpoints.up('xxl')]: {
      maxWidth: '42rem',
    },

    [breakpoints.up('xxxl')]: {
      maxWidth: '55rem',
      gap: 10,
    },
  };

  const actionsScoreWrapper: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,

    [breakpoints.up('xxxl')]: {
      gap: 1.5,
    },
  };

  return {
    wrapper,
    content,
    imageWrapper,
    image,
    actionsWrapper,
    actionsScoreWrapper,
  };
};
