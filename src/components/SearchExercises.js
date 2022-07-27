import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'


const SearchExercises = () => {
  return (
    <Stack alignItems='center' justifyContent='center' p='20px' mt='250px'>
        <Typography fontWeight={700} sx={{ fontSize:{ lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
            Give These <br />
            Exercises A Try
        </Typography>
        <Box position='relative'>
            <TextField
                sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fffbfd', borderRadius: '4px' }}
                height='76px'
                value=''
                onChange={(e) => {}}
                placeholder="Search Exercises"
                type="text"
            />
            <Button className="button" sx={{ bgcolor: '#a2a2c7', color: '#fffbfd', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0', fontSize: { lg: '20px', xs: '14px' } }} onClick={(e) => {}}>
                Search
            </Button>
                
        </Box>
    </Stack>
  )
}

export default SearchExercises