/**
 * 区别深拷贝和浅拷贝：
 * 浅拷贝：只是复制了对象属性或数组元素本身（只是引用地址值）
 * 深拷贝：不仅复制了对象属性或数组元素本身，还复制了指向的对象（使用递归）
 */


/**
 * 实现浅拷贝
 */

/**
 *方法1：利用ES6语法：扩展运算符
 */
export function clone1(target) {
    //类型判断 {} []
    if (typeof target === 'object' && target !== null) {
        //判断数据是否为数组
        if (Array.isArray(target)) {
            return [...target]
        } else {
            return { ...target }
        }
    } else {
        return target
    }
}


/**
 *方法2：利用ES5语法：for ... in
 */
export function clone2(target) {
    //类型判断 {} []
    if (typeof target === 'object' && target !== null) {
        //创建一个容器
        const result = Array.isArray(target) ? [] : {}

        //遍历target数据
        for (let key in target) {
            //判断当前对象身上是否包含该属性
            if (target.hasOwnProperty(key)) {
                //将属性设置到result结果数据中
                result[key] = target[key]
            }
        }

        return result
    } else {
        return target
    }
}


/**
 * 实现深拷贝
 */


/**
 * 实现1：大众乞丐版
 * 问题1：函数属性会丢失
 * 问题2：循环引用会出错
 */
export function deepClone1(target) {
    //通过数据创建JSON格式的字符串
    let str = JSON.stringify(target)
    //将JSON字符串创建为JS数据
    let data = JSON.parse(str)

    //返回结果
    return data
}

/**
 * 实现2：面试基础版本
 * 解决问题1：函数属性还没丢失
 */
export function deepClone2(target) {
    //类型判断 {} []
    if (typeof target === 'object' && target !== null) {
        //创建一个容器
        const result = Array.isArray(target) ? [] : {}

        //遍历target数据
        for (let key in target) {
            //判断当前对象身上是否包含该属性
            if (target.hasOwnProperty(key)) {
                //将属性设置到result结果数据中
                result[key] = deepClone2(target[key])
            }
        }

        return result
    } else {
        return target
    }
}

/**
 * 实现3：面试加强版本
 * 解决问题2：循环引用正常
 */
export function deepClone3(target, map = new Map()) {
    //类型判断 {} []
    if (typeof target === 'object' && target !== null) {
        //克隆数据之前，先判断：数据之前是否克隆过
        let cache = map.get(target)
        if (cache) {
            return cache
        }

        //创建一个容器
        const result = Array.isArray(target) ? [] : {}
        //将新的结果存入到容器中
        map.set(target,result)

        //遍历target数据
        for (let key in target) {
            //判断当前对象身上是否包含该属性（不能拷贝原型对象的属性）
            if (target.hasOwnProperty(key)) {
                //拷贝
                result[key] = deepClone3(target[key],map)
            }
        }

        return result
    } else {
        return target
    }
}

/**
 * 实现4：面试加强版本2（优化遍历性能）
 * 数组：while|for|forEach() 优于 for-in|keys()&forEach()
 * 对象：for-in 与 keys()&forEach()差不多
 */
export function deepClone4(target, map = new Map()) {
    //类型判断 {} []
    if (typeof target === 'object' && target !== null) {
        //克隆数据之前，先判断：数据之前是否克隆过
        let cache = map.get(target)
        if (cache) {
            return cache
        }

        //判断目标数据的类型
        let isArray = Array.isArray(target)
        //创建一个容器
        const result = isArray ? [] : {}
        //将新的结果存入到容器中
        map.set(target,result)

        //遍历对象
        if(isArray){ 
            //如果目标数据为数组，使用forEach遍历
            target.forEach((item,index) => {
                result[index] = deepClone4(item,map)
            })
        }else{
            //如果目标数据为对象，获取所有的键名，然后再使用forEach遍历
            Object.keys(target).forEach(key => {
                result[key] = deepClone4(target[key],map)
            })
        }

        return result
    } else {
        return target
    }
}