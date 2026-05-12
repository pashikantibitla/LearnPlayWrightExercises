const BASE_URL = "https://app.thetestingacademy.com";
// const BASE_URL = "https://app.thetestingacademy.com";  // TypeError: Assignment to constant variable. --> redeclaration not possible
//BASE_URL = "https:/ / staging.thetestingacademy.com";  // TypeError: Assignment to constant variable. --> reassignment is not possible



let name = "pending";
name = "done"; // re-assignement is possible
{
    let name = "Dutta"; // in loal scope re-decalaration is possible for 'let'
}
// block is not possible to call again and again
function say() {
    let name = "Dutta";
} //function is called again
say();
say();
