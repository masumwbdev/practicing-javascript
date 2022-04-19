const m = 0.2 + 0.1;
console.log(m);

const n = (0.2 * 10 + 0.1 * 10) / 10;
console.log(n);

const firstNum = 34;
const lastNum = 23;
const allNum = firstNum + lastNum;
console.log(allNum);

const stOne = "88";
const stTwo = "12";
console.log(stOne + stTwo);

const stThree = 34;
console.log(stThree + stOne);
console.log(stOne + stThree);

const a = 89;
const b = 23;
const c = "34";
const r = "Result is " + a + b;
console.log(r);
console.log(a + b + c);

const aa = "100";
const bb = "10";
console.log(aa / bb);
console.log(aa * bb);
console.log(aa - bb);
console.log(aa + bb); // it's not working

// NAN - not a number
const myFruits = 344 * "Fruits";
console.log(myFruits); // nan
console.log(344 * "2"); // but it's number

console.log(typeof myFruits);
console.log(typeof NaN);

const myNumOne = 344;
const myNumTwo = new Number(344);
console.log(myNumOne == myNumTwo); // returns true
console.log(myNumOne === myNumTwo); // returns false
console.log(typeof myNumOne, typeof myNumTwo);