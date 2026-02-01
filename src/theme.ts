import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#FFC843' },
    secondary: { main: '#1A1F3D' },
    background: { default: '#F8FAFC', paper: '#ffffff' },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontWeight: 800, color: '#1A1F3D' },
    h2: { fontWeight: 700, color: '#1A1F3D' },
  },
  shape: { 
    borderRadius: 2 // This sets the global radius to 6px
  },
});