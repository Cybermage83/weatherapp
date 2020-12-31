
import { setSubmit, getWeatherData, setActiveCity, setTempeature } from './'

export const globalReducer = (state, action) => {
    const { type } = action;
    const reducerSet = {
        ...setSubmit(state, action),
        ...getWeatherData(state, action),
        ...setActiveCity(state, action),
        ...setTempeature(state, action),
    };

    if (reducerSet[type]) {
        return reducerSet[type]()
    } else {
        return state;
    }

};
