/**
 * 
 * @param {Array} arr 
 * @param {Number} begin 
 * @param {Number} end 
 * 语法：var new_array = slice(oldArray,[begin[,end]])
 * 功能：返回一个由begin和end决定的原数组的浅拷贝，原始数组不会被改变
 */

export function slice(arr,begin,end){
    //若arr数组长度为0
    if(arr.length === 0){
        return []
    }

    //判断begin
    begin = begin || 0
    if(begin >= arr.length){
        return []
    }

    //判断end
    end = end || arr.length
    if(end < begin){
        end = arr.length
    }

    //声明一个数组
    let result = []
    //遍历对象
    for(let i=0;i<arr.length;i++){
        if(i >= begin && i < end){
            //将下标对应的元素压入数组
            result.push(arr[i])
        }
    }

    //返回结果
    return result
}
