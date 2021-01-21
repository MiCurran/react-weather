import React, { Fragment} from 'react';

export default function Temperature (props){
    const actual = props.actual
    const feelsLike = props.feelsLike
return(
    <Fragment>
    <div className="temp-actual">
    <p>Actual</p>
    <h2>{Math.round(actual)}°F</h2>
  </div>
  
  <div className="temp-feel">
  <p>Feels Like</p>
  <h2>{Math.round(feelsLike)}°F</h2>
  </div>
  </Fragment>
)
}
