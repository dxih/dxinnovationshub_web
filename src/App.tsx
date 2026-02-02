import GetStartedPage from './Pages/GetStarted';
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
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function App() {
  const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
  return (
  
    <ThemeProvider theme={theme}>
      <ScrollToTop />
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
                <GetStarted />
              </>
            }
          />

          {/* Get Started Page */}
          <Route path="/start" element={<GetStartedPage />} />
        </Routes>
      </Box>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
