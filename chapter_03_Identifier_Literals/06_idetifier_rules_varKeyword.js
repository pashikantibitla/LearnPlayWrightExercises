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
