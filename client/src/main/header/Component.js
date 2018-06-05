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
            alignContent: "center"
        },
        input: {
            
            height: "25px",
            width: "200px"
        
            
        },
        button: {
            // flexDirection: "row",
            height: "25px",
            width: "200px"
        }
    }

    return (
        <div style={style.background}>
            <input style={style.input} id='zipInput' placeholder='zip'/>
            <button style={style.button} onClick={() => props.searchWeather(document.getElementById('zipInput').value)}>Check Your Local Weather</button>
        </div>
    )
}

export default HeaderComponent;