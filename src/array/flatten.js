/**
 * 
 * @param {Array} arr 
 * 语法：flatten(array)
 * 功能：取出嵌套数组（多维）中的所有元素放到一个新数组（一维）中 
 * 方法1：使用递归
 */

export function flatten1(arr){
    //声明结果数组
    let result = []
    //遍历数组
    arr.forEach(item => {
        //判断
        if(Array.isArray(item)){
            result = result.concat(flatten1(item))
        }else{
            result = result.concat(item)
        }
    })

    //返回结果
    return result
}


/**
 * 
 * @param {Array} arr 
 * 语法：flatten(array)
 * 功能：取出嵌套数组（多维）中的所有元素放到一个新数组（一维）中 
 * 方法2：使用some()和concat()
 */

export function flatten2(arr){
    //声明结果数组
    let result = [...arr]
    //循环判断
    /**
     * [1,2,[3,4,[5,6],7]] -> [1,2,3,4,[5,6],7] -> [1,2,3,4,5,6,7]
     */
    while(result.some(item => Array.isArray(item))){
        result = [].concat(...result)
    }

    //返回结果
    return result
}