/**
 * 函数防抖
 * @param {*} callback 
 * @param {*} wait 
 * 功能：创建一个防抖动函数，该函数会从上一次被调用后，延迟wait毫秒后调用callback
 */

export function debounce(callback,wait){
    //定时器变量
    let timeId = null
    //返回一个函数
    return function(e){
        //判断
        if(timeId !== null){
            //清空定时器
            clearTimeout(timeId)
        }

        //启动定时器
        timeId = setTimeout(() => {
            //执行回调
            callback.call(this,e) //this指向事件源

            //重置定时器变量
            timeId = null
        }, wait)
    }
}