import React from "react"

const ErrBodyComponent = () => {
    const styles = {
        headerText: {
            color: 'red',
            fontSize: '.6em',
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            padding: 10
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
            padding: 20
        }
    }
    

    return (
        <div style={styles.outerDiv}>
            <h1 style={styles.headerText}>Please enter a valid zip code or city and state.</h1>
        </div>
    )
}

export default ErrBodyComponent