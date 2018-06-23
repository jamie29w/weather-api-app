import React from "react";
import Daily from "./Daily"

function BodyComponent (props) {
    console.log("daily data props are:")
    console.log(props.weather.daily.data)
    const styles = {
        outerDiv: {
            width: "100%",
            fontFamily: "platelet",
            fontSize: "2em",
            margin: "5vh",
            display: "flex",
            flexDirection: "column",
            textAlign: 'center'
        },
        headers: {
            textAlign: "center",
            margin: "5vh",
        }
    }
    return (
        <div style={styles.outerDiv}>
            <h1 style={styles.headers}>{props.weather.currently.temperature === undefined ? "ENTER YOUR LOCATION ABOVE" : `CURRENT WEATHER IN...`}</h1>
            <h3 style={styles.headers}>{props.weather.currently.temperature === undefined ? "" : `${props.weather.currently.temperature}˚`}</h3>

            <h1>WEEKLY FORECAST:</h1>
            <br/>
            {props.weather.currently.temperature === undefined ? "" : props.weather.daily.data.map((day, i) => <Daily key={i} day={props.weather.daily.data[i]} />)}
            {/* <h1 style={styles.headers}>TOMORROW:</h1>
            <h3 style={styles.headers}>{props.weather.daily.data[1].temperatureHigh}˚</h3>
            <h1 style={styles.headers}>DAY AFTER TOMORROW:</h1>
            <h3 style={styles.headers}>{props.weather.daily.data[2].temperatureHigh}˚</h3> */}
        </div>
    )
}

export default BodyComponent