/**
 * 
 * @param {String} str 
 * 功能：如果给定的字符串是回文，则返回true，否则返回false
 */

import { reverseString } from "./reverseString";
export function palindrome(str){
    //借助reverseString()
    return reverseString(str) === str
}