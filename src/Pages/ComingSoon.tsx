import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "#fff",
      }}
    >
      <Container maxWidth="sm">
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "2.6rem" },
            fontWeight: 700,
            mb: 2,
            color: "text.primary",
          }}
        >
          Coming Soon
        </Typography>

        <Typography
          sx={{
            fontSize: "1rem",
            color: "text.secondary",
            lineHeight: 1.7,
            mb: 4,
          }}
        >
          This page is currently under development. We’re working on it and it
          will be available soon.
        </Typography>

        <Button
          variant="outlined"
          onClick={() => navigate("/")}
          sx={{
            textTransform: "none",
            fontWeight: 600,
            borderRadius: "6px",
          }}
        >
          Back to Home
        </Button>
      </Container>
    </Box>
  );
};

export default ComingSoon;
