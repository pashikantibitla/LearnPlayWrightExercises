/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Basic variable declaration using var and console output
 *
 * Functions/Methods Used:
 *   - console.log(message: any): void
 *     Description: Outputs the provided value(s) to the console/stdout.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Built-in Keywords/Methods Used:
 *   - var
 *     Description: Declares a function-scoped or globally-scoped variable,
 *                  optionally initializing it to a value.
 *     Input: Takes a variable name and an optional initial value assignment
 *            via direct value, variable, or expression.
 *     Return Type: undefined — the declaration itself does not return a value.
 *
 * Key Concepts:
 *   - Variable Declaration: Using var to store a string value.
 *   - Console Output: Using console.log to print strings and variables.
 * ============================================================
 */

var a  = "first name , last name"
console.log("hello ther, how are you ");
console.log(a);

/*
============================================================
  EDUCATOR EXPLANATION BLOCK
============================================================

DETAILED EXPLANATION:
This file introduces the absolute basics of JavaScript. It shows
how to declare a variable using the 'var' keyword and how to
output information to the developer console using console.log.
The variable 'a' stores a simple string, which is then printed
alongside a literal greeting message. This pattern is the first
step every developer takes when learning to store and display data.

CODE BREAKDOWN:
Step 1: var a = "first name , last name";
        - The 'var' keyword declares a variable named 'a'.
        - The equals sign assigns the string on the right into 'a'.
        - This value persists in memory for the rest of the script.

Step 2: console.log("hello ther, how are you ");
        - The console.log function sends text to the terminal or
          browser's developer console.
        - The text inside quotes is called a string literal.

Step 3: console.log(a);
        - Instead of a literal, we pass the variable 'a'.
        - console.log reads the current value stored in 'a' and
          prints it.

KEY CONCEPTS:
- Variable: A named container for a value that can be used later.
- Declaration: Using var, let, or const to create that container.
- Assignment: The = operator copies a value into the container.
- console.log: The primary debugging and inspection tool in JS.
- String: A sequence of characters wrapped in single or double quotes.

COMPARISON TABLE: var vs let vs const
| Feature        | var                 | let                 | const               |
|----------------|---------------------|---------------------|---------------------|
| Scope          | Function / Global   | Block { }           | Block { }           |
| Can reassign?  | Yes                 | Yes                 | No                  |
| Can redeclare? | Yes (same scope)    | No                  | No                  |
| Hoisted?       | Yes (undefined)     | Yes (TDZ*)          | Yes (TDZ*)          |
| Modern usage   | Legacy code only    | Preferred for vars  | Preferred for constants |
*TDZ = Temporal Dead Zone: exists but cannot be used before declaration.

REAL-WORLD USE CASES:
- Printing the status of a web page during load.
- Capturing user input from a form field into a variable.
- Storing configuration strings like API endpoints temporarily.

COMMON MISTAKES TO AVOID:
- Writing Console.log with a capital C — JavaScript is case-sensitive.
- Forgetting quotes around text, which makes the engine think it
  is a variable name and throws a ReferenceError.
- Declaring a variable with var in a large function and accidentally
  overwriting it elsewhere because var is function-scoped.

KEY TAKEAWAY:
Every JavaScript program boils down to storing values and acting
on them. Understanding var, let, const, and console.log gives you
the foundation to read, write, and debug any script.
*/