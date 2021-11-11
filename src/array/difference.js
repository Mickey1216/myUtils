/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 * 功能：得到当前数组中所有不在arr中的元素组成的元素（不改变原数组）
 * 例子：difference([1,3,5,7],[5,8]) => [1,3,7]
 */

export function difference(arr1,arr2 = []){
    //判断参数
    if(arr1.length === 0){
        return []
    }

    if(arr2.length === 0){
        return arr1.slice()
    }

    const result = arr1.filter(item => !arr2.includes(item))
    //返回结果
    return result
}