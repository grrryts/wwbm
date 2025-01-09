import { type Components, type Theme } from '@mui/material';

export const muiTypographyOverride: Partial<Components<Theme>> = {
  MuiTypography: {
    styleOverrides: {
      root: ({ theme: { palette } }) => ({
        userSelect: 'none',
        margin: 0,
        color: palette.text.primary,
      }),
      h1: ({ theme: { breakpoints, palette } }) => ({
        fontSize: '3.5rem', // 56px
        lineHeight: 1.16,
        fontWeight: 600,
        color: palette.text.primary,

        [breakpoints.down('sm')]: {
          fontSize: '2rem', // 32px
        },

        [breakpoints.up('xxl')]: {
          fontSize: '4rem', // 64px
        },

        [breakpoints.up('xxxl')]: {
          fontSize: '6rem', // 80px
        },
      }),
      h2: ({ theme: { breakpoints, palette } }) => ({
        fontSize: '2rem', // 32px
        lineHeight: 1.16,
        fontWeight: 600,
        color: palette.text.primary,

        [breakpoints.down('sm')]: {
          fontSize: '1.125rem', // 18px
        },
      }),
      subtitle1: ({ theme: { breakpoints, palette } }) => ({
        fontSize: '1.125rem', // 18px
        lineHeight: 1.16,
        fontWeight: 600,
        color: palette.text.primary,
        opacity: 0.5,

        [breakpoints.up('sm')]: {
          fontSize: '2rem', // 32px
        },

        [breakpoints.up('xxxl')]: {
          fontSize: '3rem', // 48px
        },
      }),
      body1: ({ theme: { breakpoints, palette } }) => ({
        fontSize: '1.25rem',
        lineHeight: 1.16,
        fontWeight: 400,
        color: palette.text.primary,

        [breakpoints.down('sm')]: {
          fontSize: '0.875rem',
        },
      }),
    },
    defaultProps: {
      variantMapping: {
        // Map the new variant to render a <tag> by default
        subtitle1: 'h2',
        subtitle2: 'p',
      },
    },
  },
};
