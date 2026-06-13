/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Compound Assignment Operators (+=, -=, *=, /=, %=)
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
 *   - Compound Assignment: A shorthand that combines an arithmetic operation with assignment.
 *     - x += 10 is equivalent to x = x + 10.
 *     - x -= 3 is equivalent to x = x - 3.
 *     - x *= 2 is equivalent to x = x * 2.
 *     - x /= 17 is equivalent to x = x / 17.
 *     - x %= 2 is equivalent to x = x % 2.
 * ============================================================
 */

// Compund Operator

let x = 10;
x += 10; // x = x +10;
console.log(x);

x -= 3; //  x =x -3
console.log(x);

x *= 2; // x = x * 2;
console.log(x);

x /= 17;  // x = x/17;
console.log(x);

x %= 2;
console.log(x);

/*
================================================================================
                           DETAILED EXPLANATION
================================================================================

This file demonstrates Compound Assignment Operators (also called shorthand
assignment operators) in JavaScript.

These operators combine an arithmetic operation with assignment in a single
step, making code shorter and often more readable. They are functionally
equivalent to writing the full operation separately.

================================================================================
                           STEP-BY-STEP CODE BREAKDOWN
================================================================================

Initial State: let x = 10;
  - Variable x starts with the value 10.

Step 1: x += 10;
  - Shorthand for: x = x + 10;
  - x = 10 + 10 = 20.
  - console.log(x) outputs: 20

Step 2: x -= 3;
  - Shorthand for: x = x - 3;
  - x = 20 - 3 = 17.
  - console.log(x) outputs: 17

Step 3: x *= 2;
  - Shorthand for: x = x * 2;
  - x = 17 * 2 = 34.
  - console.log(x) outputs: 34

Step 4: x /= 17;
  - Shorthand for: x = x / 17;
  - x = 34 / 17 = 2.
  - console.log(x) outputs: 2

Step 5: x %= 2;
  - Shorthand for: x = x % 2;
  - x = 2 % 2 = 0.
  - console.log(x) outputs: 0

================================================================================
                             KEY CONCEPTS
================================================================================

Compound Assignment:
  - Performs an operation using the variable's current value.
  - Assigns the result back to the same variable.
  - Reduces repetition and makes code more concise.

================================================================================
                          COMPARISON TABLE
================================================================================

| Operator | Long Form           | Example    | Result after op (x=10) |
|----------|---------------------|------------|------------------------|
| +=       | x = x + value       | x += 10    | 20                     |
| -=       | x = x - value       | x -= 3     | 7                      |
| *=       | x = x * value       | x *= 2     | 20                     |
| /=       | x = x / value       | x /= 2     | 5                      |
| %=       | x = x % value       | x %= 3     | 1                      |
| **=      | x = x ** value      | x **= 2    | 100                    |

================================================================================
                          REAL-WORLD USE CASES
================================================================================

1. Updating a Score:
   score += 100; // Add 100 points to the current score.

2. Applying a Discount:
   price *= 0.9; // Reduce price by 10%.

3. Counting Down:
   countdown -= 1; // Decrement timer.

4. Accumulating Totals in a Loop:
   let total = 0;
   for (let sale of sales) { total += sale.amount; }

================================================================================
                          COMMON MISTAKES TO AVOID
================================================================================

Mistake 1: Thinking the operator modifies the value in-place without reassignment.
  x + 10; // WRONG: this calculates 20 but does NOT store it back into x.
  x += 10; // CORRECT: adds 10 and stores the result in x.

Mistake 2: Using compound operators with const.
  const x = 10;
  x += 5; // ERROR: cannot reassign a const variable.

Mistake 3: Chaining compound assignments unexpectedly.
  let a = b = c = 5; // Works, but b and c become global if not declared.
  // Always declare each variable with let/const.

================================================================================
                            KEY TAKEAWAY
================================================================================

Compound operators (+=, -=, *=, /=, %=, **=) are concise shortcuts that perform
an arithmetic operation and assignment in one step. They improve readability and
reduce typing, but remember they still reassign the variable.
================================================================================
*/
