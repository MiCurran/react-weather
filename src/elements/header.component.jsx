import React from 'react';

export default function HeaderComponent (props){
    const dateBuild = props.dateBuild
return(
    <div className="location-container">
    <div className="location">
      <h2>{props.weatherName}, {props.weatherCountry}</h2>
    </div>
    <div className="date"> {dateBuild(new Date())}</div>
  </div>
)
}
