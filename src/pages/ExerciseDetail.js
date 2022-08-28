import React, { useState, useEffect, useContext } from 'react'
import { ExerciseContext,DetailContext } from '../contexts/ExerciseContext'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Loader from '../components/Loader'
import Info from '../components/Info'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState(null)
    const { id } = useParams()
    const { allExercises } = useContext(ExerciseContext)

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        const exerciseDetailData = allExercises.filter((item) => item.id.includes(id))
        console.log('exerciseDetailData', exerciseDetailData)
        setExerciseDetail(exerciseDetailData[0])

    }, [id, allExercises])

    if (!exerciseDetail) return <Loader />
    return (
        <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
            <DetailContext.Provider value={{exerciseDetail}}>
                <Info />
                <ExerciseVideos />
                <SimilarExercises />
            </DetailContext.Provider>
        </Box>
    )
}

export default ExerciseDetail