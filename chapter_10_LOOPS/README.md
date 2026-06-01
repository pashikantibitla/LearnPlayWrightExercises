# Chapter 10: Loops

This chapter covers all loop structures in JavaScript — `for`, `while`, `do-while`, `for...of`, `for...in`, `forEach`, and common interview traps.

---

## Files & What They Exercise

| File | Topic | Methods / Functions Used |
|------|-------|--------------------------|
| `71_For_loop.js` | Introducing the for loop | `console.log(value: any): void` |
| `72_For_loop.js` | for loop with `<=` condition | `console.log(value: any): void` |
| `73_For_Loop2.js` | Variable naming & boundaries | `console.log(value: any): void` |
| `74_Interview_q_1.js` | Nested if/else inside for | `console.log(value: any): void` |
| `75_For_OF_IN_EACH.js` | while loop retry logic | `console.log(value: any): void` |
| `76_While.js` | while loop basics | `console.log(value: any): void` |
| `77_Do_While.js` | do-while basics | `console.log(value: any): void` |
| `78_Do_While.js` | do-while retry example | `console.log(value: any): void` |
| `79_Interview_q_2.js` | while countdown | `console.log(value: any): void` |
| `80_interview_q_3.js` | do-while off-by-one trap | `console.log(value: any): void` |
| `81_Interview_q_4.js` | for with `continue` | `console.log(value: any): void` |
| `82_interview_Q,js` | do-while infinite-loop trap | `console.log(value: any): void` |

---

## Functions, Methods & Keywords Exercised

### console.log(value: any): void
- **Description:** Prints the given value to the standard output (console).
- **Input:** Accepts any data type as a direct value, variable, or expression.
- **Return Type:** void (undefined) — returns nothing; only outputs to console.

### for loop
- **Description:** Repeats a block of code as long as a condition is true, using initialization, condition, and increment expressions.
- **Input:** Three expressions — `for (init; condition; update)`.
- **Return Type:** No return type — controls repetition of the code block.

### while loop
- **Description:** Repeats a block of code while a specified condition evaluates to true.
- **Input:** A single boolean condition expression.
- **Return Type:** No return type — controls repetition of the code block.

### do-while loop
- **Description:** Executes a block of code once, then repeats it while a condition is true.
- **Input:** A single boolean condition expression.
- **Return Type:** No return type — guarantees at least one execution of the block.

### break (Keyword)
- **Description:** Immediately exits the nearest loop or switch statement.
- **Input:** No input.
- **Return Type:** No return type — terminates the current loop/switch.

### continue (Keyword)
- **Description:** Skips the remaining code in the current loop iteration and jumps to the next iteration.
- **Input:** No input.
- **Return Type:** No return type — skips to the next loop iteration.

### let / const (Keyword)
- **Description:** Declares block-scoped variables or constants.
- **Input:** Variable name and an optional/required initial value.
- **Return Type:** No return type — creates a binding in the current block scope.

---

## Key Concepts

- **For Loop Structure:** `for (init; condition; update) { ... }`
- **While Loop Structure:** `while (condition) { ... }`
- **Do-While Loop Structure:** `do { ... } while (condition);`
- **Off-by-One Errors:** Common bugs when using `<` vs `<=` in loop conditions.
- **Infinite Loops:** Occur when the loop condition never becomes false.
- **Break & Continue:** Used to control flow inside loops — exit early or skip an iteration.
- **Counter Variables:** Naming conventions (`i`, `j`, `k`) and scope considerations.
