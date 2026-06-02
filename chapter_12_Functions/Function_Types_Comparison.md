# Function Types Comparison

## Quick Overview

| Feature | Normal Function (Declaration) | Function Expression | Arrow Function (ES6) |
|---|---|---|---|
| **Syntax** | `function name(params) { ... }` | `const name = function(params) { ... }` | `const name = (params) => { ... }` |
| **Hoisting** | Hoisted (can be called before declaration) | Not hoisted (must be defined before use) | Not hoisted (must be defined before use) |
| **`this` Binding** | Has its own `this` context | Has its own `this` context | Inherits `this` from parent scope |
| **Use Case** | Standard reusable logic | Assigning functions to variables / callbacks | Concise syntax, callbacks, array methods |
| **Readability** | Verbose, very explicit | Explicit, good for clarity | Very concise, especially for short logic |

---

## Small Example

All three versions below do the exact same thing: validate if an HTTP status code is in the success range (200–300).

### 1. Normal Function

```js
function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    }
}
```

### 2. Function Expression

```js
const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    }
};
```

### 3. Arrow Function

```js
const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    }
};
```

---

## Memory Hooks (Easy Way to Remember)

| Type | Memory Hook | Why It Sticks |
|---|---|---|
| **Normal Function** | **The Standalone Boss** | It has its **own name**, its **own `this`**, and can be called **before** it appears (hoisted). Like a CEO with their own office — independent and always available. |
| **Function Expression** | **The Assigned Employee** | It is **stored in a variable**, must be **defined before use** (not hoisted), and has its **own `this`**. Like an employee assigned to a specific desk — you can’t ask for them before they join. |
| **Arrow Function** | **The Shortcut Ninja** | It is **super concise**, **borrows `this`** from its surroundings, and is perfect for **quick tasks**. Like a ninja who blends into the team and uses the team’s identity card instead of carrying their own. |

> **Quick Mental Check:**
> - See the word `function` at the start? → **Normal Function (Boss)**
> - See `function` on the right side of `=`? → **Function Expression (Employee)**
> - See `=>` (fat arrow)? → **Arrow Function (Ninja)**

---

## Detailed Feature Comparison (For Future Reference)

| Feature | Normal Function | Function Expression | Arrow Function |
|---|---|---|---|
| **Syntax** | `function name() {}` | `const name = function() {}` | `const name = () => {}` |
| **Keyword `function`** | ✅ Yes | ✅ Yes | ❌ No (uses `=>`) |
| **Has name?** | ✅ Yes (`name`) | ❌ Anonymous (bound to `const`) | ❌ Anonymous (bound to `const`) |
| **Hoisted?** | ✅ Fully hoisted | ❌ No (TDZ — `const`) | ❌ No (TDZ — `const`) |
| **Call before declaration** | ✅ Works | ❌ `ReferenceError` | ❌ `ReferenceError` |
| **Own `this`** | ✅ Yes | ✅ Yes | ❌ Inherits from outer scope |
| **Own `arguments` object** | ✅ Yes | ✅ Yes | ❌ Use rest `...args` |
| **Usable as constructor (`new`)** | ✅ Yes | ✅ Yes | ❌ Throws `TypeError` |
| **Has `prototype`** | ✅ Yes | ✅ Yes | ❌ No |
| **Implicit return (one-liner)** | ❌ No | ❌ No | ✅ Yes — e.g. `x => x * 2` |

---

## Key Takeaway

- Use **normal functions** when you want hoisting or a clearly named standalone routine.
- Use **function expressions** when you need to assign a function to a variable or pass it around.
- Use **arrow functions** when you want shorter syntax, especially for callbacks, array methods (`.map`, `.filter`), or when you want to preserve the outer `this` context.
