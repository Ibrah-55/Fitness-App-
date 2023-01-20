import React from 'react'
import { Box, Typography, Button} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'


const Banner = () => {
  return (
    <Box sx={{
        mt: {lg: '212px', xs: '70px'},
        ml: {sm: '50px'}
    } } position='relative' p='20px'>
        <Typography color= '#FF2625' fontWeight='600' fontSize='26px'>
            Stay Fit
        </Typography>
        <Typography fontWeight={700} sx={{fontSize: {lg :'44px', xs: '40px'}}} mb='23px' mt='30px'>
            Promoting Health & Fitness
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4}>
            Check out the most effective excercises 
        </Typography>
       
        <Button variant='contained' color='error'
        href='#excercise' sx={{backgroundColor: '#ff2625', padding: '10px'}}>Explore Excercises</Button>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img'  />
    </Box>
  )
}

export default Banner