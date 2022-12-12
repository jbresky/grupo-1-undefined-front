import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import '../App.css'
import Login from '../pages/Login';
import CreateTransaction from '../pages/CreateTransaction';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

const App = () => {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route exact path='/profile' element={<Profile/>} />
                    <Route exact path='/login' element={<Login/>} />
                    <Route exact path='/transaction/create' element={<CreateTransaction/>} />
                    <Route exact path='*' element="NOT FOUND" />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    )
}

export default App;