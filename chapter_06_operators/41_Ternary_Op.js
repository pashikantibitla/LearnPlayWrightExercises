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

/*
================================================================================
                           DETAILED EXPLANATION
================================================================================

This file demonstrates the Ternary Operator (Conditional Operator) in
JavaScript. It is a compact, inline version of an if-else statement and
follows the syntax: condition ? valueIfTrue : valueIfFalse.

================================================================================
                           STEP-BY-STEP CODE BREAKDOWN
================================================================================

Example 1: Voting Eligibility
  let b_qualification = a_age >= 18 ? "eligiable for voting" : "Nope, not eligible";
  - Condition: a_age >= 18
  - If true -> assigns "eligiable for voting".
  - If false -> assigns "Nope, not eligible".

Example 2: API Status Check
  let result = apiStatusActual === expectedStatusCode ? "Pass" : "Failed...";
  - Perfect for quick pass/fail assertions in testing.

Example 3: Environment Selection
  let env = environment === "staging" ? "staging URL" : "QA URL";
  - Common in configuration scripts and CI/CD pipelines.

Example 4: Browser Mode (Headed vs Headless)
  let browserMode = isCI ? "headed" : "headless";
  - Note: The logic here seems reversed (CI usually wants headless), but the
    syntax demonstrates ternary usage clearly.

Example 5: SLA Response Time Check
  let response = SLA <= responsetime ? "SLA is within time..." : "Failed...";
  - Evaluates if a response meets a service level agreement.

Example 6: Multiple (Nested) Conditions
  let age_eligitbility_2 = age >= 18 ? ( age < 18 ? ... ) : "not eligible";
  - Nesting ternaries is possible but hurts readability.
  - Prefer if-else or switch for complex multi-branch logic.

================================================================================
                             KEY CONCEPTS
================================================================================

Ternary Syntax:
  condition ? expressionIfTrue : expressionIfFalse

Why Use It:
  - Concise inline conditional assignment.
  - Great for simple binary decisions.
  - Reduces boilerplate for short if-else blocks.

Caveat:
  - Over-nesting makes code hard to read. When nested beyond one level,
    switch to if-else or extract to a function.

================================================================================
                          COMPARISON TABLE
================================================================================

| Approach        | Code Length | Readability | Best For                  |
|-----------------|-------------|-------------|---------------------------|
| Ternary         | Short       | High (1 level) | Simple binary choices   |
| if-else         | Medium      | High        | Multi-branch logic        |
| switch          | Medium      | Medium      | Many discrete values      |
| Nested Ternary  | Short       | Low         | NOT recommended           |

================================================================================
                          REAL-WORLD USE CASES
================================================================================

1. CSS Class Toggling:
   let className = isActive ? "active" : "inactive";

2. Default Values:
   let name = userInput ? userInput : "Anonymous";

3. Status Messages:
   let status = isOnline ? "Available" : "Offline";

4. Feature Flags in Playwright:
   let mode = process.env.CI ? "headless" : "headed";

5. Currency Formatting:
   let symbol = country === "US" ? "$" : "€";

================================================================================
                          COMMON MISTAKES TO AVOID
================================================================================

Mistake 1: Nesting ternaries too deeply.
  let x = a ? b ? c ? d : e : f : g; // UNREADABLE. Use if-else instead.

Mistake 2: Forgetting that both branches are evaluated as expressions.
  // You cannot put statements like return or break inside a ternary directly.

Mistake 3: Using ternary when if-else is clearer.
  // If the logic spans multiple lines, prefer if-else for maintainability.

Mistake 4: Confusing precedence.
  let result = condition ? a + b : c * d; // Works fine, but parentheses help.

================================================================================
                            KEY TAKEAWAY
================================================================================

The ternary operator is a powerful tool for concise conditional expressions.
Use it for simple binary decisions, but avoid deep nesting to keep your code
readable and maintainable.
================================================================================
*/