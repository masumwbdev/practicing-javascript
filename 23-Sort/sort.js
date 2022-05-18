// sort string
const mobile = ["Vivo", "Realme", "Xiaomi", "Oppo", "Samsung", "Apple", "Infinix"];
console.log(mobile.sort());
console.log(mobile.reverse());

// sort number
const sortNum = [32, 64, 23, 2, 6, 1, 54, 0];
sortNum.sort(function (x, y) {
    return x - y;
})
console.log(sortNum);

// randomly sorted
const sortNum2 = [32, 64, 23, 2, 6, 1, 54, 0];
sortNum2.sort(function () {
    return 0.5 - Math.random();
});
console.log("random num " + sortNum2);

// sorted highest number
const sortNum3 = [32, 64, 23, 2, 6, 1, 54];
sortNum3.sort(function (a , b){
    return a - b;
})

console.log(sortNum3[sortNum3.length - 1])

// math max
console.log(Math.max.apply(null, sortNum3));
// math min
console.log(Math.min.apply(null, sortNum3));

// sorted lowest number
console.log(sortNum3[0]);

// sort an object
const people = [
    {name: "John", age: 34},
    {name: "Katalin", age: 44},
    {name: "Jozsef", age: 27},
    {name: "Farkas", age: 31}
];
people.sort(function(m , n){
    return m.age - n.age;
});
console.log(people);

// sort string properties

people.sort(function(m,n){
    let c = m.name.toLowerCase();
    let d = n.name.toLocaleLowerCase();
    if(c < d) {
        return -1;
    }
    if(c > d){
        return 1;
    }
    return 0;
});
console.log(people);