// const num = [45, 23, 45, 23, 64];
// for(let i = 0; i < num.length; i++){
//     console.log(num[i]);
// };

const num = [45, 23, 45, 23, 64];
for(n of num){
    console.log(n);
};

const obj = {
    one: 1,
    two: 2,
    three: 3
};
for(o in obj){
    console.log(o);
};