let num = 77;
if (num >= 115) {
    console.log("Hello");
}

let x = 6;
if (x == 7 || x <= 111 && x == 6) {
    console.log("Masum");
}

// ternary operator
console.log(x == 7 || x <= 111 && x == 6 ? "Masum" : "Nothing");
console.log(x == 7 || x <= 111 && x == 61 ? "Masum" : "Nothing");

let myInput = 13;
if(isNaN(myInput)){
    console.log("Input is not a number");
} else {
    console.log(myInput < 12 ? "You are child" : "You are young");
}