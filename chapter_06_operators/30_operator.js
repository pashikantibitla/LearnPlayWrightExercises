/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Assignment Operator (=)
 * 
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped local variable, optionally initializing it to a value.
 *     Input: Accepts a variable name and an optional initial value as a direct value, variable, or expression.
 *     Return Type: void — the declaration does not return a value; it creates a variable binding in the current scope.
 *   - = (Assignment Operator)
 *     Description: Assigns the value on the right-hand side to the variable or property on the left-hand side.
 *     Input: Accepts a left-hand variable/property and a right-hand value as a direct value, variable, or expression.
 *     Return Type: Returns the assigned value (the right-hand operand).
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - Assignment vs Comparison: The = operator assigns values; it does not compare them.
 *   - Variable Reassignment: A variable declared with let can be reassigned to a new value.
 * ============================================================
 */

// Assignment Operators
// -  = 
// - to assign the right hand side value to the left side.
// - let x = 10;
// - x = 30;

let x = 10;
x = 11;
x = 90;
console.log(x);

/*
================================================================================
                           DETAILED EXPLANATION
================================================================================

This file demonstrates the Assignment Operator (=) in JavaScript.

The assignment operator is the most fundamental operator in programming. It takes
the value on the right-hand side (RHS) and stores it into the variable on the
left-hand side (LHS). It is NOT the same as the mathematical equals sign;
instead, it means "store this value here."

================================================================================
                           STEP-BY-STEP CODE BREAKDOWN
================================================================================

Step 1: let x = 10;
  - Declares a variable named x using the let keyword.
  - The = operator assigns the numeric value 10 to x.
  - After this line, the memory location for x holds the value 10.

Step 2: x = 11;
  - Reassigns x to a new value, 11.
  - The old value (10) is overwritten.

Step 3: x = 90;
  - Reassigns x again, this time to 90.
  - The previous value (11) is overwritten.

Step 4: console.log(x);
  - Outputs the current value of x to the console.
  - Since 90 was the last assigned value, the output is: 90

================================================================================
                             KEY CONCEPTS
================================================================================

Assignment vs Comparison:
  - =  is assignment (stores a value).
  - == is loose equality comparison (checks value after type coercion).
  - === is strict equality comparison (checks value AND data type).

Variable Reassignment:
  - Variables declared with let can be reassigned multiple times.
  - Variables declared with const cannot be reassigned.

================================================================================
                          COMPARISON TABLE
================================================================================

| Symbol | Name               | Purpose                          | Example     |
|--------|--------------------|----------------------------------|-------------|
| =      | Assignment         | Assigns RHS value to LHS var     | x = 10      |
| ==     | Loose Equality     | Compares values (with coercion)  | 5 == "5"    |
| ===    | Strict Equality    | Compares value + type              | 5 === "5"   |
| !=     | Loose Inequality    | Opposite of ==                    | 5 != "6"    |
| !==    | Strict Inequality   | Opposite of ===                   | 5 !== "5"   |

================================================================================
                          REAL-WORLD USE CASES
================================================================================

1. Storing User Input:
   let userName = "Alice"; // assigns input to a variable for later use.

2. Updating Scores in a Game:
   let score = 0;
   score = score + 100; // reassigns the updated score.

3. Configuration Settings:
   let theme = "dark";
   theme = "light"; // toggling settings.

================================================================================
                          COMMON MISTAKES TO AVOID
================================================================================

Mistake 1: Using = instead of === inside an if condition.
  if (x = 10) { ... }  // WRONG: assigns 10 to x, then checks truthiness.
  if (x === 10) { ... } // CORRECT: checks if x equals 10.

Mistake 2: Assigning to an undeclared variable in strict mode.
  x = 10; // In strict mode without let/const/var, this throws ReferenceError.
  let x = 10; // CORRECT.

Mistake 3: Confusing assignment with initialization.
  let x = 10; // declaration + assignment (initialization).
  x = 20;     // pure reassignment (no let/const/var).

================================================================================
                            KEY TAKEAWAY
================================================================================

The = operator assigns values. It does NOT compare them. Always be mindful of
whether you intend to STORE a value (=) or COMPARE values (=== / ==).
================================================================================
*/
