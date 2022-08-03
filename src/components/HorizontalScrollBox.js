import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import LeftArrowIcon from '../assets/icons/left.png'
import RightArrowIcon from '../assets/icons/right.png'

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext)
  
    return (
        <Typography onClick={() => scrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="right-arrow" />
        </Typography>
    )
}
  
const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext)
  
    return (
        <Typography onClick={() => scrollNext()} className="left-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    )
}

const HorizontalScrollBox = ({ data }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
            <Box key={item.id || item}>
                {item}
            </Box>
        ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollBox