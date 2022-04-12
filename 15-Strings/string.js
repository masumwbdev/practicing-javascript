let myFirstNm = "Masum"; // string
console.log(myFirstNm);

myFirstNm = 'Masum'; 
console.log(myFirstNm);

const myNm = "My name is \"Masum\" Hossain";
console.log(myNm);
const secondSt = "My name is \\Masum\\ Hossain";
console.log(secondSt);
const thirdSt = "My name is \'Masum\' Hossain";
console.log(thirdSt);

const stFive = "It's very importent";
console.log(stFive, stFive.length);

const helloOne = "Hello JS";
const helloTwo = new String("Hello JS");
console.log(helloOne, helloTwo);
console.log(typeof helloOne, typeof helloTwo);
console.log(helloOne == helloTwo); // true
console.log(helloOne === helloTwo); // false