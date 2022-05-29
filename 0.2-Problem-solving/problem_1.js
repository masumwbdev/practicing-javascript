// 1. print a number 1 to 6 randomly
function myRandom(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(myRandom(1 , 6));

// 2. sort names alphabetically
const fruits = ["Mango", "Apple", "Pineapple", "Orange", "Lichy"];
console.log(fruits.sort());

// 3. sort numbers smallest to largest
const num = [34, 23, 64, 23, 56, 89, 8, 0, 76];
num.sort(function(a, b){
    return a - b;
});
console.log(num);

// 4. leap year
// 400 er gunitok hote hobe or 4 er gunitok hote hobe. 100 er gunitok hote parbe na.
function isLeapYear(year){
    if((year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0)){
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }
}
isLeapYear(2024);

// 5. vowel
const vowels = ["a", "e", "i", "o", "u"];
function myVowels(inp){
    let vowelCount = 0;
    const myLetters = Array.from(inp.toLowerCase());
    myLetters.forEach(function(value){
        if(vowels.includes(value)){
            vowelCount++;
            console.log(value);
        }
    });
    return vowelCount;
}
console.log(myVowels("I love coding"));