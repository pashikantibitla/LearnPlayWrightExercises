/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Demonstrates that an if statement can execute a single statement without curly braces.
 *
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped variable.
 *     Input: Accepts a variable name and optionally an initial value assigned via direct value, variable, or expression.
 *     Return Type: void (declaration statement; does not return a value).
 *   - if
 *     Description: Conditional keyword that executes the next statement if the condition is true.
 *     Input: Accepts a boolean expression or any value coerced to boolean (direct value, variable, or expression).
 *     Return Type: void (control flow keyword; does not return a value).
 *   - console.log(value: any): void
 *     Description: Outputs a message to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - > (greater than operator)
 *     Description: Compares two values and returns true if the left value is greater than the right.
 *     Input: Accepts two operands (direct values, variables, or expressions) to compare.
 *     Return Type: boolean — returns true or false.
 *
 * Key Concepts:
 *   - Single-Line if Statement: JavaScript allows omitting curly braces {} when the if body contains only one statement.
 *   - Best Practice Note: While valid, omitting braces can lead to bugs during maintenance; braces are recommended for clarity.
 *   - Interview Relevance: Tests understanding of valid JavaScript syntax and statement blocks.
 * ============================================================
 */

let x = 10;
if (x > 5)
    console.log("x is big");
/*
================================================================================
                         COMPREHENSIVE EXPLANATION
================================================================================

DETAILED EXPLANATION:
This script demonstrates that JavaScript allows an if statement to execute a single
statement without curly braces. While valid syntax, it is generally discouraged in
production code because it increases the risk of bugs during maintenance.

CODE BREAKDOWN:
1. let x = 10;              — Declare and initialize x.
2. if (x > 5)               — Condition evaluates to true.
3.     console.log("x is big"); — The single statement executed because the condition is true.

KEY CONCEPTS:
• Statement vs Block: A block is wrapped in {}; a single statement is not required to be.
• Implied Block: The next statement after the if is treated as the body.
• Interview Trap: Many candidates assume braces are mandatory.

COMPARISON TABLE — Braces vs No Braces:
| Style          | Valid? | Risk Level | Recommendation         |
|----------------|--------|------------|------------------------|
| With braces    | Yes    | Low        | Always recommended     |
| Without braces | Yes    | High       | Avoid in real projects |

REAL-WORLD USE CASES:
• Quick debugging snippets.
• One-liner guard clauses (though modern linters still prefer braces).
• Code golf or minified code.

COMMON MISTAKES:
• Adding a second statement below the first, expecting it to also be conditional;
  only the immediate next statement is bound to the if.
• Misindenting the next line, causing visual confusion.

KEY TAKEAWAY:
Always use curly braces for if-else bodies, even when there is only one statement.
It prevents future bugs and makes the code easier to refactor.
================================================================================
*/
