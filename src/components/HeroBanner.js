import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import HeroBannerImage from '../assets/images/banner.jpg'
// import HeroBannerImage0 from '../assets/images/banner-ruslan-khmelevsky.jpg'

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '150px', xs: '70px' }, ml: { sm: '25px' } }} position="relative" p="24px">
        <Stack>
            <Typography zIndex='-1' fontWeight={600} color="#c6c6a2" sx={{ position: 'absolute', opacity: '90%', display: { lg: 'block', sm: 'block', xs: 'none' }, ml: '36px', mb: '36px', fontSize: '222px' }}>
                Uplift
            </Typography>
            <Typography color="#d46e5e" fontWeight="600" fontSize="26px">Fitness Club</Typography>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' }, color: {lg: 'black', sm: 'black', xs: 'darkgrey'} }} mb="24px" mt="30px">
                Sweat, Smile <br />
                And Repeat
            </Typography>
            <a href="#exercises" className='button' style={{ position: 'relative', marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#a2a2c7', padding: '14px', fontSize: '22px', textTransform: 'none', color: '#fffbfd', borderRadius: '8px' }}>Explore Exercises</a>
        </Stack>
        <Stack>
            <img src={HeroBannerImage} alt="pexels-cottonbro" className="hero-banner-img"/>
        </Stack>
    </Box>
  )
}

export default HeroBanner