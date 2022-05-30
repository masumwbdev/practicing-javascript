// 1. find duplicate number from an array
const numbers = [4, 9, 4, 23, 34, 98, 3, 9, 1, 23, 66, 34, 34];
const duplicates = numbers.filter(function (value, index, array) {
    return array.indexOf(value) !== index
});
console.log(duplicates);

// 2. find unique number from an arrray
const num = [4, 9, 4, 23, 34, 98, 3, 9, 1, 23, 66, 34, 34];
const unique = num.filter(function (value, index, array) {
    return array.indexOf(value) === index
});
afterSortUnique = unique.sort(function (a, b) {
    return a - b;
})
console.log(unique);
console.log(afterSortUnique);

// 3. নিচের sentence এ "the" শব্দটি কয়বার ব্যবহার করা হয়েছে। এবং প্রথমবার "the" কত নম্বর পজিশন এ পাওয়া গেছে?
const text = "Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways. Its Padma (Ganges), Meghna and Jamuna rivers create fertile plains, and travel by boat is common. On the southern coast, the Sundarbans, an enormous mangrove forest shared with Eastern India, is home to the royal Bengal tiger.";
const matches = text.match(/the/gi); // total
console.log(matches, matches ? matches.length : 0); // length
let position = text.search(/the/i); // first position
position = position >= 0 ? position : "Not found";
console.log(position);

/* 4.
- input: linearSearch(['a', 'b', 'c', 'd', 'a', 'c', 'e'], 'c')
- output: 2 or 'not found'
- problem: linearSearch() function ti implement kore dekhate hobe
*/
function linearSearch(arr, val) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return 'not found'
};
console.log(linearSearch(['a', 'b', 'c', 'd', 'a', 'c', 'e'], 'c'));

// 5. kono array theke sob theke boro string khuje ber korte hobe and tar index number dekhate hobe
function checkLongest(names) {
    let longestWord = '';
    for (n of names) {
        if (n.length > longestWord.length) {
            longestWord = n;
        }
    }
    return [longestWord, names.indexOf(longestWord)];
}
console.log(checkLongest(['anisul islam', 'learn with sumit', 'learn with hasin hayder', 'programming hero', 'learn with rabbil hasan']));