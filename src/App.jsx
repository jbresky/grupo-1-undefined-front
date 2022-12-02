import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Example from '../src/pages/Example';
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    {/* <Route exact path = '/' element = {}/> */}
                    <Route exact path='/example' element={<Example />} />
                    <Route exact path='*' element="NOT FOUND" />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    )
}

export default App;
