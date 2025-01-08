'use client';

import { type Shadows } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { muiButtonOverride } from '@/theme/overrides/mui-button.override';
import { muiCssBaseLineOverride } from '@/theme/overrides/mui-css-baseline.override';
import { muiTypographyOverride } from '@/theme/overrides/mui-typography.override';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
      xxxl: 2560,
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: ['Inter', 'Arial', 'sans-serif'].join(','),
  },
  shape: {
    borderRadius: 2, // one unit = 2px
  },
  shadows: Array(25).fill('none') as Shadows, // All shadows initial removing
  components: {
    ...muiCssBaseLineOverride,
    ...muiTypographyOverride,
    ...muiButtonOverride,
  },
  palette: {
    primary: {
      main: '#FF8B37',
      light: '#FFF3EB',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#D0D0D8',
      light: '#F5F5F7',
    },
    success: {
      main: '#47D867',
      light: '#E6FAEA',
    },
    error: {
      main: '#EC6259',
      light: '#FDEEED',
    },
    text: {
      primary: '#1C1C21',
      secondary: '#FF8B37',
      disabled: '#D0D0D8',
    },
    background: {
      default: '#FFFFFF',
    },
    common: {
      white: '#FFFFFF',
      black: '#000000',
    },
    action: {
      active: '#FF8B37',
      hover: '#FFAC70',
      selected: '#E87928',
    },
    divider: '#D0D0D8',
  },
});
