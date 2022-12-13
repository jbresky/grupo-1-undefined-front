import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from '../pages/user/Home';
import Profile from '../pages/user/Profile';
import Login from '../pages/Login';
import Admin from '../pages/admin/Admin';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={client}>
            <ChakraProvider>
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/admin' element={<Admin />} />
                        <Route exact path='/profile' element={<Profile />} />
                        <Route exact path='/login' element={<Login />} />
                        <Route exact path='*' element="NOT FOUND" />
                    </Routes>
                </BrowserRouter>
            </ChakraProvider>
        </QueryClientProvider>
    )
}

export default App;