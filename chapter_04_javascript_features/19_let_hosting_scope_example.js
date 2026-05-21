
// console.log("befoer declaration scope valu eis : ", scope) // ReferenceError: Cannot access 'scope' before initialization
// let scope =12;
// console.log("before block scope scope value is: ", scope)
// {
//     scope = "undefined";
//     console.log("in block scope is: ", scope);
// }

if(true)
{
    //console.log("befoer declaration in block x value is ", x); //TD zone starts here  -->ReferenceError: Cannot access 'x' before initialization
    let x = "scope"; //TD Z zone stops here
    console.log("after decalration x value is ", x); // scope

}

/*
note: in case of "let" we cannot variable before decation, if we do , we will get "referenceError"
*/

/*
The Temporal Dead Zone is the period between the entering of a scope and the actual declaration of a variable.
Block Scope: Variables declared with let and const are scoped to the nearest pair of curly braces {}.
The TDZ: When a block is entered, let and const variables are "hoisted" but not initialized. 
Any attempt to access them before the line where they are defined results in a ReferenceError.
Why the others are false:
A: TDZ applies whenever let or const are used, regardless of whether the scope is global, functional, or block-level.
C: TDZ specifically happens inside blocks when using block-scoped variables.D: var does not have a TDZ. 
It is hoisted and initialized with undefined, allowing it to be accessed before its declaration without throwing an error.
*/