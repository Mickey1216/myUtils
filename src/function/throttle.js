/**
 * 函数节流
 * @param {*} callback 
 * @param {*} wait 
 * 功能：创建一个节流函数，在wait毫秒内最多执行‘callback’一次
 */

export function throttle(callback,wait){
    //定义开始时间
    let start = 0
    //返回一个事件监听函数（也就是节流函数）
    return function(e){
        //获取当前时间戳
        let now = Date.now()
        //判断
        if(now - start >= wait){
            //若满足条件，则执行回调函数(this的指向:指向事件源)
            callback.call(this,e)
            //修改开始时间
            start = now
        }
    }

}