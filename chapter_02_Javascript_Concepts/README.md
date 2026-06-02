# Chapter 2: JavaScript Concepts

This chapter introduces the `var` keyword for variable declaration and reassignment — the building block for storing and updating data in JavaScript.

---

## Files & What They Exercise

| File | Topic | Methods / Functions Used |
|------|-------|--------------------------|
| `05_javascript_keyword_var.js` | `var` declaration & reassignment | `console.log(value: any): void` |

---

## Functions, Methods & Keywords Exercised

### console.log(value: any): void
- **Description:** Prints the given value to the standard output (console).
- **Input:** Accepts any data type as a direct value, variable, or expression.
- **Return Type:** void (undefined) — returns nothing; only outputs to console.

### var (Keyword)
- **Description:** Declares a function-scoped variable. Can be declared multiple times in the same scope and is hoisted with an initial value of `undefined`.
- **Input:** A variable name and an optional initial value assignment.
- **Return Type:** No return type — it creates a binding in the function scope.

### Variable Reassignment
- **Description:** Updating the value stored in a previously declared variable using the assignment operator `=`.
- **Input:** A variable on the left side and a new value (of any type) on the right side.
- **Return Type:** The assigned value.

### Primitive Values
- **Description:** Simple immutable data types — numbers, strings, booleans, null, undefined, symbol, bigint.
- **Input:** Written directly as literals in code.
- **Return Type:** The literal value itself.

---

## Key Concepts

- **Variable Declaration:** Creating a named reference to a value using `var`.
- **Variable Reassignment:** Changing the value held by a variable after initial declaration.
- **Function Scope:** `var` is scoped to the nearest function, not block.
- **Hoisting:** `var` declarations are moved to the top of their scope during compilation.

---

## 📖 Inline Explanations in Source Files

> Every `.js` file in this folder now contains a **comprehensive multi-line comment block** at the end of the file for self-contained revision and reference. Each block includes:
>
> - **Detailed explanations** of the concepts demonstrated
> - **Step-by-step code breakdowns** line by line
> - **Comparison tables** (e.g., `var` vs `let` vs `const`)
> - **Key concepts** explained in plain English
> - **Real-world use cases** and practical applications
> - **Common mistakes** to avoid
> - **Key takeaway** summaries
>
> Simply open any `.js` file and scroll to the bottom for a full tutorial on that topic.
