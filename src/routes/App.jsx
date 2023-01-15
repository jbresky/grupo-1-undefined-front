import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from '../pages/user/Home';
import Profile from '../pages/user/Profile';
import Admin from '../pages/admin/Admin';
import CreateTransaction from '../pages/user/CreateTransaction';
import Transactions from '../pages/user/Transactions';
import Register from '../pages/Register';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Signin from '../pages/Signin';
import UserDetail from '../pages/admin/UserDetail';
import Avatar from '../pages/user/Avatar';
import { isLogged, isLoggedAdmin } from '../utils/isLogged';
const client = new QueryClient();

const App = () => {
    const loggedAdmin = isLoggedAdmin()
    const logged = isLogged()

    return (
        <QueryClientProvider client={client}>
            <ChakraProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/login' element={!logged ? <Signin /> : <Navigate to='/' />} />
                        <Route exact path='/register' element={!logged ? <Register /> : <Navigate to='/' />} />
                        <Route path='/' element={logged ? <Home /> : <Navigate to='/login' />}>
                            <Route path=':transaction-create' element={<CreateTransaction />} />
                        </Route>
                        <Route exact path='/transactions' element={<Transactions />} />
                        <Route exact path='/profile' element={<Profile />}>
                            <Route path=':avatar' element={<Avatar />}></Route>
                        </Route>
                        <Route path='/admin' element={loggedAdmin ? <Admin /> : <Navigate to='/' />} >
                            <Route path=':user:id' element={<UserDetail />} />
                        </Route>
                        <Route exact path='*' element="NOT FOUND" />
                    </Routes>
                </BrowserRouter>
            </ChakraProvider>
        </QueryClientProvider>
    )
}

export default App;