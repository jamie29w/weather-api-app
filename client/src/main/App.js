import React, { Component } from 'react';
import HeaderContainer from './header/Container';
import axios from 'axios';
const locHost = 'http://localhost:5080'


function App () {
    return(
        <div>
            <HeaderContainer />
        </div>
    )
}

export default App;
