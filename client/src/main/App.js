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
        this.getCoords = this.getCoords.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getWeatherInfo = this.getWeatherInfo.bind(this);
        this.searchWeather = this.searchWeather.bind(this);
    }


    handleChange(lat,lng) {
        this.setState(prevState => {
            if (typeof lat === 'number' && typeof lng === 'number') {
                return {
                    lat: lat,
                    lng: lng,
                }
            } else {
                return prevState;
            }
        })
        console.log(this.state)
    }

    getWeatherInfo(lat, lng) {
        console.log(lat, lng)
        // axios.get(`https://api.darksky.net/forecast/bfa28e52ee65f422c4e13920d62b028b/${lat},${lng}`).then(response => {
        //     console.log(response)
        // })
    }

    getCoords(loc) {
        axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${loc}&key=AIzaSyCZNng4wnr3pcGCRRotJxDGMDVxYLqh9I8
        `).then(res => {
            let coords = res.data.results[0].geometry.location;
            // console.log(`coords is ${coords.lat}`)
            this.handleChange(coords.lat, coords.lng);
        })
    }

    async searchWeather(loc){
        await this.getCoords(loc);
        console.log(`lat is ${this.state.lat}`);
        //state hasn't been updated yet, so getWeatherInfo arguments are null
        this.getWeatherInfo(this.state.lat, this.state.lng);
    }


    render() {
        return (
            <ZipSubmitComponent
                searchWeather = {this.searchWeather}
            />
        )
    }
    
}

export default App