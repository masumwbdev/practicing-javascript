const firstCar = {
    carName: "Toyota",
    carModel: "RVX 750",
    carWeight: "900 kg",
    carColor: "Gray",
    anotherCar: {
        anotherCarName: "Fiat",
        anotherCarModel: "S 56",
        anotherCarColor: "yellow",
        newBike: {
            bikeName: "Yamaha",
            bikeModel: "23 FTC",
            bikeColor: "Red"
        }
    },
    start: function (){
        console.log("Car has started");
    },
    drive: function (){
        console.log("Car is driving");
    },
    break: function(){
        console.log("Break the car");
    },
    stop: function(){
        console.log("Stop the car");
    }
}
console.log(firstCar.carName);
console.log(firstCar.carWeight);
console.log(firstCar.anotherCar.newBike.bikeModel);
firstCar.stop();
console.log(firstCar.anotherCar["anotherCarName"]);