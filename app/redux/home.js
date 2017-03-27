import { combineReducers } from 'redux'

// import module
import test from './test'

// module to redux
const appReducer = combineReducers({
    test
})

// reset redux
// 重置redux，在切换公司或者切换用户的时候需要触发，从而清楚全部缓存数据
const rootReducer = (state, action) => {
    if (action.type === 'RESET_REDUX') {
        state = undefined
    }
    return appReducer(state, action)
}
export default rootReducer
