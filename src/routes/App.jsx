import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

const client = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={client}>
            <ChakraProvider>
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={<Home />}>
                            <Route path=':transaction' element={<CreateTransaction />}></Route>
                        </Route>
                        <Route exact path='/profile' element={<Profile />}>
                            <Route path=':avatar' element={<Avatar />}></Route>
                        </Route>
                        <Route exact path='/login' element={<Signin />} />
                        <Route exact path='/admin' element={<Admin />} >
                            <Route path=':user:id' element={<UserDetail />} />
                        </Route>
                        <Route exact path='/register' element={<Register />} />
                        {/* <Route exact path='/transactions/create' element={<CreateTransaction />} /> */}
                        <Route exact path='/transactions' element={<Transactions />} />
                        <Route exact path='*' element="NOT FOUND" />
                    </Routes>
                </BrowserRouter>
            </ChakraProvider>
        </QueryClientProvider>
    )
}

export default App;