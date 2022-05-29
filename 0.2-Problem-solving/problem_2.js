// 1. find duplicate number from an array
const numbers = [4, 9, 4, 23, 34, 98, 3, 9, 1, 23, 66, 34, 34];
const duplicates = numbers.filter(function(value, index, array){
    return array.indexOf(value) !== index
});
console.log(duplicates);

// 2. find unique number from an arrray
const num = [4, 9, 4, 23, 34, 98, 3, 9, 1, 23, 66, 34, 34];
const unique = num.filter(function(value, index, array){
    return array.indexOf(value) === index
});
afterSortUnique = unique.sort(function(a, b){
    return a - b;
})
console.log(unique);
console.log(afterSortUnique);