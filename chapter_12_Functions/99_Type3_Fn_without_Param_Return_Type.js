/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Type-3 Function — no parameters, but has a return value.
 *
 * Functions/Methods Used:
 *   - goToRelativeHouse(): string
 *     Description: A user-defined function that prints a message and returns a greeting string.
 *     Input: No input parameters (empty parentheses).
 *     Return Type: string — the function explicitly returns the string literal "Hello".
 *
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Type-3 Function: A function that takes no input but returns a value using the `return` keyword.
 *   - return Keyword: Stops function execution and passes the specified value back to the caller.
 *   - Return Type: Determined by the expression following `return`; here it is `string`.
 * ============================================================
 */

function goToRelativeHouse() {
    console.log('Hi');
    return "Hello";
}


let relative = goToRelativeHouse();
console.log(relative);


/*
================================================================================
                    DETAILED EXPLANATION: TYPE-3 FUNCTION
================================================================================

1. WHAT IS A TYPE-3 FUNCTION?
------------------------------
A Type-3 Function takes NO parameters but RETURNS a value.

  Characteristics:
    ✗ NO parameters → `()` is empty.
    ✓ HAS return    → Uses the `return` keyword to send data back.

  Syntax:
    function functionName() {
        return someValue;
    }


2. CODE BREAKDOWN
------------------

  function goToRelativeHouse() {
      console.log('Hi');
      return "Hello";
  }

  >> No input parameters.
  >> First line inside: `console.log('Hi')` → prints "Hi" (side effect).
  >> Second line: `return "Hello"` → sends the string back to the caller.

  let relative = goToRelativeHouse();
  >> Function executes:
     1. Prints "Hi" to console.
     2. Returns "Hello".
  >> Variable `relative` now stores "Hello".

  console.log(relative);
  >> Output: "Hello"


3. UNDERSTANDING THE RETURN KEYWORD
------------------------------------
  - `return` IMMEDIATELY stops the function execution.
  - Any code AFTER a `return` statement will NOT run.
  - The value after `return` is sent back to the place where the function was called.

  Example:
    function demo() {
        return "A";
        console.log("B");  // This line NEVER executes!
    }


4. SIDE EFFECT vs RETURN VALUE
-------------------------------
  In Type-3 functions, you may see BOTH:
    - Side effects (e.g., console.log inside the function body)
    - A return value (the data sent back)

  Best Practice:
    Try to separate concerns: either perform a side effect OR return a value.
    Mixing both can make functions harder to test and reason about.


5. WHEN TO USE TYPE-3 FUNCTIONS?
---------------------------------
Use Type-3 functions when:
  - The output is fixed or internally computed (no external input needed).
  - You need to encapsulate a value or configuration to reuse elsewhere.
  - The caller needs the result for further processing.

  Examples:
    - Getting the current date formatted as a string.
    - Returning a default configuration object.
    - Generating a fixed ID or token.


6. KEY TAKEAWAY
----------------
  TYPE-3 = No Input + Has Output
  The function produces data internally and hands it back to the caller.
  This is where the `return` keyword becomes essential.

================================================================================
*/
