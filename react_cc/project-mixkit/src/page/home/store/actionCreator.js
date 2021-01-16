import axios from "axios";
import * as constants from "./constants";
import { fromJS } from "immutable";

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    videoContentList: result.videoContentList,
    musicContentList: result.musicContentList,
    soundEffectList: result.soundEffectList
});

export const getList = () => {
    return (dispatch) => {
        axios.get("./api/homeContent.json").then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        });
    };
};