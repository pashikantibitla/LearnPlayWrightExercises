/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: String Concatenation using += Operator
 * 
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped local variable, optionally initializing it to a value.
 *     Input: Accepts a variable name and an optional initial value as a direct value, variable, or expression.
 *     Return Type: void — the declaration does not return a value; it creates a variable binding in the current scope.
 *   - += (Compound Assignment Operator)
 *     Description: Appends the right-hand value to the left-hand variable and assigns the result back to the variable.
 *     Input: Accepts a left-hand variable and a right-hand value as a direct value, variable, or expression.
 *     Return Type: Returns the new assigned value after the operation.
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - String Concatenation: The += operator can be used to combine strings by appending one string to another.
 *   - Example: s += " Dev" appends " Dev" to the existing value of s, resulting in "Hi Dev".
 * ============================================================
 */

let s = "Hi";
s += " Dev";
console.log(s);

/*
================================================================================
                           DETAILED EXPLANATION
================================================================================

This file demonstrates String Concatenation using the += compound assignment
operator. It shows how the += operator, when used with strings, appends the
right-hand string to the left-hand string variable.

================================================================================
                           STEP-BY-STEP CODE BREAKDOWN
================================================================================

Step 1: let s = "Hi";
  - Declares a variable s and initializes it with the string "Hi".

Step 2: s += " Dev";
  - The += operator appends " Dev" to the current value of s.
  - Equivalent to: s = s + " Dev";
  - s becomes "Hi Dev".

Step 3: console.log(s);
  - Outputs the concatenated string.
  - Output: Hi Dev

================================================================================
                             KEY CONCEPTS
================================================================================

String Concatenation with +=:
  - When += is used with a string variable, it performs concatenation.
  - It is a shorthand for writing s = s + "text".
  - Non-string values are coerced to strings during concatenation.

The + Operator with Strings:
  - If either operand of + is a string, JavaScript converts the other operand
    to a string and concatenates them.

================================================================================
                          COMPARISON TABLE
================================================================================

| Operator | Usage              | Example              | Result        |
|----------|--------------------|----------------------|---------------|
| +        | Concatenation      | "Hi" + " Dev"        | "Hi Dev"      |
| +=       | Append & Assign    | s += " Dev"          | s = "Hi Dev"  |
| ,        | console.log args   | console.log(a, b)    | prints both   |
| Template | Interpolation      | `Hi ${name}`         | "Hi Dev"      |

================================================================================
                          REAL-WORLD USE CASES
================================================================================

1. Building HTML Strings:
   let html = "<div>";
   html += "<h1>Title</h1>";
   html += "</div>";

2. Constructing Log Messages:
   let log = "[INFO] ";
   log += "User logged in at " + new Date();

3. URL Building:
   let url = "https://api.example.com";
   url += "/users";
   url += "?page=1";

4. SQL Query Construction (with caution):
   let query = "SELECT * FROM users";
   query += " WHERE active = 1";

================================================================================
                          COMMON MISTAKES TO AVOID
================================================================================

Mistake 1: Accidentally adding numbers and strings.
  let x = 5 + "10"; // "510" (string concatenation), NOT 15.
  let y = 5 + 10;   // 15 (numeric addition).

Mistake 2: Forgetting spaces.
  let s = "Hi";
  s += "Dev"; // Result: "HiDev", not "Hi Dev". Include spaces in strings.

Mistake 3: Using += for large strings in performance-critical loops.
  // Strings are immutable; each += creates a new string.
  // For massive concatenation, use an array with .join() instead.

================================================================================
                            KEY TAKEAWAY
================================================================================

The += operator is the standard, readable way to build strings incrementally.
Just remember that + switches to string concatenation if any operand is a string,
and always be mindful of spaces and type coercion.
================================================================================
*/