import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Example from '../pages/Example';

const App = () =>{
    return(
        <BrowserRouter>
            <Routes>
                {/* <Route exact path = '/' element = {}/> */}
                <Route exact path = '/example' element = {<Example/>}/>
                <Route exact path = '*' element = "NOT FOUND" />
            </Routes>
        </BrowserRouter>
    )
}

export default App;