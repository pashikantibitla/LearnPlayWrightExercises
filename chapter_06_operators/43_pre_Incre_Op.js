/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Pre-Increment Operator (++variable)
 * 
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped local variable, optionally initializing it to a value.
 *     Input: Accepts a variable name and an optional initial value as a direct value, variable, or expression.
 *     Return Type: void — the declaration does not return a value; it creates a variable binding in the current scope.
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - Template Literals (`...${...}...`)
 *     Description: Allows embedded expressions inside string literals using backticks for formatted output.
 *     Input: Accepts string content with embedded expressions as direct values, variables, or expressions inside ${}.
 *     Return Type: string — returns the evaluated string with interpolated values.
 * 
 * Key Concepts:
 *   - Pre-Increment (++a): Increments the variable value by 1 BEFORE the value is used in the expression.
 *   - Example: let b = ++a; first increments a to 11, then assigns 11 to b.
 *   - Standalone ++b: Increments b by 1 directly.
 * ============================================================
 */

// pre-increment value
let a = 10;
console.log(`the value of a is ${a}`);
let b = ++a ; // b=11
console.log(`the value of a is ${a}, the value of b is ${b} `);
++b; 
console.log(`the value if a is ${a} `);
console.log(`the value of b is ${b}`);