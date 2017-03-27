
 /**
  * 判断数据是否过期
  * @param  {[type]} oldTime        [当前时间戳]
  * @param  {[type]} expirationTime [多久过期，单位秒]
  * @return {[type]}                [description]
  */
export const canUpdate = (oldTime, expirationTime = 300) => {
    if (oldTime) {
        const timestamp = new Date().getTime()
        const difference = expirationTime - ((timestamp - oldTime) / 1000)
        if (difference > 0) {
            return false
        }
    }
    return true
}
