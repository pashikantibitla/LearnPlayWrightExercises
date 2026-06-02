/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Switch statement without break — demonstrates fall-through behavior where
 *        execution continues through subsequent cases once a match is found.
 *
 * Functions/Methods Used:
 *   - console.log(message: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - let day: number
 *     Description: Declares a block-scoped variable named day and initializes it with a number value.
 *     Input: Receives a variable name and an optional initial value directly assigned via =.
 *     Return Type: undefined (no return; it binds a value to an identifier in the current scope).
 *
 * Built-in Methods/Keywords Used:
 *   - switch (expression)
 *     Description: Evaluates an expression and matches its value against case labels using strict equality (===).
 *     Input: Accepts an expression, variable, or direct value to evaluate and compare.
 *     Return Type: void (undefined) — does not return a value; controls program flow.
 *   - case value
 *     Description: Labels a block of code to execute when the switch expression strictly matches this value.
 *     Input: Receives a literal value, variable, or expression to compare against the switch expression.
 *     Return Type: void (undefined) — does not return a value; serves as a flow-control label.
 *   - default
 *     Description: Labels a block of code to execute when no case matches the switch expression.
 *     Input: No input required; used as a standalone keyword in a switch statement.
 *     Return Type: void (undefined) — does not return a value; serves as a fallback flow-control label.
 *
 * Key Concepts:
 *   - Fall-through behavior: When break is omitted, execution falls through to the next case block until break or the end of switch.
 *   - Strict equality matching: switch uses === (strict equality) to compare the expression with case values.
 *   - Default case: Executes when none of the case values match the switch expression.
 *   - console.log: Built-in method used to print output for demonstration.
 * ============================================================
 */

// Switch
// 0 - Sunday, 1 - Monday, 2 - Tue.....
let day = 2;
switch (day) {
    case 0:
        console.log("Sunday — Rest Day");
    case 1:
        console.log("Monday — Sprint Planning");
    case 2:
        console.log("Tuesday — Development");
    case 3:
        console.log("Wednesday — Code Review");
    case 4:
        console.log("Thursday — Testing");
    case 5:
        console.log("Friday — Deployment & Retro");
    case 6:
        console.log("Saturday — Rest Day");
    default:
        console.log("Invalid day value");
}
/*
================================================================================
                         COMPREHENSIVE EXPLANATION
================================================================================

DETAILED EXPLANATION:
This script demonstrates the switch statement's fall-through behavior when break is omitted.
Once a case matches, execution continues through all subsequent cases until the end of
the switch block or until a break is encountered.

CODE BREAKDOWN:
1. let day = 2;                        — The switch expression evaluates to 2.
2. case 0: ...                         — Skipped because day !== 0.
3. case 1: ...                         — Skipped because day !== 1.
4. case 2: console.log("Tuesday ...") — Matches; execution begins here.
5. case 3 through default              — All subsequent cases execute because there is no break.

KEY CONCEPTS:
• Fall-Through: Intentional or accidental execution into the next case.
• Strict Equality: switch uses === for matching.
• Default: Runs when no case matches; here it also runs after fall-through.

COMPARISON TABLE — With break vs Without break:
| Scenario            | Output for day = 2                     |
|---------------------|----------------------------------------|
| With break          | Only "Tuesday — Development"             |
| Without break       | Tuesday, Wed, Thu, Fri, Sat, + default |

REAL-WORLD USE CASES:
• Multi-step cumulative actions (e.g., "execute step 2 and all following steps").
• Season grouping (case 12, 1, 2 → Winter) where intentional fall-through is useful.
• Deliberate execution chaining in state machines.

COMMON MISTAKES:
• Forgetting break when you actually want only one case to run.
• Assuming switch behaves like if-else by default.
• Omitting break in the last case is harmless but inconsistent style.

KEY TAKEAWAY:
Omit break only when fall-through is intentional. Always document intentional fall-through
with a comment so future maintainers understand the design.
================================================================================
*/
