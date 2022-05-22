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