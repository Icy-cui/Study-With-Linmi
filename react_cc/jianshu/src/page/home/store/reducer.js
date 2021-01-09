// import * as constants from './constants';
import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: []
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            })

        default:
            console.log("No " + action.type + " found.");
            break;
    }
    return state;
};