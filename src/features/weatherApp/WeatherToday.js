import React, { useContext, } from "react";
import { GlobalStateContext } from './reducers/context';
import calcTemp from '../services/calcTemp';
import { WeatherTodayStyle, WeatherTodayDateStyle, WeatherTodayTempStyle } from './styles'
import { TempToggle } from './'

function WeatherToday() {
    const { state, dispatch } = useContext(GlobalStateContext);
    const { weatherData } = state;

    if (!weatherData) {
        return <WeatherTodayStyle >
            <WeatherTodayDateStyle>
                <h2 className="date-dayname">Search Your City</h2>
            </WeatherTodayDateStyle>
        </WeatherTodayStyle>
    }

    const { day } = weatherData;
    const { name, sys, dt, main, weather } = day;
    const { country } = sys;
    const newDay = new Date(dt * 1000);
    const fullYear = newDay.getFullYear()
    const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(newDay);
    const monthName = new Intl.DateTimeFormat('en-US', { month: 'short', }).format(newDay);
    const date = newDay.getDate();
    const temp = calcTemp(main.temp, state.celsius);
    const weatherType = weather[0].main

    return <WeatherTodayStyle>
        <div className="weather-gradient"></div>
        <TempToggle />
        <WeatherTodayDateStyle>
            <h2 className="date-dayname">{dayName}</h2>
            <span className="date-day">{`${date} ${monthName} ${fullYear}`}</span>
            <i className="location-icon" data-feather="map-pin"></i>
            <span className="location">{name}, {country}</span>
        </WeatherTodayDateStyle>

        <WeatherTodayTempStyle>
            <i className="weather-icon" data-feather="sun"></i>
            <h1 className="weather-temp">{`${temp} ${state.celsius ? '°C' : '°F'}`}</h1>
            <h3 className="weather-desc">{`${weatherType}`}</h3>
        </WeatherTodayTempStyle>
    </WeatherTodayStyle>;
}

export default WeatherToday;
