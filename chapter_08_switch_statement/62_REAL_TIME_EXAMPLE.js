/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Real-world switch statement example for API response code validation —
 *        demonstrates how switch can be used to handle different HTTP status codes.
 *
 * Functions/Methods Used:
 *   - console.log(message: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - let responseCode: number
 *     Description: Declares a block-scoped variable named responseCode and initializes it with a number value.
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
 *   - Practical application: switch is well-suited for mapping discrete values (e.g., HTTP status codes) to specific actions.
 *   - Break for isolation: Ensures only the matched case executes and prevents fall-through to other cases.
 *   - Default as fallback: Handles unexpected or unlisted status codes gracefully.
 *   - console.log: Used to simulate logging the meaning of a specific HTTP response code.
 * ============================================================
 */

// You are working API Validation
// response Code - 200, 404, 401, 403.....404


let responseCode = 404;

switch (responseCode) {

    case 200:
        console.log("200 Ok");
        break;
    case 404:
        console.log("404 Not found!");
        break;
    default:
        console.log("Not status code match");

}
/*
================================================================================
                         COMPREHENSIVE EXPLANATION
================================================================================

DETAILED EXPLANATION:
This script applies the switch statement to a real-world API validation scenario.
It maps HTTP response codes to specific log messages, using break to isolate each case
and a default branch for unrecognized codes.

CODE BREAKDOWN:
1. let responseCode = 404;           — Simulated HTTP status.
2. switch (responseCode) { ... }    — Evaluates responseCode.
3. case 200: console.log("200 Ok"); break;   — Success.
4. case 404: console.log("404 Not found!"); break; — Client error.
5. default: console.log("Not status code match");  — Unhandled code.

KEY CONCEPTS:
• Discrete Value Mapping: switch excels when values are exact and enumerable.
• Break for Isolation: Prevents unintended fall-through.
• Default Fallback: Guarantees a response even for unexpected codes.

COMPARISON TABLE — if-else vs switch for API Codes:
| Criteria          | if-else-if                     | switch                     |
|-------------------|--------------------------------|----------------------------|
| Matching style    | Boolean expressions            | Strict equality (===)      |
| Extensibility     | Easy to add ranges             | Easy to add new cases      |
| Performance       | Slightly slower (many checks)  | Often optimized by engine  |
| Readability       | Good for few branches          | Excellent for many codes   |

REAL-WORLD USE CASES:
• REST client error handling.
• Payment gateway response parsing.
• SMS / email delivery status mapping.

COMMON MISTAKES:
• Using a string case value when the variable is a number (or vice versa).
• Forgetting break after logging, causing multiple status messages.
• Omitting default and leaving 500-series errors silent.

KEY TAKEAWAY:
Use switch for clean, scalable mapping of known discrete values. Pair it with break
and default to keep the code safe and maintainable.
================================================================================
*/
