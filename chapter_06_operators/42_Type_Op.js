/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: typeof Operator
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - typeof operand: string
 *     Description: Returns a string indicating the data type of the unevaluated operand.
 *     Input: Accepts any operand as a direct value, variable, or expression.
 *     Return Type: string — returns the name of the data type (e.g., "number", "string", "boolean", "undefined", "object").
 * 
 * Key Concepts:
 *   - typeof "hello" returns "string".
 *   - typeof 123 returns "number" (both integers and floats are of type number in JavaScript).
 *   - typeof true returns "boolean".
 *   - typeof undefined returns "undefined".
 *   - typeof null returns "object" (a well-known legacy bug in JavaScript).
 *   - typeof [] returns "object" (arrays are technically objects).
 * ============================================================
 */

console.log(typeof "hello");
console.log(typeof 123); // int -> number
console.log(typeof 31.4); // float -> number
// typeof true
// typeof undefined  -> undefined
// typeof null  -> object
// typeof [] -> object
console.log(typeof []); // -> object

/*
================================================================================
                           DETAILED EXPLANATION
================================================================================

This file demonstrates the typeof operator in JavaScript.

typeof returns a string indicating the data type of its operand. It is one of
the most reliable ways to check primitive types, though it has some well-known
quirks (especially with null and arrays).

================================================================================
                           STEP-BY-STEP CODE BREAKDOWN
================================================================================

Step 1: console.log(typeof "hello");
  - "hello" is a string literal.
  - Output: "string"

Step 2: console.log(typeof 123);
  - 123 is an integer, but JavaScript has no separate integer type.
  - Output: "number"

Step 3: console.log(typeof 31.4);
  - 31.4 is a floating-point number.
  - Output: "number"
  - Key Point: both integers and floats share the same type in JS.

Step 4: console.log(typeof []);
  - [] is an array.
  - Output: "object"
  - Arrays are technically objects in JavaScript's type system.
  - To specifically detect arrays, use Array.isArray([ ]).

================================================================================
                             KEY CONCEPTS
================================================================================

typeof Syntax:
  - typeof operand or typeof(operand).
  - Returns a lowercase string representing the type.

Primitives:
  - "string", "number", "boolean", "undefined", "bigint", "symbol".

Quirks:
  - typeof null returns "object" (a historical bug from the first JS engine).
  - typeof [] returns "object" (arrays are objects).
  - typeof NaN returns "number" (NaN is a numeric special value).

================================================================================
                          COMPARISON TABLE
================================================================================

| Value         | typeof Result | Notes                              |
|---------------|---------------|------------------------------------|
| "hello"       | "string"      | Standard string                    |
| 123           | "number"      | Integer and float both -> number   |
| 31.4          | "number"      | Floating point                     |
| true          | "boolean"     | Boolean primitive                  |
| undefined     | "undefined"   | Uninitialized variable             |
| null          | "object"      | LEGACY BUG                         |
| []            | "object"      | Arrays are objects                 |
| {}            | "object"      | Plain object                       |
| NaN           | "number"      | Special numeric value              |
| function(){}  | "function"    | Functions have their own typeof    |

================================================================================
                          REAL-WORLD USE CASES
================================================================================

1. Input Validation:
   if (typeof userInput !== "string") { throw new Error("String required"); }

2. Safe Property Access:
   if (typeof config.timeout === "number") { ... }

3. Polyfill Detection:
   if (typeof fetch === "function") { useNativeFetch(); } else { loadPolyfill(); }

4. Debugging Type Issues:
   console.log(typeof mysteryValue); // quickly identify what type you have.

5. API Response Parsing:
   let data = typeof response === "string" ? JSON.parse(response) : response;

================================================================================
                          COMMON MISTAKES TO AVOID
================================================================================

Mistake 1: Using typeof to check for null.
  typeof null // "object". Use value === null instead.

Mistake 2: Using typeof to check for arrays.
  typeof [] // "object". Use Array.isArray(value) instead.

Mistake 3: Using typeof on undeclared variables in older environments.
  typeof undeclaredVar // "undefined" (safe).
  // But trying to read undeclaredVar directly throws ReferenceError.

Mistake 4: Capitalizing the result.
  typeof 123 === "Number" // false. Always lowercase: "number".

================================================================================
                            KEY TAKEAWAY
================================================================================

typeof is great for checking primitive types and function existence, but be
aware of its quirks with null and arrays. For null, use === null. For arrays,
use Array.isArray(). Always compare typeof results against lowercase strings.
================================================================================
*/