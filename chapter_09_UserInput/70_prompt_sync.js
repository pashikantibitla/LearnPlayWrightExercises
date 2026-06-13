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

/*
================================================================================
                        COMPREHENSIVE EDUCATIONAL GUIDE
================================================================================

DETAILED EXPLANATION:
---------------------
This file demonstrates how to capture synchronous user input in Node.js using
the third-party npm package "prompt-sync". While Node.js provides the built-in
"readline" module for asynchronous input, many beginners and simple scripts
prefer a blocking (synchronous) approach that behaves similarly to the browser's
prompt() function or Python's input() function.

The "prompt-sync" package pauses program execution until the user types a response
and presses Enter. This makes the code flow linear and easy to read, which is
ideal for learning and for small command-line utilities that do not need to
handle multiple concurrent operations.

STEP-BY-STEP CODE BREAKDOWN:
----------------------------
Step 1: const prompt = require("prompt-sync")();
        - Imports the "prompt-sync" package using require().
        - Immediately invokes the imported function with () to get the actual
          prompt function. This step is easy to miss!
        - The returned function is stored in the constant "prompt".
        - NOTE: You must run "npm install prompt-sync" before this works.

Step 2: let num = Number(prompt("Enter a number: "));
        - Calls the prompt function with the message "Enter a number: ".
        - Execution PAUSES here until the user provides input.
        - The returned string is immediately passed to Number() for conversion.
        - The numeric result is stored in the variable "num".

Step 3: if (num % 2 === 0) { ... } else { ... }
        - Evaluates whether the number is divisible by 2 with no remainder.
        - The strict equality operator === checks both value and type.
        - Prints "is Even" or "is Odd" accordingly.

KEY CONCEPTS:
-------------
- Synchronous (Blocking) I/O: The program stops and waits for the user. This
  is simpler to reason about but less efficient for high-performance servers.
- npm (Node Package Manager): The registry and tool for installing third-party
  JavaScript libraries. "prompt-sync" is one of thousands of useful packages.
- Function Currying / Factory Pattern: require("prompt-sync") returns a
  function. Calling that function returns ANOTHER function configured for use.
- Immediate Type Conversion: Wrapping the prompt call inside Number() ensures
  you work with a numeric type right from the start.

COMPARISON TABLE: Browser prompt vs readline vs prompt-sync
------------------------------------------------------------
| Feature            | Browser prompt()     | Node.js readline       | prompt-sync            |
|--------------------|----------------------|------------------------|------------------------|
| Environment        | Browser              | Node.js                | Node.js                |
| Sync / Async       | Sync                 | Async (callback)       | Sync                   |
| Built-in?           | Yes                 | Yes                    | No (npm install)       |
| Return Type        | string | null        | string (in callback)   | string                 |
| Code Verbosity     | Very Low             | Medium                 | Low                    |
| Best For           | Quick browser tests  | Production CLIs        | Learning & scripts     |
| Dialog Box         | Yes                  | No                     | No                     |

REAL-WORLD USE CASES:
---------------------
- Writing quick automation scripts that ask for a filename or configuration
  value before proceeding.
- Building student exercises and tutorials where asynchronous concepts have
  not yet been introduced.
- Creating simple menu-driven console applications.
- Prototyping algorithms that need user input without the boilerplate of
  readline setup and callbacks.

COMMON MISTAKES TO AVOID:
-------------------------
1. Forgetting to install the package: "npm install prompt-sync" must be run
   in the project directory first, otherwise require() will fail.
2. Forgetting the second set of parentheses: require("prompt-sync")() is
   required to get the actual prompt function.
3. Not converting the input: prompt-sync always returns a string. If you
   forget Number(), mathematical comparisons can behave unexpectedly.
4. Using loose equality (==) instead of strict equality (===), which can
   cause type coercion bugs (e.g., 0 == "" is true).
5. Assuming prompt-sync is available in production environments without
   including it in the package.json dependencies.

KEY TAKEAWAY:
-------------
"prompt-sync" bridges the gap between browser-style input and Node.js. It
provides a beginner-friendly, synchronous way to collect user input in the
terminal. Always install it via npm, remember the double invocation
require("prompt-sync")(), and immediately convert string input to the correct
data type before using it in your program's logic.

================================================================================
*/
