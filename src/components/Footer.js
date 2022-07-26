import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assets/logos/wolf.png'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    })
  }

  return (
    <Box>
      <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
        <img onClick={scrollToTop} src={Logo} alt="logo" style={{ width: '150px', height: '150px', cursor: 'pointer' }} />
      </Stack>
      <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Your greatest Wealth is your Health.</Typography>
    </Box>
  )
}

export default Footer