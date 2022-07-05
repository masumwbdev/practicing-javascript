
// ----- function definitions -----

function myFunc(a, b) {
    return console.log(a + b);
}
myFunc(3, 2);

// function hoisting
funcHoisting(11, 33);
function funcHoisting(x, y) {
    return console.log(x + y);
}

// self invoking function
(function (){
    console.log('hi');
})()

function myFun(a){
    return a + a
}
const res = myFun(4);
console.log(res);