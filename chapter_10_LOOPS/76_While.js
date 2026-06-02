/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Detailed while loop examples showing initialization, condition, and update.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - while (condition): keyword
 *     Description: Repeats a block of code as long as the boolean condition remains true.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares block-scoped variables for loop counters.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - increment operator (++): operator
 *     Description: Increases a numeric variable by 1.
 *     Input: Takes a single numeric variable (prefix or postfix).
 *     Return Type: number — returns the incremented value if used as an expression, otherwise modifies the variable in place.
 * 
 * Key Concepts:
 *   - Initialization: Setting the starting state before entering the loop.
 *   - Condition: The boolean expression that determines whether the loop continues.
 *   - Updation: Modifying the loop variable inside the body to progress toward termination.
 *   - Multiple While Loops: A single file can contain multiple independent while loops.
 * ============================================================
 */

/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Detailed while loop examples showing initialization, condition, and update.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - while (condition): keyword
 *     Description: Repeats a block of code as long as the boolean condition remains true.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares block-scoped variables for loop counters.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - increment operator (++): operator
 *     Description: Increases a numeric variable by 1.
 *     Input: Takes a single numeric variable (prefix or postfix).
 *     Return Type: number — returns the incremented value if used as an expression, otherwise modifies the variable in place.
 * 
 * Key Concepts:
 *   - Initialization: Setting the starting state before entering the loop.
 *   - Condition: The boolean expression that determines whether the loop continues.
 *   - Updation: Modifying the loop variable inside the body to progress toward termination.
 *   - Multiple While Loops: A single file can contain multiple independent while loops.
 * ============================================================
 */

let attempt = 0; // Init
while (attempt < 3) { // Condition
    console.log(attempt);
    attempt++; // Updation
}

let modi = 1;
while (modi <= 15) { // 1 to 15,Times -> 

    console.log("Modi will do 15+ years");
    modi++;

}

/*
================================================================================
                        COMPREHENSIVE EDUCATIONAL GUIDE
================================================================================

DETAILED EXPLANATION:
---------------------
This file provides detailed examples of the while loop, reinforcing the three
pillars of loop construction: initialization, condition, and update. It also
demonstrates that a single file can contain multiple, independent while loops,
each with its own counter and logic.

The first loop is a standard counter pattern, printing values 0, 1, and 2.
The second loop prints a motivational message 15 times, showing that the loop
body can contain any code, not just printing the counter itself. These examples
illustrate that while loops are versatile and can be adapted to many scenarios.

STEP-BY-STEP CODE BREAKDOWN:
----------------------------
First Loop:
Step 1: let attempt = 0;
        - Initializes the counter variable before the loop starts.

Step 2: while (attempt < 3) { ... }
        - Condition: run as long as attempt is strictly less than 3.
        - Iterations: attempt = 0, 1, 2 (3 total).

Step 3: console.log(attempt);
        - Prints the counter value on each pass.

Step 4: attempt++;
        - Increments the counter to move toward termination.

Second Loop:
Step 1: let modi = 1;
        - A new, independent counter starting at 1.

Step 2: while (modi <= 15) { ... }
        - Condition: run as long as modi is less than or equal to 15.
        - Iterations: modi = 1 through 15 (15 total).

Step 3: console.log("Modi will do 15+ years");
        - Prints a fixed string on every iteration.

Step 4: modi++;
        - Increments the counter to eventually reach 16 and stop.

KEY CONCEPTS:
-------------
- Multiple Loops: A script can have any number of loops. Each loop must
  manage its own variables to avoid interference.
- Loop Independence: The variable "attempt" in the first loop has no effect
  on the variable "modi" in the second loop.
- Non-Counter Body: The loop body does not have to use the counter variable
  directly. The counter can simply control how many times an action repeats.
- Terminal Condition: The condition must eventually become false. This is
  achieved by ensuring the counter moves in the correct direction (increment
  for ascending loops, decrement for descending loops).

COMPARISON TABLE: Ascending vs Descending While Loops
----------------------------------------------------
| Aspect             | Ascending Loop          | Descending Loop            |
|--------------------|-------------------------|----------------------------|
| Initialization     | let i = 0               | let i = 10                 |
| Condition          | i < target              | i > 0                      |
| Update             | i++                     | i--                        |
| Use Case           | Counting up, indexing   | Count-downs, reverse scans |
| Termination          | i reaches target        | i reaches 0                |
| Typical Output       | 0, 1, 2, ...            | 10, 9, 8, ...              |

REAL-WORLD USE CASES:
---------------------
- First loop pattern: validating a user's password with a maximum of 3 attempts.
- Second loop pattern: sending a daily reminder notification for 15 days.
- Processing items from a queue until the queue is empty.
- Polling a server status every 5 seconds for up to 10 minutes.
- Generating a numbered list of 50 items for a report.

COMMON MISTAKES TO AVOID:
-------------------------
1. Reusing the same counter variable for two loops without re-initializing it.
   - Example: if attempt is 3 after the first loop, using it again without
     resetting would skip the second loop entirely.
2. Creating an infinite loop by forgetting the increment.
3. Using the wrong comparison operator. while (modi < 15) runs 14 times (1-14);
   while (modi <= 15) runs 15 times (1-15).
4. Initializing the counter inside the loop body. The initialization must be
   outside, or it will reset on every iteration.
5. Modifying the counter in multiple places inside a complex body, making the
  loop logic hard to follow and debug.

KEY TAKEAWAY:
-------------
Every while loop requires three things: a starting value, a stopping condition,
and a way to progress from start to stop. You can have many loops in one file,
but each must manage its own state carefully. Choose comparison operators that
exactly match your intended range, and always place the update statement in a
location where it executes on every iteration.

================================================================================
*/