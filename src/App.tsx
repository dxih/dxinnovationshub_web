import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { theme } from './theme';

import Navbar from './components/NavBar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import WhyDXIH from './components/WhyDXIH';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar />

      <Box component="main">
        <Routes>
          {/* Home / Landing Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ServiceCard />
                <Portfolio />
                <WhyDXIH />
              </>
            }
          />

          {/* Get Started Page */}
          <Route path="/start" element={<GetStarted />} />
        </Routes>
      </Box>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
