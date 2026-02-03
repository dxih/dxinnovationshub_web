import GetStartedPage from "./Pages/GetStartedPage";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { theme } from "./theme";
import LandingPage from "./Pages/LandingPage";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
      // Only scroll to top if there's NO hash
      if (!hash) {
        window.scrollTo(0, 0);
      }
    }, [pathname, hash]);

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
          <Route path="/" element={<LandingPage />} />

          {/* Get Started Page */}
          <Route path="/start" element={<GetStartedPage />} />
        </Routes>
      </Box>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
