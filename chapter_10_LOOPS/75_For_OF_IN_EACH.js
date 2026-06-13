/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Introduction to the while loop as a pre-test repetition structure.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - while (condition): keyword
 *     Description: A loop that evaluates the condition before each iteration; runs only while true.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped variable.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - increment operator (++): operator
 *     Description: Increases a numeric variable by 1.
 *     Input: Takes a single numeric variable (prefix or postfix).
 *     Return Type: number — returns the incremented value if used as an expression, otherwise modifies the variable in place.
 * 
 * Key Concepts:
 *   - Pre-test Loop: The condition is checked before the loop body executes.
 *   - Initialization: The loop variable must be initialized before the while statement.
 *   - Update: The loop variable must be updated inside the body to avoid infinite loops.
 * ============================================================
 */

/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Introduction to the while loop as a pre-test repetition structure.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - while (condition): keyword
 *     Description: A loop that evaluates the condition before each iteration; runs only while true.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped variable.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - increment operator (++): operator
 *     Description: Increases a numeric variable by 1.
 *     Input: Takes a single numeric variable (prefix or postfix).
 *     Return Type: number — returns the incremented value if used as an expression, otherwise modifies the variable in place.
 * 
 * Key Concepts:
 *   - Pre-test Loop: The condition is checked before the loop body executes.
 *   - Initialization: The loop variable must be initialized before the while statement.
 *   - Update: The loop variable must be updated inside the body to avoid infinite loops.
 * ============================================================
 */

// We will cover this with the arrays concept. let attempt = 0; // Init

while (attempt < 3) {

    console.log(attempt);

    attempt++;

}

/*
================================================================================
                        COMPREHENSIVE EDUCATIONAL GUIDE
================================================================================

DETAILED EXPLANATION:
---------------------
This file introduces the "while" loop, which is classified as a pre-test
repetition structure. In a pre-test loop, the condition is evaluated BEFORE
each iteration of the loop body. This means the body might execute zero times
if the condition is initially false.

The code demonstrates a classic pattern: initialization, condition, and
update. The variable "attempt" starts at 0, and the loop continues as long
as attempt is less than 3. Inside the loop, the current value is printed, and
then the counter is incremented. When attempt reaches 3, the condition fails
and the loop terminates.

Note: Despite the file name suggesting for...of and for...in, this file is
actually focused on the while loop, which is the foundational concept before
learning those variants.

STEP-BY-STEP CODE BREAKDOWN:
----------------------------
Step 1: // We will cover this with the arrays concept. let attempt = 0;
        - A comment noting that this pattern will be revisited with arrays.
        - Declares a mutable variable "attempt" and initializes it to 0.
        - This initialization MUST happen before the while statement.

Step 2: while (attempt < 3) { ... }
        - The while keyword evaluates the condition (attempt < 3).
        - If true, the block inside the curly braces executes.
        - If false, the loop ends and control moves to the next statement
          after the closing brace.

Step 3: console.log(attempt);
        - Prints the current value of the attempt variable.
        - First pass: 0. Second pass: 1. Third pass: 2.

Step 4: attempt++;
        - Increments the attempt variable by 1.
        - This update is critical; without it, attempt would remain 0 forever
          and the loop would never terminate (infinite loop).

KEY CONCEPTS:
-------------
- Pre-test Loop: The condition is tested at the TOP of the loop, before the
  body executes. Contrast this with do...while, which tests at the bottom.
- Initialization: The loop variable must be set to a starting value before
  the loop begins. There is no built-in initialization clause in while.
- Update (Updation): The loop variable must be modified inside the body to
  ensure progress toward the termination condition.
- Counter Pattern: init → while (condition) → body → update → repeat.
- Infinite Loop Risk: Because while has no automatic increment, forgetting
  to update the variable inside the body is a very common bug.

COMPARISON TABLE: for vs while
-------------------------------
| Feature            | for Loop                    | while Loop                 |
|--------------------|-----------------------------|----------------------------|
| Best For           | Known iteration count       | Unknown iteration count    |
| Structure          | Init, condition, increment  | Condition only (at top)    |
| Variable Scope     | Counter scoped to loop      | Counter declared before    |
| Readability        | Compact for counting        | Clear for complex logic    |
| Flexibility        | Less flexible structure     | More flexible structure    |
| Risk of Infinite   | Low (if increment present)  | High (easy to forget update)|

REAL-WORLD USE CASES:
---------------------
- Reading data from a stream until the stream ends (unknown number of items).
- Polling an API endpoint until a job is complete.
- Waiting for user input that meets specific validation criteria.
- Implementing a game loop that runs while the player is alive.
- Retrying a network request until it succeeds or a max limit is reached.

COMMON MISTAKES TO AVOID:
-------------------------
1. Forgetting to initialize the loop variable before the while statement.
2. Forgetting to update the loop variable inside the body → INFINITE LOOP.
3. Using a condition that is immediately false, then wondering why nothing
   happened (while loops are pre-test, so they can run zero times).
4. Off-by-one errors in the condition, e.g., while (attempt <= 3) gives 4
   iterations (0, 1, 2, 3) instead of 3.
5. Using while when a for loop would be clearer and less error-prone, simply
   because you are more comfortable with while.

KEY TAKEAWAY:
-------------
The while loop is your go-to structure when you do not know in advance how
many times you need to repeat an action. Remember the three responsibilities:
initialize before the loop, check the condition at the top, and update inside
the body. Miss any one of these, and your loop will fail or run forever.

================================================================================
*/

