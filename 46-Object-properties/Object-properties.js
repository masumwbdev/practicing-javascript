const obj = {
    car: "Toyota",
    price: 3243
};
obj.country = "USA";
const {car, price, country} = obj;
console.log(car);
console.log(obj);
console.log(obj.price);
console.log(obj['price']);

let y = "car";
console.log(obj[y]);

// for in loop
// for(b in obj){
//     console.log(`looping ${b}`);
// };
let txt = " ";
for(b in obj){
    txt += obj[b];
};
console.log(txt);

// delete 
delete obj.price;
console.log(obj);

// nasted arrys and objects
const myObj2 = {
    fname: 'Jo',
    lname: 'kung',
    age: {
        young: 12,
        adult: 28
    },
    dts: [
        {color: "white" , country: "uk"},
        {height: 87, weight: 23}
    ]
};
console.log(myObj2);

// for of
for(m of myObj2.dts){
    console.log(m)
};