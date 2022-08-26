import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'

import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
import { exerciseOptions, fetchData } from '../utils/fetchData'


const Home = () => {
    const [allExercises, setAllExercises] = useState([])
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
            setAllExercises(exerciseData)
            setExercises(exerciseData)
        }
        fetchExercisesData()
    }, [])

    return (
        <Box>
            <HeroBanner />
            <SearchExercises allExercises={allExercises} setExercises={setExercises}/>
            <Exercises exercises={exercises}/>
        </Box>
    )
}

export default Home