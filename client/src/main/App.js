import React, { Component } from 'react'
import HeaderComponent from './header/Component'
import axios from 'axios'
import BodyComponent from "./body/Component"
import FooterComponent from "./footer/Footer"

const strNumArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]


class App extends Component {
    constructor() {
        super()
        this.state = {
            lat: null,
            lng: null,
            date: "",
            locationStr: "",
            locationCity: "",
            locationState: "",
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

    handleCoordsChange(lat,lng, locationStr, locationCity, locationState) {
        this.setState(prevState => {
            if (typeof lat === 'number' && typeof lng === 'number') {
                return {
                    ...prevState,
                    lat,
                    lng,
                    locationStr,
                    locationCity,
                    locationState
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
        return axios.get(`/api/coords/${loc}`)
    }

    getWeatherInfo(lat, lng) {
        return axios.get(`/api/weather/${lat},${lng}`)
    }

    searchWeather(e, locationStr){
        e.preventDefault()
        this.getCoords(locationStr)
            .then(res => {
                console.log(res)
                let coords = res.data.results[0].geometry.location,
                    locationComponents = res.data.results[0].address_components,
                    locationCity
                if (strNumArr.indexOf(locationComponents[0].long_name[0]) === -1) {
                    locationCity = locationComponents[0].long_name
                } else {
                    locationCity = locationComponents[1].long_name
                }
                let locationState = locationComponents[2].short_name
                this.handleCoordsChange(coords.lat, coords.lng, locationStr, locationCity, locationState)
                return this.getWeatherInfo(coords.lat, coords.lng)
            }).then (res => {
                this.handleWeatherChange(res.data)
            }).catch(err => {
                console.error(err)
            })
    }

    render() {
        console.log(this.state)
        return(
            <div>
                <HeaderComponent searchWeather = {this.searchWeather} />
                <BodyComponent locationCity={this.state.locationCity} locationState={this.state.locationState} locationStr={this.state.locationStr} weather={this.state.weather} />
                <FooterComponent />
            </div>
        )
    }
}

export default App