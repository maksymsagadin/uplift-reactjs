import React from 'react'
import { Stack, Typography } from '@mui/material'

const BodyPartCard = ({ item, setSelection, selection }) => {
    return (
        <Stack 
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={selection === item.bodypart.toLowerCase() ? { borderTop: '8px solid #a2a2c7', borderBottom: '8px solid #a2a2c7', background: '#fff',  width: '250px', height: '250px', cursor: 'pointer', gap: '47px' } : { background: '#fff',  width: '250px', height: '250px', cursor: 'pointer', gap: '47px' }}
            onClick={() => {
                setSelection(item.bodypart.toLowerCase())
                window.scrollTo({ top: 1500, left: 100, behavior: 'smooth' })
            }}
            >
            <img src={item.icon} alt={item.alt} style={{ width: '80px', height: '80px' }} />
            <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">{item.bodypart}</Typography>
        </Stack>
    )
}

export default BodyPartCard