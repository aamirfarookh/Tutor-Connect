// import React from 'react'
import { Box } from "@mui/material";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import {
    one,two,three,threeone,threetwo, threethree, four, five,six,seven, eight, nine
} from '../media/Schools/images'



const Schools = () => {
    const imgStyle={
        width:'8rem'
    }

  return (
    <Box sx={{ mt: 4, mb: 4, padding:'1rem 0'}}>
        <Splide 
            options={{
                type: "loop",
                drag: "free",
                gap: '10rem',
                arrows: false,
                pagination: false,
                perPage: 6,
                autoScroll: {
                pauseOnHover: false,
                pauseOnFocus: false,
                rewind: false,
                speed: 1,
                padding: '1rem'
                }
            }}
            extensions={{ AutoScroll }}
            >
            <SplideSlide>
                <img src={one} alt="" style={imgStyle}/>
            </SplideSlide>
            <SplideSlide>
                <img src={two} alt="" style={imgStyle} />
            </SplideSlide>
            <SplideSlide>
                <img src={three} alt="" style={imgStyle} />
            </SplideSlide>
            <SplideSlide>
                <img src={threeone} alt="" style={imgStyle} />
            </SplideSlide>
            <SplideSlide>
                <img src={threetwo} alt="" style={imgStyle} />
            </SplideSlide>
            <SplideSlide>
                <img src={threethree} alt="" style={imgStyle} />
            </SplideSlide>
            <SplideSlide>
                <img src={four} alt="" style={imgStyle} />
            </SplideSlide>
            <SplideSlide>
                <img src={five} alt="" style={imgStyle} />
            </SplideSlide>
            <SplideSlide>
                <img src={six} alt="" style={imgStyle} />
            </SplideSlide>
            <SplideSlide>
                <img src={seven} alt="" style={imgStyle} />
            </SplideSlide>
            <SplideSlide>
                <img src={eight} alt="" style={imgStyle} />
            </SplideSlide>
            <SplideSlide>
                <img src={nine} alt="" style={imgStyle} />
            </SplideSlide>
        </Splide>
    </Box>
  )
}

export default Schools