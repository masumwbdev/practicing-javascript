// can't be redeclared
let m = "Masum"; // wrong
let m = "Sakib"; // wrong

// using its possible redeclare
var y = "Yell";
var y = "Hello";

// block scope
{
    let a = 8;
}

// var redeclaring variables
var b = 67;
{
    var b = 99;
    console.log(b)
}
var b = 87;
console.log(b);

// redeclaring is not allowed for let variable
let c = 66;
{
    let c = 23;
}
let c = 23;

// redeclaring var are allowed
var t = 23;
var t = 90;
console.log(t);

// sometime redeclaring not allowed in let variable
var x = 54;
let x = 32; // not allowed

{
    var x = 76;
    let x = 324; // not allowed
}

var x = 7;
let x = 6; // not allowed

// in another block redeclaring is allowed
let mn = 787;
{
    let mn = 900;
}
{
    let mn = 878;
}

// hoisting
// hoisting using var - allowed
myName = "Masum";
var myName;
console.log(myName);

// hosting using let - not allowed
myAge = 76;
let myAge;
console.log(myAge);