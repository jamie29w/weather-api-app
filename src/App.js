import React, {Component} from 'react';

class App extends Component {

    componentWillMount() {
        let location = navigator.geolocation.getCurrentPosition(showPosition);
        function showPosition (position) {
            var userPosition = {};
            userPosition.lat = position.latitude;
            userPosition.long = position.longitude;
            return userPosition
        }
        console.log(location);
    }

    
    

    render(props) {
        
        return <div></div>
    }
}

export default App