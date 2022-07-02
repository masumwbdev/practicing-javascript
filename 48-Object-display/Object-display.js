const myObj = {
    brand: "vivo",
    model: "y20"
}

let txt = " ";
for(y in myObj){
    txt += myObj[y] + "</br>";
}
console.log(txt)
document.getElementById("demo").innerHTML = txt;

// console.log(Object.values(myObj));

// const m = Object.values(myObj);
// for(x in m){ 
//     console.log(m);
// }
console.log(JSON.stringify(myObj));
console.log(JSON.stringify(new Date()));