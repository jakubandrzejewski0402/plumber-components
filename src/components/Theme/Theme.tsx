import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { ThemeProps } from './Theme.types';
import { CssBaseline } from '@mui/material';

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

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#209194',
    },
    secondary: {
      main: '#24bd96',
    },
    background: {
      default: '#1a1a1a',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#eaebe6',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    allVariants: {
      color: '#eaebe6',
    },
    h1: {
      fontFamily: 'Roboto',
    },
    h2: {
      fontFamily: 'Roboto',
    },
    h3: {
      fontFamily: 'Roboto',
    },
    h4: {
      fontFamily: 'Roboto',
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
