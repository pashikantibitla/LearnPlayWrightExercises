/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Count-down logic using a while loop and decrement operator.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - while (condition): keyword
 *     Description: Repeats code while the specified boolean condition evaluates to true.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a mutable, block-scoped variable.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - decrement operator (--): operator
 *     Description: Decreases the numeric value by 1 after evaluation.
 *     Input: Takes a single numeric variable (prefix or postfix).
 *     Return Type: number — returns the decremented value if used as an expression, otherwise modifies the variable in place.
 * 
 * Key Concepts:
 *   - Count-down: A loop that starts high and decrements toward a lower bound.
 *   - Loop Termination: The condition i > 0 ensures the loop stops when i reaches 0.
 *   - Pre-test Loop: The condition is checked before every iteration, including the first.
 * ============================================================
 */

/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Count-down logic using a while loop and decrement operator.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - while (condition): keyword
 *     Description: Repeats code while the specified boolean condition evaluates to true.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a mutable, block-scoped variable.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - decrement operator (--): operator
 *     Description: Decreases the numeric value by 1 after evaluation.
 *     Input: Takes a single numeric variable (prefix or postfix).
 *     Return Type: number — returns the decremented value if used as an expression, otherwise modifies the variable in place.
 * 
 * Key Concepts:
 *   - Count-down: A loop that starts high and decrements toward a lower bound.
 *   - Loop Termination: The condition i > 0 ensures the loop stops when i reaches 0.
 *   - Pre-test Loop: The condition is checked before every iteration, including the first.
 * ============================================================
 */

let i = 5;
while (i > 0) {
    console.log(i);
    i--;
}

/*
================================================================================
                        COMPREHENSIVE EDUCATIONAL GUIDE
================================================================================

DETAILED EXPLANATION:
---------------------
This file demonstrates count-down logic using a while loop and the decrement
operator (--). Count-downs are just as common as count-ups in programming.
They are used in timers, reverse iterations, pagination going backward, and
many algorithmic problems. Understanding how to write a descending loop is a
fundamental skill.

The loop starts with i = 5 and continues as long as i is strictly greater
than 0. On each iteration, it prints the current value of i and then decrements
it by 1. When i becomes 0, the condition i > 0 is false, and the loop ends.
The output is a clean count-down: 5, 4, 3, 2, 1.

STEP-BY-STEP CODE BREAKDOWN:
----------------------------
Step 1: let i = 5;
        - Initializes the loop variable to the starting (highest) value.
        - This is the opposite direction of a typical count-up loop.

Step 2: while (i > 0) { ... }
        - Pre-test condition: checks if i is greater than 0 before each pass.
        - When i is 5, 4, 3, 2, or 1, the condition is true.
        - When i becomes 0, the condition is false and the loop stops.

Step 3: console.log(i);
        - Prints the current value of i.
        - Sequence of outputs: 5, 4, 3, 2, 1.

Step 4: i--;
        - Post-decrement: subtracts 1 from i after its current value is used.
        - On the last meaningful iteration, i is 1 (printed), then becomes 0.

KEY CONCEPTS:
-------------
- Count-down Pattern: Initialize high, check "greater than" boundary,
  decrement inside the body. This is the mirror image of the count-up pattern.
- Decrement Operator (--): Subtracts 1 from a numeric variable. Like its
  counterpart ++, it can be used as postfix (i--) or prefix (--i).
- Boundary Condition: i > 0 means the loop stops at 0 and does not print it.
  If you wanted to include 0, you would use i >= 0.
- Pre-test Behavior: The while loop checks the condition before every pass,
  including the first. If i started at 0, the body would never execute.

COMPARISON TABLE: Count-Up vs Count-Down
-----------------------------------------
| Aspect             | Count-Up (Ascending)   | Count-Down (Descending)      |
|--------------------|------------------------|------------------------------|
| Initialization     | let i = 0              | let i = 5                    |
| Condition          | i < max                | i > min                      |
| Update             | i++                    | i--                          |
| Direction          | Toward higher numbers  | Toward lower numbers         |
| Common Use         | Array indexing         | Timers, reverse iteration    |
| Output Example       | 0, 1, 2, 3, 4, 5       | 5, 4, 3, 2, 1                |
| Off-by-one Risk    | Using <= vs <          | Using >= vs >                |

REAL-WORLD USE CASES:
---------------------
- Rocket Launch Timer: Counting down from 10 to "Lift off!"
- Session Timeout: Decrementing a remaining-time counter every second.
- Reverse String Processing: Iterating from the last character to the first.
- Undo/Redo Stacks: Processing the most recent actions first (LIFO order).
- Pagination: Moving from the last page of results toward the first.
- Slot Machine / Game Animations: Spinning reels that slow down from fast
to stopped.

COMMON MISTAKES TO AVOID:
-------------------------
1. Using i < 0 as the condition when counting down from a positive number.
   That would be immediately false and the loop would never run.
2. Forgetting to decrement (using i++ instead of i--), which creates an
   infinite loop because the counter moves away from the termination condition.
3. Using >= when you meant >, which causes the loop to include a value you
   wanted to exclude (e.g., printing 0 when you only wanted 5 through 1).
4. Initializing to a negative number and counting down further, which may
   run far more iterations than intended if the condition is not carefully set.
5. Using the decrement operator inside a complex expression without
   understanding the difference between prefix (--i) and postfix (i--) behavior.

KEY TAKEAWAY:
-------------
Count-down loops follow the exact same logic as count-up loops, just in
reverse. Initialize at the top, check a "greater than" boundary, and decrement
the counter on each pass. Be extra careful with your comparison operator:
use > when you want to stop before reaching the boundary, and >= when you
want to include it.

================================================================================
*/