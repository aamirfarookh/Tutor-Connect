import { Box, styled, Typography } from "@mui/material";
// import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


import {
  commerce,english,data_science,physics, geo, chem, math, psycho, soft_skill, med
} from '../media/Subject icons/Subjects'

const Courses = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));


  const imgStyle={
    width:'90px',
    padding: '1rem'
  }
  const center={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // outline: '1px solid',
    margin: "0"
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>

      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 ,            textAlign: "center",}}
      >
        Browse Course by Categories 
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
          }}
        >
          Browse through some of our specialized courses
        </Typography>
      </CustomBox>


      <Box sx={{ mt: 4, mb: 4, padding:'1rem 0'}}>
          <Splide 
              options={{
                width: '70vw',
                gap: '-2rem',
                perPage: 5,
                focus  : 0,
                omitEnd: true,
                padding: '0rem',
                arrows: true,
                drag: true,
                pagination: false,
                lazyLoad:'sequential',
                breakpoints:{
                  900: {perPage: 4,width: '90vw'},
                  600: {perPage: 2,width: '90vw'}
                }
              }}
              style={{}}
              >
              <SplideSlide style={center}>
                <div style={{center,padding: '1rem' ,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', margin: '0.2rem 0', cursor: 'pointer', borderRadius: '1rem'}}>
                  <img src={math} alt="" style={imgStyle}/>
                  <Typography sx={{textAlign: 'center', fontWeight: 700}}>
                    Mathematics
                  </Typography>
                </div>
              </SplideSlide>
              <SplideSlide style={center}>
                <div style={{center,padding: '1rem' ,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', margin: '0.2rem 0', cursor: 'pointer', borderRadius: '1rem'}}>
                  <img src={english} alt="" style={imgStyle}/>
                  <Typography sx={{textAlign: 'center', fontWeight: 700}}>
                    English
                  </Typography>
                </div>
              </SplideSlide>
              <SplideSlide style={center}>
                <div style={{center,padding: '1rem' ,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', margin: '0.2rem 0', cursor: 'pointer', borderRadius: '1rem'}}>
                  <img src={physics} alt="" style={imgStyle}/>
                  <Typography sx={{textAlign: 'center', fontWeight: 700}}>
                    Physics
                  </Typography>
                </div>
              </SplideSlide>
              <SplideSlide style={center}>
                <div style={{center,padding: '1rem' ,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', margin: '0.2rem 0', cursor: 'pointer', borderRadius: '1rem'}}>
                  <img src={soft_skill} alt="" style={imgStyle}/>
                  <Typography sx={{textAlign: 'center', fontWeight: 700}}>
                    Soft-Skills
                  </Typography>
                </div>
              </SplideSlide>
              <SplideSlide style={center}>
                <div style={{center,padding: '1rem' ,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', margin: '0.2rem 0', cursor: 'pointer', borderRadius: '1rem'}}>
                  <img src={chem} alt="" style={imgStyle}/>
                  <Typography sx={{textAlign: 'center', fontWeight: 700}}>
                    Chemistry
                  </Typography>
                </div>
              </SplideSlide>
              <SplideSlide style={center}>
                <div style={{center,padding: '1rem' ,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', margin: '0.2rem 0', cursor: 'pointer', borderRadius: '1rem'}}>
                  <img src={data_science} alt="" style={imgStyle}/>
                  <Typography sx={{textAlign: 'center', fontWeight: 700}}>
                    Data Science
                  </Typography>
                </div>
              </SplideSlide>
              <SplideSlide style={center}>
                <div style={{center,padding: '1rem' ,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', margin: '0.2rem 0', cursor: 'pointer', borderRadius: '1rem'}}>
                  <img src={geo} alt="" style={imgStyle}/>
                  <Typography sx={{textAlign: 'center', fontWeight: 700}}>
                    Geography
                  </Typography>
                </div>
              </SplideSlide>
              <SplideSlide style={center}>
                <div style={{center,padding: '1rem' ,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', margin: '0.2rem 0', cursor: 'pointer', borderRadius: '1rem'}}>
                  <img src={commerce} alt="" style={imgStyle}/>
                  <Typography sx={{textAlign: 'center', fontWeight: 700}}>
                    Commerce
                  </Typography>
                </div>
              </SplideSlide>
              <SplideSlide style={center}>
                <div style={{center,padding: '1rem' ,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', margin: '0.2rem 0', cursor: 'pointer', borderRadius: '1rem'}}>
                  <img src={med} alt="" style={imgStyle}/>
                  <Typography sx={{textAlign: 'center', fontWeight: 700}}>
                    Medical
                  </Typography>
                </div>
              </SplideSlide>
              <SplideSlide style={center}>
                <div style={{center,padding: '1rem' ,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', margin: '0.2rem 0', cursor: 'pointer', borderRadius: '1rem'}}>
                  <img src={psycho} alt="" style={imgStyle}/>
                  <Typography sx={{textAlign: 'center', fontWeight: 700}}>
                    Psychology
                  </Typography>
                </div>
              </SplideSlide>
              
              
          </Splide>
      </Box>



    </Box>
  );
};

export default Courses;
