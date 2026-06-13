/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Type-1 Basic Function — no parameters, no return value.
 *
 * Functions/Methods Used:
 *   - greet(): undefined
 *     Description: A user-defined function that prints "Hi" to the console.
 *     Input: No input parameters (empty parentheses).
 *     Return Type: undefined — no explicit return statement; implicitly returns undefined.
 *
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Type-1 Function: A function with no parameters and no return value.
 *   - Implicit Return: When no `return` is written, JavaScript returns `undefined`.
 *   - Function Invocation: Calling a function executes its body and produces a return value.
 * ============================================================
 */

// Define
function greet() { // parameter
    console.log("Hi");
}

// This is a Basic type-1 function, which means no argument, no return. 
// Call
greet(); // calling argument

let a = greet();
console.log(a);


/*
================================================================================
                    DETAILED EXPLANATION: TYPE-1 BASIC FUNCTION
================================================================================

1. WHAT IS A TYPE-1 FUNCTION?
------------------------------
A Type-1 Function is the SIMPLEST form of a function:
  - NO Parameters (does not accept any input)
  - NO Return Value (does not send any output back)

  Syntax:
    function functionName() {
        // body: performs some action
    }


2. CODE BREAKDOWN
------------------

  function greet() {
      console.log("Hi");
  }

  >> No parameters inside `()`.
  >> No `return` statement inside `{}`.
  >> Only a side effect: printing to console.

  greet();
  >> Executes the function. Output: "Hi".

  let a = greet();
  >> Calls the function AND stores its return value in variable `a`.
  >> Since there is NO `return`, JavaScript automatically returns `undefined`.

  console.log(a);
  >> Output: undefined


3. WHAT DOES "UNDEFINED" RETURN MEAN?
---------------------------------------
When a function does NOT explicitly use the `return` keyword,
JavaScript returns `undefined` by default.

  function greet() {
      console.log("Hi");
  }

  let result = greet();  // result = undefined

  This does NOT mean the function failed. It simply means the function
  performed an action (console.log) but chose not to send any value back.


4. WHEN TO USE TYPE-1 FUNCTIONS?
---------------------------------
Use Type-1 functions when:
  - You need a fixed, repeatable action with no input variations.
  - The task is purely a side effect (e.g., logging, UI updates).
  - No computation or result is needed by the caller.

  Examples:
    - Showing a welcome message
    - Clearing a form
    - Logging a heartbeat status


5. KEY TAKEAWAY
----------------
  TYPE-1 = No Input + No Output
  Simplest building block of functions in JavaScript.
  If you store the result of a Type-1 function, it will ALWAYS be `undefined`.

================================================================================
*/
