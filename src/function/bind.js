/**
 * 
 * @param {*} Fn 
 * @param {*} obj 
 * @param  {...any} args 
 * 功能：给Fn绑定this为obj，并指定参数为后面的n个参数（功能等同于函数对象的bind方法）
 */
import { call } from "./call";
export function bind(Fn,obj,...args){
    //返回一个新的函数
    return function(...args2){
        //执行call()
        return call(Fn,obj,...args,...args2)
    }
}