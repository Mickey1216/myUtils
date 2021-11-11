/**
 * 
 * @param {*} Fn 
 * @param {*} obj 
 * @param  {...any} args 
 * 功能：执行Fn，使this为obj，并将后面的n个参数传给Fn（功能等同于函数对象的call方法）
 */

export function call(Fn,obj,...args){
    //判断
    if(obj === undefined || obj === null){
        obj = globalThis //全局对象
    }

    //为obj添加临时的方法
    obj.temp = Fn
    //调用temp方法
    let result = obj.temp(...args)
    //删除temp方法
    delete obj.temp
    //返回执行结果
    return result
}