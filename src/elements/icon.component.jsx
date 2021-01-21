import React from 'react';

export default function WeatherIcon (props){
return(
    <div>
        <img src={process.env.PUBLIC_URL + `${props.main}.png`} alt={`${props.main}.png`}></img>
    </div>
)
}
