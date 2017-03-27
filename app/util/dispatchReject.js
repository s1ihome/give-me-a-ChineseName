/* eslint-disable */

import { browserHistory } from 'react-router'
import single from './delayedTask'
/**
 * jsonrpc 接口错误反馈
 * @param  {[object]} 接口result
 * @return {[string]} clear 清楚错误码, error 抛出错误码
 */


const unAuthed = 401
// 延时10毫秒
const _batchingMilliseconds = 10

function sendRedirect() {
    const { pathname, search } = window.location
    browserHistory.push({
        pathname: '/login',
        query: {
            next: pathname + search
        }
    })
}

/**
 * 接口无权限，重定向到登陆
 */
const redirectLogin = () => {
    /**
     * 延时防止多次触发sendRedirect，导致重定向参数错误
     */
    const _delayedTask = single.getInstance()
    if (_batchingMilliseconds) {
        _delayedTask.delay(_batchingMilliseconds, sendRedirect, null)
    } else {
        sendRedirect()
    }
}

const dispatchReject = (e) => {
    if (e.status === unAuthed) {
        return redirectLogin()
    }
    return console.error(e)
}

export default dispatchReject
