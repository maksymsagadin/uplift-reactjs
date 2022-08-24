import React from 'react'
import { Stack } from '@mui/material'
import { BallTriangle } from 'react-loader-spinner'

const Loader = () => {
    return (
        <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
            <BallTriangle 
                color='#a2a2c7'
                height={100}
                width={100}
                radius={5}
                ariaLabel="ball-triangle-loading"
                visible={true}
            />
        </Stack>
    )
}

export default Loader