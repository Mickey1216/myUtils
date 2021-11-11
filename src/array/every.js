/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 * 功能：如果数组中的每个元素都满足测试函数，则返回true，否则返回false
 */

export function every(arr,callback){
    //遍历数组
    for(let i=0;i<arr.length;i++){
        //执行回调 如果回调执行返回结果为false
        if(!callback(arr[i],i)){
            return false
        }
    }

    //如果都满足条件 则返回true
    return true
}
