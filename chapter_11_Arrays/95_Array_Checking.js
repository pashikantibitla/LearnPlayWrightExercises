/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Checking array types and validating elements with every and some.
 *
 * Functions/Methods Used:
 *   - Array.isArray(value: any): boolean
 *     Description: Determines whether the passed value is an array.
 *     Input: Accepts any value as a direct value, variable, or expression.
 *     Return Type: boolean — true if the value is an array, otherwise false.
 *   - Array.prototype.every(callback: (element: any) => boolean): boolean
 *     Description: Tests whether all elements in the array pass the provided predicate function.
 *     Input: Accepts a callback function that receives each element and returns a boolean.
 *     Return Type: boolean — true if all elements pass the test, otherwise false.
 *   - Array.prototype.some(callback: (element: any) => boolean): boolean
 *     Description: Tests whether at least one element in the array passes the provided predicate function.
 *     Input: Accepts a callback function that receives each element and returns a boolean.
 *     Return Type: boolean — true if at least one element passes the test, otherwise false.
 *   - console.log(value: any): void
 *     Description: Outputs the provided value to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Type checking: Array.isArray is the reliable way to check if a value is an array.
 *   - Quantifier methods: every requires all elements to pass; some requires at least one.
 *   - Predicate callbacks: Arrow functions define the condition applied to each element.
 * ============================================================
 */

// Checking Arrays

// Check if something IS an array
let result = Array.isArray([1, 2, 3]);
console.log(result);
let result1 = Array.isArray("a"); // []
console.log(result1);

// every & some

[80, 90, 85].every(s => s >= 70); // true
[80, 60, 85].every(s => s >= 70); // false

// Playwright API 
[200, 201, 203].every(statuscode => statuscode > 200);

// some — AT LEAST ONE must pass
[80, 60, 85].some(s => s < 70); // true
[80, 90, 85].some(s => s < 70); // false

//arrow : s => s >= 70

/*
============================================================
DETAILED EXPLANATION
============================================================

This file covers array validation: how to confirm a value is an
array, how to verify that ALL elements pass a test, and how to check
if AT LEAST ONE element passes a test. These are essential for defensive
programming and data validation.

============================================================
CODE BREAKDOWN (Step-by-Step)
============================================================

Step 1: let result = Array.isArray([1, 2, 3]);
        Array.isArray() is the definitive way to check if a value
        is an array. It returns true for arrays and false for everything else.
        result = true.

Step 2: let result1 = Array.isArray("a");
        Strings are not arrays, even though they are iterable.
        result1 = false.

Step 3: [80, 90, 85].every(s => s >= 70);
        every() runs the predicate on each element.
        80 >= 70 (true), 90 >= 70 (true), 85 >= 70 (true).
        All are true, so every returns true.

Step 4: [80, 60, 85].every(s => s >= 70);
        60 >= 70 is false.
        Because one element fails, every immediately returns false.

Step 5: [200, 201, 203].every(statuscode => statuscode > 200);
        200 > 200 is false (strictly greater, not >=).
        Returns false. Useful for API response validation.

Step 6: [80, 60, 85].some(s => s < 70);
        some() checks if ANY element satisfies the condition.
        60 < 70 is true, so some returns true immediately.

Step 7: [80, 90, 85].some(s => s < 70);
        No element is below 70, so some returns false.

============================================================
KEY CONCEPTS (Plain English)
============================================================

Array.isArray(value):
  The only reliable check. typeof [] returns "object", which is not
  specific enough. Array.isArray removes all doubt.

.every(predicate):
  Think of it as "Are ALL items good?" It returns true only if every
  single element passes the test. One failure ruins it.

.some(predicate):
  Think of it as "Is there ANY good item?" It returns true if at least
  one element passes. It stops checking as soon as it finds a match.

Short-Circuiting:
  every stops at the first false.
  some stops at the first true.
  This makes them efficient on large arrays.

============================================================
COMPARISON TABLE: every vs some vs includes vs find
============================================================

| Method    | Returns   | Stops Early? | Condition Needed? | True When...                  |
|-----------|-----------|--------------|-------------------|-------------------------------|
| every()   | boolean   | On first false| Yes (predicate)   | ALL elements pass             |
| some()    | boolean   | On first true | Yes (predicate)   | AT LEAST ONE element passes   |
| includes()| boolean   | On first match| No (exact value)  | Exact value exists            |
| find()    | Element   | On first match| Yes (predicate)   | First match exists            |

============================================================
REAL-WORLD USE CASES
============================================================

- Array.isArray: Validating that a JSON payload field is actually a list
  before calling .map() on it.
- every: Ensuring ALL API responses in a batch returned status 200.
- some: Checking if ANY log entry contains the word "ERROR" to trigger
  an alert.

============================================================
COMMON MISTAKES TO AVOID
============================================================

1. Using typeof to check for arrays:
   typeof [] === "object" is true, but typeof {} is also "object".
   Always use Array.isArray().

2. Expecting every/some to return the matching element:
   They return booleans. If you need the element, use find().

3. Returning a non-boolean from the predicate:
   JavaScript coerces the return value, but explicit true/false is
   clearer and less error-prone.

4. Empty array gotchas:
   [].every(x => x > 5) returns true (vacuous truth).
   [].some(x => x > 5) returns false.
   This surprises many developers.

============================================================
KEY TAKEAWAY
============================================================

Use Array.isArray() for type checks.
Use every() when you need a 100% pass rate.
Use some() when you only need one success.
Remember that both methods short-circuit, making them efficient
for large datasets.
*/