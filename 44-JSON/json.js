const myObj = {
    name: "Albert",
    age: 38
};
console.log(JSON.stringify(myObj));

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
const obj = JSON.parse(text);
console.log(obj.employees[2].firstName);