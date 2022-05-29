const person = {
    firstName: "Masum",
    lastName : "Hossain",
    id       : 24,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
console.log(person.fullName());

// console.log(this);

const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"Miss",
    lastName: "Nasrin",
  }
  
  console.log(person1.fullName.call(person2));