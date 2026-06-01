/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Function Expressions — assigning a function to a variable (anonymous or named).
 *
 * Functions/Methods Used:
 *   - greet(name: string): string
 *     Description: An anonymous function assigned to the constant `greet`; returns a greeting string.
 *     Input: One parameter `name` of type string, provided as a direct string value or variable.
 *     Return Type: string — the template literal evaluates to a greeting string.
 *
 *   - greet1(name1: string): string
 *     Description: A standard named function declaration that returns a greeting string.
 *     Input: One parameter `name1` of type string, provided as a direct string value or variable.
 *     Return Type: string — the template literal evaluates to a greeting string.
 *
 *   - greet2(name1: string): string
 *     Description: A function expression (anonymous) assigned to the constant `greet2`; returns a greeting string.
 *     Input: One parameter `name1` of type string, provided as a direct string value or variable.
 *     Return Type: string — the template literal evaluates to a greeting string.
 *
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Function Declaration: `function name() { ... }` — hoisted to the top of the scope.
 *   - Function Expression: `const name = function() { ... }` — not hoisted; assigned to a variable.
 *   - Anonymous Function: A function without a name, commonly used in expressions.
 *   - Hoisting: Function declarations are hoisted; function expressions are NOT hoisted.
 * ============================================================
 */

const greet = function (name) {
    return `Hello, ${name}`;
}

let r = greet("Pramod");
console.log(r);


// Type 4 normal Fn
function greet1(name1) {
    return `Hello, ${name1}!`;
}


// Functions as Expression
const greet2 = function (name1) {
    return `Hello, ${name1}!`;
}

console.log(greet1("Bob"));
console.log(greet2("Bob"));