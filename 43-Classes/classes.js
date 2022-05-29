class Mobile{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    best(){
        console.log(`${this.name} is the best phone in the world.`)
    }
}

const realme = new Mobile("Realme", 19800);
const xiaomi = new Mobile("Xiaomi", 49900);
realme.best();
console.log(realme, xiaomi);