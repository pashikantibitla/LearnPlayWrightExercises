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

/*
============================================================
DETAILED EXPLANATION
============================================================

This file demonstrates how to merge arrays and convert arrays into
strings. concat() and the spread operator [...a, ...b] are the two
primary ways to combine arrays without mutating the originals. join()
converts array elements into a single delimited string.

============================================================
CODE BREAKDOWN (Step-by-Step)
============================================================

Step 1: let a = [1, 2]; let b = [3, 4];
        Two small arrays to be merged.

Step 2: let c = a.concat(b);
        concat() creates a NEW array containing all elements of a
        followed by all elements of b.
        Result: [1, 2, 3, 4].
        Both a and b remain unchanged.

Step 3: let d = [...a, ...b];
        The spread operator (...) unpacks each array into a new
        literal array. This is the modern, idiomatic way to concatenate.
        Result: [1, 2, 3, 4].

Step 4: let s = ["pass", "fail", "skip"].join("|");
        join() combines all elements into one string.
        The separator "|" is placed between each pair.
        Result: "pass|fail|skip".
        The original array is unchanged.

============================================================
KEY CONCEPTS (Plain English)
============================================================

concat():
  The classic merging method. You can pass multiple arrays or even
  individual values: a.concat(b, 99, c).

Spread Operator [...a, ...b]:
  The modern favorite. It is shorter, works in array literals, and
  can be combined with new items easily: [...a, 5, ...b].

join(separator):
  The bridge from array to string. Default separator is a comma.
  Use "" for no separator, " " for space-separated, or "\n" for
  newline-separated output.

============================================================
COMPARISON TABLE: concat vs Spread vs join
============================================================

| Feature           | concat()             | [...a, ...b]         | join(sep)            |
|-------------------|----------------------|----------------------|----------------------|
| Action            | Merge arrays         | Merge arrays         | Array -> String      |
| Mutates original  | No                   | No                   | No                   |
| Return type       | New Array            | New Array            | String               |
| Modern/Classic    | Classic              | Modern (ES6+)        | Classic              |
| Can add singles   | Yes                  | Yes                  | N/A                  |
| Separator control| N/A                  | N/A                  | Yes                  |

============================================================
REAL-WORLD USE CASES
============================================================

- concat: Merging test results from multiple suites into one report array.
- spread: Combining default config arrays with user overrides in React/Vue.
- join: Generating a CSV row from an array of cell values.

============================================================
COMMON MISTAKES TO AVOID
============================================================

1. Using + with arrays:
   [1,2] + [3,4] becomes "1,23,4" because + triggers string conversion.
   Always use concat or spread for array merging.

2. Forgetting that join with no argument defaults to comma:
   If you want no separator, pass an empty string: arr.join("").

3. Modifying an array after spreading:
   The spread creates a shallow copy. Nested objects inside the
   arrays still share references with the originals.

============================================================
KEY TAKEAWAY
============================================================

Use the spread operator for modern, readable array concatenation.
Use concat when you need backward compatibility or prefer explicit method calls.
Use join when you need to present array data as a single string.
*/