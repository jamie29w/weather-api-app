import React from 'react';

function HeaderComponent(props) {

    const style = {
        background: {
            backgroundColor: "lightgrey",
            width: "100%",
            height: "30vh",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            alignContent: "center",
        },
        input: {            
            height: "30px",
            width: "150px",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: "1em",
            padding: "5px",
            marginTop: "5vh",
            marginBottom: "0vh"
        },
        button: {
            height: "30px",
            width: "150px",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: "1em",
            padding: "5px",
            marginTop: "5vh",
            marginBottom: "5vh"
        }
    }

    return (
        <div style={style.background}>
            <input style={style.input} id='zipInput' placeholder='zip'/>
            <button style={style.button} onClick={() => props.searchWeather(document.getElementById('zipInput').value)}>Your Weather</button>
        </div>
    )
}

export default HeaderComponent;