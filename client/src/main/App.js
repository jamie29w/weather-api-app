import React, { Component } from 'react'
import HeaderComponent from './header/Component'
import axios from 'axios'
import BodyComponent from "./body/Component"
const locHost = 'http://localhost:5080'


class App extends Component {
    constructor() {
        super()
        this.state = {
            lat: null,
            lng: null,
            date: "",
            locationStr: "",
            weather: {
                currently: {},
                daily: {
                    data: [
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {}
                    ]
                },
                hourly: {}
            }
        }
        this.getCoords = this.getCoords.bind(this)
        this.getWeatherInfo = this.getWeatherInfo.bind(this)
        this.handleCoordsChange = this.handleCoordsChange.bind(this)
        this.handleWeatherChange = this.handleWeatherChange.bind(this)
        this.searchWeather = this.searchWeather.bind(this)
    
    }

    handleCoordsChange(lat,lng, locationStr) {
        this.setState(prevState => {
            if (typeof lat === 'number' && typeof lng === 'number') {
                return {
                    ...prevState,
                    lat,
                    lng,
                    locationStr
                }
            } else {
                return prevState
            }
        })
        document.getElementById('zipInput').value = ""
        
    }

    handleWeatherChange(weather) {
        this.setState(prevState => {
            return {
                ...prevState,
                weather
            }
        })
    } 

    getCoords(loc) {
        return axios.get(`${locHost}/api/coords/${loc}`)
    }

    getWeatherInfo(lat, lng) {
        return axios.get(`${locHost}/api/weather/${lat},${lng}`)
    }

    searchWeather(e, locationStr){
        e.preventDefault()
        this.getCoords(locationStr)
            .then(res => {
                console.log(res)
                let coords = res.data.results[0].geometry.location
                this.handleCoordsChange(coords.lat, coords.lng, locationStr)
                return this.getWeatherInfo(coords.lat, coords.lng)
            }).then (res => {
                this.handleWeatherChange(res.data)
            }).catch(err => {
                console.error(err)
            })
    }

    render() {
        return(
            <div>
                <HeaderComponent searchWeather = {this.searchWeather} />
                <BodyComponent locationStr={this.state.locationStr} weather={this.state.weather} />
            </div>
        )
    }
}

export default App