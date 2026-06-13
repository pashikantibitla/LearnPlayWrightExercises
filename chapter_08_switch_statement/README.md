# Chapter 8: Switch Statement

This chapter covers the `switch` statement for multi-way branching. You will learn about case matching, break behavior, fall-through, grouped cases, and common interview traps.

---

## Files & What They Exercise

| File | Topic | Methods / Functions Used |
|------|-------|--------------------------|
| `59_switch,js` | Switch basics | `console.log(value: any): void` |
| `60_switch_without_break.js` | Fall-through behavior | `console.log(value: any): void` |
| `61_Default.js` | Default branch usage | `console.log(value: any): void` |
| `62_REAL_TIME_EXAMPLE.js` | Real-world API status switching | `console.log(value: any): void` |
| `63_switch_group.js` | Grouped cases | `console.log(value: any): void` |
| `64_Interview_01.js` | Fall-through with strings | `console.log(value: any): void` |
| `65_interview_02,js` | Interview trap 2 | `console.log(value: any): void` |
| `66_interview_3.js` | Duplicate case values | `console.log(value: any): void` |
| `67_interview_04.js` | Strict equality in switch | `console.log(value: any): void`, `typeof` |

---

## Functions, Methods & Keywords Exercised

### console.log(value: any): void
- **Description:** Prints the given value to the standard output (console).
- **Input:** Accepts any data type as a direct value, variable, or expression.
- **Return Type:** void (undefined) — returns nothing; only outputs to console.

### switch (Keyword)
- **Description:** Evaluates an expression and matches its value against a series of `case` clauses, executing the matching block.
- **Input:** An expression to evaluate (placed inside the switch parentheses).
- **Return Type:** No return type — controls the flow of execution.

### case (Keyword)
- **Description:** Labels a block of code inside a `switch` statement. If the switch expression matches the case value, this block executes.
- **Input:** A literal value to match against the switch expression.
- **Return Type:** No return type — defines a branch in the switch.

### break (Keyword)
- **Description:** Immediately exits the nearest `switch`, `for`, `while`, or `do-while` block.
- **Input:** No input.
- **Return Type:** No return type — controls flow by breaking out of the current block.

### default (Keyword)
- **Description:** Specifies the block of code to run when none of the `case` values match the switch expression.
- **Input:** No input — it is the fallback branch.
- **Return Type:** No return type — defines the fallback branch.

### typeof (Operator)
- **Description:** Returns a string indicating the type of the operand.
- **Input:** Any value, variable, or expression.
- **Return Type:** string — e.g., "string", "number", "boolean", "undefined", "object".

### let (Keyword)
- **Description:** Declares a block-scoped variable.
- **Input:** A variable name and an optional initial value.
- **Return Type:** No return type — creates a block-scoped binding.

---

## Key Concepts

- **Switch Expression Matching:** Uses strict equality (`===`) internally to compare the expression with case values.
- **Fall-Through:** If `break` is omitted, execution continues into the next `case` block.
- **Grouped Cases:** Multiple `case` labels can share the same execution body.
- **Default Case:** Acts as an `else` for the switch — runs when no cases match.
- **Type Sensitivity:** Because switch uses `===`, `"5"` does NOT match `5`.
- **Duplicate Cases:** Having two `case` labels with the same value is a syntax error.

---

## 📖 Inline Explanations in Source Files

> Every `.js` file in this folder now contains a **comprehensive multi-line comment block** at the end of the file for self-contained revision and reference. Each block includes:
>
> - **Detailed explanations** of the concepts demonstrated
> - **Step-by-step code breakdowns** line by line
> - **Comparison tables** (e.g., `if-else` vs `switch`, break behavior)
> - **Key concepts** explained in plain English
> - **Real-world use cases** and practical applications
> - **Common mistakes** to avoid
> - **Key takeaway** summaries
>
> Simply open any `.js` file and scroll to the bottom for a full tutorial on that topic.
