import React, { useState, useEffect, useContext } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { ExerciseContext, FilteredContext } from '../contexts/ExerciseContext'
import HorizontalScrollBox from './HorizontalScrollBox'

import { bodyPartsData } from '../data/BodyPartsData'

const SearchExercises = () => {
    const [search, setSearch] = useState('')
    const [selection, setSelection] = useState('all')
    const { allExercises,  } = useContext(ExerciseContext)
    const { setExercises } = useContext(FilteredContext)


    useEffect(() => {
        if (allExercises) {
            if (selection !== 'all') {
                const filteredExercises = allExercises.filter((item) => item.bodyPart.toLowerCase().includes(selection.toLowerCase()))
                setExercises(filteredExercises)
            }
            else {
                setExercises(allExercises)
            }
        }
      }, [allExercises, setExercises, selection])

    const handleSearch = () => {
        if (search) {
            const searchedExercises = allExercises.filter(
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
        <Stack alignItems='center' justifyContent='center' p='20px' sx={{ mt:{ lg: '200px', xs: '50px' } }}>
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
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    placeholder="Search Exercises"
                    type="text"
                />
                <Button className="button" sx={{ bgcolor: '#a2a2c7', color: '#fffbfd', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px', mb:'12px', mt: { lg: '55px', xs: '36px' } }}>
                <HorizontalScrollBox data={bodyPartsData} bodypartcard={true} setSelection={setSelection} selection={selection} />
            </Box>
        </Stack>
    )
}

export default SearchExercises