import { CONST } from './constants';

export const submitRequest = () => {
    return ({
        type: CONST.SUBMIT
    })
};

export const resetRequest = () => ({
    type: CONST.SUBMIT_RESET
});

// Weather Request
export const initWeatherRequest = () => ({
    type: CONST.GET_WEATHER_INIT
});

export const setWeatherData = (data) => {
    return ({
        type: CONST.GET_WEATHER_SUCESS,
        data: data
    })
};

export const errorWeatherRequest = (err) => ({
    type: CONST.GET_WEATHER_ERROR,
    data: err
});

export const setActiveCity = (city) => ({
    type: CONST.SET_ACTIVE_CITY,
    data: city
});

export const setTempreature = () => ({
    type: CONST.SET_TEMPREATURE,
});
