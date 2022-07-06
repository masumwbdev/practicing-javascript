function myFunc(a, b){
    return a + b;
}
console.log(window.myFunc(4, 5));

const myObj = {
    fname: "Masum",
    lname: "Mia",
    fullName: function(){
        return this;
    }
}
console.log(myObj.fullName())

// function constractore
function myFun(p1, p2){
    this.fname = p1;
    this.lname = p2;
}
const myObject = new myFun("Masum", "Mia");
console.log(myObject.fname);