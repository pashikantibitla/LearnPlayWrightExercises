/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Transforming arrays with map, filter, reduce, and flat.
 * 
 * Functions/Methods Used:
 *   - Array.prototype.map(callback: (element: any) => any): Array
 *     Description: Creates a new array by applying a callback to every element.
 *     Input: Accepts a callback function that receives each element and returns a transformed value.
 *     Return Type: Array — a new array with transformed elements.
 *   - Array.prototype.filter(callback: (element: any) => boolean): Array
 *     Description: Creates a new array containing only elements that pass the test.
 *     Input: Accepts a callback function that receives each element and returns a boolean to keep or discard it.
 *     Return Type: Array — a new array containing only elements that passed the test.
 *   - Array.prototype.reduce(callback: (accumulator: any, current: any) => any, initialValue: any): any
 *     Description: Reduces the array to a single accumulated value.
 *     Input: Accepts a callback function (accumulator, current value) and an optional initial value as a direct value or variable.
 *     Return Type: any — the single accumulated result after processing all elements.
 *   - Array.prototype.flat(depth?: number): Array
 *     Description: Recursively flattens nested arrays up to the specified depth.
 *     Input: Accepts an optional depth number as a direct value, variable, or expression (default is 1).
 *     Return Type: Array — a new flattened array up to the specified depth.
 *   - console.log(value: any): void
 *     Description: Outputs the provided value to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - Immutable transformations: map and filter return new arrays without
 *     altering the original.
 *   - Conditional mapping: Ternary operators inside map callbacks transform
 *     values based on logic.
 *   - Accumulation: reduce aggregates data (e.g., summing numbers).
 *   - Flattening: flat simplifies nested array structures into a single-level array.
 *   - Arrow functions: Compact callback syntax used across all transformation methods.
 * ============================================================
 */

let scores = [45, 82, 91, 60, 73];

// map - transform every element, return a new arrays
// A map will always return the same number of elements that you have, 
// but based on the condition, their values will be changed. 
let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);


// filter — keeps elements that pass a test
let passing = scores.filter(s => s > 70);
console.log(passing);

// reduce , // reduce — accumulates to a single value
let total = scores.reduce((a, b) => a + b, 0);
console.log(total);

// flat — flattens nested arrays
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());