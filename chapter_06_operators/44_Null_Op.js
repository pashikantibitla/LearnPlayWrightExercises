/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Nullish Coalescing Operator (??)
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
 *   - Nullish Coalescing (??): Returns the right-hand operand when the left-hand operand is null or undefined; otherwise returns the left-hand operand.
 *   - Difference from ||: ?? only checks for null/undefined, whereas || treats all falsy values (0, "", false) as fallback triggers.
 *   - null Comparisons: null >= 0 is true because relational operators coerce null to 0, but null === 0 is false.
 * ============================================================
 */

//??

console.log(null >= 0); //  null == 0 or null > 0
console.log(null === 0);

let amul = null;
let milk_quantity_required = amul ?? "sangam";
console.log(milk_quantity_required);
