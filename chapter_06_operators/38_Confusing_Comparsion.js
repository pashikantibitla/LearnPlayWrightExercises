/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Confusing Comparisons and Type Coercion in JavaScript
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - Number.isNaN(value: number): boolean
 *     Description: Determines whether the passed value is NaN (Not-a-Number) and of type Number.
 *     Input: Accepts a numeric value as a direct value, variable, or expression.
 *     Return Type: boolean — returns true if the value is NaN and of type Number; otherwise false.
 *   - typeof operand: string
 *     Description: Returns a string indicating the data type of the unevaluated operand.
 *     Input: Accepts any operand as a direct value, variable, or expression.
 *     Return Type: string — returns the name of the data type (e.g., "number", "string", "boolean", "undefined", "object").
 *   - Object.is(value1: any, value2: any): boolean
 *     Description: Determines whether two values are the same value (handles NaN and -0 correctly).
 *     Input: Accepts two values of any data type as direct values, variables, or expressions.
 *     Return Type: boolean — returns true if both values are the same value; otherwise false.
 * 
 * Key Concepts:
 *   - Loose Equality (==) Traps: == performs type coercion, leading to surprising results (e.g., [] == false is true).
 *   - Strict Equality (===): Always use === (and !==) to avoid type coercion surprises.
 *   - null vs undefined: null == undefined is true, but null === undefined is false.
 *   - NaN Behavior: NaN is never equal to anything, including itself; use Number.isNaN() for reliable checks.
 *   - typeof Quirks: typeof null returns "object" (a known legacy bug in JavaScript).
 *   - Array/Type Coercion: Arrays are converted to strings during loose equality comparisons with primitives.
 * ============================================================
 */

console.log("38 — Confusing Comparisons in JS");
// ============================================================
// 38 — Confusing Comparisons in JS:  ==  vs  ===
// ============================================================
//
// Rule of thumb:
//   ==   → loose equality  (does type coercion, surprising)
//   ===  → strict equality (no coercion, what you usually want)
//
// Run with:  node 38_Confusing_Comparsion.js
// ============================================================


// ---------- 1. Empty string vs 0 vs "0"  (transitivity broken) ----------
console.log("" == 0);        // true   → "" coerced to Number → 0
console.log("0" == 0);       // true   → "0" coerced to Number → 0
console.log("" == "0");      // false  → both strings, compared as-is

// === fixes it
console.log("" === 0);       // false
console.log("0" === 0);      // false
console.log("" === "0");     // false


// ---------- 2. null and undefined ----------
console.log(null == undefined);   // true   → special rule in ==
console.log(null === undefined);  // false  → different types
console.log(null == 0);           // false  → null only == undefined/null
console.log(null >= 0);           // true   → >= coerces null to 0  (gotcha!)
console.log(null > 0);            // false
console.log(null == 0 || null > 0); // false … but null >= 0 is true 🤯


// ---------- 3. Booleans coerce to numbers ----------
console.log(true == 1);      // true
console.log(true == "1");    // true   → "1" → 1, true → 1
console.log(false == 0);     // true
console.log(false == "");    // true   → both → 0
console.log(false == "0");   // true   → "0" → 0, false → 0
console.log(true === 1);     // false  → different types


// ---------- 4. NaN — never equal to anything, even itself ----------
console.log(NaN == NaN);     // false
console.log(NaN === NaN);    // false
console.log(Number.isNaN(NaN));  // true  ← correct way to check


// ---------- 5. Object vs primitive ----------
console.log([] == false);    // true   → [] → "" → 0, false → 0
console.log([] == 0);        // true   → [] → "" → 0
console.log([] == "");       // true   → [] → ""
console.log([0] == false);   // true   → [0] → "0" → 0
console.log([1] == true);    // true   → [1] → "1" → 1
console.log([1, 2] == "1,2"); // true   → array toString
console.log({} == {});       // false  → different references
console.log([] == []);       // false  → different references


// ---------- 6. String to number traps ----------
console.log(" " == 0);       // true   → " " trimmed → "" → 0
console.log("\n\t" == 0);    // true   → whitespace → 0
console.log("0x10" == 16);   // true   → hex string parsed
console.log("1e2" == 100);   // true   → scientific notation


// ---------- 7. The infamous trio ----------
console.log(null == false);       // false  ← surprise! null only == undefined
console.log(undefined == false);  // false  ← same here
console.log(undefined == 0);      // false


// ---------- 8. typeof results (always strings) ----------
console.log(typeof null);          // "object"  (legacy bug)
console.log(typeof undefined);     // "undefined"
console.log(typeof NaN);           // "number"
console.log(typeof null === "object");      // true
console.log(typeof undefined === "undefined"); // true

// NaN = not a Number


// ---------- 10. Quick interview cheats ----------
// "" == 0           → true
// "" == "0"         → false
// 0 == "0"          → true
// null == undefined → true
// null == 0         → false   but   null >= 0 → true
// NaN == NaN        → false
// [] == ![]         → true   (![] → false → 0; [] → "" → 0)
console.log([] == ![]);   // true 🤯


// ============================================================
// TAKEAWAY:  Always use ===  (and !==).
// Use ==  only for null/undefined check:   if (x == null) { ... }
// Use Object.is for NaN and -0 edge cases.
// ============================================================

/*
================================================================================
                           DETAILED EXPLANATION
================================================================================

This file is a comprehensive deep-dive into JavaScript's confusing comparison
behaviors. It covers empty strings, null/undefined interactions, boolean
coercion, NaN quirks, object-to-primitive coercion, string-to-number traps,
typeof oddities, and the infamous [] == ![] interview question.

================================================================================
                           STEP-BY-STEP CODE BREAKDOWN
================================================================================

Section 1: Empty String vs 0 vs "0"
  - "" == 0 is true ("" coerces to 0).
  - "0" == 0 is true ("0" coerces to 0).
  - "" == "0" is false (both strings, no coercion).
  - === fixes all three to false because types differ.

Section 2: null and undefined
  - null == undefined is true (special spec rule).
  - null === undefined is false (different types).
  - null == 0 is false (null does not coerce to 0 for ==).
  - null >= 0 is true (relational operators DO coerce null to 0).

Section 3: Booleans Coerce to Numbers
  - true == 1, false == 0 in loose equality.
  - true == "1" because "1" -> 1 and true -> 1.
  - true === 1 is false (different types).

Section 4: NaN
  - NaN is NEVER equal to anything, including itself.
  - Use Number.isNaN(NaN) for reliable checks.

Section 5: Object vs Primitive
  - [] == false is true ([] -> "" -> 0, false -> 0).
  - [1, 2] == "1,2" is true (array toString conversion).
  - {} == {} is false (different object references).

Section 6: String to Number Traps
  - " " == 0 is true (whitespace trims to empty string -> 0).
  - "0x10" == 16 is true (hexadecimal parsing).
  - "1e2" == 100 is true (scientific notation).

Section 7: The Infamous Trio
  - null == false is false (null only == undefined).
  - undefined == false is false.
  - undefined == 0 is false.

Section 8: typeof Results
  - typeof null returns "object" (a well-known legacy bug).
  - typeof NaN returns "number" (NaN is technically a number type).

Section 9: [] == ![]
  - ![] evaluates to false (empty array is truthy, negated -> false).
  - [] == false is true ([] -> "" -> 0, false -> 0).
  - Output: true

================================================================================
                             KEY CONCEPTS
================================================================================

Type Coercion:
  - JavaScript automatically converts types during loose equality and
    relational operations. This leads to many "gotchas."

Abstract Equality Algorithm (==):
  - Defined in the ECMAScript specification. It follows a complex set of
    rules to coerce operands to a common type before comparison.

================================================================================
                          COMPARISON TABLE
================================================================================

| Expression         | Result | Reason                                 |
|--------------------|--------|----------------------------------------|
| "" == 0            | true   | "" -> 0                                |
| "0" == 0           | true   | "0" -> 0                               |
| "" == "0"          | false  | String comparison                      |
| null == undefined  | true   | Special rule                           |
| null >= 0          | true   | null -> 0 for relational ops             |
| true == 1          | true   | true -> 1                              |
| NaN == NaN         | false  | NaN is not equal to anything           |
| [] == false        | true   | [] -> "" -> 0, false -> 0              |
| [] == ![]          | true   | ![] -> false, then same as above       |
| typeof null          | object | Legacy bug                             |

================================================================================
                          REAL-WORLD USE CASES
================================================================================

1. Interview Preparation:
   Knowing these edge cases separates junior developers from senior ones.

2. Debugging Legacy Code:
   Old codebases often use ==; understanding coercion helps fix hidden bugs.

3. Writing Linting Rules:
   Tools like ESLint's eqeqeq rule enforce === to avoid these traps.

4. API Data Validation:
   When receiving mixed types from APIs, strict checks prevent false positives.

================================================================================
                          COMMON MISTAKES TO AVOID
================================================================================

Mistake 1: Using == everywhere.
  // Use === for 99% of comparisons.

Mistake 2: Checking NaN with == or ===.
  NaN == NaN // false. Always use Number.isNaN().

Mistake 3: Trusting typeof for null.
  typeof null // "object". Use value === null for null checks.

Mistake 4: Comparing arrays/objects with == expecting value equality.
  [1,2] == [1,2] // false. Use JSON.stringify() or deep equality libraries.

================================================================================
                            KEY TAKEAWAY
================================================================================

JavaScript's loose equality and coercion rules are full of surprising edge
cases. The golden rule is: ALWAYS use === and !== unless you explicitly need
the null/undefined shorthand (if (x == null)). For NaN and -0 comparisons,
use Object.is().
================================================================================
*/
