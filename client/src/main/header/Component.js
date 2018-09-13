import React from 'react'

const HeaderComponent = (props) => {

    const styles = {
        button: {
            backgroundColor: "#FFEFBA",
            boxShadow: "0 2px 5px lightgrey",
            fontSize: "1em",
            minHeight: "30px",
            width: "25%",
            marginTop: '5vh',
            marginBottom: '5vh',
            padding: 10,
            WebkitAppearance: "none",
            borderRadius: 0
        },
        form: {
            backgroundColor: "#FEFDF8",
            width: "100%",
            minHeight: "10vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
        },
        input: {            
            fontSize: "1em",
            minHeight: "30px",
            textAlign: "left",
            minWidth: 150,
            width: "60%",
            outline: "none",
            marginTop: '5vh',
            marginBottom: '5vh',
            padding: 10,
            WebkitAppearance: "none",
            borderRadius: 0
        }
    }

    return (
        <form style={styles.form} onSubmit={(e) => props.searchWeather(e, document.getElementById('zipInput').value)}>
            <input style={styles.input} id='zipInput' placeholder='Location'/>
            <button type="submit" style={styles.button}>Check the Weather</button>
        </form>
    )
}

export default HeaderComponent