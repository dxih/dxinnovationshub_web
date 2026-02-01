import { useEffect, useState, useRef } from 'react';
import { Box, Container, Typography, Paper, Stack } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EastIcon from '@mui/icons-material/East';

const choices = [
  {
    title: "Want to grow as a tech talent?",
    actionText: "Join the Talent Incubation",
    icon: <PersonSearchIcon sx={{ fontSize: 22 }} />,
    url: "#join-talent"
  },
  {
    title: "Have a startup or platform idea?",
    actionText: "Incubate Your Platform",
    icon: <RocketLaunchIcon sx={{ fontSize: 22 }} />,
    url: "#incubate-platform"
  }
];

const GetStarted = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  // Trigger entrance animation only once
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  // Shared entrance animation style
  const getFadeStyle = (delay: number = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
  });

  return (
    <Box 
      id="get-started" 
      ref={domRef}
      sx={{ py: 10, bgcolor: '#fbfcfd', overflow: 'hidden' }}
    >
      <Container maxWidth="sm">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 5, ...getFadeStyle(0) }}>
          <Typography 
            variant="overline" 
            sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 1.2, fontSize: '0.7rem' }}
          >
            GET STARTED
          </Typography>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 900, 
              color: 'secondary.main', 
              mt: 0.5,
              mb: 1.5 
            }}
          >
            Choose Your Starting Point
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem' }}>
            Start where you are. We'll help you move forward.
          </Typography>
        </Box>

        {/* Choice Cards Stack */}
        <Stack spacing={1.5}>
          {choices.map((item, index) => (
            <Paper
              key={index}
              elevation={0}
              component="a"
              href={item.url}
              sx={{
                ...getFadeStyle(0.2 + index * 0.1), // Staggered entrance
                p: 2.5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textDecoration: 'none',
                borderRadius: '6px', 
                border: '1px solid #eef2f6',
                bgcolor: 'white',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  borderColor: 'secondary.main',
                  bgcolor: '#fafafa',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 20px -5px rgba(26, 31, 61, 0.08)',
                  // ONLY the icon turns yellow
                  '& .main-icon': { 
                    color: 'primary.main', 
                    transform: 'scale(1.1)' 
                  },
                  '& .action-text': { color: 'secondary.main' },
                  '& .arrow-icon': { transform: 'translateX(6px)', color: 'secondary.main' }
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ 
                  width: 42, 
                  height: 42, 
                  borderRadius: '6px', 
                  bgcolor: '#f8fafc', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'secondary.main',
                }}>
                  <Box 
                    component="span" 
                    className="main-icon" 
                    sx={{ display: 'flex', transition: 'all 0.3s ease' }}
                  >
                    {item.icon}
                  </Box>
                </Box>
                
                <Typography 
                  sx={{ 
                    fontWeight: 600, 
                    color: 'secondary.main',
                    fontSize: '0.95rem'
                  }}
                >
                  {item.title}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography 
                  className="action-text"
                  sx={{ 
                    fontWeight: 700, 
                    color: '#94a3b8',
                    fontSize: '0.85rem',
                    display: { xs: 'none', sm: 'block' },
                    transition: 'color 0.3s ease'
                  }}
                >
                  {item.actionText}
                </Typography>
                <EastIcon 
                  className="arrow-icon"
                  sx={{ 
                    fontSize: 18, 
                    color: '#cbd5e1',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }} 
                />
              </Box>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default GetStarted;