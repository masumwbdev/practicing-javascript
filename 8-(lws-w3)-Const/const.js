// can't be reassigned
const a = 78;
a = 34;
b = a + 45;

// must be assigned a value
const myNam = "Masum"; // right

// const myName; // wrong
// myNam = "Masum";

// can change the element of a constant array
const fruits = ["Apple", "Orange"];
fruits[1] = "Lichi";
fruits.push("Malta");

// can't reassign the array
const friendsName = ["Sakib", "Sabbir"];
friendsName = ["Kamal", "Salah"];

// can change the properties of a constant object
const studentHis = {name: 'Sakib', age: 25, color: 'white'};
studentHis.color = 'black';

studentHis.height = 5.7; // can add a property

// can't reassign the object
const studentHis = {name: 'Sakib', age: 25, color: 'white'};
const studentHis = {name: 'Kafah', age: 24, color: 'black'};

const x = 7;
{
    const x = 8;
}

// redeclaring an existing var or let variable to const in the same scope is not allowed
var m = 87;
const m = 89; // not allowed

// {
//     let m = 7;
//     const m = 76; // not allowed
// }
// {
//     const m = 78;
//     const m = 34; // not allowed
// }

// redeclaring a variable with const in another scope or block is allowed

const mk = 534;
{
    const mk = 95;
}
{
    const mk = 897;
}

// const hoisting
// myName = "Mausm"; // not allwoed
// const myName;

// MyF = "Alk"; // allowed
// var MyF;

// alert("Hi, this is masum", surName);
// const surName; // not allowed
