import React, { Component } from 'react';
import HeaderContainer from './header/Container';
import BodyContainer from "./body/Container";
const locHost = 'http://localhost:5080'


class App extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }
    render() {
        return(
            <div>
                <HeaderContainer />
                <BodyContainer />
            </div>
        )
    }
}

export default App;
