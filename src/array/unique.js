/**
 * 
 * @param {Array} arr 
 * 方法1：利用forEach()和indexOf()，本质是双重遍历，效率差些
 */

export function unique(arr){
    //声明一个空数组
    let result = []
    //遍历原始数组
    arr.forEach(item => {
        //检测result数组中是否包含这个元素
        if(result.indexOf(item) === -1){
            //若没有该元素，则插入到result中
            result.push(item)
        }
    })

    //返回结果数组
    return result
}


/**
 * 
 * @param {Array} arr 
 * 方法2：利用forEach和对象容器，只需一重遍历，效率高些
 */
function unique2(arr){
    //声明一个空数组
    const result = []
    //声明空对象
    const obj = {}
    //遍历数组
    arr.forEach(item => {
        if(obj[item] === undefined){
            //将item作为下标存储在obj中（因为item是一个变量，所以不能使用.运算符）
            obj[item] = true
            result.push(item)
        }
    })

    //返回结果
    return result

}


/**
 * 
 * @param {Array} arr 
 * 方法3：利用ES6语法：from + set或者... + set，编码简洁
 */
function unique3(arr){
    // //将数组转化为集合Set
    // let set = new Set(arr)
    // //将set展开创建一个数组
    // let result = [...set]
    // //返回结果
    // return result
    return [...new Set(arr)]
}