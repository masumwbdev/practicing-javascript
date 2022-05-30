// 1. 1-100 porjonto kon sonkhagulu 3 , 5 and 3 o 5 diye vivajjo ta ber korte hobe
function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (num < 1 || num > 100) {
            return console.log("Invalid input. Please enter input 1 to 100");
        } else if (i % 15 === 0) {
            console.log(`${i} is FizzBuzz`)
        } else if (i % 3 === 0) {
            console.log(`${i} is Fizz`)
        } else if (i % 5 === 0) {
            console.log(`${i} is Buzz`)
        } else {
            console.log(i)
        }
    }
}
fizzBuzz(0);

// 2. array theke falsy value khuje ber korte hobe
// falsy value = false, undefined, null, '', NaN, 0
const myArr = [
    "masum",
    false,
    "learn with a",
    undefined,
    1,
    NaN,
    true,
    "",
    0,
    "banana",
    88,
    "k",
    "welcome"
];
const trueArr = myArr.filter(function (el) {
    if (!el) {
        return true;
    } else {
        return false;
    }
});
console.log(trueArr);

// 3. array theke truthy value khuje ber korte hobe
const myArr2 = [
    "masum",
    false,
    "learn with a",
    undefined,
    1,
    NaN,
    true,
    "",
    0,
    "banana",
    88,
    "k",
    "welcome"
];
console.log(myArr.filter(Boolean));

// 4. object theke falsy value gulu ber kore fele dite hobe
const obj = {
    a: "masum",
    b: false,
    c: "learn with a",
    d: undefined,
    e: 1,
    f: NaN,
    g: true,
    h: "",
    i: 0,
    j: "banana",
    k: 88,
    l: "k",
    m: "welcome"
};
const truthyObj = function(obj){
    for(let i in obj){
        if(!obj[i]){
            delete obj[i];
        }
    }
    return obj;
}
console.log(truthyObj(obj));