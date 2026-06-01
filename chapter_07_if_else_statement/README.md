# Chapter 7: If / Else Statements

This chapter covers conditional control flow using `if`, `else if`, and `else` statements. You will learn to make decisions in code based on boolean conditions.

---

## Files & What They Exercise

| File | Topic | Methods / Functions Used |
|------|-------|--------------------------|
| `48_if_else_excersie_01.js` | Basic if-else voting eligibility | `console.log(value: any): void` |
| `49_if_else_if_ex_02.js` | if-else-if grade ladder | `console.log(value: any): void` |
| `50_REAL_IF_ELSE.js` | Nested if-else role-based access | `console.log(value: any): void` |
| `51_API_IF_ELSE.js` | API status code branching | `console.log(value: any): void` |
| `52_Interview_Quest_IF_ELSE.js` | Truthy vs falsy values | `console.log(value: any): void` |
| `53_if_else_real_ex.js` | Logical operators + if-else | `console.log(value: any): void` |
| `54_interview_q.js` | One-line if without braces | `console.log(value: any): void` |
| `55_even_no.js` | Even/odd check with modulus | `console.log(value: any): void` |
| `56_interview_quest_1.js` | Single-line if statement | `console.log(value: any): void` |
| `57_grade_calcualtor.js` | Grade calculator A-F | `console.log(value: any): void` |
| `58_leap_year.js` | Leap year logic | `console.log(value: any): void` |
| `59_triangle_classifier.js` | Triangle classification function | `console.log(value: any): void`, `classifyTriangle(side1: number, side2: number, side3: number): string` |

---

## Functions, Methods & Keywords Exercised

### console.log(value: any): void
- **Description:** Prints the given value to the standard output (console).
- **Input:** Accepts any data type as a direct value, variable, or expression.
- **Return Type:** void (undefined) — returns nothing; only outputs to console.

### classifyTriangle(side1: number, side2: number, side3: number): string
- **Description:** A user-defined function that classifies a triangle as equilateral, isosceles, or scalene based on side lengths.
- **Input:** Three parameters of type number representing the lengths of the triangle sides.
- **Return Type:** string — a message describing the triangle type or an invalidation message.

### if / else if / else (Keywords)
- **Description:** Conditional statements that execute different blocks of code based on boolean expressions.
- **Input:** A boolean expression or value inside the parentheses.
- **Return Type:** No return type — controls the flow of execution.

### Comparison Operators (`>`, `<`, `>=`, `<=`, `===`, `==`, `!==`, `!=`)
- **Description:** Operators that compare two values and return a boolean result.
- **Input:** Two values to compare.
- **Return Type:** boolean — true or false.

### Logical Operators (`&&`, `||`, `!`)
- **Description:** Operators that combine or invert boolean values.
- **Input:** One or two boolean values or expressions that coerce to boolean.
- **Return Type:** boolean (or the last evaluated value for `&&` and `||`).

### Modulus Operator `%`
- **Description:** Returns the remainder of division of two numbers.
- **Input:** Two numbers.
- **Return Type:** number — the remainder.

---

## Key Concepts

- **If Statement:** Executes a block only if the condition is true.
- **Else If Ladder:** Tests multiple conditions sequentially.
- **Else Block:** Executes when none of the preceding conditions are true.
- **Nested If-Else:** An if/else block inside another if/else block.
- **Truthy & Falsy:** Values that evaluate to true or false in a boolean context.
- **Logical AND (`&&`):** Both conditions must be true.
- **Logical OR (`||`):** At least one condition must be true.
- **Leap Year Rules:** Divisible by 4, not by 100 unless also by 400.
