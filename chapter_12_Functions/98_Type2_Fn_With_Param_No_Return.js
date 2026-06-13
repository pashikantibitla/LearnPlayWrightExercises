/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Type-2 Function — with parameters, but no explicit return value.
 *
 * Functions/Methods Used:
 *   - greetByName(name: string): undefined
 *     Description: A user-defined function that prints a personalized greeting.
 *     Input: One parameter `name` of type string, provided as a direct string value or variable.
 *     Return Type: undefined — no explicit return statement; console.log only prints.
 *
 *   - begger(money: number): undefined
 *     Description: A user-defined function that prints a thank-you message with a money value.
 *     Input: One parameter `money` of type number, provided as a direct numeric value or variable.
 *     Return Type: undefined — no explicit return statement; console.log only prints.
 *
 *   - console.log(value1: any, value2: any): void
 *     Description: Prints one or more values to the standard output (console), separated by space.
 *     Input: Accepts any data type(s) as direct values, variables, or expressions.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Type-2 Function: Accepts input via parameters but does not return a meaningful value.
 *   - Parameter vs Argument: `name` and `money` are parameters (in definition); "Pramod", "Amit", 100 are arguments (at call time).
 *   - Implicit Return: Without `return`, the function result is always `undefined`.
 * ============================================================
 */

function greetByName(name) {
    console.log("Hi ", name);
}

greetByName("Pramod");
let result = greetByName("Amit");
console.log(result);


function begger(money) {
    console.log("Thanks", money);
}

let returnMesomething = begger(100);
console.log(returnMesomething);


/*
================================================================================
                    DETAILED EXPLANATION: TYPE-2 FUNCTION
================================================================================

1. WHAT IS A TYPE-2 FUNCTION?
------------------------------
A Type-2 Function accepts INPUT (parameters) but does NOT return a value.

  Characteristics:
    ✓ HAS parameters → `()` contains placeholders for input data.
    ✗ NO return      → No `return` keyword; implicitly returns `undefined`.

  Syntax:
    function functionName(parameter) {
        // use the parameter inside
    }


2. CODE BREAKDOWN
------------------

  function greetByName(name) {
      console.log("Hi ", name);
  }

  >> `name` is the PARAMETER (placeholder in the definition).

  greetByName("Pramod");
  >> `"Pramod"` is the ARGUMENT (actual value passed during the call).
  >> Output: "Hi Pramod"

  let result = greetByName("Amit");
  >> Calls the function, prints "Hi Amit", and stores the return value.
  >> Since there is no `return`, result = `undefined`.

  console.log(result);
  >> Output: undefined

  function begger(money) {
      console.log("Thanks", money);
  }

  let returnMesomething = begger(100);
  >> Output: "Thanks 100"
  >> returnMesomething = undefined (no return statement)

  console.log(returnMesomething);
  >> Output: undefined


3. PARAMETER vs ARGUMENT (REVISITED)
-------------------------------------
  Parameter  → `name`, `money`  (defined in the function signature)
  Argument   → `"Pramod"`, `"Amit"`, `100`  (actual values passed during call)

  Think of it as:
    Parameter = The function's "mailbox slot name"
    Argument  = The "letter" you drop into that slot


4. WHEN TO USE TYPE-2 FUNCTIONS?
---------------------------------
Use Type-2 functions when:
  - You need to customize behavior based on input (e.g., personalized messages).
  - The task is a side effect (e.g., logging, updating UI, sending data).
  - The caller does NOT need a computed result back.

  Examples:
    - Displaying a greeting for a specific user.
    - Logging a test name and status.
    - Printing a formatted report.


5. KEY TAKEAWAY
----------------
  TYPE-2 = Takes Input + No Output
  Great for parameterized actions where only a side effect is needed.
  Remember: storing the result will always give you `undefined`.

================================================================================
*/

