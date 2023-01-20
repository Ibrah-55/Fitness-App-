import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Scroll from './Scroll'

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt: {lg: '100px', xs:'0'}}}>
        <Typography variant='' mb={5}></Typography>
        <Stack direction='row' sx={{p: '2', position: 'relative'}}>
          {targetMuscleExercises.length && <Scroll data={targetMuscleExercises} />}
        </Stack>
        <Typography variant='h' mb={5}></Typography>
        <Stack direction='row' sx={{p: '2', position: 'relative'}}>
          {equipmentExercises.length && <Scroll data={equipmentExercises} />}
        </Stack>
    </Box>
  )
}

export default SimilarExercises