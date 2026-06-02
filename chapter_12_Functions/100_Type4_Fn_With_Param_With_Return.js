/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Type-4 Function — with parameters AND with a return value.
 *
 * Functions/Methods Used:
 *   - sumOfTwoNumner(a: number, b: number): number
 *     Description: A user-defined function that adds two numbers and returns the sum.
 *     Input: Two parameters `a` and `b` of type number, provided as direct numeric values or variables.
 *     Return Type: number — the arithmetic result of `a + b`.
 *
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Type-4 Function: Accepts input via parameters and returns a computed result.
 *   - return Keyword: Sends the computed value (a + b) back to the caller.
 *   - Return Type: The expression `a + b` evaluates to a number, so the return type is number.
 * ============================================================
 */

function sumOfTwoNumner(a, b) {
    return a + b;
}

let c = sumOfTwoNumner(4, 5);
console.log(c);


/*
================================================================================
                    DETAILED EXPLANATION: TYPE-4 FUNCTION
================================================================================

1. WHAT IS A TYPE-4 FUNCTION?
------------------------------
A Type-4 Function is the MOST COMPLETE and common form:
  - ACCEPTS parameters (input)
  - RETURNS a value (output)

  Characteristics:
    ✓ HAS parameters → Receives data to work with.
    ✓ HAS return     → Sends a computed result back to the caller.

  Syntax:
    function functionName(param1, param2) {
        return param1 + param2;
    }


2. CODE BREAKDOWN
------------------

  function sumOfTwoNumner(a, b) {
      return a + b;
  }

  >> `a` and `b` are PARAMETERS (placeholders for numbers).
  >> `return a + b` computes the sum and sends it back.

  let c = sumOfTwoNumner(4, 5);
  >> Arguments `4` and `5` are passed to `a` and `b`.
  >> Function computes `4 + 5` → returns `9`.
  >> Variable `c` stores `9`.

  console.log(c);
  >> Output: 9


3. WHY IS THIS THE MOST USEFUL TYPE?
-------------------------------------
Type-4 functions are the backbone of reusable logic:
  - They are like a "black box": you put data in, you get a result out.
  - They are easy to test: provide inputs → assert outputs.
  - They can be chained and combined with other functions.

  Math analogy:
    f(x, y) = x + y
    f(4, 5) = 9


4. MULTIPLE PARAMETERS ORDER
-----------------------------
When defining multiple parameters, the ORDER of arguments matters:

  function divide(a, b) {
      return a / b;
  }

  divide(10, 2) → 5
  divide(2, 10) → 0.2  (order changed = different result!)

  Always ensure arguments are passed in the same order as parameters.


5. WHEN TO USE TYPE-4 FUNCTIONS?
---------------------------------
Use Type-4 functions when:
  - You need to process input data and produce a result.
  - You want reusable, testable computation logic.
  - The caller needs the computed value for further steps.

  Examples:
    - Adding two numbers.
    - Calculating percentages.
    - Validating user input and returning true/false.
    - Formatting strings based on dynamic values.


6. KEY TAKEAWAY
----------------
  TYPE-4 = Takes Input + Returns Output
  This is the "bread and butter" of programming.
  Master this pattern, and you can solve 90% of logic problems in JavaScript.

================================================================================
*/
