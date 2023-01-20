import React from 'react'
import { Typography, Stack, Box } from '@mui/material'
import Loader from './Loader'

const ExerciseVideos = ({exerciseVideos, name}) => {
  if(!exerciseVideos.length) return <Loader />
  return (
    <Box sx={{marginTop: {lg: '200px', xs: '20px'}}} p='20px'>
      <Typography variant='h6' mb='33ppx'>
        Watch how to do <span style={{color: '#ff2625', textTransform:'capitalize'}}>{name}</span> on <a href='https://youtube.com' style={{color: 'blue'}}> Youtube</a>
      </Typography>
      <Stack justifyContent='flex-start' flexWrap ='wrap' alignItems='center' sx={{
        flexDirection: {lg: 'row'},
        gap: {lg: '110px', xs: '0'}
      }} >
        {exerciseVideos?.slice(0,4).map((item, index) => (
          <a key={index} className='exercise-video'
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target='_blank'
          rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant='h6' color='#000'>
                {item.video.title}
              </Typography>
              <Typography variant='h7' color='#000'>
               @ <em style={{color: 'blue'}}> {item.video.channelName}</em>
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos