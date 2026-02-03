import { useEffect, useState, useRef } from "react";
import { Box, Container, Typography, Grid, Divider } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import LogoImg from "../assets/Logo/Logo.png";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  const footerRevealStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "scale(1)" : "scale(0.99)",
    transition:
      "opacity 1.2s ease-out, transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)",
  };

  // NEW: Handle footer navigation
  const handleFooterNav = (id: string) => {
    if (location.pathname !== "/") {
      // navigate to home with state
      navigate("/", { state: { scrollToId: id } });
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box
      id="footer"
      ref={domRef}
      sx={{
        bgcolor: "secondary.main",
        color: "white",
        pt: 8,
        pb: 4,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ ...footerRevealStyle }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          {/* Logo Section */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
            <Box
              component="img"
              src={LogoImg}
              alt="DXIH Logo"
              sx={{
                height: { xs: 40, md: 50 },
                width: "auto",
                filter: "brightness(0) invert(1)",
                opacity: 0.9,
                transition: "opacity 0.3s ease",
                "&:hover": { opacity: 1 },
              }}
            />
          </Box>

          {/* Navigation Links */}
          <Grid container spacing={1} justifyContent="center" sx={{ mb: 6 }}>
            {["What We Do", "Portfolio", "Why DXIH", "Get Started"].map(
              (item) => {
                const id = item.toLowerCase().replace(/\s+/g, "-");
                return (
                  <Grid item key={item}>
                    <Typography
                      onClick={() =>
                        item === "Get StartedS"
                          ? navigate("/start")
                          : handleFooterNav(id)
                      }
                      sx={{
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                         mx: { xs: 1, sm: 2 }, 
                        whiteSpace: "nowrap",
                        cursor: "pointer",
                        transition: "0.3s",
                        "&:hover": {
                          color: "primary.main",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      {item}
                    </Typography>
                  </Grid>
                );
              },
            )}
          </Grid>

          <Divider
            sx={{
              borderColor: "rgba(255,255,255,0.05)",
              mb: 4,
              maxWidth: "400px",
              mx: "auto",
            }}
          />

          <Typography
            variant="caption"
            sx={{ color: "rgba(255,255,255,0.25)", letterSpacing: 1 }}
          >
            © {new Date().getFullYear()} DXIH INNOVATION HUB.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
