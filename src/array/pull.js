/**
 * 
 * @param {Array} arr 
 * @param  {...any} values    
 * 功能：删除原数组中与value相同的元素，返回所有删除元素的数组
 * 说明：原数组发生了改变
 * 如：pull([1,3,5,3,7],2,7,3,7) => 原数组变为[1,5]，返回值为[3,3,7]
 */

export function pull(arr,...values){
    //声明数组，保存删掉的元素
    const result = []
    //遍历
    for(let i=0;i<arr.length;i++){
        //判断当前元素是否存在于values数组中
        if(values.includes(arr[i])){
            //将当前元素的值存入到result中
            result.push(arr[i])
            //删除当前元素
            arr.splice(i,1)
            //下标自减
            i--
        }
    }

    //返回结果
    return result
}


/**
 * 
 * @param {Array} arr 
 * @param {Array} values 
 * 功能：功能与pull一致，只是参数变为数组
 * 说明：原数组发生了改变
 * 如：pullAll([1,3,5,3,7],[2,7,3,7]) => 原始数组变为[1,5]，返回值为[3,3,7]
 */
export function pullAll(arr,values){
    return pull(arr,...values)
}