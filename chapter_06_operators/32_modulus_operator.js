/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Modulus Operator (%)
 * 
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped local variable, optionally initializing it to a value.
 *     Input: Accepts a variable name and an optional initial value as a direct value, variable, or expression.
 *     Return Type: void — the declaration does not return a value; it creates a variable binding in the current scope.
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - Modulus (%): Returns the remainder of the division of the left operand by the right operand.
 *   - Even/Odd Check: n % 2 === 0 indicates an even number; n % 2 === 1 indicates an odd number.
 * ============================================================
 */

// % = Modulus
// a%b -> it will return the remainder


let result = 13 % 7;
console.log(result);


console.log(101 % 2);
console.log(100 % 2);
console.log(37 % 2);
console.log(36 % 2);

//  n%2 == 1 - odd number, [ n%2 == 0 , even]

/*
================================================================================
                           DETAILED EXPLANATION
================================================================================

This file demonstrates the Modulus Operator (%) in JavaScript.

The modulus operator returns the REMAINDER of a division operation. It is
extremely useful for tasks like determining if a number is even or odd,
cycling through arrays, or implementing repeating intervals.

================================================================================
                           STEP-BY-STEP CODE BREAKDOWN
================================================================================

Step 1: let result = 13 % 7;
  - 13 divided by 7 equals 1 with a remainder of 6.
  - The % operator returns the remainder: 6.
  - console.log(result) outputs: 6

Step 2: console.log(101 % 2);
  - 101 / 2 = 50 remainder 1.
  - Output: 1 (odd number indicator).

Step 3: console.log(100 % 2);
  - 100 / 2 = 50 remainder 0.
  - Output: 0 (even number indicator).

Step 4: console.log(37 % 2);
  - 37 / 2 = 18 remainder 1.
  - Output: 1 (odd number indicator).

Step 5: console.log(36 % 2);
  - 36 / 2 = 18 remainder 0.
  - Output: 0 (even number indicator).

================================================================================
                             KEY CONCEPTS
================================================================================

Modulus (%):
  - Divides the left operand by the right operand.
  - Returns the remainder, not the quotient.
  - Syntax: dividend % divisor = remainder.

Even/Odd Check:
  - If number % 2 === 0, the number is EVEN.
  - If number % 2 === 1, the number is ODD.
  - This is one of the most common real-world uses of %.

================================================================================
                          COMPARISON TABLE
================================================================================

| Expression  | Division Result | Remainder | Output | Interpretation    |
|-------------|-----------------|-----------|--------|-------------------|
| 13 % 7      | 13 / 7 = 1      | 6         | 6      | General remainder |
| 101 % 2     | 101 / 2 = 50    | 1         | 1      | Odd number        |
| 100 % 2     | 100 / 2 = 50    | 0         | 0      | Even number       |
| 37 % 2      | 37 / 2 = 18     | 1         | 1      | Odd number        |
| 36 % 2      | 36 / 2 = 18     | 0         | 0      | Even number       |

================================================================================
                          REAL-WORLD USE CASES
================================================================================

1. Even/Odd Validation:
   if (num % 2 === 0) { console.log("Even"); } else { console.log("Odd"); }

2. Cycling Through an Array (Wrapping Index):
   let nextIndex = (currentIndex + 1) % array.length; // wraps back to 0.

3. Time Conversion (Seconds to Minutes):
   let seconds = 125;
   let remainingSeconds = seconds % 60; // 5 seconds remaining.

4. Alternating Patterns (e.g., zebra striping):
   let color = (rowIndex % 2 === 0) ? "white" : "gray";

================================================================================
                          COMMON MISTAKES TO AVOID
================================================================================

Mistake 1: Confusing modulus with division.
  let x = 10 / 3;  // Returns 3.333 (quotient).
  let y = 10 % 3;  // Returns 1 (remainder). These are DIFFERENT.

Mistake 2: Using modulus with negative numbers without understanding behavior.
  let x = -10 % 3; // Returns -1 in JavaScript (sign follows dividend).

Mistake 3: Using == instead of === in even/odd checks.
  if (num % 2 == 0) { ... }  // Works but avoids type safety.
  if (num % 2 === 0) { ... } // CORRECT: strict equality is preferred.

================================================================================
                            KEY TAKEAWAY
================================================================================

The % operator gives you the REMAINDER, not the quotient. Its most popular use
case is checking even/odd numbers (n % 2), but it is also essential for array
wrapping, time math, and repeating patterns.
================================================================================
*/