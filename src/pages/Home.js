import React, { useState, useEffect, useContext } from 'react'
import { ExerciseContext, FilteredContext } from '../contexts/ExerciseContext'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
    const { allExercises } = useContext(ExerciseContext)
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        setExercises(allExercises)
    },[allExercises])

    return (
        <Box>
            <HeroBanner />
            <FilteredContext.Provider value={{ exercises, setExercises }}>
                <SearchExercises />
                <Exercises/>
            </FilteredContext.Provider>
        </Box>
    )
}

export default Home