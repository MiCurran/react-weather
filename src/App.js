import React, { useState } from "react";
import keys from "./api/keys";
import Weather from './components/weather/weather.component'
import './App.scss'
const api = {
  base: keys.BASE_URL,
};

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const dateBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  };

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${apiKey}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
        });
    }
  };
 const checkLoaded = () =>{
   if(typeof weather.main == "undefined"){
     return(
       'search-container start'
     )}
     else{
       return('search-container')
     }
   }
 
  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 55
            ? "App hot"
            : "App cold"
          : "App"
      }
    >
      <main>
        <div className={checkLoaded()}>
          <input
            type="text"
            placeholder="Search a city or city, state.."
            className="search-bar"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
          <h3 style={{marginTop: '10px'}}>Search a City or City, State!</h3>
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <Weather weather={weather} 
            dateBuild={dateBuild}
            />

          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
