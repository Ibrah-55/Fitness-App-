import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Scroll from './Scroll'

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt: {lg: '100px', xs:'0'}}}>
        <Typography variant='h5' mb={5}>Exercises that target the same muscle group</Typography>
        <Stack direction='row' sx={{p: '2', position: 'relative'}}>
          {targetMuscleExercises.length && <Scroll data={targetMuscleExercises} />}
        </Stack>
        <Typography variant='h5' mb={5}>Exercises that uses the same equipment</Typography>
        <Stack direction='row' sx={{p: '2', position: 'relative'}}>
          {equipmentExercises.length && <Scroll data={equipmentExercises} />}
        </Stack>
    </Box>
  )
}

export default SimilarExercises