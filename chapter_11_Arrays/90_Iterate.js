/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Various patterns for iterating over array elements.
 * 
 * Functions/Methods Used:
 *   - Array.prototype.forEach(callback: (element: any, index: number) => void): void
 *     Description: Executes a provided callback once for each array element.
 *     Input: Accepts a callback function that receives the current element and its index.
 *     Return Type: void (undefined) — returns nothing; executes the callback for each element.
 *   - Array.prototype.entries(): Iterator
 *     Description: Returns an iterator of [index, value] pairs for the array.
 *     Input: No input parameters required.
 *     Return Type: Iterator — an iterable object yielding [index, value] pairs.
 *   - console.log(value: any): void
 *     Description: Outputs the provided value to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - Classic for loop: Uses an index counter and .length for full control.
 *   - for...of: Iterates over values directly; cleanest syntax when index is not needed.
 *   - for...in: Iterates over enumerable property names (indices as strings);
 *     useful for objects but less common for arrays.
 *   - forEach: Functional approach that accepts a callback with element and index.
 *   - Destructuring: [i, test] syntax extracts index and value from entries() iterator.
 * ============================================================
 */

// Iterate - Go from one to another. // 

let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("----");

// for...of (cleanest for values)
for (test of tests) {
    console.log(test);
}

console.log("----");

tests.forEach((i, index) => {
    console.log(i, index);
});

console.log("----");

let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}

console.log("----");

for (let [i, test] of tests.entries()) {
    console.log(i, test);
}