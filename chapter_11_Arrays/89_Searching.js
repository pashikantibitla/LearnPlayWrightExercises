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

/*
============================================================
DETAILED EXPLANATION
============================================================

This file explores the rich set of built-in methods for searching
inside arrays. You can search by exact value (indexOf, includes) or
by condition (find, findIndex, findLast, findLastIndex).

============================================================
CODE BREAKDOWN (Step-by-Step)
============================================================

Step 1: let results = ["pass", "fail", "pass", "error", "fail"];
        Sample array representing automated test outcomes.

Step 2: results.indexOf("fail");
        Scans left-to-right for the FIRST exact match of "fail".
        Returns 1 because "fail" is at index 1.

Step 3: results.indexOf("skip");
        "skip" does not exist. Returns -1.

Step 4: results.lastIndexOf("fail");
        Scans right-to-left for the LAST exact match of "fail".
        Returns 4.

Step 5: results.includes("error");
        Returns true because "error" exists in the array.

Step 6: results.includes("skip");
        Returns false because "skip" is absent.

Step 7: let nums = [10, 25, 30, 45];
        A numeric array for predicate-based searching.

Step 8: nums.find(x => x > 20);
        Returns the FIRST element satisfying the condition.
        25 is the first value > 20, so it returns 25.

Step 9: nums.findIndex(n => n > 20);
        Returns the INDEX of the first match.
        25 is at index 1, so it returns 1.

Step 10: nums.findLast(n => n > 20);
        Returns the LAST element satisfying the condition.
        45 is the last value > 20, so it returns 45.

Step 11: nums.findLastIndex(n => n > 20);
        Returns the INDEX of the last match.
        45 is at index 3, so it returns 3.

============================================================
KEY CONCEPTS (Plain English)
============================================================

Value Search (indexOf, lastIndexOf, includes):
  These look for an exact value using strict equality (===).
  They cannot test conditions like "greater than 20".

Predicate Search (find, findIndex, findLast, findLastIndex):
  These accept a callback function that returns true/false.
  You can define any logic inside the callback.

Return Differences:
  indexOf returns an index (or -1).
  includes returns a boolean.
  find returns the element itself (or undefined).
  findIndex returns an index (or -1).

============================================================
COMPARISON TABLE: Search Methods
============================================================

| Method          | Search Direction | Returns        | Uses Predicate? | Not Found    |
|-----------------|------------------|----------------|-----------------|--------------|
| indexOf()       | Left to right    | Index (number) | No              | -1           |
| lastIndexOf()   | Right to left    | Index (number) | No              | -1           |
| includes()      | Left to right    | boolean        | No              | false        |
| find()          | Left to right    | Element        | Yes             | undefined    |
| findIndex()     | Left to right    | Index          | Yes             | -1           |
| findLast()      | Right to left    | Element        | Yes             | undefined    |
| findLastIndex() | Right to left    | Index          | Yes             | -1           |

============================================================
REAL-WORLD USE CASES
============================================================

- Checking if a test suite array includes "fail" before deploying.
- Finding the first HTTP response code > 200 in an API log.
- Locating the last occurrence of an error in a large stack trace array.

============================================================
COMMON MISTAKES TO AVOID
============================================================

1. Using indexOf for objects:
   indexOf compares references, not deep values.
   [{a:1}].indexOf({a:1}) returns -1 because they are different objects.
   Use find() with a predicate instead.

2. Forgetting that find() returns undefined on failure:
   If you immediately access properties on the result, you can crash.
   Always check: let item = arr.find(x => x.id === 5); if (item) { ... }

3. Expecting indexOf to accept a callback:
   indexOf("fail") works, but indexOf(x => x === "fail") does NOT.
   That syntax is for find/findIndex.

============================================================
KEY TAKEAWAY
============================================================

Use indexOf/includes for simple exact-value lookups.
Use find/findIndex when you need conditional logic.
Use findLast/findLastIndex when you care about the final match.
*/