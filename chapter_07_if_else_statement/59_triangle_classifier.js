/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Classifying triangles (Equilateral, Isosceles, Scalene) based on side lengths using a reusable function and if-else logic.
 *
 * Functions/Methods Used:
 *   - classifyTriangle(side1: number, side2: number, side3: number): string
 *     Description: Validates the input sides and returns a string describing the triangle type or an error message if the sides are invalid.
 *     Input: Accepts three numeric arguments as direct values, variables, or expressions representing side lengths.
 *     Return Type: string — returns the triangle classification or an error message.
 *
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped variable.
 *     Input: Accepts a variable name and optionally an initial value assigned via direct value, variable, or expression.
 *     Return Type: void (declaration statement; does not return a value).
 *   - function
 *     Description: Declares a named function that encapsulates reusable logic.
 *     Input: Accepts a function name, parameter list, and a block of statements.
 *     Return Type: void (declaration statement; does not return a value) — the declared function itself returns based on its internal return statements.
 *   - return
 *     Description: Exits a function and passes a value back to the caller.
 *     Input: Accepts an optional value, variable, or expression to send back to the caller.
 *     Return Type: any — returns the provided value to the calling context; undefined if no value is supplied.
 *   - if / else if / else
 *     Description: Conditional keywords that check conditions sequentially to classify the triangle.
 *     Input: Accepts a boolean expression or any value coerced to boolean (direct value, variable, or expression).
 *     Return Type: void (control flow keywords; do not return a value).
 *   - console.log(value: any): void
 *     Description: Outputs messages and results to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - === (strict equality operator)
 *     Description: Compares two values for equality without type coercion; used to check if sides are equal.
 *     Input: Accepts two operands (direct values, variables, or expressions) to compare.
 *     Return Type: boolean — returns true if equal, otherwise false.
 *   - <= (less than or equal to operator)
 *     Description: Returns true if the left value is less than or equal to the right; used for validation.
 *     Input: Accepts two operands (direct values, variables, or expressions) to compare.
 *     Return Type: boolean — returns true or false.
 *   - + (addition operator)
 *     Description: Adds two numeric values; used to validate the triangle inequality theorem.
 *     Input: Accepts two numeric operands (direct values, variables, or expressions).
 *     Return Type: number — returns the sum of the two operands.
 *   - || (logical OR operator)
 *     Description: Returns true if at least one operand is true; used to chain validation failures.
 *     Input: Accepts two operands (direct values, variables, or expressions) to combine.
 *     Return Type: boolean — returns true if at least one operand is truthy, otherwise false.
 *   - && (logical AND operator)
 *     Description: Returns true only if both operands are true; used to check all sides are positive.
 *     Input: Accepts two operands (direct values, variables, or expressions) to combine.
 *     Return Type: boolean — returns true if both operands are truthy, otherwise false.
 *   - Template literals (backticks `...`)
 *     Description: Allow embedding expressions like ${variable} inside strings for formatted output.
 *     Input: Accepts a string enclosed in backticks with optional embedded expressions (${...}) using direct values, variables, or expressions.
 *     Return Type: string — returns the interpolated string result.
 *
 * Key Concepts:
 *   - Function Encapsulation: The triangle logic is wrapped in a function for reusability and testability.
 *   - Input Validation: Checks that sides are positive and satisfy the triangle inequality theorem before classification.
 *   - Sequential Classification: Uses if-else-if to categorize into Equilateral, Isosceles, or Scalene.
 *   - Triangle Inequality Theorem: The sum of any two sides must be greater than the third side for a valid triangle.
 *   - Test-Driven Approach: Multiple test cases demonstrate expected behavior for valid and invalid inputs.
 * ============================================================
 */

// Triangle Classifier Program
// This program classifies a triangle based on its side lengths using if-else statements

function classifyTriangle(side1, side2, side3) {
    // First, validate that sides can form a valid triangle
    // Triangle inequality theorem: sum of any two sides must be greater than the third side
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
        return "Invalid: All sides must be positive numbers";
    }
    
    if ((side1 + side2 <= side3) || (side1 + side3 <= side2) || (side2 + side3 <= side1)) {
        return "Invalid: The given sides do not form a valid triangle";
    }
    
    // Classify the triangle using if-else statements
    if (side1 === side2 && side2 === side3) {
        return "Equilateral Triangle - All three sides are equal";
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        return "Isosceles Triangle - Exactly two sides are equal";
    } else {
        return "Scalene Triangle - No sides are equal";
    }
}

// Test cases
console.log("=== Triangle Classifier ===\n");

// Test 1: Equilateral Triangle
let a = 5, b = 5, c = 5;
console.log(`Sides: ${a}, ${b}, ${c}`);
console.log(`Result: ${classifyTriangle(a, b, c)}\n`);

// Test 2: Isosceles Triangle
a = 5; b = 5; c = 8;
console.log(`Sides: ${a}, ${b}, ${c}`);
console.log(`Result: ${classifyTriangle(a, b, c)}\n`);

// Test 3: Scalene Triangle
a = 3; b = 4; c = 5;
console.log(`Sides: ${a}, ${b}, ${c}`);
console.log(`Result: ${classifyTriangle(a, b, c)}\n`);

// Test 4: Invalid Triangle (negative side)
a = -3; b = 4; c = 5;
console.log(`Sides: ${a}, ${b}, ${c}`);
console.log(`Result: ${classifyTriangle(a, b, c)}\n`);

// Test 5: Invalid Triangle (sum of two sides not greater than third)
a = 1; b = 2; c = 10;
console.log(`Sides: ${a}, ${b}, ${c}`);
console.log(`Result: ${classifyTriangle(a, b, c)}\n`);

// Test 6: Another Isosceles Triangle (different sides)
a = 7; b = 3; c = 7;
console.log(`Sides: ${a}, ${b}, ${c}`);
console.log(`Result: ${classifyTriangle(a, b, c)}\n`);

/*
================================================================================
                         COMPREHENSIVE EXPLANATION
================================================================================

DETAILED EXPLANATION:
This script defines a reusable function that classifies triangles based on side lengths.
It first validates the inputs using the triangle inequality theorem, then applies
if-else-if logic to categorize the triangle as Equilateral, Isosceles, or Scalene.

CODE BREAKDOWN:
1. function classifyTriangle(side1, side2, side3) { ... }   — Function declaration.
2. Validation 1: side1 <= 0 ...                              — Rejects non-positive sides.
3. Validation 2: (side1 + side2 <= side3) ...                 — Enforces triangle inequality.
4. if (side1 === side2 && side2 === side3)                    — All sides equal → Equilateral.
5. else if (side1 === side2 || side2 === side3 || side1 === side3)
                                                              — Exactly two sides equal → Isosceles.
6. else                                                       — No sides equal → Scalene.
7. Test cases                                                — Demonstrate valid and invalid inputs.

KEY CONCEPTS:
• Function Encapsulation: Reusable logic wrapped in a named block.
• Input Validation: Fail fast with clear error messages for bad data.
• Triangle Inequality: Sum of any two sides must exceed the third.
• Sequential Classification: if-else-if ensures only one category is chosen.

COMPARISON TABLE — Triangle Types:
| Type        | Condition                              | Example (a,b,c) |
|-------------|----------------------------------------|-----------------|
| Equilateral | side1 === side2 && side2 === side3     | (5,5,5)         |
| Isosceles   | Exactly two sides equal                | (5,5,8)         |
| Scalene     | All sides different                    | (3,4,5)         |
| Invalid     | Violates positivity or inequality      | (-3,4,5)        |

REAL-WORLD USE CASES:
• Geometry tutoring software.
• CAD / 3D modeling input validation.
• Game physics (collision shape classification).

COMMON MISTAKES:
• Checking equality before validating sides, causing incorrect classification for invalid input.
• Using == instead of === (type coercion risk with strings).
• Forgetting that the sum must be *strictly* greater, not equal, to the third side.

KEY TAKEAWAY:
Always validate inputs before applying business logic. Encapsulate classification rules
in functions for reusability, and test with both valid and invalid data.
================================================================================
*/
