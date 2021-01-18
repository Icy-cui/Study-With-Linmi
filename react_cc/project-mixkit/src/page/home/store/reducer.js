import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
    videoContentList: [],
    musicContentList: [],
    soundEffectList: [],
    videoFooterList: [],
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            console.log(action.videoContentList);
            return state.merge({
                videoContentList: fromJS(action.videoContentList),
                musicContentList: fromJS(action.musicContentList),
                soundEffectList: fromJS(action.soundEffectList),
                videoFooterList: fromJS(action.videoFooterList),
            });
        default:
            console.log("No " + action.type + " found.");
            break;
    }
    return state;
};