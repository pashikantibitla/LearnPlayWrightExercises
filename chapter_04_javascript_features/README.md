# Chapter 4: JavaScript Features — var, let, const, Hoisting & Scope

This chapter is a deep dive into how JavaScript handles variable declarations, scopes, and hoisting. Understanding these concepts is critical for avoiding bugs in test automation code.

---

## Files & What They Exercise

| File | Topic | Methods / Functions Used |
|------|-------|--------------------------|
| `10_var_let_const.js` | Basics of `var`, `let`, `const` | `console.log(value: any): void` |
| `11_functions.js` | Function declarations & calls | `console.log(value: any): void` |
| `12_let_not_reassigned.js` | `let` vs `const` reassignment rules | `console.log(value: any): void` |
| `13_var_functional_scope.js` | `var` function scope behavior | `console.log(value: any): void` |
| `14_constant_keyword.js` | `const` deep dive | `console.log(value: any): void` |
| `15_let_block_scope.js` | `let` block scope behavior | `console.log(value: any): void` |
| `16_hostings.js` | Variable hoisting with `var` | `console.log(value: any): void` |
| `17_hosting_function.js` | Function hoisting | `console.log(value: any): void` |
| `18_let_hosting.js` | `let` hoisting & TDZ | `console.log(value: any): void` |
| `19_let_hosting_scope_example.js` | Block-level TDZ shadowing | `console.log(value: any): void` |
| `20_var_const_let_hosting_research.js` | Research summary on hoisting | `console.log(value: any): void` |
| `test_examples.js` | Practice test cases | `console.log(value: any): void` |

---

## Functions, Methods & Keywords Exercised

### console.log(value: any): void
- **Description:** Prints the given value to the standard output (console).
- **Input:** Accepts any data type as a direct value, variable, or expression.
- **Return Type:** void (undefined) — returns nothing; only outputs to console.

### var (Keyword)
- **Description:** Declares a function-scoped variable. Hoisted and initialized to `undefined`.
- **Input:** A variable name and an optional initial value.
- **Return Type:** No return type — creates a function-scoped binding.

### let (Keyword)
- **Description:** Declares a block-scoped variable. Hoisted but NOT initialized (TDZ).
- **Input:** A variable name and an optional initial value.
- **Return Type:** No return type — creates a block-scoped binding.

### const (Keyword)
- **Description:** Declares a block-scoped constant. Must be initialized at declaration. Hoisted but in TDZ.
- **Input:** A variable name and a required initial value.
- **Return Type:** No return type — creates a read-only block-scoped binding.

### function (Keyword)
- **Description:** Declares a named function. Function declarations are fully hoisted.
- **Input:** Function name, optional parameters, and a function body.
- **Return Type:** The function object itself.

### return (Keyword)
- **Description:** Exits a function and optionally passes a value back to the caller.
- **Input:** An optional expression or value to return.
- **Return Type:** The value of the expression provided; if none, returns undefined.

---

## Key Concepts

- **Function Scope:** `var` is accessible throughout the entire function it is declared in.
- **Block Scope:** `let` and `const` are only accessible within the `{}` block they are declared in.
- **Hoisting:** JavaScript moves declarations to the top of their scope during compilation.
- **Temporal Dead Zone (TDZ):** The period between when a `let`/`const` is hoisted and when it is initialized. Accessing it throws a `ReferenceError`.
- **Reassignment:** `var` and `let` can be reassigned; `const` cannot be reassigned (but object contents can mutate).
