import { useState } from 'react';
import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemText, Container, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoImg from "../assets/Logo/Logo.png";

const navLinks = [
  { title: 'What We Do', id: '#what-we-do' },
  { title: 'Portfolio', id: '#portfolio' },
  { title: 'Why DXIH', id: '#why-dxih' },
  { title: 'Get Started', id: '#get-started' }
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  return (
    <AppBar 
      position="fixed" 
      elevation={0} 
      sx={{ 
        bgcolor: 'rgba(255, 255, 255, 0.9)', 
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid',
        borderColor: 'divider',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: { xs: 70, md: 85 }, justifyContent: 'space-between' }}>
          
          {/* LOGO CONTAINER */}
          <Box 
            component="a" 
            href="/" 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              height: '100%',
              transition: 'transform 0.2s ease',
              '&:hover': { transform: 'scale(1.03)' }
            }}
          >
            <Box
              component="img"
              src={LogoImg}
              alt="DXIH Logo"
              sx={{ 
                height: { xs: 35, md: 45 }, // Slightly larger for better visibility
                width: 'auto',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </Box>

          {/* DESKTOP NAV LINKS */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navLinks.map((link) => (
              <Button 
                key={link.title} 
                href={link.id}
                sx={{ 
                  color: 'secondary.main', 
                  textTransform: 'none', 
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  px: 2,
                  '&:hover': { color: 'primary.main', bgcolor: 'transparent' }
                }}
              >
                {link.title}
              </Button>
            ))}
          </Box>

          {/* DESKTOP CTAs */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
            <Button 
              sx={{ 
                color: 'secondary.main', 
                textTransform: 'none', 
                fontWeight: 700,
                fontSize: '0.875rem' 
              }}
            >
              Join as Talent
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              disableElevation
              href="#get-started"
              sx={{ 
                borderRadius: '6px', 
                textTransform: 'none', 
                fontWeight: 800,
                px: 3,
                color: 'secondary.main',
                '&:hover': { bgcolor: 'secondary.dark', color: 'white' }
              }}
            >
              Start With DXIH
            </Button>
          </Box>

          {/* MOBILE TOGGLE */}
          <IconButton 
            onClick={toggleDrawer} 
            sx={{ display: { md: 'none' }, color: 'secondary.main' }}
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
        PaperProps={{ sx: { width: 280, bgcolor: 'white' } }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
            <img src={LogoImg} alt="DXIH" style={{ height: '35px' }} />
          </Box>
          <Divider sx={{ mb: 2 }} />
          <List>
            {navLinks.map((item) => (
              <ListItem 
                key={item.title} 
                component="a" 
                href={item.id} 
                onClick={toggleDrawer}
                sx={{ borderRadius: '8px', mb: 1 }}
              >
                <ListItemText 
                  primary={item.title} 
                  primaryTypographyProps={{ fontWeight: 700, color: 'secondary.main' }} 
                />
              </ListItem>
            ))}
          </List>
          <Box sx={{ mt: 4, px: 2 }}>
            <Button 
              fullWidth 
              variant="outlined" 
              sx={{ mb: 2, borderRadius: '6px', fontWeight: 700, textTransform: 'none' }}
            >
              Join as Talent
            </Button>
            <Button 
              fullWidth 
              variant="contained" 
              color="primary" 
              sx={{ borderRadius: '6px', fontWeight: 800, textTransform: 'none', color: 'secondary.main' }}
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