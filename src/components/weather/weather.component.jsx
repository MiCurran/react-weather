import React from 'react';
import HeaderComponent from '../../elements/header.component'
import WeatherIcon from '../../elements/icon.component'
import Temperature from '../../elements/temperature.component'
import './weather.scss'

export default function Weather (props){
    const weather = props.weather
return(
    <div>
    <HeaderComponent 
    weatherName={weather.name} 
    weatherCountry={weather.sys.country}
    dateBuild={props.dateBuild}
    />
    <div className="weather-container">
    <WeatherIcon 
        icon={weather.weather[0].icon}
        main={weather.weather[0].main} 
        />
      <div className="temperature">
      
        <Temperature 
        actual={weather.main.temp}
        feelsLike={weather.main.feels_like}
        />
      </div>
      <div className="weather">{weather.weather[0].main}</div>
      <div className="weather">{weather.weather[0].description}</div>

    </div>
  </div>
)
}
