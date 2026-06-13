/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Real-World Arrow Functions — converting a normal function to arrow function for API status validation.
 *
 * Functions/Methods Used:
 *   - validateStatusCode(status: number): void
 *     Description: A standard named function that checks if an HTTP status code is in the success range.
 *     Input: One parameter `status` of type number, provided as a direct numeric value or variable.
 *     Return Type: void — no explicit return; only prints to console.
 *
 *   - validateStatusCode_Exp(status: number): void
 *     Description: A function expression that checks if an HTTP status code is in the success range.
 *     Input: One parameter `status` of type number, provided as a direct numeric value or variable.
 *     Return Type: void — no explicit return; only prints to console.
 *
 *   - validateStatusCode_Arrow(status: number): void
 *     Description: An arrow function that checks if an HTTP status code is in the success range.
 *     Input: One parameter `status` of type number, provided as a direct numeric value or variable.
 *     Return Type: void — no explicit return; only prints to console.
 *
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Function Declaration vs Expression vs Arrow: Three ways to define the same logic.
 *   - Comparison Operators: `>=` and `<=` used to define a valid status code range (200-300).
 *   - Logical AND: `&&` ensures both conditions must be true for the success message.
 *   - Real-World Use: Validating HTTP response status codes in API testing / Playwright scripts.
 * ============================================================
 */

// if (ourStatusCode >= 200 && ourStatusCode < 300)
//This is a perfectly normal function.
function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

// This is a function as an expression.
const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}



// Arrow function
const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

validateStatusCode_Arrow();


/*
================================================================================
                    DETAILED EXPLANATION: ARROW FUNCTION — REAL-WORLD
================================================================================

1. CONTEXT OF THIS FILE
------------------------
This file demonstrates the SAME logic written in THREE different function styles:
  a) Function Declaration
  b) Function Expression
  c) Arrow Function

The real-world scenario: Validating HTTP status codes in API testing.
If status is between 200 and 300, the request is considered successful.


2. CODE BREAKDOWN (ALL THREE VERSIONS)
---------------------------------------

  // VERSION 1: Function Declaration
  function validateStatusCode(status) {
      if (status >= 200 && status <= 300) {
          console.log("Request is fine!")
      }
  }
  >> Standard named function. Hoisted. Traditional syntax.

  // VERSION 2: Function Expression
  const validateStatusCode_Exp = function (status) {
      if (status >= 200 && status <= 300) {
          console.log("Request is fine!")
      }
  }
  >> Anonymous function assigned to a variable. Not hoisted.

  // VERSION 3: Arrow Function
  const validateStatusCode_Arrow = (status) => {
      if (status >= 200 && status <= 300) {
          console.log("Request is fine!")
      }
  }
  >> Arrow function with a BLOCK body (multiple statements → `{}` required).
  >> Because it uses `{}`, an explicit `return` would be needed if we wanted
     to return a value. Here, there is no return; it only logs.

  validateStatusCode_Arrow();
  >> Called with NO argument. `status` inside becomes `undefined`.
  >> `undefined >= 200` is `false`, so nothing is logged.


3. LOGICAL OPERATOR BREAKDOWN
------------------------------
  if (status >= 200 && status <= 300)

  - `status >= 200`  → Checks if status is 200 or MORE.
  - `status <= 300`  → Checks if status is 300 or LESS.
  - `&&` (Logical AND) → BOTH conditions must be TRUE for the whole statement to be true.

  Valid HTTP Success Range: 200 → 300 (inclusive).
  Examples:
    - 200 (OK)          → true && true  → true  → "Request is fine!"
    - 404 (Not Found)   → false && true → false → Nothing logged.
    - 500 (Server Error)→ false && false→ false → Nothing logged.


4. WHY SHOW ALL THREE STYLES?
-------------------------------
In real projects, you will encounter all three. Knowing how to read and write
each style makes you versatile:

  | Scenario                  | Recommended Style        | Reason                          |
  |---------------------------|--------------------------|---------------------------------|
  | General utility functions | Function Declaration     | Familiar, hoisted               |
  | Callbacks / HOFs          | Arrow Function           | Concise, lexical `this`         |
  | Scoped logic assignment   | Function Expression      | Control over hoisting           |


5. KEY TAKEAWAY
----------------
  The same logic can be expressed in multiple function styles.
  Arrow functions with block bodies `{}` behave just like normal functions
  inside the body but have different `this` and hoisting rules.
  Always match the function style to the team's conventions and the use case.

================================================================================
*/
