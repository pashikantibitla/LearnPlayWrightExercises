/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Using if-else-if to handle different HTTP/API status codes and print appropriate messages.
 *
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped variable.
 *     Input: Accepts a variable name and optionally an initial value assigned via direct value, variable, or expression.
 *     Return Type: void (declaration statement; does not return a value).
 *   - if / else if / else
 *     Description: Conditional keywords that check multiple exclusive conditions.
 *     Input: Accepts a boolean expression or any value coerced to boolean (direct value, variable, or expression).
 *     Return Type: void (control flow keywords; do not return a value).
 *   - console.log(value: any): void
 *     Description: Outputs a message to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - === (strict equality operator)
 *     Description: Compares two values for equality without type coercion.
 *     Input: Accepts two operands (direct values, variables, or expressions) to compare.
 *     Return Type: boolean — returns true if equal, otherwise false.
 *
 * Key Concepts:
 *   - Status Code Handling: Simulates API response handling by branching on numeric status codes.
 *   - Fallback Handling: The final else block acts as a catch-all for unmatched status codes.
 *   - Exclusive Branching: Only one branch executes, making it suitable for mutually exclusive states.
 * ============================================================
 */

let statusCode = 200;

if (statusCode === 200) {
    console.log("API are working fine!")
} else if (statusCode === 404) {
    console.log("API not found!")
} else {
    console.log("Not status code match!")
}

/*

*/
/*
================================================================================
                         COMPREHENSIVE EXPLANATION
================================================================================

DETAILED EXPLANATION:
This script mimics handling HTTP/API response status codes with an if-else-if ladder.
It maps specific numeric codes to human-friendly messages and provides a fallback
for any unexpected code.

CODE BREAKDOWN:
1. let statusCode = 200;                — Simulated API response.
2. if (statusCode === 200) { ... }     — Success path.
3. else if (statusCode === 404) { ... } — Not-found path.
4. else { ... }                         — Catch-all for unlisted codes.

KEY CONCEPTS:
• Status Code Handling: A common pattern in fetch/axios callbacks.
• Fallback Logic: The final else ensures graceful degradation.
• Strict Equality === : Safer than == because it avoids type coercion.

COMPARISON TABLE — Common HTTP Status Codes:
| Code | Meaning        | Typical Action            |
|------|----------------|---------------------------|
| 200  | OK             | Proceed with data         |
| 201  | Created        | Confirm resource creation |
| 400  | Bad Request    | Validate client input   |
| 401  | Unauthorized   | Prompt for login          |
| 403  | Forbidden      | Deny access               |
| 404  | Not Found      | Show missing page message |
| 500  | Server Error   | Retry or contact support  |

REAL-WORLD USE CASES:
• Front-end fetch error boundaries.
• Retry logic in API clients.
• Health-check monitoring dashboards.

COMMON MISTAKES:
• Using == instead of ===; statusCode may accidentally match a string "200".
• Omitting the default else and leaving unknown codes silent.
• Hard-coding messages; in production, use a centralized error dictionary.

KEY TAKEAWAY:
Always provide a default branch when handling external data. Use strict equality
to avoid subtle type-coercion bugs, especially with numeric status codes.
================================================================================
*/
