import {  styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
// import React from "react";
import homeIllustration from "../media/illus.png";
import CustomButton from "./CustomButton";

const GetStarted = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#EAF7FF",
    height: "416px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3, 3, 0, 3),
      width: "90%",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 10, 0),
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  }));
  const CustomBox1 = styled(Box)(({ theme }) => ({
    flex: 1, display: 'flex', width: '100%', height: '100%', justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      display: 'none'
    },
  }));
  
  return (
    <CustomBox>
      <CustomContainer>
        <Box sx={{flex: 1.5,padding: '', margin: '3rem'}}>
          <Typography
            sx={{ fontSize: "1.7rem", color: "black", fontWeight: "700", my: 3, textAlign:'start' }} 
          >
            Digitize your school in minutes <br/> with Tutor Connect&apos;s Integrated Platform
          </Typography>

          <CustomButton
            backgroundColor="#fff"
            color="#17275F"
            buttonText="Get Started"
            getStartedBtn={true}
          />
        </Box>
        <CustomBox1>
          <img
            src={homeIllustration}
            alt="illustration"
            style={{ height: "100%", backgroundBlendMode: '' }}
            />
        </CustomBox1>
      </CustomContainer>
    </CustomBox>
  );
};

export default GetStarted;
