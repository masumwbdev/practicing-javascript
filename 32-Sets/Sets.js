const my_name = new Set(["m", "a", "s", "u", "m"]);
// console.log(new Set(my_name));
console.log(my_name);
my_name.add("k");
my_name.add("k");
console.log(my_name);

let text = "";
my_name.forEach(function(value){
    text += value;
});
console.log(text);

// values method
console.log(my_name.values());
let myTxt = "";
for(const x of my_name.values()){
    myTxt += x;
    console.log(x);
}
console.log(myTxt);