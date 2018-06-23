import React, { Component } from 'react';
// import HeaderContainer from './header/Container';
import HeaderComponent from './header/Component';
import axios from 'axios';
import BodyComponent from "./body/Component";
const locHost = 'http://localhost:5080'


class App extends Component {
    constructor() {
        super()
        this.state = {
            lat: null,
            lng: null,
            day: "",
            location: "",
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
        this.handleChange = this.handleChange.bind(this)
        this.getWeatherInfo = this.getWeatherInfo.bind(this)
        this.searchWeather = this.searchWeather.bind(this)
        this.handleWeatherChange = this.handleWeatherChange.bind(this)
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
    }

    handleLocationChange(location) {
        this.setState(prevState => {
            return {
                ...prevState,
                location
            }
        })
    }

    handleWeatherChange(data) {
        this.setState(prevState => {
            return {
                ...prevState,
                weather: data
            }
        })
    } 

    getCoords(loc) {
        return axios.get(`${locHost}/coords/${loc}`)
    }

    getWeatherInfo(lat, lng) {
        return axios.get(`${locHost}/weather/${lat},${lng}`)
    }

    searchWeather(loc){
        this.getCoords(loc)
            .then(res => {
                let coords = res.data.results[0].geometry.location;
                this.handleChange(coords.lat, coords.lng)
                return this.getWeatherInfo(coords.lat, coords.lng)
            }).then (res => {
                this.handleWeatherChange(res.data)
                this.handleLocationChange(loc)
            }).catch(err => {
                console.error(err)
            })
    }

    render() {
        return(
            <div>
                <HeaderComponent searchWeather = {this.searchWeather} />
                <BodyComponent location={this.state.location} weather={this.state.weather} />
            </div>
        )
    }
}

export default App;
