
import { Box } from '@mui/material'
import React, { useState } from 'react'
import Banner from '../components/Banner'
import SearchExcercises from '../components/SearchExercises'
import Excercises from '../components/Exercices'

const Home = () => {
    const [exercises, setExercises] = useState([])
    const [bodyPart, setBodyPart] = useState('all')
  return (
    <Box>
        <Banner />
        <SearchExcercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        <Excercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}/>
    </Box>
  )
}

export default Home