/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Basic for loop syntax and execution flow.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - for (initialization; condition; increment): keyword
 *     Description: A loop that runs while the condition is true, updating the counter after each iteration.
 *     Input: Takes an initialization expression, a condition expression, and an increment expression separated by semicolons.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped local variable.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 * 
 * Key Concepts:
 *   - Loop Initialization: Setting the starting value of the counter (i = 0).
 *   - Loop Condition: The loop continues while i <= 5.
 *   - Post-increment (i++): Increases the value of i by 1 after each iteration.
 *   - Iteration: Each cycle of the loop body executing.
 * ============================================================
 */

/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Basic for loop syntax and execution flow.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - for (initialization; condition; increment): keyword
 *     Description: A loop that runs while the condition is true, updating the counter after each iteration.
 *     Input: Takes an initialization expression, a condition expression, and an increment expression separated by semicolons.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped local variable.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 * 
 * Key Concepts:
 *   - Loop Initialization: Setting the starting value of the counter (i = 0).
 *   - Loop Condition: The loop continues while i <= 5.
 *   - Post-increment (i++): Increases the value of i by 1 after each iteration.
 *   - Iteration: Each cycle of the loop body executing.
 * ============================================================
 */

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

0, 1, 2, 3, 4, 5

/*
================================================================================
                        COMPREHENSIVE EDUCATIONAL GUIDE
================================================================================

DETAILED EXPLANATION:
---------------------
This file introduces the basic syntax and execution flow of the JavaScript
"for" loop. A for loop is the most common way to repeat a block of code a
specific number of times. It consolidates three essential loop components into
a single line: initialization, condition, and increment.

The loop shown runs six times, printing the values 0, 1, 2, 3, 4, and 5.
Each printed number corresponds to the current value of the counter variable
"i" during that iteration. Understanding exactly when each of the three
parts executes is crucial to mastering loops.

STEP-BY-STEP CODE BREAKDOWN:
----------------------------
Step 1: // Commented-out example: for (let i = 0; i < 5; i++)
        - This would print 0 through 4 (5 numbers total).
        - The condition i < 5 stops the loop when i reaches 5.

Step 2: for (let i = 0; i <= 5; i++) { ... }
        - Initialization: let i = 0
          * Creates a block-scoped variable i and sets it to 0.
          * This happens exactly once, before the loop starts.
        - Condition: i <= 5
          * Before each iteration, JavaScript checks if i is less than or equal to 5.
          * If true, the loop body executes. If false, the loop ends.
        - Increment: i++
          * After each iteration completes, i is increased by 1.
          * i++ is post-increment: it returns the old value, then adds 1.

Step 3: console.log(i);
        - Prints the current value of i to the console.
        - On the first pass: 0. Second pass: 1. ... Last pass: 5.

Step 4: 0, 1, 2, 3, 4, 5
        - This line at the end is not executable code; it is a note showing
          the expected output of the program.

KEY CONCEPTS:
-------------
- Initialization Expression: Executed once before the first iteration. Usually
  declares and sets the loop counter to its starting value.
- Condition Expression: Evaluated before every iteration. The loop continues
  only while this expression evaluates to true.
- Final Expression: Executed at the end of each iteration. Usually increments
  or decrements the counter to progress toward termination.
- Post-increment (i++): Increments the variable by 1 after its current value
  has been used in the expression.
- Block Scope: Variables declared with let inside the for loop header are
  scoped to the loop block and cannot be accessed outside of it.

COMPARISON TABLE: i < 5 vs i <= 5
----------------------------------
| Condition      | Start | End | Total Iterations | Output                 |
|----------------|-------|-----|------------------|------------------------|
| i < 5          | 0     | 4   | 5                | 0, 1, 2, 3, 4          |
| i <= 5         | 0     | 5   | 6                | 0, 1, 2, 3, 4, 5       |
| i < 10         | 0     | 9   | 10               | 0 through 9            |
| i <= 10        | 0     | 10  | 11               | 0 through 10           |

REAL-WORLD USE CASES:
---------------------
- Iterating over the indices of an array to process each element.
- Generating pagination controls (Page 1, Page 2, ... Page N).
- Running a piece of code exactly N times (e.g., retry logic).
- Creating a countdown or count-up timer in a game or animation.
- Building multiplication tables (1x1, 1x2, ... 1x10).

COMMON MISTAKES TO AVOID:
-------------------------
1. Off-by-one errors: Using < instead of <= or vice versa.
   - Example: i < 5 gives 0-4, but i <= 5 gives 0-5.
2. Infinite loops: Forgetting the increment (i++) causes the condition to
   remain true forever, freezing the program.
3. Using var instead of let in the loop header, which leaks the counter
   variable into the surrounding function scope.
4. Modifying the counter inside the loop body in a way that conflicts with
   the increment expression, leading to skipped or repeated iterations.
5. Semicolon confusion: for (init; condition; increment) — all three parts
   are separated by semicolons, not commas.

KEY TAKEAWAY:
-------------
The for loop syntax is: for (initialization; condition; increment) { body }.
The initialization runs once. The condition is checked before every iteration.
The increment runs after every iteration. Mastering this exact execution order
prevents off-by-one errors and infinite loops, forming the foundation for all
counted repetition in JavaScript.

================================================================================
*/