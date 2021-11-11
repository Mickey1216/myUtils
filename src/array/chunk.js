/**
 * 
 * @param {Array} arr 
 * @param {Number} size 
 * 功能：将数组拆分成多个size长度的区块，每个区块组成小数组，整体组成一个二维数组
 */

export function chunk(arr,size = 1){
    //判断
    if(arr.length === 0){
        return []
    }
    
    //声明两个数组
    let result = []
    let tmp = []

    //遍历
    arr.forEach(item => {
        //判断tmp元素的长度是否为0
        if(tmp.length === 0){
            //将tmp压入到result中
            result.push(tmp)
        }

        //将元素压入到临时数组tmp中
        tmp.push(item)

        //判断
        if(tmp.length === size){
            tmp = []
        }
    })

    //返回结果
    return result
}