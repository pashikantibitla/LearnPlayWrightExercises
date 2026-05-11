let a = 34;
console.log("the integer value of a is ", a);
var x=6, y=3;
let i =0;
for( i=0; i<=a; i++)
{
    printing_int_values(x, y, a);
    x = ++i;
    y = ++a;
    console.log("the value of x, y, a after function are: ", x, y, a);
}


function printing_int_values(x, y, a)
{
    console.log(" the value of variables x, y, a are: ", x, y, a);
}

printing_int_values(x, y , a);