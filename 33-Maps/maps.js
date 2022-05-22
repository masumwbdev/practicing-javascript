// create a map
const phones = new Map();

// set map values
phones.set('samsung', 100);
phones.set('vivo', 55);
phones.set('oppo', 90);
phones.set('realme', 200);

// delete
phones.delete('realme');

// check single values
console.log(phones.get('samsung'));

console.log(phones);

// has for check
console.log(phones.has('oppo'));