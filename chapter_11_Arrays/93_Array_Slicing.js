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

/*
============================================================
DETAILED EXPLANATION
============================================================

This file clarifies the critical difference between slice() and splice().
These two methods are often confused because their names are similar,
but their behaviors are almost opposite: slice extracts without
mutating, while splice edits the original array in place.

============================================================
CODE BREAKDOWN (Step-by-Step)
============================================================

Step 1: let arr = [10, 20, 30, 40, 50];
        Creates a numeric array for the demonstration.

Step 2: let removed = arr.splice(1, 2);
        splice(start=1, deleteCount=2)
        Removes 2 elements starting at index 1.
        removed = [20, 30].
        arr is MUTATED to [10, 40, 50].

Step 3: console.log(removed);
        Prints the extracted elements: [20, 30].

Step 4: console.log(arr);
        Prints the modified array: [10, 40, 50].
        This proves the original array was changed.

(Note: The commented slice examples earlier in the file show that
slice(1, 3) would return [20, 30] but leave arr unchanged as [10,20,30,40,50].)

============================================================
KEY CONCEPTS (Plain English)
============================================================

slice(start, end):
  - "Copy a section." Takes a photo of a portion without moving anything.
  - End index is EXCLUSIVE (not included in the result).
  - Negative indices count from the end (-2 = second to last).
  - Does NOT mutate the original.

splice(start, deleteCount, ...items):
  - "Cut and paste." Removes elements and optionally inserts new ones.
  - Mutates the original array directly.
  - Returns the removed elements, not the modified array.

============================================================
COMPARISON TABLE: slice vs splice
============================================================

| Feature          | slice(start, end)        | splice(start, delCount, items) |
|------------------|--------------------------|--------------------------------|
| Mutates original | NO (safe / immutable)    | YES (destructive / mutable)    |
| Return value     | New extracted array      | Array of removed elements      |
| End parameter    | Exclusive index          | N/A (uses deleteCount)         |
| Can insert?      | No                       | Yes (optional items argument)  |
| Can replace?     | No                       | Yes (delete + insert)          |
| Negative start   | Yes (counts from end)    | Yes (counts from end)          |

============================================================
REAL-WORLD USE CASES
============================================================

- slice: Creating a paginated view of a large dataset without
  destroying the master list.
- splice: Removing a deleted task from a todo list by index
  and optionally inserting a replacement.

============================================================
COMMON MISTAKES TO AVOID
============================================================

1. Using slice when you meant splice (or vice versa):
   If you need to edit the original, use splice.
   If you need a safe copy, use slice.

2. Thinking slice includes the end index:
   arr.slice(1, 3) gives elements at indices 1 and 2 only.
   Index 3 is NOT included.

3. Ignoring splice's return value when you need it:
   If you delete items and want to know what was removed,
   capture the return value: let deleted = arr.splice(2, 1).

============================================================
KEY TAKEAWAY
============================================================

Remember the rhyme: slice is NICE (non-destructive), splice is SLICE
with an extra letter "p" for "patch" (it modifies). Use slice for
reading portions safely; use splice for surgical edits.
*/