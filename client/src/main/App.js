import React, { Component } from 'react';
import HeaderContainer from './header/Container';
import BodyContainer from "./body/Container";
const locHost = 'http://localhost:5080'


function App () {
    return(
        <div>
            <HeaderContainer />
            <BodyContainer />
        </div>
    )
}

export default App;
