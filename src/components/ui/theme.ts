import { createTheme } from '@mui/material/styles';
import { gradients } from '../../lib/constants/gradients';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1',
      light: '#818cf8',
      dark: '#4f46e5',
    },
    secondary: {
      main: '#a855f7',
      light: '#c084fc',
      dark: '#9333ea',
    },
    background: {
      default: '#000000',
      paper: 'rgba(17, 17, 17, 0.8)',
    },
  },
  typography: {
    fontFamily: '"Inter", "system-ui", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '0.75rem',
          padding: '0.75rem 1.5rem',
          background: gradients.button,
          '&:hover': {
            background: gradients.buttonHover,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(17, 17, 17, 0.8)',
          backdropFilter: 'blur(16px)',
        },
      },
    },
  },
});