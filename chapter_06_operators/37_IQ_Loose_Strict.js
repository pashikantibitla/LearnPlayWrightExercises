/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Tricky Loose Equality (==) Interview Questions
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - Transitivity Breakdown: 0 == "" and 0 == "0" are both true, but "" == "0" is false. Loose equality is not transitive.
 *   - null and undefined: null == undefined is true due to a special rule in loose equality, but null === undefined is false.
 *   - null == 0 is false: null does not coerce to 0 when compared with ==, but null >= 0 is true because relational operators coerce null to 0.
 * ============================================================
 */

console.log(0 == "");
console.log(0 == "0");
console.log("" == "0");  //  🤯 (transitivity broken!)


console.log(0 == false);
console.log(null == 0);
console.log(null == undefined);
console.log(null === undefined);

/*
================================================================================
                           DETAILED EXPLANATION
================================================================================

This file explores tricky JavaScript equality questions commonly asked in
interviews. It highlights the surprising behavior of loose equality (==),
especially around transitivity, null, undefined, and boolean coercion.

================================================================================
                           STEP-BY-STEP CODE BREAKDOWN
================================================================================

Step 1: console.log(0 == "");
  - "" (empty string) is coerced to number 0.
  - 0 == 0 is true.
  - Output: true

Step 2: console.log(0 == "0");
  - "0" (string) is coerced to number 0.
  - 0 == 0 is true.
  - Output: true

Step 3: console.log("" == "0");
  - Both are strings, so no coercion occurs.
  - "" is not the same as "0".
  - Output: false

  *** TRANSITIVITY IS BROKEN! ***
  If A == B and B == C, you would expect A == C.
  Here, 0 == "" (true), 0 == "0" (true), but "" == "0" (false).
  Loose equality is NOT transitive.

Step 4: console.log(0 == false);
  - false is coerced to number 0.
  - 0 == 0 is true.
  - Output: true

Step 5: console.log(null == 0);
  - null does NOT coerce to 0 in equality checks.
  - null is only loosely equal to undefined.
  - Output: false

Step 6: console.log(null == undefined);
  - This is a SPECIAL RULE in the ECMAScript specification.
  - null and undefined are considered loosely equal to each other.
  - Output: true

Step 7: console.log(null === undefined);
  - Strict equality checks type AND value.
  - null is type "object" (legacy), undefined is type "undefined".
  - Output: false

================================================================================
                             KEY CONCEPTS
================================================================================

Transitivity:
  - In mathematics, if A = B and B = C, then A = C.
  - JavaScript's loose equality BREAKS this rule due to directional coercion.

null vs undefined:
  - null represents intentional absence of value.
  - undefined means a variable has been declared but not assigned.
  - null == undefined is true (special spec rule).
  - null === undefined is false.

================================================================================
                          COMPARISON TABLE
================================================================================

| Expression            | == Result | === Result | Explanation                     |
|-----------------------|-----------|------------|---------------------------------|
| 0 == ""               | true      | false      | "" -> 0                        |
| 0 == "0"              | true      | false      | "0" -> 0                       |
| "" == "0"             | false     | false      | Both strings, direct compare  |
| 0 == false            | true      | false      | false -> 0                     |
| null == 0             | false     | false      | null does not coerce to 0      |
| null == undefined     | true      | false      | Special spec rule              |
| null === undefined    | false     | false      | Different types                |

================================================================================
                          REAL-WORLD USE CASES
================================================================================

1. Defensive null/undefined checks:
   if (value == null) { ... } // catches BOTH null and undefined.

2. Interview Preparation:
   Understanding these edge cases demonstrates deep JS knowledge.

3. Debugging Coercion Bugs:
   When a loose equality check behaves unexpectedly, these patterns help
   you trace the root cause quickly.

================================================================================
                          COMMON MISTAKES TO AVOID
================================================================================

Mistake 1: Assuming equality is transitive.
  if (a == b && b == c) { assume a == c } // DANGEROUS with loose equality.

Mistake 2: Checking null with == 0.
  if (null == 0) // false! Use explicit checks: if (value === null || value === 0).

Mistake 3: Confusing relational coercion with equality coercion.
  null == 0  // false.
  null >= 0  // true (null coerces to 0 for relational ops).

================================================================================
                            KEY TAKEAWAY
================================================================================

Loose equality is full of surprising edge cases that break mathematical
intuition. For reliable, readable code, always use === and !==. The only
acceptable use of == is the null/undefined shorthand: if (x == null).
================================================================================
*/