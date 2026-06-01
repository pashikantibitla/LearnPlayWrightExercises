/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Combining arrays and joining elements into strings.
 * 
 * Functions/Methods Used:
 *   - Array.prototype.concat(...arrays: any[]): Array
 *     Description: Merges two or more arrays into a new array without mutating the originals.
 *     Input: Accepts one or more arrays or values as direct values, variables, or expressions.
 *     Return Type: Array — a new array containing the merged elements.
 *   - Array.prototype.join(separator?: string): string
 *     Description: Joins all elements of an array into a single string, separated by the specified separator.
 *     Input: Accepts an optional separator string as a direct value, variable, or expression (default is comma).
 *     Return Type: string — a single string with all array elements joined by the separator.
 *   - console.log(value: any): void
 *     Description: Outputs the provided value to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - Array concatenation: concat provides an immutable way to merge arrays.
 *   - Spread operator (...): Modern syntax to unpack and combine arrays concisely.
 *   - String joining: join converts array elements into a delimited string.
 *   - Immutability: concat and join do not alter the original arrays.
 * ============================================================
 */

let a = [1, 2];
let b = [3, 4];
// let c = a + b;
let c = a.concat(b);
console.log(c);

// spread (modern way) - concatenation. (...)
let d = [...a, ...b];
console.log(d);

// Join 
let s = ["pass", "fail", "skip"].join("|");
console.log(s);