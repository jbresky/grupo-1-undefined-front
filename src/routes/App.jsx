import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

const App () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path = '/' element = {}/>
                <Route exact path = '/example' element = {}/>
                <Route exact path = '*' element = {}/>
            </Routes>
        </BrowserRouter>
    )
}