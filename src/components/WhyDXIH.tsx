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
    icon: <TargetIcon sx={{ fontSize: 22 }} /> 
  },
  { 
    title: 'Hands-on Execution', 
    desc: 'We don’t just plan — we build alongside you every step of the way.', 
    icon: <GroupsIcon sx={{ fontSize: 22 }} /> 
  },
  { 
    title: 'Capacity Building', 
    desc: 'We don’t just deliver outputs — we build confidence and capabilities.', 
    icon: <TrendingUpIcon sx={{ fontSize: 22 }} /> 
  },
  { 
    title: 'Systems That Last', 
    desc: 'Solutions designed for growth, sustainability, and real-world impact.', 
    icon: <ShieldOutlinedIcon sx={{ fontSize: 22 }} /> 
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
    transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
  };

  return (
    <Box 
      id="why-dxih" 
      ref={domRef}
      sx={{ 
        py: 15, 
        bgcolor: '#1A234E', // THE CORRECT COLOR: Deep Midnight Navy
        color: 'white',
        overflow: 'hidden' 
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          
          {/* Left Side Text */}
          <Grid item xs={12} md={5} sx={{ ...slideFromLeft }}>
            <Typography 
              variant="overline" 
              sx={{ 
                color: '#FFC843', // Using your primary gold/yellow
                fontWeight: 900, 
                letterSpacing: 2,
                display: 'block',
                mb: 2 
              }}
            >
              OUR APPROACH
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 900, 
                fontSize: { xs: '2.8rem', md: '3.8rem' },
                color: "white",
                mb: 4,
                lineHeight: 1.1
              }}
            >
              Why DXIH?
            </Typography>
            <Typography 
              sx={{ 
                color: alpha('#fff', 0.8), 
                fontSize: '1.15rem', 
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              DXIH is built for incubation, not shortcuts. We work closely with people and ideas over time — helping them grow, improve, and become useful in the real world.
            </Typography>
            <Typography 
              sx={{ 
                color: alpha('#fff', 0.8), 
                fontSize: '1.15rem', 
                lineHeight: 1.8 
              }}
            >
              By combining incubation with hands-on execution, we don’t just deliver outputs — we build capacity, confidence, and systems that last.
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
                      // This makes the card look like it's part of the background
                      bgcolor: 'rgba(255, 255, 255, 0.05)', 
                      borderRadius: '16px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.08)',
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        transform: 'translateY(-5px)',
                      }
                    }}
                  >
                    <Box 
                      sx={{ 
                        width: 40, 
                        height: 40, 
                        borderRadius: '8px', 
                        bgcolor: 'rgba(255, 255, 255, 0.1)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        mb: 3,
                        color: '#FFC843',
                      }}
                    >
                      {item.icon}
                    </Box>
                    
                    <Typography 
                      variant="h6" 
                      sx={{ fontWeight: 800, mb: 1.5, color: 'white' }}
                    >
                      {item.title}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      sx={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.6 }}
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