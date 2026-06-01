/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: var function scoping, variable shadowing, and global vs local scope
 *
 * Functions/Methods Used:
 *   - print_hello(a: string): void
 *     Description: Accepts a string parameter and prints it to the console.
 *     Input: Takes a string value provided as a direct value, variable, or expression.
 *     Return Type: void — returns undefined; only logs to console.
 *   - print_character_a(a: string): void
 *     Description: Iterates over the characters of the input string and prints each index and character.
 *     Input: Takes a string value provided as a direct value, variable, or expression.
 *     Return Type: void — returns undefined; only logs to console.
 *   - print_string(): void
 *     Description: Demonstrates local variable shadowing by redeclaring 'a' inside a function.
 *     Input: Takes no parameters.
 *     Return Type: void — returns undefined; only logs to console.
 *   - print_a_variable_value(): void
 *     Description: Shows var function-scoping behavior, including block leakage inside if statements.
 *     Input: Takes no parameters.
 *     Return Type: void — returns undefined; only logs to console.
 *   - console.log(message: any): void
 *     Description: Outputs messages and values to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void — returns nothing; only outputs to console.
 *
 * Built-in Methods/Keywords:
 *   - var
 *     Description: Declares a function-scoped variable that can be redeclared and reassigned.
 *     Input: Takes a variable name and an optional initial value provided as a direct value, variable, or expression.
 *     Return Type: void — does not return a value; creates a variable binding in the current function or global scope.
 *   - for loop
 *     Description: Creates a loop with var i, which is function-scoped rather than block-scoped.
 *     Input: Accepts three optional expressions (initialization, condition, increment) separated by semicolons.
 *     Return Type: void — does not return a value; controls iteration flow.
 *   - if statement
 *     Description: Conditional block that does not create a new scope for var declarations.
 *     Input: Accepts a boolean condition provided as a direct value, variable, or expression.
 *     Return Type: void — does not return a value; controls execution flow based on the condition.
 *   - .length (string property)
 *     Description: Returns the number of characters in a string.
 *     Input: Accessed on a string or array object directly; does not accept separate input parameters.
 *     Return Type: number — returns the count of characters or elements.
 *   - [] (bracket notation)
 *     Description: Accesses a character at a specific index in a string or an element/key in an array/object.
 *     Input: Takes an index or key provided as a direct value, variable, or expression inside the brackets.
 *     Return Type: any — returns the value at the specified index or key.
 *
 * Key Concepts:
 *   - Global scope: Variables declared outside functions are accessible globally.
 *   - Local/function scope: Variables declared with var inside a function are local to that function.
 *   - Shadowing: A local var declaration can hide (shadow) a global variable of the same name.
 *   - var block leakage: var ignores block boundaries (if, for) and leaks to the enclosing function or global scope.
 * ============================================================
 */

var a = "tyu@er.com"; //global scope
function print_hello(a)
{
    console.log("the printing a value: ", a);
}
function print_character_a(a)
{
    for(var i=0; i<a.length; i++)
    {
        console.log("the character position in a variable: ", i);
        if(i<a.length)
        {
        console.log("the charaters in a varible is: ", a[i]);
        }
    }
}


print_hello(a); // global scope
print_character_a(a); //global scope
console.log(a.length)

function print_string()
{
    var a = "hello mounika, how are u";  //redeclaration - local scope
    console.log("the number of lenght in  a variable:", a.length );
    console.log("the string value of a variable: ", a);

}

print_string();  //local scope
//=============================================//

//var is functional scope
var b = 10; // Global Scope
console.log("the variabke value outside the function is : ", b);
// Defination of the function
function print_a_variable_value() {
    console.log("Hello TheTestingAcademy!");
    var b = 20; // Local Scope
    console.log("the function 1st loop b value: ", b);
    if (true) {
        var b = 30;
        console.log("the value of b in if block: ", b); // 30
    }
    console.log("F ->", b);
}
console.log("G ->", b);

print_a_variable_value();
/* 
the variabke value outside the function is :  10
G -> 10
Hello TheTestingAcademy!
the function 1st loop b value:  20
the value of b in if block:  30
F -> 30
*/



