/**
 * 
 * @param {*} Fn 
 * @param {*} obj 
 * @param {*} args 
 * 功能：执行Fn，使this为obj，并将args数组中的元素传给Fn（功能等同于函数对象的apply方法）
 */

export function apply(Fn,obj,args){
    //判断
    if(obj === undefined || obj === null){
        obj = globalThis //全局对象
    }
    //为obj添加临时的方法
    obj.temp = Fn
    //执行方法
    let result = obj.temp(...args)
    //删除临时方法
    delete obj.temp
    //返回结果
    return result 
}