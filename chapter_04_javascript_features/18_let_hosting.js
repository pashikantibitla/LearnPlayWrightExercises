//console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 100;

{
    //console.log(score); // ReferenceError: Cannot access 'b' before initialization
    //score =12; // ReferenceError: Cannot access 'b' before initialization
    //typeof score;  // ReferenceError: Cannot access 'b' before initialization
    //==TDZ ===
    let score = 100;
    console.log("the sore value is: " , score);
}