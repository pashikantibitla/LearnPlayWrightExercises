# Chapter 14 — Interview Questions & Deep Dive: Objects, Arrays, Sets, Maps, and Hash Maps

---

## Table of Contents

1. [Core Differences: Object vs List vs Array vs Set vs HashMap](#1-core-differences)
2. [Different Types of Arrays](#2-different-types-of-arrays)
3. [Interview Questions & Coding Examples](#3-interview-questions--coding-examples)
4. [Object Deep Dive](#4-object-deep-dive)
5. [Array Deep Dive](#5-array-deep-dive)
6. [Set & Map Deep Dive](#6-set--map-deep-dive)
7. [Quick Reference](#7-quick-reference)

---

## 1. Core Differences: Object vs List vs Array vs Set vs HashMap

### Overview

| Data Structure | JavaScript Name | Syntax | Ordered? | Duplicate Keys? | Duplicate Values? | Key Type |
|---------------|-----------------|--------|----------|-----------------|-------------------|----------|
| **Object** | Object | `{key: value}` | ❌ No (mostly) | ❌ No (overwrites) | ✅ Yes | String/Symbol |
| **List** | Array | `[value1, value2]` | ✅ Yes | N/A (index-based) | ✅ Yes | Number (index) |
| **Array** | Array | `[value1, value2]` | ✅ Yes | N/A (index-based) | ✅ Yes | Number (index) |
| **Set** | Set | `new Set([1, 2, 3])` | ✅ Yes (insertion) | N/A | ❌ No | N/A (values only) |
| **HashMap** | Map | `new Map([['key', 'val']])` | ✅ Yes (insertion) | ❌ No (overwrites) | ✅ Yes | Any type |

> **Note:** In JavaScript, "List" and "Array" are effectively the same thing. The term "List" is used in other languages (Python, Java, C#). JavaScript calls it `Array`.

---

### Detailed Comparison Table

```
┌─────────────────┬─────────────────────┬─────────────────────┬─────────────────────┬─────────────────────┬─────────────────────┐
│   Aspect        │      Object         │      Array          │        Set          │        Map          │   WeakMap/WeakSet   │
├─────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ Creation        │ {} or new Object()  │ [] or new Array()   │ new Set()           │ new Map()           │ new WeakMap()       │
│                 │                     │                     │                     │                     │ new WeakSet()       │
├─────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ Access          │ obj.key or          │ arr[0]              │ N/A (iterate only)  │ map.get(key)        │ wmap.get(key)       │
│                 │ obj["key"]          │                     │                     │                     │                     │
├─────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ Size            │ Object.keys(obj).   │ arr.length          │ set.size            │ map.size            │ N/A (not iterable)  │
│                 │   length            │                     │                     │                     │                     │
├─────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ Check Exists    │ "key" in obj        │ arr.includes(val)   │ set.has(val)        │ map.has(key)        │ wmap.has(key)       │
│                 │ obj.hasOwnProperty  │ arr.indexOf(val)    │                     │                     │ wset.has(val)       │
├─────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ Add             │ obj.key = val       │ arr.push(val)       │ set.add(val)        │ map.set(key, val)   │ wmap.set(key, val)  │
├─────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ Delete          │ delete obj.key      │ arr.splice(i, 1)    │ set.delete(val)     │ map.delete(key)     │ wmap.delete(key)    │
├─────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ Iterate         │ for...in, Object.   │ for, forEach,       │ forEach, for...of   │ forEach, for...of   │ N/A (not iterable)  │
│                 │   keys, Object.      │ for...of, map,      │                     │                     │                     │
│                 │   values, entries    │ filter, reduce      │                     │                     │                     │
├─────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ Key Type        │ String, Symbol      │ Number (index)      │ N/A (value-based)   │ Any type            │ Object only         │
├─────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ Duplicate       │ ❌ Keys unique      │ ✅ Values allowed   │ ❌ Values unique    │ ❌ Keys unique      │ ❌ Keys unique      │
├─────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ Ordered         │ ❌ Mostly (ES2015+  │ ✅ Yes              │ ✅ Yes (insertion)  │ ✅ Yes (insertion)  │ N/A                 │
│                 │   maintains order)   │                     │                     │                     │                     │
├─────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ Performance     │ O(1) access         │ O(1) access by      │ O(1) lookup         │ O(1) lookup         │ O(1) lookup         │
│ (Big O)         │ by key              │ index, O(n) search  │                     │                     │                     │
├─────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ Use Case        │ Config, key-value   │ Ordered list,       │ Unique values,      │ Key-value with      │ Cache with          │
│                 │ data, JSON          │ stack, queue,       │ deduplication,      │ non-string keys,    │ garbage collection  │
│                 │                     │ matrix, sequence    │ membership test     │ ordered pairs       │                     │
├─────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ typeof          │ "object"            │ "object"            │ "object"            │ "object"            │ "object"            │
├─────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ JSON Support    │ JSON.stringify      │ JSON.stringify      │ No native (convert) │ No native (convert) │ No native           │
├─────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ Methods         │ Object.keys(),      │ push, pop, shift,   │ add, delete, has,   │ set, get, has,      │ set, get, has,      │
│                 │ Object.values(),    │ unshift, splice,    │ clear, forEach,     │ delete, clear,      │ delete              │
│                 │ Object.entries(),   │ slice, map, filter, │ values, keys,       │ forEach, entries,   │                     │
│                 │ hasOwnProperty,     │ reduce, concat,     │ entries, union,     │ keys, values,       │                     │
│                 │ defineProperty      │ find, findIndex,    │ intersection,       │ size                │                     │
│                 │                     │ sort, reverse,      │ difference, subset  │                     │                     │
│                 │                     │ includes, indexOf   │                     │                     │                     │
└─────────────────┴─────────────────────┴─────────────────────┴─────────────────────┴─────────────────────┴─────────────────────┘
```

---

### Object vs Array vs Set vs Map — Visual Memory Model

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              OBJECT (Key-Value)                              │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐                      │
│  │ "name"      │───→│ "Pramod"    │    │             │                      │
│  │ "age"       │───→│ 42          │    │ Unordered   │                      │
│  │ "role"      │───→│ "SDET"      │    │             │                      │
│  └─────────────┘    └─────────────┘    └─────────────┘                      │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                              ARRAY (Indexed List)                            │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐                  │
│  │ 0       │───→│ "A"     │    │ 1       │───→│ "B"     │    Ordered       │
│  │ 1       │───→│ "B"     │    │ 2       │───→│ "C"     │    Index-based   │
│  │ 2       │───→│ "C"     │    │ 3       │───→│ "D"     │                  │
│  └─────────┘    └─────────┘    └─────────┘    └─────────┘                  │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                              SET (Unique Values)                             │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐                                  │
│  │ 1       │    │ 2       │    │ 3       │    No duplicates                  │
│  │ 2       │    │ 3       │    │ 4       │    No keys                        │
│  │ 2       │    │ 2       │    │         │    Values only                    │
│  │ 3       │    │         │    │         │                                  │
│  └─────────┘    └─────────┘    └─────────┘                                  │
│  Input: [1,2,2,3,3,3,4]   →   Set: {1,2,3,4}                                │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                              MAP (Any Key Type)                              │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐                      │
│  │ "name"      │───→│ "Pramod"    │    │             │                      │
│  │ 42          │───→│ "number"    │    │ Ordered     │                      │
│  │ {}          │───→│ "object"    │    │ Any key     │                      │
│  │ []          │───→│ "array"     │    │             │                      │
│  └─────────────┘    └─────────────┘    └─────────────┘                      │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Different Types of Arrays

In JavaScript, there are several ways to categorize and create arrays. Here are the different types:

### A. By Data Type

| Array Type | Example | Description |
|-----------|---------|-------------|
| **String Array** | `['a', 'b', 'c']` | Array of strings |
| **Number Array** | `[1, 2, 3, 4]` | Array of numbers |
| **Boolean Array** | `[true, false, true]` | Array of booleans |
| **Object Array** | `[{id: 1}, {id: 2}]` | Array of objects |
| **Mixed Array** | `[1, 'a', true, {}]` | Array of mixed types (not recommended) |
| **Nested Array** | `[[1,2], [3,4], [5,6]]` | 2D array (matrix) |
| **Function Array** | `[fn1, fn2, fn3]` | Array of functions |

### B. By Dimension

```js
// 1D Array (Linear)
const arr1D = [1, 2, 3, 4, 5];
// Visual: [1, 2, 3, 4, 5]

// 2D Array (Matrix)
const arr2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// Visual:
// ┌─────┬─────┬─────┐
// │  1  │  2  │  3  │
// ├─────┼─────┼─────┤
// │  4  │  5  │  6  │
// ├─────┼─────┼─────┤
// │  7  │  8  │  9  │
// └─────┴─────┴─────┘

// 3D Array (Cube)
const arr3D = [
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
];
// Visual: Multiple layers of 2D arrays
```

### C. By Behavior / Special Arrays

```js
// Typed Arrays (for binary data)
const int8 = new Int8Array([1, 2, 3]);        // 8-bit signed integer
const uint8 = new Uint8Array([1, 2, 3]);      // 8-bit unsigned integer
const int16 = new Int16Array([1, 2, 3]);      // 16-bit signed integer
const int32 = new Int32Array([1, 2, 3]);      // 32-bit signed integer
const float32 = new Float32Array([1.1, 2.2]); // 32-bit float
const float64 = new Float64Array([1.1, 2.2]); // 64-bit float (default)

// Array-Like Objects (not true arrays)
const arrayLike = { 0: 'a', 1: 'b', length: 2 };
// NodeList, arguments object are array-like

// Sparse Array (has holes)
const sparse = [1, , , 4]; // indices 1 and 2 are empty

// Dense Array (no holes)
const dense = [1, 2, 3, 4];
```

### D. Typed Arrays Comparison

| Typed Array | Size | Range | Use Case |
|-------------|------|-------|----------|
| `Int8Array` | 1 byte | -128 to 127 | Small integers, binary data |
| `Uint8Array` | 1 byte | 0 to 255 | Binary data, images, buffers |
| `Int16Array` | 2 bytes | -32768 to 32767 | Audio data |
| `Uint16Array` | 2 bytes | 0 to 65535 | Unicode text, colors |
| `Int32Array` | 4 bytes | -2 billion to 2 billion | Large integers |
| `Uint32Array` | 4 bytes | 0 to 4 billion | Timestamps, counters |
| `Float32Array` | 4 bytes | ±3.4e38 | 3D graphics, precision not critical |
| `Float64Array` | 8 bytes | ±1.8e308 | Scientific computing, precision critical |

---

## 3. Interview Questions & Coding Examples

### Q1. What is the difference between Object and Array in JavaScript?

**Answer:**
- **Object**: Unordered collection of key-value pairs. Keys are strings or symbols. Used for structured data, configs, mappings.
- **Array**: Ordered collection of values accessed by numeric index. Used for lists, sequences, stacks, queues.

```js
// Object
const user = { name: "John", age: 30 };
console.log(user.name);   // "John"
console.log(user["age"]); // 30

// Array
const colors = ["red", "green", "blue"];
console.log(colors[0]);   // "red"
console.log(colors.length); // 3
```

---

### Q2. How do you check if a variable is an Object vs Array?

```js
const obj = { a: 1 };
const arr = [1, 2, 3];
const str = "hello";
const num = 42;

// Method 1: Array.isArray()
console.log(Array.isArray(arr));  // true
console.log(Array.isArray(obj));  // false

// Method 2: instanceof
console.log(arr instanceof Array);  // true
console.log(obj instanceof Array);  // false

// Method 3: Object.prototype.toString.call()
console.log(Object.prototype.toString.call(arr));  // [object Array]
console.log(Object.prototype.toString.call(obj));  // [object Object]
console.log(Object.prototype.toString.call(str));  // [object String]
console.log(Object.prototype.toString.call(num));  // [object Number]

// Method 4: typeof (not sufficient alone)
console.log(typeof arr);  // "object" (arrays are objects!)
console.log(typeof obj);  // "object"
console.log(typeof str);  // "string"
console.log(typeof num);  // "number"

// Best practice: Array.isArray() is the most reliable
function isArray(val) {
    return Array.isArray(val);
}

function isObject(val) {
    return val !== null && typeof val === "object" && !Array.isArray(val);
}
```

---

### Q3. Explain Object vs Map. When to use which?

```js
// Object
const obj = { name: "John" };
obj["age"] = 30;
console.log(obj.name);  // "John"

// Map
const map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set(42, "number key");     // number as key!
map.set({}, "object key");     // object as key!
console.log(map.get("name"));  // "John"
console.log(map.get(42));      // "number key"

// Key Differences:
// 1. Map keys can be ANY type (object, number, function)
// 2. Map maintains insertion order
// 3. Map has size property
// 4. Map is iterable directly (for...of)
// 5. Map has better performance for frequent additions/removals

// When to use Object:
// - Simple key-value data with string keys
// - JSON serialization
// - Config objects

// When to use Map:
// - Need non-string keys
// - Need guaranteed insertion order
// - Frequent additions/removals
// - Need size tracking

// Convert Object to Map
const userObj = { name: "John", age: 30 };
const userMap = new Map(Object.entries(userObj));
console.log(userMap);  // Map { 'name' => 'John', 'age' => 30 }

// Convert Map to Object
const objFromMap = Object.fromEntries(userMap);
console.log(objFromMap);  // { name: "John", age: 30 }
```

---

### Q4. How do you remove duplicates from an Array?

```js
const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

// Method 1: Set (easiest, ES6+)
const unique1 = [...new Set(arr)];
console.log(unique1);  // [1, 2, 3, 4]

// Method 2: filter + indexOf
const unique2 = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(unique2);  // [1, 2, 3, 4]

// Method 3: reduce
const unique3 = arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
}, []);
console.log(unique3);  // [1, 2, 3, 4]

// Method 4: for...of loop
const unique4 = [];
for (const item of arr) {
    if (!unique4.includes(item)) unique4.push(item);
}
console.log(unique4);  // [1, 2, 3, 4]

// Method 5: Object/Map as hash table (best for objects)
const objArr = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 1, name: "A" }  // duplicate by id
];
const seen = new Map();
const uniqueObj = objArr.filter(item => {
    if (seen.has(item.id)) return false;
    seen.set(item.id, true);
    return true;
});
console.log(uniqueObj);  // [{ id: 1, name: "A" }, { id: 2, name: "B" }]
```

---

### Q5. What is the difference between Set and Array?

```js
// Array
const arr = [1, 2, 2, 3];
console.log(arr.length);        // 4 (includes duplicates)
console.log(arr[0]);            // 1
arr.push(2);                    // [1, 2, 2, 3, 2] — duplicates allowed

// Set
const set = new Set([1, 2, 2, 3]);
console.log(set.size);           // 3 (duplicates ignored)
console.log(set.has(1));        // true
set.add(2);                     // still {1, 2, 3} — 2 already exists

// Set operations
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// Union
const union = new Set([...setA, ...setB]);
console.log([...union]);  // [1, 2, 3, 4, 5, 6]

// Intersection
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log([...intersection]);  // [3, 4]

// Difference
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log([...difference]);  // [1, 2]

// Subset
const isSubset = [...setA].every(x => setB.has(x));  // false
```

---

### Q6. What is a WeakMap and WeakSet? Why use them?

```js
// WeakMap
// - Keys must be OBJECTS
// - Not iterable
// - No size property
// - Automatic garbage collection when key is no longer referenced

let obj = { id: 1 };
const weakMap = new WeakMap();
weakMap.set(obj, "some data");
console.log(weakMap.get(obj));  // "some data"

obj = null;  // Object is now eligible for garbage collection
// weakMap entry is automatically removed!

// Use case: Private data for objects
const privateData = new WeakMap();
class User {
    constructor(name) {
        privateData.set(this, { name, password: "secret" });
    }
    getName() {
        return privateData.get(this).name;
    }
}

// WeakSet
// - Stores objects only
// - No duplicates
// - Weak references (garbage collected when object not referenced elsewhere)
const weakSet = new WeakSet();
let user1 = { name: "John" };
weakSet.add(user1);
console.log(weakSet.has(user1));  // true

user1 = null;  // Automatically removed from weakSet
```

---

### Q7. How do you merge two objects deeply?

```js
// Shallow merge (nested objects still shared)
const obj1 = { a: 1, b: { x: 10 } };
const obj2 = { c: 3, b: { y: 20 } };
const shallow = { ...obj1, ...obj2 };
console.log(shallow);  // { a: 1, b: { y: 20 } } — b overwritten, not merged

// Deep merge function
function deepMerge(target, source) {
    for (const key in source) {
        if (source[key] instanceof Object && key in target) {
            Object.assign(source[key], deepMerge(target[key], source[key]));
        }
    }
    return { ...target, ...source };
}

const merged = deepMerge(obj1, obj2);
console.log(merged);  // { a: 1, b: { x: 10, y: 20 } }

// Deep clone using JSON (circular references will break!)
const deepClone = JSON.parse(JSON.stringify(obj1));
console.log(deepClone);  // { a: 1, b: { x: 10 } }

// Using structuredClone (modern browsers)
const modernClone = structuredClone(obj1);
console.log(modernClone);  // { a: 1, b: { x: 10 } }
```

---

### Q8. How do you compare two objects for equality?

```js
// === compares references, not contents
const a = { x: 1 };
const b = { x: 1 };
console.log(a === b);  // false — different objects in memory

// Shallow equality
function shallowEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    for (const key of keys1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
}

console.log(shallowEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));  // true
console.log(shallowEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));  // false (nested object reference comparison)

// Deep equality
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
        return false;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    for (const key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
    }
    return true;
}

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));  // true

// JSON.stringify comparison (order matters!)
console.log(JSON.stringify({ a: 1, b: 2 }) === JSON.stringify({ b: 2, a: 1 }));  // false
```

---

### Q9. Explain Object.keys, Object.values, Object.entries with examples.

```js
const user = {
    name: "John",
    age: 30,
    city: "NYC"
};

// Object.keys — returns array of keys
console.log(Object.keys(user));      // ["name", "age", "city"]

// Object.values — returns array of values
console.log(Object.values(user));    // ["John", 30, "NYC"]

// Object.entries — returns array of [key, value] pairs
console.log(Object.entries(user));   // [["name", "John"], ["age", 30], ["city", "NYC"]]

// Practical: Convert array of objects to Map
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" }
];
const userMap = new Map(users.map(u => [u.id, u]));
console.log(userMap.get(1));  // { id: 1, name: "John" }

// Practical: Filter object by key
const filtered = Object.fromEntries(
    Object.entries(user).filter(([key, value]) => key !== "age")
);
console.log(filtered);  // { name: "John", city: "NYC" }

// Practical: Transform values
const upperCased = Object.fromEntries(
    Object.entries(user).map(([key, value]) => [key, String(value).toUpperCase()])
);
console.log(upperCased);  // { name: "JOHN", age: "30", city: "NYC" }
```

---

### Q10. What is Object.freeze, Object.seal, Object.preventExtensions?

```js
const user = { name: "John", age: 30 };

// Object.preventExtensions — cannot add new properties
const extensible = { ...user };
Object.preventExtensions(extensible);
extensible.city = "NYC";  // Silently fails (or TypeError in strict mode)
console.log(extensible.city);  // undefined
extensible.age = 31;  // ✅ Can modify existing
console.log(extensible.age);  // 31

// Object.seal — cannot add/delete, but can modify existing
const sealed = { ...user };
Object.seal(sealed);
sealed.city = "NYC";   // ❌ Cannot add
console.log(sealed.city);  // undefined
delete sealed.name;    // ❌ Cannot delete
console.log(sealed.name);  // "John" (still there)
sealed.age = 31;       // ✅ Can modify
console.log(sealed.age);  // 31

// Object.freeze — cannot add, delete, or modify (deep freeze requires recursion)
const frozen = { ...user };
Object.freeze(frozen);
frozen.age = 31;       // ❌ Cannot modify
console.log(frozen.age);  // 30
delete frozen.name;    // ❌ Cannot delete
console.log(frozen.name);  // "John"

// Deep freeze function
function deepFreeze(obj) {
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            deepFreeze(obj[key]);
        }
    });
    return Object.freeze(obj);
}

const nested = { a: { b: 1 } };
deepFreeze(nested);
nested.a.b = 2;  // ❌ Cannot modify nested
console.log(nested.a.b);  // 1
```

---

### Q11. What is the output of the following code?

```js
const a = {};
const b = { key: "b" }; 
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);  // What is the output?
```

**Answer:** `456`

**Explanation:** When an object is used as a key, it is converted to a string. Both `b` and `c` convert to the same string: `"[object Object]"`. So `a[c] = 456` overwrites `a[b] = 123`.

```js
// Step by step:
console.log(String(b));  // "[object Object]"
console.log(String(c));  // "[object Object]"

// So:
// a["[object Object]"] = 123;
// a["[object Object]"] = 456;

console.log(a);  // { "[object Object]": 456 }
```

---

### Q12. Explain the `this` keyword in object methods.

```js
const user = {
    name: "John",
    greet() {
        console.log(`Hello, ${this.name}!`);
    },
    greetArrow: () => {
        console.log(`Hello, ${this.name}!`);  // `this` refers to outer scope, not user
    }
};

user.greet();        // "Hello, John!"
user.greetArrow();   // "Hello, undefined!" (arrow function doesn't bind `this`)

const greetFn = user.greet;
greetFn();  // "Hello, undefined!" (this is lost when function is called standalone)

// Fix with bind
const boundGreet = user.greet.bind(user);
boundGreet();  // "Hello, John!"

// Or use arrow function inside method
const user2 = {
    name: "Jane",
    greet() {
        const arrow = () => console.log(`Hello, ${this.name}!`);
        arrow();  // Inherits `this` from greet()
    }
};
user2.greet();  // "Hello, Jane!"
```

---

### Q13. How do you create a private property in an object?

```js
// Method 1: Closures (true privacy)
function createUser(name, password) {
    return {
        getName() {
            return name;
        },
        checkPassword(pw) {
            return pw === password;
        }
    };
}

const user = createUser("John", "secret123");
console.log(user.getName());          // "John"
console.log(user.password);           // undefined (private!)
console.log(user.checkPassword("secret123"));  // true

// Method 2: Symbols (not truly private, but hard to access)
const _password = Symbol("password");
const user2 = {
    name: "Jane",
    [_password]: "hidden456",
    getPassword() {
        return this[_password];
    }
};
console.log(user2[_password]);  // "hidden456" (can access with symbol reference)

// Method 3: WeakMap (private data, garbage collected)
const privateData = new WeakMap();
class User {
    constructor(name, password) {
        privateData.set(this, { name, password });
    }
    getName() {
        return privateData.get(this).name;
    }
    checkPassword(pw) {
        return privateData.get(this).password === pw;
    }
}

const user3 = new User("Alice", "pass789");
console.log(user3.getName());  // "Alice"
console.log(user3.password);   // undefined
```

---

### Q14. How do you flatten a nested array?

```js
const nested = [1, [2, 3], [4, [5, 6]], 7];

// Method 1: flat() (ES2019)
console.log(nested.flat());        // [1, 2, 3, 4, [5, 6], 7]
console.log(nested.flat(2));       // [1, 2, 3, 4, 5, 6, 7]
console.log(nested.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7]

// Method 2: reduce + concat
const flat1 = nested.reduce((acc, val) => acc.concat(val), []);
console.log(flat1);  // [1, 2, 3, 4, [5, 6], 7]

// Method 3: recursive flatten
function flatten(arr) {
    return arr.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}
console.log(flatten(nested));  // [1, 2, 3, 4, 5, 6, 7]

// Method 4: toString (works for primitives only)
console.log(nested.toString().split(",").map(Number));  // [1, 2, 3, 4, 5, 6, 7]
```

---

### Q15. What are the different ways to create an object?

```js
// 1. Object Literal
const obj1 = { name: "John" };

// 2. new Object()
const obj2 = new Object();
obj2.name = "John";

// 3. Object.create()
const obj3 = Object.create(null);
obj3.name = "John";

// 4. Constructor Function
function Person(name) {
    this.name = name;
}
const obj4 = new Person("John");

// 5. Class (ES6)
class User {
    constructor(name) {
        this.name = name;
    }
}
const obj5 = new User("John");

// 6. Object.assign()
const obj6 = Object.assign({}, { name: "John" });

// 7. Factory Function
function createUser(name) {
    return { name };
}
const obj7 = createUser("John");

// 8. Object.fromEntries()
const obj8 = Object.fromEntries([["name", "John"]]);

console.log(obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8);
// All have: { name: "John" }
```

---

### Q16. How does destructuring work with nested objects?

```js
const data = {
    user: {
        name: "John",
        address: {
            city: "NYC",
            zip: "10001"
        }
    },
    status: "active"
};

// Basic destructuring
const { status } = data;
console.log(status);  // "active"

// Nested destructuring
const { user: { name } } = data;
console.log(name);  // "John"

// Deep nested destructuring
const { user: { address: { city, zip } } } = data;
console.log(city, zip);  // "NYC" "10001"

// Renaming
const { user: { name: userName } } = data;
console.log(userName);  // "John"

// Default values
const { user: { role = "user" } } = data;
console.log(role);  // "user" (default, since data.user.role doesn't exist)

// Combining with rest
const { user, ...rest } = data;
console.log(user);   // { name: "John", address: {...} }
console.log(rest);   // { status: "active" }
```

---

### Q17. What is the spread operator and what are its limitations?

```js
const obj1 = { a: 1, b: 2, c: { x: 10 } };

// Shallow copy
const copy = { ...obj1 };
copy.a = 99;
console.log(obj1.a);  // 1 (unaffected, top-level)

copy.c.x = 99;
console.log(obj1.c.x);  // 99 (affected! nested object shared)

// Merge objects
const obj2 = { d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged);  // { a: 1, b: 2, c: { x: 99 }, d: 4 }

// Override properties
const overridden = { ...obj1, a: 100 };
console.log(overridden);  // { a: 100, b: 2, c: { x: 99 } }

// Spread with condition
const condition = true;
const conditional = { ...obj1, ...(condition ? { e: 5 } : {}) };
console.log(conditional);  // { a: 1, b: 2, c: { x: 99 }, e: 5 }

// Array spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);  // [1, 2, 3, 4, 5, 6]
```

---

### Q18. How do you implement a LRU (Least Recently Used) Cache using Map?

```js
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) return -1;
        const value = this.cache.get(key);
        // Move to end (most recently used)
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            // Remove least recently used (first item)
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        this.cache.set(key, value);
    }
}

// Usage
const cache = new LRUCache(2);
cache.put(1, "A");
cache.put(2, "B");
console.log(cache.get(1));  // "A" (moved to end)
cache.put(3, "C");           // Removes 2 (LRU)
console.log(cache.get(2));  // -1 (not found)
```

---

### Q19. How do you group an array of objects by a property?

```js
const users = [
    { name: "John", role: "admin" },
    { name: "Jane", role: "user" },
    { name: "Bob", role: "admin" },
    { name: "Alice", role: "user" }
];

// Using reduce
const grouped = users.reduce((acc, user) => {
    const key = user.role;
    if (!acc[key]) acc[key] = [];
    acc[key].push(user);
    return acc;
}, {});

console.log(grouped);
// {
//   admin: [{ name: "John", role: "admin" }, { name: "Bob", role: "admin" }],
//   user: [{ name: "Jane", role: "user" }, { name: "Alice", role: "user" }]
// }

// Using Object.groupBy (ES2024 — modern browsers)
// const grouped2 = Object.groupBy(users, user => user.role);

// Using Map
const mapGrouped = new Map();
users.forEach(user => {
    if (!mapGrouped.has(user.role)) {
        mapGrouped.set(user.role, []);
    }
    mapGrouped.get(user.role).push(user);
});
console.log(mapGrouped.get("admin"));  // [{ name: "John", role: "admin" }, ...]
```

---

### Q20. What are the differences between `for...in`, `for...of`, and `forEach`?

```js
const arr = ["a", "b", "c"];
const obj = { a: 1, b: 2, c: 3 };

// for...in — iterates over ENUMERABLE KEYS (strings)
for (const key in obj) {
    console.log(key);  // "a", "b", "c"
}
for (const index in arr) {
    console.log(index);  // "0", "1", "2" (indices as strings!)
}

// for...of — iterates over ITERABLE VALUES
for (const value of arr) {
    console.log(value);  // "a", "b", "c"
}
// for (const value of obj) { }  // ❌ TypeError: obj is not iterable

// forEach — array method, provides value, index, array
arr.forEach((value, index) => {
    console.log(index, value);  // 0 "a", 1 "b", 2 "c"
});

// Key differences:
// for...in: for objects, includes inherited properties, keys are strings
// for...of: for iterables (arrays, strings, Maps, Sets), values directly
// forEach: array only, cannot break (continue/break don't work), returns undefined

// Break out of loop:
for (const value of arr) {
    if (value === "b") break;  // ✅ Works
    console.log(value);
}

arr.forEach(value => {
    if (value === "b") return;  // ❌ Only skips current iteration, doesn't break
    console.log(value);
});
```

---

## 4. Object Deep Dive

### Property Descriptors

```js
const obj = { name: "John" };

// Get descriptor
const desc = Object.getOwnPropertyDescriptor(obj, "name");
console.log(desc);
// { value: "John", writable: true, enumerable: true, configurable: true }

// Set descriptor
Object.defineProperty(obj, "name", {
    writable: false,
    enumerable: false,
    configurable: false
});

obj.name = "Jane";  // ❌ Fails silently (or TypeError in strict)
console.log(obj.name);  // "John" (unchanged)

// Define multiple properties
Object.defineProperties(obj, {
    age: {
        value: 30,
        writable: true,
        enumerable: true
    },
    city: {
        value: "NYC",
        writable: false,
        enumerable: true
    }
});
```

### Prototype Chain

```js
const parent = {
    greet() {
        return "Hello from parent!";
    }
};

const child = Object.create(parent);
child.name = "Child";

console.log(child.name);    // "Child" (own property)
console.log(child.greet());   // "Hello from parent!" (inherited)
console.log(child.hasOwnProperty("greet"));  // false
console.log("greet" in child);  // true (includes inherited)

// Check prototype
console.log(Object.getPrototypeOf(child) === parent);  // true
```

---

## 5. Array Deep Dive

### Array Methods Cheat Sheet

```js
const arr = [1, 2, 3, 4, 5];

// Mutating methods (change original array)
arr.push(6);        // Add to end
arr.pop();          // Remove from end
arr.unshift(0);     // Add to start
arr.shift();        // Remove from start
arr.splice(1, 2);   // Remove 2 elements from index 1
arr.reverse();      // Reverse in place
arr.sort();         // Sort in place

// Non-mutating methods (return new array/value)
const mapped = arr.map(x => x * 2);           // [2, 4, 6, 8, 10]
const filtered = arr.filter(x => x > 2);       // [3, 4, 5]
const reduced = arr.reduce((a, b) => a + b, 0); // 15
const found = arr.find(x => x > 2);           // 3
const index = arr.findIndex(x => x > 2);      // 2
const some = arr.some(x => x > 4);            // true
const every = arr.every(x => x > 0);          // true
const included = arr.includes(3);              // true
const joined = arr.join("-");                 // "1-2-3-4-5"
const sliced = arr.slice(1, 3);               // [2, 3]
const flattened = arr.flat();                  // [1, 2, 3, 4, 5]
const foundLast = arr.findLast(x => x > 2);   // 5 (ES2023)
```

### Array vs Object Performance

```js
// Array search: O(n)
const arr = Array(1000000).fill(0).map((_, i) => i);
console.time("array");
arr.includes(999999);  // Slow linear search
console.timeEnd("array");

// Object/Map search: O(1)
const obj = {};
for (let i = 0; i < 1000000; i++) obj[i] = true;
console.time("object");
obj[999999];  // Fast direct access
console.timeEnd("object");

// Set search: O(1)
const set = new Set(arr);
console.time("set");
set.has(999999);  // Fast lookup
console.timeEnd("set");
```

---

## 6. Set & Map Deep Dive

### Set Use Cases

```js
// Deduplication
const emails = ["a@x.com", "b@x.com", "a@x.com"];
const uniqueEmails = [...new Set(emails)];
console.log(uniqueEmails);  // ["a@x.com", "b@x.com"]

// Membership testing
const allowedRoles = new Set(["admin", "editor", "viewer"]);
function hasAccess(role) {
    return allowedRoles.has(role);
}
console.log(hasAccess("admin"));   // true
console.log(hasAccess("hacker"));  // false

// Remove duplicates from array of objects
const users = [{ id: 1 }, { id: 2 }, { id: 1 }];
const seen = new Set();
const uniqueUsers = users.filter(user => {
    if (seen.has(user.id)) return false;
    seen.add(user.id);
    return true;
});
```

### Map Use Cases

```js
// Counting frequencies
const words = ["apple", "banana", "apple", "cherry", "banana", "apple"];
const frequency = new Map();
words.forEach(word => {
    frequency.set(word, (frequency.get(word) || 0) + 1);
});
console.log(frequency);  // Map { 'apple' => 3, 'banana' => 2, 'cherry' => 1 }

// Memoization (caching function results)
function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

const fib = memoize(function(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
});
console.log(fib(40));  // Fast due to caching
```

---

## 7. Quick Reference

### When to Use Which?

| Data Structure | Use When |
|---------------|----------|
| **Object** | Simple key-value with string keys, JSON, config |
| **Array** | Ordered list, sequence, stack, queue, iteration |
| **Set** | Unique values, deduplication, membership testing |
| **Map** | Non-string keys, ordered pairs, frequent add/remove |
| **WeakMap** | Private data, cache that should auto-clean |
| **WeakSet** | Track objects without preventing garbage collection |

### Type Checking Summary

```js
// Check if value is...
const val = [];

Array.isArray(val);           // Array?
val instanceof Object;        // Object (but Array is too!)
typeof val === "object";      // Object/Array/Map/Set/Date/RegExp/null
typeof val === "function";    // Function?
typeof val === "string";      // String?
typeof val === "number";      // Number? (NaN is number too!)
typeof val === "undefined";   // Undefined?
val === null;                 // Null?
val instanceof Map;           // Map?
val instanceof Set;           // Set?
val instanceof Date;          // Date?
val instanceof RegExp;        // RegExp?

// Comprehensive type checker
function getType(val) {
    if (val === null) return "null";
    if (Array.isArray(val)) return "array";
    if (val instanceof Map) return "map";
    if (val instanceof Set) return "set";
    if (val instanceof Date) return "date";
    if (val instanceof RegExp) return "regexp";
    return typeof val;
}
```

---

## Key Takeaways

1. **Object** = key-value pairs with string/symbol keys. Unordered. Best for config, structured data.
2. **Array** = ordered list with numeric indices. Best for sequences, stacks, queues.
3. **Set** = unique values only. Best for deduplication, membership tests.
4. **Map** = key-value pairs with ANY key type. Best for non-string keys, ordered insertion.
5. **WeakMap/WeakSet** = weak references. Best for private data, caches with auto-cleanup.
6. **Spread `{ ...obj }`** creates shallow copies. Nested objects are still shared.
7. **Typed Arrays** (`Int8Array`, `Float32Array`, etc.) are for binary data processing.
8. **`Array.isArray()`** is the most reliable way to check if something is an array.
9. **`Object.keys/values/entries`** convert objects to arrays for easy manipulation.
10. **`for...in`** for objects, **`for...of`** for iterables, **`forEach`** for arrays.

---

**Happy coding! 🚀**

*Master objects, arrays, sets, and maps — and you'll master data manipulation in JavaScript.*
