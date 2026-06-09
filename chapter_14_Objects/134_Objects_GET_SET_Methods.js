const user = {
    firstName: "Pramod",
    lastName: "Dutta",
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}

// Objects - JS {}
// Class and Object
// this. it means current value in the Object.

console.log(user.fullName);
user.fullName = "Amit Sharma";
console.log(user.fullName);


/*
================================================================================
                    DETAILED EXPLANATION: GETTERS & SETTERS
================================================================================

1. WHAT ARE GETTERS AND SETTERS?
---------------------------------
  GETTERS and SETTERS are special methods that let you define how to ACCESS
  and MODIFY a property. They look like regular properties but behave like
  methods behind the scenes.

  - GETTER: Called when you READ the property. Returns a computed value.
  - SETTER: Called when you WRITE to the property. Performs validation/transform.

  Syntax:
    const obj = {
        get propertyName() {
            // return computed value
        },
        set propertyName(value) {
            // process and store value
        }
    };

  From file:
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }

  Key Points:
    - Getters are accessed like properties: obj.fullName (no parentheses).
    - Setters are assigned like properties: obj.fullName = "Amit Sharma".
    - They can validate, transform, or compute values on the fly.
    - They create "computed properties" that behave like data.


2. HOW GETTERS WORK
--------------------
  When you read a property with a getter, the getter function runs and returns
  a value. It does NOT store the value directly.

  From file:
    console.log(user.fullName);  // "Pramod Dutta"

  What happens internally:

  user.fullName is accessed
       ↓
  get fullName() runs:
       return this.firstName + " " + this.lastName;
       // "Pramod" + " " + "Dutta"
       // → "Pramod Dutta"
       ↓
  Returns "Pramod Dutta"

  Visual:

  user:
  ┌─────────────────────────────────────────┐
  │  firstName: "Pramod"                    │
  │  lastName: "Dutta"                      │
  │                                         │
  │  get fullName() {                       │
  │    return this.firstName + " " +          │
  │           this.lastName;                   │
  │  }  ← Computes on the fly                 │
  └─────────────────────────────────────────┘
       ↓
  user.fullName  →  "Pramod Dutta"

  Comparison:

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Approach            │ Storage                  │ Access                   │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Regular property    │ Stored directly          │ obj.prop                 │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Getter              │ Computed from other props│ obj.prop (no parens)     │
  │                     │ Not stored               │ Runs function each time  │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘


3. HOW SETTERS WORK
--------------------
  When you assign a value to a property with a setter, the setter function
  runs and can process the value before storing it.

  From file:
    user.fullName = "Amit Sharma";
    console.log(user.fullName);  // "Amit Sharma"

  What happens internally:

  user.fullName = "Amit Sharma" is executed
       ↓
  set fullName(value) runs with value = "Amit Sharma"
       [this.firstName, this.lastName] = value.split(" ");
       // "Amit Sharma".split(" ") → ["Amit", "Sharma"]
       // this.firstName = "Amit"
       // this.lastName = "Sharma"
       ↓
  user.firstName is now "Amit"
  user.lastName is now "Sharma"

  Visual:

  Before:
  ┌─────────────────────────────────────────┐
  │  firstName: "Pramod"                    │
  │  lastName: "Dutta"                      │
  └─────────────────────────────────────────┘
       ↓
  user.fullName = "Amit Sharma"
       ↓
  set fullName("Amit Sharma"):
       [firstName, lastName] = ["Amit", "Sharma"]
       ↓
  After:
  ┌─────────────────────────────────────────┐
  │  firstName: "Amit"  ← Changed!          │
  │  lastName: "Sharma"  ← Changed!         │
  └─────────────────────────────────────────┘

  Now user.fullName returns "Amit Sharma"


4. THE `this` KEYWORD IN GETTERS/SETTERS
-----------------------------------------
  `this` refers to the object containing the getter/setter.

  From file:
    get fullName() {
        return this.firstName + " " + this.lastName;
    }

  Here:
    - this.firstName → user.firstName
    - this.lastName  → user.lastName

  `this` is automatically bound to the object, so you don't need to pass it.

  Comparison:

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Context             │ this refers to           │ Example                  │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Object method       │ The object itself         │ this.firstName → user.firstName│
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Getter              │ The object itself         │ this.firstName           │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Setter              │ The object itself         │ this.firstName = x       │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Arrow function      │ Outer scope (not object)  │ Avoid in getters/setters │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘


5. COMPLETE INDEXING / MAPPING TABLE
-------------------------------------

  Object: user

  ┌─────────────────────┬─────────────────────┬─────────────────────────────┐
  │ Key                 │ Type                │ Value / Behavior              │
  ├─────────────────────┼─────────────────────┼─────────────────────────────┤
  │ "firstName"         │ Data Property       │ "Pramod" → "Amit"             │
  │ "lastName"          │ Data Property       │ "Dutta" → "Sharma"            │
  │ "fullName"          │ Accessor Property   │ get: returns first + last     │
  │                     │                     │ set: splits string, stores    │
  └─────────────────────┴─────────────────────┴─────────────────────────────┘

  Property Descriptor for fullName:

  ┌─────────────────────┬──────────────────────────┐
  │ Attribute           │ Value                    │
  ├─────────────────────┼──────────────────────────┤
  │ get                 │ function() { ... }       │
  │ set                 │ function(value) { ... }    │
  │ enumerable          │ true                     │
  │ configurable        │ true                     │
  └─────────────────────┴──────────────────────────┘

  Note: Accessor properties don't have `value` or `writable` attributes.
  They have `get` and `set` instead.

  Memory Map:

  user:
  ┌─────────────────────────────────────────┐
  │  firstName: "Pramod" → "Amit"           │
  │  lastName: "Dutta" → "Sharma"           │
  │                                         │
  │  fullName (getter) ──┐                  │
  │    ↓ returns        │                  │
  │    first + last      │                  │
  │                      │                  │
  │  fullName (setter) ←─┘                  │
  │    ↓ splits                          │
  │    string into                        │
  │    first and last                      │
  └─────────────────────────────────────────┘


6. PRACTICAL EXAMPLES
----------------------

  Example 1: Computed full name
    const user = {
        firstName: "Pramod",
        lastName: "Dutta",
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    };
    console.log(user.fullName);  // "Pramod Dutta"

  Example 2: Validation with setter
    const user = {
        _age: 0,
        get age() { return this._age; },
        set age(value) {
            if (value < 0) {
                console.log("Age cannot be negative");
                return;
            }
            this._age = value;
        }
    };
    user.age = 30;   // ✅ Sets to 30
    user.age = -5;   // ❌ "Age cannot be negative"

  Example 3: Formatting with getter
    const product = {
        price: 99.99,
        get formattedPrice() {
            return `$${this.price.toFixed(2)}`;
        }
    };
    console.log(product.formattedPrice);  // "$99.99"

  Example 4: Read-only property (getter only)
    const circle = {
        radius: 5,
        get area() {
            return Math.PI * this.radius * this.radius;
        }
    };
    console.log(circle.area);  // 78.54...
    circle.area = 100;  // Silently ignored (no setter)

  Example 5: Password hashing with setter
    const user = {
        _password: "",
        set password(value) {
            this._password = value.split("").reverse().join("");  // Simple hash
        },
        get password() {
            return "[PROTECTED]";  // Never expose raw password
        }
    };
    user.password = "secret123";
    console.log(user.password);  // "[PROTECTED]"
    console.log(user._password);  // "321terces" (stored reversed)


================================================================================
                    KEY TAKEAWAY
================================================================================

  1. GETTER: `get prop() { return ... }` — computes value when read.
  2. SETTER: `set prop(value) { ... }` — processes value when written.
  3. Access getters/setters like properties: obj.prop (no parentheses).
  4. Use `this` to access other properties in the same object.
  5. Getters are great for computed properties (fullName, formattedPrice, area).
  6. Setters are great for validation and transformation (password hashing, age check).
  7. You can have a getter without a setter (read-only) or setter without getter (write-only).
  8. The backing property (e.g., _password) is conventionally prefixed with underscore.
  9. Getters and setters make objects behave like native data types with built-in logic.

================================================================================
*/
