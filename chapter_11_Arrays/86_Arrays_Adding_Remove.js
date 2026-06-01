/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Adding and removing elements at the beginning and end of an array.
 * 
 * Functions/Methods Used:
 *   - Array.prototype.push(...elements: any[]): number
 *     Description: Adds one or more elements to the end of the array and returns the new length.
 *     Input: Accepts one or more elements of any type as direct values, variables, or expressions.
 *     Return Type: number — the new length of the array after adding the elements.
 *   - Array.prototype.pop(): any
 *     Description: Removes and returns the last element of the array.
 *     Input: No input parameters required.
 *     Return Type: any — the removed last element, or undefined if the array is empty.
 *   - Array.prototype.unshift(...elements: any[]): number
 *     Description: Adds one or more elements to the beginning of the array and returns the new length.
 *     Input: Accepts one or more elements of any type as direct values, variables, or expressions.
 *     Return Type: number — the new length of the array after adding the elements.
 *   - Array.prototype.shift(): any
 *     Description: Removes and returns the first element of the array.
 *     Input: No input parameters required.
 *     Return Type: any — the removed first element, or undefined if the array is empty.
 *   - console.log(value: any): void
 *     Description: Outputs the provided value to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - Mutating methods: push, pop, shift, and unshift modify the original array.
 *   - Multiple arguments: push and unshift can accept multiple items at once.
 *   - LIFO / FIFO behavior: pop/push act like a stack; shift/unshift act like a queue.
 * ============================================================
 */

let arr = [1, 2, 3];
console.log(arr);

// Add to END
arr.push(4);
console.log(arr);

// Remove from END
arr.pop();
console.log(arr);

arr.push(5, 6);
console.log(arr);

// Add to BEGINNING
arr.unshift(0);
console.log(arr);


// Remove from BEGINNING
arr.shift();
console.log(arr);


console.log(arr);
arr.unshift(100);
console.log(arr);
arr.shift();
console.log(arr);
