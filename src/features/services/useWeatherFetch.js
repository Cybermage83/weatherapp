import { useState, useEffect, useContext } from 'react';
import { GlobalStateContext } from '../weatherApp/reducers/context';
import { resetRequest, setWeatherData, errorWeatherRequest, initWeatherRequest } from '../weatherApp/reducers/actions';

const useWeatherFetch = (cityName) => {
    const { state, dispatch } = useContext(GlobalStateContext);
    const API_KEY = "4d8fb5b93d4af21d66a2948710284366";

    useEffect(() => {
        if (!cityName) {
            dispatch(resetRequest())
            return;
        };

        const fetchingWeather = async () => {
            dispatch(initWeatherRequest());
            const fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`).then(response => response.json()).then(async res => {
                if (res.cod === '404') {
                    dispatch(errorWeatherRequest(res))
                    dispatch(resetRequest())
                    return;
                }
                const { lon, lat } = res.coord;
                return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(response => response.json()).then(resp => ({
                    day: res,
                    days: resp
                }));
            });

            if (fetchData) {
                window.location.hash = cityName;
                dispatch(setWeatherData(fetchData));
            }
            dispatch(resetRequest())
        };
        fetchingWeather();

        return () => {
            //clean
        }
    }, [cityName, dispatch])
};

export default useWeatherFetch;
