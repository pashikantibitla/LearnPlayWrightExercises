/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Searching for elements within an array using built-in methods.
 * 
 * Functions/Methods Used:
 *   - Array.prototype.indexOf(searchElement: any, fromIndex?: number): number
 *     Description: Returns the first index of the element, or -1 if not found.
 *     Input: Accepts a search element (any type) and an optional from index (number) as direct values, variables, or expressions.
 *     Return Type: number — the first index of the found element, or -1 if not found.
 *   - Array.prototype.lastIndexOf(searchElement: any, fromIndex?: number): number
 *     Description: Returns the last index of the element, or -1 if not found.
 *     Input: Accepts a search element (any type) and an optional from index (number) as direct values, variables, or expressions.
 *     Return Type: number — the last index of the found element, or -1 if not found.
 *   - Array.prototype.includes(searchElement: any, fromIndex?: number): boolean
 *     Description: Returns true if the element exists in the array, else false.
 *     Input: Accepts a search element (any type) and an optional from index (number) as direct values, variables, or expressions.
 *     Return Type: boolean — true if the element is found, otherwise false.
 *   - Array.prototype.find(predicate: (element: any) => boolean): any
 *     Description: Returns the first element that satisfies the predicate function.
 *     Input: Accepts a predicate callback function that receives an element and returns a boolean.
 *     Return Type: any — the first matching element, or undefined if none is found.
 *   - Array.prototype.findIndex(predicate: (element: any) => boolean): number
 *     Description: Returns the index of the first matching element, or -1.
 *     Input: Accepts a predicate callback function that receives an element and returns a boolean.
 *     Return Type: number — the index of the first matching element, or -1 if none is found.
 *   - Array.prototype.findLast(predicate: (element: any) => boolean): any
 *     Description: Returns the last element that satisfies the predicate function.
 *     Input: Accepts a predicate callback function that receives an element and returns a boolean.
 *     Return Type: any — the last matching element, or undefined if none is found.
 *   - Array.prototype.findLastIndex(predicate: (element: any) => boolean): number
 *     Description: Returns the index of the last matching element, or -1.
 *     Input: Accepts a predicate callback function that receives an element and returns a boolean.
 *     Return Type: number — the index of the last matching element, or -1 if none is found.
 *   - console.log(value: any): void
 *     Description: Outputs the provided value to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - Value-based search: indexOf, lastIndexOf, and includes search by exact value.
 *   - Predicate-based search: find/findIndex use a callback function to test elements.
 *   - Return types: Some methods return an index, some an element, and includes
 *     returns a boolean.
 *   - Arrow functions: Concise syntax used to define search predicates inline.
 * ============================================================
 */

let results = ["pass", "fail", "pass", "error", "fail"];

//// indexOf — returns first index, or -1 if not found
results.indexOf("fail"); //1
results.indexOf("skip");        // -1

// lastIndexOf — searches from the end
results.lastIndexOf("fail");    // 4


// includes — returns boolean
results.includes("error"); // true
results.includes("skip");       // false


// find — returns first matching element
let nums = [10, 25, 30, 45];
let r = nums.find(x => x > 20);
console.log(r);

// findIndex
nums.findIndex(n => n > 20); // 1, 2, 3

nums.findLast(n => n > 20); // 45] 
nums.findLastIndex(n => n > 20);// 3