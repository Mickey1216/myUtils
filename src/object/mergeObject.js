/**
 * 
 * @param  {...any} objs 
 * 功能：合并多个对象，返回一个合并后对象（不改变原对象）
 */

export function mergeObject(...objs){
    //声明一个对象
    const result = {}
    //遍历所有的参数对象
    objs.forEach(obj => {
        //获取当前对象所有的属性
        Object.keys(obj).forEach(key => {
            //检测result中是否存在key属性
            if(result.hasOwnProperty(key)){
                result[key] = [].concat(result[key],obj[key])
            }else{
                //如果没有，则直接写入
                result[key] = obj[key]
            }    
        })
    })

    //返回结果
    return result
}