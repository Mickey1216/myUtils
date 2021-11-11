/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Mutils"] = factory();
	else
		root["Mutils"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/PubSub/PubSub.js":
/*!******************************!*\
  !*** ./src/PubSub/PubSub.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PubSub\": () => (/* binding */ PubSub)\n/* harmony export */ });\n/**\r\n * 手写消息订阅与发布（订阅者模式）\r\n * PubSub:包含所有功能的订阅/发布消息的管理者\r\n * PubSub.subscribe(msg,subscriber):订阅消息，指定消息名和订阅者回调函数\r\n * PubSub.publish(msg,data):异步发布消息，指定消息名和数据\r\n * PubSub.publishSync(msg,data):同步发布消息，指定消息名和数据\r\n * PubSub.unsubscribe(flag):取消订阅，根据标识取消某个或某些消息的订阅\r\n */\r\n\r\nconst PubSub = {\r\n    //订阅唯一id\r\n    id:1,\r\n    //频道与回调保存容器\r\n    callbacks:{}\r\n}\r\n\r\n//订阅频道\r\nPubSub.subscribe = function(channel,callback){\r\n    //创建唯一的编号\r\n    let token = 'token_' + this.id++\r\n    //pay token_1\r\n    //判断callbacks属性中是否存在pay\r\n    if(this.callbacks[channel]){\r\n        this.callbacks[channel][token] = callback\r\n    }else{\r\n        this.callbacks[channel] = {\r\n            [token]:callback\r\n        }\r\n    }\r\n\r\n    //返回频道订阅的id\r\n    return token\r\n}\r\n\r\n//发布消息\r\nPubSub.publish = function(channel,data){\r\n    //获取当前频道中所有的回调\r\n    if(this.callbacks[channel]){\r\n        Object.values(this.callbacks[channel]).forEach(callback => {\r\n            //执行回调\r\n            callback(data)\r\n        })\r\n    }\r\n}\r\n\r\n//取消订阅\r\n/**\r\n * 1)没有传值，flag为undefined\r\n * 2)传入token字符串\r\n * 3)msgName字符串\r\n */\r\n\r\nPubSub.unsubscribe = function (flag){\r\n    //如果flag为undefined，清空所有订阅\r\n    if(flag === undefined){\r\n        this.callbacks = {}\r\n    }else if(typeof flag === 'string'){\r\n        //判断是否为token_开头\r\n        if(flag.indexOf('token_') === 0){\r\n            //表明是一个订阅id\r\n            let callbackObj = Object.values(this.callbacks).find(obj => obj.hasOwnProperty(flag))\r\n            if(callbackObj){\r\n                delete callbackObj[flag]\r\n            }\r\n        }else{\r\n            //表明是一个频道的名称\r\n            delete this.callbacks[flag]\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://Mutils/./src/PubSub/PubSub.js?");

/***/ }),

/***/ "./src/array/chunk.js":
/*!****************************!*\
  !*** ./src/array/chunk.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chunk\": () => (/* binding */ chunk)\n/* harmony export */ });\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Number} size \r\n * 功能：将数组拆分成多个size长度的区块，每个区块组成小数组，整体组成一个二维数组\r\n */\r\n\r\nfunction chunk(arr,size = 1){\r\n    //判断\r\n    if(arr.length === 0){\r\n        return []\r\n    }\r\n    \r\n    //声明两个数组\r\n    let result = []\r\n    let tmp = []\r\n\r\n    //遍历\r\n    arr.forEach(item => {\r\n        //判断tmp元素的长度是否为0\r\n        if(tmp.length === 0){\r\n            //将tmp压入到result中\r\n            result.push(tmp)\r\n        }\r\n\r\n        //将元素压入到临时数组tmp中\r\n        tmp.push(item)\r\n\r\n        //判断\r\n        if(tmp.length === size){\r\n            tmp = []\r\n        }\r\n    })\r\n\r\n    //返回结果\r\n    return result\r\n}\n\n//# sourceURL=webpack://Mutils/./src/array/chunk.js?");

/***/ }),

/***/ "./src/array/concat.js":
/*!*****************************!*\
  !*** ./src/array/concat.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"concat\": () => (/* binding */ concat)\n/* harmony export */ });\n/**\r\n * \r\n * @param {Array} arr \r\n * @param  {...any} args \r\n * 语法：var new_array = concat(old_array,value1[,value2,[,...[,valueN]]])\r\n * 功能：将n个数组或值与当前数组合并生成一个新数组\r\n */\r\n\r\nfunction concat(arr,...args){\r\n    //声明一个数组\r\n    let result = [...arr]\r\n    //遍历数组\r\n    args.forEach(item => {\r\n        //判断item是否为数组\r\n        if(Array.isArray(item)){\r\n            result.push(...item)\r\n        }else{\r\n            result.push(item)\r\n        }\r\n    })\r\n\r\n    //返回结果\r\n    return result\r\n}\n\n//# sourceURL=webpack://Mutils/./src/array/concat.js?");

/***/ }),

/***/ "./src/array/difference.js":
/*!*********************************!*\
  !*** ./src/array/difference.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"difference\": () => (/* binding */ difference)\n/* harmony export */ });\n/**\r\n * \r\n * @param {Array} arr1 \r\n * @param {Array} arr2 \r\n * 功能：得到当前数组中所有不在arr中的元素组成的元素（不改变原数组）\r\n * 例子：difference([1,3,5,7],[5,8]) => [1,3,7]\r\n */\r\n\r\nfunction difference(arr1,arr2 = []){\r\n    //判断参数\r\n    if(arr1.length === 0){\r\n        return []\r\n    }\r\n\r\n    if(arr2.length === 0){\r\n        return arr1.slice()\r\n    }\r\n\r\n    const result = arr1.filter(item => !arr2.includes(item))\r\n    //返回结果\r\n    return result\r\n}\n\n//# sourceURL=webpack://Mutils/./src/array/difference.js?");

/***/ }),

/***/ "./src/array/drop.js":
/*!***************************!*\
  !*** ./src/array/drop.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dropLeft\": () => (/* binding */ dropLeft),\n/* harmony export */   \"dropRight\": () => (/* binding */ dropRight)\n/* harmony export */ });\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Number} count \r\n * 功能：得到当前数组过滤掉左边count个后剩余元素组成的数组\r\n * 说明：不改变当前数组，count默认是1\r\n * 如：drop([1,3,5,7],2) => [5,7]\r\n */\r\n\r\nfunction dropLeft(arr,count){\r\n    return arr.filter((value,index) => index >= count)\r\n}\r\n\r\n\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Number} count \r\n * 功能：得到当前数组过滤掉右边count个后剩余元素组成的数组\r\n * 说明：不改变当前数组，count默认是1\r\n * 如：drop([1,3,5,7],2) => [1,3]\r\n */\r\n\r\nfunction dropRight(arr,count){\r\n    return arr.filter((value,index) => index < arr.length - count)\r\n}\n\n//# sourceURL=webpack://Mutils/./src/array/drop.js?");

/***/ }),

/***/ "./src/array/every.js":
/*!****************************!*\
  !*** ./src/array/every.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"every\": () => (/* binding */ every)\n/* harmony export */ });\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Function} callback \r\n * 功能：如果数组中的每个元素都满足测试函数，则返回true，否则返回false\r\n */\r\n\r\nfunction every(arr,callback){\r\n    //遍历数组\r\n    for(let i=0;i<arr.length;i++){\r\n        //执行回调 如果回调执行返回结果为false\r\n        if(!callback(arr[i],i)){\r\n            return false\r\n        }\r\n    }\r\n\r\n    //如果都满足条件 则返回true\r\n    return true\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/array/every.js?");

/***/ }),

/***/ "./src/array/filter.js":
/*!*****************************!*\
  !*** ./src/array/filter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filter\": () => (/* binding */ filter)\n/* harmony export */ });\n/**\r\n * \r\n * @param {Array} arr 数组\r\n * @param {Function} callback 回调函数\r\n * 功能：将所有在过滤函数中返回true的数组元素放进一个新数组中并返回。\r\n */\r\n\r\nfunction filter(arr,callback){\r\n    //声明空数组\r\n    let result = []\r\n\r\n    //遍历数组\r\n    for(let i=0;i<arr.length;i++){\r\n        //执行回调\r\n        let res = callback(arr[i],i)\r\n        //判断 如果为真，则压入到result结果中\r\n        if(res){\r\n            result.push(arr[i])\r\n        }\r\n    }\r\n\r\n    //返回结果\r\n    return result\r\n}\n\n//# sourceURL=webpack://Mutils/./src/array/filter.js?");

/***/ }),

/***/ "./src/array/find.js":
/*!***************************!*\
  !*** ./src/array/find.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"find\": () => (/* binding */ find)\n/* harmony export */ });\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Function} callback \r\n * 功能：找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回undefined。\r\n */\r\n\r\nfunction find(arr,callback){\r\n    //遍历数组\r\n    for(let i=0;i<arr.length;i++){\r\n        //执行回调\r\n        let res = callback(arr[i],i)\r\n        //判断\r\n        if(res){\r\n            //返回当前正在遍历的元素\r\n            return arr[i]\r\n        }\r\n    }\r\n\r\n    //如果没有遇到满足条件的，返回undefined\r\n    return undefined\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/array/find.js?");

/***/ }),

/***/ "./src/array/findIndex.js":
/*!********************************!*\
  !*** ./src/array/findIndex.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findIndex\": () => (/* binding */ findIndex)\n/* harmony export */ });\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Function} callback \r\n * 功能：找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回-1。\r\n */\r\n\r\nfunction findIndex(arr,callback) {\r\n    //遍历数组\r\n    for (let i = 0; i < arr.length; i++) {\r\n        //执行回调\r\n        let res = callback(arr[i], i)\r\n        //判断\r\n        if (res) {\r\n            //返回当前正在遍历的元素的索引\r\n            return i\r\n        }\r\n    }\r\n\r\n    //如果没有遇到满足条件的，返回-1\r\n    return -1\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/array/findIndex.js?");

/***/ }),

/***/ "./src/array/flatten.js":
/*!******************************!*\
  !*** ./src/array/flatten.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"flatten1\": () => (/* binding */ flatten1),\n/* harmony export */   \"flatten2\": () => (/* binding */ flatten2)\n/* harmony export */ });\n/**\r\n * \r\n * @param {Array} arr \r\n * 语法：flatten(array)\r\n * 功能：取出嵌套数组（多维）中的所有元素放到一个新数组（一维）中 \r\n * 方法1：使用递归\r\n */\r\n\r\nfunction flatten1(arr){\r\n    //声明结果数组\r\n    let result = []\r\n    //遍历数组\r\n    arr.forEach(item => {\r\n        //判断\r\n        if(Array.isArray(item)){\r\n            result = result.concat(flatten1(item))\r\n        }else{\r\n            result = result.concat(item)\r\n        }\r\n    })\r\n\r\n    //返回结果\r\n    return result\r\n}\r\n\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n * 语法：flatten(array)\r\n * 功能：取出嵌套数组（多维）中的所有元素放到一个新数组（一维）中 \r\n * 方法2：使用some()和concat()\r\n */\r\n\r\nfunction flatten2(arr){\r\n    //声明结果数组\r\n    let result = [...arr]\r\n    //循环判断\r\n    /**\r\n     * [1,2,[3,4,[5,6],7]] -> [1,2,3,4,[5,6],7] -> [1,2,3,4,5,6,7]\r\n     */\r\n    while(result.some(item => Array.isArray(item))){\r\n        result = [].concat(...result)\r\n    }\r\n\r\n    //返回结果\r\n    return result\r\n}\n\n//# sourceURL=webpack://Mutils/./src/array/flatten.js?");

/***/ }),

/***/ "./src/array/map.js":
/*!**************************!*\
  !*** ./src/array/map.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => (/* binding */ map)\n/* harmony export */ });\n/**\r\n * \r\n * @param {*} arr  数组\r\n * @param {*} callback  回调函数\r\n * 功能：创建一个新数组，其结果是该数组中每个元素是调用一次提供的函数后的返回值。\r\n */\r\n\r\nfunction map(arr,callback){\r\n    //声明一个空的数组\r\n    let result = []\r\n    //遍历数组\r\n    for(let i=0;i<arr.length;i++){\r\n        //执行回调\r\n        result.push(callback(arr[i],i))\r\n    }\r\n    //返回结果\r\n    return result\r\n}\n\n//# sourceURL=webpack://Mutils/./src/array/map.js?");

/***/ }),

/***/ "./src/array/pull.js":
/*!***************************!*\
  !*** ./src/array/pull.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pull\": () => (/* binding */ pull),\n/* harmony export */   \"pullAll\": () => (/* binding */ pullAll)\n/* harmony export */ });\n/**\r\n * \r\n * @param {Array} arr \r\n * @param  {...any} values    \r\n * 功能：删除原数组中与value相同的元素，返回所有删除元素的数组\r\n * 说明：原数组发生了改变\r\n * 如：pull([1,3,5,3,7],2,7,3,7) => 原数组变为[1,5]，返回值为[3,3,7]\r\n */\r\n\r\nfunction pull(arr,...values){\r\n    //声明数组，保存删掉的元素\r\n    const result = []\r\n    //遍历\r\n    for(let i=0;i<arr.length;i++){\r\n        //判断当前元素是否存在于values数组中\r\n        if(values.includes(arr[i])){\r\n            //将当前元素的值存入到result中\r\n            result.push(arr[i])\r\n            //删除当前元素\r\n            arr.splice(i,1)\r\n            //下标自减\r\n            i--\r\n        }\r\n    }\r\n\r\n    //返回结果\r\n    return result\r\n}\r\n\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Array} values \r\n * 功能：功能与pull一致，只是参数变为数组\r\n * 说明：原数组发生了改变\r\n * 如：pullAll([1,3,5,3,7],[2,7,3,7]) => 原始数组变为[1,5]，返回值为[3,3,7]\r\n */\r\nfunction pullAll(arr,values){\r\n    return pull(arr,...values)\r\n}\n\n//# sourceURL=webpack://Mutils/./src/array/pull.js?");

/***/ }),

/***/ "./src/array/reduce.js":
/*!*****************************!*\
  !*** ./src/array/reduce.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reduce\": () => (/* binding */ reduce)\n/* harmony export */ });\n/**\r\n * \r\n * @param {*} arr 数组\r\n * @param {*} callback 回调函数\r\n * @param {*} initValue 初始值\r\n * 功能：从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。\r\n */\r\n\r\nfunction reduce(arr,callback,initValue){\r\n    //声明结果变量\r\n    let result = initValue\r\n    \r\n    for(let i=0;i<arr.length;i++){\r\n        //执行回调\r\n        result = callback(result,arr[i])\r\n    }\r\n\r\n    //返回最终的结果\r\n    return result\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/array/reduce.js?");

/***/ }),

/***/ "./src/array/slice.js":
/*!****************************!*\
  !*** ./src/array/slice.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slice\": () => (/* binding */ slice)\n/* harmony export */ });\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Number} begin \r\n * @param {Number} end \r\n * 语法：var new_array = slice(oldArray,[begin[,end]])\r\n * 功能：返回一个由begin和end决定的原数组的浅拷贝，原始数组不会被改变\r\n */\r\n\r\nfunction slice(arr,begin,end){\r\n    //若arr数组长度为0\r\n    if(arr.length === 0){\r\n        return []\r\n    }\r\n\r\n    //判断begin\r\n    begin = begin || 0\r\n    if(begin >= arr.length){\r\n        return []\r\n    }\r\n\r\n    //判断end\r\n    end = end || arr.length\r\n    if(end < begin){\r\n        end = arr.length\r\n    }\r\n\r\n    //声明一个数组\r\n    let result = []\r\n    //遍历对象\r\n    for(let i=0;i<arr.length;i++){\r\n        if(i >= begin && i < end){\r\n            //将下标对应的元素压入数组\r\n            result.push(arr[i])\r\n        }\r\n    }\r\n\r\n    //返回结果\r\n    return result\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/array/slice.js?");

/***/ }),

/***/ "./src/array/some.js":
/*!***************************!*\
  !*** ./src/array/some.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"some\": () => (/* binding */ some)\n/* harmony export */ });\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Function} callback \r\n * 功能：如果数组中的至少有一个元素满足测试函数，则返回true，否则返回false\r\n */\r\n\r\nfunction some(arr, callback) {\r\n    //遍历数组\r\n    for (let i = 0; i < arr.length; i++) {\r\n        //执行回调 如果回调执行返回结果为true\r\n        if (callback(arr[i], i)) {\r\n            return true\r\n        }\r\n    }\r\n\r\n    //如果都不满足条件 则返回false\r\n    return false\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/array/some.js?");

/***/ }),

/***/ "./src/array/unique.js":
/*!*****************************!*\
  !*** ./src/array/unique.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"unique\": () => (/* binding */ unique)\n/* harmony export */ });\n/**\r\n * \r\n * @param {Array} arr \r\n * 方法1：利用forEach()和indexOf()，本质是双重遍历，效率差些\r\n */\r\n\r\nfunction unique(arr){\r\n    //声明一个空数组\r\n    let result = []\r\n    //遍历原始数组\r\n    arr.forEach(item => {\r\n        //检测result数组中是否包含这个元素\r\n        if(result.indexOf(item) === -1){\r\n            //若没有该元素，则插入到result中\r\n            result.push(item)\r\n        }\r\n    })\r\n\r\n    //返回结果数组\r\n    return result\r\n}\r\n\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n * 方法2：利用forEach和对象容器，只需一重遍历，效率高些\r\n */\r\nfunction unique2(arr){\r\n    //声明一个空数组\r\n    const result = []\r\n    //声明空对象\r\n    const obj = {}\r\n    //遍历数组\r\n    arr.forEach(item => {\r\n        if(obj[item] === undefined){\r\n            //将item作为下标存储在obj中（因为item是一个变量，所以不能使用.运算符）\r\n            obj[item] = true\r\n            result.push(item)\r\n        }\r\n    })\r\n\r\n    //返回结果\r\n    return result\r\n\r\n}\r\n\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n * 方法3：利用ES6语法：from + set或者... + set，编码简洁\r\n */\r\nfunction unique3(arr){\r\n    // //将数组转化为集合Set\r\n    // let set = new Set(arr)\r\n    // //将set展开创建一个数组\r\n    // let result = [...set]\r\n    // //返回结果\r\n    // return result\r\n    return [...new Set(arr)]\r\n}\n\n//# sourceURL=webpack://Mutils/./src/array/unique.js?");

/***/ }),

/***/ "./src/axios/axios.js":
/*!****************************!*\
  !*** ./src/axios/axios.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"axios\": () => (/* binding */ axios)\n/* harmony export */ });\n/**\r\n * \r\n * @param {*} param0 \r\n */\r\n\r\nfunction axios({method,url,params,data}){\r\n    //方法转成大写\r\n    method = method.toUpperCase()\r\n    //返回值\r\n    return new Promise((resolve,reject) => {\r\n        //四步骤\r\n        //1.创建对象\r\n        const xhr = new XMLHttpRequest()\r\n\r\n        //2.初始化\r\n        //处理params对象 a=100&b=200\r\n        let str = ''\r\n        for(let k in params){\r\n            str += `${k}=${params[k]}&`\r\n        }\r\n        str = str.slice(0,-1) //去掉最后的&\r\n        xhr.open(method,url + '?' + str)\r\n\r\n        //3.发送\r\n        if(method === 'POST' || method === 'PUT' || method === 'DELETE'){\r\n            //Content-type mime类型设置\r\n            xhr.setRequestHeader('Content-type','application/json')\r\n            //设置请求体\r\n            xhr.send(JSON.stringify(data))\r\n        }else{\r\n            xhr.send()\r\n        }\r\n       \r\n        //设置响应结果的类型为JSON\r\n        xhr.responseType = 'json'\r\n        //4.处理结果\r\n        xhr.onreadystatechange  = function(){\r\n            if(xhr.readyState === 4){\r\n                //判断响应状态码 2xx\r\n                if(xhr.status >= 200 && xhr.status < 300){\r\n                    //成功的状态\r\n                    resolve({\r\n                        status:xhr.status,\r\n                        message:xhr.statusText,\r\n                        body:xhr.response\r\n                    })\r\n                }else{\r\n                    //失败的状态\r\n                    reject(new Error('请求失败，失败的状态码为' + xhr.status))\r\n                }\r\n            }\r\n        }\r\n    })\r\n}\r\n\r\naxios.get = function(url,options){\r\n    //发送AJAX请求 GET\r\n    let config = Object.assign(options,{method:'GET',url:url})\r\n    return axios(config)\r\n}\r\n\r\naxios.post = function(url,options){\r\n    //发送AJAX请求 POST\r\n    let config = Object.assign(options,{method:'POST',url:url})\r\n    return axios(config)\r\n}\r\n\r\naxios.put = function(url,options){\r\n    //发送AJAX请求 PUT\r\n    let config = Object.assign(options,{method:'PUT',url:url})\r\n    return axios(config)\r\n}\r\n\r\naxios.delete = function(url,options){\r\n    //发送AJAX请求 DELETE\r\n    let config = Object.assign(options,{method:'DELETE',url:url})\r\n    return axios(config)\r\n}\n\n//# sourceURL=webpack://Mutils/./src/axios/axios.js?");

/***/ }),

/***/ "./src/eventBind/addEventListener.js":
/*!*******************************************!*\
  !*** ./src/eventBind/addEventListener.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEventListener\": () => (/* binding */ addEventListener)\n/* harmony export */ });\n/**\r\n * 事件委托/代理\r\n * 将多个子元素的同类事件监听委托给（绑定在）共同的一个父组件上\r\n * 好处：\r\n * 减少内存占用；动态添加的内部元素也能响应\r\n */\r\n\r\n\r\n/**\r\n * \r\n * @param {String} el 元素\r\n * @param {String} type 事件类型\r\n * @param {Function} fn 事件函数\r\n * @param {String} selector 子元素的选择器\r\n */\r\nfunction addEventListener(el,type,fn,selector){\r\n    //判断el的类型\r\n    if(typeof el === 'string'){\r\n        el = document.querySelector(el)\r\n    }\r\n\r\n    //事件绑定\r\n    //若没有传递子元素的选择器，则给el元素绑定事件\r\n    if(!selector){\r\n        el.addEventListener(type,fn)\r\n    }else{\r\n        el.addEventListener(type,function(e){\r\n            //获取点击的目标事件源\r\n            const target = e.target\r\n            //判断选择器与目标元素是否相符合\r\n            if(target.matches(selector)){\r\n                //若符合，则调用回调\r\n                fn.call(target,e)\r\n            }\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://Mutils/./src/eventBind/addEventListener.js?");

/***/ }),

/***/ "./src/eventBus/eventBus.js":
/*!**********************************!*\
  !*** ./src/eventBus/eventBus.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventBus\": () => (/* binding */ eventBus)\n/* harmony export */ });\n/**\r\n * 手写事件总线\r\n * eventBus:包含所有功能的事件总线对象\r\n * eventBus.on(eventName,listener):绑定事件监听\r\n * eventBus.emit(eventName,data):分支事件\r\n * eventBus.off(eventName):解绑指定事件名的事件监听，如果没有指定解绑所有\r\n */\r\n\r\nconst eventBus = {\r\n    //保存类型与回调的容器\r\n    callbacks:{}\r\n}\r\n\r\n//绑定事件\r\neventBus.on = function(type,callback){\r\n    //判断\r\n    if(this.callbacks[type]){\r\n        //如果callbacks属性中存在该类型事件\r\n        this.callbacks[type].push(callback)\r\n    }else{\r\n        //如果callbacks属性中不存在该类型事件\r\n        this.callbacks[type] = [callback]\r\n    }\r\n}\r\n\r\n//触发事件\r\neventBus.emit = function(type,data){\r\n    //判断\r\n    if(this.callbacks[type] && this.callbacks[type].length > 0){\r\n        //遍历数组\r\n        this.callbacks[type].forEach(callback => {\r\n            //执行回调\r\n            callback(data)\r\n        })\r\n    }\r\n}\r\n\r\n//事件的解绑\r\neventBus.off = function(eventName){\r\n    //若传入了eventName事件类型\r\n    if(eventName){\r\n        //只是删除eventName对应的事件回调\r\n        delete this.callbacks[eventName]\r\n    }else{ //若没传，则全部删除\r\n        this.callbacks = {}\r\n    }\r\n}\n\n//# sourceURL=webpack://Mutils/./src/eventBus/eventBus.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apply\": () => (/* binding */ apply)\n/* harmony export */ });\n/**\r\n * \r\n * @param {*} Fn \r\n * @param {*} obj \r\n * @param {*} args \r\n * 功能：执行Fn，使this为obj，并将args数组中的元素传给Fn（功能等同于函数对象的apply方法）\r\n */\r\n\r\nfunction apply(Fn,obj,args){\r\n    //判断\r\n    if(obj === undefined || obj === null){\r\n        obj = globalThis //全局对象\r\n    }\r\n    //为obj添加临时的方法\r\n    obj.temp = Fn\r\n    //执行方法\r\n    let result = obj.temp(...args)\r\n    //删除临时方法\r\n    delete obj.temp\r\n    //返回结果\r\n    return result \r\n}\n\n//# sourceURL=webpack://Mutils/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bind\": () => (/* binding */ bind)\n/* harmony export */ });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n/**\r\n * \r\n * @param {*} Fn \r\n * @param {*} obj \r\n * @param  {...any} args \r\n * 功能：给Fn绑定this为obj，并指定参数为后面的n个参数（功能等同于函数对象的bind方法）\r\n */\r\n\r\nfunction bind(Fn,obj,...args){\r\n    //返回一个新的函数\r\n    return function(...args2){\r\n        //执行call()\r\n        return (0,_call__WEBPACK_IMPORTED_MODULE_0__.call)(Fn,obj,...args,...args2)\r\n    }\r\n}\n\n//# sourceURL=webpack://Mutils/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => (/* binding */ call)\n/* harmony export */ });\n/**\r\n * \r\n * @param {*} Fn \r\n * @param {*} obj \r\n * @param  {...any} args \r\n * 功能：执行Fn，使this为obj，并将后面的n个参数传给Fn（功能等同于函数对象的call方法）\r\n */\r\n\r\nfunction call(Fn,obj,...args){\r\n    //判断\r\n    if(obj === undefined || obj === null){\r\n        obj = globalThis //全局对象\r\n    }\r\n\r\n    //为obj添加临时的方法\r\n    obj.temp = Fn\r\n    //调用temp方法\r\n    let result = obj.temp(...args)\r\n    //删除temp方法\r\n    delete obj.temp\r\n    //返回执行结果\r\n    return result\r\n}\n\n//# sourceURL=webpack://Mutils/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => (/* binding */ debounce)\n/* harmony export */ });\n/**\r\n * 函数防抖\r\n * @param {*} callback \r\n * @param {*} wait \r\n * 功能：创建一个防抖动函数，该函数会从上一次被调用后，延迟wait毫秒后调用callback\r\n */\r\n\r\nfunction debounce(callback,wait){\r\n    //定时器变量\r\n    let timeId = null\r\n    //返回一个函数\r\n    return function(e){\r\n        //判断\r\n        if(timeId !== null){\r\n            //清空定时器\r\n            clearTimeout(timeId)\r\n        }\r\n\r\n        //启动定时器\r\n        timeId = setTimeout(() => {\r\n            //执行回调\r\n            callback.call(this,e) //this指向事件源\r\n\r\n            //重置定时器变量\r\n            timeId = null\r\n        }, wait)\r\n    }\r\n}\n\n//# sourceURL=webpack://Mutils/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throttle\": () => (/* binding */ throttle)\n/* harmony export */ });\n/**\r\n * 函数节流\r\n * @param {*} callback \r\n * @param {*} wait \r\n * 功能：创建一个节流函数，在wait毫秒内最多执行‘callback’一次\r\n */\r\n\r\nfunction throttle(callback,wait){\r\n    //定义开始时间\r\n    let start = 0\r\n    //返回一个事件监听函数（也就是节流函数）\r\n    return function(e){\r\n        //获取当前时间戳\r\n        let now = Date.now()\r\n        //判断\r\n        if(now - start >= wait){\r\n            //若满足条件，则执行回调函数(this的指向:指向事件源)\r\n            callback.call(this,e)\r\n            //修改开始时间\r\n            start = now\r\n        }\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://Mutils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chunk\": () => (/* reexport safe */ _array_chunk__WEBPACK_IMPORTED_MODULE_0__.chunk),\n/* harmony export */   \"concat\": () => (/* reexport safe */ _array_concat__WEBPACK_IMPORTED_MODULE_1__.concat),\n/* harmony export */   \"difference\": () => (/* reexport safe */ _array_difference__WEBPACK_IMPORTED_MODULE_2__.difference),\n/* harmony export */   \"dropLeft\": () => (/* reexport safe */ _array_drop__WEBPACK_IMPORTED_MODULE_3__.dropLeft),\n/* harmony export */   \"dropRight\": () => (/* reexport safe */ _array_drop__WEBPACK_IMPORTED_MODULE_3__.dropRight),\n/* harmony export */   \"every\": () => (/* reexport safe */ _array_every__WEBPACK_IMPORTED_MODULE_4__.every),\n/* harmony export */   \"some\": () => (/* reexport safe */ _array_some__WEBPACK_IMPORTED_MODULE_5__.some),\n/* harmony export */   \"filter\": () => (/* reexport safe */ _array_filter__WEBPACK_IMPORTED_MODULE_6__.filter),\n/* harmony export */   \"find\": () => (/* reexport safe */ _array_find__WEBPACK_IMPORTED_MODULE_7__.find),\n/* harmony export */   \"findIndex\": () => (/* reexport safe */ _array_findIndex__WEBPACK_IMPORTED_MODULE_8__.findIndex),\n/* harmony export */   \"flatten1\": () => (/* reexport safe */ _array_flatten__WEBPACK_IMPORTED_MODULE_9__.flatten1),\n/* harmony export */   \"flatten2\": () => (/* reexport safe */ _array_flatten__WEBPACK_IMPORTED_MODULE_9__.flatten2),\n/* harmony export */   \"map\": () => (/* reexport safe */ _array_map__WEBPACK_IMPORTED_MODULE_10__.map),\n/* harmony export */   \"pull\": () => (/* reexport safe */ _array_pull__WEBPACK_IMPORTED_MODULE_11__.pull),\n/* harmony export */   \"pullAll\": () => (/* reexport safe */ _array_pull__WEBPACK_IMPORTED_MODULE_11__.pullAll),\n/* harmony export */   \"reduce\": () => (/* reexport safe */ _array_reduce__WEBPACK_IMPORTED_MODULE_12__.reduce),\n/* harmony export */   \"slice\": () => (/* reexport safe */ _array_slice__WEBPACK_IMPORTED_MODULE_13__.slice),\n/* harmony export */   \"unique\": () => (/* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_14__.unique),\n/* harmony export */   \"axios\": () => (/* reexport safe */ _axios_axios__WEBPACK_IMPORTED_MODULE_15__.axios),\n/* harmony export */   \"addEventListener\": () => (/* reexport safe */ _eventBind_addEventListener__WEBPACK_IMPORTED_MODULE_16__.addEventListener),\n/* harmony export */   \"eventBus\": () => (/* reexport safe */ _eventBus_eventBus__WEBPACK_IMPORTED_MODULE_17__.eventBus),\n/* harmony export */   \"apply\": () => (/* reexport safe */ _function_apply__WEBPACK_IMPORTED_MODULE_18__.apply),\n/* harmony export */   \"bind\": () => (/* reexport safe */ _function_bind__WEBPACK_IMPORTED_MODULE_19__.bind),\n/* harmony export */   \"call\": () => (/* reexport safe */ _function_call__WEBPACK_IMPORTED_MODULE_20__.call),\n/* harmony export */   \"debounce\": () => (/* reexport safe */ _function_debounce__WEBPACK_IMPORTED_MODULE_21__.debounce),\n/* harmony export */   \"throttle\": () => (/* reexport safe */ _function_throttle__WEBPACK_IMPORTED_MODULE_22__.throttle),\n/* harmony export */   \"clone1\": () => (/* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_23__.clone1),\n/* harmony export */   \"clone2\": () => (/* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_23__.clone2),\n/* harmony export */   \"deepClone1\": () => (/* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_23__.deepClone1),\n/* harmony export */   \"deepClone2\": () => (/* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_23__.deepClone2),\n/* harmony export */   \"deepClone3\": () => (/* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_23__.deepClone3),\n/* harmony export */   \"deepClone4\": () => (/* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_23__.deepClone4),\n/* harmony export */   \"mergeObject\": () => (/* reexport safe */ _object_mergeObject__WEBPACK_IMPORTED_MODULE_24__.mergeObject),\n/* harmony export */   \"myInstanceOf\": () => (/* reexport safe */ _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_25__.myInstanceOf),\n/* harmony export */   \"newInstance\": () => (/* reexport safe */ _object_newInstance__WEBPACK_IMPORTED_MODULE_26__.newInstance),\n/* harmony export */   \"PubSub\": () => (/* reexport safe */ _PubSub_PubSub__WEBPACK_IMPORTED_MODULE_27__.PubSub),\n/* harmony export */   \"palindrome\": () => (/* reexport safe */ _string_palindrome__WEBPACK_IMPORTED_MODULE_28__.palindrome),\n/* harmony export */   \"reverseString\": () => (/* reexport safe */ _string_reverseString__WEBPACK_IMPORTED_MODULE_29__.reverseString),\n/* harmony export */   \"truncate\": () => (/* reexport safe */ _string_truncate__WEBPACK_IMPORTED_MODULE_30__.truncate)\n/* harmony export */ });\n/* harmony import */ var _array_chunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array/chunk */ \"./src/array/chunk.js\");\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.js\");\n/* harmony import */ var _array_difference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array/difference */ \"./src/array/difference.js\");\n/* harmony import */ var _array_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array/drop */ \"./src/array/drop.js\");\n/* harmony import */ var _array_every__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array/every */ \"./src/array/every.js\");\n/* harmony import */ var _array_some__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/some */ \"./src/array/some.js\");\n/* harmony import */ var _array_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/filter */ \"./src/array/filter.js\");\n/* harmony import */ var _array_find__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/find */ \"./src/array/find.js\");\n/* harmony import */ var _array_findIndex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/findIndex */ \"./src/array/findIndex.js\");\n/* harmony import */ var _array_flatten__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./array/flatten */ \"./src/array/flatten.js\");\n/* harmony import */ var _array_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./array/map */ \"./src/array/map.js\");\n/* harmony import */ var _array_pull__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./array/pull */ \"./src/array/pull.js\");\n/* harmony import */ var _array_reduce__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array/reduce */ \"./src/array/reduce.js\");\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.js\");\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony import */ var _axios_axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./axios/axios */ \"./src/axios/axios.js\");\n/* harmony import */ var _eventBind_addEventListener__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./eventBind/addEventListener */ \"./src/eventBind/addEventListener.js\");\n/* harmony import */ var _eventBus_eventBus__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./eventBus/eventBus */ \"./src/eventBus/eventBus.js\");\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony import */ var _object_clone__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./object/clone */ \"./src/object/clone.js\");\n/* harmony import */ var _object_mergeObject__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./object/mergeObject */ \"./src/object/mergeObject.js\");\n/* harmony import */ var _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./object/myInstanceOf */ \"./src/object/myInstanceOf.js\");\n/* harmony import */ var _object_newInstance__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./object/newInstance */ \"./src/object/newInstance.js\");\n/* harmony import */ var _PubSub_PubSub__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./PubSub/PubSub */ \"./src/PubSub/PubSub.js\");\n/* harmony import */ var _string_palindrome__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./string/palindrome */ \"./src/string/palindrome.js\");\n/* harmony import */ var _string_reverseString__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./string/reverseString */ \"./src/string/reverseString.js\");\n/* harmony import */ var _string_truncate__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./string/truncate */ \"./src/string/truncate.js\");\n//引入其他文件，然后再暴露\r\n// //1.目标文件中暴露数据  export 数据\r\n// import { chunk } from \"./array/chunk\"\r\n// //2.暴露数据\r\n// export { chunk }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://Mutils/./src/index.js?");

/***/ }),

/***/ "./src/object/clone.js":
/*!*****************************!*\
  !*** ./src/object/clone.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clone1\": () => (/* binding */ clone1),\n/* harmony export */   \"clone2\": () => (/* binding */ clone2),\n/* harmony export */   \"deepClone1\": () => (/* binding */ deepClone1),\n/* harmony export */   \"deepClone2\": () => (/* binding */ deepClone2),\n/* harmony export */   \"deepClone3\": () => (/* binding */ deepClone3),\n/* harmony export */   \"deepClone4\": () => (/* binding */ deepClone4)\n/* harmony export */ });\n/**\r\n * 区别深拷贝和浅拷贝：\r\n * 浅拷贝：只是复制了对象属性或数组元素本身（只是引用地址值）\r\n * 深拷贝：不仅复制了对象属性或数组元素本身，还复制了指向的对象（使用递归）\r\n */\r\n\r\n\r\n/**\r\n * 实现浅拷贝\r\n */\r\n\r\n/**\r\n *方法1：利用ES6语法：扩展运算符\r\n */\r\nfunction clone1(target) {\r\n    //类型判断 {} []\r\n    if (typeof target === 'object' && target !== null) {\r\n        //判断数据是否为数组\r\n        if (Array.isArray(target)) {\r\n            return [...target]\r\n        } else {\r\n            return { ...target }\r\n        }\r\n    } else {\r\n        return target\r\n    }\r\n}\r\n\r\n\r\n/**\r\n *方法2：利用ES5语法：for ... in\r\n */\r\nfunction clone2(target) {\r\n    //类型判断 {} []\r\n    if (typeof target === 'object' && target !== null) {\r\n        //创建一个容器\r\n        const result = Array.isArray(target) ? [] : {}\r\n\r\n        //遍历target数据\r\n        for (let key in target) {\r\n            //判断当前对象身上是否包含该属性\r\n            if (target.hasOwnProperty(key)) {\r\n                //将属性设置到result结果数据中\r\n                result[key] = target[key]\r\n            }\r\n        }\r\n\r\n        return result\r\n    } else {\r\n        return target\r\n    }\r\n}\r\n\r\n\r\n/**\r\n * 实现深拷贝\r\n */\r\n\r\n\r\n/**\r\n * 实现1：大众乞丐版\r\n * 问题1：函数属性会丢失\r\n * 问题2：循环引用会出错\r\n */\r\nfunction deepClone1(target) {\r\n    //通过数据创建JSON格式的字符串\r\n    let str = JSON.stringify(target)\r\n    //将JSON字符串创建为JS数据\r\n    let data = JSON.parse(str)\r\n\r\n    //返回结果\r\n    return data\r\n}\r\n\r\n/**\r\n * 实现2：面试基础版本\r\n * 解决问题1：函数属性还没丢失\r\n */\r\nfunction deepClone2(target) {\r\n    //类型判断 {} []\r\n    if (typeof target === 'object' && target !== null) {\r\n        //创建一个容器\r\n        const result = Array.isArray(target) ? [] : {}\r\n\r\n        //遍历target数据\r\n        for (let key in target) {\r\n            //判断当前对象身上是否包含该属性\r\n            if (target.hasOwnProperty(key)) {\r\n                //将属性设置到result结果数据中\r\n                result[key] = deepClone2(target[key])\r\n            }\r\n        }\r\n\r\n        return result\r\n    } else {\r\n        return target\r\n    }\r\n}\r\n\r\n/**\r\n * 实现3：面试加强版本\r\n * 解决问题2：循环引用正常\r\n */\r\nfunction deepClone3(target, map = new Map()) {\r\n    //类型判断 {} []\r\n    if (typeof target === 'object' && target !== null) {\r\n        //克隆数据之前，先判断：数据之前是否克隆过\r\n        let cache = map.get(target)\r\n        if (cache) {\r\n            return cache\r\n        }\r\n\r\n        //创建一个容器\r\n        const result = Array.isArray(target) ? [] : {}\r\n        //将新的结果存入到容器中\r\n        map.set(target,result)\r\n\r\n        //遍历target数据\r\n        for (let key in target) {\r\n            //判断当前对象身上是否包含该属性（不能拷贝原型对象的属性）\r\n            if (target.hasOwnProperty(key)) {\r\n                //拷贝\r\n                result[key] = deepClone3(target[key],map)\r\n            }\r\n        }\r\n\r\n        return result\r\n    } else {\r\n        return target\r\n    }\r\n}\r\n\r\n/**\r\n * 实现4：面试加强版本2（优化遍历性能）\r\n * 数组：while|for|forEach() 优于 for-in|keys()&forEach()\r\n * 对象：for-in 与 keys()&forEach()差不多\r\n */\r\nfunction deepClone4(target, map = new Map()) {\r\n    //类型判断 {} []\r\n    if (typeof target === 'object' && target !== null) {\r\n        //克隆数据之前，先判断：数据之前是否克隆过\r\n        let cache = map.get(target)\r\n        if (cache) {\r\n            return cache\r\n        }\r\n\r\n        //判断目标数据的类型\r\n        let isArray = Array.isArray(target)\r\n        //创建一个容器\r\n        const result = isArray ? [] : {}\r\n        //将新的结果存入到容器中\r\n        map.set(target,result)\r\n\r\n        //遍历对象\r\n        if(isArray){ \r\n            //如果目标数据为数组，使用forEach遍历\r\n            target.forEach((item,index) => {\r\n                result[index] = deepClone4(item,map)\r\n            })\r\n        }else{\r\n            //如果目标数据为对象，获取所有的键名，然后再使用forEach遍历\r\n            Object.keys(target).forEach(key => {\r\n                result[key] = deepClone4(target[key],map)\r\n            })\r\n        }\r\n\r\n        return result\r\n    } else {\r\n        return target\r\n    }\r\n}\n\n//# sourceURL=webpack://Mutils/./src/object/clone.js?");

/***/ }),

/***/ "./src/object/mergeObject.js":
/*!***********************************!*\
  !*** ./src/object/mergeObject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mergeObject\": () => (/* binding */ mergeObject)\n/* harmony export */ });\n/**\r\n * \r\n * @param  {...any} objs \r\n * 功能：合并多个对象，返回一个合并后对象（不改变原对象）\r\n */\r\n\r\nfunction mergeObject(...objs){\r\n    //声明一个对象\r\n    const result = {}\r\n    //遍历所有的参数对象\r\n    objs.forEach(obj => {\r\n        //获取当前对象所有的属性\r\n        Object.keys(obj).forEach(key => {\r\n            //检测result中是否存在key属性\r\n            if(result.hasOwnProperty(key)){\r\n                result[key] = [].concat(result[key],obj[key])\r\n            }else{\r\n                //如果没有，则直接写入\r\n                result[key] = obj[key]\r\n            }    \r\n        })\r\n    })\r\n\r\n    //返回结果\r\n    return result\r\n}\n\n//# sourceURL=webpack://Mutils/./src/object/mergeObject.js?");

/***/ }),

/***/ "./src/object/myInstanceOf.js":
/*!************************************!*\
  !*** ./src/object/myInstanceOf.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myInstanceOf\": () => (/* binding */ myInstanceOf)\n/* harmony export */ });\n/**\r\n * \r\n * @param {Object} obj \r\n * @param {Function} Fn \r\n * 功能：判断obj是否是Fn类型的实例\r\n * 实现：Fn的原型对象是否是obj的原型链上的某个对象，如果是返回true，否则返回false。\r\n */\r\n\r\nfunction myInstanceOf(obj,Fn){\r\n    //获取函数的显式原型\r\n    let prototype = Fn.prototype\r\n    //获取obj的隐式原型对象\r\n    let proto = obj.__proto__\r\n    //遍历原型链\r\n    while(proto){\r\n        //检测原型对象是否相等\r\n        if(prototype === proto){\r\n            return true\r\n        }\r\n\r\n        //如果不相等\r\n        proto = proto.__proto__\r\n    }\r\n}\n\n//# sourceURL=webpack://Mutils/./src/object/myInstanceOf.js?");

/***/ }),

/***/ "./src/object/newInstance.js":
/*!***********************************!*\
  !*** ./src/object/newInstance.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newInstance\": () => (/* binding */ newInstance)\n/* harmony export */ });\n/**\r\n * \r\n * @param {Function} Fn \r\n * @param  {...any} args \r\n * 功能：创建Fn构造函数的实例对象\r\n */\r\n\r\nfunction newInstance(Fn,...args){\r\n    //1.创建一个新对象\r\n    const obj = {}\r\n    //2.修改函数内部this指向新对象并执行\r\n    const result = Fn.call(obj,...args)\r\n    //修改新对象的原型对象\r\n    obj.__proto__ = Fn.prototype\r\n    //3.返回新对象\r\n    return result instanceof Object ? result : obj   \r\n}\n\n//# sourceURL=webpack://Mutils/./src/object/newInstance.js?");

/***/ }),

/***/ "./src/string/palindrome.js":
/*!**********************************!*\
  !*** ./src/string/palindrome.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"palindrome\": () => (/* binding */ palindrome)\n/* harmony export */ });\n/* harmony import */ var _reverseString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reverseString */ \"./src/string/reverseString.js\");\n/**\r\n * \r\n * @param {String} str \r\n * 功能：如果给定的字符串是回文，则返回true，否则返回false\r\n */\r\n\r\n\r\nfunction palindrome(str){\r\n    //借助reverseString()\r\n    return (0,_reverseString__WEBPACK_IMPORTED_MODULE_0__.reverseString)(str) === str\r\n}\n\n//# sourceURL=webpack://Mutils/./src/string/palindrome.js?");

/***/ }),

/***/ "./src/string/reverseString.js":
/*!*************************************!*\
  !*** ./src/string/reverseString.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reverseString\": () => (/* binding */ reverseString)\n/* harmony export */ });\n/**\r\n * \r\n * @param {String} str \r\n * 功能：生成一个倒序的字符串\r\n */\r\n\r\nfunction reverseString(str){\r\n    //将字符串转为数组\r\n    let arr = [...str]\r\n    // let arr = str.split('')\r\n    //反转数组\r\n    arr.reverse() \r\n    //将数组拼接成字符串\r\n    let result = arr.join('')\r\n    //返回结果\r\n    return result\r\n}\n\n//# sourceURL=webpack://Mutils/./src/string/reverseString.js?");

/***/ }),

/***/ "./src/string/truncate.js":
/*!********************************!*\
  !*** ./src/string/truncate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"truncate\": () => (/* binding */ truncate)\n/* harmony export */ });\n/**\r\n * \r\n * @param {String} str \r\n * @param {Number} num\r\n * 功能：如果字符串的长度超过了num，截取前面num长度部分，并以...结束\r\n */\r\n\r\nfunction truncate(str,num){\r\n    return str.slice(0,num) + '...'\r\n}\n\n//# sourceURL=webpack://Mutils/./src/string/truncate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});