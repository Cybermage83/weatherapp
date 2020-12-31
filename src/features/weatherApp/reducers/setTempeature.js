import { CONST } from './constants';

export default (state, action) => {
    const reducer = {
        [CONST.SET_TEMPREATURE]() {
            return { ...state, celsius: !state.celsius };
        },
    };
    return reducer;
}