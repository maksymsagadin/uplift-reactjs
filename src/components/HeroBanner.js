import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import HeroBannerImage from '../assets/images/banner.jpg'

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '150px', xs: '70px' }, ml: { sm: '25px' } }} position="relative" p="24px">
        <Typography zIndex='-1' fontWeight={600} color="#7d7b8d" sx={{ position: 'absolute', opacity: '0.2', display: { lg: 'block', xs: 'none' }, ml: '36px', mb: '36px', fontSize: '222px' }}>
            Uplift
        </Typography>
        <Typography color="#d46e5e" fontWeight="600" fontSize="26px">Fitness Club</Typography>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="24px" mt="30px">
            Sweat, Smile <br />
            And Repeat
        </Typography>
        <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
            Check out the most effective exercises personalized to you
        </Typography>
        <Stack>
            <a href="#exercises" className='button' style={{ position: 'relative', marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#a2a2c7', padding: '14px', fontSize: '22px', textTransform: 'none', color: '#fffbfd', borderRadius: '4px' }}>Explore Exercises</a>
        </Stack>
        
        <img src={HeroBannerImage} alt="pexels-cottonbro" className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner