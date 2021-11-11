/**
 * 
 * @param {Object} obj 
 * @param {Function} Fn 
 * 功能：判断obj是否是Fn类型的实例
 * 实现：Fn的原型对象是否是obj的原型链上的某个对象，如果是返回true，否则返回false。
 */

export function myInstanceOf(obj,Fn){
    //获取函数的显式原型
    let prototype = Fn.prototype
    //获取obj的隐式原型对象
    let proto = obj.__proto__
    //遍历原型链
    while(proto){
        //检测原型对象是否相等
        if(prototype === proto){
            return true
        }

        //如果不相等
        proto = proto.__proto__
    }
}