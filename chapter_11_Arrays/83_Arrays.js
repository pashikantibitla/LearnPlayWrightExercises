/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Array creation, indexing, and accessing elements.
 * 
 * Functions/Methods Used:
 *   - console.log(value: any): void
 *     Description: Outputs the provided value to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Array literals: Created with square brackets [], can be empty or pre-filled.
 *   - Zero-based indexing: First element is at index 0.
 *   - Out-of-bounds access: Accessing an index that does not exist returns undefined.
 *   - Mixed types: JavaScript arrays can hold values of different types
 *     (numbers, strings, booleans, null) in the same array.
 * ============================================================
 */

let fruits = []; // Empty  []
let fruits_fresh = ["apple", "banana", "cheery"];
// length = 3, Index - 0,1,2


let arr = [10, 20, 30, 40]; // 0-3: 4

console.log(arr[0]);
console.log(arr[3])
console.log(arr[4]); // undefined

let testResults = ["pass", "fail", "pass", "skip"];
let mixed = [1, "hello", true, null]; // JS arrays can hold any type.
