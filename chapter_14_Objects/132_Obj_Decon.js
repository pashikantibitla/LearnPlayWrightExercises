const user = { name1: "John", age: 30, city: "NYC" };

// Basic destructuring
const { name1, age } = user;
console.log(name1);
console.log(age);

// Rename variables
const { name1: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);

// destructuring
const { age: userAge2 } = user;

// Default values
const { country = "USA" } = user;
console.log(country);
console.log(user);

const data = {
    user:
    {
        name: "John",
        address:
        {
            city: "NYC"
        }
    }
};

const { user: { address: { city } } } = data;
console.log(data.user.address.city);


/*
================================================================================
                    DETAILED EXPLANATION: OBJECT DESTRUCTURING
================================================================================

1. WHAT IS DESTRUCTURING?
--------------------------
  Destructuring is a syntax feature that allows you to EXTRACT properties from
  an object and assign them to variables in a single, concise statement.

  Without destructuring (verbose):
    let name1 = user.name1;
    let age = user.age;
    let city = user.city;

  With destructuring (clean):
    const { name1, age, city } = user;

  From file:
    const { name1, age } = user;
    // name1 = "John", age = 30

  Key Benefits:
    - Less code, more readable.
    - Easy to extract multiple properties.
    - Supports renaming, defaults, and nesting.


2. BASIC DESTRUCTURING
-----------------------
  Syntax:
    const { key1, key2, key3 } = object;

  This creates variables key1, key2, key3 with values from the object.

  Example:
    const user = { name1: "John", age: 30, city: "NYC" };
    const { name1, age } = user;
    console.log(name1);  // "John"
    console.log(age);    // 30

  Visual:

  Before:
  ┌─────────────────────────────────────────┐
  │  user: { name1: "John", age: 30,        │
  │          city: "NYC" }                   │
  └─────────────────────────────────────────┘

  After destructuring:
  ┌─────────┐  ┌─────────┐
  │ name1   │  │ age     │
  │ = "John"│  │ = 30    │
  └─────────┘  └─────────┘

  Comparison:

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Approach            │ Code                     │ Lines                    │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Without destructuring│ let n = user.name1;     │ 3 lines                  │
  │                     │ let a = user.age;        │                          │
  │                     │ let c = user.city;       │                          │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ With destructuring  │ const { name1, age,     │ 1 line                   │
  │                     │ city } = user;           │                          │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘


3. RENAMING VARIABLES
---------------------
  You can rename the extracted variable to something else:

  Syntax:
    const { originalKey: newName } = object;

  From file:
    const { name1: userName, age: userAge } = user;
    console.log(userName);  // "John"
    console.log(userAge);   // 30

  Why rename?
    - Avoid naming conflicts.
    - Use more descriptive names.
    - Match variable naming conventions.

  Visual:

  user:
  ┌─────────────────────────────────────────┐
  │  name1: "John"                          │
  │  age: 30                                │
  └─────────────────────────────────────────┘
       ↓
  const { name1: userName, age: userAge } = user;
       ↓
  ┌─────────────┐  ┌─────────────┐
  │ userName    │  │ userAge     │
  │ = "John"    │  │ = 30        │
  └─────────────┘  └─────────────┘

  Comparison:

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Syntax              │ Extracted Variable         │ Original Key             │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ { name1 }           │ name1                     │ name1                    │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ { name1: userName } │ userName                  │ name1                    │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ { age: userAge }    │ userAge                   │ age                      │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘


4. DEFAULT VALUES
----------------
  You can provide default values for properties that don't exist:

  Syntax:
    const { key = defaultValue } = object;

  From file:
    const { country = "USA" } = user;
    console.log(country);  // "USA"
    // user doesn't have "country", so default is used

  Visual:

  user:
  ┌─────────────────────────────────────────┐
  │  name1: "John"                          │
  │  age: 30                                │
  │  city: "NYC"                            │
  │  ↑ country doesn't exist!                │
  └─────────────────────────────────────────┘
       ↓
  const { country = "USA" } = user;
       ↓
  ┌─────────────┐
  │ country     │
  │ = "USA"     │  ← Default value used
  └─────────────┘

  Comparison:

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Code                │ If property exists       │ If property missing      │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ const { x } = obj   │ x = obj.x                 │ x = undefined           │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ const { x = 5 } = obj│ x = obj.x                │ x = 5 (default)          │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘

  Example with both rename and default:
    const { name1: userName = "Anonymous" } = user;
    // If name1 exists → userName = user.name1
    // If name1 missing → userName = "Anonymous"


5. NESTED DESTRUCTURING
------------------------
  You can destructure nested objects by following the object structure.

  From file:
    const data = {
        user: {
            name: "John",
            address: {
                city: "NYC"
            }
        }
    };

    const { user: { address: { city } } } = data;
    console.log(city);  // "NYC"

  How it works:

  data:
  ┌─────────────────────────────────────────┐
  │  user: {                                │
  │    name: "John",                        │
  │    address: {                           │
  │      city: "NYC"                        │
  │    }                                     │
  │  }                                       │
  └─────────────────────────────────────────┘
       ↓
  const { user: { address: { city } } } = data;
       ↓
  ┌─────────┐
  │ city    │
  │ = "NYC" │
  └─────────┘

  Visual Path:
    data → user → address → city

  Each level follows the structure of the object.

  You can also rename at nested levels:
    const { user: { name: userName } } = data;
    // userName = "John"

  Comparison:

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Level               │ Without Destructuring    │ With Destructuring       │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ 1 level             │ let city = user.city     │ const { city } = user    │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ 2 levels            │ let city = data.user.    │ const { user: { city } } │
  │                     │ address.city             │ = data                   │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ 3 levels            │ let city = data.user.    │ const { user: { address:│
  │                     │ address.city             │ { city } } } = data      │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘


6. COMPLETE INDEXING / MAPPING TABLE
-------------------------------------

  Object: user

  ┌─────────────┬─────────────┬─────────────────────────────┐
  │ Key         │ Value       │ Destructured Variable       │
  ├─────────────┼─────────────┼─────────────────────────────┤
  │ "name1"     │ "John"      │ name1 (basic)               │
  │             │             │ userName (renamed)          │
  │ "age"       │ 30          │ age (basic)                 │
  │             │             │ userAge (renamed)           │
  │             │             │ userAge2 (renamed)          │
  │ "city"      │ "NYC"       │ Not destructured in file    │
  │ "country"   │ N/A         │ country = "USA" (default)   │
  └─────────────┴─────────────┴─────────────────────────────┘

  Object: data

  ┌─────────────┬─────────────────────────────────────────┐
  │ Path        │ Value                                   │
  ├─────────────┼─────────────────────────────────────────┤
  │ data.user.name                    │ "John"            │
  │ data.user.address.city            │ "NYC"             │
  │ data.user.address                 │ { city: "NYC" }   │
  │ data.user                         │ { name, address } │
  └─────────────┴─────────────────────────────────────────┘

  Nested Destructure Map:

  data
  └── user
      ├── name: "John"
      └── address
          └── city: "NYC"
              ↑
              destructured to: city


7. PRACTICAL EXAMPLES
----------------------

  Example 1: Function parameters
    function greet({ name1, age }) {
        console.log(`Hello ${name1}, you are ${age}`);
    }
    greet(user);  // "Hello John, you are 30"

  Example 2: API response handling
    const response = {
        data: {
            user: {
                id: 123,
                profile: {
                    name: "Pramod",
                    email: "p@example.com"
                }
            }
        }
    };
    const { data: { user: { profile: { name, email } } } } = response;
    console.log(name, email);  // "Pramod" "p@example.com"

  Example 3: Config extraction with defaults
    const config = { timeout: 5000 };
    const { timeout = 3000, retries = 3, browser = "chrome" } = config;
    console.log(timeout);   // 5000 (from config)
    console.log(retries);   // 3 (default)
    console.log(browser);   // "chrome" (default)

  Example 4: Renaming to avoid conflicts
    const user = { name: "John", status: "active" };
    const { name: userName, status: userStatus } = user;
    // Avoids conflicts with global `name` or `status` variables

  Example 5: Destructuring with rest
    const user = { name: "John", age: 30, city: "NYC", country: "USA" };
    const { name, age, ...rest } = user;
    console.log(name);  // "John"
    console.log(age);   // 30
    console.log(rest);  // { city: "NYC", country: "USA" }


================================================================================
                    KEY TAKEAWAY
================================================================================

  1. Destructuring extracts object properties into variables concisely.
  2. Syntax: const { key1, key2 } = object;
  3. Rename: const { key: newName } = object;
  4. Default: const { key = defaultValue } = object;
  5. Combine: const { key: newName = defaultValue } = object;
  6. Nested: const { outer: { inner: { value } } } = object;
  7. Use in function parameters for clean API: fn({ a, b }) { }
  8. Rest pattern: const { a, b, ...rest } = obj captures remaining props.
  9. Destructuring makes code shorter, clearer, and more maintainable.

================================================================================
*/
