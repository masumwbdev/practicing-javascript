const myLaptop = ["Acer", "Asus", "HP", "Dell", "Apple"];
console.log(myLaptop);
console.log(myLaptop.toString());

// join method
console.log(myLaptop.join(" > "));

// pop
console.log(myLaptop.pop());
console.log(myLaptop);

// push
console.log(myLaptop.push("Walton"));
console.log(myLaptop);

// shift
myLaptop.shift();
console.log(myLaptop);

// unshift
myLaptop.unshift("Telsa");
console.log(myLaptop);

// changing element
myLaptop[0] = "Macbook";
console.log(myLaptop);

// concat - merging array
const myArr1 = ["One", "Two", "Three"];
const myArr2 = ["Four", "Five", "Six"];
const myArr3 = ["Seven", "Eight", "Nine", "Ten"];
const mainArr = myArr1.concat(myArr2, myArr3);
console.log(mainArr);

// splice
const myMov = ["Samsung", "Realme", "Oppo"];
// myMov.splice(1, 0, "Xiaomi");
myMov.splice(1, 1, "Xiaomi");
console.log(myMov);

// slice
const myMovRes = myMov.slice(1, 2);
// console.log(myMovRes);
console.log(myMovRes);