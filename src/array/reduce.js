/**
 * 
 * @param {*} arr 数组
 * @param {*} callback 回调函数
 * @param {*} initValue 初始值
 * 功能：从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。
 */

export function reduce(arr,callback,initValue){
    //声明结果变量
    let result = initValue
    
    for(let i=0;i<arr.length;i++){
        //执行回调
        result = callback(result,arr[i])
    }

    //返回最终的结果
    return result
}
