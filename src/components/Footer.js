import React from "react";

import {Box, Stack, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import Logo from '../assets/images/logo1.png'


const Footer = () => {
    return (
       <Box mt='40px' bgcolor= '#fff3fA'>
        <Stack gap = '40px' alignItems='center' px= '40px' pt = '24px'>
            <Link to= '/'>
                <img src={Logo} alt='logo' width='100px' height='40px' /> 
            </Link>
            <Typography variant='h5' pb='40px'mt='20px'>
                Made by Ibrah Jarvis @ { new Date().getFullYear()} 
            </Typography>
        </Stack> 

       </Box>
    );
}

export default Footer;
