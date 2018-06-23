import React from "react";

function BodyComponent (props) {
    const styles = {
        div: {
            width: "100%",
            fontFamily: "platelet",
            fontSize: "2em",
            margin: "5vh",
        },
        headers: {
            textAlign: "center",
            margin: "5vh",
        }
    }
    return (
        <div style={styles.div}>
            <h1 style={styles.headers}>CURRENT TEMP IN RENO</h1>
            <h3 style={styles.headers}>{props.weather.currently.temperature}˚</h3>
            <h1 style={styles.headers}>TOMORROW:</h1>
            <h3 style={styles.headers}>{props.weather.daily.data[1].temperatureHigh}˚</h3>
            <h1 style={styles.headers}>DAY AFTER TOMORROW:</h1>
            <h3 style={styles.headers}>{props.weather.daily.data[2].temperatureHigh}˚</h3>
        </div>
    )
}

export default BodyComponent