import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarsIcon from '@mui/icons-material/Stars';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const Hero = () => {
  // Define the keyframes for a smooth fade-in-up effect
  const fadeInUp = {
    '@keyframes fadeInUp': {
      from: { opacity: 0, transform: 'translateY(30px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
    },
    animation: 'fadeInUp 0.8s ease-out forwards',
    opacity: 0, // Start invisible
  };

  return (
    <Box sx={{ 
      pt: 18, 
      pb: 12, 
      textAlign: 'center', 
      background: 'linear-gradient(to bottom, #eff6ff 0%, #ffffff 100%)',
      overflow: 'hidden' // Prevents scrollbars during animation
    }}>
      <Container maxWidth="lg">
        {/* Top Pill - Animation Delay 0.1s */}
        <Chip 
          icon={<StarsIcon style={{ fontSize: 18, color: '#FFC843' }} />} 
          label="Digital Incubation Hub" 
          variant="outlined"
          sx={{ 
            ...fadeInUp,
            animationDelay: '0.1s',
            mb: 4, 
            fontWeight: 600, 
            bgcolor: 'white', 
            borderColor: '#e2e8f0',
            px: 1,
            py: 2.5,
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
          }} 
        />
        
        {/* Main Headline - Animation Delay 0.3s */}
        <Typography variant="h1" sx={{ 
          ...fadeInUp,
          animationDelay: '0.3s',
          mb: 3, 
          fontSize: { xs: '2.8rem', md: '5rem' }, 
          fontWeight: 900,
          color: 'secondary.main',
          lineHeight: 1.1,
          letterSpacing: '-0.02em'
        }}>
          We incubate people and <br />
          <Box component="span" sx={{ color: 'primary.main' }}>ideas</Box> into real digital solutions
        </Typography>

        {/* Sub-text - Animation Delay 0.5s */}
        <Typography variant="body1" sx={{ 
          ...fadeInUp,
          animationDelay: '0.5s',
          color: '#64748b', 
          mb: 5, 
          maxWidth: '700px', 
          mx: 'auto', 
          fontSize: '1.2rem',
          fontWeight: 500,
          lineHeight: 1.6
        }}>
          DXIH helps tech talents, founders, and organizations move from learning and ideas to working platforms, products, and systems.
        </Typography>

        {/* Incubation Bullet Points - Animation Delay 0.7s */}
        <Stack 
          direction="row" 
          justifyContent="center" 
          alignItems="center" 
          spacing={4} 
          sx={{ 
            ...fadeInUp,
            animationDelay: '0.7s',
            mb: 8 
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main' }} />
            <Typography variant="body2" sx={{ fontWeight: 600, color: '#64748b' }}>We don't just teach</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main' }} />
            <Typography variant="body2" sx={{ fontWeight: 600, color: '#64748b' }}>We don't just build</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'secondary.main' }} />
            <Typography variant="body2" sx={{ fontWeight: 800, color: 'secondary.main' }}>We incubate and execute</Typography>
          </Box>
        </Stack>

        {/* Three Button Flex Row - Animation Delay 0.9s */}
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={2} 
          justifyContent="center" 
          alignItems="center"
          sx={{
            ...fadeInUp,
            animationDelay: '0.9s'
          }}
        >
          <Button 
            variant="contained" 
            disableElevation
            endIcon={<ArrowForwardIcon />}
            sx={{ 
              bgcolor: 'primary.main', 
              color: 'secondary.main', 
              px: 4, 
              py: 2, 
              borderRadius: '6px',
              fontWeight: 800,
              fontSize: '1rem',
              textTransform: 'none',
              transition: 'all 0.3s ease-in-out',
              '&:hover': { 
                bgcolor: 'secondary.main',
                color: 'white',
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 15px -3px rgba(26, 31, 61, 0.3)'
              } 
            }}
          >
            Start With DXIH
          </Button>

          <Button 
            variant="outlined" 
            startIcon={<PersonAddAlt1Icon />}
            sx={{ 
              borderColor: 'secondary.main', 
              color: 'secondary.main', 
              px: 4, 
              py: 2, 
              borderRadius: '6px', 
              fontWeight: 700,
              textTransform: 'none',
              borderWidth: '2px',
              transition: 'all 0.2s ease',
              '&:hover': { 
                borderWidth: '2px', 
                bgcolor: 'rgba(26, 31, 61, 0.04)',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Join as Talent
          </Button>

          <Button 
            variant="outlined" 
            startIcon={<RocketLaunchIcon />}
            sx={{ 
              borderColor: 'secondary.main', 
              color: 'secondary.main', 
              px: 4, 
              py: 2, 
              borderRadius: '6px', 
              fontWeight: 700,
              textTransform: 'none',
              borderWidth: '2px',
              transition: 'all 0.2s ease',
              '&:hover': { 
                borderWidth: '2px', 
                bgcolor: 'rgba(26, 31, 61, 0.04)',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Build With Us
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;