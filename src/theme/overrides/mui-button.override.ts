import { type Components, type Theme } from '@mui/material';

export const muiButtonOverride: Partial<Components<Theme>> = {
  MuiButton: {
    defaultProps: {
      disableTouchRipple: true,
      disableFocusRipple: true,
      disableRipple: true,
      variant: 'contained',
    },

    styleOverrides: {
      root: ({ theme: { spacing, shape, palette, breakpoints } }) => ({
        textTransform: 'initial',
        fontWeight: 600,
        color: palette.primary.contrastText,
        borderRadius: shape.borderRadius * 6,
        width: '100%',
        maxWidth: '18rem',
        fontSize: '0.875rem',
        padding: spacing(2, 3),

        [breakpoints.up('sm')]: {
          width: '18.5rem',
          maxWidth: 'unset',
          fontSize: '1.25rem',
          padding: spacing(2.5, 3),
        },

        [breakpoints.up('xxl')]: {
          width: '20rem',
          fontSize: '1.5rem',
          padding: spacing(3, 4),
        },

        [breakpoints.up('xxxl')]: {
          width: '22rem',
          fontSize: '2rem',
          padding: spacing(3.5, 4),
        },
      }),

      sizeMedium: ({ theme: { breakpoints } }) => ({
        height: 48,

        [breakpoints.up('sm')]: {
          height: 64,
        },

        [breakpoints.up('xxl')]: {
          height: 72,
        },

        [breakpoints.up('xxxl')]: {
          height: 88,
        },
      }),
    },

    variants: [
      {
        props: { variant: 'contained', color: 'primary' },
        style: ({ theme: { palette } }) => ({
          '&:hover': {
            backgroundColor: palette.action.hover,
            color: palette.primary.contrastText,
          },

          '&:active': {
            backgroundColor: palette.action.selected,
          },
        }),
      },
    ],
  },
};
