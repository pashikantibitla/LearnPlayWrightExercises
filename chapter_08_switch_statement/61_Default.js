/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Switch statement with break statements and a default case — demonstrates
 *        controlled execution flow and handling of unmatched values.
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
 *   - break
 *     Description: Immediately exits the nearest enclosing switch, loop, or labeled statement.
 *     Input: No input required; used as a standalone keyword.
 *     Return Type: void (undefined) — does not return a value; only alters control flow.
 *   - default
 *     Description: Labels a block of code to execute when no case matches the switch expression.
 *     Input: No input required; used as a standalone keyword in a switch statement.
 *     Return Type: void (undefined) — does not return a value; serves as a fallback flow-control label.
 *
 * Key Concepts:
 *   - Controlled flow with break: break stops execution after a matched case, preventing unintended fall-through.
 *   - Default case handling: Provides a fallback message or logic when the input value does not match any defined case.
 *   - Strict equality matching: switch comparisons are done with ===, so type and value must both match.
 *   - console.log: Used to display the message associated with the matched or default case.
 * ============================================================
 */

// Switch
// 0 - Sunday, 1 - Monday, 2 - Tue.....
let day = 10;
switch (day) {
    case 0:
        console.log("Sunday — Rest Day");
        break;
    case 1:
        console.log("Monday — Sprint Planning");
        break;
    case 2:
        console.log("Tuesday — Development");
        break;
    case 3:
        console.log("Wednesday — Code Review")
        break;
    case 4:
        console.log("Thursday — Testing");
        break;
    case 5:
        console.log("Friday — Deployment & Retro");
        break;
    case 6:
        console.log("Saturday — Rest Day");
        break;
    default:
        console.log("Invalid day value");
}
/*
================================================================================
                         COMPREHENSIVE EXPLANATION
================================================================================

DETAILED EXPLANATION:
This script shows the standard, safe way to write a switch statement: each case ends
with a break, and a default case handles any unmatched values. This prevents fall-through
and ensures graceful handling of unexpected input.

CODE BREAKDOWN:
1. let day = 10;                     — Expression to match.
2. case 0: ... break;                 — Sunday; break exits the switch.
3. case 1: ... break;                 — Monday; break exits.
...
4. default: console.log("Invalid day value"); — Runs because 10 is not 0-6.

KEY CONCEPTS:
• break: Immediately exits the nearest switch (or loop).
• default: The catch-all when no case matches.
• Strict Equality: day is compared to each case value using ===.

COMPARISON TABLE — if-else vs switch for Day Mapping:
| Approach     | Readability (7 cases) | Fall-Through Risk | Best For          |
|--------------|----------------------:|------------------:|-------------------|
| if-else-if   | Medium                | None              | Ranges, complex   |
| switch       | High                  | Yes (if no break) | Discrete values   |

REAL-WORLD USE CASES:
• Day-of-week routing in scheduling apps.
• Menu option selection in CLI tools.
• Mapping error codes to user-friendly messages.

COMMON MISTAKES:
• Forgetting break after a case, causing multiple messages.
• Using variable case values (switch evaluates case labels at compile time conceptually,
  though JS allows expressions in recent versions).
• Putting default at the top without break, which can block subsequent cases.

KEY TAKEAWAY:
Always include break in every case and a default at the end. This is the safest,
most readable pattern for switch statements.
================================================================================
*/
