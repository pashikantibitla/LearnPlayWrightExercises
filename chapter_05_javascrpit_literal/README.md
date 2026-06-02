# Chapter 5: JavaScript Literals

This chapter covers all forms of literals in JavaScript — the raw values you write directly in code. From numbers and strings to null, undefined, and template literals.

---

## Files & What They Exercise

| File | Topic | Methods / Functions Used |
|------|-------|--------------------------|
| `22_literals.js` | Basic literals & typeof | `console.log(value: any): void`, `typeof` |
| `23_null_undefined.js` | `null` vs `undefined` deep dive | `console.log(value: any): void`, `JSON.stringify(value: any): string` |
| `24_null.js` | Empty values & number forms | `console.log(value: any): void` |
| `25_literals_all.js` | All literal forms at a glance | — |
| `26_literals_numbers_all.js` | Number literal formats | `console.log(value: any): void` |
| `27_string_literals.js` | Single vs double quotes | `console.log(value: any): void` |
| `28_template_literal.js` | Backticks & interpolation | `console.log(value: any): void`, `Date.now(): number`, `new Date().toISOString(): string` |
| `29_backtick_string.js` | `'` vs `"` vs `` ` `` comparison | `console.log(value: any): void` |

---

## Functions, Methods & Keywords Exercised

### console.log(value: any): void
- **Description:** Prints the given value to the standard output (console).
- **Input:** Accepts any data type as a direct value, variable, or expression.
- **Return Type:** void (undefined) — returns nothing; only outputs to console.

### typeof (Operator)
- **Description:** Returns a string indicating the type of the unevaluated operand.
- **Input:** Any value, variable, or expression.
- **Return Type:** string — e.g., "string", "number", "boolean", "undefined", "object", "function".

### JSON.stringify(value: any): string
- **Description:** Converts a JavaScript value to a JSON string.
- **Input:** Any JavaScript value (object, array, string, number, etc.).
- **Return Type:** string — the JSON representation of the input value.

### Date.now(): number
- **Description:** Returns the number of milliseconds elapsed since January 1, 1970 (Unix epoch).
- **Input:** No input — called as a static method.
- **Return Type:** number — timestamp in milliseconds.

### new Date().toISOString(): string
- **Description:** Creates a new Date object and converts it to an ISO 8601 formatted string.
- **Input:** No input for `new Date()`; uses current date/time.
- **Return Type:** string — e.g., "2024-01-15T10:30:00.000Z".

### let / const (Keyword)
- **Description:** Declares block-scoped variables or constants.
- **Input:** Variable name and an optional/required initial value.
- **Return Type:** No return type — creates a binding in the current block scope.

---

## Key Concepts

- **Primitive Literals:** number, string, boolean, null, undefined, symbol, bigint.
- **Number Formats:** decimal, binary `0b`, octal `0o`, hex `0x`, exponential `1e6`, separators `1_000_000`, BigInt `123n`.
- **String Quotes:** Single `'...'`, double `"..."`, and backtick `` `...` `` (template literals).
- **Template Literal Interpolation:** `` `${variable}` `` for embedding expressions inside strings.
- **null vs undefined:** `null` is developer-set empty; `undefined` is JS-set uninitialized.
- **typeof null === "object":** A 26-year-old JavaScript bug preserved for backward compatibility.

---

## 📖 Inline Explanations in Source Files

> Every `.js` file in this folder now contains a **comprehensive multi-line comment block** at the end of the file for self-contained revision and reference. Each block includes:
>
> - **Detailed explanations** of the concepts demonstrated
> - **Step-by-step code breakdowns** line by line
> - **Comparison tables** (e.g., string quote styles, number formats, `null` vs `undefined`)
> - **Key concepts** explained in plain English
> - **Real-world use cases** and practical applications
> - **Common mistakes** to avoid
> - **Key takeaway** summaries
>
> Simply open any `.js` file and scroll to the bottom for a full tutorial on that topic.
