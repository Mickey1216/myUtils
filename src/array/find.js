/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 * 功能：找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回undefined。
 */

export function find(arr,callback){
    //遍历数组
    for(let i=0;i<arr.length;i++){
        //执行回调
        let res = callback(arr[i],i)
        //判断
        if(res){
            //返回当前正在遍历的元素
            return arr[i]
        }
    }

    //如果没有遇到满足条件的，返回undefined
    return undefined
}
