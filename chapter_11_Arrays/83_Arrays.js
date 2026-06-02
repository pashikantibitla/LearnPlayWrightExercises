/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Array creation, indexing, and accessing elements.
 * 
 * Functions/Methods Used:
 *   - console.log(value: any): void
 *     Description: Outputs the provided value to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Array literals: Created with square brackets [], can be empty or pre-filled.
 *   - Zero-based indexing: First element is at index 0.
 *   - Out-of-bounds access: Accessing an index that does not exist returns undefined.
 *   - Mixed types: JavaScript arrays can hold values of different types
 *     (numbers, strings, booleans, null) in the same array.
 * ============================================================
 */

let fruits = []; // Empty  []
let fruits_fresh = ["apple", "banana", "cheery"];
// length = 3, Index - 0,1,2


let arr = [10, 20, 30, 40]; // 0-3: 4

console.log(arr[0]);
console.log(arr[3])
console.log(arr[4]); // undefined

let testResults = ["pass", "fail", "pass", "skip"];
let mixed = [1, "hello", true, null]; // JS arrays can hold any type.

/*
============================================================
DETAILED EXPLANATION
============================================================

This file introduces the most fundamental concept in JavaScript arrays:
how to CREATE an array and how to ACCESS its elements.

- An array is an ordered collection of values stored under a single variable name.
- Arrays in JavaScript are zero-indexed, meaning the first element lives at index 0.
- You can create an empty array with [] or pre-fill it with values.
- JavaScript arrays are dynamic and can hold mixed data types in the same container.

============================================================
CODE BREAKDOWN (Step-by-Step)
============================================================

Step 1: let fruits = [];
        Creates an empty array literal. It has length 0 and no elements yet.

Step 2: let fruits_fresh = ["apple", "banana", "cheery"];
        Creates an array with 3 string elements.
        Length = 3, valid indices = 0, 1, 2.

Step 3: let arr = [10, 20, 30, 40];
        Creates a numeric array with 4 elements.
        Index 0 -> 10, Index 1 -> 20, Index 2 -> 30, Index 3 -> 40.

Step 4: console.log(arr[0]);
        Reads the element at index 0. Output: 10.

Step 5: console.log(arr[3]);
        Reads the element at index 3. Output: 40.

Step 6: console.log(arr[4]);
        Index 4 does NOT exist (only indices 0-3 are valid).
        JavaScript does not throw an error; it returns undefined.

Step 7: let testResults = ["pass", "fail", "pass", "skip"];
        Practical example: storing automated test outcomes.

Step 8: let mixed = [1, "hello", true, null];
        Demonstrates that JS arrays are not strictly typed.
        You can store numbers, strings, booleans, and null together.

============================================================
KEY CONCEPTS (Plain English)
============================================================

Array Literal []:
  The quickest way to create an array. Just wrap values in square brackets.

Zero-Based Indexing:
  Humans count 1, 2, 3... Computers count 0, 1, 2...
  Always subtract 1 from the "human" position to get the computer index.

Length vs Last Index:
  If an array has length 4, its last valid index is 3 (length - 1).

Out-of-Bounds Access:
  Accessing arr[99] when the array has only 3 items gives undefined.
  It does NOT crash your program, which can hide bugs if you are not careful.

============================================================
COMPARISON TABLE: Empty vs Pre-Filled Arrays
============================================================

| Creation Style        | Syntax Example              | Length | Use Case                     |
|-----------------------|-----------------------------|--------|------------------------------|
| Empty literal         | let a = [];                 | 0      | When you will add items later|
| Pre-filled literal    | let a = [1, 2, 3];          | 3      | When you already know data   |
| Mixed types           | let a = [1, "a", true];     | 3      | Flexible data storage        |

============================================================
REAL-WORLD USE CASES
============================================================

- Storing usernames fetched from a database before displaying them.
- Holding pixel RGB values [255, 128, 0] for image manipulation.
- Collecting API test statuses ["pass", "fail", "skip"] for a report.
- Building a shopping cart list where each item is an object in the array.

============================================================
COMMON MISTAKES TO AVOID
============================================================

1. Off-by-One Errors:
   Using arr[arr.length] thinking it is the last element.
   The last element is ALWAYS at arr[arr.length - 1].

2. Assuming Arrays are Fixed Length:
   Unlike Java or C++, JavaScript arrays grow and shrink dynamically.
   You can assign arr[100] = "x" even if the array had only 2 items;
   indices 2-99 will become empty slots.

3. Confusing undefined with "not found":
   An out-of-bounds read returns undefined, which is the same value
   you might have intentionally stored. Use .hasOwnProperty(index)
   or length checks when in doubt.

============================================================
KEY TAKEAWAY
============================================================

Arrays are ordered, zero-indexed lists. Create them with [], read
individual items with bracket notation arr[index], and remember that
the last element is always at index (length - 1).
*/
