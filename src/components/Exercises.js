import React, { useState, useContext } from 'react'
import { FilteredContext } from '../contexts/ExerciseContext'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'
import ExerciseCard from './ExerciseCard'

const Exercises = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { exercises } = useContext(FilteredContext)
  const exercisesPerPage = 6
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
        {exercises.length > exercisesPerPage && (
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