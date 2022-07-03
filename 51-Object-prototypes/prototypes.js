function Phone(brand, model, price) {
    this.phoneBrand = brand;
    this.phoneModel = model;
    this.phonePrice = price;
}

const mi = new Phone("xiaomi", "m20", 2334);
console.log(mi);

Phone.prototype.location = "USA";
console.log(Phone);
console.log(mi.location);
const vivo = new Phone("vivo", "y21", 8987);
console.log(vivo);
console.log(vivo.location);