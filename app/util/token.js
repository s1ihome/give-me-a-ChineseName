import Cookie from 'js-cookie'

const token = {
    /**
     * defaultKey
     */
    key: 'TOKEN',
    /**
     * [set description]
     * @param {string} v token value
     */
    set(v) {
        if (!v) return
        Cookie.set(token.key, v)
    },
    /**
     * get token
     */
    get() {
        const result = Cookie.get(token.key)
        return result ? result : null
    },
    /**
     * clear token with logout
     */
    clear() {
        return Cookie.remove(token.key)
    },
    /**
     *  check user status
     */
    isLogin() {
        const result = token.get()
        return result ? true : false
    }
}

export default {
    set: token.set,
    get: token.get,
    clear: token.clear,
    isLogin: token.isLogin
}
