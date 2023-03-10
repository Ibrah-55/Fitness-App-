import React from 'react';
import {Link} from 'react-router-dom';
import {  Stack } from '@mui/material';
import logo from '../assets/images/logo.jpg'






const NavBar = () => {
    return (
        <Stack direction='row' justifyContent=  'space-round' sx={{gap : {sm: '122px', xs : '40px'},mt : {sm: '32px', xs: '20px'}, justifyContent: 'none'}} px = '20px' >
            <Link to='/'>
                <img src={logo}  alt= 'logo' style={{width: '38px', height:'38px', margin:'0 20px'}} />

            </Link>
            <Stack direction='row'
            gap = '40px'
            fontSize = '24px'
            alignItems = 'flex-end'>
                <Link to = '/ ' style={{textDecoration: 'none', color:'Blue', borderBottom: '3px solid #FFF2625'}}>Home</Link>
                <a href='#excercise' style={{textDecoration : 'none', color:'Blue'}}>Exercise</a>
            </Stack>
         </Stack>

    );
}

export default NavBar;

