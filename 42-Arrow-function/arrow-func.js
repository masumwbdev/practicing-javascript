// normal function
function myFunc(m, n) {
    return m + n;
};
console.log("normal function ", myFunc(4, 8));

// arrow function
const myFunc2 = (a, b) => {
    return a + b;
};
console.log("arrow function ", myFunc2(4, 8));

// simple arrow function
myFunc3 = (x, y) => x + y;
console.log("simple arrow function ", myFunc3(4, 8));