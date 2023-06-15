// import React from 'react'
import { Container } from "@mui/system";
import { Box, styled, Typography } from "@mui/material";

const Schools = () => {
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
    color: "#fff", height: "fit-content" ,width: '%', padding: "2rem", margin: '0 auto', textAlign: 'center', alignItems: 'center'
}));
      
  return (
    <CustomBox sx={{outline: '1px solid black', margin: '0'}}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100v' }} />
    </CustomBox>
  )
}

export default Schools