/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Introduction to JavaScript functions — definition and invocation
 *
 * Functions/Methods Used:
 *   - greet(): void
 *     Description: A user-defined function that logs a greeting message to the console.
 *     Input: None; takes no parameters.
 *     Return Type: void — returns undefined implicitly; only logs to console.
 *   - console.log(message: any): void
 *     Description: Built-in method to output text to the browser or Node.js console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void — returns nothing; only outputs to console.
 *
 * Built-in Methods/Keywords:
 *   - function
 *     Description: Keyword used to declare a named function block.
 *     Input: Takes a function name, an optional parameter list enclosed in parentheses, and a function body wrapped in curly braces.
 *     Return Type: void (as a declaration statement) — does not return a value in the statement context; creates a named function object in the current scope.
 *   - console.log
 *     Description: Standard output method for debugging and logging.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Function declaration: Creating a named function using the function keyword.
 *   - Function call/invocation: Executing a function by referencing its name followed by parentheses.
 *   - Reusability: Functions allow the same logic to be executed multiple times without rewriting code.
 * ============================================================
 */

// something tha tis reusable in natuer is function
// 1. Define of function
function greet() {
    console.log("Hi, How are you?");
}

// 2. Calling of the function
greet();
greet();
greet();
greet();
greet();
greet();
greet();

/*
=====================================
DETAILED EXPLANATION
=====================================
This file introduces the most fundamental building block of reusable JavaScript code: functions.
A function is a named block of code that can be defined once and executed (called) multiple times.
The greet() function demonstrates a simple declaration with no parameters and no return value.

CODE BREAKDOWN
=====================================
1. function greet() { console.log("Hi, How are you?"); }
   - Declares a named function greet that outputs a message.
2. greet(); (called 7 times)
   - Invokes the function repeatedly to show reusability.

KEY CONCEPTS
=====================================
- Function Declaration: Creating a reusable block using the function keyword.
- Function Invocation: Executing the block by writing its name followed by parentheses.
- Reusability: Write once, run many times — the DRY (Don't Repeat Yourself) principle.

COMPARISON TABLE: Function Declaration vs Function Expression
=====================================
| Feature              | Function Declaration       | Function Expression        |
|----------------------|----------------------------|----------------------------|
| Syntax               | function name() {}         | const name = function() {} |
| Hoisting             | Fully hoisted (body too)   | Only variable hoisted      |
| Can call before def? | Yes                        | No (TDZ or undefined)      |
| Use case             | Named utilities            | Callbacks, closures        |

REAL-WORLD USE CASES
=====================================
- Reusable test steps (login, logout) in Playwright or Selenium.
- API call wrappers (getUser, createOrder).
- Utility helpers (formatDate, generateId).

COMMON MISTAKES
=====================================
- Forgetting the parentheses () when calling a function.
- Calling a function expression before its assignment line (ReferenceError or TypeError).
- Naming a function the same as a variable and causing confusion.

KEY TAKEAWAY
=====================================
Functions are the foundation of modular JavaScript. Use declarations for reusable utilities and expressions when you need flexibility or callbacks.
*/