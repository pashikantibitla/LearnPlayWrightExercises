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

/*
============================================================
DETAILED EXPLANATION
============================================================

This file demonstrates how to read array elements using bracket
notation [] and the modern .at() method. It also shows how to
modify an existing element by assigning a new value to a specific index.

============================================================
CODE BREAKDOWN (Step-by-Step)
============================================================

Step 1: let statuses = ["pass", "fail", "skip"];
        Creates an array of three test result strings.

Step 2: console.log(statuses[0]);
        Bracket notation reads the first element at index 0.
        Output: "pass".

Step 3: console.log(statuses[2]);
        Reads the third element at index 2.
        Output: "skip".

Step 4: console.log(statuses.at(-1));
        .at(-1) reads the LAST element.
        Negative indices count backward from the end.
        Output: "skip".

Step 5: console.log(statuses.at(-2));
        .at(-2) reads the second-to-last element.
        Output: "fail".

Step 6: console.log(statuses.at(-3));
        .at(-3) reads the third-to-last (first) element.
        Output: "pass".

Step 7: statuses[1] = "blocked";
        Mutates the array by overwriting the element at index 1.
        The array becomes ["pass", "blocked", "skip"].

Step 8: console.log(statuses);
        Prints the mutated array to verify the change.

============================================================
KEY CONCEPTS (Plain English)
============================================================

Bracket Notation arr[i]:
  The classic way to read or write an element at a numeric index.
  Fast, universal, and works in every JavaScript engine.

.at(index) Method:
  A newer, cleaner way to access elements, especially from the end.
  .at(-1) is much more readable than arr[arr.length - 1].

Mutation by Assignment:
  Arrays in JS are mutable by default. Assigning to an existing index
  changes the array in place without creating a copy.

============================================================
COMPARISON TABLE: Bracket [] vs .at()
============================================================

| Feature               | arr[index]          | arr.at(index)        |
|-----------------------|---------------------|----------------------|
| Positive indices      | Yes                 | Yes                  |
| Negative indices      | No (treated as prop)| Yes (-1 = last)      |
| Out-of-bounds         | undefined           | undefined            |
| Readability (end)     | arr[arr.length-1]   | arr.at(-1)           |
| Browser support       | Universal           | Modern (ES2022+)     |

============================================================
REAL-WORLD USE CASES
============================================================

- Reading the most recent log entry: logs.at(-1) instead of
  logs[logs.length - 1].
- Updating a UI status label by modifying statuses[1] after a
  test automation step changes from "fail" to "blocked".

============================================================
COMMON MISTAKES TO AVOID
============================================================

1. Using negative indices with brackets:
   arr[-1] does NOT mean "last element"; it sets a property
   named "-1" on the array object, which is not part of the
   indexed elements.

2. Forgetting that .at() is relatively new:
   In very old environments, .at() may be missing. You can polyfill
   it or stick to bracket notation for maximum compatibility.

3. Modifying an array while iterating:
   Changing statuses[1] inside a for loop that also reads the same
   index can lead to unpredictable results.

============================================================
KEY TAKEAWAY
============================================================

Use bracket notation for universal compatibility and for assignments.
Use .at() for elegant negative-index reads, especially when grabbing
items from the end of an array.
*/