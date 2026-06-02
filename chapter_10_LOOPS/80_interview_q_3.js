/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Edge case do...while loop where the condition is false after the first execution.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - do...while (condition): keyword
 *     Description: Runs the body once, then repeats only while the condition is true.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped variable.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - decrement operator (--): operator
 *     Description: Decreases the variable value by 1.
 *     Input: Takes a single numeric variable (prefix or postfix).
 *     Return Type: number — returns the decremented value if used as an expression, otherwise modifies the variable in place.
 * 
 * Key Concepts:
 *   - Single Execution: Because i starts at 0 and becomes -1, the condition i > 0 is false immediately after the first run.
 *   - Post-test Behavior: The body executes before the condition is evaluated, guaranteeing at least one output.
 *   - Interview Edge Case: Demonstrates understanding that do...while always runs at least once.
 * ============================================================
 */

/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Edge case do...while loop where the condition is false after the first execution.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - do...while (condition): keyword
 *     Description: Runs the body once, then repeats only while the condition is true.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped variable.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - decrement operator (--): operator
 *     Description: Decreases the variable value by 1.
 *     Input: Takes a single numeric variable (prefix or postfix).
 *     Return Type: number — returns the decremented value if used as an expression, otherwise modifies the variable in place.
 * 
 * Key Concepts:
 *   - Single Execution: Because i starts at 0 and becomes -1, the condition i > 0 is false immediately after the first run.
 *   - Post-test Behavior: The body executes before the condition is evaluated, guaranteeing at least one output.
 *   - Interview Edge Case: Demonstrates understanding that do...while always runs at least once.
 * ============================================================
 */

let i = 0;
do {
    console.log(i);
    i--;
} while (i > 0);

/*
================================================================================
                        COMPREHENSIVE EDUCATIONAL GUIDE
================================================================================

DETAILED EXPLANATION:
---------------------
This file explores a subtle but important edge case with do...while loops:
what happens when the condition becomes false immediately after the first
execution? Understanding this edge case proves that you grasp the difference
between pre-test and post-test loops at a deep level.

The variable "i" starts at 0. The body of the do...while executes once,
printing 0 and then decrementing i to -1. After the body finishes, the
condition i > 0 is evaluated. Because -1 is not greater than 0, the condition
is false and the loop terminates. The final output is exactly one line: "0".

If this were a while loop, the body would never execute at all because the
condition 0 > 0 is false from the very beginning. This single-execution
behavior is the defining characteristic of do...while and a favorite topic
in technical interviews.

STEP-BY-STEP CODE BREAKDOWN:
----------------------------
Step 1: let i = 0;
        - Initializes i to 0.
        - This value is chosen specifically so that the condition i > 0
          starts as false, yet the body still executes once.

Step 2: do { ... } while (i > 0);
        - Guarantees that the body runs before any condition check.

Step 3: console.log(i);
        - Prints the value of i BEFORE it is modified.
        - Output on the first (and only) pass: 0.

Step 4: i--;
        - Decrements i from 0 to -1.
        - Now i is even further from satisfying the condition.

Step 5: while (i > 0);
        - Evaluates -1 > 0, which is false.
        - Loop ends immediately.
        - Total iterations: exactly 1.

KEY CONCEPTS:
-------------
- Guaranteed First Execution: The do...while loop body always runs at least
  once, no matter what the initial values are.
- Post-test Evaluation: The condition is only relevant for deciding whether
  to run a SECOND time, not the first.
- Decrement into Negatives: In JavaScript, numeric variables can go below
  zero. There is no automatic clamping to zero or positive values.
- Interview Edge Case: This exact pattern is used by interviewers to test
  whether candidates understand loop mechanics beyond memorized syntax.

COMPARISON TABLE: while vs do...while with Initial Condition False
-------------------------------------------------------------------
| Loop Type   | Initial Value | Condition | Body Runs? | Total Output    |
|-------------|---------------|-----------|------------|-----------------|
| while       | i = 0         | i > 0     | No (0 times)| (nothing)       |
| do...while  | i = 0         | i > 0     | Yes (1 time)| 0               |
| while       | i = 5         | i > 0     | Yes (5 times)| 5,4,3,2,1      |
| do...while  | i = 5         | i > 0     | Yes (5 times)| 5,4,3,2,1      |

REAL-WORLD USE CASES:
---------------------
- Interview Screening: This exact question is commonly asked to filter
  candidates who understand execution order from those who merely guess.
- Debugging Infinite Loops: Understanding post-test behavior helps you trace
  why a loop ran one more or one fewer times than expected.
- Algorithm Analysis: When analyzing Big-O complexity, knowing whether a
  loop body executes at least once affects your base-case calculations.
- Code Reviews: Senior developers watch for incorrect loop choices in code
  reviews, especially when a guaranteed first execution is logically required.

COMMON MISTAKES TO AVOID:
-------------------------
1. Answering "0 iterations" for this do...while question in an interview.
   The correct answer is ALWAYS at least 1 iteration.
2. Thinking that a false initial condition somehow "skips" the do...while body.
   Nothing skips the body on the first pass.
3. Writing a do...when a while is more appropriate, just because you are
   trying to force the "guaranteed execution" feature where it isn't needed.
4. Forgetting that i-- after 0 produces -1, not 0 or NaN. Signed integers
   continue smoothly into negative territory.
5. Assuming the condition is checked before the first iteration, which is
   the behavior of while and for, NOT do...while.

KEY TAKEAWAY:
-------------
The defining feature of do...while is that the condition is checked AFTER the
body, not before. This means the body always executes at least once, even if
the initial state would have failed a pre-test condition. In interviews and
in real debugging, never forget this fundamental rule: do...while guarantees
one execution; while and for do not.

================================================================================
*/