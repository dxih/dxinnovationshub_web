import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#FDCB07' },      // Dxih primary blue
    secondary: { main: '#010A45' },    // Dxih primary yellow
    background: { default: '#F8FAFC', paper: '#FFFFFF' },
  },
  typography: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    h1: { fontWeight: 800, color: '#010A45' },
    h2: { fontWeight: 700, color: '#010A45' },
  },
  shape: {
    borderRadius: 2,
  },
});
