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

/*
============================================================
  EDUCATOR EXPLANATION BLOCK
============================================================

DETAILED EXPLANATION:
This file explores functions, parameter passing, return values,
and introduces the concept of "hot code" in the V8 engine.
The script defines helper functions to log state, performs a
simple addition, and then runs the addition function ten
thousand times in a loop. In modern JavaScript engines like
V8 (used by Chrome and Node.js), frequently executed functions
are optimized by the Just-In-Time (JIT) compiler, making them
run dramatically faster. This is why the loop is included:
to turn the 'add' function into "hot" code that V8 can optimize.

CODE BREAKDOWN:
Step 1: function print_before_execution(a, b) { ... }
        - Logs the values of a and b before any computation.

Step 2: let a= 10, b=12; let result = 0; let c = 0;
        - Declares starting variables.
        - 'c' is later used without being declared inside add(),
          which makes it a global property in non-strict mode.

Step 3: print_before_execution(a, b);
        - Calls the helper to show initial state.

Step 4: function printing_after_execution(a, b, c) { ... }
        - Logs values after computation.

Step 5: function add(a, b) { c = a+b; b = a; a= c; return c; }
        - Computes the sum and stores it in the global 'c'.
        - Reassigns local parameters 'b' and 'a'; these do NOT
          affect the outer variables because primitives are
          passed by value.

Step 6: add(a, b); printing_after_execution(a, b, c);
        - First call to add and immediate state check.

Step 7: for (let i = 0; i < 10000; i++) { result = add(i, i + 1); ... }
        - Calls add 10,000 times.
        - Each iteration logs progress, making the function hot.

Step 8: console.log("After 10000 calls:", result);
        - Final output showing the last computed result.

KEY CONCEPTS:
- Function declaration: Creates a reusable, named piece of logic.
- Parameters: Named placeholders for values passed into a function.
- Return statement: Sends a value back to the caller.
- Pass by value: For primitives (number, string, boolean), the
  function receives a copy, so reassigning parameters locally
  does not change the outer variable.
- Global variable leak: Assigning to a variable without declaring
  it (c = a+b) creates a property on the global object in sloppy
  mode. Always use let, const, or var.
- Hot code / JIT: V8 monitors how often a function runs. After
  many executions, it compiles the function to native machine
  code for speed.

COMPARISON TABLE: Pass by Value vs Pass by Reference
| Aspect                | Pass by Value (primitives) | Pass by Reference (objects) |
|-----------------------|----------------------------|-----------------------------|
| Types                 | number, string, boolean    | object, array, function     |
| What is copied?       | The actual value           | A reference (memory address)|
| Inside function       | Reassigning param has no   | Mutating properties affects |
| reassignment effect   | effect outside             | the original object         |
| Example               | a = 10; fn(a); // a still 10 | obj.x=1; fn(obj); // obj changes |

REAL-WORLD USE CASES:
- A data-processing pipeline that runs a transformation function
  millions of times; JIT optimization makes this feasible.
- Game engines that repeatedly update physics in a tight loop.
- Financial calculators that sum large arrays of transactions.

COMMON MISTAKES TO AVOID:
- Forgetting to declare 'c' inside the function, which pollutes
  the global namespace and can cause silent bugs.
- Thinking that reassigning a parameter (a = c) will change the
  outer variable 'a'; it only changes the local copy.
- Running a loop with console.log inside for 10,000 iterations
  in production; logging is slow and can negate JIT benefits.

KEY TAKEAWAY:
Functions are the building blocks of reusable code. Understand
pass-by-value, avoid global leaks by declaring variables, and
appreciate that engines like V8 will optimize heavily-used code
paths automatically.
*/
