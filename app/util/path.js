
const domain = 'yoyi.com.cn'

const hostname = location.hostname

// let defaultOrigin =  'http://192.168.5.133:8083'
let defaultOrigin = 'http://www.chineseskill4kid.com'

if (hostname.indexOf(domain) > 0) {
    defaultOrigin = `http://${location.host}/`
}

const pathRoot = `${defaultOrigin}/api/`

export {
    pathRoot
}
