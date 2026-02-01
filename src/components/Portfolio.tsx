import React, { useEffect, useState, useRef } from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, Chip, IconButton, Tooltip } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import LanguageIcon from '@mui/icons-material/Language';

interface Project {
  title: string;
  desc: string;
  tags: string[];
  icon: React.ElementType;
  url: string;
}

const projects: Project[] = [
  {
    title: 'AppreLab',
    desc: 'An edtech platform connecting learning to work and earning',
    tags: ['EdTech', 'Platform'],
    icon: SchoolOutlinedIcon,
    url: 'https://apprelab.com'
  },
  {
    title: 'SkillNest',
    desc: 'A digital apprenticeship program growing job-ready tech talent',
    tags: ['Talent Development', 'Program'],
    icon: BusinessCenterOutlinedIcon,
    url: 'https://skillnest.com'
  },
  {
    title: 'Vehicle Inspection Platform',
    desc: 'A system for remote inspection and reporting',
    tags: ['Enterprise', 'Automation'],
    icon: DirectionsCarFilledOutlinedIcon,
    url: '#'
  },
  {
    title: 'Custom Dashboards & Secure Systems',
    desc: 'Built for teams and organizations',
    tags: ['Internal Tools', 'Security'],
    icon: GridViewOutlinedIcon,
    url: '#'
  },
];

const Portfolio = () => {
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

  const getFadeInStyle = (delay: number = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
  });

  return (
    <Box 
      id="portfolio" 
      ref={domRef}
      sx={{ py: { xs: 8, md: 12 }, bgcolor: '#fbfcfd' }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8, ...getFadeInStyle() }}>
          <Typography variant="h2" sx={{ fontWeight: 900, color: 'secondary.main', fontSize: { xs: '2.2rem', md: '3.5rem' }, mb: 2 }}>
            What We've Built & Incubated
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', maxWidth: '600px', mx: 'auto' }}>
            Real solutions that solve real problems for people and organizations.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {projects.map((project, index) => {
            const IconTag = project.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    ...getFadeInStyle(0.2 + index * 0.1),
                    p: 4,
                    height: '100%',
                    borderRadius: '6px',
                    border: '1px solid #eef2f6',
                    bgcolor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease-in-out',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-12px)',
                      boxShadow: '0 20px 40px -10px rgba(26, 31, 61, 0.1)',
                      // ONLY the icon changes color here
                      '& .project-icon': {
                        color: 'primary.main', 
                        transform: 'scale(1.1)',
                      },
                      '& .visit-link': {
                        opacity: 1,
                        transform: 'translate(0, 0)',
                      }
                    },
                  }}
                >
                  {/* Website Link */}
                  <Tooltip title="Visit Website" placement="top">
                    <IconButton
                      component="a"
                      href={project.url}
                      target="_blank"
                      className="visit-link"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        bgcolor: 'secondary.main',
                        color: 'primary.main',
                        opacity: 0,
                        transform: 'translate(10px, -10px)',
                        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        borderRadius: '6px',
                        zIndex: 2,
                        '&:hover': { bgcolor: 'primary.main', color: 'secondary.main' }
                      }}
                    >
                      <LanguageIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>

                  {/* Icon Box - Background stays constant */}
                  <Box
                    sx={{
                      width: 54,
                      height: 54,
                      borderRadius: '6px',
                      bgcolor: '#f1f5f9', // Stays light grey/blue
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 4,
                    }}
                  >
                    <IconTag 
                      className="project-icon" 
                      sx={{ 
                        fontSize: '1.8rem', 
                        color: 'secondary.main', // Starts as Navy
                        transition: 'all 0.3s ease' 
                      }} 
                    />
                  </Box>

                  <Typography variant="h6" sx={{ fontWeight: 800, color: 'secondary.main', mb: 1.5, pr: 3, lineHeight: 1.3 }}>
                    {project.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4, flexGrow: 1, lineHeight: 1.6 }}>
                    {project.desc}
                  </Typography>

                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{ borderRadius: '6px', bgcolor: '#f1f5f9', color: '#64748b', fontWeight: 700, fontSize: '0.7rem' }}
                      />
                    ))}
                  </Stack>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;