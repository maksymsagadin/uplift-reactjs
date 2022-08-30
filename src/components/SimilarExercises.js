import React,{ useState, useEffect, useContext } from 'react'
import { DetailContext, ExerciseContext } from '../contexts/ExerciseContext'
import { Typography, Box, Stack } from '@mui/material'

import HorizontalScrollBox from './HorizontalScrollBox'
import Loader from './Loader'

const SimilarExercises = () => {
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])
  const { exerciseDetail } = useContext(DetailContext)
  const { allExercises } = useContext(ExerciseContext)

  useEffect(() => {
    const targetMuscleExercisesData = allExercises.filter((item) => item.target.includes(exerciseDetail.target))
    const equimentExercisesData = allExercises.filter((item) => item.equipment.includes(exerciseDetail.equipment))
    setTargetMuscleExercises(targetMuscleExercisesData)
    setEquipmentExercises(equimentExercisesData)
    console.log('setting Similar Exercises')
  },[exerciseDetail, allExercises])

  return (
    <Box sx={{ mt: { lg: '75px', xs: '0px' } }}>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="24px">
        Similar exercises on <span style={{ color: '#a2a2c7', textTransform: 'capitalize' }}>{exerciseDetail.target}</span>
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {targetMuscleExercises.length !== 0 ? <HorizontalScrollBox data={targetMuscleExercises} /> : <Loader />}
      </Stack>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '75px', xs: '50px' } }} fontWeight={700} color="#000" mb="24px">
        Similar <span style={{ color: '#a2a2c7', textTransform: 'capitalize' }}>{exerciseDetail.equipment}</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {equipmentExercises.length !== 0 ? <HorizontalScrollBox data={equipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises