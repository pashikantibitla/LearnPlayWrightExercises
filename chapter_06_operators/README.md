# Chapter 6: Operators

This chapter covers every category of operators in JavaScript — assignment, arithmetic, comparison, logical, ternary, typeof, increment/decrement, and nullish coalescing.

---

## Files & What They Exercise

| File | Topic | Methods / Functions / Operators Used |
|------|-------|-------------------------------------|
| `30_operator.js` | Assignment `=` | `console.log(value: any): void`, `=` |
| `31_arthematic_operator.js` | Arithmetic `+ - * /` | `console.log(value: any): void`, `+ - * /` |
| `32_modulus_operator.js` | Modulus `%` | `console.log(value: any): void`, `%` |
| `33_exponential_operator.js` | Exponentiation `**` | `console.log(value: any): void`, `**` |
| `34_compound_operator.js` | Compound assignment `+= -= *= /= %=` | `console.log(value: any): void`, `+= -= *= /= %=` |
| `35_comparison_operator.js` | Comparison `> < >= <=` | `console.log(value: any): void`, `> < >= <=` |
| `36_Comparsion_Strict_loose.js` | Strict `===` vs Loose `==` | `console.log(value: any): void`, `=== == !== !=` |
| `37_IQ_Loose_Strict.js` | Tricky equality interview Qs | `console.log(value: any): void`, `=== ==` |
| `38_Confusing_Comparsion.js` | Type coercion traps | `console.log(value: any): void`, `typeof`, `Number.isNaN(value: any): boolean`, `Object.is(value1: any, value2: any): boolean` |
| `39_Logical_Op.js` | Logical `&& || !` | `console.log(value: any): void`, `&& || !` |
| `40_string_concatination-operator.js` | String concatenation `+` | `console.log(value: any): void`, `+ +=` |
| `41_Ternary_Op.js` | Ternary `? :` | `console.log(value: any): void`, `? :` |
| `42_Type_Op.js` | `typeof` operator | `console.log(value: any): void`, `typeof` |
| `43_pre_Incre_Op.js` | Pre-increment `++a` | `console.log(value: any): void`, `++` |
| `44_Null_Op.js` | Nullish coalescing `??` | `console.log(value: any): void`, `??` |
| `45_post_increment_operator.js` | Post-increment `a++` | `console.log(value: any): void`, `++` |
| `46_increment_operation.js` | Increment operations | `console.log(value: any): void`, `++` |
| `47_advance_iquestions,js` | Advanced increment traps | `console.log(value: any): void`, `++` |

---

## Functions, Methods & Keywords Exercised

### console.log(value: any): void
- **Description:** Prints the given value to the standard output (console).
- **Input:** Accepts any data type as a direct value, variable, or expression.
- **Return Type:** void (undefined) — returns nothing; only outputs to console.

### typeof (Operator)
- **Description:** Returns a string indicating the type of the operand.
- **Input:** Any value, variable, or expression.
- **Return Type:** string — e.g., "string", "number", "boolean", "undefined", "object".

### Number.isNaN(value: any): boolean
- **Description:** Determines whether the passed value is NaN (Not-a-Number) and is of type number.
- **Input:** Any value to test.
- **Return Type:** boolean — true if the value is NaN, false otherwise.

### Object.is(value1: any, value2: any): boolean
- **Description:** Compares two values for equality, similar to `===` but handles `-0` vs `+0` and `NaN` correctly.
- **Input:** Two values to compare.
- **Return Type:** boolean — true if the values are the same, false otherwise.

### let / const (Keyword)
- **Description:** Declares block-scoped variables or constants.
- **Input:** Variable name and an optional/required initial value.
- **Return Type:** No return type — creates a binding in the current block scope.

---

## Operators Summary

| Operator | Category | Input | Return Type | Description |
|----------|----------|-------|-------------|-------------|
| `=` | Assignment | left: variable, right: value | The assigned value | Stores the right value in the left variable. |
| `+ - * /` | Arithmetic | Two numbers | number | Basic math operations. |
| `%` | Modulus | Two numbers | number | Returns the remainder of division. |
| `**` | Exponentiation | Two numbers | number | Raises the left number to the power of the right. |
| `+= -= *= /= %=` | Compound Assignment | left: variable, right: value | The assigned value | Shorthand for `x = x op y`. |
| `> < >= <=` | Comparison | Two values | boolean | Compares values after coercion. |
| `===` | Strict Equality | Two values | boolean | Compares values AND types without coercion. |
| `==` | Loose Equality | Two values | boolean | Compares values with type coercion. |
| `!==` | Strict Inequality | Two values | boolean | Opposite of `===`. |
| `!=` | Loose Inequality | Two values | boolean | Opposite of `==`. |
| `&&` | Logical AND | Two booleans | boolean | Returns true only if both operands are true. |
| `\|\|` | Logical OR | Two booleans | boolean | Returns true if at least one operand is true. |
| `!` | Logical NOT | One boolean | boolean | Flips the boolean value. |
| `? :` | Ternary | condition ? trueValue : falseValue | The chosen value | One-line if/else expression. |
| `??` | Nullish Coalescing | Two values | The first non-nullish value | Returns right side only if left is null/undefined. |
| `++a` | Pre-increment | One number | number (new value) | Increments first, then returns the new value. |
| `a++` | Post-increment | One number | number (old value) | Returns the old value, then increments. |

---

## 📖 Inline Explanations in Source Files

> Every `.js` file in this folder now contains a **comprehensive multi-line comment block** at the end of the file for self-contained revision and reference. Each block includes:
>
> - **Detailed explanations** of the concepts demonstrated
> - **Step-by-step code breakdowns** line by line
> - **Comparison tables** (e.g., strict vs loose equality, pre vs post increment, `??` vs `||`)
> - **Key concepts** explained in plain English
> - **Real-world use cases** and practical applications
> - **Common mistakes** to avoid
> - **Key takeaway** summaries
>
> Simply open any `.js` file and scroll to the bottom for a full tutorial on that topic.
