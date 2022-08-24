import React from 'react'
import { Typography, Stack, Button, Box } from '@mui/material'

const Info = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail
    const extraInfo =  [bodyPart, target, equipment]

    return (
        <Stack gap="48px" sx={{ flexDirection: { lg: 'row' }, p: '36px', alignItems: 'center' }}>
            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
                    {name}
                </Typography>
                <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
                    Exercising keeps you strong and healthy.{' '}
                    <span style={{ textTransform: 'capitalize' }}>{name}</span> is one
                    of the best exercises to target your {target}. It will help you improve your mood and boost your energy.
                </Typography>
                <Stack direction="row" gap="24px" alignItems="center">
                    {extraInfo.map((item) => (
                        <Box key={item}>
                            <Button  disabled sx={{ ml: '21px', color: '#fff', background: '#a2a2c7', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                                <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
                                    {item}
                                </Typography>
                            </Button>
                        </Box>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Info