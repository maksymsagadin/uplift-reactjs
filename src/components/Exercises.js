import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'

import ExerciseCard from './ExerciseCard'
import { exerciseOptions, fetchData } from '../utils/fetchData'

const Exercises = ({ exercises, bodyPart, setExercises }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [exercisesPerPage] = useState(6)

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = []

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
      }

      setExercises(exercisesData)
    }

    fetchExercisesData()
  }, [bodyPart,setExercises])

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  const paginate = (event, value) => {
    setCurrentPage(value)

    window.scrollTo({ top: 1600, behavior: 'smooth' })
  }

  return (
    <Box id='exercises' sx={{ mt: { lg: '50px' } }}  p="24px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }}>Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '50px', xs: '25px' }, mt: { lg: '75px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '75px', xs: '50px' } }} alignItems='center'>
        {exercises.length > 6 && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises