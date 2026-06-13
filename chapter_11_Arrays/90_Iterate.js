/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Various patterns for iterating over array elements.
 * 
 * Functions/Methods Used:
 *   - Array.prototype.forEach(callback: (element: any, index: number) => void): void
 *     Description: Executes a provided callback once for each array element.
 *     Input: Accepts a callback function that receives the current element and its index.
 *     Return Type: void (undefined) — returns nothing; executes the callback for each element.
 *   - Array.prototype.entries(): Iterator
 *     Description: Returns an iterator of [index, value] pairs for the array.
 *     Input: No input parameters required.
 *     Return Type: Iterator — an iterable object yielding [index, value] pairs.
 *   - console.log(value: any): void
 *     Description: Outputs the provided value to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - Classic for loop: Uses an index counter and .length for full control.
 *   - for...of: Iterates over values directly; cleanest syntax when index is not needed.
 *   - for...in: Iterates over enumerable property names (indices as strings);
 *     useful for objects but less common for arrays.
 *   - forEach: Functional approach that accepts a callback with element and index.
 *   - Destructuring: [i, test] syntax extracts index and value from entries() iterator.
 * ============================================================
 */

// Iterate - Go from one to another. // 

let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("----");

// for...of (cleanest for values)
for (test of tests) {
    console.log(test);
}

console.log("----");

tests.forEach((i, index) => {
    console.log(i, index);
});

console.log("----");

let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}

console.log("----");

for (let [i, test] of tests.entries()) {
    console.log(i, test);
}

/*
============================================================
DETAILED EXPLANATION
============================================================

This file showcases every major way to iterate over an array in
JavaScript: classic for, for...of, for...in, forEach, and .entries()
with destructuring. Each pattern has unique strengths and trade-offs.

============================================================
CODE BREAKDOWN (Step-by-Step)
============================================================

Step 1: let tests = ["login", "checkout", "search"];
        Creates an array of test scenario names.

Step 2: for (let i = 0; i < tests.length; i++) { ... }
        Classic index-based for loop.
        You control the counter, can skip indices, and break early.

Step 3: for (test of tests) { ... }
        for...of gives you each VALUE directly.
        No index variable needed; very clean and readable.

Step 4: tests.forEach((i, index) => { ... });
        A functional method that runs a callback for each element.
        Receives the element and its index automatically.
        Cannot be broken with break/continue.

Step 5: let students = ["methis", "senthil", "ajay", "rahul"];
        Another array to demonstrate for...in.

Step 6: for (let student in students) { ... }
        for...in loops over enumerable PROPERTY NAMES (indices as strings).
        It works, but is intended mainly for objects, not arrays.
        students[student] is needed to access the actual value.

Step 7: for (let [i, test] of tests.entries()) { ... }
        .entries() returns [index, value] pairs.
        Destructuring [i, test] captures both in one line.
        Best of both worlds: clean syntax + index access.

============================================================
KEY CONCEPTS (Plain English)
============================================================

for Loop:
  The "manual transmission" of iteration. Total control, more syntax.

for...of:
  The "automatic transmission." Reads values directly. Modern and clean.

for...in:
  The "object inspector." Iterates keys. Works on arrays but can
  include non-index properties if they exist, so it is discouraged
  for arrays.

forEach:
  The "functional runner." Good for side effects (logging, DOM updates).
  Not chainable and cannot be stopped mid-flight.

.entries():
  The "enumerator." Gives you both position and value elegantly.

============================================================
COMPARISON TABLE: Iteration Methods
============================================================

| Method       | Access to Index? | Access to Value? | Can break? | Best For                  |
|--------------|------------------|------------------|------------|---------------------------|
| for          | Yes (i)          | Yes (arr[i])     | Yes        | Full control              |
| for...of     | No               | Yes (direct)     | Yes        | Clean value iteration     |
| for...in     | Yes (as string)  | Indirect         | Yes        | Objects (not arrays)      |
| forEach      | Yes (param)      | Yes (param)      | No         | Side-effect operations    |
| .entries()   | Yes (destructure)| Yes (destructure)| Yes        | Need both index and value |

============================================================
REAL-WORLD USE CASES
============================================================

- for: Skipping every other test case with i += 2.
- for...of: Printing all error messages without caring about position.
- forEach: Updating every DOM element in a NodeList converted to array.
- entries(): Building a numbered list where you need "1. login" format.

============================================================
COMMON MISTAKES TO AVOID
============================================================

1. Using for...in on arrays:
   It iterates over all enumerable properties, including any you
   might have manually added to the array object. Stick to for...of.

2. Trying to break out of forEach:
   You cannot use break or continue inside forEach.
   Use a regular for loop or for...of instead.

3. Modifying the array during iteration:
   Adding or removing items inside a for loop can shift indices
   and cause skipped elements or infinite loops.

============================================================
KEY TAKEAWAY
============================================================

Choose for...of when you only need values.
Choose .entries() when you need both index and value.
Choose a classic for loop when you need to break, skip, or reverse.
Avoid for...in for arrays.
*/