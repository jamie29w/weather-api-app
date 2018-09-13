import React from "react"


function Daily (props) {

    const styles = {
        outerDivStyles: {
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
        },
        days: {
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "2.5vh",
            fontSize: "1em"
        },
        innerDivStyles: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
        },
        tempText: {
            fontSize: '1em',
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "2.5vh"
        },
        hiLoText: {
            fontSize: '.6em',
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "2.5vh"
        },
        summaryText: {
            fontSize: '.6em',
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "2.5vh"
        }
    }

    const date = new Date(props.day.time * 1000)
    const day = date.getUTCDay()
    const week = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"]
    const dayOfWeek = week[day]

    return (
        <div style={styles.outerDivStyles}>
            <hr/>
            
            <h2 style={styles.days}>{dayOfWeek}</h2>
            <div style={styles.innerDivStyles}>
                <h3 style={styles.tempText}><span style={styles.hiLoText}>HI:</span> {Math.round(props.day.temperatureHigh)}˚</h3>
                <h3 style={styles.tempText}><span style={styles.hiLoText}>LO:</span> {Math.round(props.day.temperatureLow)}˚</h3>
            </div>
            <h5 style={styles.summaryText}>{props.day.summary.toUpperCase()}</h5>
            <br/>
        </div>
    )
}

export default Daily