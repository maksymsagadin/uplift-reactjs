import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
    return (
        <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
            <Stack direction="row">
                <Button disabled sx={{ ml: '21px', color: 'white', background: '#a2a2c7', fontSize: '14px', borderRadius: '1rem', textTransform: 'capitalize' }}>
                    {exercise.bodyPart}
                </Button>
                <Button disabled sx={{ ml: '21px', color: 'white', background: '#ADD555', fontSize: '14px', borderRadius: '1rem', textTransform: 'capitalize' }}>
                    {exercise.target}
                </Button>
            </Stack>
            <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
                {exercise.name}
            </Typography>
        </Link>
    )
}

export default ExerciseCard