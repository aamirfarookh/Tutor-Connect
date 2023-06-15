import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
// import React from "react";
import Navbar from "./Navbar";

import heroImg from "../media/hero-boy.png";
import CustomButton from "./CustomButton";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(1),
    // marginBottom: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    padding: "0rem 2rem 0rem 2rem"
  }));
  
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "45px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
      <Container>
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: "1.15"}}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "22px",
                color: "#687690",
                fontWeight: "700",
                mt: 2,
                mb: 2,
              }}
            >
              Best E-Learning Platform
            </Typography>
            <Title variant="h1">
              Getting Best Quality Education is Now More Easier
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "22px", color: "#5A6473", my: 4 }}
            >
              Unlocking the true potential of education providers through cutting-edge technology!
            </Typography>
            <CustomButton
              backgroundColor="#1DA1F2"
              color="#fff"
              buttonText="Get Started"
              heroBtn={true}
            />
          </Box>

          <Box sx={{ flex: "1" }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth: "100%"}}
            />
          </Box>
        </CustomBox>
        
      </Container>
      <CustomBox sx={{ backgroundColor: "#1DA1F2", color: "#fff", height: "fit-content" ,width: '%', padding: "2rem", margin: '0 auto', textAlign: 'center', alignItems: 'center'}}>
        <Box sx={{ flex: "1" }}>
          <Typography variant="h4" sx={{fontWeight: 700}}>
            8K+
          </Typography>
          <Typography variant="body1">
            Success Stories
          </Typography>
        </Box>
        <Box sx={{ flex: "1" }}>
          <Typography variant="h4" sx={{fontWeight: 700}}>
            200+
          </Typography>
          <Typography variant="body1">
            Expert Instructors
          </Typography>
        </Box>
        <Box sx={{ flex: "1" }}>
          <Typography variant="h4" sx={{fontWeight: 700}}>
            108K+
          </Typography>
          <Typography variant="body1">
            Worldwide Students
          </Typography>
        </Box>
        <Box sx={{ flex: "1"}}>
          <Typography variant="h4" sx={{fontWeight: 700}}>
            310+
          </Typography>
          <Typography variant="body1">
            Trendy Subjects
          </Typography>
        </Box>
      </CustomBox>
    </Box>
  );
};

export default Hero;
