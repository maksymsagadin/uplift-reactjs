import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import BodyPartCard from './BodyPartCard'

import LeftArrowIcon from '../assets/icons/left.png'
import RightArrowIcon from '../assets/icons/right.png'

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext)
    return (
        <Typography onClick={() => scrollPrev()} className="left-arrow">
            <img src={LeftArrowIcon} alt="left-arrow" />
        </Typography>
    )
}
  
const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext)
    return (
        <Typography onClick={() => scrollNext()} className="right-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    )
}

const HorizontalScrollBox = ({ data, setBodyPart, bodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
            <Box key={item.id || item} itemId={item.id || item} m="10px 40px">
                <BodyPartCard item={item} setBodyPart={setBodyPart} bodyPart={bodyPart}/>
            </Box>
        ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollBox