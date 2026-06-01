/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Function definitions, parameter passing, return values,
 *        loops, and V8 hot code execution / JIT optimization concepts
 *
 * Functions/Methods Used:
 *   - print_before_execution(a: number, b: number): void
 *     Description: Logs the values of a and b before computation.
 *     Input: Accepts two numbers as variables or direct values passed
 *            as arguments in a function call.
 *     Return Type: void (undefined) — returns nothing; only logs to console.
 *   - printing_after_execution(a: number, b: number, c: number): void
 *     Description: Logs the values of a, b, and c after computation.
 *     Input: Accepts three numbers as variables or direct values passed
 *            as arguments in a function call.
 *     Return Type: void (undefined) — returns nothing; only logs to console.
 *   - add(a: number, b: number): number
 *     Description: Adds two numbers, assigns the sum to a global variable c,
 *                  reassigns local parameters a and b, and returns the sum.
 *     Input: Accepts two numbers as variables or direct values passed
 *            as arguments in a function call.
 *     Return Type: number — returns the arithmetic sum of a and b.
 *   - console.log(message: any, ...optionalParams: any[]): void
 *     Description: Prints provided arguments to the console.
 *     Input: Accepts any data types as direct values, variables, or expressions,
 *            including multiple optional parameters.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Built-in Keywords/Methods Used:
 *   - let
 *     Description: Declares a block-scoped local variable.
 *     Input: Takes a variable name and an optional initial value assignment
 *            via direct value, variable, or expression.
 *     Return Type: undefined — the declaration itself does not return a value.
 *   - function
 *     Description: Declares a named function with a block of executable code.
 *     Input: Takes a function name, an optional parameter list (variables or defaults),
 *            and a function body containing executable statements.
 *     Return Type: void or any type — depends on whether a return statement is used;
 *                  without return, the function yields undefined.
 *   - return
 *     Description: Exits a function and optionally passes back a value to the caller.
 *     Input: Takes an optional expression or direct value to pass back to the caller;
 *            can be used without input to exit early.
 *     Return Type: any type — the type of the expression being returned;
 *                  if no value is provided, returns undefined.
 *   - for
 *     Description: Creates a loop with initialization, condition, and final expression.
 *     Input: Requires an initialization statement (variable declaration or assignment),
 *            a condition expression, and a final expression (e.g., increment).
 *     Return Type: void — the loop statement does not return a value;
 *                  iteration is controlled by the condition.
 *
 * Key Concepts:
 *   - Function Declaration & Invocation: Defining reusable logic and calling it.
 *   - Parameter Passing: Values are passed by value; reassigning parameters
 *     inside a function does not affect the outer variables.
 *   - Global vs Local Variables: Variable c is assigned without declaration
 *     inside add, making it a property of the global object (in non-strict mode).
 *   - Return Statement: Sends a value back to the caller for further use.
 *   - for loop: Iterates 10,000 times to demonstrate repeated execution.
 *   - Hot Code / JIT: Repeatedly calling a function can trigger V8 JIT
 *     compilation for performance optimization.
 * ============================================================
 */

function print_before_execution(a, b)
{
    console.log("the values of variables before chaneg a, b: ", a, b)
}

let a= 10, b=12;
let result = 0;
let c = 0;
print_before_execution(a, b)

function printing_after_execution(a, b, c)
{
    console.log("the values of variables after execution a, b, result: ", a , b, c);
}

function add(a, b) 
{
    c = a+b;
    b = a;
    a= c; 
    return c;
}

add( a, b);
printing_after_execution(a, b, c);

let i=0;
console.log("HOT Code Execution");
print_before_execution(i, result);

for (let i = 0; i < 10000; i++) 
{
    result = add(i, i + 1);
    console.log("step wise iteration result: ", i, result);
}
printing_after_execution(i, result);

console.log("After 10000 calls:", result);
