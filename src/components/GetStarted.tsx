import { useEffect, useState, useRef } from 'react';
import { Box, Container, Typography, Paper, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EastIcon from '@mui/icons-material/East';
import CodeIcon from '@mui/icons-material/Code';
import SettingIcon from '@mui/icons-material/Settings';
import HandshakeIcon from '@mui/icons-material/Handshake';

const choices = [
  {
    title: "Want to grow as a tech talent?",
    actionText: "Join the Talent Incubation",
    icon: <PersonSearchIcon sx={{ fontSize: 20 }} />,
    url: "/start"
  },
  {
    title: "Have a startup or platform idea?",
    actionText: "Incubate Your Platform",
    icon: <RocketLaunchIcon sx={{ fontSize: 20 }} />,
    url: "/start"
  },
  {
    title: "Need a digital product built?",
    actionText: "Build a product",
    icon: <CodeIcon sx={{ fontSize: 20 }} />,
    url: "/start"
  },
  {
    title: "Need data or custom systems?",
    actionText: "Request a Custom Solution",
    icon: <SettingIcon sx={{ fontSize: 20 }} />,
    url: "/start"
  },
  {
    title: "Want to support or collaborate?",
    actionText: "Be a Partner",
    icon: <HandshakeIcon sx={{ fontSize: 20 }} />,
    url: "/start"
  }
];

const GetStarted = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

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
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 5, ...getFadeStyle(0) }}>
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              fontWeight: 800,
              letterSpacing: 1.2,
              fontSize: '0.7rem'
            }}
          >
            GET STARTED
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              color: 'secondary.main',
              mt: 0.5,
              mb: 1.5,
              whiteSpace: 'nowrap',
              fontSize: { xs: '1.4rem', sm: '2.5rem' },
            }}
          >
            Choose Your Starting Point
          </Typography>

          <Typography
            sx={{
              color: 'text.secondary',
              fontSize: '0.95rem',
              whiteSpace: 'nowrap'
            }}
          >
            Start where you are. We'll help you move forward.
          </Typography>
        </Box>

        <Stack spacing={1.5} sx={{ maxWidth: '750px', mx: 'auto' }}>
          {choices.map((item, index) => (
            <Paper
              key={index}
              elevation={0}
              component={Link}
              to={item.url}
              sx={{
                ...getFadeStyle(0.2 + index * 0.1),
                p: { xs: 2, sm: 2.5 },
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
                  '& .main-icon': {
                    color: 'primary.main',
                    transform: 'scale(1.1)'
                  },
                  '& .action-text': { color: 'secondary.main' },
                  '& .arrow-icon': {
                    transform: 'translateX(6px)',
                    color: 'secondary.main'
                  }
                }
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  flex: 1,
                  minWidth: 0
                }}
              >
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: '6px',
                    bgcolor: '#f8fafc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'secondary.main',
                  }}
                >
                  <Box
                    className="main-icon"
                    sx={{ display: 'flex', transition: 'all 0.3s ease' }}
                  >
                    {item.icon}
                  </Box>
                </Box>

                <Typography
                  sx={{
                    fontWeight: 700,
                    color: 'secondary.main',
                    fontSize: { xs: '0.75rem', sm: '0.9rem', md: '0.95rem' },
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'clip'
                  }}
                >
                  {item.title}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  flexShrink: 0
                }}
              >
                <Typography
                  className="action-text"
                  sx={{
                    fontWeight: 700,
                    color: '#94a3b8',
                    fontSize: '0.8rem',
                    display: { xs: 'none', md: 'block' },
                    whiteSpace: 'nowrap',
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
