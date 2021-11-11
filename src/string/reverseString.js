/**
 * 
 * @param {String} str 
 * 功能：生成一个倒序的字符串
 */

export function reverseString(str){
    //将字符串转为数组
    let arr = [...str]
    // let arr = str.split('')
    //反转数组
    arr.reverse() 
    //将数组拼接成字符串
    let result = arr.join('')
    //返回结果
    return result
}