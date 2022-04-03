let x, y, z;
x = 3;
y = 9;
z = x + y;
document.getElementById('demo').innerHTML = "The value of z is " + z + ".";

// semicolone
let m, n, o;
m = 99;
n = 11;
o = m + n;
document.getElementById('demoSe').innerHTML = o;

// one line are allowed if you use semicolone
let a, b, c;
a = 12; b = 43; c = b + a;
console.log(a, b, c);

// don't care about whitespace
const nameOne = "Masum";
const nameTwo      =      "     Masum";
console.log(nameTwo);

// good practice to put space around operators
const mn = 12 - 34;
const nm = 34 * 54;
const ab = 90 + 9;
const ba = 54 / 23;

// line break
document.getElementById('demoName').innerHTML
    = "Hi my name is masum"

// code blocks
function codeBlocks(){
    document.getElementById('demoThree').innerHTML = "This is me."
    document.getElementById('demoFour').innerHTML = "And my name is Mr Masum"
}
codeBlocks()