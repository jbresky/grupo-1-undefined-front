import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import '../App.css'

const App = () => {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route exact path='/login' element={<Login/>} />
                    <Route exact path='*' element="NOT FOUND" />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    )
}

export default App;