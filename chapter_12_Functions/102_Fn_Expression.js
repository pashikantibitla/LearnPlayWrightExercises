/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Function Expressions — assigning a function to a variable (anonymous or named).
 *
 * Functions/Methods Used:
 *   - greet(name: string): string
 *     Description: An anonymous function assigned to the constant `greet`; returns a greeting string.
 *     Input: One parameter `name` of type string, provided as a direct string value or variable.
 *     Return Type: string — the template literal evaluates to a greeting string.
 *
 *   - greet1(name1: string): string
 *     Description: A standard named function declaration that returns a greeting string.
 *     Input: One parameter `name1` of type string, provided as a direct string value or variable.
 *     Return Type: string — the template literal evaluates to a greeting string.
 *
 *   - greet2(name1: string): string
 *     Description: A function expression (anonymous) assigned to the constant `greet2`; returns a greeting string.
 *     Input: One parameter `name1` of type string, provided as a direct string value or variable.
 *     Return Type: string — the template literal evaluates to a greeting string.
 *
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Function Declaration: `function name() { ... }` — hoisted to the top of the scope.
 *   - Function Expression: `const name = function() { ... }` — not hoisted; assigned to a variable.
 *   - Anonymous Function: A function without a name, commonly used in expressions.
 *   - Hoisting: Function declarations are hoisted; function expressions are NOT hoisted.
 * ============================================================
 */

const greet = function (name) {
    return `Hello, ${name}`;
}

let r = greet("Pramod");
console.log(r);


// Type 4 normal Fn
function greet1(name1) {
    return `Hello, ${name1}!`;
}


// Functions as Expression
const greet2 = function (name1) {
    return `Hello, ${name1}!`;
}

console.log(greet1("Bob"));
console.log(greet2("Bob"));


/*
================================================================================
                    DETAILED EXPLANATION: FUNCTION EXPRESSIONS
================================================================================

1. WHAT IS A FUNCTION EXPRESSION?
----------------------------------
A Function Expression is when a function is assigned to a VARIABLE.
Unlike Function DECLARATIONS, expressions are NOT hoisted to the top.

  Two main forms:
    a) Anonymous Function Expression:
       const myFn = function(param) { ... };

    b) Named Function Expression (less common):
       const myFn = function myName(param) { ... };


2. CODE BREAKDOWN
------------------

  const greet = function (name) {
      return `Hello, ${name}`;
  }

  >> `function (name) { ... }` has NO name → ANONYMOUS function.
  >> It is assigned to the constant variable `greet`.
  >> We call it using the variable name: greet("Pramod").

  let r = greet("Pramod");
  console.log(r);

  // Type 4 normal Fn
  function greet1(name1) {
      return `Hello, ${name1}!`;
  }

  >> This is a FUNCTION DECLARATION (not an expression).
  >> It HAS a name (`greet1`) and is hoisted.

  // Functions as Expression
  const greet2 = function (name1) {
      return `Hello, ${name1}!`;
  }

  >> This is a FUNCTION EXPRESSION assigned to `greet2`.
  >> It behaves the same way when called, but differs in HOISTING.

  console.log(greet1("Bob"));  // Works
  console.log(greet2("Bob"));  // Works


3. FUNCTION DECLARATION vs FUNCTION EXPRESSION
-----------------------------------------------

| Feature              | Function Declaration          | Function Expression            |
|----------------------|--------------------------------|----------------------------------|
| Syntax               | function name() { ... }        | const name = function() { ... }  |
| Hoisting             | YES — can be called before      | NO — cannot be called before      |
|                      | definition in the code.         | definition in the code.          |
| Name                 | Must have a name                | Can be anonymous                  |
| `this` behavior      | Standard                        | Standard (arrow differs)          |
| Use case             | General purpose                 | Callbacks, closures, HOFs         |

  Example of Hoisting Difference:
    sayHello();  // Works!
    function sayHello() { console.log("Hi"); }

    sayHi();     // ERROR! Cannot access before initialization.
    const sayHi = function() { console.log("Hi"); };


4. WHY USE FUNCTION EXPRESSIONS?
---------------------------------
  - Better control over scope: The function only exists where the variable is assigned.
  - Essential for callbacks: Pass anonymous functions inline.
  - Used in closures and Higher-Order Functions.
  - Makes code harder to accidentally call before it is defined.


5. KEY TAKEAWAY
----------------
  Function Declaration → `function name() {}` → Hoisted, standalone.
  Function Expression  → `const name = function() {}` → Not hoisted, assigned to variable.
  Both behave identically when called, but hoisting and naming rules differ.
  Choose expressions when you need control, callbacks, or want to avoid hoisting surprises.

================================================================================
*/
