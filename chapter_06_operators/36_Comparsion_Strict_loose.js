/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Strict Equality (===) vs Loose Equality (==)
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - Loose Equality (==): Compares values after performing type coercion (converting operands to a common type).
 *   - Strict Equality (===): Compares both value and data type without type coercion.
 *   - Type Coercion Examples: 0 == "" is true because "" is coerced to 0; true == 1 is true because true is coerced to 1.
 *   - Inequality Operators: != is the loose inequality counterpart; !== is the strict inequality counterpart.
 * ============================================================
 */

// // number == string
console.log(42 == "42"); // == -> loose compasion
console.log(42 === "42"); //data type and converconsoleted value
// console.log(42 == "45"); //value different


console.log(5 === 5);
console.log(5 === "5");

console.log(5 == 5);
console.log(5 == "5");

console.log(0 == ""); // ?  "" = conveted to 0 - checked by the loose
console.log(0 === ""); 


console.log(true == 1);
console.log(false == 0);
console.log(true == "1");
console.log(true == 2);


console.log(5 != "5"); // false , 5 = int, "5" string, both of them are not equal? - lose couple
console.log(5 !== "5"); // true ( value, dataType)
//console.log(5 !=== "5"); This doesn't excit


// === Strict check we will check for both the datatype and value
// == Lose check we will check either value or data type.

/*
================================================================================
                           DETAILED EXPLANATION
================================================================================

This file demonstrates the critical difference between Loose Equality (==)
and Strict Equality (===) in JavaScript.

Loose equality performs TYPE COERCION before comparing values, which means it
converts operands to a common type. Strict equality compares BOTH value AND
data type without any coercion, making it safer and more predictable.

================================================================================
                           STEP-BY-STEP CODE BREAKDOWN
================================================================================

Step 1: console.log(42 == "42");
  - Loose equality: string "42" is coerced to number 42.
  - 42 == 42 is true.
  - Output: true

Step 2: console.log(42 === "42");
  - Strict equality: number 42 vs string "42".
  - Different types, so it is false.
  - Output: false

Step 3: console.log(5 === 5);
  - Same type (number), same value (5).
  - Output: true

Step 4: console.log(5 === "5");
  - Different types (number vs string).
  - Output: false

Step 5: console.log(5 == 5); / console.log(5 == "5");
  - Both are true because loose equality coerces "5" to 5.

Step 6: console.log(0 == "");
  - Empty string "" is coerced to number 0.
  - 0 == 0 is true.
  - Output: true

Step 7: console.log(0 === "");
  - Number 0 vs string "".
  - Different types.
  - Output: false

Step 8: console.log(true == 1); / console.log(false == 0);
  - Booleans are coerced to numbers: true -> 1, false -> 0.
  - Output: true for both.

Step 9: console.log(true == "1");
  - String "1" -> number 1, true -> number 1.
  - Output: true

Step 10: console.log(true == 2);
  - true -> 1, so 1 == 2 is false.
  - Output: false

Step 11: console.log(5 != "5");
  - Loose inequality: 5 == "5" is true, so != is false.
  - Output: false

Step 12: console.log(5 !== "5");
  - Strict inequality: 5 === "5" is false, so !== is true.
  - Output: true

================================================================================
                             KEY CONCEPTS
================================================================================

Loose Equality (==):
  - Converts operands to a common type before comparing.
  - Can produce surprising results (e.g., 0 == "" is true).
  - Should generally be avoided in modern JavaScript.

Strict Equality (===):
  - Compares value AND type with NO coercion.
  - Much more predictable and is the industry standard.

================================================================================
                          COMPARISON TABLE
================================================================================

| Expression      | == Result | === Result | Why?                              |
|-----------------|-----------|------------|-----------------------------------|
| 42 == "42"      | true      | false      | Loose coerces string to number    |
| 5 === 5         | true      | true       | Same value, same type             |
| 5 === "5"       | false     | false      | Different types                   |
| 0 == ""         | true      | false      | "" coerces to 0                   |
| true == 1       | true      | false      | true coerces to 1                 |
| true == 2       | false     | false      | true coerces to 1, 1 != 2         |
| 5 != "5"        | false     | true       | Loose sees them as equal          |
| 5 !== "5"       | true      | true       | Strict sees them as different     |

================================================================================
                          REAL-WORLD USE CASES
================================================================================

1. API Response Validation:
   if (response.status === 200) { ... } // strict check on status code.

2. Form Input Checks:
   if (userInput === "yes") { ... } // ensures exact string match.

3. Null/Undefined Checks (loose exception):
   if (x == null) { ... } // true for both null and undefined (shorthand).

4. Configuration Flags:
   if (config.debug === true) { ... } // avoids truthy/falsy confusion.

================================================================================
                          COMMON MISTAKES TO AVOID
================================================================================

Mistake 1: Using == by habit.
  if (userInput == "admin") { ... } // Risky: 0 == "0" is also true.
  if (userInput === "admin") { ... } // CORRECT: exact match required.

Mistake 2: Expecting [] == [] to be true.
  [] == [] // false (different object references).
  {} == {} // false (different object references).

Mistake 3: Using === when you meant Object.is() for edge cases.
  NaN === NaN // false.
  Object.is(NaN, NaN) // true.
  -0 === +0 // true.
  Object.is(-0, +0) // false.

================================================================================
                            KEY TAKEAWAY
================================================================================

ALWAYS prefer === and !== over == and !=. They are safer, faster (no coercion
overhead), and make your intent clear. Use == only in the specific shorthand
pattern if (x == null) to catch both null and undefined.
================================================================================
*/
