/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Comprehensive identifier rules in JavaScript, including valid start characters, allowed subsequent characters, case sensitivity, Unicode support, and naming conventions.
 *
 * Functions/Methods Used:
 *   - console.log(message: any): undefined
 *     Description: Outputs messages to the console for debugging and verification.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: undefined (void) — returns nothing; only outputs to console.
 *   - getUserInfo(): string
 *     Description: A sample function using camelCase naming; returns a descriptive string.
 *     Input: No parameters; called directly.
 *     Return Type: string — a descriptive text value.
 *   - Person(): string
 *     Description: A sample constructor-style function using PascalCase naming; returns a descriptive string.
 *     Input: No parameters; called directly.
 *     Return Type: string — a descriptive text value.
 *
 * Keywords Used:
 *   - let (keyword)
 *     Description: Declares a block-scoped local variable.
 *     Input: Requires an identifier (variable name) and optionally an initial value assignment.
 *     Return Type: void (undefined) — the declaration itself does not return a value.
 *   - const (keyword)
 *     Description: Declares a block-scoped read-only constant.
 *     Input: Requires an identifier (constant name) and a mandatory initial value assignment.
 *     Return Type: void (undefined) — the declaration itself does not return a value.
 *   - function (keyword)
 *     Description: Declares a function with the specified parameters.
 *     Input: Requires a function name, parameter list (optional), and a function body.
 *     Return Type: void (undefined) for the declaration itself; the invoked function may return a value.
 *
 * Key Concepts:
 *   - Identifier Start Rules: Must begin with a letter, underscore (_), or dollar sign ($).
 *   - Digits Allowed After First Character: Subsequent characters may include digits (0-9).
 *   - No Leading Digits: Starting with a number causes a SyntaxError.
 *   - Reserved Keywords: Using reserved words (e.g., class, const, function) as identifiers causes a SyntaxError.
 *   - Case Sensitivity: myVar, myvar, and MyVar are three distinct identifiers.
 *   - Unicode Support: Identifiers can include Unicode letters and Unicode escape sequences (e.g., \u0041).
 *   - Invalid Characters: Spaces, hyphens, and most special characters (@, #, !) are not allowed in identifiers.
 * ============================================================
 */

// ============================================
// JavaScript Identifier Rules - Single Example
// ============================================

// 1. Must begin with a letter, underscore, or dollar sign
let validName = "starts with letter";
let _private = "starts with underscore";
let $jquery = "starts with dollar sign";

// 2. Subsequent characters may include digits
let item1 = "letter then digit";
let _temp2 = "underscore then digit";
let $var123 = "dollar then digits";
let a1_b2 = "mixed letters digits underscore";

// 3. CANNOT start with a digit (these would throw SyntaxError if uncommented)
// let 1stPlace = "invalid";     // SyntaxError: Invalid or unexpected token
// let 2ndItem = "invalid";      // SyntaxError

// 4. CANNOT be a reserved keyword (these would throw SyntaxError if uncommented)
// let class = "invalid";        // SyntaxError: Unexpected token 'class'
// let const = "invalid";        // SyntaxError
// let function = "invalid";     // SyntaxError

// 5. Identifiers are CASE-SENSITIVE
let myVar = "lowercase v";
let myvar = "lowercase v"; // Different identifier!
let MyVar = "uppercase M"; // Another different identifier!
console.log(myVar !== myvar); // true
console.log(myVar !== MyVar); // true

// 6. Unicode letters and Unicode escape sequences are allowed
let café = "Unicode letter é";
let 变量 = "Chinese characters";
let \u0041 = "Unicode escape for A"; // Equivalent to: let A = ...
let \u005f = "Unicode escape for _"; // Equivalent to: let _ = ...

// 7. CANNOT contain spaces, hyphens, or special characters (except _ and $)
// let my-name = "invalid";      // SyntaxError: Unexpected token '-'
// let my name = "invalid";      // SyntaxError: Unexpected identifier
// let my@name = "invalid";      // SyntaxError: Unexpected token '@'
// let my#name = "invalid";      // SyntaxError: Unexpected token '#'
// let my!name = "invalid";      // SyntaxError: Unexpected token '!'

// ============================================
// Naming Conventions (Cases)
// ============================================

// 1. camelCase (standard for JS variables and functions)
let userName = "camelCase";
let totalPrice = 99.99;
let isLoggedIn = true;
function getUserInfo() { return "function camelCase"; }

// 2. PascalCase (standard for JS classes and constructors)
let UserProfile = "PascalCase";
let ShoppingCart = "class name style";
function Person() { return "constructor"; }

// 3. snake_case (underscore separated)
let user_name = "snake_case";
let total_price = 49.99;
let is_logged_in = false;

// 4. SCREAMING_SNAKE_CASE (constants)
const MAX_SIZE = 100;
const API_KEY = "abc123";
const DATABASE_URL = "localhost";

// 5. Hungarian Notation (prefix with type - older style)
let strName = "string prefix";
let bActive = true;       // boolean
let nCount = 5;           // number
let arrItems = [];        // array

// ============================================
// Console Output Summary
// ============================================
console.log("=== Valid Identifiers ===");
console.log(validName);
console.log(_private);
console.log($jquery);
console.log(item1);
console.log($var123);
console.log(a1_b2);

console.log("\n=== Case Sensitivity Demo ===");
console.log("myVar:", myVar);
console.log("myvar:", myvar);
console.log("MyVar:", MyVar);

console.log("\n=== Unicode Identifiers ===");
console.log("café:", café);
console.log("变量:", 变量);
console.log("\\u0041:", \u0041);

console.log("\n=== Naming Conventions ===");
console.log("camelCase:", userName, totalPrice, isLoggedIn, getUserInfo());
console.log("PascalCase:", UserProfile, ShoppingCart, Person());
console.log("snake_case:", user_name, total_price, is_logged_in);
console.log("SCREAMING_SNAKE_CASE:", MAX_SIZE, API_KEY, DATABASE_URL);
console.log("Hungarian Notation:", strName, bActive, nCount, arrItems);

/*
============================================================
  EDUCATOR EXPLANATION BLOCK
============================================================

DETAILED EXPLANATION:
This file provides a comprehensive reference for JavaScript
identifier rules and naming conventions. It covers every major
rule: valid start characters, allowed subsequent characters,
the prohibition on leading digits and reserved keywords, case
sensitivity, Unicode support, and the restriction on spaces and
special characters. It also revisits the five common naming
conventions (cases) and demonstrates them with both variables
and functions. This is the most complete single-file reference
for naming in the course.

CODE BREAKDOWN:
Step 1: let validName, _private, $jquery
        - Shows three legal starting characters: letter,
          underscore, and dollar sign.

Step 2: let item1, _temp2, $var123, a1_b2
        - Demonstrates that digits are legal after the first char.

Step 3: // let 1stPlace = "invalid";
        - Leading digits are illegal and would cause SyntaxError.

Step 4: // let class = "invalid";
        - Reserved keywords cannot be used as identifiers.

Step 5: let myVar, myvar, MyVar
        - Three distinct variables proving case sensitivity.

Step 6: let café, 变量, \u0041, \u005f
        - Unicode letters and escape sequences are valid.

Step 7: // let my-name, my name, my@name ...
        - Spaces, hyphens, and most special chars are forbidden.

Step 8: Naming convention examples (camelCase, PascalCase,
        snake_case, SCREAMING_SNAKE_CASE, Hungarian).
        - Repeats and reinforces the patterns from previous files.

Step 9: Console output sections grouping each concept.

KEY CONCEPTS:
- Identifier: The human-readable name for a variable/function.
- Start rule: Letter, underscore _, or dollar sign $ only.
- Subsequent rule: Can also include digits 0-9.
- Reserved words: class, const, function, let, etc. are off-limits.
- Case sensitivity: myVar and MyVar are not the same bucket.
- Unicode: JavaScript supports international characters in names.
- Naming conventions: Team agreements that improve readability.

COMPARISON TABLE: Identifier Rules Summary
| Rule                     | Allowed                          | Forbidden / Not Allowed           |
|--------------------------|----------------------------------|-----------------------------------|
| First character          | a-z, A-Z, _, $                   | 0-9, space, hyphen, @, #, !       |
| Later characters         | a-z, A-Z, 0-9, _, $              | space, hyphen, @, #, !            |
| Case sensitivity         | myVar != myvar != MyVar          | Treating them as identical        |
| Reserved keywords        | None (cannot use as names)       | class, const, function, var, etc. |
| Unicode support          | Letters, escape sequences        | Arbitrary symbols                 |

REAL-WORLD USE CASES:
- Choosing a naming convention at the start of a project so
  every file looks consistent.
- Using Unicode identifiers to make math libraries readable
  in local languages (e.g., Greek letters for angles).
- Prefixing private class fields with _ to signal "do not touch"
  to other developers, even though the language does not enforce it.

COMMON MISTAKES TO AVOID:
- Assuming JavaScript identifiers are case-insensitive like some
  other languages (SQL, for example). They are not.
- Trying to use a hyphen to separate words; the parser sees it
  as a subtraction operator.
- Copying variable names between files and accidentally changing
  casing, which creates a new variable instead of updating the old.

KEY TAKEAWAY:
Identifiers are the vocabulary of your code. Master the engine
rules (start chars, no spaces, no reserved words) and adopt a
consistent naming convention so your programs are legal, readable,
and professional.
*/