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



