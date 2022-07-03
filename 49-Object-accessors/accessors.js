// getter 
const person = {
    fname: "john",
    lname: "doe",
    language: "bn",
    y : "bangla",
    get lang(){
        return this.language + " " + this.y;
    }
}
console.log(person.lang); 

// setter 
const person2 = {
    fname: "Masum",
    lname: "mia",
    language: "en",
    y : "",
    set lang(lg){
        return this.y = lg;
    }
}
person2.lang = "english";
console.log(person2.y);