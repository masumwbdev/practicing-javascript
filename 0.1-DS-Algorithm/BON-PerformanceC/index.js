function sumOfAll(n) {
    let total = 0;
    for(let i=0; i<=n; i++){
        total += i
    }
    return total
}
const p1 = performance.now();
console.log(sumOfAll(1000));
const p2 = performance.now();
console.log(p2-p1);

// best way for performance
function sumOfAllTwo(m){
    return m * (m+1) / 2
}
console.log(sumOfAllTwo(10));