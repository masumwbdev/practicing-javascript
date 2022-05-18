##Javascript Note:

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
