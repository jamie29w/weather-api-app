import React, { Component } from 'react';
import ZipSubmitComponent from './ZipSubmitComponent'
import axios from 'axios';


class App extends Component {
    constructor() {
        super()
        this.state = {
            lat: null,
            lng: null,
        }
        this.zipSubmit = this.zipSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    

    // componentDidMount() {
    //     axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCZNng4wnr3pcGCRRotJxDGMDVxYLqh9I8`).then(res => {
    //         console.log(res)
    //     })
    // }

    handleChange(lat,lng) {
        this.setState(prevState => {
            if (true) {
                return {
                    lat: lat,
                    lng: lng
                }
            } else {
                return prevState;
            }
        })
        console.log(this.state)
        console.log(typeof this.state.lat)
    }

    zipSubmit(zip) {
        axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=AIzaSyCZNng4wnr3pcGCRRotJxDGMDVxYLqh9I8
        `).then(res => {
            const coords = res.data.results[0].geometry.location
            // console.log(res.data.results[0].geometry.location.lat)
            // console.log(res.data.results[0].geometry.location.lng)
            this.handleChange(coords.lat, coords.lng)
        })
    }


    render() {
        return (
            <ZipSubmitComponent
                zipSubmit = {this.zipSubmit}
            />
            // <div>hi</div>
    )
    }
    
}

export default App