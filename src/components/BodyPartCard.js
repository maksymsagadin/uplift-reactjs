import React from 'react'
import { Stack, Typography } from '@mui/material'

const BodyPartCard = ({ item, setBodyPart, bodyPart }) => {
    return (
        <Stack 
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={bodyPart === item ? { borderTop: '8px solid #a2a2c7', borderBottom: '8px solid #a2a2c7', background: '#fff',  width: '250px', height: '250px', cursor: 'pointer', gap: '47px' } : { background: '#fff',  width: '250px', height: '250px', cursor: 'pointer', gap: '47px' }}
            onClick={() => {
                setBodyPart(item)
            }}
            >
            <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">{item}</Typography>
        </Stack>
    )
}

export default BodyPartCard