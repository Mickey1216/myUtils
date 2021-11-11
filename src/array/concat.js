/**
 * 
 * @param {Array} arr 
 * @param  {...any} args 
 * 语法：var new_array = concat(old_array,value1[,value2,[,...[,valueN]]])
 * 功能：将n个数组或值与当前数组合并生成一个新数组
 */

export function concat(arr,...args){
    //声明一个数组
    let result = [...arr]
    //遍历数组
    args.forEach(item => {
        //判断item是否为数组
        if(Array.isArray(item)){
            result.push(...item)
        }else{
            result.push(item)
        }
    })

    //返回结果
    return result
}