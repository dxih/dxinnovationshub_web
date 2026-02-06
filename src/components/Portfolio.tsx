import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Chip,
  IconButton,
  Tooltip,
} from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import Bg2 from "../assets/bg2.jpg";


interface Project {
  title: string;
  desc: string;
  tags: string[];
  icon: React.ElementType;
  url: string;
}

const projects: Project[] = [
  {
    title: "AppreLab",
    desc: "An edtech platform connecting learning to work and earning.",
    tags: ["EdTech", "Platform"],
    icon: SchoolOutlinedIcon,
    url: "https://apprelab.com",
  },
  {
    title: "SkillNest",
    desc: "A digital apprenticeship program growing job-ready tech talent.",
    tags: ["Talent Development", "Program"],
    icon: BusinessCenterOutlinedIcon,
    url: "https://skillnest.com",
  },
  {
    title: "Vehicle Inspection Platform",
    desc: "Remote inspection and reporting system for operational teams.",
    tags: ["Enterprise", "Automation"],
    icon: DirectionsCarFilledOutlinedIcon,
    url: "#",
  },
  {
    title: "Custom Dashboards & Secure Systems",
    desc: "Internal dashboards and secure systems built for organizations.",
    tags: ["Internal Tools", "Security"],
    icon: GridViewOutlinedIcon,
    url: "#",
  },
];

const Portfolio = () => {
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
      id="portfolio"
      ref={ref}
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: "#fbfcfd",        
        backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0)
        ), url(${Bg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ maxWidth: 720, mb: 10 }}>
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
            Portfolio
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "2rem", md: "2.8rem" },
              fontWeight: 700,
              color: "secondary.main",
              mb: 2,
            }}
          >
            What We’ve Built & Incubated
          </Typography>
          <Typography
            sx={{
              color: "tsecondary.main",
              fontSize: "1rem",
              lineHeight: 1.7,
            }}
          >
            A selection of platforms, programs, and systems we’ve designed and
            deployed across different domains.
          </Typography>
        </Box>

        {/* Grid */}
        <Grid container spacing={6}>
          {projects.map((project, i) => {
            const Icon = project.icon;

            return (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box
                  sx={{
                    height: "100%",
                    pt: 3,
                    borderTop: "1px solid",
                    borderColor: "divider",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(16px)",
                    transition: `all 0.5s ease ${i * 0.1}s`,
                    "&:hover .project-link": {
                      opacity: 1,
                    },
                  }}
                >
                  {/* Top Row */}
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={3}
                  >
                    <Icon
                      sx={{
                        fontSize: "1.4rem",
                        color: "secondary.main",
                      }}
                    />

                    <Tooltip title="Visit website">
                      <IconButton
                        component="a"
                        href={project.url}
                        target="_blank"
                        size="small"
                        className="project-link"
                        sx={{
                          opacity: 0.4,
                          transition: "opacity 0.2s ease",
                          color: "secondary.main",
                        }}
                      >
                        <LanguageIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Stack>

                  {/* Content */}
                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      mb: 1,
                      lineHeight: 1.3,
                      color: "secondary.main",
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      color: "secondary.main",
                      lineHeight: 1.6,
                      mb: 3,
                    }}
                  >
                    {project.desc}
                  </Typography>

                  {/* Tags */}
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: "transparent",
                          border: "1px solid",
                          borderColor: "divider",
                          borderRadius: "4px",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                          color: "secondary.main",
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;
