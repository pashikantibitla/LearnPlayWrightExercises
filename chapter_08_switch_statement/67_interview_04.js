/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Strict equality (===) behavior in switch statements — demonstrates that
 *        switch uses strict equality, so type and value must both match (no type coercion).
 *
 * Functions/Methods Used:
 *   - console.log(message: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - typeof operand: string
 *     Description: Unary operator that returns a string indicating the type of the given operand.
 *     Input: Accepts a variable, literal value, or expression as its single operand.
 *     Return Type: string — returns one of the predefined type names (e.g., "string", "number", "boolean", "undefined", "object", "function", "symbol", "bigint").
 *   - let value: string / let status: number
 *     Description: Declares block-scoped variables and initializes them with specific values.
 *     Input: Receives a variable name and an optional initial value directly assigned via =.
 *     Return Type: undefined (no return; it binds a value to an identifier in the current scope).
 *
 * Built-in Methods/Keywords Used:
 *   - switch (expression)
 *     Description: Evaluates the expression and matches its value against case labels using strict equality (===).
 *     Input: Accepts an expression, variable, or direct value to evaluate and compare.
 *     Return Type: void (undefined) — does not return a value; controls program flow.
 *   - case value
 *     Description: Labels a block of code to execute when the switch expression strictly matches this value and type.
 *     Input: Receives a literal value, variable, or expression to compare against the switch expression.
 *     Return Type: void (undefined) — does not return a value; serves as a flow-control label.
 *   - break
 *     Description: Immediately exits the nearest enclosing switch, loop, or labeled statement.
 *     Input: No input required; used as a standalone keyword.
 *     Return Type: void (undefined) — does not return a value; only alters control flow.
 *   - typeof operand
 *     Description: Unary operator that returns a string indicating the type of the operand.
 *     Input: Accepts a variable, literal value, or expression as its single operand.
 *     Return Type: string — returns one of the predefined type names (e.g., "string", "number", "boolean", "undefined", "object", "function", "symbol", "bigint").
 *
 * Key Concepts:
 *   - Strict equality in switch: The switch statement compares the expression to case values using ===, not ==.
 *   - Type sensitivity: A string "5" will not match a number 5, and a number 0 will not match boolean false.
 *   - typeof operator: Used here to inspect and confirm the runtime type of variables before switching.
 *   - console.log: Used to print the typeof results and the matched case messages.
 * ============================================================
 */

let value = "5";
console.log(typeof value);

switch (value) {
    case 5:
        console.log("Number 5 matched");
        break;
    case "5":
        console.log("String '5' matched");
        break;
}

let status = 0;
console.log(typeof status)
switch (status) {
    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("0 matched");
        break;
}

/*
================================================================================
                         COMPREHENSIVE EXPLANATION
================================================================================

DETAILED EXPLANATION:
This script highlights that JavaScript switch statements use strict equality (===)
for comparison, not loose equality (==). Therefore, a string "5" will not match
a numeric case 5, and the number 0 will not match the boolean false.

CODE BREAKDOWN:
1. let value = "5";                — A string.
2. console.log(typeof value);      — Confirms "string".
3. switch (value) { case 5: ... case "5": ... }
   — case 5 (number) does NOT match.
   — case "5" (string) DOES match.
4. let status = 0;                 — A number.
5. console.log(typeof status);     — Confirms "number".
6. switch (status) { case false: ... case 0: ... }
   — case false (boolean) does NOT match.
   — case 0 (number) DOES match.

KEY CONCEPTS:
• Strict Equality === : Checks both value and type.
• typeof Operator: Returns the primitive type of a variable as a string.
• Type Coercion Avoidance: switch does not coerce types, unlike ==.

COMPARISON TABLE — == vs === vs switch:
| Expression          | Result | Reason                          |
|---------------------|--------|---------------------------------|
| "5" == 5            | true   | Loose equality coerces string   |
| "5" === 5           | false  | Strict equality, types differ   |
| switch("5") case 5: | false  | switch uses === internally      |
| 0 == false          | true   | Loose equality coerces boolean  |
| 0 === false         | false  | Strict equality, types differ   |
| switch(0) case false:| false | switch uses === internally      |

REAL-WORLD USE CASES:
• Validating API payloads where type safety matters.
• Parsing query parameters (always strings) against numeric constants.
• Feature flags where boolean and numeric 0/1 must be distinguished.

COMMON MISTAKES:
• Expecting "5" to match case 5 inside a switch.
• Using typeof incorrectly (e.g., typeof [] returns "object", not "array").
• Confusing 0, false, and "" because they are all falsy but distinct in strict equality.

KEY TAKEAWAY:
Always verify types when using switch. If inputs come from external sources (APIs, forms),
convert them to the expected type before switching, or ensure case labels match both
value and type precisely.
================================================================================
*/
