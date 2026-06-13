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
This script is a follow-up exercise that repeats the logical AND login-gate pattern.
It reinforces the idea of combining multiple boolean conditions into a single if statement
to control access.

CODE BREAKDOWN:
(See 53_if_else_real_ex.js for the same breakdown.)
1. let username = "Dev";
2. let password = "secure123";
3. let isAccountLocked = true;
4. Compound if using && and strict equality.

KEY CONCEPTS:
• Reinforcement: Repeating a pattern helps solidify understanding.
• Logical AND && : All conditions must be truthy for the block to execute.
• Boolean Flag Semantics: Ensure the flag name and value align with the intended logic.

COMPARISON TABLE — Logical Operators:
| Operator | Name        | True When                         |
|----------|-------------|-----------------------------------|
| &&       | AND         | Both sides are true               |
| ||       | OR          | At least one side is true         |
| !        | NOT         | The operand is false              |

REAL-WORLD USE CASES:
• Login forms with username, password, and CAPTCHA.
• E-commerce checkout (items in cart AND address valid AND payment method set).
• Admin panel access (logged in AND has admin role).

COMMON MISTAKES:
• Copy-pasting logic without adjusting variable names or conditions.
• Inverting the boolean flag meaning (locked=true should deny, not allow).
• Missing parentheses around compound expressions.

KEY TAKEAWAY:
Repetition builds fluency. When you see the same pattern across files, focus on the
nuances that change (variable values, flag semantics) rather than the syntax.
================================================================================
*/
