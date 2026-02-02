import { 
  Box, Container, Typography, Button, Stack, Chip 
} from '@mui/material';
import { Link } from 'react-router-dom'; // Added for navigation
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarsIcon from '@mui/icons-material/Stars';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const Hero = () => {
  // Modal state and handlers removed as requested

  const fadeInUp = {
    '@keyframes fadeInUp': {
      from: { opacity: 0, transform: 'translateY(20px)' }, 
      to: { opacity: 1, transform: 'translateY(0)' },
    },
    animation: 'fadeInUp 0.8s ease-out forwards',
    opacity: 0,
  };

  return (
    <Box sx={{ 
      pt: { xs: 10, md: 15 }, 
      pb: 10, 
      textAlign: 'center', 
      background: 'linear-gradient(to bottom, #eff6ff 0%, #ffffff 100%)',
      overflow: 'hidden' 
    }}>
      <Container maxWidth="lg">
        <Chip 
          icon={<StarsIcon style={{ fontSize: 14, color: '#FFC843' }} />} 
          label="Digital Incubation Hub" 
          variant="outlined"
          sx={{ 
            ...fadeInUp,
            animationDelay: '0.1s',
            mb: 3, 
            fontWeight: 600, 
            fontSize: '0.75rem', 
            bgcolor: 'white', 
            borderColor: '#e2e8f0',
            px: 0.5,
            py: 2,
            borderRadius: '6px',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)'
          }} 
        />
        
        <Typography variant="h1" sx={{ 
          ...fadeInUp,
          animationDelay: '0.3s',
          mb: 2.5, 
          fontSize: { xs: '2rem', md: '3.8rem' }, 
          fontWeight: 800, 
          color: 'secondary.main',
          lineHeight: 1.2,
          letterSpacing: '-0.02em'
        }}>
          We incubate people and 
          <Box component="span" sx={{ color: 'primary.main', display: 'block' }}>ideas</Box> 
          into real digital solutions
        </Typography>

        <Typography variant="body1" sx={{ 
          ...fadeInUp,
          animationDelay: '0.5s',
          color: '#64748b', 
          mb: 4, 
          maxWidth: '600px', 
          mx: 'auto', 
          fontSize: '1rem', 
          fontWeight: 400, 
          lineHeight: 1.6
        }}>
          DXIH helps tech talents, founders, and organizations move from learning and ideas to working platforms, products, and systems.
        </Typography>

        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={2} 
          justifyContent="center" 
          alignItems="center"
          sx={{ ...fadeInUp, animationDelay: '0.7s' }}
        >
          <Button 
            component={Link}
            to="/start"
            variant="contained" 
            disableElevation
            endIcon={<ArrowForwardIcon />}
            sx={{ 
              bgcolor: 'primary.main', 
              color: 'secondary.main', 
              px: 3.5, 
              py: 1.5, 
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '0.9rem', 
              textTransform: 'none',
              width: { xs: '100%', md: 'auto' },
              '&:hover': { bgcolor: 'secondary.main', color: 'white' } 
            }}
          >
            Start With DXIH
          </Button>

          <Stack direction="row" spacing={1.5} sx={{ width: { xs: '100%', md: 'auto' } }}>
            <Button 
              component={Link}
              to="/start"
              variant="outlined" 
              startIcon={<PersonAddAlt1Icon />}
              sx={{ 
                borderColor: 'secondary.main', 
                color: 'secondary.main', 
                px: { xs: 2, sm: 3 }, 
                py: 1.5, 
                flex: { xs: 1, md: 'none' },
                borderRadius: '6px', 
                fontWeight: 600,
                fontSize: '0.85rem',
                textTransform: 'none',
                borderWidth: '1.5px', 
                '&:hover': { borderWidth: '1.5px', bgcolor: 'rgba(26, 31, 61, 0.04)' }
              }}
            >
              Join Talent
            </Button>

            <Button 
              component={Link}
              to="/start"
              variant="outlined" 
              startIcon={<RocketLaunchIcon />}
              sx={{ 
                borderColor: 'secondary.main', 
                color: 'secondary.main', 
                px: { xs: 2, sm: 3 }, 
                py: 1.5,
                flex: { xs: 1, md: 'none' },
                borderRadius: '6px', 
                fontWeight: 600,
                fontSize: '0.85rem',
                textTransform: 'none',
                borderWidth: '1.5px',
                '&:hover': { borderWidth: '1.5px', bgcolor: 'rgba(26, 31, 61, 0.04)' }
              }}
            >
              Build With Us
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;