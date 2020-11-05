import React from 'react'

export default function WeatherResult(props) {
    return(
        <div>
            <h2 className="weather-name">Weather for {props.weather.name}</h2>
            <hr/>
    
            <p>Currently temperature: {(props.weather.main.temp -273.15) * 9/5 +32} degree </p>
            <p>Highest of the day: {(props.weather.main.temp_max -273.15) * 9/5 +32} degree </p>
            <p>Lowest of the day: {(props.weather.main.temp_min -273.15) * 9/5 +32} degree</p>
        </div>
    )
}