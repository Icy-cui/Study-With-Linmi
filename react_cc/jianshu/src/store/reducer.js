import { combineReducers } from 'redux' ; 
// 有了路径会自动寻找index.js文件
import {reducer as headerReducer} from '../common/header/store' ;

const reducer = combineReducers({
    header: headerReducer
})

export default reducer;