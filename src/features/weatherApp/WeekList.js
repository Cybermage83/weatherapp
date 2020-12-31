import React, { useContext } from "react";
import { GlobalStateContext } from './reducers/context';

import calcTemp from '../services/calcTemp';
import { WeekListStyle } from './styles'

function WeekInfo() {
    const { state, dispatch } = useContext(GlobalStateContext);
    if (!state.weatherData) {
        return <WeekListStyle>

        </WeekListStyle>
    }
    const { weatherData } = state;
    const { days } = weatherData;
    const { daily } = days;
    const daysSet = daily.slice(1, 5);

    return <WeekListStyle>
        {daysSet.map((d, i) => {
            const { weather, dt, temp } = d;
            const dayWeather = weather[0];
            const { main } = dayWeather;
            const newDay = new Date(dt * 1000);
            const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(newDay);
            const { day } = temp;
            const tempToday = calcTemp(day, state.celsius);

            return (
                <li key={main.toLowerCase() + i}>
                    <img width="46" height="46" alt={main.toLowerCase()} src={`../../images/${main.toLowerCase()}.png`} />
                    <span className="day-name">{dayName}</span>
                    <span className="day-temp">{`${tempToday} ${state.celsius ? '°C' : '°F'}`}</span>
                </li>
            )
        })}

    </WeekListStyle>;
}

export default WeekInfo;
