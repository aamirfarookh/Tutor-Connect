import { Box, Container, styled, Typography } from "@mui/material";
// import React from "react";

import { testimonials } from "../media/testimonials/properties";

const Testimonials = () => {
  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  return (
    <Box sx={{ mt: 5, backgroundColor: "#F5FAFE", py: 10 }}>
      <Container>
      
        <PropertiesTextBox>
          <Typography
            variant="h3"
            sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339",mt: 1 , textAlign: "center"}}>
            Enable better outcomes
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "35px",
              fontWeight: "bold",
              color: "#008CF0",
              textAlign: "center"}}>
            for everyone
          </Typography>
        </PropertiesTextBox>

        <PropertiesBox>
          Hi
        </PropertiesBox>
      </Container>
    </Box>
  );
};

export default Testimonials;
