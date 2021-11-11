/**
 * 
 * @param {String} str 
 * @param {Number} num
 * 功能：如果字符串的长度超过了num，截取前面num长度部分，并以...结束
 */

export function truncate(str,num){
    return str.slice(0,num) + '...'
}