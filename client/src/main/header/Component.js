import React from 'react';

function HeaderComponent(props) {

    const styles = {
        background: {
            backgroundColor: "#9FE3DD",
            width: "100%",
            height: "20vh",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            alignContent: "center",
        },
        form: {
            height: "20vh",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
        },
        input: {            
            height: "30px",
            width: "150px",
            fontSize: "1em",
            textAlign: "center"
        },
        button: {
            height: "30px",
            width: "150px",
            fontSize: "1em",
            backgroundColor: "#51BFB5"
        },
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

export default HeaderComponent;