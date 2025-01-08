import { type Components, type Theme } from '@mui/material';

export const muiButtonOverride: Partial<Components<Theme>> = {
  MuiButtonBase: {
    styleOverrides: {
      root: {},
    },
  },
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
        width: '18.5rem',
        fontSize: '1.25rem',
        fontWeight: 600,
        color: palette.primary.contrastText,
        borderRadius: shape.borderRadius * 6,
        padding: spacing(2.5, 3),

        [breakpoints.down('sm')]: {
          width: '100%',
          maxWidth: '18rem',
          fontSize: '0.875rem',
          padding: spacing(2, 3),
        },
      }),

      sizeMedium: ({ theme: { breakpoints } }) => ({
        height: 64,

        [breakpoints.down('sm')]: {
          height: 48,
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
