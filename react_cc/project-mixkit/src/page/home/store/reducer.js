import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
    videoContentList: [],
    musicContentList: []
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            console.log(action.videoContentList);
            return state.merge({
                videoContentList: fromJS(action.videoContentList),
                musicContentList: fromJS(action.musicContentList),
            });
        default:
            console.log("No " + action.type + " found.");
            break;
    }
    return state;
};