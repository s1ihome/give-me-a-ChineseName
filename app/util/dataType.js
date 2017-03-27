
const isString = (target) => {
    if (Object.prototype.toString.call(target) == '[object String]') {
        return true
    }
    return false
}

const isFunc = (target) => {
    if (Object.prototype.toString.call(target) == '[object Function]') {
        return true
    }
    return false
}

const isArray = (target) => {
    if (Object.prototype.toString.call(target) == '[object Array]') {
        return true
    }
    return false
}

// 是否有效的数组， 数组 + 不为空
const effectiveArray = (target) => {
    if (Object.prototype.toString.call(target) != '[object Array]') return false
    if (target.length === 0) return false
    return true
}


const isObject = (target) => {
    if (Object.prototype.toString.call(target) == '[object Object]') {
        return true
    }
    return false
}

// 是否有效的对象， 对象 + 不为空
const effectiveObject = (target) => {
    if (Object.prototype.toString.call(target) != '[object Object]') return false
    if (Object.keys(target).length === 0) return false
    return true
}

const compare = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2)
}

const sortBeforeCompare = (obj1, obj2) => {
    function sortfunction(a, b){
        return (a - b)
    }
    return JSON.stringify(obj1.sort(sortfunction)) === JSON.stringify(obj2.sort(sortfunction))
}

export {
    compare,
    isFunc,
    isString,
    isArray,
    isObject,
    effectiveArray,
    effectiveObject,
    sortBeforeCompare
}
