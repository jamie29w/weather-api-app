import React from "react";

function BodyComponent () {
    const styles = {
        div: {
            width: "100%",
            fontFamily: "platelet",
            fontSize: "2em",
            margin: "5vh"
        },
        headers: {
            textAlign: "center"
        }
    }
    return (
        <div style={styles.div}>
            <h1 style={styles.headers}>CURRENT TEMP IN RENO</h1>
            <h2 style={styles.headers}>66°</h2>
        </div>
    )
}

export default BodyComponent