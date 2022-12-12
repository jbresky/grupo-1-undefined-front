import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Login from '../pages/Login';
import CreateTransaction from '../pages/CreateTransaction';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Transactions from '../pages/Transactions';
import Register from '../pages/Register';

const App = () => {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route exact path='/profile' element={<Profile/>} />
                    <Route exact path='/login' element={<Login/>} />
                    <Route exact path='/register' element={<Register action="register"/>}/>
                    <Route exact path='/transactions/create' element={<CreateTransaction />} />
                    <Route exact path='/transactions/' element={<Transactions/>} />
                    <Route exact path='*' element="NOT FOUND" />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    )
}

export default App;