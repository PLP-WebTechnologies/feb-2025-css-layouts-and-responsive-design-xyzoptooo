let myName = "Danny";
let isActive  = true;

console.log(myName && isActive); // This will not work as expected

console.log(myName || isActive); // This will not work as expected

if(age > 19) {
    console.log("You are an adult.");
    alert("You are an adult.");

}else if(age > 12) {
    console.log("You are a teenager.");
    alert("You are a teenager.");
}
else {
    console.log("You are a child.");
    alert("You are a child.");
}
;


function FunctionNameGreet(name) {
    return "hello this is from the function " + name;
}
console.log(FunctionNameGreet("Danny"));