import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#FFC843' },       // keep your yellow accent
    secondary: { main: '#334574' },     // lighter navy blue
    background: { default: '#F8FAFC', paper: '#ffffff' },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontWeight: 800, color: '#334574' }, // update headings too
    h2: { fontWeight: 700, color: '#334574' },
  },
  shape: { 
    borderRadius: 2 // global border radius
  },
});
