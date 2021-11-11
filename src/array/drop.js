/**
 * 
 * @param {Array} arr 
 * @param {Number} count 
 * 功能：得到当前数组过滤掉左边count个后剩余元素组成的数组
 * 说明：不改变当前数组，count默认是1
 * 如：drop([1,3,5,7],2) => [5,7]
 */

export function dropLeft(arr,count){
    return arr.filter((value,index) => index >= count)
}



/**
 * 
 * @param {Array} arr 
 * @param {Number} count 
 * 功能：得到当前数组过滤掉右边count个后剩余元素组成的数组
 * 说明：不改变当前数组，count默认是1
 * 如：drop([1,3,5,7],2) => [1,3]
 */

export function dropRight(arr,count){
    return arr.filter((value,index) => index < arr.length - count)
}