/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Real-World Arrow Functions — converting a normal function to arrow function for API status validation.
 *
 * Functions/Methods Used:
 *   - validateStatusCode(status: number): void
 *     Description: A standard named function that checks if an HTTP status code is in the success range.
 *     Input: One parameter `status` of type number, provided as a direct numeric value or variable.
 *     Return Type: void — no explicit return; only prints to console.
 *
 *   - validateStatusCode_Exp(status: number): void
 *     Description: A function expression that checks if an HTTP status code is in the success range.
 *     Input: One parameter `status` of type number, provided as a direct numeric value or variable.
 *     Return Type: void — no explicit return; only prints to console.
 *
 *   - validateStatusCode_Arrow(status: number): void
 *     Description: An arrow function that checks if an HTTP status code is in the success range.
 *     Input: One parameter `status` of type number, provided as a direct numeric value or variable.
 *     Return Type: void — no explicit return; only prints to console.
 *
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Function Declaration vs Expression vs Arrow: Three ways to define the same logic.
 *   - Comparison Operators: `>=` and `<=` used to define a valid status code range (200-300).
 *   - Logical AND: `&&` ensures both conditions must be true for the success message.
 *   - Real-World Use: Validating HTTP response status codes in API testing / Playwright scripts.
 * ============================================================
 */

// if (ourStatusCode >= 200 && ourStatusCode < 300)
//This is a perfectly normal function.
function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

// This is a function as an expression.
const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}



// Arrow function
const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

validateStatusCode_Arrow();