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