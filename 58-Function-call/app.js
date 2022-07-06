const mobile = {
    details: function(a, b){
        return "brand is " + this.brand + ", " + "price is " + this.price + " discount is " + (a + b);
    }
}
const firstMobile = {
    brand: "xiaomi",
    price: 344
}
console.log(mobile.details.call(firstMobile, 3, 2));