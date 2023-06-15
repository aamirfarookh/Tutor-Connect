// import React from 'react'
import { Box, Typography } from "@mui/material";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import {
    one, two, three, four, five, six
} from '../media/SlideImages/slideImages'



const SlidingImages1 = () => {
    const imgStyle={
        height: '25rem',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        borderRadius: '1rem'
    }
    const customSplideSlide={
        display: 'flex',
        justifyContent: 'center',
        minWidth: 'fit-content',
        // outline: '1px solid black'

    }
  return (
    <Box sx={{ backgroundColor: '#F9FAFB',mt: 4, mb: 4, padding:'2rem 0', textAlign: 'center', display:'flex',
    flexDirection: 'column',gap: '5rem'}}>
        <Typography variant="h6" style={{letterSpacing: '5px'}}>
            COMPLETE MOBILE & WEB SOLUTION
        </Typography>
        <Splide 
            options={{
                    type: "loop",
                    drag: "free",
                    gap:'1rem',
                    arrows: false,
                    pagination: false,
                    perPage: 3,
                    autoScroll: {
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    rewind: false,
                    speed: 1,
                    padding: '1rem',
                }
            }}
            extensions={{ AutoScroll }}
            >
            <SplideSlide style={customSplideSlide}>
                <img src={one} alt="" style={imgStyle}/>
            </SplideSlide>
            <SplideSlide style={customSplideSlide}>
                <img src={three} alt="" style={imgStyle} />
            </SplideSlide>
            <SplideSlide style={customSplideSlide}>
                <img src={two} alt="" style={imgStyle} />
            </SplideSlide>
            <SplideSlide style={customSplideSlide}>
                <img src={five} alt="" style={imgStyle} />
            </SplideSlide>
            <SplideSlide style={customSplideSlide}>
                <img src={four} alt="" style={imgStyle} />
            </SplideSlide>
            <SplideSlide style={customSplideSlide}>
                <img src={six} alt="" style={imgStyle} />
            </SplideSlide>
        </Splide>
    </Box>
  )
}

export default SlidingImages1