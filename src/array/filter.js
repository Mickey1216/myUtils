/**
 * 
 * @param {Array} arr 数组
 * @param {Function} callback 回调函数
 * 功能：将所有在过滤函数中返回true的数组元素放进一个新数组中并返回。
 */

export function filter(arr,callback){
    //声明空数组
    let result = []

    //遍历数组
    for(let i=0;i<arr.length;i++){
        //执行回调
        let res = callback(arr[i],i)
        //判断 如果为真，则压入到result结果中
        if(res){
            result.push(arr[i])
        }
    }

    //返回结果
    return result
}