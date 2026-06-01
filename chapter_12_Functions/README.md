# Chapter 12: Functions

This chapter covers JavaScript functions in depth — declarations, expressions, arrow functions, parameters, return values, template literals, IIFE, default parameters, rest parameters, spread operator, scope, closures, higher-order functions, pure functions, and real-world patterns.

---

## Files & What They Exercise

| File | Topic | Methods / Functions Used |
|------|-------|--------------------------|
| `96_Functions.js` | Introduction to functions | `greet(): void`, `console.log(value: any): void` + educational notes (function vs method, parameter vs argument, return vs return type) |
| `97_Type1_Fn_Basic_Functions.js` | Type-1: No params, no return | `greet(): undefined`, `console.log(value: any): void` |
| `98_Type2_Fn_With_Param_No_Return.js` | Type-2: With params, no return | `greetByName(name: string): undefined`, `begger(money: number): undefined`, `console.log(value: any): void` |
| `99_Type3_Fn_without_Param_Return_Type.js` | Type-3: No params, with return | `goToRelativeHouse(): string`, `console.log(value: any): void` |
| `100_Type4_Fn_With_Param_With_Return.js` | Type-4: With params AND return | `sumOfTwoNumner(a: number, b: number): number`, `console.log(value: any): void` |
| `101_Template_literal.js` | Functions + template literals | `greet(name: string): string`, `console.log(value: any): void` |
| `102_Fn_Expression.js` | Function expressions vs declarations | `greet(name: string): string`, `greet1(name1: string): string`, `greet2(name1: string): string`, `console.log(value: any): void` |
| `103_Arrow_Fn.js` | Arrow functions (ES6) | `doubleIt(n: number): number`, `printIt(name: string): void`, `add(a: number, b: number): number`, `add2(a: number, b: number): number`, `say(): void`, `say1(): void`, `say2(): string`, `greet(name: string): string`, `console.log(value: any): void` |
| `104_Arrow_Fn_REAL.js` | Real-world arrow functions | `validateStatusCode(status: number): void`, `validateStatusCode_Exp(status: number): void`, `validateStatusCode_Arrow(status: number): void`, `console.log(value: any): void` |
| `105_IIFE.js` | Immediately Invoked Function Expressions (IIFE) | `console.log(value: any): void` |
| `106_Default_Param_Fn.js` | Default parameter values | `retry(testName: string, maxRetries: number = 3, delay: number = 1000): void`, `console.log(value: any): void` |
| `107_IQ.js` | Function return patterns with template literals | `runTest(name: string, status: string, duration: number): string`, `console.log(value: any): void` |
| `108_Rest_Param_Fn.js` | Rest parameters (`...args`) | `logResult(suiteName: string, ...results: any[]): void`, `console.log(value: any): void` |
| `109_IQ.js` | Hoisting trap with function expressions | `console.log(value: any): void` |
| `110_Spead_IQ.js` | Spread operator with functions | `add(a: number, b: number, c: number): number`, `hasError(...codes: number[]): boolean`, `Array.prototype.some(callback: function): boolean`, `console.log(value: any): void` |
| `111_Scope._Fn.js` | Global vs local scope in functions | `setupConfig(): void`, `console.log(value: any): void` |
| `112_IQ.js` | Nested scope & scope chain | `outer(): void`, `inner(): void`, `console.log(value: any): void` |
| `113_Closure.js` | Basic closures | `outer(): function`, `inner(): void`, `console.log(value: any): void` |
| `114_Closure.js` | Closure with counter state | `makeCounter(start: number = 0): object`, `console.log(value: any): void` |
| `115_API_REAL_Closure.js` | Real-world closure: retry tracker | `makeRetryTracker(max: number): function`, `tryAgain(testName: string): string`, `console.log(value: any): void` |
| `116_Higher_Order_Fn.js` | Higher-order functions | `runWithLoggin(testFn: function, testName: string): any`, `loginTest(): string`, `loginTestFAILED(): string`, `console.log(value: any): void` |
| `117_Pure_Fn.js` | Pure vs impure functions | `calculatePassRate(total: number, passed: number): string`, `isPassing(score: number): boolean`, `console.log(value: any): void`, `Number.prototype.toFixed(digits: number): string` |

---

## Functions Summary

| Function | Description | Input | Return Type |
|----------|-------------|-------|-------------|
| `greet()` | Prints a greeting message. | No parameters. | void (undefined) |
| `greetByName(name)` | Prints a personalized greeting with a name. | One string parameter. | void (undefined) |
| `begger(money)` | Prints a thank-you message with a money value. | One number parameter. | void (undefined) |
| `goToRelativeHouse()` | Prints a message and returns a greeting string. | No parameters. | string |
| `sumOfTwoNumner(a, b)` | Adds two numbers and returns the sum. | Two number parameters. | number |
| `greet(name)` | Returns a greeting using template literal interpolation. | One string parameter. | string |
| `greet1(name1)` | Named function declaration returning a greeting. | One string parameter. | string |
| `greet2(name1)` | Anonymous function expression returning a greeting. | One string parameter. | string |
| `doubleIt(n)` | Arrow function that doubles a number. | One number parameter. | number |
| `printIt(name)` | Arrow function that prints a name to console. | One string parameter. | void |
| `add(a, b)` | Standard named function returning the sum. | Two number parameters. | number |
| `add2(a, b)` | Arrow function (concise) returning the sum. | Two number parameters. | number |
| `say()` | Standard named function printing "Hi". | No parameters. | void |
| `say1()` | Arrow function (concise) printing "Hi". | No parameters. | void |
| `say2()` | Arrow function (concise) returning "Hi". | No parameters. | string |
| `validateStatusCode(status)` | Checks if HTTP status is in success range (200-300). | One number parameter. | void |
| `validateStatusCode_Exp(status)` | Function expression version of status validator. | One number parameter. | void |
| `validateStatusCode_Arrow(status)` | Arrow function version of status validator. | One number parameter. | void |
| `retry(testName, maxRetries, delay)` | Logs retry configuration with default param values. | One string + two optional numbers (default 3, 1000). | void |
| `runTest(name, status, duration)` | Builds a formatted test result string using template literals. | Two strings + one number. | string |
| `logResult(suiteName, ...results)` | Logs suite name and captures all remaining arguments as an array. | One string + rest parameters of any type. | void |
| `add(a, b, c)` | Returns the sum of three numbers. | Three number parameters. | number |
| `hasError(...codes)` | Checks if any status code is 400 or above using rest + spread + `some()`. | Rest number parameters. | boolean |
| `setupConfig()` | Demonstrates global and local variable access inside a function. | No parameters. | void |
| `outer()` | Demonstrates nested scope and the scope chain. | No parameters. | void |
| `inner()` | Inner function accessing outer scope variables (closure precursor). | No parameters. | void |
| `outer()` (closure) | Returns an inner function that retains access to `outer`'s local variable. | No parameters. | function (the inner function) |
| `makeCounter(start)` | Creates a counter object with increment, decrement, and get methods using closure. | One optional number parameter (default 0). | object |
| `makeRetryTracker(max)` | Creates a retry tracker function that remembers `max` and `attempts` via closure. | One number parameter. | function (`tryAgain`) |
| `tryAgain(testName)` | Tracks retry attempts and returns status message using closure state. | One string parameter. | string |
| `runWithLoggin(testFn, testName)` | Executes a provided function and returns its result (higher-order function). | One function + one string parameter. | any (result of `testFn`) |
| `loginTest()` | Simulates a passing test. | No parameters. | string ("pass") |
| `loginTestFAILED()` | Simulates a failing test. | No parameters. | string ("fail") |
| `calculatePassRate(total, passed)` | Calculates pass rate percentage as a fixed-decimal string. | Two number parameters. | string (from `.toFixed(2)`) |
| `isPassing(score)` | Checks if score meets an external threshold (impure function example). | One number parameter. | boolean |

---

## Built-in Methods

### console.log(value: any): void
- **Description:** Prints the given value to the standard output (console).
- **Input:** Accepts any data type as a direct value, variable, or expression.
- **Return Type:** void (undefined) — returns nothing; only outputs to console.

### Array.prototype.some(callback: function): boolean
- **Description:** Tests whether at least one element in the array passes the test implemented by the provided function.
- **Input:** A callback function that returns a boolean for each element.
- **Return Type:** boolean — true if at least one element passes the test, false otherwise.

### Number.prototype.toFixed(digits: number): string
- **Description:** Formats a number using fixed-point notation with the specified number of decimal places.
- **Input:** An integer specifying the number of digits after the decimal point (0-20).
- **Return Type:** string — the number formatted as a fixed-decimal string.

---

## Key Concepts

### Function vs Method
- **Function:** A standalone block of code. Called independently: `greet()`.
- **Method:** A function that belongs to an object. Called via dot notation: `arr.push(5)`.

### Parameter vs Argument
- **Parameter:** The variable in the function **definition**: `function greet(name) { ... }` — `name` is a parameter.
- **Argument:** The actual value passed at the **call**: `greet("Alice")` — `"Alice"` is an argument.

### Return vs Return Type
- **return:** The keyword that exits a function and sends a value back to the caller.
- **Return Type:** The data type of the value returned (e.g., number, string, boolean, void/undefined).

### Function Declaration vs Expression
- **Declaration:** `function name() { ... }` — hoisted, can be called before definition.
- **Expression:** `const name = function() { ... }` — not hoisted, assigned to a variable.

### Arrow Functions (ES6)
- **Concise Body:** `(params) => expression` — implicit return, no curly braces needed.
- **Block Body:** `(params) => { ...; return value; }` — explicit `return` required.
- **`this` Binding:** Arrow functions do NOT have their own `this`; they inherit from the parent scope.

### The Four Function Types
| Type | Parameters | Return Value | Example |
|------|------------|--------------|---------|
| Type 1 | No | No | `function greet() { console.log("Hi"); }` |
| Type 2 | Yes | No | `function greet(name) { console.log(name); }` |
| Type 3 | No | Yes | `function greet() { return "Hi"; }` |
| Type 4 | Yes | Yes | `function add(a, b) { return a + b; }` |

### IIFE (Immediately Invoked Function Expression)
- **Description:** A function that is defined and executed immediately. Used to create a private scope.
- **Syntax:** `(function() { ... })();` or `(() => { ... })();`
- **Input:** No input (unless parameters are passed).
- **Return Type:** Whatever the function returns (often void).

### Default Parameters
- **Description:** Parameters that receive a default value if no argument is provided or if the argument is `undefined`.
- **Syntax:** `function fn(name, retries = 3, delay = 1000) { ... }`
- **Input:** The default value is assigned at function definition time.
- **Return Type:** N/A — affects parameter initialization.

### Rest Parameters (`...args`)
- **Description:** Collects all remaining arguments into a single array parameter.
- **Syntax:** `function fn(first, ...rest) { ... }`
- **Input:** Any number of arguments after the named parameters.
- **Return Type:** An array containing the collected arguments.

### Spread Operator (`...`)
- **Description:** Expands an iterable (like an array) into individual elements.
- **Syntax:** `add(...numbers)` — spreads the array into separate arguments.
- **Input:** An iterable (array, string, etc.).
- **Return Type:** N/A — affects how arguments are passed.

### Scope
- **Global Scope:** Variables declared outside any function are accessible everywhere.
- **Local/Function Scope:** Variables declared inside a function are only accessible inside that function.
- **Block Scope:** Variables declared with `let` or `const` inside `{}` are only accessible within that block.
- **Nested Scope:** Inner functions can access variables from their outer (parent) scopes.

### Closure
- **Description:** A function that "remembers" and has access to variables from its outer scope even after the outer function has finished executing.
- **Input:** Created automatically when an inner function references outer variables.
- **Return Type:** The inner function retains access to the outer scope's variables.
- **Use Cases:** Data privacy, stateful functions (counters, retry trackers), factory functions.

### Higher-Order Functions
- **Description:** A function that either takes another function as an argument or returns a function as its result.
- **Input:** A function reference/definition passed as an argument.
- **Return Type:** Can return any value, often the result of calling the passed function.
- **Examples:** `Array.prototype.map()`, `Array.prototype.filter()`, `runWithLoggin(testFn, name)`.

### Pure vs Impure Functions
| Feature | Pure Function | Impure Function |
|---------|--------------|-----------------|
| **Description** | Same output for same input, no side effects. | Output may vary, causes side effects. |
| **External State** | Does NOT read or modify external variables. | Reads or modifies external variables. |
| **Side Effects** | None — does not change anything outside itself. | Yes — console.log, DOM manipulation, API calls. |
| **Return Type** | Predictable and deterministic. | May vary even with identical inputs. |
| **Example** | `calculatePassRate(total, passed)` | `isPassing(score)` (depends on external `threshold`) |
