// // with forEach
// const numbers = [64, 23, 63, 21, 56, 93, 12];
// function myFunction(value, index, array) {
//     console.log(value);
//     console.log(index);
//     console.log(array);
//     console.log('------ break -------');
// }
// numbers.forEach(myFunction);

// // with map
// const numbers = [64, 23, 63, 21, 56, 93, 12];
// function myFunction(value) {
//     return value * 2;
// }
// const newNum = numbers.map(myFunction);
// console.log(newNum);

// // with filter
// const numbers = [64, 23, 63, 21, 56, 93, 12];
// function myFunction(value) {
//     return value > 50;
// }
// const newNum = numbers.filter(myFunction);
// console.log(newNum);

// // with reduce
// const numbers = [64, 23, 63, 21, 56, 93, 12];
// function myFunction(total, value, index, array) {
//     console.log(total);
//     return total + value;
// }
// const newNum = numbers.reduce(myFunction , 20);
// console.log(newNum);

// // with every
// const numbers = [64, 23, 63, 21, 56, 93, 12];
// function myFunction(value) {
//     return value > 13;
// }
// const newNum = numbers.every(myFunction);
// console.log(newNum);

// // with some
// const numbers = [64, 23, 63, 21, 56, 93, 12];
// function myFunction(value) {
//     return value > 55;
// }
// const newNum = numbers.some(myFunction);
// console.log(newNum);

// indexOf
const cars = ["Toyota", "Fort", "BMW"];
console.log(cars.indexOf("BMW"));


// with find
const numbers = [64, 23, 63, 21, 56, 93, 12];
function myFunction(value) {
    return value > 70;
}
const newNum = numbers.find(myFunction);
console.log(newNum);