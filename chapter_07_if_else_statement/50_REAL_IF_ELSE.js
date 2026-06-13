/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Nested if-else statements to simulate a real-world role-based access control system.
 *
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped variable.
 *     Input: Accepts a variable name and optionally an initial value assigned via direct value, variable, or expression.
 *     Return Type: void (declaration statement; does not return a value).
 *   - if / else if / else
 *     Description: Conditional keywords for executing code based on boolean conditions.
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
 *   - Nested Conditionals: An outer if-else checks login status, and inner conditionals check user roles.
 *   - Role-Based Access Control (RBAC): Different messages/actions for admin, editor, viewer, and guest roles.
 *   - Boolean Variables: The isLoggedIn boolean acts as a gatekeeper for the nested logic.
 *   - Strict Equality (===): Ensures exact match of value and type when comparing userRole strings.
 * ============================================================
 */

// let age = 18;

// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// }

// app.vwo.com -> viewer, editor or admin -> 


let isLoggedIn = true;
let userRole = "XYZ";

if (isLoggedIn) {

    if (userRole === "admin") {
        console.log("admin can do all the things");
    }
    else if (userRole === "editor") {
        console.log("Welcome Editor — Edit access granted.");
    } else if (userRole === "viewer") {
        console.log("Welcome Viewer — Read-only access.");
    } else {
        console.log("No idea you may be a guest! role");
    }


} else {
    console.log("You are not logged in!!");
}
/*
================================================================================
                         COMPREHENSIVE EXPLANATION
================================================================================

DETAILED EXPLANATION:
This script simulates a real-world Role-Based Access Control (RBAC) system using
nested if-else statements. First it checks if the user is logged in; if true,
it further inspects the user's role to decide what access to grant.

CODE BREAKDOWN:
1. let isLoggedIn = true;          — Boolean gatekeeper.
2. let userRole = "XYZ";           — The role string to evaluate.
3. Outer if (isLoggedIn) { ... }   — If false, prints "You are not logged in!!".
4. Inner if-else if-else            — Matches userRole against "admin", "editor", "viewer",
                                    or defaults to a guest message.

KEY CONCEPTS:
• Nested Conditionals: One conditional placed inside another.
• Gatekeeper Pattern: The outer boolean stops deeper evaluation if false.
• Strict Equality === : Compares both value and type, preventing type coercion bugs.

COMPARISON TABLE — Role vs Access:
| Role    | Access Level                     |
|---------|----------------------------------|
| admin   | Full control                     |
| editor  | Edit permissions                 |
| viewer  | Read-only                        |
| other   | Guest / unknown                  |

REAL-WORLD USE CASES:
• Dashboard navigation (show/hide menus based on role).
• API permission middleware (admin vs user endpoints).
• Content management systems (WordPress, Drupal).

COMMON MISTAKES:
• Using = instead of === inside the role check.
• Forgetting the outer else, causing undefined behavior for logged-out users.
• Deep nesting beyond 2-3 levels hurts readability; consider switch or lookup objects.

KEY TAKEAWAY:
Use nested if-else for hierarchical decisions. Keep nesting shallow; if it gets too
deep, refactor into functions or a switch statement.
================================================================================
*/
