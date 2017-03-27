
import token from '../util/token'
import { pathRoot } from '../util/path'

/**
 * 使用方法
 * import yoyi from 'fetch'
 *
 * skill.get(url, {key,value})
 * skill.post(url, {key,value})
 *
 * code 200   = resolve
 * code >= 400   = reject
 */

const headers = {
    'Accept': 'application/json;charset=utf-8',
    'Content-Type': 'application/json;charset=utf-8',
    'token': null
}

const status = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    }
    return Promise.reject(response)
}

const json = (response) => { return response.json() }

const formatGet = (url, payload) => {
    const result = Object.keys(payload).map((key) => {
        return `${key}=${payload[key]}`
    }).join('&')
    return `${url}?${result}`
}

const isObject = (v) => {
    if (Object.prototype.toString.call(v) == '[object Object]') {
        return true
    }
    return false
}

const post = (url, payload) => {
    Object.assign(headers, { token: token.get()})
    const requestHeaders = {
        headers,
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(payload)
    }
    return fetch(`${pathRoot}${url}`, requestHeaders).then(status).then(json)
}

const get = (url, payload) => {
    url = isObject(payload) ? formatGet(url, payload) : url
    Object.assign(headers, { token: token.get()})
    const requestHeaders = {
        headers,
        method: 'GET',
        credentials: 'include'
    }
    return fetch(`${pathRoot}${url}`, requestHeaders).then(status).then(json)
}


export default {
    post,
    get
}
