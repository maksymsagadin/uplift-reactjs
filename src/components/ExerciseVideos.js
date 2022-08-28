import React,{ useState, useEffect, useContext } from 'react'
import { DetailContext } from '../contexts/ExerciseContext'
import { youtubeOptions, fetchData } from '../utils/fetchData'
import { Typography, Box, Stack } from '@mui/material'
import Loader from './Loader'

const ExerciseVideos = () => {
  const [exerciseVideos, setExerciseVideos] = useState([])
  const { exerciseDetail } = useContext(DetailContext)
  
  useEffect(() => {
    const fetchExercisesData = async () => {
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetail.name} exercise`, youtubeOptions)
      setExerciseVideos(exerciseVideosData.contents)
    }
    fetchExercisesData()
    console.log('fetching videos')

  }, [exerciseDetail])

  if (!exerciseVideos.length) return <Loader />
  return (
    <Box sx={{ marginTop: { lg: '50px', xs: '20px' } }} p="36px">
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="36px">
        Watch <span style={{ color: '#a2a2c7', textTransform: 'capitalize' }}>{exerciseDetail.name}</span> exercise videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '100px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            >
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos