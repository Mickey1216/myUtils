/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 * 功能：如果数组中的至少有一个元素满足测试函数，则返回true，否则返回false
 */

export function some(arr, callback) {
    //遍历数组
    for (let i = 0; i < arr.length; i++) {
        //执行回调 如果回调执行返回结果为true
        if (callback(arr[i], i)) {
            return true
        }
    }

    //如果都不满足条件 则返回false
    return false
}
