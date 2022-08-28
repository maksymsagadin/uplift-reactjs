import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import './App.css'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { exerciseOptions, fetchData } from './utils/fetchData'
import { ExerciseContext } from './contexts/ExerciseContext'

const App = () => {
    const [allExercises, setAllExercises] = useState([])

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
            setAllExercises(exerciseData)
            console.log('fetching data')
        }
        fetchExercisesData()
    }, [])

    return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
        <Navbar />
        <ExerciseContext.Provider value={{ allExercises }}>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/exercise/:id" element={<ExerciseDetail />} />
            </Routes>
        </ExerciseContext.Provider>
        <Footer />
    </Box>
    )
}

export default App