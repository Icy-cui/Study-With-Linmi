import axios from "axios";
import * as constants from "./constants";
import { fromJS } from "immutable";

const changeDetail = (title, content) => ({
    type: constants.CHANGE_DETAIL,
    title,
    content
})

export const getDetail = () => {
    return (dispatch) => {
        axios.get("./api/detail.json").then((response) => {
            const result = response.data.data;
            dispatch(changeDetail(result.title, result.content));
        });
    };
};