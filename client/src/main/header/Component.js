import React from 'react'

function HeaderComponent(props) {

    const styles = {
        background: {
            alignContent: "center",
            backgroundColor: "#FEFDF8",
            display: "flex",
            flexDirection: "column",
            height: "20vh",
            justifyContent: "space-around",
            width: "100%",
        },
        button: {
            backgroundColor: "#FFEFBA",
            boxShadow: "0 2px 5px lightgrey",
            fontSize: "1em",
            height: "30px",
            width: "150px"
        },
        form: {
            display: "flex",
            flexDirection: "column",
            height: "20vh",
            justifyContent: "space-around",
            marginLeft: "auto",
            marginRight: "auto",
        },
        input: {            
            fontSize: "1em",
            height: "30px",
            textAlign: "center",
            width: "150px"
        }
    }

    return (
        <div style={styles.background}>
            <form style={styles.form} onSubmit={(e) => props.searchWeather(e, document.getElementById('zipInput').value)}>
                <input style={styles.input} id='zipInput' placeholder='Location'/>
                <button type="submit" style={styles.button} >Your Weather</button>
            </form>
        </div>
    )
}

export default HeaderComponent