const theme = {
  typography: {
    fontFamily: [
      'Karla',
      '"Helvetica Neue"',
      '-apple-system',
      'system-ui',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Helvetica',
      'Arial',
      'sans-serif'
    ].join(',')
  },
  breakpoints: {
    values: { xs: 0, sm: 768, md: 768, lg: 1150, xl: 1150 }
  },
  palette: {
    primary: {
      main: '#35373C',
      contrastText: '#FFFFFF'
    }
  }
};

/* Aliases */
// Breakpoints
Object.defineProperties(theme.breakpoints, {
  tablet: { get: () => theme.breakpoints.values.sm },
  desktop: { get: () => theme.breakpoints.values.lg },
  media: { value: (name) => `@media (min-width:${theme.breakpoints[name]}px)` }
});

export default theme;
