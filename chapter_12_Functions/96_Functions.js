/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Introduction to Functions in JavaScript — defining and calling a function.
 *
 * Functions/Methods Used:
 *   - greet(): void
 *     Description: A user-defined function that prints a greeting message to the console.
 *     Input: No input parameters (empty parentheses).
 *     Return Type: void (undefined) — no explicit return statement; console.log only prints.
 *
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Function Declaration: Using the `function` keyword to create a named function.
 *   - Function Call / Invocation: Executing a function by writing its name followed by parentheses.
 * ============================================================
 *
 * ============================================================
 * FUNCTION vs METHOD
 * ============================================================
 *
 * FUNCTION:
 *   - Description: A standalone block of code designed to perform a specific task.
 *   - Input: Receives input through parameters declared in its definition.
 *   - Return Type: Can return any data type (number, string, boolean, object, array, void).
 *   - Usage: Called independently by its name, e.g., greet(), add(2, 3).
 *   - Example: function greet() { console.log("Hi"); }
 *
 * METHOD:
 *   - Description: A function that is a property of an object. It operates on the data inside that object.
 *   - Input: Receives input through parameters AND has access to the object via `this`.
 *   - Return Type: Can return any data type; often returns the result of an operation on the object.
 *   - Usage: Called on an object using dot notation, e.g., arr.push(5), str.toUpperCase().
 *   - Example: let arr = [1, 2]; arr.push(3);  // push is a method of Array object.
 *
 * | Feature       | Function              | Method                          |
 * |---------------|-----------------------|---------------------------------|
 * | Belongs to    | Standalone / Global   | Belongs to an Object            |
 * | Call syntax   | functionName()        | objectName.methodName()         |
 * | `this` access | No / Global object    | Yes (refers to the object)      |
 * | Example       | greet()               | arr.push(), str.length()        |
 *
 * ============================================================
 * PARAMETER vs ARGUMENT
 * ============================================================
 *
 * PARAMETER:
 *   - Description: A variable listed in the function's DEFINITION. It acts as a placeholder
 *                  for the value that will be passed in when the function is called.
 *   - Input Type: Declared as part of the function signature; type is dynamic in JS.
 *   - Usage: Defined inside the parentheses of a function declaration/expression.
 *   - Example: In function greet(name) { ... },  `name` is the PARAMETER.
 *
 * ARGUMENT:
 *   - Description: The ACTUAL VALUE passed to the function when it is CALLED/INVOKED.
 *   - Input Type: A direct value, variable, or expression provided at call time.
 *   - Usage: Provided inside the parentheses when calling the function.
 *   - Example: In greet("Alice");  the string "Alice" is the ARGUMENT.
 *
 * | Term       | When is it used?        | Where does it appear?           |
 * |------------|-------------------------|---------------------------------|
 * | Parameter  | At function DEFINITION  | function greet(name) { ... }      |
 * | Argument   | At function CALL        | greet("Alice");                 |
 *
 * ============================================================
 * RETURN vs RETURN TYPE
 * ============================================================
 *
 * RETURN:
 *   - Description: A keyword (`return`) that immediately exits a function and optionally
 *                  sends a value back to the place where the function was called.
 *   - Input: Can accept a value, variable, or expression after the `return` keyword.
 *   - Usage: Written inside the function body: return expression;
 *   - Example: return a + b;
 *
 * RETURN TYPE:
 *   - Description: The DATA TYPE of the value that a function sends back after execution.
 *                  It describes WHAT KIND of value the caller receives.
 *   - Possible values: number, string, boolean, object, array, undefined, void (no return), function.
 *   - Usage: Determined by what value follows the `return` keyword; if no return, type is undefined.
 *   - Example: function add(a, b) { return a + b; }  // Return Type is number.
 *
 * | Term        | What is it?                      | Example                              |
 * |-------------|----------------------------------|--------------------------------------|
 * | return      | Keyword that sends value back    | return a + b;                        |
 * | Return Type | Data type of the returned value  | number, string, boolean, void, etc.  |
 *
 * NOTE: If a function has NO `return` statement, its Return Type is `undefined` (void).
 * ============================================================
 */

// Functions

// Define - Step 1
function greet() {
    console.log("Hi, how are you?")
}

// call - Step 2
greet();


/*
================================================================================
                    DETAILED EXPLANATION: INTRODUCTION TO FUNCTIONS
================================================================================

1. WHAT IS A FUNCTION?
-----------------------
A Function is a reusable block of code designed to perform a specific task.
Instead of writing the same code multiple times, we wrap it inside a function
and "call" it whenever needed.

  Syntax:
    function functionName() {
        // code to execute
    }

  - `function`   → Keyword to declare a function.
  - `functionName` → The name you use to call/invoke it later.
  - `()`         → Parentheses hold parameters (empty here = no input).
  - `{}`         → Curly braces contain the function body.


2. HOW TO USE A FUNCTION (2-STEP PROCESS)
-----------------------------------------
  STEP 1 — DEFINE (Declare) the function:
    function greet() {
        console.log("Hi, how are you?");
    }

  STEP 2 — CALL (Invoke) the function:
    greet();

  >> DEFINITION tells JavaScript WHAT the function does.
  >> CALLING tells JavaScript WHEN to execute that block.

  Without the call, the function body will NEVER run!


3. FUNCTION vs METHOD
----------------------
| Feature       | Function                  | Method                             |
|---------------|---------------------------|------------------------------------|
| Definition    | Standalone block of code  | Function attached to an object     |
| Call Syntax   | functionName()            | objectName.methodName()            |
| `this` Access | No (or refers to global)  | Yes (refers to the parent object)  |
| Example       | greet()                   | arr.push(), str.toUpperCase()      |

  FUNCTION: Independent. Defined with `function` keyword anywhere.
  METHOD:   Belongs to an object. Called using dot notation.


4. PARAMETER vs ARGUMENT
-------------------------
  PARAMETER  → Variable listed in the function DEFINITION (placeholder).
               Example: In `function greet(name)`, `name` is a parameter.

  ARGUMENT   → Actual VALUE passed when CALLING the function.
               Example: In `greet("Alice")`, `"Alice"` is an argument.

  | Term      | When used?               | Example                          |
  |-----------|--------------------------|----------------------------------|
  | Parameter | At function DEFINITION   | function greet(name) { ... }       |
  | Argument  | At function CALL         | greet("Alice")                   |


5. RETURN vs RETURN TYPE
-------------------------
  `return`     → A keyword that IMMEDIATELY exits the function and sends
                  a value back to the caller.
                  Example: return a + b;

  RETURN TYPE  → The DATA TYPE of the value the function sends back.
                 Possible types: number, string, boolean, object, undefined.
                 If NO `return` statement exists, the return type is `undefined`.

  In this file:
    greet() has NO return statement → Return Type is `undefined`.


6. KEY TAKEAWAY
----------------
  Functions = Define Once → Call Many Times.
  They reduce repetition, make code modular, and are the foundation of
  reusable logic in JavaScript.

================================================================================
*/

