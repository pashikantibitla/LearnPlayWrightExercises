/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Common interview questions and edge cases involving for loop conditions.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - for (initialization; condition; increment): keyword
 *     Description: Executes a block of code repeatedly based on the condition.
 *     Input: Takes an initialization expression, a condition expression, and an increment expression separated by semicolons.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped variable for the loop counter.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - if / else: keyword
 *     Description: Conditional statements that execute different blocks based on a boolean condition.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 * 
 * Key Concepts:
 *   - Condition Evaluation: If the initial condition is false, the loop body never executes.
 *   - Infinite Loop: Omitting the condition in a for loop creates an infinite loop.
 *   - Loop Scope: Variables declared with let inside a for loop are scoped to that loop.
 * ============================================================
 */

/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Common interview questions and edge cases involving for loop conditions.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - for (initialization; condition; increment): keyword
 *     Description: Executes a block of code repeatedly based on the condition.
 *     Input: Takes an initialization expression, a condition expression, and an increment expression separated by semicolons.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped variable for the loop counter.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - if / else: keyword
 *     Description: Conditional statements that execute different blocks based on a boolean condition.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 * 
 * Key Concepts:
 *   - Condition Evaluation: If the initial condition is false, the loop body never executes.
 *   - Infinite Loop: Omitting the condition in a for loop creates an infinite loop.
 *   - Loop Scope: Variables declared with let inside a for loop are scoped to that loop.
 * ============================================================
 */

// // for (let pramod = 0; pramod > 1; pramod++) {
// //     console.log(pramod);
// // }

// // for (let pramod = 0; ; pramod++) {
// //     console.log(pramod);
// // }


// for (let somya = 0; somya < 18; somya++) {
//     if (somya > 15) {
//         console.log("Gift from papa, iphone this year")
//     } else {
//         console.log("No Gift,only barbie doll")
//     }
// }

for (let i = 0; i < 1; i++) {
    console.log(i);
}

/*
================================================================================
                        COMPREHENSIVE EDUCATIONAL GUIDE
================================================================================

DETAILED EXPLANATION:
---------------------
This file covers common interview questions and edge cases involving for loop
conditions. Understanding these edge cases is critical because interviewers
often use them to test whether a candidate truly understands loop mechanics
or has merely memorized the syntax.

The active code demonstrates a loop that runs exactly once because the
condition becomes false immediately after the first iteration. The commented-
out sections show other important scenarios: a loop that never runs (initial
condition false), an infinite loop (missing condition), and a loop containing
conditional logic (if/else inside the loop body).

STEP-BY-STEP CODE BREAKDOWN:
----------------------------
Step 1: // Commented-out: for (let pramod = 0; pramod > 1; pramod++)
        - Initial value 0 is NOT greater than 1.
        - The condition evaluates to false immediately.
        - Result: the loop body NEVER executes (0 iterations).
        - This is a classic interview trap question.

Step 2: // Commented-out: for (let pramod = 0; ; pramod++)
        - The condition expression is completely omitted.
        - In JavaScript, a missing condition is treated as always true.
        - Result: INFINITE LOOP. The program will print forever unless stopped.
        - Never write this unless you have a break statement inside.

Step 3: // Commented-out: for with if/else inside
        - Shows that loops can contain any valid JavaScript, including
          conditional statements, other loops, function calls, etc.
        - The inner if/else runs on every iteration.

Step 4: for (let i = 0; i < 1; i++) { console.log(i); }
        - Initialization: i = 0.
        - Check condition: 0 < 1 is true → execute body.
        - Body: prints 0.
        - Increment: i becomes 1.
        - Check condition: 1 < 1 is false → loop ends.
        - Total output: exactly one line showing "0".

KEY CONCEPTS:
-------------
- Zero-Iteration Loop: If the initial condition is false, the body is skipped
  entirely. The initialization still runs, but the body and increment do not.
- Infinite Loop: A loop whose condition never becomes false. Omitting the
  condition in a for loop, or never updating the counter, are common causes.
- Nested Logic: Control structures (if, switch, other loops) can be placed
  inside any loop body to create complex decision trees.
- Scope Isolation: Variables declared with let inside a for loop header are
  scoped to that loop and do not interfere with variables of the same name
  outside the loop.

COMPARISON TABLE: Loop Condition Edge Cases
--------------------------------------------
| Scenario                     | Condition        | Iterations | Output         |
|------------------------------|------------------|------------|----------------|
| Normal loop                  | i < 5            | 5          | 0,1,2,3,4      |
| Zero iterations              | i > 1 (i starts 0)| 0         | (nothing)      |
| Single iteration             | i < 1            | 1          | 0              |
| Infinite loop                | omitted          | Infinite   | 0,1,2,3...     |
| Never enters (wrong start)   | i < 0 (i starts 5)| 0         | (nothing)      |

REAL-WORLD USE CASES:
---------------------
- Zero-iteration loops occur naturally when filtering data: if an array is
  empty, the loop simply does nothing and the program continues safely.
- Understanding infinite loops helps you debug frozen applications and
  implement safeguards like maximum retry counts.
- Single-iteration loops are sometimes used deliberately to create a local
  scope block without using an IIFE (Immediately Invoked Function Expression).
- Interviewers use these edge cases to distinguish between surface-level
  knowledge and deep understanding of control flow.

COMMON MISTAKES TO AVOID:
-------------------------
1. Assuming a loop always runs at least once. Unlike do...while, a for loop
   checks its condition BEFORE the first iteration.
2. Creating infinite loops by accidentally omitting the condition or the
   increment. Always trace through the first few iterations mentally.
3. Using an inappropriate comparison operator. i < 1 runs once; i <= 1 runs
   twice. Be deliberate about inclusivity.
4. Declaring the counter with var and then creating closures inside the loop,
   which causes all closures to share the same final value due to function scope.
5. Writing complex nested logic without braces, which leads to bugs when
   adding more statements later.

KEY TAKEAWAY:
-------------
A for loop checks its condition BEFORE every single iteration, including the
first. If the condition starts false, the body never runs. If the condition
never becomes false, the loop runs forever. Always trace your loop's first
and last iteration to confirm it behaves exactly as intended.

================================================================================
*/