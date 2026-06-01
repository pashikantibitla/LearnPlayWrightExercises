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