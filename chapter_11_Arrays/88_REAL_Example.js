/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Practical array manipulation with removal and iteration.
 * 
 * Functions/Methods Used:
 *   - Array.prototype.pop(): any
 *     Description: Removes and returns the last element of the array.
 *     Input: No input parameters required.
 *     Return Type: any — the removed last element, or undefined if the array is empty.
 *   - Array.prototype.shift(): any
 *     Description: Removes and returns the first element of the array.
 *     Input: No input parameters required.
 *     Return Type: any — the removed first element, or undefined if the array is empty.
 *   - console.log(value: any): void
 *     Description: Outputs the provided value to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - Array length: The number of elements in the array, accessible via .length.
 *   - for loop iteration: Classic index-based loop to traverse array elements.
 *   - Conditional checks: Using if and strict equality (===) to perform actions
 *     based on element values during iteration.
 *   - Element removal: Demonstrates removing elements from both ends of an array.
 * ============================================================
 */

let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length);
console.log(browser);

browser.pop();
console.log(browser);

let removed = browser.shift();
console.log(browser);
console.log(removed);


for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Opera is removed from the selenium!");
    }
}