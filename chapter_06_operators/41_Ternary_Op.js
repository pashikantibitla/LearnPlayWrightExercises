/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Ternary Operator (Conditional ? : )
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
 *   - Template Literals (`...${...}...`)
 *     Description: Allows embedded expressions inside string literals using backticks for formatted output.
 *     Input: Accepts string content with embedded expressions as direct values, variables, or expressions inside ${}.
 *     Return Type: string — returns the evaluated string with interpolated values.
 * 
 * Key Concepts:
 *   - Ternary Operator Syntax: condition ? valueIfTrue : valueIfFalse
 *   - Use Cases: Evaluating eligibility, API response checks, environment selection, headed/headless mode, SLA checks.
 *   - Nested Ternary: Ternary operators can be nested for multiple conditions, though readability should be considered.
 * ============================================================
 */

let a_age = 10;
let b_qualification = a_age >= 18 ? "eligiable for voting ": "Nope, not eligible";
console.log("eligibility criteria : " , b_qualification)

// api testing code
let apiStatusActual = "200,ok";
let expectedStatusCode = "200,ok";
let result = apiStatusActual===expectedStatusCode? "Pass":"Failed, not expected status code 200";
console.log("API status Code iss :", result);

//enviromnamr check
let environment = "stagiprod";
let actualEnvironment= "QA";
let env  = environment ==="staging" ? "https://app.vwo-staging.com" :" https://app-vw0-QA.com"
console.log(env);

//browser heded or headless
let isCI = true;
let browserMode = isCI ? "headed":"headless";
console.log("browser mode is: ", browserMode);

let responsetime = 850;
let SLA = 1000;
let response = SLA <= responsetime ? "SLA is with in time, pass " + responsetime : "Failed, response is taking more time " + responsetime;
console.log("the rsponse time is: ", response)
console.log(`the result of the time response difference beween SLA and response time : ${responsetime}ms-${SLA}ms`)

/*
condition ? true : false
*/

//Multiple conditions
let age = 26;
let age_eligitbility = age >= 18 ? "eliglble" :"not eligible"; 
let age_eligitbility_2 = age>=18 ? ( age<18 ? "teenager" : "youth " && age >=40 ? "millenial people" : "youth between 18 and 40 people, voting eligible") :"not eligible";
console.log(age_eligitbility);
console.log(age_eligitbility_2);