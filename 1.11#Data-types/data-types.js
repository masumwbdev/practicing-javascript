// number data type
const numOne = 45;
const numTwo = 56;
const numRes = numOne + numTwo;
console.log(typeof(numOne), typeof(numTwo), typeof(numRes));

// string data type
const stOne = "hello world";
console.log(typeof(stOne));

// object data type
const myObj = {myName: 'Masum', myAge: 23, myRel: 'Islam'};
console.log(typeof(myObj));

// booleans data type
const compOne = 54;
const compTwo = 78;
const compThree = 98;
const compFour = 78;
const compResOne = compOne == compTwo;
const compResTwo = compTwo == compFour;
console.log(compResOne, typeof(compResOne));
console.log(compResTwo, typeof(compResTwo));

// undefined data type
let myUndf;
console.log(myUndf, typeof(myUndf));

// array data type (object)
const myArr = ['masum', 'hafiz', 'karim', 'sakib'];
console.log('array type ' + typeof( myArr));

// -------------------------------

// string
const numSt = 42 + " Hello world";
console.log(numSt , typeof(numSt));

// string
const numStTwo = "53" + "Masum";
console.log(numStTwo, typeof(numStTwo));

// string
const numStThree = "Masum" + 46;
console.log(numStThree, typeof(numStThree));

// string
let numStFour = 64 + 6 + "Hello Masum";
console.log(numStFour, typeof(numStFour));

// string
const numStFive = "Hello World" + 90 + 10;
console.log(numStFive, typeof(numStFive));

// dynamic types 
let chOne;
chOne = 78;
chOne = "Jack Milton";
console.log(chOne, typeof(chOne))