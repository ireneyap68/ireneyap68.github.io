import React, { useState} from 'react'
import axios from 'axios'
import WeatherResult from './WeatherResult'


export default function Weather() {
    // TODDO: Have error state that set conditional rendering of an error component
    // TODO: Verify zip is actually a zip
    const [zip, setZip] = useState('')
    const [weather, setWeather] = useState(null)

    // on submit, we will call the api using axios
    const handleSubmit = e => {
        e.preventDefault()
        let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=052f26926ae9784c2d677ca7bc5dec98`
        axios.get(url)
        .then(res => {
            // set sum state
            // TODO: Create custom object of deets I want
            setWeather(res.data)

        }).catch(err => console.log(err))
    }
    // set sum state
    // conditionally render a weather result component
    return(
        
        <div class="jumbotron">
            
            
            <h1 class="display-4">🌦❄️ Find Weather in your American Area ☀️⛈</h1>
            
            <div class="card text-center">
            {weather ? <WeatherResult weather={weather}/> : null}
            <p>Enter your zipcode to find current weather in your area! </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="zip">Zipcode: </label>
                <input type="text" id="zip" onChange={e => setZip(e.target.value)} />
                <input type="submit" value="Find Weather" />
            </form>
            </div> 
        </div>
    
    )
}