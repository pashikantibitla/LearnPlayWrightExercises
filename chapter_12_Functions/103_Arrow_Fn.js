/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Arrow Functions (ES6) — concise syntax for writing function expressions.
 *
 * Functions/Methods Used:
 *   - doubleIt(n: number): number
 *     Description: An arrow function that doubles the given number.
 *     Input: One parameter `n` of type number, provided as a direct numeric value or variable.
 *     Return Type: number — the result of the expression `n * 2`.
 *
 *   - printIt(name: string): void
 *     Description: An arrow function that prints the given name to the console.
 *     Input: One parameter `name` of type string, provided as a direct string value or variable.
 *     Return Type: void — console.log returns undefined; the arrow function inherits that.
 *
 *   - add(a: number, b: number): number
 *     Description: A standard named function that returns the sum of two numbers.
 *     Input: Two parameters `a` and `b` of type number, provided as direct numeric values or variables.
 *     Return Type: number — the arithmetic result of `a + b`.
 *
 *   - add2(a: number, b: number): number
 *     Description: An arrow function that returns the sum of two numbers (concise body).
 *     Input: Two parameters `a` and `b` of type number, provided as direct numeric values or variables.
 *     Return Type: number — the expression `a + b` is implicitly returned in concise arrow syntax.
 *
 *   - say(): void
 *     Description: A standard named function that prints "Hi" to the console.
 *     Input: No input parameters.
 *     Return Type: void — no explicit return; implicitly returns undefined.
 *
 *   - say1(): void
 *     Description: An arrow function (concise body) that prints "Hi" to the console.
 *     Input: No input parameters.
 *     Return Type: void — console.log returns undefined.
 *
 *   - say2(): string
 *     Description: An arrow function (concise body) that returns the string "Hi".
 *     Input: No input parameters.
 *     Return Type: string — the string literal "Hi" is implicitly returned.
 *
 *   - greet(name: string): string
 *     Description: An arrow function (block body) that builds and returns a greeting message.
 *     Input: One parameter `name` of type string, provided as a direct string value or variable.
 *     Return Type: string — the concatenated string "Hi" + name is explicitly returned.
 *
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Arrow Function Syntax: (params) => expression  OR  (params) => { ... }
 *   - Concise Body: When only a single expression exists, curly braces and `return` can be omitted.
 *   - Block Body: Curly braces required; explicit `return` keyword must be used.
 *   - Implicit Return: In concise syntax, the expression result is automatically returned.
 *   - this Binding: Arrow functions do NOT have their own `this`; they inherit from the parent scope.
 * ============================================================
 */

// Arrow Function (ES6)

// const greet = function (name1) {
//     return "Hi" + name1;
// }

// let r = greet("Pramod");
// console.log(r);

// const greet2 = (name1) => "Hi" + name1;
// let r2 = greet2("Pramod");
// console.log(r2);

// If you want to make a normal function to arrow function.
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>
//

const doubleIt = n => n * 2;
console.log(doubleIt(10));

const printIt = name => console.log(name);
printIt("Dutta");

function add(a, b) {
    return a + b;
}

const add2 = (a, b) => a + b;

function say() {
    console.log("Hi");
}

const say1 = () => console.log("Hi");
const say2 = () => 'Hi';

const greet = (name) => {
    const message = "Hi" + name;
    return message;
}


/*
================================================================================
                    DETAILED EXPLANATION: ARROW FUNCTIONS (ES6)
================================================================================

1. WHAT IS AN ARROW FUNCTION?
------------------------------
Arrow Functions are a concise way to write function expressions introduced
in ES6 (ECMAScript 2015). They use the "fat arrow" `=>` syntax.

  Basic Syntax:
    const myFn = (param1, param2) => expression;

  Or with a block body:
    const myFn = (param1, param2) => {
        // multiple statements
        return result;
    };


2. CODE BREAKDOWN
------------------

  const doubleIt = n => n * 2;
  >> Single parameter `n` → parentheses can be omitted.
  >> Single expression `n * 2` → curly braces and `return` can be omitted.
  >> Implicit return: the expression result is automatically returned.
  >> doubleIt(10) → 20

  const printIt = name => console.log(name);
  >> Single parameter `name`.
  >> Calls console.log as the expression (no explicit return needed).
  >> Returns `undefined` (console.log returns undefined).

  function add(a, b) {
      return a + b;
  }
  >> Normal function declaration for comparison.

  const add2 = (a, b) => a + b;
  >> Arrow equivalent of `add`.
  >> Multiple parameters → parentheses required.
  >> Concise body → no braces, implicit return.

  function say() {
      console.log("Hi");
  }
  >> Normal function with no parameters.

  const say1 = () => console.log("Hi");
  >> No parameters → MUST use empty parentheses `()`.

  const say2 = () => 'Hi';
  >> Returns the string "Hi" implicitly.

  const greet = (name) => {
      const message = "Hi" + name;
      return message;
  }
  >> Block body: multiple statements require `{}`.
  >> With block body, you MUST use the `return` keyword explicitly.


3. RULES FOR CONVERTING NORMAL FUNCTION → ARROW FUNCTION
-----------------------------------------------------------
  Step 1: Remove the `function` keyword.
  Step 2: Add `=>` between the parameters and the body.
  Step 3: If ONE expression, remove `{}` and `return` (implicit return).
  Step 4: If NO parameters, keep empty `()`.
  Step 5: If ONE parameter, `()` are optional.

  Example Conversion:
    function square(x) {
        return x * x;
    }
    ↓
    const square = x => x * x;


4. ARROW FUNCTION vs NORMAL FUNCTION
--------------------------------------

| Feature              | Normal Function                  | Arrow Function                  |
|----------------------|----------------------------------|---------------------------------|
| Syntax               | function name() {}               | (params) => {}                   |
| `this` Binding       | Has its own `this`               | Inherits `this` from parent scope|
| `arguments` object   | Available                        | NOT available                    |
| Constructor (new)    | Can be used with `new`            | CANNOT be used with `new`         |
| Hoisting             | Declarations are hoisted         | Expressions are NOT hoisted      |
| Conciseness          | More verbose                     | Shorter, cleaner                 |
| Implicit Return      | No                               | Yes (with concise body)          |


5. KEY GOTCHA: `this` BINDING
------------------------------
Arrow functions do NOT have their own `this`. They inherit it from the
surrounding (parent) scope. This is useful in callbacks but can be tricky
in object methods.

  Example:
    const obj = {
        name: "Pramod",
        greet: () => {
            console.log(this.name); // `this` refers to outer scope, NOT obj!
        }
    };

  For object methods that need `this`, prefer normal functions.


6. WHEN TO USE ARROW FUNCTIONS?
--------------------------------
Use arrow functions when:
  - You need short, one-liner utility functions.
  - You want implicit return for cleaner code.
  - You are writing callbacks and want to preserve the parent `this`.
  - You want to avoid hoisting issues (they are expressions).

Avoid arrow functions when:
  - You need the function to have its own `this` (e.g., object methods).
  - You need to use the `arguments` object.
  - You want to use the function as a constructor with `new`.


7. KEY TAKEAWAY
----------------
  Arrow Functions = Shorter Syntax + Lexical `this` + Implicit Return
  They are perfect for callbacks and functional programming patterns.
  Remember the two body styles: Concise (no `{}`, auto-return) vs Block (use `{}`, explicit `return`).

================================================================================
*/
