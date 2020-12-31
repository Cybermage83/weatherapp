import React, { useEffect, useState, useContext, } from "react";
import { GlobalStateContext } from './reducers/context';
import useWeatherFetch from '../services/useWeatherFetch'
import { submitRequest, setActiveCity } from './reducers/actions'

import { LocationStyle } from './styles'

function LocationSearch() {
    const { state, dispatch } = useContext(GlobalStateContext);
    const [city, setcity] = useState('')
    const { weatherDataInit } = state;
    useWeatherFetch(state.activeCity);
    useEffect(() => {
        if (window.location.hash) {
            dispatch(setActiveCity((window.location.hash.replace('#', ''))));
        }
    }, [dispatch]);

    return <LocationStyle>
        <input type="text"
            placeholder="Search for a city"
            autoFocus value={city}
            onChange={(e) => { setcity(e.target.value) }}
            onKeyUp={(e) => {
                if (e.key === 'Enter') {
                    dispatch(submitRequest())
                    dispatch(setActiveCity(city))
                    setcity('');
                }
            }}
        />
        <button type="submit" className="location-button"
            disabled={state.submitState || !city.length}
            onClick={() => {
                dispatch(submitRequest())
                dispatch(setActiveCity(city))
                setcity('');
            }}
        >{weatherDataInit ? 'LOADING' : 'SUBMIT'}</button>
        {state.weatherDataError && <span className="msg">{state.weatherDataError.message}</span>}
    </LocationStyle>;
}

export default LocationSearch;
