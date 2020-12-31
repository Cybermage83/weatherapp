import { CONST } from './constants';

export default (state, action) => {
    const reducer = {
        [CONST.GET_WEATHER_INIT]() {
            return { ...state, weatherDataInit: true, weatherDataError: false };
        },
        [CONST.GET_WEATHER_SUCESS]() {
            return { ...state, weatherDataInit: false, weatherData: action.data, weatherDataError: null };
        },
        [CONST.GET_WEATHER_ERROR]() {
            return { ...state, weatherData: null, weatherDataInit: false, weatherDataError: action.data };
        }
    };
    return reducer;
}