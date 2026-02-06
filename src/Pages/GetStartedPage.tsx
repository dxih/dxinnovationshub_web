import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import {
  Box,
  Container,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Stack,
  Button,
  Divider,
  Paper,
  alpha,
} from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import Bg2 from "../assets/bg2.jpg";

const GetStartedPage = () => {
  // Logic to clear the form on page load/back button
  const [successOpen, setSuccessOpen] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ⛔ stop redirect

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        form.reset();
        setFormKey((prev) => prev + 1); 
        setSuccessOpen(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (err) {
      console.error("Submission failed", err);
    }
  };

  const selectionRowStyle = {
    m: 0,
    mb: 1.5,
    p: 1.5,
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    transition: "0.2s all ease",
    width: "100%",
    "&:hover": { bgcolor: "#f8fafc" },
    "&:has(input:checked)": {
      borderColor: "primary.main",
      bgcolor: alpha("#FFC843", 0.08),
    },
  };

  return (
    <Box
      sx={{
        bgcolor: "#fcfcfd",
        minHeight: "100vh",
        pt: { xs: 12, md: 15 },
        pb: 10,
        backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0)
        ), url(${Bg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="md">
        {/* Back Button */}
        <Button
          component={Link}
          to="/"
          startIcon={<ArrowBackIcon />}
          sx={{
            mb: 4,
            color: "text.secondary",
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Back to Home
        </Button>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 8 },
            borderRadius: "32px",
            border: "1px solid #f1f5f9",
          }}
        >
          <form
            id="dx-contact-form"
            action="https://formspree.io/f/xpqldvaj"
            method="POST"
            onSubmit={handleSubmit}
          >
            {/* Header Section */}
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 800,
                letterSpacing: 1.5,
                fontSize: "0.75rem",
              }}
            >
              DX Innovations Hub
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 1,
                color: "secondary.main",
                fontSize: { xs: "1.8rem", md: "2.5rem" },
              }}
            >
              Get Started
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 6,
                color: "text.secondary",
                fontWeight: 500,
                maxWidth: "600px",
                lineHeight: 1.6,
              }}
            >
              Turn ideas, challenges, or ambitions into real digital outcomes.
              Share a bit about what you need, and we’ll guide the next move.
            </Typography>

            <Stack spacing={6}>
              {/* 01. Objective Section */}
              <FormControl component="fieldset" required>
                <FormLabel
                  sx={{
                    fontWeight: 800,
                    color: "primary.main",
                    mb: 1,
                    fontSize: "0.65rem",
                    textTransform: "uppercase",
                  }}
                >
                  01. Objective
                </FormLabel>
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "secondary.main",
                    mb: 0.5,
                    fontSize: "0.9rem",
                  }}
                >
                  What are you looking to get started with?
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    mb: 2,
                    display: "block",
                    color: "text.secondary",
                    fontSize: "0.7rem",
                  }}
                >
                  (Select the option that best describes your current need. You
                  don’t need to have everything figured out.)
                </Typography>

                <RadioGroup name="OBJECTIVE" key={formKey}>
                  <FormControlLabel
                    value="Talent Incubation"
                    sx={selectionRowStyle}
                    control={<Radio size="small" sx={{ mt: -1 }} />}
                    label={
                      <Box>
                        <Typography
                          sx={{ fontWeight: 700, fontSize: "0.85rem" }}
                        >
                          Talent Incubation
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ fontSize: "0.7rem" }}
                        >
                          Skill development, mentorship, and real-world project
                          experience.
                        </Typography>
                      </Box>
                    }
                  />
                  <FormControlLabel
                    value="Startup or Platform Incubationp"
                    sx={selectionRowStyle}
                    control={<Radio size="small" sx={{ mt: -1 }} />}
                    label={
                      <Box>
                        <Typography
                          sx={{ fontWeight: 700, fontSize: "0.85rem" }}
                        >
                          Startup or Platform Incubation
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ fontSize: "0.7rem" }}
                        >
                          Idea validation, MVP development, and early-stage
                          growth support.
                        </Typography>
                      </Box>
                    }
                  />
                  <FormControlLabel
                    value="Digital Product Development"
                    sx={selectionRowStyle}
                    control={<Radio size="small" sx={{ mt: -1 }} />}
                    label={
                      <Box>
                        <Typography
                          sx={{ fontWeight: 700, fontSize: "0.85rem" }}
                        >
                          Digital Product Development
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ fontSize: "0.7rem" }}
                        >
                          Web applications, mobile apps, and internal tools.
                        </Typography>
                      </Box>
                    }
                  />
                  <FormControlLabel
                    value="Custom Solutions & Process Automation"
                    sx={selectionRowStyle}
                    control={<Radio size="small" sx={{ mt: -1 }} />}
                    label={
                      <Box>
                        <Typography
                          sx={{ fontWeight: 700, fontSize: "0.85rem" }}
                        >
                          Custom Solutions & Process Automation
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ fontSize: "0.7rem" }}
                        >
                          Tailored digital systems to improve operations,
                          efficiency, or scale.
                        </Typography>
                      </Box>
                    }
                  />
                  <FormControlLabel
                    value="strategy, Advisory or Partnership"
                    sx={selectionRowStyle}
                    control={<Radio size="small" sx={{ mt: -1 }} />}
                    label={
                      <Box>
                        <Typography
                          sx={{ fontWeight: 700, fontSize: "0.85rem" }}
                        >
                          Strategy, Advisory or Partnership
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ fontSize: "0.7rem" }}
                        >
                          Strategic guidance, collaboration, or long-term
                          engagement.
                        </Typography>
                      </Box>
                    }
                  />
                  <FormControlLabel
                    value="Not Sure Yet — I Need Guidance"
                    sx={selectionRowStyle}
                    control={<Radio size="small" />}
                    label={
                      <Typography sx={{ fontWeight: 700, fontSize: "0.85rem" }}>
                        Not Sure Yet — I Need Guidance
                      </Typography>
                    }
                  />
                </RadioGroup>
              </FormControl>

              {/* 02. Description Section */}
              <Box>
                <FormLabel
                  sx={{
                    fontWeight: 800,
                    color: "primary.main",
                    mb: 1,
                    fontSize: "0.65rem",
                    textTransform: "uppercase",
                  }}
                >
                  02. Tell Us a Bit More
                </FormLabel>
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "secondary.main",
                    mb: 1,
                    fontSize: "0.9rem",
                  }}
                >
                  Brief Description
                </Typography>
                <TextField
                  name="BRIEF DESCRIPTION"
                  fullWidth
                  multiline
                  rows={2}
                  placeholder="What problem are you trying to solve, or what are you hoping to achieve?"
                  required
                  variant="filled"
                  InputProps={{
                    disableUnderline: true,
                    sx: {
                      borderRadius: "12px",
                      bgcolor: "#f8fafc",
                      fontSize: "0.85rem",
                    },
                  }}
                />
              </Box>

              {/* 03 & 04. Timeline & Budget */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: 4,
                }}
              >
                <FormControl required>
                  <FormLabel
                    sx={{
                      fontWeight: 800,
                      color: "primary.main",
                      mb: 1,
                      fontSize: "0.65rem",
                      textTransform: "uppercase",
                    }}
                  >
                    03. Timeline
                  </FormLabel>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 700, mb: 1, fontSize: "0.85rem" }}
                  >
                    When are you looking to start?
                  </Typography>
                  <RadioGroup name="TIMELINE" key={formKey}>
                    <FormControlLabel
                      value="immediately"
                      control={<Radio size="small" />}
                      label={
                        <Typography sx={{ fontSize: "0.8rem" }}>
                          Immediately
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="within 1-3-months"
                      control={<Radio size="small" />}
                      label={
                        <Typography sx={{ fontSize: "0.8rem" }}>
                          Within 1–3 months
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="within 3-6-months"
                      control={<Radio size="small" />}
                      label={
                        <Typography sx={{ fontSize: "0.8rem" }}>
                          Within 3–6 months
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="Just exploring"
                      control={<Radio size="small" />}
                      label={
                        <Typography sx={{ fontSize: "0.8rem" }}>
                          Just exploring
                        </Typography>
                      }
                    />
                  </RadioGroup>
                </FormControl>

                <FormControl required>
                  <FormLabel
                    sx={{
                      fontWeight: 800,
                      color: "primary.main",
                      mb: 1,
                      fontSize: "0.65rem",
                      textTransform: "uppercase",
                    }}
                  >
                    04. Budget Stage
                  </FormLabel>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 700, mb: 1, fontSize: "0.85rem" }}
                  >
                    Which best describes your position?
                  </Typography>
                  <RadioGroup name="BUDGET STAGE" key={formKey}>
                    <FormControlLabel
                      value="i have a defined Budget"
                      control={<Radio size="small" />}
                      label={
                        <Typography sx={{ fontSize: "0.8rem" }}>
                          I have a defined budget
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="Budget is been planned"
                      control={<Radio size="small" />}
                      label={
                        <Typography sx={{ fontSize: "0.8rem" }}>
                          Budget is being planned
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="Not Sure"
                      control={<Radio size="small" />}
                      label={
                        <Typography sx={{ fontSize: "0.8rem" }}>
                          Not sure yet
                        </Typography>
                      }
                    />
                  </RadioGroup>
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 1,
                      color: "text.secondary",
                      fontStyle: "italic",
                      fontSize: "0.65rem",
                    }}
                  >
                    (This helps us respond appropriately — not to disqualify
                    you.)
                  </Typography>
                </FormControl>
              </Box>

              <Divider />

              {/* 05. Contact Details */}
              <Box>
                <FormLabel
                  sx={{
                    fontWeight: 800,
                    color: "primary.main",
                    mb: 2,
                    fontSize: "0.65rem",
                    textTransform: "uppercase",
                    padding: 0,
                  }}
                >
                  05. Your Details
                </FormLabel>
                <Stack spacing={2}>
                  <TextField
                    name="FULL Name"
                    label="Full Name"
                    size="small"
                    fullWidth
                    variant="outlined"
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "10px",
                        fontSize: "0.85rem",
                        py: 0.5,
                      },
                    }}
                  />
                  <TextField
                    name="EMAIL"
                    type="email"
                    label="Email Address"
                    size="small"
                    fullWidth
                    variant="outlined"
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "10px",
                        fontSize: "0.85rem",
                        py: 0.5,
                      },
                    }}
                  />
                  <TextField
                    name="ORGANIZATION"
                    label="Organization / Project Name (optional)"
                    size="small"
                    fullWidth
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "10px",
                        fontSize: "0.85rem",
                        py: 0.5,
                      },
                    }}
                  />
                </Stack>
              </Box>
              <Box sx={{ pt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    py: 1.8,
                    fontWeight: 800,
                    borderRadius: "12px",
                    bgcolor: "primary.main",
                    color: "secondary.main",
                    fontSize: "0.95rem",
                    textTransform: "none",
                    boxShadow: "0 10px 15px -3px rgba(255, 200, 67, 0.4)",
                    "&:hover": { bgcolor: "secondary.main", color: "white" },
                  }}
                >
                  Get Started
                </Button>

                <Typography
                  variant="caption"
                  sx={{
                    mt: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 0.8,
                    color: "secondary.main",
                    fontWeight: 700,
                    textAlign: "center",
                    fontSize: "0.75rem",
                  }}
                >
                  <StarsIcon sx={{ fontSize: 14, color: "primary.main" }} />
                  We’ll review your submission and reach out with next steps.
                </Typography>

                <Divider sx={{ my: 3, borderStyle: "dashed" }} />

                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "center",
                    color: "text.secondary",
                    fontWeight: 500,
                    fontSize: "0.75rem",
                    lineHeight: 1.4,
                  }}
                >
                  DX Innovations Hub works with individuals, teams, startups,
                  and organizations at different stages.
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    mt: 1,
                    display: "block",
                    textAlign: "center",
                    color: "primary.main",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                  }}
                >
                  Every engagement begins with understanding your context before
                  proposing solutions.
                </Typography>
                <Snackbar
                  open={successOpen}
                  autoHideDuration={4000}
                  onClose={() => setSuccessOpen(false)}
                  anchorOrigin={{ vertical: "top", horizontal: "center" }}
                >
                  <Alert
                    onClose={() => setSuccessOpen(false)}
                    severity="success"
                    variant="filled"
                    sx={{
                      fontWeight: 700,
                      borderRadius: "12px",
                      fontSize: "0.85rem",
                      bgcolor: "secondary.main",
                      color: "white",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                    }}
                  >
                    Submission received successfully. Our team will reach out
                    shortly.
                  </Alert>
                </Snackbar>
              </Box>
            </Stack>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default GetStartedPage;
