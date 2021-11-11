/**
 * 
 * @param {*} arr  数组
 * @param {*} callback  回调函数
 * 功能：创建一个新数组，其结果是该数组中每个元素是调用一次提供的函数后的返回值。
 */

export function map(arr,callback){
    //声明一个空的数组
    let result = []
    //遍历数组
    for(let i=0;i<arr.length;i++){
        //执行回调
        result.push(callback(arr[i],i))
    }
    //返回结果
    return result
}