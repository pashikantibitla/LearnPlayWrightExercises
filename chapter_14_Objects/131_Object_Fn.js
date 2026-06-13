const user = {
    name: "Pramod",
    age: 43
}

const calculator = {
    value: 0,
    add(n) {
        this.value += n;
        console.log(`Added ${n}. New value: ${this.value}`);
    },
    subtract(n) {
        this.value -= n;
        console.log(`Subtracted ${n}. New value: ${this.value}`);
    }
}


calculator.add(10);
calculator.subtract(3);


/*
================================================================================
                    DETAILED EXPLANATION: METHODS IN OBJECTS
================================================================================

1. WHAT ARE METHODS?
---------------------
  A METHOD is a FUNCTION that is a property of an object. Methods can access
  and modify the object's other properties using the `this` keyword.

  Syntax:
    const obj = {
        property: value,
        methodName(parameters) {
            // function body
            this.property;  // access object property
        }
    };

  From file:
    const calculator = {
        value: 0,
        add(n) { this.value += n; },
        subtract(n) { this.value -= n; }
    };

  Key Points:
    - Methods are functions stored as object properties.
    - `this` refers to the object the method is called on.
    - Methods can read, modify, and add properties to the object.
    - Methods are called using dot notation: obj.methodName().


2. THE `this` KEYWORD
----------------------
  `this` is a special keyword that refers to the CURRENT OBJECT context.
  In object methods, `this` points to the object containing the method.

  From file:
    add(n) {
        this.value += n;
        // `this` refers to the calculator object
        // `this.value` is calculator.value
    }

  How `this` works:

    calculator.add(10)
         ↑
         ┌─────────┐
         │ calculator│
         │  .add(10) │
         └────┬────┘
              │
              ▼
         Inside add():
         this.value += 10;
         ↑
         this === calculator
         this.value === calculator.value === 0
         After: calculator.value === 10

  Visual:

  calculator object:
  ┌─────────────────────────────────────────┐
  │  value: 0                               │
  │  add(n) { this.value += n }            │
  │  subtract(n) { this.value -= n }         │
  └─────────────────────────────────────────┘
       ↑
  calculator.add(10) is called:
       ↓
  this.value += 10  →  calculator.value += 10
       ↓
  calculator.value is now 10

  `this` is DYNAMIC:
    - `this` depends on HOW the function is called, not WHERE it is defined.
    - calculator.add() → this = calculator
    - let fn = calculator.add; fn() → this = undefined (or global in non-strict)

  Comparison:

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Call Style          │ this Value               │ Example                  │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ obj.method()        │ obj                      │ calculator.add(10)       │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ method() alone      │ undefined (strict)      │ let fn = obj.method; fn()│
  │                     │ or global (non-strict)    │                          │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ new Constructor()   │ new empty object         │ new Person()            │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ call/apply/bind     │ Specified object          │ fn.call(obj, arg)       │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Arrow function      │ Inherits from outer scope│ () => { this.x }        │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘


3. METHOD SHORTHAND SYNTAX
---------------------------
  ES6 introduced a shorthand for writing methods in objects:

  Old way (ES5):
    const obj = {
        add: function(n) { this.value += n; }
    };

  New way (ES6+):
    const obj = {
        add(n) { this.value += n; }
    };

  Both are equivalent. The shorthand is cleaner and more modern.

  From file:
    add(n) { this.value += n; }        // ES6 shorthand
    subtract(n) { this.value -= n; }  // ES6 shorthand

  Comparison:

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Syntax              │ Example                  │ Notes                    │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ ES5 (function)      │ method: function() {}  │ Verbose, explicit       │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ ES6 shorthand       │ method() {}              │ Cleaner, modern         │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Arrow function      │ method: () => {}         │ ❌ Bad for methods!     │
  │                     │                          │ `this` doesn't bind to   │
  │                     │                          │ object                   │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘

  WARNING: Never use arrow functions for object methods!
    const bad = {
        value: 10,
        add: () => { this.value++; }  // ❌ this is NOT the object!
    };
    bad.add();  // this.value is undefined or global!


4. COMPLETE INDEXING / MAPPING
-------------------------------

  Object: calculator

  ┌─────────────┬─────────────────────────┬─────────────────────────┐
  │ Key         │ Value                   │ Type                    │
  ├─────────────┼─────────────────────────┼─────────────────────────┤
  │ "value"     │ 0 → 10 → 7              │ number (property)       │
  │ "add"       │ function(n) { ... }     │ function (method)       │
  │ "subtract"  │ function(n) { ... }     │ function (method)       │
  └─────────────┴─────────────────────────┴─────────────────────────┘

  Method Call Flow:

  calculator.add(10):
  ┌─────────────────────────────────────────┐
  │  calculator.value = 0                  │
  │  calculator.add(10)                    │
  │      ↓                                  │
  │  this.value += 10  →  value = 10         │
  │  console.log: "Added 10. New value: 10" │
  └─────────────────────────────────────────┘

  calculator.subtract(3):
  ┌─────────────────────────────────────────┐
  │  calculator.value = 10                 │
  │  calculator.subtract(3)                │
  │      ↓                                  │
  │  this.value -= 3  →  value = 7          │
  │  console.log: "Subtracted 3. New value: 7"│
  └─────────────────────────────────────────┘


5. PRACTICAL EXAMPLES
----------------------

  Example 1: Test result tracker
    const testTracker = {
        passed: 0,
        failed: 0,
        pass() { this.passed++; },
        fail() { this.failed++; },
        getSummary() {
            return `Passed: ${this.passed}, Failed: ${this.failed}`;
        }
    };
    testTracker.pass();
    testTracker.pass();
    testTracker.fail();
    console.log(testTracker.getSummary());  // "Passed: 2, Failed: 1"

  Example 2: Simple counter
    const counter = {
        count: 0,
        increment() { this.count++; return this.count; },
        decrement() { this.count--; return this.count; },
        reset() { this.count = 0; }
    };
    counter.increment();  // 1
    counter.increment();  // 2
    counter.reset();      // 0

  Example 3: Bank account
    const account = {
        balance: 100,
        deposit(amount) {
            this.balance += amount;
            console.log(`Deposited ${amount}. Balance: ${this.balance}`);
        },
        withdraw(amount) {
            if (amount > this.balance) {
                console.log("Insufficient funds");
                return;
            }
            this.balance -= amount;
            console.log(`Withdrawn ${amount}. Balance: ${this.balance}`);
        }
    };
    account.deposit(50);   // Balance: 150
    account.withdraw(30);  // Balance: 120

  Example 4: Config builder
    const configBuilder = {
        config: {},
        set(key, value) {
            this.config[key] = value;
            return this;  // for chaining
        },
        build() {
            return this.config;
        }
    };
    let cfg = configBuilder
        .set("browser", "chrome")
        .set("timeout", 5000)
        .build();
    console.log(cfg);  // { browser: "chrome", timeout: 5000 }

  Example 5: Method borrowing (call/apply)
    const obj1 = { value: 10 };
    const obj2 = { value: 20 };
    const methods = {
        add(n) { this.value += n; }
    };
    methods.add.call(obj1, 5);   // obj1.value = 15
    methods.add.call(obj2, 5);   // obj2.value = 25


================================================================================
                    KEY TAKEAWAY
================================================================================

  1. A method is a function stored as an object property.
  2. `this` inside a method refers to the object the method is called on.
  3. Use ES6 shorthand syntax: methodName() { } instead of methodName: function() { }.
  4. NEVER use arrow functions for methods — `this` won't bind correctly.
  5. Methods can read, modify, and add properties to the object.
  6. `this` is dynamic — it depends on how the function is called.
  7. Method chaining: return `this` to allow obj.method1().method2().method3().
  8. Methods are the foundation of OOP in JavaScript.

================================================================================
*/
