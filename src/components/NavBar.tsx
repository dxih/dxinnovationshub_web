import { useState } from 'react';
import { 
  AppBar, Toolbar, Box, Button, IconButton, Drawer, List, 
  ListItem, ListItemText, Container, Divider 
} from '@mui/material';
import { Link } from 'react-router-dom'; // Added this for navigation
import MenuIcon from '@mui/icons-material/Menu';
import LogoImg from "../assets/Logo/Logo.png";

const navLinks = [
  { title: 'What We Do', id: '#what-we-do' },
  { title: 'Portfolio', id: '#portfolio' },
  { title: 'Why DXIH', id: '#why-dxih' }
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
        <Toolbar disableGutters sx={{ height: { xs: 65, md: 70 }, justifyContent: 'space-between' }}>
          
          {/* LOGO */}
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', height: '100%', transition: 'transform 0.2s ease', '&:hover': { transform: 'scale(1.02)' } }}>
            <Box component="img" src={LogoImg} alt="DXIH Logo" sx={{ height: { xs: 30, md: 35 }, width: 'auto', objectFit: 'contain' }} />
          </Box>

          {/* DESKTOP NAV */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {navLinks.map((link) => (
              <Button key={link.title} href={link.id} sx={{ color: 'secondary.main', textTransform: 'none', fontWeight: 500, fontSize: '0.8rem', px: 1.5, '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}>
                {link.title}
              </Button>
            ))}
          </Box>

          {/* DESKTOP CTAs */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1.5 }}>
            <Button component={Link}
              to="/start" sx={{ color: 'secondary.main', textTransform: 'none', fontWeight: 600, fontSize: '0.8rem' }}>Join as Talent</Button>
            <Button 
              component={Link}
              to="/start"
              variant="contained" 
              color="primary" 
              disableElevation
              sx={{ borderRadius: '6px', textTransform: 'none', fontWeight: 700, fontSize: '0.8rem', px: 2, py: 0.8, color: 'secondary.main', '&:hover': { bgcolor: 'secondary.main', color: 'white' } }}
            >
              Start With DXIH
            </Button>
          </Box>

          <IconButton onClick={toggleDrawer} sx={{ display: { md: 'none' }, color: 'secondary.main' }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer} PaperProps={{ sx: { width: 280, bgcolor: 'white' } }}>
        <Box sx={{ p: 3 }}>
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
            <img src={LogoImg} alt="DXIH" style={{ height: '30px' }} />
          </Box>
          <Divider sx={{ mb: 2 }} />
          <List>
            {navLinks.map((item) => (
              <ListItem key={item.title} component="a" href={item.id} onClick={toggleDrawer} sx={{ borderRadius: '8px', mb: 0.5 }}>
                <ListItemText primary={item.title} primaryTypographyProps={{ fontWeight: 600, color: 'secondary.main', fontSize: '0.9rem' }} />
              </ListItem>
            ))}
          </List>
          <Box sx={{ mt: 3, px: 2 }}>
            <Button component={Link}
              to="/start"
              fullWidth variant="outlined" sx={{ mb: 1.5, borderRadius: '6px', fontWeight: 600, fontSize: '0.85rem', textTransform: 'none' }}>Join as Talent</Button>
            <Button 
              fullWidth 
              component={Link}
              to="/start"
              onClick={toggleDrawer}
              variant="contained" 
              color="primary" 
              sx={{ borderRadius: '6px', fontWeight: 700, fontSize: '0.85rem', textTransform: 'none', color: 'secondary.main' }}
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