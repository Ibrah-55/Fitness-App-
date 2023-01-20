import React from "react";

import {Box, Stack, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import Logo from '../assets/images/logo1.png'


const Footer = () => {
    return (
       <Box bgcolor= 'aquamarine' height = '140px' mt='5px'>
        <Stack gap = '10px' alignItems='center' px= '40px' pt = '50px'>
            <Link to= '/' >
                <img src={Logo} alt='logo' width='50px' height='10px' /> 
            </Link>
               <i> Made by Ibrah Jarvis @ { new Date().getFullYear()} </i>
        </Stack> 

       </Box>
    );
}

export default Footer;
