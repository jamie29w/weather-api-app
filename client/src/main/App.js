import React, { Component } from 'react';
import ZipSubmitComponent from './ZipSubmitComponent'
import axios from 'axios';
const corsFwd = 'https://vschool-cors.herokuapp.com?url=';
const locHost = 'http://localhost:5080'


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

    getCoords(loc) {
        // return axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${loc}&key=AIzaSyCZNng4wnr3pcGCRRotJxDGMDVxYLqh9I8`)
        return axios.get(`${locHost}/coords/:${loc}`)
    }

    getWeatherInfo(lat, lng) {
        return axios.get(`${corsFwd}https://api.darksky.net/forecast/bfa28e52ee65f422c4e13920d62b028b/${lat},${lng}`)
    }

    searchWeather(loc){
        this.getCoords(loc)
            .then(res => {
                let coords = res.data.results[0].geometry.location;
                this.handleChange(coords.lat, coords.lng)
                return this.getWeatherInfo(coords.lat, coords.lng)
            }).then (res => {
                console.log(res.data)
            }).catch(err => {
                console.error(err)
            })
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