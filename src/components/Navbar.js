import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from '../assets/logos/wolf.png'



const Navbar = () => {
  return (
    <Stack 
      direction='row'
      justifyContent='space-around'
      alignItems='center'
      px='36px'
      sx={{ 
        gap: { sm: '123px', xs: '40px' },
        mt: { sm: '24px', xs: '16px' },
        justifyContent: 'none'
      }}
      >
      <Link to='/'>
        <img src={Logo} alt='logo' style={{ width: '60px', height: '60px' }} />
      </Link>
      <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end' >
        <Link to='/' style={{ textDecoration: 'none', color: '#3d3b4a', borderBottom: '3px solid #a2a2c6' }}>Home</Link>
        <a href='#exercises' style={{ textDecoration: 'none', color: '#3d3b4a' }}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar