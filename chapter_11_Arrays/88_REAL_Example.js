/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Practical array manipulation with removal and iteration.
 * 
 * Functions/Methods Used:
 *   - Array.prototype.pop(): any
 *     Description: Removes and returns the last element of the array.
 *     Input: No input parameters required.
 *     Return Type: any — the removed last element, or undefined if the array is empty.
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
 *   - Array length: The number of elements in the array, accessible via .length.
 *   - for loop iteration: Classic index-based loop to traverse array elements.
 *   - Conditional checks: Using if and strict equality (===) to perform actions
 *     based on element values during iteration.
 *   - Element removal: Demonstrates removing elements from both ends of an array.
 * ============================================================
 */

let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length);
console.log(browser);

browser.pop();
console.log(browser);

let removed = browser.shift();
console.log(browser);
console.log(removed);


for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Opera is removed from the selenium!");
}

/*
============================================================
DETAILED EXPLANATION
============================================================

This file ties together multiple array concepts into a practical,
real-world scenario: managing a list of web browsers used in an
automation test suite. It demonstrates length, pop, shift, and
classic for-loop iteration with conditional logic.

============================================================
CODE BREAKDOWN (Step-by-Step)
============================================================

Step 1: let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
        Declares an array of browser names for cross-browser testing.

Step 2: console.log(browser.length);
        Prints the number of browsers. Output: 5.

Step 3: console.log(browser);
        Prints the entire array before any modifications.

Step 4: browser.pop();
        Removes the LAST browser ('edge').
        Array becomes ['chrome', 'firefox', 'safari', 'opera'].

Step 5: let removed = browser.shift();
        Removes the FIRST browser ('chrome') and stores it.
        Array becomes ['firefox', 'safari', 'opera'].

Step 6: console.log(browser);
        Shows the array after both removals.

Step 7: console.log(removed);
        Prints 'chrome', proving shift returns the removed item.

Step 8: for (let i = 0; i < browser.length; i++) { ... }
        A classic for loop iterates from index 0 to length-1.
        On each iteration, it prints the browser name.
        If the name is "opera", it prints a special removal message.

============================================================
KEY CONCEPTS (Plain English)
============================================================

Array Length:
  .length tells you how many items are in the array.
  It updates automatically when you add or remove items.

pop() and shift() in Practice:
  Removing unsupported browsers from a test matrix is a common task.
  pop() removes the newest addition; shift() removes the oldest.

for Loop with Conditionals:
  The classic for loop gives you full control: you can access the
  index, break early, or perform extra logic (like the if check).

============================================================
COMPARISON TABLE: Loop Types for Arrays
============================================================

| Loop Type     | Index Available? | Can break/continue? | Best For                     |
|---------------|------------------|---------------------|------------------------------|
| for           | Yes              | Yes                 | Full control, conditions     |
| for...of      | No (value only)  | Yes                 | Clean value iteration        |
| for...in      | Yes (as string)  | Yes                 | Objects (avoid for arrays)   |
| forEach       | Yes (param)      | No (can't break)    | Functional side-effects      |

============================================================
REAL-WORLD USE CASES
============================================================

- Removing deprecated browsers from a Selenium/Playwright grid config.
- Iterating over test results to flag specific statuses (e.g., "fail").
- Building a CLI tool that prints each environment before running tests.

============================================================
COMMON MISTAKES TO AVOID
============================================================

1. Modifying the array while looping forward:
   If you remove items inside a for loop with i++, you can skip
   elements or access out-of-bounds indices. Loop backward if
   you must delete during iteration.

2. Trusting .length inside the loop condition after mutation:
   browser.length is re-evaluated every iteration, which is usually
   fine, but can be confusing if the array shrinks unexpectedly.

3. Confusing shift() return value with the modified array:
   shift() returns the removed element, NOT the new array.

============================================================
KEY TAKEAWAY
============================================================

Real-world scripts rarely use one method in isolation. Combining
length checks, end removals, and conditional iteration is a common
pattern for processing lists of data such as browser configurations,
test cases, or environment variables.
*/
}