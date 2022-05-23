## Javascript Note:

- Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
- `const` and `let` : These two keywords provide Block Scope in JavaScript.
- `?` is a ternary operator
- The JavaScript syntax defines two types of values:
  1. Fixed values
  2. Variable values
- Check performance `performance.now()`
- By default, the `sort()` function sorts values as strings
#### `Sort` number Example:
``` javascript
const sortNum = [32, 64, 23, 2, 6, 1, 54, 0];
sortNum.sort(function(x, y){
    return x - y;
})
console.log(sortNum);
```
#### `Sort` highest and lowest number
``` javascript
console.log(sortNum[sortNum.length - 1])
```
``` javascript
console.log(sortNum[0]);
```
#### `Math.max` and `Math.min` for sort highest and lowest number
``` javascript
console.log(Math.max.apply(null, sortNum));
```
``` javascript
console.log(Math.min.apply(null, sortNum));
```
- The `every()` method check if all array values pass a test.
- The `some()` method check if some array values pass a test.
- The `find()` method returns the value of the first array element
- যে ধরণের অবজেক্ট গুলোকে `iterate` করা যায়, একটা একটা করে যাওয়া যায় সেগুলো কে `iterable object` বলে।
- The `filter()` method creates a new array with array elements.
- The `keys()` method returns an Array Iterator object with the keys of an array.
- There are 4 common methods to round a number to an integer
 1. `Math.round(m)` - Returns m rounded to its nearest integer
 2. `Math.cell(m)` - Returns m rounded up to its nearest integer
 3. `Math.floor(m)` - Returns m rounded down to its nearest integer
 4. `Math.trunc(m)` - Returns the integer part of m.
 #### number to integer example:
 1. round
 ``` javascript
Math.round(5.6) // returns 6
Math.round(5.4) // returns 5
Math.round(5.5) // returns 6
```
 2. ceil
 ``` javascript
Math.ceil(5.6) // returns 6
Math.ceil(5.1) // returns 6
```
3. floor
 ``` javascript
Math.floor(5.6) // returns 5
Math.floor(5.1) // returns 5
```
- `Math.pow(x, y)` returns the value of x to the power of y.
``` javascript
Math.pow(2, 5) // returns 32
```
- `Math.random()` used with `Math.floor()` can be used to return random integers.
``` javascript
// returns a random integer from 0 to 10
Math.floor(Math.random() * 11)
```
``` javascript
// returns a random integer from 1 to 10
Math.floor(Math.random() * 10) + 1
```
- Comparison and logical operators are used to test for true or false
- "2" > "12" returns true. When comparing two strings, "2" will be greater than "12", because alphabetically 1 is less than 2.
- use `for of` in an array also for `iterate`
- use `for in` into an object
- A javascript Set is a collection of unique values.
- A Map holds `key-value` pairs where the keys can be any datatype.
- A Map remembers the original insertion order of the keys.
#### In javascript there are 5 different data types that can contain values: 
1. string
2. number
3. boolean
4. object
5. function

#### 2 Data types that connot contain values:
1. null
2. undefined

#### There are 6 types of objects:
1. Object
2. Data
3. Array
4. String
5. Number
6. Boolean

``` javascript
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"

// The data type of NaN is number
// The data type of an array is object
// The data type of a date is object
// The data type of null is object
// The data type of an undefined variable is undefined *
// The data type of a variable that has not been assigned a value is also undefined *
```
#### Primitive Data
- A primitive data value is a single simple data value with no additional properties and methods.
#### The typeof operator can return one of these primitive types:
1. string
2. number
3. boolean
4. undefined
#### The typeof operator can return one of two complex types:
1. function
2. object
- The typeof operator returns "object" for objects, arrays, and null.
- Javascript function is an object.
- The typeof operator is not a variable. It is an operator. Operators ( + - * / ) do not have any data type.
- the typeof operator always returns a string
- In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
- In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
- Unfortunately, in JavaScript, the data type of null is an object.

#### Difference Between Undefined and Null
Undefined mane value nei but memory te reference ace. null hocche seta exist kore na. 2 tar type alada. null er type object and Undefined er type hocce Undefined.

#### undefined and null are equal in value but different in type:
``` javascript
typeof undefined           // undefined
typeof null                // object
null === undefined         // false
null == undefined          // true
```
- `parseFloat()` Parses a string and returns a floating point number
- `parseInt()` Parses a string and returns an integer

#### Automatic Type Conversion:
``` javascript
5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2
```
#### Converting decimal to binary:
``` javascript
const n = 5;
console.log(n.toString(2)); // returns 101. binary 0101
const x = 1; 
console.log(x.toString(2)); // returns 1. binary 0001
// or
function dec2bin(dec){
  return (dec >>> 0).toString(2);
}
```
#### Converting binary to decimal:
``` javascript 
console.log(0b0101.toString(10)); // add extra 0b
// or
function bin2dec(bin){
  return parseInt(bin, 2).toString(10);
}
```
#### Regular expression syntax:
``` javascript
/*
/pattern/modifiers;
/bangladesh/i;
/bangladesh/i  is a regular expression.
bangladesh is a pattern (to be used in a search).
i  is a modifier (modifies the search to be case-insensitive).
*/
```
- In JavaScript, regular expressions are often used with the two string methods: `search()` and `replace()`.
#### Regular expression example:
``` javascript
const myNote = "I love my Country";
console.log(myNote.search(/country/i));
```
#### Replace with regular expression:
``` javascript
const myNote2 = "I love my CITY. My city name is Mym";
console.log(myNote2.replace(/city/ig, "District"));
```
#### Regular Expression Modifiers:
| Modifier | Description |
| ----- | ----- |
| i | Perform case-insensitive matching |
| g | Perform a global match (find all matches rather than stopping after the first match) |
| m | Perform multiline matching |

#### Regular Expression Patterns:
| Expression | Description |
| ----- | ----- |
| [abc] | Find any of the characters between the brackets |
| [0-9] | Find any of the digits between the brackets |
| (x|y) | Find any of the alternatives separated with |

- javascript will actually create an error object with two properties: `name` and `message`. 
- catch(err){} `err` is an object.
- The `throw` statement allows to create a custom error.
- scope determines the accessibility (visibility) of variables.
#### javascript has 3 types of scope:
1. Block scope
2. Function scope
3. Global scope
- variables declared inside a {} block cannot be accessed from outside the block
- `let` and `const` keywords provide block scope in javascript.
- `var` is function and global scope both.
- In javascript, `objects` and `functions` are also variables.
- Hoisting is javascript's default behavior of moving deciarations to the top.
#### Hoisting example:
``` javascript
// Hoisting:
y = "Masum"; // assignment
console.log(y);
var y; // declare

// Hoisting with let (ReferenceError):
y = 9;
console.log(y);
let y;

/* মেশিন ডিক্লেয়ার করা var টা উপরে ধরে নেয় পড়ার সময়। মেমোরিতে ভ্যারিয়েবল y এর জন্য একটা জায়গা রেখে দেয় এবং
ভ্যারিয়েবল y এর ভ্যালু টা undefined করা থাকে। 
let এর ক্ষেত্রে let টা উপরে নিয়ে যায় কিন্তু সেখানে ভ্যারিয়েবল y এর জন্য মেমরি তে কোনো জায়গা রাখে না।
ভ্যারিয়েবল y এর ভ্যালু undefined ও থাকে না। ভ্যারিয়েবল y টা কে রেফারেন্স করতে পারে না যার কারণে ReferenceError
দেয়।  */
```
- let, const  এবং var সবগুলোই hoisted হয়।  কিন্তু ডিক্লেয়ার করা let, const ভ্যারিয়েবল যখন উপরে যায় তখন let, const এর ক্ষেত্রে ভ্যালু টা মেমোরিতে undefined assigned হয় না যার কারণে ReferenceError দেয়। যে সময় টুকু এই ঘটনাটা ঘটে, মেমরি তে কোনো জায়গা এসাইন করতে পারে না এই সময় টা কে `temporary dead zone` বলা হয়।
- Variables difined with let and const are hoisted to the top of the block, but not initialized.
- Using a let variable before it is declared will result in a `ReferenceError`.