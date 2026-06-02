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

/*
================================================================================
                        COMPREHENSIVE EDUCATIONAL GUIDE
================================================================================

DETAILED EXPLANATION:
---------------------
This file demonstrates why the browser's built-in prompt() function cannot be
used in a Node.js environment. In web browsers, prompt() opens a dialog box that
allows users to enter text. However, Node.js is a server-side runtime that does
not have a graphical user interface or any built-in mechanism to display prompt
dialogs. When this code runs in Node.js, JavaScript throws a ReferenceError
because the identifier "prompt" is not defined in the global scope of Node.js.

The code attempts to:
1. Capture user input via prompt() as a string.
2. Convert that string into a number using the Number() constructor.
3. Use the modulo operator (%) to check if the number is even or odd.
4. Print the appropriate message to the console.

Because prompt() is unavailable, the program crashes before it can perform any
of the subsequent steps. This illustrates a fundamental concept in JavaScript:
the runtime environment determines which global APIs are available.

STEP-BY-STEP CODE BREAKDOWN:
----------------------------
Step 1: let num = prompt("Enter a number:");
        - Tries to call the prompt function with the message "Enter a number:"
        - In a browser, this would return a string (or null if cancelled).
        - In Node.js, prompt is undefined → ReferenceError: prompt is not defined.

Step 2: num = Number(num);
        - Converts the string input into a numeric value.
        - If the user entered "42", num becomes the number 42.
        - If the user entered "hello", num becomes NaN (Not a Number).

Step 3: if (num % 2 === 0) { ... } else { ... }
        - The modulo operator % divides num by 2 and returns the remainder.
        - If the remainder is 0, the number is even.
        - If the remainder is 1, the number is odd.
        - The strict equality operator === ensures both value and type match.

Step 4: console.log(num + " is Even");  OR  console.log(num + " is Odd");
        - Concatenates the number with a descriptive string and prints it.

KEY CONCEPTS:
-------------
- Browser vs Node.js: Browsers provide DOM APIs like prompt(), alert(), and
  confirm(). Node.js provides file system, network, and process APIs instead.
- ReferenceError: Occurs when you try to use a variable or function that has
  not been declared in the current scope.
- Type Conversion: prompt() always returns a string. To do math, you must
  explicitly convert to a number using Number(), parseInt(), or parseFloat().
- Modulo Operator (%): Returns the remainder of division. It is the standard
  way to test for even/odd numbers in programming.

COMPARISON TABLE: prompt() vs Node.js Input Methods
----------------------------------------------------
| Feature            | Browser prompt()       | Node.js readline         | prompt-sync (npm)        |
|--------------------|------------------------|--------------------------|--------------------------|
| Environment        | Web Browser            | Node.js only             | Node.js only             |
| API Type           | Built-in global        | Built-in module          | Third-party package      |
| Execution Style    | Blocking (synchronous) | Asynchronous (callback)  | Blocking (synchronous)   |
| Return Type        | string | null           | string (in callback)     | string                   |
| Dialog Box         | Yes (native UI)        | No (terminal input)      | No (terminal input)      |
| Requires Install   | No                     | No                       | Yes (npm install)        |
| Cancellation       | Returns null             | N/A (enter empty line)   | Returns empty string     |

REAL-WORLD USE CASES:
---------------------
- Understanding environment limitations is critical when writing universal
  JavaScript that might run in both browsers and Node.js (e.g., shared
  utility libraries).
- Form validation scripts in browsers often use prompt() for quick testing,
  but production applications use HTML <input> elements for better UX.
- Backend scripts (Node.js) use readline or packages like prompt-sync to
  build CLI tools, interactive installers, and configuration wizards.

COMMON MISTAKES TO AVOID:
-------------------------
1. Assuming prompt() works in Node.js without importing an alternative.
2. Forgetting to convert string input to a number before doing math.
   - Example: "5" + "5" = "55" (string concatenation), not 10.
3. Using == (loose equality) instead of === (strict equality).
   - == allows type coercion (e.g., 0 == "" is true), which causes bugs.
4. Not handling null when the user cancels a browser prompt.
   - Number(null) becomes 0, which might silently produce wrong results.
5. Writing repetitive console.log statements instead of using a loop when
   you need to perform the same action multiple times.

KEY TAKEAWAY:
-------------
Always be aware of your JavaScript runtime environment. The same code can
behave differently (or fail entirely) in a browser versus Node.js. When you
need user input in Node.js, use the built-in "readline" module or install a
third-party package like "prompt-sync". Always convert user input to the
correct data type before performing operations on it.

================================================================================
*/