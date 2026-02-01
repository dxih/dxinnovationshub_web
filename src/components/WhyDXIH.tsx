import React, { useEffect, useState, useRef } from 'react';
import { Box, Container, Typography, Grid, Paper, alpha } from '@mui/material';
import TargetIcon from '@mui/icons-material/Adjust'; 
import GroupsIcon from '@mui/icons-material/Groups'; 
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; 
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'; 

const features = [
  { 
    title: 'Built for Incubation', 
    desc: 'Not shortcuts. We work closely with people and ideas over time.', 
    icon: <TargetIcon sx={{ fontSize: 24 }} /> 
  },
  { 
    title: 'Hands-on Execution', 
    desc: 'We don’t just plan — we build alongside you every step of the way.', 
    icon: <GroupsIcon sx={{ fontSize: 24 }} /> 
  },
  { 
    title: 'Capacity Building', 
    desc: 'We don’t just deliver outputs — we build confidence and capabilities.', 
    icon: <TrendingUpIcon sx={{ fontSize: 24 }} /> 
  },
  { 
    title: 'Systems That Last', 
    desc: 'Solutions designed for growth, sustainability, and real-world impact.', 
    icon: <ShieldOutlinedIcon sx={{ fontSize: 24 }} /> 
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

  // Animation variants
  const slideFromLeft = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
  };

  const slideFromRightStaggered = (index: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
    transition: `opacity 0.8s ease-out ${0.2 + index * 0.1}s, transform 0.8s ease-out ${0.2 + index * 0.1}s`,
  });

  return (
    <Box 
      id="why-dxih" 
      ref={domRef}
      sx={{ 
        py: 12, 
        bgcolor: '#1A1F3D', 
        color: 'white',
        overflow: 'hidden' 
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="flex-start">
          
          {/* Left Side Text */}
          <Grid item xs={12} md={5} sx={{ ...slideFromLeft }}>
            <Typography 
              variant="overline" 
              sx={{ 
                color: 'primary.main', 
                fontWeight: 800, 
                letterSpacing: 1.5,
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
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                color: "white",
                mb: 4 
              }}
            >
              Why DXIH?
            </Typography>
            <Typography 
              sx={{ 
                color: alpha('#fff', 0.8), 
                fontSize: '1.1rem', 
                lineHeight: 1.7,
                mb: 4
              }}
            >
              DXIH is built for incubation, not shortcuts. We work closely with people and ideas over time — helping them grow, improve, and become useful in the real world.
            </Typography>
            <Typography 
              sx={{ 
                color: alpha('#fff', 0.8), 
                fontSize: '1.1rem', 
                lineHeight: 1.7 
              }}
            >
              By combining incubation with hands-on execution, we don’t just deliver outputs — we build capacity, confidence, and systems that last.
            </Typography>
          </Grid>

          {/* Right Side Cards Grid */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {features.map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      ...slideFromRightStaggered(index),
                      p: 4, 
                      height: '100%',
                      bgcolor: alpha('#fff', 0.05),
                      borderRadius: '6px',
                      border: `1px solid ${alpha('#fff', 0.1)}`,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        bgcolor: alpha('#fff', 0.08),
                        borderColor: 'primary.main',
                        '& .feature-icon': {
                          transform: 'scale(1.15)',
                          color: 'primary.main'
                        }
                      }
                    }}
                  >
                    {/* Icon Container */}
                    <Box 
                      sx={{ 
                        width: 48, 
                        height: 48, 
                        borderRadius: '6px', 
                        bgcolor: alpha('#FFC843', 0.15), 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        mb: 3,
                        color: 'primary.main',
                        transition: '0.3s'
                      }}
                    >
                      <Box className="feature-icon" sx={{ display: 'flex', transition: '0.3s' }}>
                        {item.icon}
                      </Box>
                    </Box>
                    
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 800, 
                        mb: 1.5,
                        fontSize: '1.25rem'
                      }}
                    >
                      {item.title}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: alpha('#fff', 0.6), 
                        lineHeight: 1.6,
                        fontSize: '0.95rem'
                      }}
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