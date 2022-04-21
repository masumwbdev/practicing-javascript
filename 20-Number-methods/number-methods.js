// toString
const num1 = 878;
const num2 = 100;
console.log(num1);
const resNum1 = num1.toString();
console.log(resNum1);
const addNum = (num1 + num2).toString();
console.log(addNum);

// toFixed
console.log((0.2 + 0.1).toFixed(3));

// toPrecision
const myNum = 4.8983;
console.log(myNum.toPrecision(3));

// Number
const myDate = new Date();
console.log(myDate.toLocaleDateString());
console.log(Number(myDate));

// parseInt
const myN2 = 78.344;
console.log(parseInt(myN2));

// parseFloat
console.log(parseFloat(myN2));
console.log(parseFloat(myN2.toFixed(1)));
