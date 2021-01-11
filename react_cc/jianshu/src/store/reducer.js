import { combineReducers } from 'redux-immutable';
// 有了路径会自动寻找index.js文件
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../page/home/store';
import { reducer as DetailReducer } from '../page/detail/store';

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: DetailReducer
})

export default reducer;