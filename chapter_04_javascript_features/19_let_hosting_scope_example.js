
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

*/