function myFunc(a, b) { // a and b are parameters
    return a + b;
}
myFunc(2, 3); // 2 and 3 are arguments

function m(n, o){
    return n - o;
}
console.log(m(22, 11, 2, 5));

function myFun(d, e=1){
    return d * e;
}
console.log(myFun(3))