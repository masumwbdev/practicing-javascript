const fruits = new Map();

fruits.set("banana", 56);
fruits.set(34, "apple");
fruits.set("banana", 888);
fruits.delete(34);
console.log(fruits);