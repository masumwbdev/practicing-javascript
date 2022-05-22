// FOR LOOP
for (i = 1; i <= 10; i++) {
    // console.log(i);
}

const mobile = ["Xiaomi", "iPhone", "Vivo", "Realme", "Oppo", "Samsung"];
for (let i = 0; i < mobile.length; i++) {
    // console.log(i);
};

// FOR IN (use in object)
const person = { name: "josim", surname: "mia", age: 32 }
for (let b in person) {
    // console.log(b);
    // console.log(person[b]);
    // console.log(person);
};

// don't use for in loop with array
const myNum = [23, 25, 56, 1, 23, 64];
for (let num in myNum) {
    // console.log(myNum[num])
};

// FOR OF (use into array)
const n = "Masum";
for (let a of n) {
    console.log(a);
};

// WHILE LOOP
let c = 0;
while (c <= 10) {
    console.log(c);
    c++;
};