import React from "react";
import Daily from "./Daily"

function BodyComponent (props) {
    const styles = {
        outerDiv: {
            width: "100%",
            fontFamily: "platelet",
            fontSize: "2em",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "5vh",
            display: "flex",
            flexDirection: "column",
            textAlign: 'center',
            backgroundColor: "#E6F5F7",
        },
        headers: {
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "5vh"
        }
    }
    return (
        <div style={styles.outerDiv}>
            <h1 style={styles.headers}>{props.weather.currently.temperature === undefined ? "ENTER YOUR LOCATION ABOVE" : `CURRENT TEMPERATURE IN ${props.locationStr.toUpperCase()}`}</h1>
            <h3 style={styles.headers}>{props.weather.currently.temperature === undefined ? "" : `${Math.round(props.weather.currently.temperature)}˚`}</h3>

            <h1 style={styles.headers}> {props.weather.currently.temperature === undefined ? "" : "WEEKLY FORECAST:"}</h1>
            <br/>
            {props.weather.currently.temperature === undefined ? "" : props.weather.daily.data.map((day, i) => <Daily key={i} day={props.weather.daily.data[i]} />)}
        </div>
    )
}

export default BodyComponent