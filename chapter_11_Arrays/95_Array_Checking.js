/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Checking array types and validating elements with every and some.
 *
 * Functions/Methods Used:
 *   - Array.isArray(value: any): boolean
 *     Description: Determines whether the passed value is an array.
 *     Input: Accepts any value as a direct value, variable, or expression.
 *     Return Type: boolean — true if the value is an array, otherwise false.
 *   - Array.prototype.every(callback: (element: any) => boolean): boolean
 *     Description: Tests whether all elements in the array pass the provided predicate function.
 *     Input: Accepts a callback function that receives each element and returns a boolean.
 *     Return Type: boolean — true if all elements pass the test, otherwise false.
 *   - Array.prototype.some(callback: (element: any) => boolean): boolean
 *     Description: Tests whether at least one element in the array passes the provided predicate function.
 *     Input: Accepts a callback function that receives each element and returns a boolean.
 *     Return Type: boolean — true if at least one element passes the test, otherwise false.
 *   - console.log(value: any): void
 *     Description: Outputs the provided value to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Type checking: Array.isArray is the reliable way to check if a value is an array.
 *   - Quantifier methods: every requires all elements to pass; some requires at least one.
 *   - Predicate callbacks: Arrow functions define the condition applied to each element.
 * ============================================================
 */

// Checking Arrays

// Check if something IS an array
let result = Array.isArray([1, 2, 3]);
console.log(result);
let result1 = Array.isArray("a"); // []
console.log(result1);

// every & some

[80, 90, 85].every(s => s >= 70); // true
[80, 60, 85].every(s => s >= 70); // false

// Playwright API 
[200, 201, 203].every(statuscode => statuscode > 200);

// some — AT LEAST ONE must pass
[80, 60, 85].some(s => s < 70); // true
[80, 90, 85].some(s => s < 70); // false

//arrow : s => s >= 70