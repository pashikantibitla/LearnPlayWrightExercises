# Chapter 11 — Interview Questions & Deep Dive: Arrays

---

## Table of Contents

1. [Core Concepts](#1-core-concepts)
2. [Interview Questions & Coding Examples](#2-interview-questions--coding-examples)
3. [Quick Reference](#3-quick-reference)
4. [Key Takeaways](#4-key-takeaways)

---

## 1. Core Concepts

### Array Creation Methods

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         ARRAY CREATION METHODS                            │
│  ┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐  │
│  │ Literal            │  │ Constructor        │  │ Static methods     │  │
│  │ ───────────────────│  │ ───────────────────│  │ ───────────────────│  │
│  │ []                 │  │ new Array()        │  │ Array.of()         │  │
│  │ [1, 2, 3]          │  │ new Array(3)       │  │ Array.from()       │  │
│  │                    │  │ [empty × 3]        │  │                    │  │
│  │ Most common        │  │ ⚠️ single number   │  │ From iterable      │  │
│  │                    │  │ creates empty      │  │ or array-like      │  │
│  │                    │  │ slots              │  │                    │  │
│  └────────────────────┘  └────────────────────┘  └────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### Array Methods Categories

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         ARRAY METHODS                                   │
│  ┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐  │
│  │ MUTATING (in-place)│  │ NON-MUTATING       │  │ ACCESSORS          │  │
│  │ ───────────────────│  │ ───────────────────│  │ ───────────────────│  │
│  │ push()             │  │ concat()           │  │ indexOf()          │  │
│  │ pop()              │  │ slice()            │  │ lastIndexOf()      │  │
│  │ shift()            │  │ map()              │  │ includes()         │  │
│  │ unshift()          │  │ filter()           │  │ find()             │  │
│  │ splice()           │  │ reduce()            │  │ findIndex()        │  │
│  │ sort()             │  │ flat()             │  │ every()            │  │
│  │ reverse()          │  │ join()             │  │ some()             │  │
│  │ fill()             │  │                    │  │ at()               │  │
│  │ copyWithin()       │  │                    │  │                    │  │
│  └────────────────────┘  └────────────────────┘  └────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Interview Questions & Coding Examples

### Q1. What is the difference between `push`, `pop`, `shift`, and `unshift`?

```js
const arr = [1, 2, 3];

// push — add to end
arr.push(4);        // [1, 2, 3, 4] — returns new length

// pop — remove from end
const last = arr.pop(); // 4 — arr is [1, 2, 3]

// unshift — add to beginning
arr.unshift(0);     // [0, 1, 2, 3] — returns new length

// shift — remove from beginning
const first = arr.shift(); // 0 — arr is [1, 2, 3]

// Visual:
// push/pop:    [1, 2, 3] → push(4) → [1, 2, 3, 4]
//              [1, 2, 3, 4] → pop() → [1, 2, 3]
// shift/unshift: [1, 2, 3] → unshift(0) → [0, 1, 2, 3]
//               [0, 1, 2, 3] → shift() → [1, 2, 3]

// Performance:
// push/pop — O(1) — fast
// shift/unshift — O(n) — slow (reindexes all elements)

// Comparison table:
// ┌────────────┬────────────┬────────────┬────────────┬────────────┐
// │ Method     │ Position   │ Action     │ Returns    │ O(1) or O(n)│
// ├────────────┼────────────┼────────────┼────────────┼────────────┤
// │ push()     │ End        │ Add        │ new length │ O(1)       │
// │ pop()      │ End        │ Remove     │ removed    │ O(1)       │
// │ unshift()  │ Beginning  │ Add        │ new length │ O(n)       │
// │ shift()    │ Beginning  │ Remove     │ removed    │ O(n)       │
// └────────────┴────────────┴────────────┴────────────┴────────────┘
```

---

### Q2. What is the difference between `slice` and `splice`?

```js
const arr = [1, 2, 3, 4, 5];

// slice — non-mutating, extract portion
const sliced = arr.slice(1, 3); // [2, 3] — arr unchanged [1, 2, 3, 4, 5]
const fromEnd = arr.slice(-2);  // [4, 5] — last 2 elements

// splice — mutating, remove/replace/insert
const spliced = arr.splice(1, 2); // [2, 3] — arr is [1, 4, 5]
const inserted = arr.splice(1, 0, "a", "b"); // [] — arr is [1, "a", "b", 4, 5]
const replaced = arr.splice(1, 2, "x"); // ["a", "b"] — arr is [1, "x", 4, 5]

// Comparison:
// ┌────────────┬────────────┬────────────┬────────────┬────────────┐
// │ Feature    │ slice()    │ splice()   │            │            │
// ├────────────┼────────────┼────────────┼────────────┼────────────┤
// │ Mutates?   │ No         │ Yes        │            │            │
// │ Returns    │ New array  │ Removed    │            │            │
// │ Use        │ Extract    │ Add/Remove/│            │            │
// │            │ portion    │ Replace    │            │            │
// │ Parameters │ (start, end)│ (start, count, ...items)│            │            │
// │ Negative   │ Yes        │ Yes (start)│            │            │
// └────────────┴────────────┴────────────┴────────────┴────────────┘
```

---

### Q3. What is the difference between `map`, `filter`, and `reduce`?

```js
const arr = [1, 2, 3, 4, 5];

// map — transform each element, same length
const doubled = arr.map(x => x * 2); // [2, 4, 6, 8, 10]

// filter — keep elements that pass test, different length
const evens = arr.filter(x => x % 2 === 0); // [2, 4]

// reduce — reduce to single value
const sum = arr.reduce((acc, x) => acc + x, 0); // 15
const max = arr.reduce((acc, x) => x > acc ? x : acc, arr[0]); // 5

// reduce with object
const grouped = arr.reduce((acc, x) => {
    acc[x] = x * 2;
    return acc;
}, {}); // {1: 2, 2: 4, 3: 6, 4: 8, 5: 10}

// Comparison:
// ┌────────────┬────────────┬────────────┬────────────┬────────────┐
// │ Method     │ Input      │ Output     │ Length     │ Use        │
// ├────────────┼────────────┼────────────┼────────────┼────────────┤
// │ map()      │ Array      │ Array      │ Same       │ Transform  │
// │ filter()   │ Array      │ Array      │ ≤ Original │ Select     │
// │ reduce()   │ Array      │ Any value  │ N/A        │ Aggregate  │
// │ forEach()  │ Array      │ undefined  │ Same       │ Side effect│
// └────────────┴────────────┴────────────┴────────────┴────────────┘
```

---

### Q4. How do you flatten a nested array?

```js
const nested = [1, [2, 3], [4, [5, 6]]];

// Method 1: flat()
console.log(nested.flat());      // [1, 2, 3, 4, [5, 6]]
console.log(nested.flat(2));     // [1, 2, 3, 4, 5, 6]
console.log(nested.flat(Infinity)); // [1, 2, 3, 4, 5, 6]

// Method 2: reduce + concat
const flat1 = nested.reduce((acc, val) => acc.concat(val), []);
// [1, 2, 3, 4, [5, 6]]

// Method 3: recursive
function flatten(arr) {
    return arr.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}
console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6]

// Method 4: toString (for primitives)
const flat2 = nested.toString().split(',').map(Number);
console.log(flat2); // [1, 2, 3, 4, 5, 6]

// Method 5: stack-based (iterative)
function flattenIterative(arr) {
    const stack = [...arr];
    const result = [];
    while (stack.length) {
        const next = stack.pop();
        if (Array.isArray(next)) {
            stack.push(...next);
        } else {
            result.push(next);
        }
    }
    return result.reverse();
}
```

---

### Q5. What is the difference between `find`, `findIndex`, `indexOf`, and `includes`?

```js
const arr = [5, 12, 8, 130, 44];

// find — returns first element matching condition
const found = arr.find(x => x > 10); // 12

// findIndex — returns index of first match
const foundIndex = arr.findIndex(x => x > 10); // 1

// indexOf — returns index of exact value
const index = arr.indexOf(8); // 2
const notFound = arr.indexOf(99); // -1

// includes — checks if value exists
const has = arr.includes(8); // true
const noHas = arr.includes(99); // false

// lastIndexOf — last occurrence
const lastIndex = arr.lastIndexOf(8); // 2

// Comparison:
// ┌────────────┬────────────┬────────────┬────────────┬────────────┐
// │ Method     │ Search     │ Returns    │ Returns -1 │ Callback   │
// │            │ method     │            │ on miss?   │ based?     │
// ├────────────┼────────────┼────────────┼────────────┼────────────┤
// │ find()     │ Condition  │ Element    │ undefined  │ Yes        │
// │ findIndex()│ Condition  │ Index      │ -1         │ Yes        │
// │ indexOf()  │ Exact value│ Index      │ -1         │ No         │
// │ includes() │ Exact value│ Boolean    │ false      │ No         │
// │ lastIndexOf()│ Exact value│ Index    │ -1         │ No         │
// └────────────┴────────────┴────────────┴────────────┴────────────┘
```

---

### Q6. How do you sort an array properly?

```js
const arr = [10, 5, 20, 3];

// Default sort — converts to strings!
arr.sort(); // [10, 20, 3, 5] — lexicographic!

// Numeric sort — ascending
arr.sort((a, b) => a - b); // [3, 5, 10, 20]

// Numeric sort — descending
arr.sort((a, b) => b - a); // [20, 10, 5, 3]

// String sort — case-sensitive
const words = ["banana", "Apple", "cherry"];
words.sort(); // ["Apple", "banana", "cherry"]

// String sort — case-insensitive
words.sort((a, b) => a.localeCompare(b)); // ["Apple", "banana", "cherry"]

// Sort objects
const users = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }];
users.sort((a, b) => a.age - b.age); // Jane first (25)
users.sort((a, b) => a.name.localeCompare(b.name)); // Jane first

// Stable sort (ES2019+)
const items = [{ name: "A", val: 2 }, { name: "B", val: 2 }, { name: "C", val: 1 }];
items.sort((a, b) => a.val - b.val);
// [{ name: "C", val: 1 }, { name: "A", val: 2 }, { name: "B", val: 2 }]
// A and B maintain their original order (stable sort)
```

---

### Q7. How do you remove duplicates from an array?

```js
const arr = [1, 2, 2, 3, 3, 3, 4];

// Method 1: Set (easiest)
const unique1 = [...new Set(arr)]; // [1, 2, 3, 4]

// Method 2: filter
const unique2 = arr.filter((item, index) => arr.indexOf(item) === index);
// [1, 2, 3, 4]

// Method 3: reduce
const unique3 = arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
}, []);
// [1, 2, 3, 4]

// Method 4: for...of
const unique4 = [];
for (const item of arr) {
    if (!unique4.includes(item)) unique4.push(item);
}
// [1, 2, 3, 4]

// Method 5: Object/Map (best for large arrays)
const seen = new Map();
const unique5 = arr.filter(item => {
    if (seen.has(item)) return false;
    seen.set(item, true);
    return true;
});

// For objects (by key)
const objArr = [{ id: 1 }, { id: 2 }, { id: 1 }];
const uniqueObj = [...new Map(objArr.map(item => [item.id, item])).values()];
// [{ id: 1 }, { id: 2 }]
```

---

### Q8. What is the difference between `Array.isArray`, `instanceof`, and `typeof`?

```js
const arr = [];
const obj = {};

// Array.isArray — most reliable
console.log(Array.isArray(arr)); // true
console.log(Array.isArray(obj)); // false
console.log(Array.isArray(null)); // false
console.log(Array.isArray(undefined)); // false

// instanceof — fails across iframes/windows
console.log(arr instanceof Array); // true
console.log(obj instanceof Array); // false

// typeof — arrays are objects!
console.log(typeof arr); // "object"
console.log(typeof obj); // "object"

// Best practice: Always use Array.isArray()
function isArray(value) {
    return Array.isArray(value);
}

// Check if array-like
function isArrayLike(value) {
    return value && typeof value.length === "number" && value.length >= 0;
}
```

---

### Q9. What is the output of the following array methods?

```js
// Method chaining
const result = [1, 2, 3, 4]
    .filter(x => x > 2)    // [3, 4]
    .map(x => x * 2)        // [6, 8]
    .reduce((a, b) => a + b, 0); // 14

// every and some
const nums = [2, 4, 6, 8];
console.log(nums.every(x => x % 2 === 0)); // true
console.log(nums.some(x => x > 5)); // true
console.log(nums.some(x => x > 10)); // false

// at() — supports negative indices
const arr = [1, 2, 3, 4, 5];
console.log(arr.at(0));  // 1
console.log(arr.at(-1)); // 5
console.log(arr.at(-2)); // 4

// fill()
const filled = new Array(5).fill(0); // [0, 0, 0, 0, 0]
const partial = [1, 2, 3, 4, 5].fill(0, 2, 4); // [1, 2, 0, 0, 5]

// copyWithin()
const copied = [1, 2, 3, 4, 5].copyWithin(0, 3); // [4, 5, 3, 4, 5]
```

---

### Q10. How do you check if two arrays are equal?

```js
// === compares references, not contents
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a === b); // false

// Shallow equality
function shallowEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
console.log(shallowEqual(a, b)); // true

// Deep equality
function deepEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        const val1 = arr1[i];
        const val2 = arr2[i];
        if (Array.isArray(val1) && Array.isArray(val2)) {
            if (!deepEqual(val1, val2)) return false;
        } else if (val1 !== val2) {
            return false;
        }
    }
    return true;
}

// JSON.stringify (works for primitives, not objects with methods)
console.log(JSON.stringify(a) === JSON.stringify(b)); // true

// Modern: lodash isEqual (recommended for production)
```

---

## 3. Quick Reference

### Array Methods Cheat Sheet

```js
// Adding/Removing
arr.push(item)       // Add to end
arr.pop()            // Remove from end
arr.unshift(item)    // Add to beginning
arr.shift()          // Remove from beginning
arr.splice(start, count, ...items) // Remove/Add at index

// Accessing
arr[index]           // By index
arr.at(index)        // By index (supports negatives)
arr.indexOf(item)    // First index
arr.lastIndexOf(item) // Last index
arr.includes(item)   // Boolean
arr.find(fn)         // First match
arr.findIndex(fn)    // Index of first match
arr.findLast(fn)     // Last match
arr.findLastIndex(fn) // Index of last match

// Iteration
arr.forEach(fn)      // Side effects
arr.map(fn)          // Transform
arr.filter(fn)       // Select
arr.reduce(fn, init) // Aggregate
arr.every(fn)        // All pass?
arr.some(fn)         // Any pass?

// Transforming
arr.slice(start, end) // Extract portion
arr.concat(arr2)     // Merge arrays
arr.flat(depth)      // Flatten
arr.join(separator)  // To string
arr.reverse()        // Reverse in place
arr.sort(fn)         // Sort in place
arr.fill(value, start, end) // Fill

// Searching
arr.indexOf(item)    // First occurrence
arr.lastIndexOf(item) // Last occurrence
arr.includes(item)   // Boolean
arr.find(fn)         // First element
arr.findIndex(fn)    // First index

// Creating
Array.from(iterable) // From iterable
Array.of(1, 2, 3)    // From arguments
Array.isArray(value)   // Check
```

---

## 4. Key Takeaways

1. **Arrays are zero-indexed** — first element is at index 0.
2. **`push`/`pop` are O(1)** — fast operations at the end.
3. **`shift`/`unshift` are O(n)** — slow because they reindex all elements.
4. **`slice` is non-mutating, `splice` is mutating** — know the difference.
5. **`map` transforms, `filter` selects, `reduce` aggregates** — the big three.
6. **`forEach` cannot be broken** — use `for` or `for...of` if you need `break`.
7. **`sort()` converts to strings first** — always pass a compare function for numbers.
8. **`Array.isArray()` is the most reliable check** — `typeof []` returns `"object"`.
9. **`Set` is the easiest way to remove duplicates** — `[...new Set(arr)]`.
10. **`===` compares array references** — use `JSON.stringify` or custom function for content comparison.

---

**Happy coding! 🚀**

*Arrays are the workhorses of JavaScript — master them, master the language.*
