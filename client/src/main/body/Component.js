import React from "react"
import Daily from "./Daily"

function BodyComponent (props) {
    const styles = {
        inactive: {
            display: "none"
        },
        outerDiv: {
            backgroundColor: "#B4C6CE",
            display: "flex",
            flexDirection: "column",
            fontFamily: "'Raleway', sans-serif",
            fontSize: "2em",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: 'center',
            width: "100%",
            minHeight: "10vh",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
            paddingBottom: 20
        },
        tempText: {
            fontSize: '.8em',
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: 10,
            paddingBottom: 10
        }
    }
    return (
        <div style={styles.outerDiv}>
            <h1 style={styles.tempText}>{props.weather.currently.temperature === undefined ? "ENTER YOUR LOCATION ABOVE" : `CURRENT TEMPERATURE IN ${props.locationStr.toUpperCase()}`}</h1>
            <h3 style={props.weather.currently.temperature === undefined ? styles.inactive : styles.tempText}>{props.weather.currently.temperature === undefined ? "" : `${Math.round(props.weather.currently.temperature)}˚`}</h3>
            <h1 style={props.weather.currently.temperature === undefined ? styles.inactive : styles.tempText}> {props.weather.currently.temperature === undefined ? "" : "WEEKLY FORECAST:"}</h1>
            <br style={props.weather.currently.temperature === undefined ? styles.inactive : {display: "block"}}/>
            {props.weather.currently.temperature === undefined ? "" : props.weather.daily.data.map((day, i) => <Daily key={i} day={props.weather.daily.data[i]} />)}
        </div>
    )
}

export default BodyComponent