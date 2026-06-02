/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Using the continue keyword to skip an iteration in a for loop.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - for (initialization; condition; increment): keyword
 *     Description: A loop that iterates while the condition is true, incrementing after each pass.
 *     Input: Takes an initialization expression, a condition expression, and an increment expression separated by semicolons.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped loop variable.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - if (condition): keyword
 *     Description: Conditionally executes code when the expression evaluates to true.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - continue: keyword
 *     Description: Skips the rest of the current loop iteration and proceeds to the next one.
 *     Input: No input required; used directly as a keyword statement.
 *     Return Type: void (keyword behavior) — does not return a value; alters loop control flow.
 *   - strict equality (===): operator
 *     Description: Checks if two values are equal in both value and type without type coercion.
 *     Input: Takes two operands (direct values, variables, or expressions) to compare.
 *     Return Type: boolean — returns true if the operands are equal in value and type, otherwise false.
 * 
 * Key Concepts:
 *   - continue Statement: Used inside loops to bypass the remaining code in the current iteration.
 *   - Skipped Iteration: When i equals 1, the console.log is skipped.
 *   - Loop Control: How to selectively process items within a repeating structure.
 * ============================================================
 */

/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Using the continue keyword to skip an iteration in a for loop.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - for (initialization; condition; increment): keyword
 *     Description: A loop that iterates while the condition is true, incrementing after each pass.
 *     Input: Takes an initialization expression, a condition expression, and an increment expression separated by semicolons.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped loop variable.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - if (condition): keyword
 *     Description: Conditionally executes code when the expression evaluates to true.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - continue: keyword
 *     Description: Skips the rest of the current loop iteration and proceeds to the next one.
 *     Input: No input required; used directly as a keyword statement.
 *     Return Type: void (keyword behavior) — does not return a value; alters loop control flow.
 *   - strict equality (===): operator
 *     Description: Checks if two values are equal in both value and type without type coercion.
 *     Input: Takes two operands (direct values, variables, or expressions) to compare.
 *     Return Type: boolean — returns true if the operands are equal in value and type, otherwise false.
 * 
 * Key Concepts:
 *   - continue Statement: Used inside loops to bypass the remaining code in the current iteration.
 *   - Skipped Iteration: When i equals 1, the console.log is skipped.
 *   - Loop Control: How to selectively process items within a repeating structure.
 * ============================================================
 */

for (let i = 0; i < 3; i++) {
    if (i === 1) continue;
    console.log(i);
}

/*
================================================================================
                        COMPREHENSIVE EDUCATIONAL GUIDE
================================================================================

DETAILED EXPLANATION:
---------------------
This file demonstrates the "continue" keyword, which is a flow-control
statement used exclusively inside loops. When JavaScript encounters continue,
it immediately stops the current iteration and jumps to the next one. In a
for loop, this means the increment expression still runs, and then the
condition is checked for the next pass.

The example loop iterates with i = 0, 1, and 2. When i equals 1, the if
statement triggers continue, which skips the console.log(i) for that iteration.
As a result, the output is 0, then (skipped 1), then 2. The continue statement
does not terminate the entire loop — that is what break does. It only bypasses
the remainder of the current iteration.

STEP-BY-STEP CODE BREAKDOWN:
----------------------------
Step 1: for (let i = 0; i < 3; i++) { ... }
        - Standard for loop running for i = 0, 1, 2.

Step 2: if (i === 1) continue;
        - Checks if the current value of i is strictly equal to 1.
        - When i is 1, the continue keyword executes.
        - What happens next:
          * The rest of the loop body (console.log) is SKIPPED for this pass.
          * Control jumps to the increment expression (i++), making i = 2.
          * The condition i < 3 is checked, and the loop continues with i = 2.

Step 3: console.log(i);
        - Executes for i = 0 (prints 0).
        - SKIPPED for i = 1 because continue bypassed it.
        - Executes for i = 2 (prints 2).

Final Output: 0, 2.

KEY CONCEPTS:
-------------
- continue Statement: Immediately ends the current loop iteration and proceeds
to the next one. Only works inside loops (for, while, do...while).
- break vs continue: break exits the ENTIRE loop permanently. continue only
skips the REST of the CURRENT iteration.
- For Loop Flow with continue: Initialization → Condition → Body → (continue
  jumps here) → Increment → Condition → ...
- Selective Processing: Use continue to filter out unwanted items during
  iteration without nesting the rest of the body inside a large if block.

COMPARISON TABLE: break vs continue
----------------------------------
| Feature            | break                          | continue                     |
|--------------------|--------------------------------|------------------------------|
| Scope              | Exits the entire loop          | Skips to next iteration      |
| Usable In          | Loops and switch statements    | Loops only                   |
| Increment Runs?    | N/A (loop ends)                | Yes (in for loops)           |
| Common Use         | Found target, stop searching   | Skip invalid/undesired item  |
| Output Effect      | Stops all further output       | Only skips current output    |
| Nested Loops       | Can break out of labeled loops | Only affects innermost loop  |

COMPARISON TABLE: Loop Control Keywords
----------------------------------------
| Keyword    | Effect on Current Iteration | Effect on Loop          | Use Case                  |
|------------|-----------------------------|-------------------------|---------------------------|
| continue   | Skips remaining body code   | Moves to next iteration | Filter out unwanted items |
| break      | Stops immediately           | Exits loop completely   | Found target early        |
| return     | Stops immediately           | Exits entire function   | Exit function with value  |

REAL-WORLD USE CASES:
---------------------
- Skipping Even Numbers: Iterate 1 to 100, use continue to skip evens and
  process only odd numbers.
- Filtering API Results: Loop through an array of users, and use continue to
  skip inactive users while processing active ones.
- Skipping Header Rows: When parsing a CSV file, use continue to skip the
  first row (column names) before processing data rows.
- Ignoring Empty Inputs: In a form validation loop, continue past fields that
  the user left blank if they are optional.
- Retry with continue: In a batch processing loop, if one item fails but the
  rest should still be processed, continue to the next item instead of crashing.

COMMON MISTAKES TO AVOID:
-------------------------
1. Using continue outside of a loop. It is a SyntaxError at the top level.
2. Confusing continue with break. break stops everything; continue just skips
   the rest of the current pass.
3. Forgetting that in a for loop, the increment still runs after continue.
   If your increment depends on code after continue, you may skip updates.
4. Using continue to avoid writing clean logic. Sometimes restructuring your
   condition or filtering data before the loop is clearer than skipping inside it.
5. Nesting continue inside multiple loops without labels, which can make it
   unclear which loop is being advanced. Use labels only when absolutely necessary.

KEY TAKEAWAY:
-------------
Use continue when you want to selectively skip certain iterations without
stopping the entire loop. It is the loop equivalent of an early return inside
a function. Remember: continue skips the rest of the CURRENT iteration; break
stops the WHOLE loop. Choose wisely based on whether you want to keep going or
stop entirely.

================================================================================
*/

