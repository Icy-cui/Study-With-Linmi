// id
import { v4 } from "uuid";

const defaultState = {
    isShowClock: true,
    comments: [],
    todos: [{
            id: v4(),
            title: "Go out",
            completed: false,
        },
        {
            id: v4(),
            title: "Play with cc",
            completed: false,
        },
        {
            id: v4(),
            title: "Eat dinner",
            completed: false,
        },
    ],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    return state;
}