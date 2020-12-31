import { CONST } from './constants';

export default (state, action) => {
    const reducer = {
        [CONST.SUBMIT]() {
            return { ...state, submitState: true };
        },
        [CONST.SUBMIT_RESET]() {
            return { ...state, submitState: false };
        }
    };
    return reducer;
}