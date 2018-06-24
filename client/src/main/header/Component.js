import React from 'react';

function HeaderComponent(props) {

    const style = {
        background: {
            backgroundColor: "#9FE3DD",
            width: "100%",
            height: "20vh",
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
            textAlign: "center"
        },
        button: {
            height: "30px",
            width: "150px",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: "1em",
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