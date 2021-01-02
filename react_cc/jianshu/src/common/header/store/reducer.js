import * as constants from './constants';

const defaultState = {
    focused: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            return {
                focused: true,
            };

        case constants.SEARCH_BLUR:
            return {
                focused: false,
            };
        default:
            console.log("No " + action.type + " found.");
            break;
    }
    return state;
};