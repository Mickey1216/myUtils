/**
 * 手写消息订阅与发布（订阅者模式）
 * PubSub:包含所有功能的订阅/发布消息的管理者
 * PubSub.subscribe(msg,subscriber):订阅消息，指定消息名和订阅者回调函数
 * PubSub.publish(msg,data):异步发布消息，指定消息名和数据
 * PubSub.publishSync(msg,data):同步发布消息，指定消息名和数据
 * PubSub.unsubscribe(flag):取消订阅，根据标识取消某个或某些消息的订阅
 */

export const PubSub = {
    //订阅唯一id
    id:1,
    //频道与回调保存容器
    callbacks:{}
}

//订阅频道
PubSub.subscribe = function(channel,callback){
    //创建唯一的编号
    let token = 'token_' + this.id++
    //pay token_1
    //判断callbacks属性中是否存在pay
    if(this.callbacks[channel]){
        this.callbacks[channel][token] = callback
    }else{
        this.callbacks[channel] = {
            [token]:callback
        }
    }

    //返回频道订阅的id
    return token
}

//发布消息
PubSub.publish = function(channel,data){
    //获取当前频道中所有的回调
    if(this.callbacks[channel]){
        Object.values(this.callbacks[channel]).forEach(callback => {
            //执行回调
            callback(data)
        })
    }
}

//取消订阅
/**
 * 1)没有传值，flag为undefined
 * 2)传入token字符串
 * 3)msgName字符串
 */

PubSub.unsubscribe = function (flag){
    //如果flag为undefined，清空所有订阅
    if(flag === undefined){
        this.callbacks = {}
    }else if(typeof flag === 'string'){
        //判断是否为token_开头
        if(flag.indexOf('token_') === 0){
            //表明是一个订阅id
            let callbackObj = Object.values(this.callbacks).find(obj => obj.hasOwnProperty(flag))
            if(callbackObj){
                delete callbackObj[flag]
            }
        }else{
            //表明是一个频道的名称
            delete this.callbacks[flag]
        }
    }
}