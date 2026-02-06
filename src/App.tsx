import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { theme } from "./theme";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import LandingPage from "./Pages/LandingPage";
import GetStartedPage from "./Pages/GetStartedPage";
import ComingSoon from "./Pages/ComingSoon";

function App() {
  const location = useLocation();

  // Determine if layout should be hidden (for Coming Soon pages)
  const hideLayout = location.pathname !== "/" && location.pathname !== "/start";

  // Scroll to top behavior on route change
  const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
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

      {/* Navbar visible only on main routes */}
      {!hideLayout && <Navbar />}

      <Box component="main">
        <Routes>
          {/* Home / Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Get Started Page */}
          <Route path="/start" element={<GetStartedPage />} />

          {/* Catch-all route → Coming Soon */}
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </Box>

      {/* Footer visible only on main routes */}
      {!hideLayout && <Footer />}
    </ThemeProvider>
  );
}

export default App;
