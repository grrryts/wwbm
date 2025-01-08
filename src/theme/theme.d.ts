import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true; // keeps the existing 'xs' breakpoint
    sm: true; // keeps the existing 'sm' breakpoint
    md: true; // keeps the existing 'md' breakpoint
    lg: true; // keeps the existing 'lg' breakpoint
    xl: true; // keeps the existing 'xl' breakpoint
    xxl: true; // adds the 'xxl' breakpoint
    xxxl: true; // adds the 'xxxl' breakpoint
  }
}
