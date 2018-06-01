import React from 'react';

function ZipSubmitComponent(props) {
    return (
        <div>
            <input id='zipInput' placeholder='zip'/>
            <button onClick={() => props.searchWeather(document.getElementById('zipInput').value)}>Check Your Local Weather</button>
        </div>
    )
}

export default ZipSubmitComponent;