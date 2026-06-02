/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Transforming arrays with map, filter, reduce, and flat.
 * 
 * Functions/Methods Used:
 *   - Array.prototype.map(callback: (element: any) => any): Array
 *     Description: Creates a new array by applying a callback to every element.
 *     Input: Accepts a callback function that receives each element and returns a transformed value.
 *     Return Type: Array — a new array with transformed elements.
 *   - Array.prototype.filter(callback: (element: any) => boolean): Array
 *     Description: Creates a new array containing only elements that pass the test.
 *     Input: Accepts a callback function that receives each element and returns a boolean to keep or discard it.
 *     Return Type: Array — a new array containing only elements that passed the test.
 *   - Array.prototype.reduce(callback: (accumulator: any, current: any) => any, initialValue: any): any
 *     Description: Reduces the array to a single accumulated value.
 *     Input: Accepts a callback function (accumulator, current value) and an optional initial value as a direct value or variable.
 *     Return Type: any — the single accumulated result after processing all elements.
 *   - Array.prototype.flat(depth?: number): Array
 *     Description: Recursively flattens nested arrays up to the specified depth.
 *     Input: Accepts an optional depth number as a direct value, variable, or expression (default is 1).
 *     Return Type: Array — a new flattened array up to the specified depth.
 *   - console.log(value: any): void
 *     Description: Outputs the provided value to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - Immutable transformations: map and filter return new arrays without
 *     altering the original.
 *   - Conditional mapping: Ternary operators inside map callbacks transform
 *     values based on logic.
 *   - Accumulation: reduce aggregates data (e.g., summing numbers).
 *   - Flattening: flat simplifies nested array structures into a single-level array.
 *   - Arrow functions: Compact callback syntax used across all transformation methods.
 * ============================================================
 */

let scores = [45, 82, 91, 60, 73];

// map - transform every element, return a new arrays
// A map will always return the same number of elements that you have, 
// but based on the condition, their values will be changed. 
let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);


// filter — keeps elements that pass a test
let passing = scores.filter(s => s > 70);
console.log(passing);

// reduce , // reduce — accumulates to a single value
let total = scores.reduce((a, b) => a + b, 0);
console.log(total);

// flat — flattens nested arrays
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());

/*
============================================================
DETAILED EXPLANATION
============================================================

This file introduces four of the most powerful higher-order array
methods: map, filter, reduce, and flat. These methods create new
arrays or values based on transformations of the original, without
mutating the source data.

============================================================
CODE BREAKDOWN (Step-by-Step)
============================================================

Step 1: let scores = [45, 82, 91, 60, 73];
        A sample array of numeric scores.

Step 2: let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
        map() transforms every element into a new value.
        45 -> "Fail", 82 -> "Pass", 91 -> "Pass", 60 -> "Fail", 73 -> "Pass".
        Result: ["Fail", "Pass", "Pass", "Fail", "Pass"].
        Original scores array is unchanged.

Step 3: let passing = scores.filter(s => s > 70);
        filter() keeps only elements that pass the test.
        45, 60 are removed. Result: [82, 91, 73].
        Original array remains untouched.

Step 4: let total = scores.reduce((a, b) => a + b, 0);
        reduce() accumulates all values into a single result.
        a = accumulator, b = current element.
        0 + 45 = 45 -> 45 + 82 = 127 -> + 91 = 218 -> + 60 = 278 -> + 73 = 351.
        Result: 351.

Step 5: let nested = [[1, 2], [3, 4], [5]];
        An array containing other arrays (nested structure).

Step 6: console.log(nested.flat());
        flat() collapses one level of nesting.
        Result: [1, 2, 3, 4, 5].
        For deeper nesting, you can pass a depth argument like .flat(2).

============================================================
KEY CONCEPTS (Plain English)
============================================================

map:
  "Transform every item." The output array always has the same length
  as the input; each item is changed based on your callback.

filter:
  "Keep the good ones." The output array may be shorter. Only items
  that make your callback return true survive.

reduce:
  "Boil it down to one thing." Summing, averaging, building objects,
  counting occurrences—reduce can do it all.

flat:
  "Smooth out the layers." Turns [[1],[2]] into [1,2].
  Useful after map operations that return arrays.

============================================================
COMPARISON TABLE: map vs filter vs reduce vs flat
============================================================

| Method  | Input -> Output          | Mutates Original? | Callback Returns    | Result Length          |
|---------|--------------------------|-------------------|---------------------|------------------------|
| map     | Array -> New Array       | No                | Transformed value   | Same as input          |
| filter  | Array -> New Array       | No                | boolean             | 0 to input length      |
| reduce  | Array -> Single Value    | No                | New accumulator     | N/A (single value)     |
| flat    | Array -> New Flat Array  | No                | N/A                 | Depends on nesting     |

============================================================
REAL-WORLD USE CASES
============================================================

- map: Converting an array of prices into formatted currency strings.
- filter: Removing failed API responses from a results array.
- reduce: Calculating the total cart value from an array of item objects.
- flat: Flattening paginated API results [[page1], [page2]] into one list.

============================================================
COMMON MISTAKES TO AVOID
============================================================

1. Forgetting that map/filter/reduce return NEW arrays:
   If you write scores.map(...); without assigning the result,
   you are doing work and throwing it away.

2. Missing the initial value in reduce:
   scores.reduce((a,b) => a + b) works on non-empty arrays,
   but on an empty array it throws a TypeError.
   Always provide an initial value: .reduce(fn, 0).

3. Expecting filter to mutate:
   scores.filter(...) does NOT remove items from the original.
   You must assign the result: scores = scores.filter(...).

============================================================
KEY TAKEAWAY
============================================================

map transforms, filter selects, reduce aggregates, and flat simplifies.
These are the backbone of functional array programming in JavaScript.
Always capture their return values because they never mutate the original.
*/