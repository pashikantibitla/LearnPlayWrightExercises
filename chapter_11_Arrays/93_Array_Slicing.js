/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Extracting array portions with slice and removing with splice.
 * 
 * Functions/Methods Used:
 *   - Array.prototype.slice(start?: number, end?: number): Array
 *     Description: Returns a shallow copy of a portion of the array into a new array, without modifying the original. End index is exclusive.
 *     Input: Accepts an optional start index and an optional end index as direct values, variables, or expressions.
 *     Return Type: Array — a new array containing the extracted elements.
 *   - Array.prototype.splice(start: number, deleteCount: number, ...items: any[]): Array
 *     Description: Changes the array by removing elements and optionally inserting new ones. Returns the removed elements. Mutates the original array.
 *     Input: Accepts a start index (number), a delete count (number), and optional items to insert as direct values, variables, or expressions.
 *     Return Type: Array — an array containing the removed elements.
 *   - console.log(value: any): void
 *     Description: Outputs the provided value to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - Non-mutating extraction: slice is safe for copying portions of an array.
 *   - Mutating removal: splice deletes elements from the original array.
 *   - Return values: slice returns the extracted items; splice returns removed items.
 *   - Parameter differences: slice takes start and end; splice takes start,
 *     deleteCount, and optional insertions.
 * ============================================================
 */

// Slicing & Combining
// let arr = [1, 2, 3, 4, 5];
//. // slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0
//Don't give the end, it will automatically take from start to end. 

// console.log(arr.slice(1, 3)); // ( start, end-1) 

// console.log(arr.slice(2, 4));
// console.log(arr.slice(2, 5));

// console.log(arr.slice(2));

//start from the -1 and till 2. 
// console.log(arr.slice(-2));

// console.log(arr.slice(0));

// let arr = [10, 20, 30, 40, 50];
// let s = arr.slice(1, 4);   // [20, 30, 40]
// console.log(arr);
// console.log(s);

let arr = [10, 20, 30, 40, 50];
let removed = arr.splice(1, 2);   // remove 2 from index 1
console.log(removed);             // [20, 30]
console.log(arr); 