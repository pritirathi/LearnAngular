var Vehicle = /** @class */ (function () {
    function Vehicle(speed, wheels) {
        this.dis = function () { return console.log('fat arrow function from class'); };
        this.speed = speed;
        this.wheels = wheels;
    }
    Vehicle.prototype.display = function () {
        console.log("speed of vehicle= " + this.speed + " and no of wheels=" + this.wheels);
    };
    return Vehicle;
}());
var newVehicle = new Vehicle('fast', 2);
newVehicle.display();
newVehicle.dis();
