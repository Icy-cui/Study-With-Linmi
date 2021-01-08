// import * as constants from './constants';
import { fromJS } from "immutable";

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: []
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case "change_home_data":
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