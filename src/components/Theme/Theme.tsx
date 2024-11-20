import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { ThemeProps } from './Theme.types';
import { CssBaseline, getContrastRatio } from '@mui/material';

const gradientButton = ({ ownerState }: any) => ({
  ...(ownerState.variant === 'contained' && {
    background: 'linear-gradient(45deg, #209194 30%, #24bd96 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(79, 202, 171, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  }),
});

const MUIColor = (color: Record<number, string>) => ({
  100: color[100],
  200: color[200],
  300: color[300],
  light: color[400],
  main: color[500],
  dark: color[600],
  700: color[700],
  800: color[800],
  900: color[900],
  contrastText: getContrastRatio(color[500], '#fff') > 4 ? '#fff' : '#111',
});

const genesisBlue = {
  0o0: '#F7FDFD',
  100: '#D1F2F3',
  200: '#84DDE0',
  300: '#5DD3D7',
  400: '#2DA3A7',
  500: '#237E81',
  600: '#185A5C',
  700: '#0E3536',
  900: '#041010',
};

const genesisGreen = {
  300: '#2BDAAE',
  400: '#23B38F',
  500: '#1B8C70',
  600: '#146450',
  700: '#105141',
};

const genesisGrey = {
  100: '#CBD7D3',
  200: '#98AEA7',
  300: '#7E9A91',
  400: '#657B74',
  500: '#4C5C57',
  600: '#323E3A',
  700: '#262E2C',
  800: '#191F1D',
};

const white = genesisBlue[0o0];
const black = genesisBlue[900];

const spacing = {
  0: 2,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 24,
  6: 32,
  7: 40,
  8: 48,
  9: 64,
  10: 80,
  11: 96,
  12: 160,
};

declare module '@mui/material/styles' {
  interface Palette {
    genesisBlue: Palette['primary'];
    genesisGreen: Palette['primary'];
    genesisGrey: Palette['primary'];
    white: Palette['primary'];
    black: Palette['primary'];
  }

  interface PaletteOptions {
    genesisBlue?: PaletteOptions['primary'];
    genesisGreen?: PaletteOptions['primary'];
    genesisGrey?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
    black?: PaletteOptions['primary'];
  }

  interface PaletteColor {
    0o0?: string;
    100?: string;
    200?: string;
    300?: string;
    700?: string;
    800?: string;
    900?: string;
  }

  interface SimplePaletteColorOptions {
    0o0?: string;
    100?: string;
    200?: string;
    300?: string;
    700?: string;
    800?: string;
    900?: string;
  }
}

const themeOptions: ThemeOptions = {
  spacing: Object.values(spacing),
  palette: {
    mode: 'dark',
    genesisBlue: MUIColor(genesisBlue),
    genesisGreen: MUIColor(genesisGreen),
    genesisGrey: MUIColor(genesisGrey),
    white: { main: white },
    black: { main: black },
    primary: MUIColor(genesisBlue),
    secondary: MUIColor(genesisGreen),
    background: {
      default: genesisGrey[800],
      paper: genesisGrey[800],
    },
    text: {
      primary: white,
    },
  },
  typography: {
    fontFamily: 'Roboto',
    allVariants: {
      color: white,
    },
    h1: {
      fontFamily: ['Roboto Mono', 'monospace'].join(','),
      fontSize: 68,
      lineHeight: '110%',
      fontWeight: 700,
      '@media (max-width:1920px)': {
        fontSize: 60,
      },
      '@media (max-width:1200px)': {
        fontSize: 53,
      },
      '@media (max-width:500px)': {
        fontSize: 45,
      },
    },
    h2: {
      fontFamily: ['Roboto Mono', 'monospace'].join(','),
      fontSize: 58,
      lineHeight: '115%',
      fontWeight: 700,
      '@media (max-width:1920px)': {
        fontSize: 50,
      },
      '@media (max-width:1200px)': {
        fontSize: 45,
      },
      '@media (max-width:500px)': {
        fontSize: 40,
      },
    },
    h3: {
      fontFamily: ['Roboto Mono', 'monospace'].join(','),
      fontSize: 50,
      lineHeight: '115%',
      fontWeight: 700,
      '@media (max-width:1920px)': {
        fontSize: 44,
      },
      '@media (max-width:1200px)': {
        fontSize: 40,
      },
      '@media (max-width:500px)': {
        fontSize: 38,
      },
    },
    h4: {
      fontFamily: ['Roboto Mono', 'monospace'].join(','),
      fontSize: 44,
      lineHeight: '115%',
      fontWeight: 700,
      '@media (max-width:1920px)': {
        fontSize: 38,
      },
      '@media (max-width:1200px)': {
        fontSize: 34,
      },
    },
    h5: {
      fontFamily: ['Roboto Mono', 'monospace'].join(','),
      fontSize: 38,
      lineHeight: '120%',
      '@media (max-width:1920px)': {
        fontSize: 32,
      },
      '@media (max-width:1200px)': {
        fontSize: 30,
      },
    },
    h6: {
      fontFamily: ['Roboto Mono', 'monospace'].join(','),
      fontSize: 32,
      lineHeight: '125%',
      '@media (max-width:1920px)': {
        fontSize: 28,
      },
      '@media (max-width:1200px)': {
        fontSize: 25,
      },
    },
    subtitle1: undefined,
    subtitle2: undefined,
    body1: {
      fontSize: 28,
      lineHeight: '130%',
      '@media (max-width:1920px)': {
        fontSize: 24,
      },
      '@media (max-width:1200px)': {
        fontSize: 22,
      },
    },
    body2: {
      fontSize: 24,
      lineHeight: '130%',
      '@media (max-width:1920px)': {
        fontSize: 20,
      },
      '@media (max-width:1200px)': {
        fontSize: 18,
      },
    },
    button: {
      fontSize: 20,
      lineHeight: '135%',
      textTransform: 'uppercase',
      '@media (max-width:1920px)': {
        fontSize: 18,
      },
      '@media (max-width:1200px)': {
        fontSize: 16,
      },
    },
    caption: {
      fontSize: 20,
      lineHeight: '135%',
      '@media (max-width:1920px)': {
        fontSize: 18,
      },
      '@media (max-width:1200px)': {
        fontSize: 16,
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: gradientButton,
      },
    },
  },
};

const theme = createTheme(themeOptions);

const Theme: React.FC<ThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
