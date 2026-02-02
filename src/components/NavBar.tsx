import { useState } from 'react';
import { 
  AppBar, Toolbar, Box, Button, IconButton, Drawer, List, 
  ListItem, ListItemText, Container, Divider, Dialog, 
  DialogContent, TextField, Radio, RadioGroup, FormControlLabel, 
  FormControl, FormLabel, Stack, Typography, alpha 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import StarsIcon from '@mui/icons-material/Stars';
import LogoImg from "../assets/Logo/Logo.png";

const navLinks = [
  { title: 'What We Do', id: '#what-we-do' },
  { title: 'Portfolio', id: '#portfolio' },
  { title: 'Why DXIH', id: '#why-dxih' },
  { title: 'Get Started', id: '#get-started' }
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);
  
  const handleOpen = () => {
    setOpen(true);
    setMobileOpen(false); // Close mobile menu when opening dialog
  };
  
  const handleClose = () => setOpen(false);

  const selectionRowStyle = {
    m: 0,
    mb: 1,
    p: 1,
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    transition: '0.2s all ease',
    width: '100%',
    '&:hover': { bgcolor: '#f8fafc' },
    '&:has(input:checked)': {
      borderColor: 'primary.main',
      bgcolor: alpha('#FFC843', 0.08),
    }
  };

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
          <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center', height: '100%', transition: 'transform 0.2s ease', '&:hover': { transform: 'scale(1.02)' } }}>
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
            <Button   onClick={handleOpen} sx={{ color: 'secondary.main',  textTransform: 'none', fontWeight: 600, fontSize: '0.8rem' }}>Join as Talent</Button>
            <Button 
              variant="contained" 
              color="primary" 
              disableElevation
              onClick={handleOpen}
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
            <Button fullWidth variant="outlined"   onClick={handleOpen} sx={{ mb: 1.5, borderRadius: '6px', fontWeight: 600, fontSize: '0.85rem', textTransform: 'none' }}>Join as Talent</Button>
            <Button fullWidth variant="contained" color="primary" onClick={handleOpen} sx={{ borderRadius: '6px', fontWeight: 700, fontSize: '0.85rem', textTransform: 'none', color: 'secondary.main' }}>
              Start With DXIH
            </Button>
          </Box>
        </Box>
      </Drawer>

       {/* --- REFINED DIALOG (Matching small text style) --- */}
      <Dialog 
  open={open} 
  onClose={handleClose}
  fullWidth
  maxWidth="md"
  scroll="body"
  PaperProps={{ 
    sx: { 
      borderRadius: { xs: '0px', sm: '24px' }, 
      m: { xs: 0, sm: 2 },
      maxHeight: { xs: '100%', sm: 'calc(100% - 64px)' }
    } 
  }}
>
  <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
    <IconButton onClick={handleClose} sx={{ bgcolor: '#f8fafc' }}><CloseIcon /></IconButton>
  </Box>
  
  <DialogContent sx={{ pt: 0, px: { xs: 3, sm: 6 }, pb: 6 }}>
    <form action="https://formspree.io/f/xpqldvaj" method="POST">
      
      {/* Header Section */}
      <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 1.5, fontSize: '0.7rem' }}>
        DX Innovations Hub
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5, color: 'secondary.main', fontSize: '1.5rem' }}>
        Get Started
      </Typography>
      <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary', fontWeight: 500, lineHeight: 1.5, fontSize: '0.85rem' }}>
        Turn ideas, challenges, or ambitions into real digital outcomes. Whether you’re looking to build a product, improve operations, incubate talent, or explore a partnership, this is the first step. Share a bit about what you need, and we’ll guide the next move.
      </Typography>

      <Stack spacing={4}>
        
        {/* 01. Objective Section */}
        <FormControl component="fieldset" required>
          <FormLabel sx={{ fontWeight: 800, color: 'primary.main', mb: 1, fontSize: '0.65rem', textTransform: 'uppercase' }}>
            01. Objective
          </FormLabel>
          <Typography sx={{ fontWeight: 700, color: 'secondary.main', mb: 0.5, fontSize: '0.9rem' }}>
            What are you looking to get started with?
          </Typography>
          <Typography variant="caption" sx={{ mb: 2, display: 'block', color: 'text.secondary', fontSize: '0.7rem' }}>
            (Select the option that best describes your current need. You don’t need to have everything figured out.)
          </Typography>
          
          <RadioGroup name="OBJECTIVE">
            <FormControlLabel value="Talent Incubation" sx={selectionRowStyle} control={<Radio size="small" sx={{ mt: -1 }} />} label={
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: '0.85rem' }}>Talent Incubation</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>Skill development, mentorship, and real-world project experience.</Typography>
              </Box>
            } />
            <FormControlLabel value="Startup or Platform Incubationp" sx={selectionRowStyle} control={<Radio size="small" sx={{ mt: -1 }} />} label={
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: '0.85rem' }}>Startup or Platform Incubation</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>Idea validation, MVP development, and early-stage growth support.</Typography>
              </Box>
            } />
            <FormControlLabel value="Digital Product Development" sx={selectionRowStyle} control={<Radio size="small" sx={{ mt: -1 }} />} label={
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: '0.85rem' }}>Digital Product Development</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>Web applications, mobile apps, and internal tools.</Typography>
              </Box>
            } />
            <FormControlLabel value="Custom Solutions & Process Automation" sx={selectionRowStyle} control={<Radio size="small" sx={{ mt: -1 }} />} label={
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: '0.85rem' }}>Custom Solutions & Process Automation</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>Tailored digital systems to improve operations, efficiency, or scale.</Typography>
              </Box>
            } />
            <FormControlLabel value="strategy, Advisory or Partnership" sx={selectionRowStyle} control={<Radio size="small" sx={{ mt: -1 }} />} label={
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: '0.85rem' }}>Strategy, Advisory or Partnership</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>Strategic guidance, collaboration, or long-term engagement.</Typography>
              </Box>
            } />
            <FormControlLabel value="Not Sure Yet — I Need Guidance" sx={selectionRowStyle} control={<Radio size="small" />} label={
              <Typography sx={{ fontWeight: 700, fontSize: '0.85rem' }}>Not Sure Yet — I Need Guidance</Typography>
            } />
          </RadioGroup>
        </FormControl>

        {/* 02. Description Section */}
        <Box>
          <FormLabel sx={{ fontWeight: 800, color: 'primary.main', mb: 1, fontSize: '0.65rem', textTransform: 'uppercase' }}>
            02. Tell Us a Bit More
          </FormLabel>
          <Typography sx={{ fontWeight: 700, color: 'secondary.main', mb: 1, fontSize: '0.9rem' }}>
            Brief Description
          </Typography>
          <TextField 
            name="BRIEF DESCRIPTION" 
            fullWidth 
            multiline 
            rows={2} 
            placeholder="What problem are you trying to solve, or what are you hoping to achieve?" 
            required 
            variant="filled" 
            InputProps={{ 
              disableUnderline: true, 
              sx: { borderRadius: '12px', bgcolor: '#f8fafc', fontSize: '0.85rem' } 
            }} 
          />
        </Box>

        {/* 03 & 04. Timeline & Budget Section */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
          <FormControl required>
            <FormLabel sx={{ fontWeight: 800, color: 'primary.main', mb: 1, fontSize: '0.65rem', textTransform: 'uppercase' }}>
              03. Timeline
            </FormLabel>
            <Typography variant="body2" sx={{ fontWeight: 700, mb: 1, fontSize: '0.85rem' }}>When are you looking to start?</Typography>
            <RadioGroup name="TIMELINE">
              <FormControlLabel value="immediately" control={<Radio size="small" />} label={<Typography sx={{ fontSize: '0.8rem' }}>Immediately</Typography>} />
              <FormControlLabel value="within 1-3-months" control={<Radio size="small" />} label={<Typography sx={{ fontSize: '0.8rem' }}>Within 1–3 months</Typography>} />
              <FormControlLabel value="within 3-6-months" control={<Radio size="small" />} label={<Typography sx={{ fontSize: '0.8rem' }}>Within 3–6 months</Typography>} />
              <FormControlLabel value="Just exploring" control={<Radio size="small" />} label={<Typography sx={{ fontSize: '0.8rem' }}>Just exploring</Typography>} />
            </RadioGroup>
          </FormControl>

          <FormControl required>
            <FormLabel sx={{ fontWeight: 800, color: 'primary.main', mb: 1, fontSize: '0.65rem', textTransform: 'uppercase' }}>
              04. Budget Stage
            </FormLabel>
            <Typography variant="body2" sx={{ fontWeight: 700, mb: 1, fontSize: '0.85rem' }}>Which best describes your position?</Typography>
            <RadioGroup name="BUDGET STAGE">
              <FormControlLabel value="i have a defined Budget" control={<Radio size="small" />} label={<Typography sx={{ fontSize: '0.8rem' }}>I have a defined budget</Typography>} />
              <FormControlLabel value="Budget is been planned" control={<Radio size="small" />} label={<Typography sx={{ fontSize: '0.8rem' }}>Budget is being planned</Typography>} />
              <FormControlLabel value="Not Sure" control={<Radio size="small" />} label={<Typography sx={{ fontSize: '0.8rem' }}>Not sure yet</Typography>} />
            </RadioGroup>
            <Typography variant="caption" sx={{ mt: 1, color: 'text.secondary', fontStyle: 'italic', fontSize: '0.65rem' }}>
              (This helps us respond appropriately — not to disqualify you.)
            </Typography>
          </FormControl>
        </Box>

        {/* 05. Contact Details Section */}
        <Box>
          <FormLabel sx={{ fontWeight: 800, color: 'primary.main', mb: 2, fontSize: '0.65rem', textTransform: 'uppercase' }}>
            05. Your Details
          </FormLabel>
          <Stack spacing={2}>
            <TextField name="FULL Name" label="Full Name" size="small" fullWidth variant="outlined" required sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px', fontSize: '0.85rem' } }} />
            <TextField name="EMAIL" type="email" label="Email Address" size="small" fullWidth variant="outlined" required sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px', fontSize: '0.85rem' } }} />
            <TextField name="ORGANIZATION" label="Organization / Project Name (optional)" size="small" fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px', fontSize: '0.85rem' } }} />
          </Stack>
        </Box>

        {/* Submit & Reassurance Section */}
        <Box sx={{ pt: 2 }}>
          <Button 
            type="submit" 
            variant="contained" 
            fullWidth 
            size="large" 
            sx={{ 
              py: 1.8, fontWeight: 800, borderRadius: '12px', 
              bgcolor: 'primary.main', color: 'secondary.main', 
              fontSize: '0.95rem', textTransform: 'none', 
              boxShadow: '0 10px 15px -3px rgba(255, 200, 67, 0.4)', 
              '&:hover': { bgcolor: 'secondary.main', color: 'white' } 
            }}
          >
            Get Started
          </Button>
          
          <Typography 
            variant="caption" 
            sx={{ 
              mt: 2, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: 0.8, 
              color: 'secondary.main', 
              fontWeight: 700, 
              textAlign: 'center',
              fontSize: '0.75rem'
            }}
          >
            <StarsIcon sx={{ fontSize: 14, color: 'primary.main' }} /> 
            We’ll review your submission and reach out with next steps.
          </Typography>

          <Divider sx={{ my: 3, borderStyle: 'dashed' }} />
          
          <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary', fontWeight: 500, fontSize: '0.75rem', lineHeight: 1.4 }}>
            DX Innovations Hub works with individuals, teams, startups, and organizations at different stages.
          </Typography>
          <Typography variant="caption" sx={{ mt: 1, display: 'block', textAlign: 'center', color: 'primary.main', fontWeight: 700, fontSize: '0.7rem' }}>
            Every engagement begins with understanding your context before proposing solutions.
          </Typography>
        </Box>
      </Stack>
    </form>
  </DialogContent>
</Dialog>
    </AppBar>
  );
};

export default Navbar;