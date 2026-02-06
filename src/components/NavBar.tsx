import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Divider,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LogoImg from "../assets/Logo/Logo.png";

const navLinks = [
  { title: "What We Do", id: "what-we-do" },
  { title: "Portfolio", id: "portfolio" },
  { title: "Why DXIH", id: "why-dxih" },
  { title: "Get Started", id: "get-started" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (id: string) => {
    if (location.pathname !== "/") {
      // pass the id to scroll to via state
      navigate("/", { state: { scrollToId: id } });
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setMobileOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid",
        borderColor: "divider",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ height: { xs: 65, md: 70 }, justifyContent: "space-between" }}
        >
          {/* LOGO */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              transition: "transform 0.2s ease",
              "&:hover": { transform: "scale(1.02)" },
            }}
          >
            <Box
              component="img"
              src={LogoImg}
              alt="DXIH Logo"
              sx={{
                height: { xs: 60, md: 75 },
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* DESKTOP NAV */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}>
            {navLinks.map((link) => (
              <Button
                key={link.title}
                onClick={() => handleNavClick(link.id)}
                sx={{
                  color: "secondary.main",
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "0.8rem",
                  px: 3,
                  "&:hover": { color: "secondary.main", bgcolor: "primary.main", borderRadius: "10px" },
                }}
              >
                {link.title}
              </Button>
            ))}
          </Box>

          {/* DESKTOP CTAs */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Button
              component={Link}
              to="/start"
              disableElevation
              sx={{
                color: "secondary.main",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "0.8rem",
              }}
            >
              Join as Talent
            </Button>
            <Button
              component={Link}
              to="/start"
              variant="contained"
              color="primary"
              disableElevation
              sx={{
                borderRadius: "6px",
                textTransform: "none",
                fontWeight: 700,
                fontSize: "0.8rem",
                px: 2,
                py: 0.8,
                color: "secondary.main",
                "&:hover": { bgcolor: "secondary.main", color: "white" },
              }}
            >
              Start With DXIH
            </Button>
          </Box>

          <IconButton
            onClick={toggleDrawer}
            sx={{ display: { md: "none" }, color: "secondary.main" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        PaperProps={{ sx: { width: 280, bgcolor: "white" } }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ mb: 4, display: "flex", justifyContent: "center" }}>
            <img src={LogoImg} alt="DXIH" style={{ height: "30px" }} />
          </Box>
          <Divider sx={{ mb: 2 }} />
          <List>
            {navLinks.map((item, index) => (
              <ListItem
                key={item.title}
                onClick={() => handleNavClick(item.id)}
                sx={{
                  borderRadius: "10px",
                  mb: 0.8,
                  cursor: "pointer",

                  // 🎬 entrance animation
                  opacity: 0,
                  transform: "translateX(20px)",
                  animation: "slideIn 0.4s ease forwards",
                  animationDelay: `${index * 0.08}s`,

                  // 🖱️ interaction feedback
                  transition:
                    "background-color 0.25s ease, transform 0.25s ease",
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.04)",
                    transform: "translateX(4px)",
                  },
                  "&:active": {
                    transform: "scale(0.97)",
                  },
                }}
              >
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    color: "secondary.main",
                    fontSize: "0.95rem",
                  }}
                />
              </ListItem>
            ))}

            {/* Animation keyframes */}
            <style>
              {`
      @keyframes slideIn {
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
    `}
            </style>
          </List>

          <Box sx={{ mt: 3, px: 2 }}>
            <Button
              component={Link}
              to="/start"
              onClick={toggleDrawer}
              fullWidth
              variant="outlined"
              sx={{
                mb: 1.5,
                borderRadius: "6px",
                fontWeight: 600,
                fontSize: "0.85rem",
                textTransform: "none",
              }}
            >
              Join as Talent
            </Button>
            <Button
              fullWidth
              component={Link}
              to="/start"
              onClick={toggleDrawer}
              variant="contained"
              color="primary"
              sx={{
                borderRadius: "6px",
                fontWeight: 700,
                fontSize: "0.85rem",
                textTransform: "none",
                color: "secondary.main",
              }}
            >
              Start With DXIH
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
