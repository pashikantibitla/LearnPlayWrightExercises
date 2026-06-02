/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: For loop with custom variable names and different iteration ranges.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - for (initialization; condition; increment): keyword
 *     Description: Repeats a block of code while the condition evaluates to true.
 *     Input: Takes an initialization expression, a condition expression, and an increment expression separated by semicolons.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped local variable for the loop counter.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 * 
 * Key Concepts:
 *   - Variable Naming: Loop counters can use any valid identifier (e.g., somya, _1).
 *   - Iteration Count: The number of times a loop runs depends on the condition.
 *   - Comments: Used to disable or explain code without executing it.
 * ============================================================
 */

/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: For loop with custom variable names and different iteration ranges.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - for (initialization; condition; increment): keyword
 *     Description: Repeats a block of code while the condition evaluates to true.
 *     Input: Takes an initialization expression, a condition expression, and an increment expression separated by semicolons.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped local variable for the loop counter.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 * 
 * Key Concepts:
 *   - Variable Naming: Loop counters can use any valid identifier (e.g., somya, _1).
 *   - Iteration Count: The number of times a loop runs depends on the condition.
 *   - Comments: Used to disable or explain code without executing it.
 * ============================================================
 */

// for (let somya = 0; somya < 10; somya++) {
//     console.log(somya);
// }
// // 0 to 9, Times -> 10

// var, let, const

// for (let somya = 0; somya < 10; somya++) { // 0 to 9, Times -> 10
//     console.log(somya);
// }

for (let _1 = 0; _1 <= 10; _1++) { // 0 to 10, Times -> 11
    console.log(_1);
}

/*
================================================================================
                        COMPREHENSIVE EDUCATIONAL GUIDE
================================================================================

DETAILED EXPLANATION:
---------------------
This file expands on the basic for loop by demonstrating that the counter
variable can have any valid JavaScript identifier name, and that the range
of iteration is fully configurable. It also shows how comments can be used to
disable code or explain behavior without affecting execution.

The active code uses a counter named "_1" (a valid, though unconventional,
identifier) to print numbers 0 through 10 inclusive, which results in 11 total
iterations. The commented-out sections show alternative variable names and
ranges, illustrating that the loop mechanics remain identical regardless of
what you name the counter.

STEP-BY-STEP CODE BREAKDOWN:
----------------------------
Step 1: // Commented-out loop with variable "somya"
        // for (let somya = 0; somya < 10; somya++)
        - Demonstrates that the counter can be named anything valid.
        - This particular loop would run 10 times (0 to 9).

Step 2: // var, let, const
        - A comment noting that different declaration keywords exist.
        - In modern JavaScript, let is preferred inside loops for block scoping.

Step 3: // Another commented-out version with "somya" and range 0 to 9
        - Shows the same loop with an inline comment noting "Times -> 10".

Step 4: for (let _1 = 0; _1 <= 10; _1++)
        - Active code. Counter name is "_1".
        - Initialization: _1 starts at 0.
        - Condition: continues while _1 is less than or equal to 10.
        - Increment: _1 increases by 1 after each iteration.
        - Total iterations: 11 (values 0, 1, 2, ... 10).

Step 5: console.log(_1);
        - Prints the current value of the counter during each pass.

KEY CONCEPTS:
-------------
- Identifier Naming: Loop counters can use any valid variable name. While i,
  j, and k are traditional, descriptive names like "index" or "attempt" can
  improve readability in complex code.
- Iteration Range: The number of times a loop runs is determined by the
  combination of the starting value, the condition, and the increment step.
- Comments for Code Management: Commenting out code is a quick way to test
  alternatives or temporarily disable functionality without deleting it.
- Block Scoping with let: Using let in the for header ensures the counter
  does not accidentally leak into the surrounding scope.

COMPARISON TABLE: Loop Variable Names & Conventions
----------------------------------------------------
| Name Style     | Example          | When to Use                                 |
|----------------|------------------|---------------------------------------------|
| Single letter  | i, j, k          | Simple, short loops (standard convention)     |
| Descriptive    | index, count     | Nested or complex loops for clarity           |
| Contextual     | attempt, retry   | When the counter represents a real concept    |
| Underscore     | _1, _i           | Valid but unconventional; avoid in teams    |

COMPARISON TABLE: Iteration Count by Condition
----------------------------------------------
| Condition       | Start | End | Total Iterations | Notes                  |
|-----------------|-------|-----|------------------|------------------------|
| i < 10          | 0     | 9   | 10               | Stops before 10        |
| i <= 10         | 0     | 10  | 11               | Includes 10            |
| i < 1           | 0     | 0   | 1                | Stops before 1        |
| i <= 1          | 0     | 1   | 2                | Includes 1            |

REAL-WORLD USE CASES:
---------------------
- Naming a loop counter "attempt" when retrying a failed network request.
- Using "pageNumber" when fetching paginated data from an API.
- Looping with "charIndex" when analyzing each character in a string.
- Disabling experimental loops with comments while testing a new algorithm.

COMMON MISTAKES TO AVOID:
-------------------------
1. Using invalid identifiers (starting with a number) as loop counters.
   - Example: for (let 1st = 0; ...) is a SyntaxError.
2. Reusing the same counter name in nested loops, causing the inner loop to
   overwrite the outer loop's variable and breaking the logic.
3. Forgetting that <= includes the boundary value, leading to one extra
   iteration that may cause an array index out of bounds error.
4. Leaving large blocks of commented-out code in production files without
   explanation; it clutters the codebase and confuses teammates.
5. Using var in nested loops, which can cause subtle bugs due to function-
   scoped rather than block-scoped behavior.

KEY TAKEAWAY:
-------------
The for loop is highly flexible. You can name the counter anything you want,
and you can configure the start, end, and step values to fit any counting
need. Always choose clear names when context matters, and be precise with
your boundary conditions (< vs <=) to avoid off-by-one errors.

================================================================================
*/