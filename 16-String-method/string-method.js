// slice
const firstSl = "Masum , Hossain , John , Jozsef";
console.log(firstSl.slice(1, 10));

const secondSl = "Masum , Hossain , John , Jozsef";
console.log("second" + secondSl.slice(-8, -2));

console.log("third " + secondSl.slice(1));
console.log("four " + secondSl.slice(-3));

// substring
console.log("substring " + secondSl.substring(3, 5));

// substr 
console.log("substr " + secondSl.substr(3,5));
console.log("substr " + secondSl.substr(-8));

// replace
let x = "I love My mother";
console.log(x.replace("mother", "father"));
console.log(x)
console.log(x.replace("Mother".toLowerCase(), "Grandma"));

// concat
const concOne = "first";
const concTwo = "second";
console.log(concOne.concat(" " + concTwo))

// trim
let trm = "          Hi World            "
console.log(trm);
console.log(trm.trim());

// charAt
console.log(x.charAt(4));
console.log(x[3]);