/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Advanced in-place array modification using splice.
 * 
 * Functions/Methods Used:
 *   - Array.prototype.splice(start: number, deleteCount: number, ...items: any[]): Array
 *     Description: Removes, replaces, or inserts elements at a specified index. Returns an array of the removed elements. Mutates the original array.
 *     Input: Accepts a start index (number), a delete count (number), and optional items to insert as direct values, variables, or expressions.
 *     Return Type: Array — an array containing the removed elements.
 *   - console.log(value: any): void
 *     Description: Outputs the provided value to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - In-place mutation: splice changes the original array directly.
 *   - Versatile parameters: Can delete items, insert items, or replace items
 *     depending on the arguments provided.
 *   - Return value: Returns an array containing only the removed elements.
 * ============================================================
 */

let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);
// arr = [1, 2, 3, 4, 5, 6]
// index=0,1,2,3,4,5

// splice(start, deleteCount, ...itemsToAdd)
// arr.splice(2, 1);
// console.log(arr);

// arr.splice(2, 0, 99); // add
// arr.splice(2, 1, 99); // repace
// console.log(arr);


// arr = [1, 2, 3, 4, 5, 6]
// index=0,1,2,3,4,5

arr.splice(1, 2, 10, 20);
console.log(arr);