import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Grid, Divider } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import RocketIcon from '@mui/icons-material/Rocket';
import CodeIcon from '@mui/icons-material/Code';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

interface ServiceItem {
  title: string;
  sub: string;
  desc: string;
  icon: React.ElementType;
}

const services: ServiceItem[] = [
  {
    title: 'People',
    sub: 'Talent Incubation',
    desc: 'Structured programs that develop capable engineers through mentorship and applied project work.',
    icon: GroupsIcon,
  },
  {
    title: 'Platforms',
    sub: 'Startup Incubation',
    desc: 'Support for early-stage platforms — from validation to production-ready systems.',
    icon: RocketIcon,
  },
  {
    title: 'Products',
    sub: 'Digital Products',
    desc: 'Design and engineering of dependable web and mobile products for real-world use.',
    icon: CodeIcon,
  },
  {
    title: 'Process',
    sub: 'Custom Systems',
    desc: 'Purpose-built tools and automation that improve how organizations operate.',
    icon: SettingsSuggestIcon,
  },
];

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    ref.current && observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      id="what-we-do"
      ref={ref}
      sx={{
        py: 14,
        bgcolor: '#fff',
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ maxWidth: 640, mb: 10 }}>
          <Typography
            sx={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              color: 'primary.main',
              mb: 2,
            }}
          >
            Services
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '2rem', md: '2.6rem' },
              fontWeight: 700,
              color: 'secondary.main',
              mb: 3,
            }}
          >
            What We Do
          </Typography>

          <Typography
            sx={{
              fontSize: '1rem',
              color: 'secondary.main',
              lineHeight: 1.7,
            }}
          >
            We focus on building strong teams, reliable platforms, and practical
            digital systems that support long-term growth.
          </Typography>
        </Box>

        {/* Grid */}
        <Grid container spacing={0}>
          {services.map((s, i) => {
            const Icon = s.icon;

            return (
              <Grid item xs={12} md={6} key={i}>
                <Box
                  sx={{
                    py: 5,
                    pr: { md: 6 },
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(12px)',
                    transition: `all 0.4s ease ${i * 0.08}s`,
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 3 }}>
                    {/* Icon */}
                    <Icon
                      sx={{
                        fontSize: '1.5rem',
                        color: 'secondary.main',
                        mt: '4px',
                        flexShrink: 0,
                      }}
                    />

                    {/* Content */}
                    <Box>
                      <Typography
                        sx={{
                          fontSize: '1.25rem',
                          fontWeight: 600,
                          color: 'secondary.main',
                          mb: 0.5,
                        }}
                      >
                        {s.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: '0.75rem',
                          letterSpacing: 1.2,
                          textTransform: 'uppercase',
                          color: 'secondary.main',
                          mb: 1.5,
                        }}
                      >
                        {s.sub}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: '0.95rem',
                          color: 'secondary.main',
                          lineHeight: 1.7,
                          maxWidth: 420,
                        }}
                      >
                        {s.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>

        <Divider sx={{ mt: 6 }} />
      </Container>
    </Box>
  );
};

export default Services;
