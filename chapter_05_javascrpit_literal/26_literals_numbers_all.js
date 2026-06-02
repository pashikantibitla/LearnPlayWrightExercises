/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Comprehensive overview of all number literal formats and special numeric values in JavaScript.
 *
 * Functions/Methods Used:
 *   - console.log(message: any): void
 *     Description: Outputs messages to the console for debugging and demonstration.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - BigInt(value: string | number): bigint
 *     Description: Constructor/function that creates a BigInt from a string or number; BigInt is used for arbitrarily large integers.
 *     Input: Accepts a string or number as a direct value, variable, or expression.
 *     Return Type: bigint — returns a BigInt primitive representing the given value.
 *   - Number.MAX_VALUE, Number.MIN_VALUE, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NaN, Number.EPSILON: number
 *     Description: Static properties of the Number object that define the boundaries and special constants for JavaScript numeric values.
 *     Input: No input required; accessed directly as static properties of the Number object.
 *     Return Type: number — returns the corresponding numeric constant value.
 *
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped local variable.
 *     Input: Takes a variable name and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void — does not return a value; it binds the identifier to the value in the current scope.
 *   - typeof operand: string
 *     Description: Returns the data type of the operand as a string.
 *     Input: Accepts any variable, value, or expression as its operand.
 *     Return Type: string — returns the name of the data type (e.g., "number", "string", "boolean", "undefined", "object").
 *
 * Key Concepts:
 *   - Decimal integer: Standard base-10 whole numbers (e.g., 42).
 *   - Binary literal: Base-2 numbers prefixed with 0b or 0B (e.g., 0b1010).
 *   - Octal literal: Base-8 numbers prefixed with 0o or 0O (e.g., 0o17).
 *   - Hexadecimal literal: Base-16 numbers prefixed with 0x or 0X (e.g., 0x1F).
 *   - Floating-point literal: Numbers with a decimal point (e.g., 3.14, -0.5).
 *   - Exponential notation: Scientific notation using e or E (e.g., 1.5e3 equals 1500).
 *   - Numeric separator: Underscores within numbers for readability, introduced in ES2021 (e.g., 1_000_000).
 *   - BigInt: A separate primitive type for arbitrarily large integers, created by appending n or using BigInt() (e.g., 9007199254740991n).
 *   - Infinity: Represents positive or negative infinity, often resulting from division by zero.
 *   - NaN (Not a Number): Represents the result of an invalid or undefined numeric operation; typeof NaN is "number".
 * ============================================================
 */

// JavaScript supports only one number type: Number (IEEE 754 double-precision 64-bit floating point)
// However, numbers can be written in various literal formats

// 1. Integer Literals (Whole numbers)
let decimalInt = 42;
console.log("Integer:", decimalInt, "-> Type:", typeof decimalInt);

// 2. Floating-Point Literals (Decimal numbers)
let floatNum = 3.14;
console.log("Float:", floatNum, "-> Type:", typeof floatNum);

// 3. Binary Literals (Base-2, prefixed with 0b or 0B)
let binaryNum = 0b1010; // Equals 10 in decimal
console.log("Binary 0b1010:", binaryNum, "-> Type:", typeof binaryNum);

// 4. Octal Literals (Base-8, prefixed with 0o or 0O)
let octalNum = 0o17; // Equals 15 in decimal
console.log("Octal 0o17:", octalNum, "-> Type:", typeof octalNum);

// 5. Hexadecimal Literals (Base-16, prefixed with 0x or 0X)
let hexNum = 0x1F; // Equals 31 in decimal
console.log("Hexadecimal 0x1F:", hexNum, "-> Type:", typeof hexNum);

// 6. Exponential Notation (Scientific notation)
let expNum = 1.5e3; // 1.5 * 10^3 = 1500
let smallExp = 1.5e-3; // 1.5 * 10^-3 = 0.0015
console.log("Exponential 1.5e3:", expNum);
console.log("Exponential 1.5e-3:", smallExp);

// 7. Positive and Negative Numbers
let positiveNum = +25;
let negativeNum = -25;
console.log("Positive:", positiveNum, "Negative:", negativeNum);

// 8. Special Number Values
// Infinity - represents positive infinity
let posInfinity = Infinity;
let negInfinity = -Infinity;
console.log("Infinity:", posInfinity, "-> Type:", typeof posInfinity);
console.log("-Infinity:", negInfinity);

// NaN - Not a Number (invalid number operation result)
let notANumber = NaN;
console.log("NaN:", notANumber, "-> Type:", typeof notANumber);
console.log("0/0 =", 0 / 0); // Results in NaN

// 9. BigInt - for arbitrarily large integers (suffix with n)
let bigNumber = 9007199254740991n;
console.log("BigInt:", bigNumber, "-> Type:", typeof bigNumber);

// Note: All regular numbers in JS are of type 'number'
// BigInt is a separate type 'bigint'

// ============================================================
// Topic: All Number Types in JavaScript
// File: 26_Literal_Number_all.js
// ============================================================

/*
  In JavaScript, numbers are ALWAYS of type "number" (except BigInt).
  There is no separate int, float, double, etc.
  JS uses IEEE 754 double-precision 64-bit binary format.
*/


// --------------------------------------------------------
// 1. INTEGER LITERALS
// --------------------------------------------------------

// Decimal (Base 10) - most common
let decimal = 42;
console.log("Decimal:", decimal); // 42

// Binary (Base 2) - starts with 0b or 0B
let binary = 0b1010; // 10 in decimal
console.log("Binary 0b1010:", binary); // 10

// Octal (Base 8) - starts with 0o or 0O
let octal = 0o52; // 42 in decimal
console.log("Octal 0o52:", octal); // 42

// Hexadecimal (Base 16) - starts with 0x or 0X
let hex = 0x2A; // 42 in decimal
console.log("Hexadecimal 0x2A:", hex); // 42


// --------------------------------------------------------
// 2. FLOATING-POINT LITERALS
// --------------------------------------------------------

let float1 = 3.14;
let float2 = -0.5;
let float3 = .5;    // valid, but avoid for readability
let float4 = 5.;    // valid, but avoid for readability

console.log("Float 3.14:", float1);
console.log("Float -0.5:", float2);
console.log("Float .5:", float3);
console.log("Float 5.:", float4);

// Exponential notation
let exp1 = 1.5e3;   // 1.5 * 10^3 = 1500
let exp2 = 1.5e-3;  // 1.5 * 10^-3 = 0.0015
let exp3 = 2E10;    // 2 * 10^10 = 20000000000

console.log("Exponential 1.5e3:", exp1);   // 1500
console.log("Exponential 1.5e-3:", exp2);  // 0.0015
console.log("Exponential 2E10:", exp3);    // 20000000000


// --------------------------------------------------------
// 3. NUMERIC SEPARATORS (ES2021+)
// --------------------------------------------------------

let million = 1_000_000;
let binarySep = 0b1010_0001;
let hexSep = 0xFF_FF;

console.log("Separator 1_000_000:", million);      // 1000000
console.log("Separator 0b1010_0001:", binarySep);  // 161
console.log("Separator 0xFF_FF:", hexSep);         // 65535


// --------------------------------------------------------
// 4. BIGINT - For arbitrarily large integers
// --------------------------------------------------------

let big = 123456789012345678901234567890n;
let big2 = BigInt("123456789012345678901234567890");
let bigFromNum = BigInt(42);

console.log("BigInt literal:", big);
console.log("BigInt from string:", big2);
console.log("BigInt from number:", bigFromNum);
console.log("typeof BigInt:", typeof big); // "bigint"

// BigInt operations
console.log("BigInt + 1n:", big + 1n);
// Cannot mix BigInt with Number: 10n + 5 -> TypeError


// --------------------------------------------------------
// 5. SPECIAL NUMERIC VALUES
// --------------------------------------------------------

// Infinity
console.log("Infinity:", Infinity);           // Infinity
console.log("1 / 0:", 1 / 0);                 // Infinity
console.log("-1 / 0:", -1 / 0);               // -Infinity
console.log("typeof Infinity:", typeof Infinity); // "number"

// -Infinity
console.log("-Infinity:", -Infinity);

// NaN (Not a Number) - result of invalid math
console.log("NaN:", NaN);                     // NaN
console.log("0 / 0:", 0 / 0);                 // NaN
console.log("'hello' * 2:", "hello" * 2);     // NaN
console.log("typeof NaN:", typeof NaN);       // "number" (quirky!)




// --------------------------------------------------------
// 7. NUMBER PROPERTIES (Constants)
// --------------------------------------------------------

console.log("\n--- Number Properties ---");
console.log("MAX_VALUE:", Number.MAX_VALUE);             // ~1.79e308
console.log("MIN_VALUE:", Number.MIN_VALUE);             // ~5e-324
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log("POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("NaN property:", Number.NaN);
console.log("EPSILON:", Number.EPSILON);                 // smallest diff between 2 numbers


// --------------------------------------------------------
// 8. NUMBER METHODS
// --------------------------------------------------------


// --------------------------------------------------------
// SUMMARY TABLE
// --------------------------------------------------------

/*
  | Type/Form          | Example            | Notes                          |
  |--------------------|--------------------|--------------------------------|
  | Decimal Integer    | 42                 | Standard whole numbers         |
  | Binary             | 0b1010             | Base 2, starts with 0b         |
  | Octal              | 0o52               | Base 8, starts with 0o         |
  | Hexadecimal        | 0x2A               | Base 16, starts with 0x        |
  | Float              | 3.14               | Decimal numbers                |
  | Exponential        | 1.5e3              | Scientific notation            |
  | Numeric Separator  | 1_000_000          | ES2021+, for readability       |
  | BigInt             | 123n or BigInt(123)| Arbitrary large integers       |
  | Infinity           | Infinity           | Result of division by zero     |
  | NaN                | NaN                | Invalid numeric operation      |
  | Number Object      | new Number(42)     | Avoid, use primitive           |
*/


// ============================================================
// END
// ============================================================

/*
=====================================
DETAILED EXPLANATION
=====================================
This file provides a comprehensive overview of all number literal formats and special numeric values in JavaScript.
JavaScript uses a single number type (IEEE 754 double-precision 64-bit float) for all numeric values,
with BigInt as a separate primitive for arbitrarily large integers.

CODE BREAKDOWN
=====================================
1. Integer Literals: 42, 0b1010 (binary), 0o17 (octal), 0x1F (hex)
2. Floating-Point: 3.14, -0.5, .5, 5.
3. Exponential Notation: 1.5e3, 1.5e-3
4. Numeric Separators: 1_000_000 (ES2021+)
5. BigInt: 9007199254740991n, BigInt("...")
6. Special Values: Infinity, -Infinity, NaN
7. Number Constants: MAX_VALUE, MIN_VALUE, MAX_SAFE_INTEGER, EPSILON

KEY CONCEPTS
=====================================
- Single Number Type: JS does not have separate int, float, or double types.
- Binary/Octal/Hex: Prefixes 0b, 0o, and 0x allow alternative number bases.
- BigInt: Use the n suffix or BigInt() for integers beyond 2^53-1.
- Infinity: Results from dividing by zero or exceeding max representable value.
- NaN: "Not a Number" results from invalid math operations; typeof NaN is "number".
- Numeric Separators: Underscores improve readability of large numbers.

COMPARISON TABLE: All Number Formats
=====================================
| Type/Form          | Example            | Notes                          |
|--------------------|--------------------|--------------------------------|
| Decimal Integer    | 42                 | Standard whole numbers         |
| Binary             | 0b1010             | Base 2, starts with 0b         |
| Octal              | 0o52               | Base 8, starts with 0o         |
| Hexadecimal        | 0x2A               | Base 16, starts with 0x        |
| Float              | 3.14               | Decimal numbers                |
| Exponential        | 1.5e3              | Scientific notation            |
| Numeric Separator  | 1_000_000          | ES2021+, for readability       |
| BigInt             | 123n or BigInt(123)| Arbitrary large integers       |
| Infinity           | Infinity           | Result of division by zero     |
| NaN                | NaN                | Invalid numeric operation      |

REAL-WORLD USE CASES
=====================================
- Binary flags and permission systems (binary literals).
- Color codes in CSS and Canvas (hexadecimal).
- Financial IDs and large counters that exceed safe integer limits (BigInt).
- Scientific data representation (exponential notation).
- Improving readability of large constants like salaries or population counts (separators).

COMMON MISTAKES
=====================================
- Mixing BigInt with regular Number in arithmetic (TypeError).
- Expecting NaN === NaN to be true (it is false; use isNaN() or Number.isNaN()).
- Using numeric separators in environments that do not support ES2021.
- Thinking 0.1 + 0.2 === 0.3 (floating-point precision issue).

KEY TAKEAWAY
=====================================
JavaScript's single number type handles everything from tiny fractions to Infinity. Use BigInt when you need integers larger than 2^53-1, and always be aware of floating-point precision limitations.
*/
