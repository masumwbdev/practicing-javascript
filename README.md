## Javascript Note:

- Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
- `const` and `let` : These two keywords provide Block Scope in JavaScript.
- `?` is a ternary operator
- The JavaScript syntax defines two types of values:
  1. Fixed values
  2. Variable values
- Check performance `performance.now()`
- By default, the `sort()` function sorts values as strings
###### `Sort` number Example:
``` javascript
const sortNum = [32, 64, 23, 2, 6, 1, 54, 0];
sortNum.sort(function(x, y){
    return x - y;
})
console.log(sortNum);
```
###### `Sort` highest and lowest number
``` javascript
console.log(sortNum[sortNum.length - 1])
```
``` javascript
console.log(sortNum[0]);
```
###### `Math.max` and `Math.min` for sort highest and lowest number
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
