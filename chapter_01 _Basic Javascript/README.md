# Chapter 1: Basic JavaScript

This chapter covers the absolute fundamentals of JavaScript — writing your first program, understanding variables, keywords, and how the V8 engine optimizes frequently-run code.

---

## Files & What They Exercise

| File | Topic | Methods / Functions Used |
|------|-------|--------------------------|
| `01_Basics.js` | Hello World | `console.log(value: any): void` |
| `02_keywords_LET.js` | `let` keyword & `for` loops | `console.log(value: any): void` |
| `03_windows_key_functions.js` | Node.js process info | `console.log(value: any): void` |
| `04_hot_code_v8_functionality.js` | V8 JIT optimization | `console.log(value: any): void` |

---

## Functions, Methods & Keywords Exercised

### console.log(value: any): void
- **Description:** Prints the given value to the standard output (console).
- **Input:** Accepts any data type as a direct value, variable, or expression.
- **Return Type:** void (undefined) — returns nothing; only outputs to console.

### let (Keyword)
- **Description:** Declares a block-scoped variable that can be reassigned.
- **Input:** Requires a variable name and an optional initial value assignment.
- **Return Type:** No return type — it creates a binding in the current scope.

### var (Keyword)
- **Description:** Declares a function-scoped variable (legacy, hoisted with undefined).
- **Input:** Requires a variable name and an optional initial value assignment.
- **Return Type:** No return type — it creates a binding in the function scope.

### for loop
- **Description:** Repeats a block of code a specific number of times.
- **Input:** Three expressions — initialization, condition, increment.
- **Return Type:** No return type — controls flow of execution.

### function (Keyword)
- **Description:** Declares a named function that can be called later.
- **Input:** Function name, optional parameter list, and a function body.
- **Return Type:** The function object itself; internally returns undefined if no return statement.

### process.platform
- **Description:** A property of the global `process` object that returns the operating system platform.
- **Input:** No input — accessed as a property.
- **Return Type:** string — e.g., "win32", "darwin", "linux".

### process.arch
- **Description:** A property that returns the CPU architecture for which Node.js was compiled.
- **Input:** No input — accessed as a property.
- **Return Type:** string — e.g., "x64", "arm".

### process.version
- **Description:** A property that returns the Node.js version string.
- **Input:** No input — accessed as a property.
- **Return Type:** string — e.g., "v18.17.0".

---

## Key Concepts

- **Variable Declaration:** Using `var` and `let` to store values.
- **Console Output:** Using `console.log()` to display information.
- **Loops:** Using `for` loops to repeat actions.
- **Environment Check:** Using `process.*` properties to verify Node.js setup.
- **Hot Code / JIT:** Understanding that V8 optimizes frequently-called functions.
