/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Comparing while and do...while loops; guaranteed first execution.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - while (condition): keyword
 *     Description: Pre-test loop that may execute zero times if the condition is initially false.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - do...while (condition): keyword
 *     Description: Post-test loop that always executes the body at least once before checking the condition.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped variable.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - increment operator (++): operator
 *     Description: Increases the variable value by 1.
 *     Input: Takes a single numeric variable (prefix or postfix).
 *     Return Type: number — returns the incremented value if used as an expression, otherwise modifies the variable in place.
 * 
 * Key Concepts:
 *   - Post-test Loop: The condition is evaluated after the loop body runs.
 *   - Guaranteed Execution: A do...while loop executes its body at least once, even if the condition is false.
 *   - Comments: Used here to show the equivalent while loop behavior.
 * ============================================================
 */

/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Comparing while and do...while loops; guaranteed first execution.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - while (condition): keyword
 *     Description: Pre-test loop that may execute zero times if the condition is initially false.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - do...while (condition): keyword
 *     Description: Post-test loop that always executes the body at least once before checking the condition.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped variable.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - increment operator (++): operator
 *     Description: Increases the variable value by 1.
 *     Input: Takes a single numeric variable (prefix or postfix).
 *     Return Type: number — returns the incremented value if used as an expression, otherwise modifies the variable in place.
 * 
 * Key Concepts:
 *   - Post-test Loop: The condition is evaluated after the loop body runs.
 *   - Guaranteed Execution: A do...while loop executes its body at least once, even if the condition is false.
 *   - Comments: Used here to show the equivalent while loop behavior.
 * ============================================================
 */

let a = 10;

// while (a < 10) {
//     console.log(a);
//     a++;
// }

do {
    console.log(a);
    a++;
} while (a < 10);

/*
================================================================================
                        COMPREHENSIVE EDUCATIONAL GUIDE
================================================================================

DETAILED EXPLANATION:
---------------------
This file compares the while loop and the do...while loop, highlighting the
critical distinction between pre-test and post-test repetition structures.

In the commented-out while loop, the condition (a < 10) is checked BEFORE the
body executes. Since "a" starts at 10, the condition is immediately false, so
the body never runs. In the active do...while loop, the condition is checked
AFTER the body executes. This means the body runs once, printing 10 and
incrementing "a" to 11, before the condition is evaluated. Because 11 is not
less than 10, the loop then terminates.

This single difference — when the condition is checked — is what makes
do...while unique and useful in specific scenarios.

STEP-BY-STEP CODE BREAKDOWN:
----------------------------
Step 1: let a = 10;
        - Initializes the variable "a" to 10.
        - This value is deliberately chosen so that the condition a < 10 is false.

Step 2: // while (a < 10) { ... }
        - Commented-out pre-test loop.
        - Condition: 10 < 10 is false.
        - Body: NEVER executes.
        - Output: nothing.

Step 3: do { ... } while (a < 10);
        - Active post-test loop.
        - Body executes FIRST:
          * console.log(a) prints 10.
          * a++ increments a to 11.
        - Condition is checked AFTER the body:
          * 11 < 10 is false.
          * Loop terminates.
        - Total output: exactly one line showing "10".

KEY CONCEPTS:
-------------
- Pre-test Loop (while): Condition evaluated before each iteration. The body
  may execute zero times.
- Post-test Loop (do...while): Condition evaluated after each iteration. The
  body always executes at least once.
- Guaranteed Execution: Use do...when you need to ensure an action happens
  at least one time, regardless of whether the condition starts true or false.
- Same Three Components: Like while, do...while requires initialization
  before the loop and an update inside the body.

COMPARISON TABLE: while vs do...while
--------------------------------------
| Feature                | while Loop              | do...while Loop          |
|------------------------|-------------------------|--------------------------|
| Condition Timing       | Before body (pre-test)  | After body (post-test)   |
| Minimum Executions     | 0                       | 1                        |
| Syntax Complexity      | Simpler                 | Slightly more verbose    |
| Best For               | Conditional repetition    | Guaranteed first action  |
| Common Use             | Validating before acting| Menu prompts, retries    |
| Infinite Loop Risk     | Same (forget update)      | Same (forget update)     |

REAL-WORLD USE CASES:
---------------------
- Menu Systems: Display a menu, process the user's choice, then ask if they
  want to continue. The menu must appear at least once.
- Data Validation: Prompt for input, then check if it meets criteria. The
  prompt must happen before the first check.
- Retry Logic: Attempt a network request, then decide whether to retry based
  on the response. The request must happen at least once.
- Game Rounds: Play at least one round of a game, then ask the player if they
  want to play again.
- Database Seeding: Execute a seeding script and then check if more batches
  are needed. The first batch always runs.

COMMON MISTAKES TO AVOID:
-------------------------
1. Using while when you actually need do...while, causing your menu or prompt
   to never appear because the initial condition is false.
2. Forgetting the semicolon after the while condition in a do...while loop.
   - Syntax: do { ... } while (condition);  <-- semicolon is required!
3. Assuming do...while checks the condition first and skipping the body when
   the initial condition is false.
4. Forgetting to update the loop variable inside a do...while, which also
   causes an infinite loop just like in a regular while loop.
5. Nesting do...while loops without clear indentation, making it hard to see
   which while belongs to which do.

KEY TAKEAWAY:
-------------
Choose while when you want to check a condition before doing anything.
Choose do...while when the action MUST happen at least once before you can
decide whether to repeat it. The only structural difference is the placement
of the condition, but that placement changes everything about how the loop
behaves on its first pass.

================================================================================
*/