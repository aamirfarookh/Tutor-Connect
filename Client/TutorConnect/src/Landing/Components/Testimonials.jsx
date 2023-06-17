import { Box, Container, styled, Typography } from "@mui/material";
// import React from "react";

import { testimonials } from "../media/testimonials/properties";

const Testimonials = () => {
  
  const GridBox=styled(Box)(({theme}) => ({
    display:"grid", 
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '3rem',
    padding: '1rem',
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: 'repeat(1, 1fr)'
    }
  }))
  const ImgBox=styled(Box)(({theme}) => ({
    flex: 0.4, 
    display: 'flex',
    [theme.breakpoints.down("md")]: {
      display: 'none'
    }
  }))
  const TextBox=styled(Box)(({theme}) => ({
    display:'flex', 
    flexDirection: 'column', 
    flex: 0.6,
    padding:'1rem 0',
    [theme.breakpoints.down("md")]: {
      display: 'block',
      marginBottom: '3rem',
      flex: 1,
      marginLeft: '1.5rem',
      marginRight: '1.5rem',

    }
  }))
  const itemDiv={
    display:'flex', 
    padding: '2rem 2rem 0rem 2rem',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    borderRadius: '1rem',
    justifyContent: 'space-between',
    
  }
  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  return (
    <Box sx={{ mt: 5, backgroundColor: "#F9FAFB", py: 6 }}>
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

        <GridBox>
          {testimonials.map((el)=>(
            <div  key={el.head} style={{...itemDiv,backgroundColor: `${el.bgColor}`}}>
              <TextBox>
                <Typography variant='h5' sx={{fontWeight: 600, paddingBottom: '1rem'}}>
                  {el.head}
                </Typography>
                <Typography variant="subtitle1">
                  {el.des}
                </Typography>
              </TextBox>
              <ImgBox>
                <img src={el.image} alt="" style={{width: '100%', aspectRatio: '1/1.4'}}/>
              </ImgBox>
            </div>
          ))}
        </GridBox>
      </Container>
    </Box>
  );
};

export default Testimonials;
