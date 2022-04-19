let myTxt = "Hello my name is masum";
console.log(myTxt.indexOf("is"));
console.log(myTxt.lastIndexOf("is"));
console.log(myTxt.search("my"));
console.log(myTxt.includes("nae")); // false
console.log(myTxt.includes("name")); // true
console.log(myTxt.includes("name", 8));
console.log(myTxt.startsWith("Hello")); // true
console.log(myTxt.startsWith("my")); // false
console.log(myTxt.endsWith("masum")); // returns true