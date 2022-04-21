const myCar = ["Toyota", "Suzuki", "Honda"];
console.log(myCar);
console.log(typeof myCar); // array is an object

const myCars2 = new Array("Lambo", "TVS", "BMW");
console.log(myCars2);
console.log(typeof myCars2); 

myCars2[1] = "LTS";
console.log(myCars2);
// length
console.log(myCars2.length);

// looping array elements
const myArrLoop = ["jara", "sara", "klara", "flara", "blara"];
const nameLen = myArrLoop.length; // best for performance

for(i = 0; i <= nameLen; i++){
    console.log(myArrLoop[i]);
}

// forEach
const myArrEach = ["tara", "para", "hlara", "rlara", "vlara"];

const myArrLoopEach = value => {
    console.log(value);
}

myArrEach.forEach(myArrLoopEach);

// adding array element
// push
myArrEach.push("yoyo");
console.log(myArrEach);

// unshift
myArrEach.unshift("lolipop");
console.log(myArrEach);

// remove array element
// remove last element
myArrEach.pop();
console.log(myArrEach);

// remove first element
myArrEach.shift();
console.log(myArrEach);
