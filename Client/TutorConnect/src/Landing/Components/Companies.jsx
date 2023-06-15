import { Box, Container, styled, Typography } from "@mui/material";
// import React from "react";
import logoImg from "../media/logo.png";
import starsImg from "../media/Star.png";
// import logosImg from "../media/logos.png";
import appStoreBadge from '../media/app-store-badge.png'
import playStoreBadge from '../media/google-play-badge.png'

const Companies = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  }));
  const customStyle={
    width: '10rem',
    margin: '1rem 0rem',
    cursor: 'pointer'
  }
  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <CustomContainer>
        <CustomBox>
          <img src={logoImg} alt="logo" style={{ maxWidth: "100%" }} />
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            More than 3,000+ Daily Downloads
          </Typography>
        </CustomBox>

        <Box sx={{ display: 'flex',flexDirection: "column",justifyContent: "space-between",alignItems: "center",textAlign: "center"}}>
          <img src={playStoreBadge} alt="google play" style={customStyle}/>
          <img src={appStoreBadge} alt="apple app store" style={customStyle}/>
          <img src={starsImg} alt="stars" style={{ maxWidth: "100%" }} />
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            5-Star Rating (2k+ Reviews)
          </Typography>
        </Box>
      </CustomContainer>

      {/* <Container sx={{ display: "flex", flexDirection: "column"}}>
        
        <img src={logosImg} alt="logos" />
      </Container> */}
    </Box>
  );
};

export default Companies;
