import React from "react"

function Daily (props) {
    console.log("Daily props are")
    console.log(props)
    
    const styles = {
        outerDivStyles: {
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            // margin: "15px"
        },
        innerDivStyles: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            margin: 15
        }
    }

    const date = new Date(props.day.time * 1000)
    const day = date.getDay()
    const week = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"]
    const dayOfWeek = week[day]



    return (
        <div style={styles.outerDivStyles}>
            <h2>{dayOfWeek}</h2>
            <div style={styles.innerDivStyles}>
                <h3>Hi: {Math.round(props.day.temperatureHigh)}˚</h3>
                <h3>Lo: {Math.round(props.day.temperatureLow)}˚</h3>
            </div>
            <h5>Description: {props.day.summary}</h5>
            <br/>
            <hr/>
        </div>
    )
}

export default Daily