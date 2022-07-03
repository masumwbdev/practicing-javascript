// constructor function 
function Person(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
}
const masum = new Person("Masum", "Mia", 25);
const john = new Person("john", "smith", 23);
john.salary = 2312;
console.log(masum);
console.log(john);