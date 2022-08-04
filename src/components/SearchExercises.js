import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

import HorizontalScrollBox from './HorizontalScrollBox'

import { dbOptions, fetchData } from '../utils/fetchData'

const SearchExercises = ({ setExercises,  setBodyPart, bodyPart }) => {
    const [search, setSearch] = useState('')
    const [selection, setSelection] = useState([])

    useEffect(() => {
        const fetchExerciseData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', dbOptions )

            setSelection(['all', ...bodyPartsData])
        }
        fetchExerciseData()
    }, [])
    

    const handleSearch = async () => {
        if (search) {
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', dbOptions )
            const searchedExercises = exerciseData.filter(
                (item) => item.name.toLowerCase().includes(search)
                       || item.target.toLowerCase().includes(search)
                       || item.equipment.toLowerCase().includes(search)
                       || item.bodyPart.toLowerCase().includes(search)
            )
            
            setSearch('')
            setExercises(searchedExercises)

        }
    }

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
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                />
                <Button className="button" sx={{ bgcolor: '#a2a2c7', color: '#fffbfd', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollBox data={selection} setBodyPart={setBodyPart} bodyPart={bodyPart} />
            </Box>
        </Stack>
    )
}

export default SearchExercises