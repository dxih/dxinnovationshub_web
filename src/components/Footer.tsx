import React, { useEffect, useState, useRef } from 'react';
import { Box, Container, Typography, Grid, Link, Divider } from '@mui/material';

const Footer = () => {
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
    }, { threshold: 0.1 });

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  const footerRevealStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.98)', // Slight scale for a premium feel
    transition: 'opacity 1s ease-out, transform 1s cubic-bezier(0.2, 0.8, 0.2, 1)',
  };

  return (
    <Box 
      id="footer"
      ref={domRef}
      sx={{ 
        bgcolor: 'secondary.main', 
        color: 'white', 
        pt: 10, 
        pb: 4,
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg" sx={{ ...footerRevealStyle }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          {/* Logo Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 3 }}>
            <Box 
              sx={{ 
                bgcolor: 'primary.main', 
                color: 'secondary.main', 
                px: 1.2, 
                py: 0.4, 
                borderRadius: '4px', 
                fontWeight: 900, 
                fontSize: '0.9rem',
                fontStyle: 'italic' 
              }}
            >
              DX
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: 0.5 }}>
              DXIH
            </Typography>
          </Box>

          <Typography 
            sx={{ 
              color: 'rgba(255,255,255,0.5)', 
              maxWidth: '280px', 
              mx: 'auto', 
              fontSize: '0.85rem', 
              mb: 5,
              lineHeight: 1.6 
            }}
          >
            Incubating people and ideas into real digital solutions.
          </Typography>
          
          {/* Navigation Links */}
          <Grid container spacing={1} justifyContent="center" sx={{ mb: 6 }}>
            {['What We Do', 'Portfolio', 'Why DXIH', 'Get Started'].map((item) => (
              <Grid item key={item}>
                <Link 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  sx={{ 
                    color: 'rgba(255,255,255,0.6)', 
                    textDecoration: 'none', 
                    mx: 1.5, 
                    fontSize: '0.8rem', 
                    fontWeight: 600,
                    transition: '0.3s',
                    '&:hover': { 
                      color: 'primary.main',
                      transform: 'translateY(-2px)' 
                    } 
                  }}
                >
                  {item}
                </Link>
              </Grid>
            ))}
          </Grid>
          
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mb: 4, maxWidth: '600px', mx: 'auto' }} />
          
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.3)', letterSpacing: 0.5 }}>
            © {new Date().getFullYear()} DXIH Innovation Hub. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;