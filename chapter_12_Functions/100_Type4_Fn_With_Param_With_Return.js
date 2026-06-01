/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Type-4 Function — with parameters AND with a return value.
 *
 * Functions/Methods Used:
 *   - sumOfTwoNumner(a: number, b: number): number
 *     Description: A user-defined function that adds two numbers and returns the sum.
 *     Input: Two parameters `a` and `b` of type number, provided as direct numeric values or variables.
 *     Return Type: number — the arithmetic result of `a + b`.
 *
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Type-4 Function: Accepts input via parameters and returns a computed result.
 *   - return Keyword: Sends the computed value (a + b) back to the caller.
 *   - Return Type: The expression `a + b` evaluates to a number, so the return type is number.
 * ============================================================
 */

function sumOfTwoNumner(a, b) {
    return a + b;
}

let c = sumOfTwoNumner(4, 5);
console.log(c);