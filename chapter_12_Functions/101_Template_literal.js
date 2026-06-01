/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Functions with Template Literals — using backticks and interpolation inside a return statement.
 *
 * Functions/Methods Used:
 *   - greet(name: string): string
 *     Description: A user-defined function that returns a greeting message using template literal interpolation.
 *     Input: One parameter `name` of type string, provided as a direct string value or variable.
 *     Return Type: string — the template literal evaluates to a string with the name inserted.
 *
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Template Literal: Strings wrapped in backticks (``) that support `${expression}` interpolation.
 *   - Interpolation: Embedding a variable or expression directly inside a string using `${}` syntax.
 *   - Return Type: Template literals always produce a string value.
 * ============================================================
 */

function greet(name) {
    return `Hello, ${name}`;
}

let result = greet("Alice");
console.log(result);