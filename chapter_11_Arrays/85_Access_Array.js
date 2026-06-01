/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Accessing and modifying array elements by index.
 * 
 * Functions/Methods Used:
 *   - Array.prototype.at(index: number): any
 *     Description: Returns the element at the given index; supports negative indices (-1 = last element).
 *     Input: Accepts an integer index as a direct value, variable, or expression.
 *     Return Type: any — the element at the specified index, or undefined if out of bounds.
 *   - console.log(value: any): void
 *     Description: Outputs the provided value to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - Bracket notation []: Standard way to read or write an element by index.
 *   - Negative indexing: The .at() method allows accessing elements from the end.
 *   - Mutation by assignment: Assigning a value to an existing index updates
 *     the array in place.
 * ============================================================
 */

// Accessing & Modifying
let statuses = ["pass", "fail", "skip"];
console.log(statuses[0]);
console.log(statuses[2]);

console.log(statuses.at(-1));
console.log(statuses.at(-2));
console.log(statuses.at(-3));
// console.log(statuses.at(-4)); undefined

// Modify
statuses[1] = "blocked";
console.log(statuses);