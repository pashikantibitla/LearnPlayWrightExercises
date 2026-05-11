function print_before_execution(a, b)
{
    console.log("the values of variables before chaneg a, b: ", a, b)
}

let a= 10, b=12;
let result = 0;
let c = 0;
print_before_execution(a, b)

function printing_after_execution(a, b, c)
{
    console.log("the values of variables after execution a, b, result: ", a , b, c);
}

function add(a, b) 
{
    c = a+b;
    b = a;
    a= c; 
    return c;
}

add( a, b);
printing_after_execution(a, b, c);

let i=0;
console.log("HOT Code Execution");
print_before_execution(i, result);

for (let i = 0; i < 10000; i++) 
{
    result = add(i, i + 1);
    console.log("step wise iteration result: ", i, result);
}
printing_after_execution(i, result);

console.log("After 10000 calls:", result);
