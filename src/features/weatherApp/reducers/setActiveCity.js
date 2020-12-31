import { CONST } from './constants';

export default (state, action) => {
    const reducer = {
        [CONST.SET_ACTIVE_CITY]() {
            return { ...state, activeCity: action.data };
        },
    };
    return reducer;
}