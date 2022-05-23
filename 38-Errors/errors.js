// try{
//     addLert = "I love me"
// } catch(err){
//     console.log(err.message);
// };

let a = "444";

// try catch and throw
try {
    if (a == "") throw "Empty";
    if (isNaN(a)) throw "not a number";
    a = Number(a);
    if (a < 10) throw "too low";
    if (a > 10) throw{
        message: "too high",
        name: 101
    };
} catch (err) {
    console.log(err.message)
}