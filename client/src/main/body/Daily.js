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


    return (
        <div style={styles.outerDivStyles}>
            <div style={styles.innerDivStyles}>
                <h3>Hi: {props.day.temperatureHigh}</h3>
                <h3>Lo: {props.day.temperatureLow} </h3>
            </div>
            <h5>Description: {props.day.summary}</h5>
            <br/>
            <hr/>
        </div>
    )
}

export default Daily