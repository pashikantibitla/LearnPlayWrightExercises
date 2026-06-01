# Chapter 3: Identifiers & Literals

This chapter covers the rules for naming variables (identifiers), naming conventions, and how to write comments in JavaScript.

---

## Files & What They Exercise

| File | Topic | Methods / Functions Used |
|------|-------|--------------------------|
| `06_idetifier_rules_varKeyword.js` | Identifier rules with `var` | `console.log(value: any): void` |
| `07_Identifier_rules_letKeyword.js` | Identifier rules with `let` / `const` | `console.log(value: any): void` |
| `08_Comments.js` | Single-line & multi-line comments | — |
| `09_identifier_Case_rules.js` | Naming conventions (camelCase, PascalCase, etc.) | `console.log(value: any): void` |

---

## Functions, Methods & Keywords Exercised

### console.log(value: any): void
- **Description:** Prints the given value to the standard output (console).
- **Input:** Accepts any data type as a direct value, variable, or expression.
- **Return Type:** void (undefined) — returns nothing; only outputs to console.

### var (Keyword)
- **Description:** Declares a function-scoped variable.
- **Input:** A variable name and an optional initial value.
- **Return Type:** No return type — creates a function-scoped binding.

### let (Keyword)
- **Description:** Declares a block-scoped variable that can be reassigned.
- **Input:** A variable name and an optional initial value.
- **Return Type:** No return type — creates a block-scoped binding.

### const (Keyword)
- **Description:** Declares a block-scoped constant that cannot be reassigned.
- **Input:** A variable name and a required initial value.
- **Return Type:** No return type — creates a read-only block-scoped binding.

### function (Keyword)
- **Description:** Declares a named reusable block of code.
- **Input:** Function name, optional parameters, and a function body.
- **Return Type:** The function object; internally returns undefined if no return statement.

---

## Key Concepts

- **Identifier Rules:** Names can include letters, digits, `$`, and `_`; cannot start with a digit; are case-sensitive.
- **Naming Conventions:**
  - `camelCase` — variables and functions (`getUserInfo`)
  - `PascalCase` — classes and constructors (`Person`)
  - `snake_case` — constants and config (`MAX_SIZE`)
  - `SCREAMING_SNAKE_CASE` — constants (`API_KEY`)
- **Comments:** Single-line `//` and multi-line `/* */` for code documentation.
