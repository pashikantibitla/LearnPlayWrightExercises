/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Reading synchronous user input in Node.js using the 'prompt-sync'
 *        npm package. Demonstrates a blocking (synchronous) alternative
 *        to the built-in readline module for simple CLI scripts.
 *
 * Functions/Methods Used:
 *   - require("prompt-sync")(): function
 *     Description: Imports the 'prompt-sync' package and immediately
 *     invokes it to return a synchronous prompt function. The package
 *     must be installed via npm (e.g., npm install prompt-sync).
 *     Input: Accepts a module name string as a direct string literal,
 *     variable, or expression.
 *     Return Type: function — returns a synchronous prompt function.
 *
 *   - prompt(message: string): string
 *     Description: The returned synchronous function that displays the
 *     given message and blocks execution until the user types input
 *     and presses Enter. Returns the input as a string.
 *     Input: Accepts a string message as a direct string literal, variable,
 *     or expression representing the prompt text to display.
 *     Return Type: string — returns the user's input as a string.
 *
 *   - Number(value: any): number
 *     Description: Global constructor that converts the provided value
 *     to a number. Used here to turn the string input into a number.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: number — returns the numeric equivalent of the input value.
 *
 *   - console.log(message: any): void
 *     Description: Outputs the message to the standard console (stdout).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Built-in Operators / Keywords:
 *   - if / else
 *     Description: Conditional control flow statements. Executes the
 *     first block if the condition is truthy, otherwise the else block.
 *     Input: A boolean condition (expression, variable, or comparison)
 *     placed inside parentheses after the if keyword.
 *     Return Type: void (no return) — controls program flow but does not
 *     return a value.
 *
 *   - % (modulo operator)
 *     Description: Computes the remainder of integer division.
 *     If num % 2 === 0, the number is even.
 *     Input: Takes two numeric values (direct values, variables, or
 *     expressions) separated by the % symbol.
 *     Return Type: number — returns the remainder of the division.
 *
 *   - === (strict equality operator)
 *     Description: Checks for equality in both value and type without
 *     performing implicit type conversion.
 *     Input: Takes two values (direct values, variables, or expressions)
 *     separated by the === operator.
 *     Return Type: boolean — returns true if both value and type match,
 *     otherwise false.
 *
 * Key Concepts:
 *   - Synchronous (Blocking) Input: Unlike readline, prompt-sync pauses
 *     program execution until the user provides input, behaving like
 *     prompt() in browsers or input() in Python.
 *   - npm Packages: Third-party libraries installed via npm that extend
 *     Node.js capabilities beyond its built-in modules.
 *   - Module Requiring: Uses Node.js require() to load and use external
 *     packages in a script.
 *   - Type Conversion: User input is captured as a string; explicit
 *     conversion to Number is required for mathematical operations.
 * ============================================================
 */

const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}
