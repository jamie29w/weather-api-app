import React from "react"

function Daily (props) {    
    const styles = {
        outerDivStyles: {
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
        },
        headers: {
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "2.5vh"
        },
        innerDivStyles: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
        }
    }

    const date = new Date(props.day.time * 1000)
    const day = date.getUTCDay()
    const week = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"]
    const dayOfWeek = week[day]

    return (
        <div style={styles.outerDivStyles}>
            <h2 style={styles.headers}><span style={styles.spans}>{dayOfWeek}</span></h2>
            <div style={styles.innerDivStyles}>
                <h3 style={styles.headers}><span style={styles.spans}>HI:</span> {Math.round(props.day.temperatureHigh)}˚</h3>
                <h3 style={styles.headers}><span style={styles.spans}>LO:</span> {Math.round(props.day.temperatureLow)}˚</h3>
            </div>
            <h5 style={styles.headers}><span style={styles.spans}>DESCRIPTION</span>: {props.day.summary.toUpperCase()}</h5>
            <br/>
            <hr/>
        </div>
    )
}

export default Daily