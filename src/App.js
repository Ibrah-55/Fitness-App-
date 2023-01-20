import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import  ExcerciseDetail from './pages/ExerDetail'
import Home from './pages/Home'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ResponsiveAppBar from './components/NavbarTwo.tsx';
const App = () => (
   <Box width='40px' sx={{width: {x1: '1448px'}}}m = 'auto'>
    <Router>
    <ResponsiveAppBar />
    <Routes>
      < Route path='/' element={<Home />} />
      <Route path="/exercise/:id" element={<ExcerciseDetail />} />

    </Routes>
    < Footer />
    </Router>
   </Box>
  )

export default App;