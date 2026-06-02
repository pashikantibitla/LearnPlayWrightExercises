/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Combining logical operators with if-else to validate multiple conditions for access control.
 *
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped variable.
 *     Input: Accepts a variable name and optionally an initial value assigned via direct value, variable, or expression.
 *     Return Type: void (declaration statement; does not return a value).
 *   - if / else
 *     Description: Conditional keywords that execute blocks based on a boolean expression.
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
 *   - && (logical AND operator)
 *     Description: Returns true only if both operands are true; used here to combine multiple conditions.
 *     Input: Accepts two operands (direct values, variables, or expressions) to combine.
 *     Return Type: boolean — returns true if both operands are truthy, otherwise false.
 *
 * Key Concepts:
 *   - Logical AND (&&): Combines multiple boolean conditions; all must be true for the overall expression to be true.
 *   - Compound Conditions: Demonstrates checking username, password, and account lock status in a single if statement.
 *   - Access Control Logic: Simulates a real-world login gate that requires correct credentials and an unlocked account.
 * ============================================================
 */

let username = "Dev";
let password = "secure123";
let isAccountLocked = true;

// Logical operator + if-else statement

if ((username === "Dev" && password === "secure123") && isAccountLocked) {
    console.log("Allowed to enter");
} else {
    console.log("not allwed to enter");
}
/*
================================================================================
                         COMPREHENSIVE EXPLANATION
================================================================================

DETAILED EXPLANATION:
This script combines logical AND (&&) with an if-else statement to simulate a login gate.
A user is granted access only when the username, password, and account lock status all
satisfy the required conditions.

CODE BREAKDOWN:
1. let username = "Dev";                     — Hard-coded credential 1.
2. let password = "secure123";               — Hard-coded credential 2.
3. let isAccountLocked = true;               — Status flag (true = locked here).
4. if ((username === "Dev" && password === "secure123") && isAccountLocked) { ... }
   — All three sub-conditions must be true for entry.

KEY CONCEPTS:
• Logical AND && : Returns true only if both operands are truthy.
• Compound Condition: Multiple checks wrapped in one expression.
• Short-Circuiting: If the left side of && is false, the right side is not evaluated.

COMPARISON TABLE — Logical Operators:
| Operator | Name        | True When                         |
|----------|-------------|-----------------------------------|
| &&       | AND         | Both sides are true               |
| ||       | OR          | At least one side is true         |
| !        | NOT         | The operand is false              |

REAL-WORLD USE CASES:
• Multi-factor authentication checks.
• Form validation (all fields required).
• Feature toggles (feature enabled AND user has permission).

COMMON MISTAKES:
• Using a single & (bitwise AND) instead of &&.
• Forgetting parentheses, changing evaluation order.
• Confusing the lock flag (true = locked in this example, which denies access when combined
  incorrectly). Usually isAccountLocked should be false to allow entry.

KEY TAKEAWAY:
Group related conditions with parentheses and use && when every requirement must be met.
Double-check the semantics of boolean flags so true/false maps to the intended meaning.
================================================================================
*/
