# Chapter 14 — Objects in JavaScript

## 📘 Overview

Objects are the foundation of JavaScript programming. Nearly everything in JavaScript is an object or behaves like one. This chapter covers object creation, manipulation, memory management, iteration, and real-world patterns essential for test automation and modern JavaScript development.

---

## 🗂️ Files in This Chapter

| File | Topic | Key Concepts |
|------|-------|-------------|
| `124_Objects.js` | Object Basics | Empty object, object literal, JSON vs JS, array comparison, memory allocation |
| `125_Objects2.js` | Keys & References | Key-value pairs, dot vs bracket notation, reference behavior, === comparison |
| `126_Objects_Creation.js` | Creation & Equality | Object creation methods, same values different objects, === on references |
| `127_Objects_REAL.js` | Dynamic Operations | Dynamic property assignment, delete operator, config objects, conditional checks |
| `128_Primitive_Ref.js` | Primitive vs Reference | Copy by value vs copy by reference, stack vs heap, memory diagrams |
| `129_Ob_Examples.js` | JSON vs JS Object | JSON.stringify, JSON.parse, format differences, conversion methods |
| `130_IQ.js` | Access & Descriptors | Property access, dynamic keys, descriptors (writable, enumerable, configurable) |
| `131_Object_Fn.js` | Methods in Objects | Object methods, `this` keyword, ES6 shorthand, method chaining |
| `132_Obj_Decon.js` | Destructuring | Basic, rename, default values, nested destructuring |
| `133_Spead.js` | Spread Operator | Shallow copy, object merging, let vs const with objects |
| `134_Objects_GET_SET_Methods.js` | Getters & Setters | Computed properties, validation, read-only properties |
| `135_IQ.txt` | Iteration Methods | Object.keys, Object.values, Object.entries, for...in loop |
| `136_Obj_REAL.js` | Real-World Patterns | ENV configs, expected responses, nested structures, dynamic values |
| `137_Let_const_obj.js` | let vs const | Property mutation vs reassignment, binding semantics, Object.freeze |

---

## 🧠 Core Concepts

### 1. What is an Object?

An object is a collection of **key-value pairs** (properties) stored in `{}`. Unlike arrays which use numeric indices, objects use **string keys** to organize data.

```js
let user = {
    name: "Pramod",
    age: 42,
    role: "SDET"
};
```

**Key Characteristics:**
- Keys are always strings (or Symbols) internally
- Values can be any type: string, number, boolean, array, object, function, null
- Objects are **unordered** collections (no guaranteed order)
- Objects are **mutable** — properties can be added, modified, or deleted
- Objects are **reference types** — variables store pointers, not the actual data

**Visual:**

```
┌─────────────────────────────────────────┐
│              Object: user                 │
│  ┌───────────┬─────────────────────┐   │
│  │   Key     │   Value             │   │
│  ├───────────┼─────────────────────┤   │
│  │  "name"   │  "Pramod"           │   │
│  │  "age"    │  42                 │   │
│  │  "role"   │  "SDET"             │   │
│  └───────────┴─────────────────────┘   │
└─────────────────────────────────────────┘
```

---

### 2. Object vs Array vs JSON

| Aspect | Object | Array | JSON |
|--------|--------|-------|------|
| Syntax | `{key: value}` | `[value1, value2]` | `{"key":"value"}` |
| Access | `obj.key` | `arr[0]` | Parse first |
| Order | Unordered | Ordered | Unordered |
| Key Quotes | Optional | Not applicable | Required |
| Functions | Allowed | Allowed | Not allowed |
| typeof | `"object"` | `"object"` | `"string"` (when parsed) |

---

### 3. Memory Allocation: How Objects Live in Memory

Objects are stored in **HEAP** memory. Variables hold **references** (pointers) to the actual data.

```
STACK (Variables)              HEAP (Object Data)
┌─────────┐                   ┌─────────────────────────┐
│  obj    │──────────────────→│  { name: "Pramod" }      │
│ (ref)   │                   │  Address: 0xA1           │
└─────────┘                   └─────────────────────────┘
```

**Primitive vs Reference:**

| Aspect | Primitive | Reference |
|--------|-----------|-----------|
| Storage | Stack (direct value) | Heap (via reference) |
| Copy | By value (full copy) | By reference (shared pointer) |
| Mutability | Immutable | Mutable |
| Comparison | Compares values | Compares memory addresses |
| Examples | string, number, boolean | Object, Array, Function |

**Visual Comparison:**

```
PRIMITIVE (let a = 10; let b = a; b = 99):
┌─────────┐    ┌─────────┐
│ a = 10  │    │ b = 99  │  ← Independent values
└─────────┘    └─────────┘

REFERENCE (let obj1 = {val:10}; let obj2 = obj1; obj2.val = 99):
┌─────────┐    ┌─────────────────────────┐
│ obj1    │───→│  { val: 99 }            │
│ (ref)   │    │  (same object!)         │
└─────────┘    └─────────────────────────┘
┌─────────┐
│ obj2    │───→│  (same reference)       │
│ (ref)   │    └─────────────────────────┘
└─────────┘
```

---

### 4. Property Access: Dot vs Bracket

```js
let user = { name: "John", "first-name": "Doe", 0: "zero" };

user.name;           // "John" — dot notation
user["name"];        // "John" — bracket notation
user["first-name"];  // "Doe" — bracket (dot would fail)
user[0];             // "zero" — bracket with numeric key

let key = "name";
user[key];           // "John" — dynamic key
```

| Feature | Dot (`obj.key`) | Bracket (`obj["key"]`) |
|---------|----------------|----------------------|
| Readability | High | Medium |
| Dynamic keys | ❌ No | ✅ Yes |
| Keys with spaces | ❌ No | ✅ Yes |
| Keys with special chars | ❌ No | ✅ Yes |
| Variable keys | ❌ No | ✅ Yes |

---

### 5. Object Mutation & Reference Behavior

```js
let a = { status: "pass" };
let b = a;              // b gets the SAME reference
b.status = "fail";      // modifies the shared object
console.log(a.status);  // "fail" — a also sees the change!

let c = { status: "pass" };
let d = { status: "pass" };
console.log(c === d);   // false — different objects!
```

**Key Rules:**
- `obj2 = obj1` does NOT create a copy — it creates another reference
- Changes through one reference are visible through ALL references
- `===` compares memory addresses, not contents
- Two objects with identical values are NOT equal

---

### 6. let vs const with Objects

```js
const config = { browser: "Chrome" };
config.browser = "Firefox";  // ✅ Allowed — mutation
config = { browser: "Safari" };  // ❌ TypeError — reassignment
```

| Operation | let obj | const obj |
|-----------|---------|-----------|
| `obj.prop = x` | ✅ | ✅ |
| `obj.newProp = x` | ✅ | ✅ |
| `delete obj.prop` | ✅ | ✅ |
| `obj = {}` | ✅ | ❌ TypeError |

**Best Practice:** Always use `const` for objects unless you genuinely need to reassign the variable.

---

### 7. Object Methods & Iteration

```js
let user = { name: "John", age: 30 };

Object.keys(user);      // ["name", "age"]
Object.values(user);    // ["John", 30]
Object.entries(user);   // [["name", "John"], ["age", 30]]

for (const key in user) {
    console.log(key, user[key]);  // name John, age 30
}
```

| Method | Returns | Use Case |
|--------|---------|----------|
| `Object.keys(obj)` | Array of keys | Iterate, check existence |
| `Object.values(obj)` | Array of values | Sum, filter, map |
| `Object.entries(obj)` | Array of [k,v] | Convert to Map, destructuring |
| `Object.fromEntries(arr)` | Object | Reverse of entries |

---

### 8. Destructuring

```js
const user = { name: "John", age: 30, city: "NYC" };

// Basic
const { name, age } = user;

// Rename
const { name: userName, age: userAge } = user;

// Default
const { country = "USA" } = user;

// Nested
const data = { user: { address: { city: "NYC" } } };
const { user: { address: { city } } } = data;
```

---

### 9. Getters & Setters

```js
const user = {
    firstName: "Pramod",
    lastName: "Dutta",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
};

user.fullName;           // "Pramod Dutta" — getter (no parens!)
user.fullName = "Amit Sharma";  // setter — splits and stores
```

---

### 10. Spread Operator

```js
const obj1 = { a: 1, b: 2 };
const copy = { ...obj1 };           // Shallow copy
const merged = { ...obj1, c: 3 };   // Copy + new properties
const override = { ...obj1, a: 99 }; // Copy + override

// Merge two objects
const obj2 = { c: 3, d: 4 };
const combined = { ...obj1, ...obj2 };  // { a:1, b:2, c:3, d:4 }
```

⚠️ **Warning:** Spread creates a SHALLOW copy. Nested objects are still shared:
```js
const user = { name: "John", address: { city: "NYC" } };
const copy = { ...user };
copy.address.city = "LA";
console.log(user.address.city);  // "LA" — nested object still shared!
```

---

### 11. JSON Conversion

```js
const user = { name: "Pramod", age: 42 };

// Object → JSON String
const json = JSON.stringify(user);  // '{"name":"Pramod","age":42}'

// JSON String → Object
const obj = JSON.parse('{"name":"Pramod","age":42}');
```

| Feature | JSON | JS Object |
|---------|------|-----------|
| Key quotes | Required (double) | Optional |
| Functions | Not allowed | Allowed |
| Comments | Not allowed | Allowed |
| undefined | Not allowed | Allowed |
| Trailing commas | Not allowed | Allowed |

---

### 12. Property Descriptors

Every property has hidden attributes:

```js
let obj = { name: "Login" };
Object.getOwnPropertyDescriptor(obj, "name");
// { value: "Login", writable: true, enumerable: true, configurable: true }
```

| Attribute | Meaning | When false... |
|-----------|---------|---------------|
| `value` | The actual value | — |
| `writable` | Can change value? | Assignment silently fails |
| `enumerable` | Shows in loops? | Hidden from Object.keys |
| `configurable` | Can delete/redefine? | Locked permanently |

---

### 13. Real-World Patterns

**Environment Config:**
```js
const ENV = {
    BASE_URL: "https://staging.myapp.com",
    TIMEOUT: 5000,
    RETRIES: 2,
    BROWSER: "Chrome"
};
```

**Expected API Response:**
```js
const EXPECTED_RESPONSE = {
    status: 200,
    body: {
        user: { role: "admin", active: true }
    }
};
```

**Test Config:**
```js
const config = {
    baseUrl: 'http://localhost:3000',
    testUser: {
        username: 'testuser@example.com',
        password: 'SecurePass123',
    },
    retryCount: parseInt(process.env.RETRY_COUNT || '3', 10),
};
```

---

## 🚀 Quick Reference

```js
// Create
let obj = { a: 1 };              // Literal
let obj2 = new Object();          // Constructor
let obj3 = Object.create(null);   // No prototype

// Access
obj.a;           // Dot
obj["a"];        // Bracket
obj[key];        // Dynamic

// Modify
obj.a = 2;       // Modify
obj.b = 3;       // Add
delete obj.a;    // Delete

// Check
"a" in obj;                      // Own + inherited
obj.hasOwnProperty("a");         // Own only
Object.keys(obj).includes("a");  // Own only

// Copy
let copy = { ...obj };                        // Shallow
let deep = JSON.parse(JSON.stringify(obj));   // Deep

// Iterate
for (let key in obj) { }           // All enumerable
Object.keys(obj).forEach(k => { });
Object.entries(obj).forEach(([k, v]) => { });

// Merge
let merged = { ...obj1, ...obj2 };

// Freeze
Object.freeze(obj);  // Prevent ALL mutation
```

---

## 📝 Key Takeaways

1. **Objects are key-value pairs** — keys are strings, values can be any type.
2. **Objects are reference types** — variables hold pointers, not data.
3. **`obj2 = obj1` does NOT copy** — both point to the same object.
4. **`===` compares references** — same content ≠ same object.
5. **const objects** — can mutate properties, cannot reassign variable.
6. **Spread `{ ...obj }`** creates shallow copies (nested objects still shared).
7. **Use dot notation** for static keys; **bracket notation** for dynamic/space keys.
8. **Destructuring** extracts properties concisely with rename/default/nested support.
9. **Getters/Setters** create computed properties that behave like data.
10. **JSON.stringify/parse** convert between objects and strings for APIs/storage.
11. **Object.keys/values/entries** return arrays for easy iteration.
12. **Objects are the backbone** of config, test data, API responses, and DOM manipulation.

---

## 🎯 When to Use Which Pattern

| Pattern | Use When |
|---------|----------|
| Object literal `{}` | Simple, one-off objects |
| Dynamic assignment | Properties determined at runtime |
| Spread copy | Shallow clone, merge objects |
| JSON stringify/parse | API communication, deep clone, storage |
| Destructuring | Extracting multiple properties |
| Getters/Setters | Computed properties, validation |
| Object.freeze | True immutability needed |
| const | All objects (prevents accidental reassignment) |

---

**Happy coding! 🚀**

*Objects are the building blocks of JavaScript. Master them, and you'll master the language.*
