/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: JavaScript identifier naming rules and valid/invalid patterns using the var keyword.
 *
 * Functions/Methods Used:
 *   - console.log(message: any): undefined
 *     Description: Outputs the provided value(s) to the browser or Node.js console for debugging and verification.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: undefined (void) — returns nothing; only outputs to console.
 *
 * Keywords Used:
 *   - var (keyword)
 *     Description: Declares a function-scoped or globally-scoped variable, optionally initializing it to a value.
 *     Input: Requires an identifier (variable name) and optionally an initial value assignment.
 *     Return Type: void (undefined) — the declaration itself does not return a value.
 *
 * Key Concepts:
 *   - Identifier Start Characters: Valid identifiers must begin with a letter (a-z, A-Z), underscore (_), or dollar sign ($).
 *   - Subsequent Characters: After the first character, digits (0-9) are also allowed.
 *   - No Leading Digits: An identifier cannot begin with a number (e.g., 123).
 *   - No Spaces: Identifiers cannot contain spaces; underscores or dollar signs can be used as word separators.
 *   - Case Sensitivity: JavaScript identifiers are case-sensitive (Name and name are different variables).
 * ============================================================
 */

var $ = 10;
var _a = 12;
var p = 10;

var ab123 = 34;

// var 123 = 123;

var Name = "pramod";
var name = "Amit";
//var pramod dutta = "hello";
var pramod_dutta = "hello";
var pramod$dutta = "hello";
var pramodu1232 = "hello";
console.log ("the value $: ", $);
console.log("the value _a: ", _a);
console.log("the value of p: ", p);
console.log("the value of ab123: ", ab123);
console.log("the value of Name: ", Name);
console.log("the value of name: ", name);
console.log("the value of pramod_dutta: ", pramod_dutta);
console.log("the value of pramod$dutta: ", pramod$dutta);
console.log("the value of pramodi1232: ", pramodu1232);

/*
============================================================
  EDUCATOR EXPLANATION BLOCK
============================================================

DETAILED EXPLANATION:
This file teaches the rules for naming JavaScript identifiers
using the 'var' keyword. An identifier is the name you give to
a variable, function, or property. JavaScript has strict rules
about which characters can start or continue an identifier, and
this script demonstrates valid patterns: starting with a letter,
underscore, or dollar sign, and including digits after the
first character. It also shows that case sensitivity matters
(Name vs name) and that spaces are forbidden.

CODE BREAKDOWN:
Step 1: var $ = 10;
        - A single dollar sign is a legal identifier.
        - Common in libraries like jQuery.

Step 2: var _a = 12;
        - Underscore start is valid; often used for private vars.

Step 3: var p = 10; var ab123 = 34;
        - Standard letter start, followed by letters and digits.

Step 4: // var 123 = 123;
        - Commented out because identifiers cannot start with a digit.

Step 5: var Name = "pramod"; var name = "Amit";
        - Two distinct variables because JavaScript is case-sensitive.

Step 6: //var pramod dutta = "hello";
        - Commented out because spaces are illegal in identifiers.

Step 7: var pramod_dutta = "hello"; var pramod$dutta = "hello";
        - Underscore and dollar sign are valid word separators.

Step 8: var pramodu1232 = "hello";
        - Letters followed by digits are perfectly valid.

Step 9: console.log(...) for each variable.
        - Verifies that the identifiers were accepted by the engine.

KEY CONCEPTS:
- Identifier: The name of a variable, function, class, or label.
- Start character: Must be a letter (a-z, A-Z), underscore (_),
  or dollar sign ($).
- Subsequent characters: Can also include digits (0-9).
- Case sensitivity: myVar and myvar are completely different.
- No spaces: Identifiers must be contiguous characters.

COMPARISON TABLE: Valid vs Invalid Identifier Patterns
| Identifier      | Valid? | Reason                                 |
|-----------------|--------|----------------------------------------|
| $               | Yes    | Dollar sign is allowed as start        |
| _a              | Yes    | Underscore is allowed as start         |
| ab123           | Yes    | Letter start, digits allowed after     |
| 123             | No     | Cannot start with a digit              |
| Name / name     | Both   | Case-sensitive: two different variables  |
| pramod_dutta    | Yes    | Underscore is a valid internal char    |
| pramod$dutta    | Yes    | Dollar sign is valid internal char     |
| pramod dutta    | No     | Spaces are illegal                     |

REAL-WORLD USE CASES:
- Using $ for DOM-element variables in jQuery-style code.
- Prefixing private/internal variables with _ in team projects.
- Creating descriptive multi-word names like user_name or $btn.

COMMON MISTAKES TO AVOID:
- Starting an identifier with a number (e.g., 1stPlace), which
  causes a SyntaxError immediately.
- Using hyphens inside identifiers (e.g., my-name); the engine
  interprets the hyphen as a subtraction operator.
- Assuming two variables differing only in case are the same;
  this leads to subtle bugs when values are stored in the wrong one.

KEY TAKEAWAY:
A valid identifier starts with a letter, underscore, or dollar
sign, contains no spaces, and is case-sensitive. Memorizing these
rules prevents syntax errors and helps you write clean, readable
variable names.
*/
