# Chapter 8 — Interview Questions & Deep Dive: Switch Statement

---

## Table of Contents

1. [Core Concepts](#1-core-concepts)
2. [Interview Questions & Coding Examples](#2-interview-questions--coding-examples)
3. [Quick Reference](#3-quick-reference)
4. [Key Takeaways](#4-key-takeaways)

---

## 1. Core Concepts

### Switch Statement Structure

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         SWITCH STATEMENT FLOW                           │
│                                                                         │
│  switch (expression) { ───────────────────────────────┐                │
│      case value1: ───────────────────────┐             │                │
│          // code                         │             │                │
│          break; ───────────────────────┐ │             │                │
│                                        │ │             │                │
│      case value2: ─────────────────────┐ │             │                │
│      case value3: ─────────────────────┐ │ │             │                │
│          // grouped cases              │ │ │             │                │
│          break; ─────────────────────┐ │ │             │                │
│                                        │ │ │             │                │
│      default: ─────────────────────────┐ │ │             │                │
│          // fallback                   │ │ │             │                │
│          break;                        │ │ │             │                │
│  }                                     │ │ │             │                │
│                                        │ │ │             │                │
│  Without break: FALL-THROUGH ──────────┘ │ │             │                │
│  Execution continues to next case        │ │             │                │
│                                          │ │             │                │
│  With break: EXIT ───────────────────────┘ │             │                │
│  Execution exits the switch               │             │                │
│                                           │             │                │
│  IMPORTANT: switch uses === (strict equality)                            │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### Switch vs If-Else

```
┌────────────────────┬────────────────────┬─────────────────────────────┐
│ Aspect             │ Switch             │ If-Else                     │
├────────────────────┼────────────────────┼─────────────────────────────┤
│ Condition type     │ Exact match (===)  │ Any boolean expression      │
│ Multiple values    │ Grouped cases      │ Multiple || operators       │
│ Range checks       │ ❌ Not suitable    │ ✅ if (x > 10)              │
│ Readability        │ Better for many    │ Better for complex          │
│                    │ discrete values    │ conditions                  │
│ Performance        │ Faster (jump table)│ Slower (sequential eval)  │
│ Fall-through       │ ✅ By default      │ ❌ Not applicable           │
│ Default fallback   │ default case       │ else block                  │
└────────────────────┴────────────────────┴─────────────────────────────┘
```

---

## 2. Interview Questions & Coding Examples

### Q1. What is the difference between `switch` and `if-else`?

```js
// Switch — exact match, multiple discrete values
const day = 1;
switch (day) {
    case 0: console.log("Sunday"); break;
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    default: console.log("Invalid");
}

// Equivalent if-else
if (day === 0) console.log("Sunday");
else if (day === 1) console.log("Monday");
else if (day === 2) console.log("Tuesday");
else console.log("Invalid");

// When to use switch:
// ✅ Many discrete values (e.g., HTTP status codes, menu options)
// ✅ Enum-like values
// ✅ Better performance for many cases

// When to use if-else:
// ✅ Range comparisons (e.g., score >= 90)
// ✅ Complex conditions with &&, ||
// ✅ Boolean checks
// ✅ Type checks

// Performance: switch is O(1) with jump tables, if-else is O(n)
// For small number of cases, difference is negligible
```

---

### Q2. What is fall-through behavior in switch?

```js
// Fall-through — without break, execution continues to next case
const grade = "B";

switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good"); // Falls through!
    case "C":
        console.log("Average"); // Falls through!
    case "D":
        console.log("Below Average"); // Falls through!
    default:
        console.log("Invalid grade");
}
// Output: Good, Average, Below Average, Invalid grade

// Intentional fall-through (with comment)
switch (grade) {
    case "A":
    case "B":
    case "C":
        console.log("Passing"); // A, B, or C
        break;
    case "D":
    case "F":
        console.log("Failing"); // D or F
        break;
    default:
        console.log("Invalid");
}

// Common mistake: Forgetting break
const status = 200;
switch (status) {
    case 200:
        console.log("OK");
        // Missing break!
    case 404:
        console.log("Not Found"); // Also printed!
        break;
}
```

---

### Q3. What happens if there is no `default` case?

```js
const color = "purple";

switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "green":
        console.log("Go");
        break;
    case "yellow":
        console.log("Caution");
        break;
    // No default case
}
// No output — no match, no default

// Best practice: Always include default
switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "green":
        console.log("Go");
        break;
    case "yellow":
        console.log("Caution");
        break;
    default:
        console.log("Invalid color");
        break;
}
// Output: Invalid color

// Default can be anywhere (usually at end)
switch (color) {
    default:
        console.log("Unknown");
        break;
    case "red":
        console.log("Stop");
        break;
}
```

---

### Q4. What is the output of the following switch with strict equality?

```js
// Switch uses === internally!
const value = "5";

switch (value) {
    case 5:
        console.log("Number 5");
        break;
    case "5":
        console.log("String 5"); // Matches!
        break;
    default:
        console.log("No match");
}
// Output: String 5

// Another example
const status = 0;
switch (status) {
    case false:
        console.log("Boolean false");
        break;
    case 0:
        console.log("Number 0"); // Matches!
        break;
}
// Output: Number 0

// Type coercion does NOT happen
switch ("0") {
    case false:
        console.log("Boolean false"); // NOT matched
        break;
    case 0:
        console.log("Number 0"); // NOT matched!
        break;
    case "0":
        console.log("String 0"); // Matches!
        break;
}
// Output: String 0
```

---

### Q5. How do you switch on multiple values (grouped cases)?

```js
// Grouped cases for multiple values
const month = 1;

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Invalid month");
}

// HTTP status codes
const code = 404;
switch (code) {
    case 200:
    case 201:
    case 204:
        console.log("Success");
        break;
    case 400:
    case 401:
    case 403:
    case 404:
    case 422:
        console.log("Client Error");
        break;
    case 500:
    case 502:
    case 503:
        console.log("Server Error");
        break;
    default:
        console.log("Unknown");
}
```

---

### Q6. What is the output of the following switch with duplicate case values?

```js
// Duplicate case values are a SyntaxError!
switch (value) {
    case 1:
        console.log("One");
        break;
    case 1: // ❌ SyntaxError: Duplicate case label
        console.log("One again");
        break;
}

// But different types are allowed
switch (value) {
    case 1:
        console.log("Number one");
        break;
    case "1":
        console.log("String one");
        break;
}
// Both are valid because 1 !== "1"
```

---

### Q7. How do you switch on expressions and ranges?

```js
// Switch on expressions
const a = 5, b = 10;

switch (true) {
    case a + b > 15:
        console.log("Sum > 15");
        break;
    case a + b > 10:
        console.log("Sum > 10");
        break;
    case a + b > 5:
        console.log("Sum > 5");
        break;
    default:
        console.log("Sum <= 5");
}
// Output: Sum > 10

// Switch on ranges
const score = 85;

switch (true) {
    case score >= 90:
        console.log("A");
        break;
    case score >= 80:
        console.log("B");
        break;
    case score >= 70:
        console.log("C");
        break;
    case score >= 60:
        console.log("D");
        break;
    default:
        console.log("F");
}
// Output: B

// Note: This is an anti-pattern — use if-else for ranges
// But it works if you need to!
```

---

### Q8. What is the difference between `switch(true)` and regular switch?

```js
// Regular switch — exact value matching
const day = 1;
switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
}

// switch(true) — boolean expression matching
const age = 25;
switch (true) {
    case age < 13:
        console.log("Child");
        break;
    case age < 20:
        console.log("Teen");
        break;
    case age < 60:
        console.log("Adult");
        break;
    default:
        console.log("Senior");
}
// Output: Adult

// How it works:
// switch(true) evaluates each case expression and compares to true using ===
// case age < 60 → 25 < 60 → true → matches!

// Best practice: Use if-else for ranges, switch for discrete values
```

---

### Q9. How do you switch on object types?

```js
const input = [1, 2, 3];

// Using typeof
switch (typeof input) {
    case "string":
        console.log("String:", input);
        break;
    case "number":
        console.log("Number:", input);
        break;
    case "boolean":
        console.log("Boolean:", input);
        break;
    case "object":
        if (Array.isArray(input)) {
            console.log("Array:", input);
        } else if (input === null) {
            console.log("Null");
        } else {
            console.log("Object:", input);
        }
        break;
    default:
        console.log("Other type");
}

// Note: typeof null === "object" is a bug
// Always check for null separately

// Better: Use if-else with instanceof for objects
if (input instanceof Array) {
    console.log("Array");
} else if (input instanceof Date) {
    console.log("Date");
} else if (input instanceof RegExp) {
    console.log("RegExp");
} else if (input === null) {
    console.log("Null");
} else {
    console.log("Other");
}
```

---

### Q10. What is the output of the following switch with fall-through traps?

```js
// Trap 1: Missing break in the middle
let x = 1;
let result = "";

switch (x) {
    case 1:
        result += "A";
    case 2:
        result += "B";
    case 3:
        result += "C";
        break;
    default:
        result += "D";
}
console.log(result); // "ABC" — fall-through from 1 through 3

// Trap 2: Return instead of break
function getDay(num) {
    switch (num) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        default: return "Invalid";
    }
}
// Return exits the function, so break is not needed

// Trap 3: switch with break inside if
const y = 5;
switch (y) {
    case 1:
        if (true) {
            break; // Breaks the switch, not the if
        }
        console.log("A"); // Not reached
    case 2:
        console.log("B");
        break;
    default:
        console.log("C"); // C
}
```

---

## 3. Quick Reference

### Switch Syntax

```js
switch (expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    case value3:
    case value4: // grouped
        // code
        break;
    default:
        // fallback
        break;
}
```

### Switch vs If-Else Decision Tree

```
Many discrete values? ──→ YES ──→ Switch (with grouped cases)
    │
    └──→ NO ──→ Range check? ──→ YES ──→ If-Else
                  │
                  └──→ NO ──→ Complex logic? ──→ YES ──→ If-Else
                                │
                                └──→ NO ──→ Either is fine
```

---

## 4. Key Takeaways

1. **Switch uses `===` internally** — no type coercion, string `"5"` does not match number `5`.
2. **Always use `break`** — unless you intentionally want fall-through.
3. **Always include a `default` case** — catches unexpected values.
4. **Grouped cases share the same body** — multiple case labels, one block.
5. **Duplicate case values are a SyntaxError** — even if they are different expressions.
6. **Switch is faster for many discrete values** — uses jump tables internally.
7. **If-else is better for ranges and complex conditions** — switch is limited to exact matches.
8. **`switch(true)` is a hack for ranges** — works but reduces readability; prefer if-else.
9. **Fall-through can be intentional** — but always document it with a comment.
10. **Return in a case exits the function** — break is not needed if you return.

---

**Happy coding! 🚀**

*Switch statements are clean for discrete values — but don't forget the break!*
