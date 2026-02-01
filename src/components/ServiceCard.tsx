import React, { useEffect, useState, useRef } from 'react';
import { Box, Container, Typography, Grid, Paper, Link } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import GroupsIcon from '@mui/icons-material/Groups';
import RocketIcon from '@mui/icons-material/Rocket';
import CodeIcon from '@mui/icons-material/Code';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

interface ServiceItem {
  title: string;
  sub: string;
  desc: string;
  icon: React.ElementType;
  color: string;
}

const services: ServiceItem[] = [
  { 
    title: 'People', 
    sub: 'Talent Incubation', 
    desc: 'We incubate tech talents through guided learning, mentorship, and real projects — helping them grow from beginners into confident builders.', 
    icon: GroupsIcon, 
    color: '#FFC843' 
  },
  { 
    title: 'Platforms', 
    sub: 'Startup Incubation', 
    desc: 'We incubate early-stage platforms by helping founders validate ideas, build usable products, and prepare for growth.', 
    icon: RocketIcon, 
    color: '#1A1F3D' 
  },
  { 
    title: 'Products', 
    sub: 'Digital Products', 
    desc: 'We design and build digital products — web apps, mobile apps, and internal tools — for teams that need reliable solutions.', 
    icon: CodeIcon, 
    color: '#FFC843' 
  },
  { 
    title: 'Process', 
    sub: 'Custom Solutions', 
    desc: 'We help organizations improve how they work using custom digital solutions, automation, and tailored systems.', 
    icon: SettingsSuggestIcon, 
    color: '#1A1F3D' 
  },
];

const Services = () => {
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

  const getFadeStyle = (delay: number = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(25px)', // Reduced travel distance
    transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
  });

  return (
    <Box id="what-we-do" ref={domRef} sx={{ py: 10, bgcolor: 'white', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 7, ...getFadeStyle(0) }}>
          <Typography 
            color="primary" 
            sx={{ fontWeight: 800, letterSpacing: 1.5, fontSize: '0.65rem', mb: 1, textTransform: 'uppercase' }}
          >
            Our Services
          </Typography>
          <Typography 
            variant="h3" // Downscaled from h2
            sx={{ 
              mb: 1.5, 
              fontWeight: 900, 
              color: 'secondary.main',
              fontSize: { xs: '1.8rem', md: '2.4rem' } // Scaled down typography
            }}
          >
            What We Do
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: '400px', mx: 'auto', fontSize: '0.95rem' }}>
            From talent development to platform launch, we provide end-to-end digital incubation services.
          </Typography>
        </Box>

        <Grid container spacing={3}> {/* Tightened spacing */}
          {services.map((s, i) => {
            const IconTag = s.icon;
            return (
              <Grid item xs={12} md={6} key={i}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    ...getFadeStyle(0.15 + i * 0.08),
                    p: { xs: 3, md: 5 }, // Reduced padding for a tighter look
                    borderRadius: '6px',
                    borderTop: `4px solid ${s.color}`, // Slimmer top border
                    height: '100%',
                    boxShadow: '0 8px 24px -6px rgba(0,0,0,0.04)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': { 
                      transform: 'translateY(-6px)',
                      boxShadow: '0 15px 35px -8px rgba(0,0,0,0.08)',
                      '& .service-icon': { transform: 'scale(1.1)' },
                      '& .view-more-icon': { transform: 'translateX(4px)' }
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      bgcolor: s.color === '#FFC843' ? 'rgba(255, 200, 67, 0.1)' : 'rgba(26, 31, 61, 0.05)', 
                      width: 48, // Scaled down icon box
                      height: 48, 
                      borderRadius: '6px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      mb: 3,
                    }}
                  >
                    <IconTag className="service-icon" sx={{ color: s.color, fontSize: '1.4rem', transition: '0.3s ease' }} />
                  </Box>

                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5, fontSize: '1.35rem' }}>
                    {s.title}
                  </Typography>
                  
                  <Typography 
                    variant="overline" 
                    sx={{ color: s.color, fontWeight: 900, mb: 2, display: 'block', fontSize: '0.65rem' }}
                  >
                    {s.sub}
                  </Typography>

                  <Typography sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6, fontSize: '0.9rem' }}>
                    {s.desc}
                  </Typography>

                  <Link 
                    href="#" 
                    sx={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: 0.8, 
                      fontWeight: 800, 
                      textDecoration: 'none', 
                      color: 'secondary.main',
                      fontSize: '0.8rem',
                    }}
                  >
                    View More 
                    <EastIcon 
                      className="view-more-icon" 
                      sx={{ fontSize: '0.9rem', transition: '0.3s ease' }} 
                    />
                  </Link>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;