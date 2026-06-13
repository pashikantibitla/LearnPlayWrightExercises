/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Functions with Template Literals — using backticks and interpolation inside a return statement.
 *
 * Functions/Methods Used:
 *   - greet(name: string): string
 *     Description: A user-defined function that returns a greeting message using template literal interpolation.
 *     Input: One parameter `name` of type string, provided as a direct string value or variable.
 *     Return Type: string — the template literal evaluates to a string with the name inserted.
 *
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Template Literal: Strings wrapped in backticks (``) that support `${expression}` interpolation.
 *   - Interpolation: Embedding a variable or expression directly inside a string using `${}` syntax.
 *   - Return Type: Template literals always produce a string value.
 * ============================================================
 */

function greet(name) {
    return `Hello, ${name}`;
}

let result = greet("Alice");
console.log(result);


/*
================================================================================
                    DETAILED EXPLANATION: TEMPLATE LITERALS IN FUNCTIONS
================================================================================

1. WHAT IS A TEMPLATE LITERAL?
-------------------------------
Template Literals are a modern way to create strings in JavaScript (ES6+).
Instead of single/double quotes, they use BACKTICKS (`` ` ``).

  Key Features:
    - String Interpolation: Embed variables/expressions using `${}`.
    - Multi-line Strings: Write strings across multiple lines easily.
    - Expression Evaluation: Any valid JS expression can go inside `${}`.

  Syntax:
    `string text ${expression} more text`


2. CODE BREAKDOWN
------------------

  function greet(name) {
      return `Hello, ${name}`;
  }

  >> The backticks `` ` `` indicate this is a template literal.
  >> `${name}` is INTERPOLATION: the value of the `name` parameter is
     inserted directly into the string.
  >> If name = "Alice", the result is "Hello, Alice".

  let result = greet("Alice");
  >> Calls the function with "Alice" as the argument.
  >> Returns "Hello, Alice" and stores it in `result`.

  console.log(result);
  >> Output: Hello, Alice


3. OLD WAY vs NEW WAY
----------------------
Before template literals (ES5), we had to use string concatenation:

  OLD WAY (Concatenation):
    function greet(name) {
        return "Hello, " + name;
    }

  NEW WAY (Template Literal):
    function greet(name) {
        return `Hello, ${name}`;
    }

  Comparison Table:
  | Feature              | Old Way (+)               | Template Literal (`` ` ``) |
  |----------------------|---------------------------|----------------------------|
  | Readability          | Harder with many vars     | Clean and readable         |
  | Multi-line           | Requires `\n` or `+`      | Natural line breaks        |
  | Expression embedding | Manual concatenation      | `${expression}` inline   |
  | Code length          | Longer                    | Shorter and elegant        |


4. ADVANCED INTERPOLATION
--------------------------
You can put ANY valid JavaScript expression inside `${}`:

  function display(a, b) {
      return `Sum: ${a + b}, Product: ${a * b}`;
  }
  // display(2, 3) → "Sum: 5, Product: 6"

  function getInfo(user) {
      return `Name: ${user.name.toUpperCase()}, Age: ${user.age}`;
  }


5. WHEN TO USE TEMPLATE LITERALS?
------------------------------------
Use template literals when:
  - Building dynamic strings with variables (greetings, messages, URLs).
  - Creating multi-line formatted text (HTML templates, emails).
  - Embedding expressions directly inside strings for cleaner code.


6. KEY TAKEAWAY
----------------
  Template Literals = Backticks + `${expression}`
  They make string handling in JavaScript cleaner, safer, and more readable.
  Always prefer them over old-style concatenation (`+`) for complex strings.

================================================================================
*/
