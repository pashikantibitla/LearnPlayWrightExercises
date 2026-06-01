/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Why the browser's prompt() function is not available in Node.js
 *        and causes a ReferenceError. Demonstrates the need for alternative
 *        input methods when running JavaScript outside of a browser.
 *
 * Functions/Methods Used:
 *   - prompt(message: string): string | null
 *     Description: A built-in browser function that displays a dialog box
 *     for user input. NOT defined in Node.js; running this file in Node
 *     throws "ReferenceError: prompt is not defined".
 *     Input: Accepts a string message as a direct string literal, variable,
 *     or expression representing the prompt text to display.
 *     Return Type: string | null — returns the user's input as a string,
 *     or null if the user cancels the dialog.
 *
 *   - Number(value: any): number
 *     Description: A global constructor function that converts the given
 *     value to a number type. Used here to convert a string to a number.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: number — returns the numeric equivalent of the input value.
 *
 *   - console.log(message: any): void
 *     Description: Outputs the provided value to the console (stdout).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Built-in Operators / Keywords:
 *   - if / else
 *     Description: Conditional statements that execute code blocks based
 *     on whether a specified condition evaluates to true or false.
 *     Input: A boolean condition (expression, variable, or comparison)
 *     placed inside parentheses after the if keyword.
 *     Return Type: void (no return) — controls program flow but does not
 *     return a value.
 *
 *   - % (modulo operator)
 *     Description: Returns the remainder of a division operation.
 *     Used here to determine if a number is even or odd.
 *     Input: Takes two numeric values (direct values, variables, or
 *     expressions) separated by the % symbol.
 *     Return Type: number — returns the remainder of the division.
 *
 *   - === (strict equality operator)
 *     Description: Compares two values for equality without type coercion.
 *     Returns true only if both value and type match.
 *     Input: Takes two values (direct values, variables, or expressions)
 *     separated by the === operator.
 *     Return Type: boolean — returns true if both value and type match,
 *     otherwise false.
 *
 * Key Concepts:
 *   - Browser vs Node.js Environment: prompt() exists in browsers but not
 *     in Node.js, which has no built-in UI for user prompts.
 *   - ReferenceError: An error thrown when trying to use a variable or
 *     function that does not exist in the current scope.
 *   - Type Conversion: User input from prompt() is always a string, so
 *     Number() is needed to perform numeric comparisons.
 * ============================================================
 */

let num = prompt("Enter a number:"); //ReferenceError: prompt is not defined
num = Number(num);  // convert string to number

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}