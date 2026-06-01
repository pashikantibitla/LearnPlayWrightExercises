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