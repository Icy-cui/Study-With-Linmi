import * as constants from './constants';
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    list: []
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            // 使用了 immutable 以后修改state
            return state.set('focused', true)
                // 原始方法修改state
                // return {
                //     focused: true,
                // };

        case constants.SEARCH_BLUR:
            return state.set('focused', false)
                // return {
                //     focused: false,
                // };
        default:
            console.log("No " + action.type + " found.");
            break;
    }
    return state;
};