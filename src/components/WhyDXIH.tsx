import { useEffect, useState, useRef } from 'react';
import { Box, Container, Typography, Grid, Paper, alpha } from '@mui/material';
import TargetIcon from '@mui/icons-material/Adjust'; 
import GroupsIcon from '@mui/icons-material/Groups'; 
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; 
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'; 

const features = [
  { 
    title: 'Built for Incubation', 
    desc: 'Not shortcuts. We work closely with people and ideas over time.', 
    icon: <TargetIcon sx={{ fontSize: 20 }} /> 
  },
  { 
    title: 'Hands-on Execution', 
    desc: 'We don’t just plan — we build alongside you every step of the way.', 
    icon: <GroupsIcon sx={{ fontSize: 20 }} /> 
  },
  { 
    title: 'Capacity Building', 
    desc: 'We don’t just deliver outputs — we build confidence and capabilities.', 
    icon: <TrendingUpIcon sx={{ fontSize: 20 }} /> 
  },
  { 
    title: 'Systems That Last', 
    desc: 'Solutions designed for growth, sustainability, and real-world impact.', 
    icon: <ShieldOutlinedIcon sx={{ fontSize: 20 }} /> 
  },
];

const WhyDXIH = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  const slideFromLeft = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
  };

  return (
    <Box 
      id="why-dxih" 
      ref={domRef}
      sx={{ 
        py: { xs: 10, md: 15 }, 
        bgcolor: 'secondary.main', // Matched the exact navy from your image
        color: 'white',
        overflow: 'hidden' 
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="flex-start">
          
          {/* Left Side Text */}
          <Grid item xs={12} md={5} sx={{ ...slideFromLeft }}>
            <Typography 
              variant="overline" 
              sx={{ 
                color: '#primary.main', 
                fontWeight: 700, 
                letterSpacing: 1.2,
                display: 'block',
                mb: 1 
              }}
            >
              OUR APPROACH
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 700, 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                color: "white",
                mb: 3,
                lineHeight: 1.2
              }}
            >
              Why DXIH?
            </Typography>
            <Typography 
              sx={{ 
                color: alpha('#fff', 0.9), 
                fontSize: '1.05rem', 
                lineHeight: 1.6,
                mb: 4,
                fontWeight: 400
              }}
            >
              DXIH is built for incubation, not shortcuts. We work closely with people and ideas over time — helping them grow, improve, and become useful in the real world.
            </Typography>
            <Typography 
              sx={{ 
                color: alpha('#fff', 0.9), 
                fontSize: '1.05rem', 
                lineHeight: 1.6,
                fontWeight: 400
              }}
            >
              By combining incubation with hands-on execution, we don't just deliver outputs — we build capacity, confidence, and systems that last.
            </Typography>
          </Grid>

          {/* Right Side Cards */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {features.map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 4, 
                      height: '100%',
                      bgcolor: 'rgba(255, 255, 255, 0.06)', // Subtle glass effect
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        bgcolor: 'rgba(255, 255, 255, 0.09)',
                      }
                    }}
                  >
                    <Box 
                      sx={{ 
                        width: 42, 
                        height: 42, 
                        borderRadius: '10px', 
                        bgcolor: alpha('#FFC843', 0.15), // Gold tinted icon box
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        mb: 3,
                        color: 'primary.main',
                      }}
                    >
                      {item.icon}
                    </Box>
                    
                    <Typography 
                      variant="h6" 
                      sx={{ fontWeight: 700, mb: 1.5, color: 'white', fontSize: '1.25rem' }}
                    >
                      {item.title}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      sx={{ color: alpha('#fff', 0.7), lineHeight: 1.6, fontSize: '0.95rem' }}
                    >
                      {item.desc}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyDXIH;